import { LOGO, SITE } from "@/config/site";
import styles from "./Logo.module.css";

/**
 * Logotipo. Usa o arquivo oficial quando LOGO estiver configurado em src/config/site.ts;
 * caso contrário, exibe o logotipo textual (sem símbolos inventados).
 */
export function Logo({ tone = "ink" }: { tone?: "ink" | "light" }) {
  if (LOGO) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={LOGO.src}
        width={LOGO.width}
        height={LOGO.height}
        alt={SITE.name}
        className={styles.image}
      />
    );
  }

  return (
    <span className={`${styles.wordmark} ${tone === "light" ? styles.light : ""}`} aria-label={SITE.name}>
      <span aria-hidden="true">Meta Máxima</span>
      <span aria-hidden="true" className={styles.digital}>
        Digital
      </span>
    </span>
  );
}
