"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";
import { captureCampaignParams, ensureCampaignParamsInUrl } from "@/lib/campaign";

/**
 * Efeitos globais de página, montados uma única vez:
 * - captura/preserva parâmetros de campanha;
 * - registra a visualização da landing page;
 * - ativa as revelações de entrada (IntersectionObserver).
 */
export function PageEffects() {
  useEffect(() => {
    const campaign = captureCampaignParams();
    ensureCampaignParamsInUrl(campaign);

    const fire = () => track("landing_view", { has_campaign: Object.keys(campaign).length > 0 });
    if (document.readyState === "complete") fire();
    else window.addEventListener("load", fire, { once: true });

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
