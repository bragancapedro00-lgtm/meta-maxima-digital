/**
 * Camada única de eventos. Encaminha para Meta Pixel, GA4 e/ou GTM somente se estiverem carregados.
 * Nenhum dado pessoal (nome, telefone, empresa, texto livre) é enviado — apenas contexto de interação.
 *
 * Importante: abrir o WhatsApp é registrado como INTENÇÃO de contato (whatsapp_open),
 * não como lead concluído, pois não há como confirmar que a mensagem foi enviada.
 */

export type AnalyticsEvent =
  | "landing_view" // visualização da landing page
  | "cta_click" // clique em CTA que leva ao formulário
  | "form_start" // primeira interação com o formulário
  | "form_submit_attempt" // tentativa de envio (válida ou não)
  | "whatsapp_open"; // clique que abre o WhatsApp (intenção de contato)

type Params = Record<string, string | number | boolean | undefined>;

type Fbq = (...args: unknown[]) => void;
type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    fbq?: Fbq;
    gtag?: Gtag;
    dataLayer?: unknown[];
  }
}

/** Nomes enviados ao Meta Pixel (eventos personalizados — nenhum evento padrão "Lead"). */
const META_EVENT_NAMES: Record<AnalyticsEvent, string> = {
  landing_view: "LandingView",
  cta_click: "CTAClick",
  form_start: "FormStart",
  form_submit_attempt: "FormSubmitAttempt",
  whatsapp_open: "WhatsAppIntent",
};

const PII_KEYS = /nome|name|phone|telefone|whatsapp_number|email|empresa|company|desafio|message/i;

function sanitize(params: Params): Params {
  const out: Params = {};
  for (const [k, v] of Object.entries(params)) {
    if (v === undefined || PII_KEYS.test(k)) continue;
    out[k] = typeof v === "string" ? v.slice(0, 100) : v;
  }
  return out;
}

export function track(event: AnalyticsEvent, params: Params = {}) {
  if (typeof window === "undefined") return;
  const data = sanitize(params);

  try {
    window.fbq?.("trackCustom", META_EVENT_NAMES[event], data);
  } catch {}
  try {
    window.gtag?.("event", event, data);
  } catch {}
  try {
    // GTM: o contêiner decide o que fazer com cada evento.
    if (Array.isArray(window.dataLayer)) window.dataLayer.push({ event, ...data });
  } catch {}

  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics]", event, data);
  }
}
