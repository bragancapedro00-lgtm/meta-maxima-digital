import { PROBLEM } from "@/content/landing";
import { Icon } from "@/components/ui/Icon";
import styles from "./Problem.module.css";

export function Problem() {
  return (
    <section className={`section section--paper ${styles.section}`} aria-labelledby="problem-title">
      <div className="container">
        <div className={styles.header}>
          <h2 id="problem-title" className="h2">
            {PROBLEM.title}
          </h2>
          <p className="lead">{PROBLEM.subtitle}</p>
        </div>

        <ul className={styles.painsList} aria-label="Principais gargalos na captação e conversão de alunos">
          {PROBLEM.pains.map((pain) => (
            <li key={pain.title} className={styles.painItem}>
              <div className={styles.painIconWrap} aria-hidden="true">
                <Icon name="alert" size={18} />
              </div>
              <div className={styles.painContent}>
                <h3 className={styles.painTitle}>{pain.title}</h3>
                <p className={styles.painText}>{pain.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
