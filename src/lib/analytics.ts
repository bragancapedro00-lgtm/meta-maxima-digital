/**
 * ============================================================================
 * CAMADA DE RASTREAMENTO & MENSURAÇÃO — META PIXEL, GA4 & GTM
 * ============================================================================
 *
 * POLÍTICA DE PRIVACIDADE E DADOS (LGPD):
 * - NENHUM dado pessoal (nome, telefone, whatsapp, e-mail) é transmitido aos
 *   pixels ou scripts analíticos. Apenas metadados de contexto anônimos são permitidos.
 *
 * CONVENÇÃO DE EVENTOS DO META PIXEL:
 * 1. PageView:
 *    - Disparado no carregamento de página (configurado em src/app/layout.tsx).
 * 2. Contact:
 *    - Disparado quando o visitante clica no botão flutuante direto de WhatsApp.
 *    - Representa intenção direta de contato comercial.
 * 3. Lead:
 *    - Disparado EXCLUSIVAMENTE após a validação completa dos 3 campos do formulário
 *      (Nome, WhatsApp e Segmento) no exato instante em que o link do WhatsApp é acionado.
 *    - NUNCA é disparado por abertura do formulário ou cliques inválidos.
 *
 * DOCUMENTAÇÃO DE LIMITAÇÃO TÉCNICA (IMPORTANTE):
 * - O navegador registra a abertura da aplicação WhatsApp (wa.me) pelo usuário,
 *   mas não possui capacidade técnica de comprovar que a mensagem foi efetivamente
 *   enviada no app do WhatsApp nem que a conversa evoluiu para uma matrícula/venda.
 * - Para o Meta Ads, o evento 'Lead' demarca o cumprimento da jornada da landing page
 *   com dados qualificados para a conversa comercial.
 * ============================================================================
 */

export type AnalyticsEvent =
  | "page_view" // PageView
  | "contact" // Contact (Botão direto de WhatsApp)
  | "lead" // Lead (Conclusão válida do formulário e abertura do WhatsApp)
  | "cta_click" // Clique em botão de rolagem até o formulário
  | "form_start" // Primeira interação com o formulário
  | "form_submit_attempt"; // Tentativa de submissão

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

/** Chaves que NUNCA devem ser enviadas aos servidores de rastreamento (PII protection). */
const PII_KEYS = /nome|name|phone|telefone|whatsapp|email|contato|mensagem/i;

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

  // Meta Pixel Dispatch
  try {
    if (typeof window.fbq === "function") {
      if (event === "lead") {
        // Evento padrão Lead para campanhas de conversão
        window.fbq("track", "Lead", {
          content_name: "Diagnostico Estrategico Gratuito",
          content_category: data.segment || "Educacao",
          ...data,
        });
      } else if (event === "contact") {
        // Evento padrão Contact para botão flutuante direto
        window.fbq("track", "Contact", {
          content_name: "Botao Flutuante WhatsApp",
          ...data,
        });
      } else if (event === "page_view") {
        window.fbq("track", "PageView");
      } else if (event === "cta_click") {
        window.fbq("trackCustom", "CTAClick", data);
      }
    }
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[Meta Pixel Error]", err);
    }
  }

  // Google Analytics 4 Dispatch
  try {
    if (typeof window.gtag === "function") {
      const gaEventName =
        event === "lead"
          ? "generate_lead"
          : event === "contact"
          ? "contact"
          : event;
      window.gtag("event", gaEventName, data);
    }
  } catch {}

  // Google Tag Manager DataLayer Dispatch
  try {
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: event === "lead" ? "lead_generated" : event,
        ...data,
      });
    }
  } catch {}

  if (process.env.NODE_ENV !== "production") {
    console.debug("[Analytics Event]", event, data);
  }
}

