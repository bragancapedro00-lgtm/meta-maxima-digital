"use client";

import { useEffect, useState } from "react";
import { isWhatsAppConfigured } from "@/config/site";
import { buildDirectWhatsAppUrl } from "@/lib/whatsapp";
import { Icon } from "@/components/ui/Icon";
import { track } from "@/lib/analytics";
import styles from "./FloatingWhatsApp.module.css";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const isConfigured = isWhatsAppConfigured();
  const directUrl = buildDirectWhatsAppUrl();

  useEffect(() => {
    if (!isConfigured) return;

    const onScroll = () => {
      // Exibe após rolar 350px para não sobrepor a primeira dobra do Hero
      setVisible(window.scrollY > 350);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isConfigured]);

  if (!isConfigured || !visible || !directUrl) return null;

  const handleClick = () => {
    track("contact", { location: "floating_whatsapp" });
  };

  return (
    <a
      href={directUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={styles.button}
      aria-label="Falar com a equipe no WhatsApp sobre o diagnóstico gratuito"
      title="Falar no WhatsApp"
    >
      <Icon name="whatsapp" size={24} />
      <span className={styles.label}>Falar no WhatsApp</span>
    </a>
  );
}
