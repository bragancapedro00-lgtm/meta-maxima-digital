"use client";

import { useEffect, useRef, useState } from "react";
import { DIFFERENTIAL } from "@/content/landing";
import styles from "./Differential.module.css";

export function Differential() {
  const ref = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setActive(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className={`section ${styles.section}`} aria-labelledby="diferencial-title">
      <div className="container">
        <h2 id="diferencial-title" className={`h2 ${styles.title}`} data-reveal>
          Não olhamos apenas para o anúncio.{" "}
          <span className="accent">Olhamos para o caminho até a venda.</span>
        </h2>

        <ol ref={ref} className={styles.flow} data-active={active}>
          {DIFFERENTIAL.steps.map((step, i) => (
            <li key={step.n} className={styles.step} style={{ "--i": i } as React.CSSProperties}>
              <span className={styles.connector} aria-hidden="true" />
              <span className={`mono ${styles.node}`} aria-hidden="true">
                {step.n}
              </span>
              <h3 className={styles.stepTitle}>
                <span className="visually-hidden">Etapa {step.n}: </span>
                {step.title}
              </h3>
              <p className={styles.stepText}>{step.text}</p>
            </li>
          ))}
        </ol>

        <p className={styles.closing} data-reveal>
          {DIFFERENTIAL.closing}
        </p>
      </div>
    </section>
  );
}
