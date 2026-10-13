"use client";

import { useEffect, useState, useId } from "react";
import { FORM, SEGMENT_SCHOOL } from "@/content/landing";
import { Icon } from "@/components/ui/Icon";
import { FORM_ANCHOR, PRESELECT_EVENT } from "@/components/ui/ScrollCta";
import { WHATSAPP_NUMBER, isWhatsAppConfigured, PRIVACY_POLICY_URL } from "@/config/site";
import {
  maskPhoneInput,
  normalizeBrazilianPhone,
  buildLeadMessage,
  buildWhatsAppUrl,
  type LeadData,
} from "@/lib/whatsapp";
import { getCampaignParams } from "@/lib/campaign";
import { track } from "@/lib/analytics";
import styles from "./LeadForm.module.css";

type FormErrors = Partial<Record<keyof LeadData, string>>;

export function LeadForm() {
  const formId = useId();
  const [formData, setFormData] = useState<LeadData>({
    nome: "",
    whatsapp: "",
    empresa: "",
    segmento: "",
    objetivo: "",
    situacao: "",
    faturamento: "",
    desafio: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [hasStarted, setHasStarted] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [configPending, setConfigPending] = useState(false);

  // Escuta evento de pré-seleção (ex.: botão da seção de educação)
  useEffect(() => {
    const handlePreselect = (e: Event) => {
      const customEvent = e as CustomEvent<{ segment: string }>;
      if (customEvent.detail?.segment) {
        setFormData((prev) => ({ ...prev, segmento: customEvent.detail.segment }));
      }
    };

    window.addEventListener(PRESELECT_EVENT, handlePreselect);
    return () => window.removeEventListener(PRESELECT_EVENT, handlePreselect);
  }, []);

  const handleChange = (
    field: keyof LeadData,
    value: string
  ) => {
    if (!hasStarted) {
      setHasStarted(true);
      track("form_start", { first_field: field });
    }

    if (field === "whatsapp") {
      value = maskPhoneInput(value);
    }

    setFormData((prev) => ({ ...prev, [field]: value }));

    // Limpa erro do campo ao digitar/selecionar
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
      newErrors.nome = "Por favor, informe seu nome completo.";
    } else if (formData.nome.trim().length < 3) {
      newErrors.nome = "Por favor, informe um nome válido.";
    }

    const normalizedPhone = normalizeBrazilianPhone(formData.whatsapp);
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "Por favor, informe seu WhatsApp com DDD.";
    } else if (!normalizedPhone) {
      newErrors.whatsapp = "Digite um número com DDD válido (ex.: (21) 98439-3482).";
    }

    if (!formData.empresa.trim()) {
      newErrors.empresa = "Por favor, informe o nome da sua empresa.";
    }

    if (!formData.segmento) {
      newErrors.segmento = "Selecione o segmento do seu negócio.";
    }

    if (!formData.objetivo) {
      newErrors.objetivo = "Selecione seu objetivo principal.";
    }

    if (!formData.situacao) {
      newErrors.situacao = "Selecione a situação atual do seu marketing.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    track("form_submit_attempt", {
      segment: formData.segmento || "unselected",
      objective: formData.objetivo || "unselected",
    });

    if (!validate()) {
      // Foca no primeiro campo com erro
      const firstErrorField = Object.keys(errors)[0] || "nome";
      const el = document.getElementById(`${formId}-${firstErrorField}`);
      el?.focus();
      return;
    }

    const campaign = getCampaignParams();
    const message = buildLeadMessage(formData, campaign as Record<string, string>);
    setSubmittedMessage(message);

    if (!isWhatsAppConfigured()) {
      setConfigPending(true);
      return;
    }

    const url = buildWhatsAppUrl(message, WHATSAPP_NUMBER);
    setWhatsappUrl(url);

    if (url) {
      track("whatsapp_open", {
        segment: formData.segmento,
        objective: formData.objetivo,
        has_campaign: Object.keys(campaign).length > 0,
      });

      // Abre WhatsApp em nova aba mantendo segurança
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleCopyMessage = async () => {
    if (!submittedMessage) return;
    try {
      await navigator.clipboard.writeText(submittedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Falha silenciosa no clipboard se bloqueado
    }
  };

  return (
    <section id={FORM_ANCHOR} className={`section ${styles.section}`} aria-labelledby="form-heading">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.intro}>
            <span className={styles.badge}>
              <Icon name="route" size={16} />
              Conversa Estratégica
            </span>
            <h2 id="form-heading" className={`h2 ${styles.title}`}>
              Vamos entender como sua empresa <span className="accent">pode vender mais.</span>
            </h2>
            <p className="lead">{FORM.subtitle}</p>

            <div className={styles.stepsGuide}>
              <p className={styles.guideTitle}>O que acontece depois de preencher:</p>
              <ol className={styles.guideList}>
                {FORM.nextSteps.map((s, idx) => (
                  <li key={s.title}>
                    <span className={styles.guideStepNum}>{idx + 1}</span>
                    <div>
                      <strong>{s.title}:</strong> <span>{s.text}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className={styles.card}>
            {submittedMessage && (
              <div className={styles.confirmationBox} role="alert">
                <div className={styles.confirmHeader}>
                  <Icon name="check" size={24} className={styles.checkIcon} />
                  <div>
                    <h3 className={styles.confirmTitle}>Dados prontos com sucesso!</h3>
                    <p className={styles.confirmDesc}>
                      {configPending
                        ? "O formulário está validado, mas o número de WhatsApp comercial da agência está em fase de configuração pendente."
                        : FORM.success}
                    </p>
                  </div>
                </div>

                {!configPending && whatsappUrl && (
                  <div className={styles.confirmActions}>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary btn--block"
                      onClick={() =>
                        track("whatsapp_open", {
                          type: "reopen",
                          segment: formData.segmento,
                        })
                      }
                    >
                      <Icon name="whatsapp" size={20} />
                      Confirmar envio no WhatsApp
                    </a>
                  </div>
                )}

                <div className={styles.messagePreview}>
                  <div className={styles.previewTop}>
                    <span className="mono">Mensagem gerada:</span>
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className={styles.copyBtn}
                      aria-label="Copiar mensagem para a área de transferência"
                    >
                      <Icon name={copied ? "check" : "copy"} size={14} />
                      {copied ? "Copiada!" : "Copiar texto"}
                    </button>
                  </div>
                  <pre className={styles.previewText}>{submittedMessage}</pre>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className={styles.form}>
              <div className={styles.formGrid}>
                {/* 1. Nome completo */}
                <div className={styles.field}>
                  <label htmlFor={`${formId}-nome`} className={styles.label}>
                    Nome completo <span className={styles.required}>*</span>
                  </label>
                  <input
                    id={`${formId}-nome`}
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={(e) => handleChange("nome", e.target.value)}
                    placeholder="Seu nome completo"
                    className={`${styles.input} ${errors.nome ? styles.hasError : ""}`}
                    aria-required="true"
                    aria-invalid={!!errors.nome}
                    aria-describedby={errors.nome ? `${formId}-err-nome` : undefined}
                  />
                  {errors.nome && (
                    <span id={`${formId}-err-nome`} className={styles.errorText} role="alert">
                      {errors.nome}
                    </span>
                  )}
                </div>

                {/* 2. WhatsApp com DDD */}
                <div className={styles.field}>
                  <label htmlFor={`${formId}-whatsapp`} className={styles.label}>
                    WhatsApp com DDD <span className={styles.required}>*</span>
                  </label>
                  <input
                    id={`${formId}-whatsapp`}
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={(e) => handleChange("whatsapp", e.target.value)}
                    placeholder="(21) 98439-3482"
                    maxLength={16}
                    className={`${styles.input} ${errors.whatsapp ? styles.hasError : ""}`}
                    aria-required="true"
                    aria-invalid={!!errors.whatsapp}
                    aria-describedby={errors.whatsapp ? `${formId}-err-whatsapp` : undefined}
                  />
                  {errors.whatsapp && (
                    <span id={`${formId}-err-whatsapp`} className={styles.errorText} role="alert">
                      {errors.whatsapp}
                    </span>
                  )}
                </div>

                {/* 3. Nome da empresa */}
                <div className={styles.field}>
                  <label htmlFor={`${formId}-empresa`} className={styles.label}>
                    Nome da empresa <span className={styles.required}>*</span>
                  </label>
                  <input
                    id={`${formId}-empresa`}
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={(e) => handleChange("empresa", e.target.value)}
                    placeholder="Nome do seu negócio ou instituição"
                    className={`${styles.input} ${errors.empresa ? styles.hasError : ""}`}
                    aria-required="true"
                    aria-invalid={!!errors.empresa}
                    aria-describedby={errors.empresa ? `${formId}-err-empresa` : undefined}
                  />
                  {errors.empresa && (
                    <span id={`${formId}-err-empresa`} className={styles.errorText} role="alert">
                      {errors.empresa}
                    </span>
                  )}
                </div>

                {/* 4. Segmento do negócio */}
                <div className={styles.field}>
                  <label htmlFor={`${formId}-segmento`} className={styles.label}>
                    Segmento do negócio <span className={styles.required}>*</span>
                  </label>
                  <div className={styles.selectWrapper}>
                    <select
                      id={`${formId}-segmento`}
                      name="segmento"
                      value={formData.segmento}
                      onChange={(e) => handleChange("segmento", e.target.value)}
                      className={`${styles.select} ${errors.segmento ? styles.hasError : ""}`}
                      aria-required="true"
                      aria-invalid={!!errors.segmento}
                      aria-describedby={errors.segmento ? `${formId}-err-segmento` : undefined}
                    >
                      <option value="">Selecione o segmento...</option>
                      {FORM.segments.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <Icon name="chevronDown" size={16} className={styles.selectArrow} />
                  </div>
                  {errors.segmento && (
                    <span id={`${formId}-err-segmento`} className={styles.errorText} role="alert">
                      {errors.segmento}
                    </span>
                  )}
                </div>

                {/* 5. Principal objetivo */}
                <div className={styles.field}>
                  <label htmlFor={`${formId}-objetivo`} className={styles.label}>
                    Principal objetivo <span className={styles.required}>*</span>
                  </label>
                  <div className={styles.selectWrapper}>
                    <select
                      id={`${formId}-objetivo`}
                      name="objetivo"
                      value={formData.objetivo}
                      onChange={(e) => handleChange("objetivo", e.target.value)}
                      className={`${styles.select} ${errors.objetivo ? styles.hasError : ""}`}
                      aria-required="true"
                      aria-invalid={!!errors.objetivo}
                      aria-describedby={errors.objetivo ? `${formId}-err-objetivo` : undefined}
                    >
                      <option value="">Selecione o objetivo principal...</option>
                      {FORM.objectives.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                    <Icon name="chevronDown" size={16} className={styles.selectArrow} />
                  </div>
                  {errors.objetivo && (
                    <span id={`${formId}-err-objetivo`} className={styles.errorText} role="alert">
                      {errors.objetivo}
                    </span>
                  )}
                </div>

                {/* 6. Situação atual do marketing */}
                <div className={styles.field}>
                  <label htmlFor={`${formId}-situacao`} className={styles.label}>
                    Situação atual do marketing <span className={styles.required}>*</span>
                  </label>
                  <div className={styles.selectWrapper}>
                    <select
                      id={`${formId}-situacao`}
                      name="situacao"
                      value={formData.situacao}
                      onChange={(e) => handleChange("situacao", e.target.value)}
                      className={`${styles.select} ${errors.situacao ? styles.hasError : ""}`}
                      aria-required="true"
                      aria-invalid={!!errors.situacao}
                      aria-describedby={errors.situacao ? `${formId}-err-situacao` : undefined}
                    >
                      <option value="">Selecione a situação atual...</option>
                      {FORM.situations.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                    <Icon name="chevronDown" size={16} className={styles.selectArrow} />
                  </div>
                  {errors.situacao && (
                    <span id={`${formId}-err-situacao`} className={styles.errorText} role="alert">
                      {errors.situacao}
                    </span>
                  )}
                </div>

                {/* 7. Faixa de faturamento mensal (opcional) */}
                <div className={styles.field}>
                  <label htmlFor={`${formId}-faturamento`} className={styles.label}>
                    Faturamento mensal <span className={styles.optional}>(opcional)</span>
                  </label>
                  <div className={styles.selectWrapper}>
                    <select
                      id={`${formId}-faturamento`}
                      name="faturamento"
                      value={formData.faturamento}
                      onChange={(e) => handleChange("faturamento", e.target.value)}
                      className={styles.select}
                    >
                      <option value="">Selecione a faixa (opcional)...</option>
                      {FORM.revenues.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                    <Icon name="chevronDown" size={16} className={styles.selectArrow} />
                  </div>
                </div>

                {/* 8. Campo aberto opcional: principal desafio */}
                <div className={`${styles.field} ${styles.fullWidth}`}>
                  <label htmlFor={`${formId}-desafio`} className={styles.label}>
                    Conte brevemente qual é o seu principal desafio hoje{" "}
                    <span className={styles.optional}>(opcional)</span>
                  </label>
                  <textarea
                    id={`${formId}-desafio`}
                    name="desafio"
                    rows={3}
                    value={formData.desafio}
                    onChange={(e) => handleChange("desafio", e.target.value)}
                    placeholder="Ex.: Recebo muitos curiosos no WhatsApp mas pouca gente fecha; ou quero aumentar o número de matrículas no próximo semestre..."
                    className={styles.textarea}
                  />
                </div>
              </div>

              <div className={styles.footer}>
                <button type="submit" className="btn btn--primary btn--block">
                  <Icon name="whatsapp" size={20} />
                  <span>{FORM.submit}</span>
                </button>

                <p className={styles.privacyNote}>
                  {FORM.privacyNote}{" "}
                  {PRIVACY_POLICY_URL && (
                    <a href={PRIVACY_POLICY_URL} className={styles.privacyLink}>
                      Política de Privacidade
                    </a>
                  )}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
