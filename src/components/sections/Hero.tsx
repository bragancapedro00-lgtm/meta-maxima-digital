import { HERO } from "@/content/landing";
import { ScrollCta } from "@/components/ui/ScrollCta";
import { Icon } from "@/components/ui/Icon";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <span>{HERO.badge}</span>
          </div>

          <h1 id="hero-title" className={`h1 ${styles.title}`}>
            Sua escola precisa de{" "}
            <span className="accent">mais matrículas,</span> não apenas de mais leads.
          </h1>

          <p className={`lead ${styles.subtitle}`}>{HERO.subtitle}</p>

          <div className={styles.actionWrap}>
            <ScrollCta location="hero_primary" size="md" className={styles.ctaBtn}>
              {HERO.cta}
            </ScrollCta>
            <p className={styles.micro}>{HERO.microcopy}</p>
          </div>

          {/* Prova rápida qualitativa e identificada como case */}
          <aside className={styles.quickProof} aria-label="Prova rápida de case">
            <div className={styles.proofHeader}>
              <Icon name="check" size={16} strokeWidth={2.5} className={styles.proofIcon} />
              <span className={`mono ${styles.proofTag}`}>{HERO.quickProof.tag}</span>
            </div>
            <p className={styles.proofText}>{HERO.quickProof.text}</p>
          </aside>
        </div>

        {/* Recurso visual complementar único — Mapa de jornada educacional */}
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.visualCard}>
            <div className={styles.visualHead}>
              <span className={styles.visualTitle}>Jornada Integrada da Escola</span>
              <span className={`mono ${styles.visualBadge}`}>Foco em Matrículas</span>
            </div>

            <ol className={styles.journeyFlow}>
              <li className={styles.flowItem}>
                <div className={styles.flowNode}>1</div>
                <div className={styles.flowContent}>
                  <p className={styles.flowTitle}>Anúncio & Criativos</p>
                  <p className={styles.flowDesc}>Captação direcionada de pais e interessados</p>
                </div>
              </li>
              <li className={styles.flowItem}>
                <div className={styles.flowNode}>2</div>
                <div className={styles.flowContent}>
                  <p className={styles.flowTitle}>Atendimento WhatsApp</p>
                  <p className={styles.flowDesc}>Qualificação imediata sem esfriar a oportunidade</p>
                </div>
              </li>
              <li className={`${styles.flowItem} ${styles.flowItemHighlight}`}>
                <div className={styles.flowNode}>3</div>
                <div className={styles.flowContent}>
                  <p className={styles.flowTitle}>Fechamento & Matrícula</p>
                  <p className={styles.flowDesc}>Acompanhamento comercial até a decisão</p>
                </div>
              </li>
            </ol>

            <div className={styles.visualFooter}>
              <Icon name="target" size={14} />
              <span>Conexão contínua entre marketing e fechamento</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
