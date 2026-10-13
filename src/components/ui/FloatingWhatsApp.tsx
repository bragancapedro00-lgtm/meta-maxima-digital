"use client";

import { useEffect, useState } from "react";
import { isWhatsAppConfigured } from "@/config/site";
import { Icon } from "@/components/ui/Icon";
import { track } from "@/lib/analytics";
import styles from "./FloatingWhatsApp.module.css";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const isConfigured = isWhatsAppConfigured();

  useEffect(() => {
    if (!isConfigured) return;

    const onScroll = () => {
      // Exibe após rolar um pouco para não atrapalhar o primeiro impacto do Hero
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isConfigured]);

  if (!isConfigured || !visible) return null;

  const handleClick = () => {
    track("cta_click", { location: "floating_whatsapp" });
  };

  return (
    <a
      href="#contato"
      onClick={handleClick}
      className={styles.button}
      aria-label="Ir para o formulário de contato e falar no WhatsApp"
      title="Falar com a equipe no WhatsApp"
    >
      <Icon name="whatsapp" size={26} />
      <span className={styles.label}>Falar no WhatsApp</span>
    </a>
  );
}
