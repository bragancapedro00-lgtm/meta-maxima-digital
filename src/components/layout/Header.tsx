"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { ScrollCta } from "@/components/ui/ScrollCta";
import { CTA_LABEL } from "@/content/landing";
import styles from "./Header.module.css";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.bar}`}>
        <a href="#inicio" className={styles.brand} aria-label="Meta Máxima Digital — voltar ao início">
          <Logo />
        </a>

        {/* Sem menu de navegação. Apenas CTA discreto em desktop */}
        <div className={styles.action}>
          <ScrollCta location="header" size="sm" arrow={false} className={styles.headerCta}>
            {CTA_LABEL}
          </ScrollCta>
        </div>
      </div>
    </header>
  );
}
