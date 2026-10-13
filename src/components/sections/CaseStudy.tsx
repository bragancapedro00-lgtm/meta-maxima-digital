import { CASE_STUDY } from "@/content/landing";
import { ScrollCta } from "@/components/ui/ScrollCta";
import { Icon } from "@/components/ui/Icon";
import styles from "./CaseStudy.module.css";

export function CaseStudy() {
  return (
    <section className={`section section--paper ${styles.section}`} aria-labelledby="case-study-title">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.tagWrap}>
            <span className={`mono ${styles.tag}`}>Estudo de Caso Real</span>
          </div>
          <h2 id="case-study-title" className="h2">
            {CASE_STUDY.title}
          </h2>
          <p className="lead">{CASE_STUDY.subtitle}</p>
        </div>

        {/* Bloco editorial enxuto do case Instituto Meta Máxima */}
        <article className={styles.caseCard}>
          <div className={styles.cardHeader}>
            <div>
              <h3 className={styles.caseEntity}>Instituto Meta Máxima</h3>
              <p className={styles.caseNiche}>Instituição de Ensino & Cursos Profissionalizantes</p>
            </div>
            <span className={styles.verifiedBadge}>
              <Icon name="check" size={14} strokeWidth={2.5} />
              Operação de Marketing & Atendimento
            </span>
          </div>

          <div className={styles.gridDetails}>
            <div className={styles.detailBlock}>
              <h4 className={styles.detailLabel}>Contexto</h4>
              <p className={styles.detailText}>{CASE_STUDY.context}</p>
            </div>

            <div className={styles.detailBlock}>
              <h4 className={styles.detailLabel}>O que foi implementado</h4>
              <p className={styles.detailText}>{CASE_STUDY.whatWasDone}</p>
            </div>
          </div>

          {/* Comparativo de Indicadores */}
          <div className={styles.metricsBox}>
            <div className={styles.metricRow}>
              <div className={styles.metricCol}>
                <span className={styles.metricStage}>Antes da Estruturação</span>
                <p className={styles.metricValPlaceholder}>
                  Taxa de conversão de atendimento reduzida e leads sem acompanhamento rápido no WhatsApp
                </p>
              </div>

              <div className={styles.metricDivider} aria-hidden="true">
                <Icon name="arrowRight" size={18} />
              </div>

              <div className={styles.metricCol}>
                <span className={styles.metricStage}>Após Implementação</span>
                <p className={styles.metricValPlaceholder}>
                  Atendimento estruturado com qualificação imediata, criativos orientados à oferta e integração da jornada de matrícula
                </p>
              </div>
            </div>

            <aside className={styles.auditNotice}>
              <Icon name="info" size={15} />
              <p>{CASE_STUDY.verificationNotice}</p>
            </aside>
          </div>

          <div className={styles.cardFooter}>
            <ScrollCta location="case_study">
              {CASE_STUDY.cta}
            </ScrollCta>
          </div>
        </article>
      </div>
    </section>
  );
}
