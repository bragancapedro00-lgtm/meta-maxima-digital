import { METHOD } from "@/content/landing";
import { ScrollCta } from "@/components/ui/ScrollCta";
import styles from "./Method.module.css";

export function Method() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="method-title">
      <div className="container">
        <div className={styles.header}>
          <h2 id="method-title" className="h2">
            {METHOD.title}
          </h2>
          <p className="lead">{METHOD.subtitle}</p>
        </div>

        <ol className={styles.stepsRail} aria-label="Metodologia em 4 etapas">
          {METHOD.steps.map((step, idx) => (
            <li key={step.name} className={styles.stepItem}>
              {idx > 0 && <span className={styles.connector} aria-hidden="true" />}
              <div className={styles.stepNode}>
                <span className={`mono ${styles.stepNum}`}>{step.num}</span>
              </div>
              <div className={styles.stepBody}>
                <h3 className={styles.stepName}>{step.name}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className={styles.ctaWrap}>
          <ScrollCta location="method">
            {METHOD.cta}
          </ScrollCta>
        </div>
      </div>
    </section>
  );
}
