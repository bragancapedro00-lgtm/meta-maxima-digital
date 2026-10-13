import { LEAD_ORIGIN, WHATSAPP_NUMBER, isWhatsAppConfigured } from "@/config/site";

export type LeadData = {
  nome: string;
  whatsapp: string;
  empresa: string;
  segmento: string;
  objetivo: string;
  situacao: string;
  faturamento: string;
  desafio: string;
};

const NOT_INFORMED = "não informado";

/**
 * Normaliza um telefone brasileiro digitado pelo visitante.
 * Aceita formatos como "(21) 98439-3482", "21984393482", "+55 21 98439-3482", "021 98439 3482".
 * Retorna DDD + número (10 ou 11 dígitos) ou null se inválido.
 */
export function normalizeBrazilianPhone(raw: string): string | null {
  let d = raw.replace(/\D/g, "");
  if ((d.length === 12 || d.length === 13) && d.startsWith("55")) d = d.slice(2);
  if (d.length === 11 && d.startsWith("0")) d = d.slice(1); // 0 + DDD + fixo
  if (d.length === 12 && d.startsWith("0")) d = d.slice(1); // 0 + DDD + celular
  if (d.length !== 10 && d.length !== 11) return null;
  const ddd = d.slice(0, 2);
  if (!/^[1-9][1-9]$/.test(ddd)) return null;
  const local = d.slice(2);
  if (local.length === 9 && !local.startsWith("9")) return null;
  if (local.length === 8 && !/^[2-5]/.test(local)) return null; // fixo começa com 2–5
  return d;
}

/** "21984393482" -> "+55 (21) 98439-3482" */
export function formatBrazilianPhone(normalized: string): string {
  const ddd = normalized.slice(0, 2);
  const local = normalized.slice(2);
  const split = local.length === 9 ? 5 : 4;
  return `+55 (${ddd}) ${local.slice(0, split)}-${local.slice(split)}`;
}

/** Máscara enquanto digita: "(21) 98439-3482". */
export function maskPhoneInput(raw: string): string {
  let d = raw.replace(/\D/g, "");
  if (d.length > 11 && d.startsWith("55")) d = d.slice(2);
  d = d.slice(0, 11);
  if (d.length === 0) return "";
  if (d.length <= 2) return `(${d}`;
  const ddd = d.slice(0, 2);
  const rest = d.slice(2);
  const split = rest.length > 8 ? 5 : 4;
  if (rest.length <= split) return `(${ddd}) ${rest}`;
  return `(${ddd}) ${rest.slice(0, split)}-${rest.slice(split)}`;
}

const clean = (v: string) => v.replace(/\s+/g, " ").trim();

/** Monta a mensagem comercial com as respostas reais do formulário. */
export function buildLeadMessage(
  data: LeadData,
  campaign?: Record<string, string>,
): string {
  const phone = normalizeBrazilianPhone(data.whatsapp);
  const desafio = data.desafio.trim().replace(/\n{3,}/g, "\n\n");

  const lines = [
    "NOVO LEAD | META MÁXIMA DIGITAL",
    "",
    `Nome: ${clean(data.nome)}`,
    `WhatsApp: ${phone ? formatBrazilianPhone(phone) : clean(data.whatsapp)}`,
    `Empresa: ${clean(data.empresa)}`,
    `Segmento: ${data.segmento}`,
    `Objetivo principal: ${data.objetivo}`,
    `Situação atual: ${data.situacao}`,
    `Faturamento mensal: ${data.faturamento || NOT_INFORMED}`,
    `Principal desafio: ${desafio || NOT_INFORMED}`,
    "",
    `Origem: ${LEAD_ORIGIN}`,
  ];

  // Parâmetros de campanha (utm_*) ajudam a atribuir o lead ao anúncio de origem.
  // Identificadores de clique (fbclid/gclid) ficam fora da mensagem por serem longos e técnicos.
  const utmEntries = Object.entries(campaign ?? {}).filter(([k, v]) => k.startsWith("utm_") && v);
  if (utmEntries.length) {
    lines.push(`Campanha: ${utmEntries.map(([k, v]) => `${k}=${v}`).join(" | ")}`);
  }

  return lines.join("\n");
}

/**
 * Link oficial wa.me com a mensagem codificada.
 * No celular abre o aplicativo; no computador, o wa.me oferece WhatsApp Desktop ou WhatsApp Web.
 * Retorna null quando o número comercial não está configurado (nunca gera link inválido).
 */
export function buildWhatsAppUrl(message: string, number: string = WHATSAPP_NUMBER): string | null {
  if (!isWhatsAppConfigured(number)) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
