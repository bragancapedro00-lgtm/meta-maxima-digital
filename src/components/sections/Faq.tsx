import { FAQ } from "@/content/landing";
import { ScrollCta } from "@/components/ui/ScrollCta";
import styles from "./Faq.module.css";

export function Faq() {
  return (
    <section id="faq" className={`section ${styles.section}`} aria-labelledby="faq-title">
      <div className="container">
        <div className={styles.header}>
          <h2 id="faq-title" className="h2">
            {FAQ.title}
          </h2>
          <p className="lead">{FAQ.subtitle}</p>
        </div>

        {/* Respostas 100% visíveis e diretas — sem interações desnecessárias de accordion */}
        <div className={styles.grid} role="region" aria-label="Perguntas frequentes e respostas">
          {FAQ.items.map((item, idx) => (
            <article key={item.q} className={styles.itemCard}>
              <div className={styles.qHeader}>
                <span className={`mono ${styles.qNum}`}>{String(idx + 1).padStart(2, "0")}</span>
                <h3 className={styles.question}>{item.q}</h3>
              </div>
              <p className={styles.answer}>{item.a}</p>
            </article>
          ))}
        </div>

        <div className={styles.ctaWrap}>
          <ScrollCta location="faq">
            {FAQ.cta}
          </ScrollCta>
        </div>
      </div>
    </section>
  );
}
