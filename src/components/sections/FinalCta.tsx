import { FINAL_CTA } from "@/content/landing";
import { ScrollCta } from "@/components/ui/ScrollCta";
import styles from "./FinalCta.module.css";

export function FinalCta() {
  return (
    <section className={styles.section} aria-label="Chamada final para ação">
      <div className="container">
        <div className={styles.box} data-reveal>
          <h2 className={`h2 ${styles.text}`}>
            {FINAL_CTA.text}
          </h2>
          <ScrollCta location="final_cta" variant="primary" size="md">
            {FINAL_CTA.cta}
          </ScrollCta>
        </div>
      </div>
    </section>
  );
}
