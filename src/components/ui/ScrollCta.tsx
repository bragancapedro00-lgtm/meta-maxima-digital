"use client";

import type { ReactNode } from "react";
import { track } from "@/lib/analytics";
import { Icon } from "./Icon";

export const FORM_ANCHOR = "contato";
export const PRESELECT_EVENT = "mmd:preselect-segment";

type Props = {
  /** Âncora de destino, sem "#". Padrão: formulário. */
  target?: string;
  /** Identifica de onde veio o clique (para análise, sem dados pessoais). */
  location: string;
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
  block?: boolean;
  /** Pré-seleciona um segmento no formulário (ex.: escolas). */
  segment?: string;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

/**
 * Link de CTA com rolagem suave nativa (âncora real, funciona sem JS).
 * A query string (UTMs) é preservada porque apenas o hash muda.
 */
export function ScrollCta({
  target = FORM_ANCHOR,
  location,
  variant = "primary",
  size = "md",
  block = false,
  segment,
  arrow = true,
  className,
  children,
}: Props) {
  const goesToForm = target === FORM_ANCHOR;

  const handleClick = () => {
    if (goesToForm) track("cta_click", { location });
    if (segment) {
      window.dispatchEvent(new CustomEvent(PRESELECT_EVENT, { detail: { segment } }));
    }
  };

  const classes = [
    "btn",
    `btn--${variant}`,
    size === "sm" ? "btn--sm" : "",
    block ? "btn--block" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a href={`#${target}`} className={classes} onClick={handleClick}>
      <span>{children}</span>
      {arrow && <Icon name={target === FORM_ANCHOR ? "arrowRight" : "chevronDown"} />}
    </a>
  );
}
