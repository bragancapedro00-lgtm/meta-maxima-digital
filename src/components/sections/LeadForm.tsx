"use client";

import { useState, useId } from "react";
import Link from "next/link";
import { FORM } from "@/content/landing";
import { Icon } from "@/components/ui/Icon";
import { FORM_ANCHOR } from "@/components/ui/ScrollCta";
import { WHATSAPP_NUMBER, isWhatsAppConfigured, PRIVACY_POLICY_URL } from "@/config/site";
import {
  maskPhoneInput,
  normalizeBrazilianPhone,
  buildLeadMessage,
  buildWhatsAppUrl,
  type LeadData,
} from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import styles from "./LeadForm.module.css";

type FormErrors = {
  nome?: string;
  whatsapp?: string;
  segmento?: string;
};

export function LeadForm() {
  const formId = useId();
  const [formData, setFormData] = useState<LeadData>({
    nome: "",
    whatsapp: "",
    segmento: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [hasStarted, setHasStarted] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleChange = (field: keyof LeadData, value: string) => {
    if (!hasStarted) {
      setHasStarted(true);
      track("form_start");
    }

    if (field === "whatsapp") {
      value = maskPhoneInput(value);
    }

    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = "Por favor, informe seu nome.";
    } else if (formData.nome.trim().length < 3) {
      newErrors.nome = "Por favor, informe um nome válido (mínimo 3 caracteres).";
    }

    const normalizedPhone = normalizeBrazilianPhone(formData.whatsapp);
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "Por favor, informe seu WhatsApp com DDD.";
    } else if (!normalizedPhone) {
      newErrors.whatsapp = "Digite um número com DDD válido (ex.: (21) 98439-3482).";
    }

    if (!formData.segmento) {
      newErrors.segmento = "Selecione o segmento da sua empresa.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    track("form_submit_attempt");

    if (!validate()) {
      const firstErrorField = (Object.keys(errors)[0] as keyof LeadData) || "nome";
      const el = document.getElementById(`${formId}-${firstErrorField}`);
      el?.focus();
      return;
    }

    const message = buildLeadMessage(formData);
    setSubmittedMessage(message);

    if (!isWhatsAppConfigured()) {
      return;
    }

    const url = buildWhatsAppUrl(message, WHATSAPP_NUMBER);
    setWhatsappUrl(url);

    if (url) {
      // Dispara o evento oficial 'lead' no Meta Pixel apenas após validação estrita
      track("lead", {
        segment: formData.segmento,
      });

      // Abre WhatsApp em nova aba com parâmetros de segurança
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleCopyMessage = async () => {
    if (!submittedMessage) return;
    try {
      await navigator.clipboard.writeText(submittedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {}
  };

  return (
    <section id={FORM_ANCHOR} className={`section ${styles.section}`} aria-labelledby="form-heading">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.intro}>
            <span className={styles.badge}>
              <Icon name="target" size={16} />
              Diagnóstico Estratégico Gratuito
            </span>
            <h2 id="form-heading" className={`h2 ${styles.title}`}>
              {FORM.title}
            </h2>
            <p className="lead">{FORM.subtitle}</p>

            <div className={styles.stepsGuide}>
              <p className={styles.guideTitle}>Como funciona o próximo passo:</p>
              <ol className={styles.guideList}>
                <li>
                  <span className={styles.guideNum}>1</span>
                  <span>Você preenche seu nome, WhatsApp com DDD e segmento.</span>
                </li>
                <li>
                  <span className={styles.guideNum}>2</span>
                  <span>O link abre uma conversa no WhatsApp com uma mensagem pronta preenchida.</span>
                </li>
                <li>
                  <span className={styles.guideNum}>3</span>
                  <span>Você confirma o envio dentro do WhatsApp para iniciar a conversa com a equipe.</span>
                </li>
              </ol>
            </div>
          </div>

          <div className={styles.card}>
            {submittedMessage && (
              <div className={styles.confirmationBox} role="alert" aria-live="polite">
                <div className={styles.confirmHeader}>
                  <div className={styles.confirmIconWrap}>
                    <Icon name="check" size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className={styles.confirmTitle}>WhatsApp aberto com sua mensagem!</h3>
                    <p className={styles.confirmDesc}>
                      Sua mensagem foi formatada. Lembre-se de tocar em <strong>Enviar</strong> no seu WhatsApp para falar com a equipe.
                    </p>
                  </div>
                </div>

                <div className={styles.previewBox}>
                  <p className={styles.previewLabel}>Pré-visualização da mensagem:</p>
                  <pre className={styles.previewText}>{submittedMessage}</pre>
                </div>

                <div className={styles.confirmActions}>
                  {whatsappUrl && (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary"
                    >
                      <Icon name="whatsapp" size={18} />
                      <span>Abrir conversa no WhatsApp</span>
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="btn btn--secondary"
                  >
                    <Icon name={copied ? "check" : "copy"} size={16} />
                    <span>{copied ? "Mensagem copiada!" : "Copiar texto da mensagem"}</span>
                  </button>
                </div>
              </div>
            )}

            {!submittedMessage && (
              <form onSubmit={handleSubmit} noValidate className={styles.form}>
                {/* Campo 1: Nome */}
                <div className={styles.field}>
                  <label htmlFor={`${formId}-nome`} className={styles.label}>
                    Nome completo <span className={styles.req} aria-hidden="true">*</span>
                  </label>
                  <input
                    id={`${formId}-nome`}
                    name="nome"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Seu nome ou como prefere ser chamado"
                    value={formData.nome}
                    onChange={(e) => handleChange("nome", e.target.value)}
                    aria-invalid={!!errors.nome}
                    aria-describedby={errors.nome ? `${formId}-nome-error` : undefined}
                    className={`${styles.input} ${errors.nome ? styles.inputError : ""}`}
                  />
                  {errors.nome && (
                    <p id={`${formId}-nome-error`} className={styles.errorText} role="alert">
                      <Icon name="alert" size={14} />
                      {errors.nome}
                    </p>
                  )}
                </div>

                {/* Campo 2: WhatsApp com DDD */}
                <div className={styles.field}>
                  <label htmlFor={`${formId}-whatsapp`} className={styles.label}>
                    WhatsApp com DDD <span className={styles.req} aria-hidden="true">*</span>
                  </label>
                  <input
                    id={`${formId}-whatsapp`}
                    name="whatsapp"
                    type="tel"
                    autoComplete="tel"
                    required
                    placeholder="(DDD) 90000-0000"
                    value={formData.whatsapp}
                    onChange={(e) => handleChange("whatsapp", e.target.value)}
                    aria-invalid={!!errors.whatsapp}
                    aria-describedby={errors.whatsapp ? `${formId}-whatsapp-error` : undefined}
                    className={`${styles.input} ${errors.whatsapp ? styles.inputError : ""}`}
                  />
                  {errors.whatsapp && (
                    <p id={`${formId}-whatsapp-error`} className={styles.errorText} role="alert">
                      <Icon name="alert" size={14} />
                      {errors.whatsapp}
                    </p>
                  )}
                </div>

                {/* Campo 3: Segmento */}
                <div className={styles.field}>
                  <label htmlFor={`${formId}-segmento`} className={styles.label}>
                    Segmento da empresa <span className={styles.req} aria-hidden="true">*</span>
                  </label>
                  <div className={styles.selectWrap}>
                    <select
                      id={`${formId}-segmento`}
                      name="segmento"
                      required
                      value={formData.segmento}
                      onChange={(e) => handleChange("segmento", e.target.value)}
                      aria-invalid={!!errors.segmento}
                      aria-describedby={errors.segmento ? `${formId}-segmento-error` : undefined}
                      className={`${styles.select} ${errors.segmento ? styles.inputError : ""}`}
                    >
                      <option value="" disabled>
                        Selecione seu segmento...
                      </option>
                      {FORM.segments.map((seg) => (
                        <option key={seg} value={seg}>
                          {seg}
                        </option>
                      ))}
                    </select>
                    <Icon name="chevronDown" size={16} className={styles.selectArrow} />
                  </div>
                  {errors.segmento && (
                    <p id={`${formId}-segmento-error`} className={styles.errorText} role="alert">
                      <Icon name="alert" size={14} />
                      {errors.segmento}
                    </p>
                  )}
                </div>

                {/* Botão de envio */}
                <div className={styles.submitWrap}>
                  <button type="submit" className={`btn btn--primary btn--block ${styles.submitBtn}`}>
                    <span>{FORM.submit}</span>
                    <Icon name="arrowRight" size={18} />
                  </button>
                  <p className={styles.microcopy}>
                    Seus dados serão utilizados para dar continuidade ao contato solicitado. Consulte nossa{" "}
                    <Link href={PRIVACY_POLICY_URL} className={styles.privacyLink}>
                      Política de Privacidade
                    </Link>
                    .
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
