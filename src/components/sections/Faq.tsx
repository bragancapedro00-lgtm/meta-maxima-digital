"use client";

import { useState } from "react";
import { FAQ } from "@/content/landing";
import { Icon } from "@/components/ui/Icon";
import styles from "./Faq.module.css";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="perguntas-frequentes" className="section" aria-labelledby="faq-title">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.side}>
            <h2 id="faq-title" className="h2" data-reveal>
              Perguntas <span className="accent">frequentes.</span>
            </h2>
            <p className="lead" data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
              {FAQ.intro}
            </p>
          </div>

          <div className={styles.accordion} role="region" aria-label="Perguntas e respostas">
            {FAQ.items.map((item, index) => {
              const isOpen = openIndex === index;
              const headingId = `faq-h-${index}`;
              const panelId = `faq-p-${index}`;

              return (
                <div key={item.q} className={`${styles.item} ${isOpen ? styles.open : ""}`}>
                  <h3>
                    <button
                      type="button"
                      id={headingId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className={styles.question}
                      onClick={() => toggle(index)}
                    >
                      <span>{item.q}</span>
                      <span className={styles.iconWrap} aria-hidden="true">
                        <Icon name="chevronDown" size={18} />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    hidden={!isOpen}
                    className={styles.answer}
                  >
                    <p>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
