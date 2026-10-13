import { PROBLEM } from "@/content/landing";
import { ScrollCta } from "@/components/ui/ScrollCta";
import styles from "./Problem.module.css";

export function Problem() {
  return (
    <section className="section section--paper" aria-labelledby="problema-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <h2 id="problema-title" className="h2" data-reveal>
            {PROBLEM.title}
          </h2>
          <p className="lead" data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            {PROBLEM.subtitle}
          </p>
        </div>

        <ol className={styles.leaks} aria-label="Situações comuns entre o investimento e a venda">
          {PROBLEM.items.map((item, i) => (
            <li
              key={item.title}
              className={styles.card}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
            >
              <span className={styles.marker} aria-hidden="true" />
              <p className={`mono ${styles.stage}`}>{item.stage}</p>
              <h3 className="h3">{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="container">
        <div className={styles.closing} data-reveal>
          <p className={styles.closingText}>
            O próximo passo não é simplesmente investir mais.{" "}
            <span className="accent">É entender onde sua operação pode melhorar.</span>
          </p>
          <ScrollCta location="problem">{PROBLEM.cta}</ScrollCta>
        </div>
      </div>
    </section>
  );
}
