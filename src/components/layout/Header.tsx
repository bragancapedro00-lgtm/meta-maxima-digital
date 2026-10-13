"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/content/landing";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { ScrollCta } from "@/components/ui/ScrollCta";
import styles from "./Header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => window.innerWidth > 900 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled || open ? styles.scrolled : ""}`}>
      <div className={`container ${styles.bar}`}>
        <a href="#inicio" className={styles.brand} aria-label="Meta Máxima Digital — voltar ao início">
          <Logo />
        </a>

        <nav className={styles.nav} aria-label="Navegação principal">
          <ul className={styles.links}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ScrollCta location="header" size="sm" arrow={false}>
            Quero vender mais
          </ScrollCta>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>
      </div>

      <div id="menu-mobile" className={styles.panel} data-open={open} hidden={!open}>
        <nav className="container" aria-label="Navegação principal (celular)">
          <ul className={styles.panelLinks}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.panelLink} onClick={() => setOpen(false)}>
                  {link.label}
                  <Icon name="arrowRight" size={18} />
                </a>
              </li>
            ))}
          </ul>
          <div onClick={() => setOpen(false)}>
            <ScrollCta location="header_mobile" block>
              Quero vender mais
            </ScrollCta>
          </div>
        </nav>
      </div>
    </header>
  );
}
