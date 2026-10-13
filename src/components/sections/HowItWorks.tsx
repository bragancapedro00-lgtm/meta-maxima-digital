import { HOW_IT_WORKS } from "@/content/landing";
import { Icon } from "@/components/ui/Icon";
import { ScrollCta } from "@/components/ui/ScrollCta";
import styles from "./HowItWorks.module.css";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section" aria-labelledby="como-funciona-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.side}>
          <h2 id="como-funciona-title" className="h2" data-reveal>
            Da primeira conversa a <span className="accent">um plano de ação.</span>
          </h2>
          <p className={styles.note}>
            <Icon name="info" size={18} />
            {HOW_IT_WORKS.note}
          </p>
          <ScrollCta location="how_it_works">{HOW_IT_WORKS.cta}</ScrollCta>
        </div>

        <ol className={styles.steps}>
          {HOW_IT_WORKS.steps.map((step, i) => (
            <li
              key={step.title}
              className={styles.step}
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <p className={`mono ${styles.label}`}>{step.label}</p>
              <div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
