import { HERO } from "@/content/landing";
import { Icon } from "@/components/ui/Icon";
import { ScrollCta } from "@/components/ui/ScrollCta";
import { HeroMap } from "./HeroMap";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            {HERO.badge}
          </p>

          <h1 id="hero-title" className={`h1 ${styles.title}`}>
            Seu negócio pode <span className="accent">vender mais.</span> Sua estratégia precisa{" "}
            <span className="accent">acompanhar.</span>
          </h1>

          <p className={`lead ${styles.subtitle}`}>{HERO.subtitle}</p>

          <ul className={styles.benefits}>
            {HERO.benefits.map((b) => (
              <li key={b.text}>
                <span className={styles.benefitIcon}>
                  <Icon name={b.icon} size={18} />
                </span>
                {b.text}
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <ScrollCta location="hero_primary">{HERO.primaryCta}</ScrollCta>
            <ScrollCta location="hero_secondary" target="solucoes" variant="secondary">
              {HERO.secondaryCta}
            </ScrollCta>
          </div>

          <p className={styles.micro}>{HERO.microcopy}</p>
        </div>

        <div className={styles.visual}>
          <HeroMap />
        </div>
      </div>
    </section>
  );
}
