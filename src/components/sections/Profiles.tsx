import { PROFILES } from "@/content/landing";
import { Icon } from "@/components/ui/Icon";
import { ScrollCta } from "@/components/ui/ScrollCta";
import styles from "./Profiles.module.css";

export function Profiles() {
  return (
    <section className="section section--paper" aria-labelledby="perfis-title">
      <div className="container">
        <h2 id="perfis-title" className={`h2 ${styles.title}`} data-reveal>
          Uma estratégia adequada ao <span className="accent">momento do seu negócio.</span>
        </h2>

        <ul className={styles.list}>
          {PROFILES.items.map((p, i) => (
            <li
              key={p.text}
              className={styles.item}
              data-reveal
              style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
            >
              <span className={styles.icon}>
                <Icon name={p.icon} size={22} />
              </span>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>

        <div className={styles.closing}>
          <p>{PROFILES.closing}</p>
          <ScrollCta location="profiles">{PROFILES.cta}</ScrollCta>
        </div>
      </div>
    </section>
  );
}
