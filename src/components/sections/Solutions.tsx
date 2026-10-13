import { SOLUTIONS } from "@/content/landing";
import { Icon } from "@/components/ui/Icon";
import { ScrollCta } from "@/components/ui/ScrollCta";
import styles from "./Solutions.module.css";

export function Solutions() {
  return (
    <section id="solucoes" className="section" aria-labelledby="solucoes-title">
      <div className="container">
        <header className={styles.head}>
          <h2 id="solucoes-title" className="h2" data-reveal>
            Marketing que não termina <span className="accent">no clique.</span>
          </h2>
          <p className="lead" data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            {SOLUTIONS.subtitle}
          </p>
        </header>

        <div className={styles.board} data-reveal>
          {SOLUTIONS.services.map((s) => (
            <article key={s.title} className={styles.service}>
              <div className={styles.serviceTop}>
                <span className={styles.icon}>
                  <Icon name={s.icon} size={22} />
                </span>
                <span className={`mono ${styles.tag}`}>{s.tag}</span>
              </div>
              <h3 className={`h3 ${styles.title}`}>{s.title}</h3>
              <p className={styles.text}>{s.text}</p>
              <ul className={styles.list}>
                {s.items.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={16} strokeWidth={2.25} />
                    {item.replace(/\.$/, "")}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className={styles.foot}>
          <p>
            Sem pacotes prontos: os serviços são combinados conforme o diagnóstico de cada empresa.
          </p>
          <ScrollCta location="solutions" variant="secondary" size="sm">
            Quero saber o que faz sentido para mim
          </ScrollCta>
        </div>
      </div>
    </section>
  );
}
