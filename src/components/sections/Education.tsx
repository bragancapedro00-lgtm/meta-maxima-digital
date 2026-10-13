import { EDUCATION, SEGMENT_SCHOOL } from "@/content/landing";
import { Icon } from "@/components/ui/Icon";
import { ScrollCta } from "@/components/ui/ScrollCta";
import styles from "./Education.module.css";

export function Education() {
  return (
    <section id="escolas" className={`section ${styles.section}`} aria-labelledby="escolas-title">
      <div className="container">
        <div className={styles.panel}>
          <div className={styles.copy}>
            <p className={styles.segment}>
              <Icon name="school" size={18} />
              Para escolas e instituições de ensino
            </p>
            <h2 id="escolas-title" className="h2" data-reveal>
              Sua escola precisa de <span className="accent">mais matrículas,</span> não apenas de mais
              alcance.
            </h2>
            <p className="lead">{EDUCATION.text}</p>
            <ul className={styles.fronts}>
              {EDUCATION.fronts.map((front) => (
                <li key={front}>
                  <Icon name="check" size={16} strokeWidth={2.25} />
                  {front.replace(/\.$/, "")}
                </li>
              ))}
            </ul>
            <ScrollCta location="education" segment={SEGMENT_SCHOOL}>
              {EDUCATION.cta}
            </ScrollCta>
          </div>

          <figure className={styles.journey} aria-labelledby="jornada-legenda">
            <div className={styles.journeyHead}>
              <p className={styles.journeyTitle}>Jornada até a matrícula</p>
              <span className={`mono ${styles.tag}`}>Conceitual</span>
            </div>
            <ol className={styles.journeySteps}>
              {EDUCATION.journey.map((step, i) => (
                <li key={step} className={i === EDUCATION.journey.length - 1 ? styles.last : ""}>
                  <span className={styles.dot} aria-hidden="true" />
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <figcaption id="jornada-legenda" className={styles.caption}>
              Cada etapa precisa de acompanhamento para o interesse virar matrícula.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
