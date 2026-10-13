/**
 * ============================================================================
 * CONFIGURAÇÃO CENTRAL — META MÁXIMA DIGITAL
 * ============================================================================
 * Pontos de configuração claramente identificados:
 * 1. NÚMERO OFICIAL DE WHATSAPP: Altere WHATSAPP_NUMBER ou NEXT_PUBLIC_WHATSAPP_NUMBER.
 * 2. URL CANÔNICA DE PRODUÇÃO: Definida em SITE.url (pode ser sobrescrita por NEXT_PUBLIC_SITE_URL).
 * 3. ID DO META PIXEL: Definido em META_PIXEL_ID (NEXT_PUBLIC_META_PIXEL_ID).
 * ============================================================================
 */

/** Mantém apenas dígitos. */
const digitsOnly = (value: string | undefined | null) => (value ?? "").replace(/\D/g, "");

/**
 * PONTO DE CONFIGURAÇÃO 1: WhatsApp comercial oficial da Meta Máxima Digital.
 * Formato internacional, apenas números: DDI (55) + DDD (21) + número.
 * Exemplo real: 5521984393482
 * Pode ser sobrescrito pela variável de ambiente NEXT_PUBLIC_WHATSAPP_NUMBER.
 */
export const WHATSAPP_NUMBER: string = digitsOnly(
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5521984393482",
);

/** Validação de número internacional (E.164 sem o "+"). */
export const isWhatsAppConfigured = (number: string = WHATSAPP_NUMBER) =>
  /^[1-9]\d{11,14}$/.test(number);

/**
 * PONTO DE CONFIGURAÇÃO 2: ID do Meta Pixel.
 * Insira o ID numérico do Meta Pixel (ex.: 123456789012345) na variável de ambiente
 * NEXT_PUBLIC_META_PIXEL_ID ou utilize o ponto abaixo.
 */
export const META_PIXEL_ID: string = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";

/**
 * PONTO DE CONFIGURAÇÃO 3: Dados institucionais e URL canônica definitiva.
 * A URL pública oficial definitiva é https://agenciametamaximadigital.vercel.app/
 */
export const SITE = {
  name: "Meta Máxima Digital",
  title: "Meta Máxima Digital | Marketing e Vendas para Escolas",
  description:
    "Unimos tráfego pago, estratégia comercial e tecnologia para ajudar sua escola a atrair alunos, aproveitar melhor os contatos e vender com mais estratégia.",
  shortAbout:
    "Estratégia de marketing, atendimento e vendas integrados para instituições de ensino e cursos profissionalizantes.",
  /** URL pública definitiva. Nunca aponta para localhost em produção. */
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://agenciametamaximadigital.vercel.app").replace(/\/$/, ""),
  locale: "pt_BR",
} as const;

/**
 * Logotipo oficial da Meta Máxima Digital.
 * Quando o arquivo oficial da marca estiver disponível, adicione-o em /public
 * (ex.: /public/logo-meta-maxima.svg) e configure os dados abaixo.
 * Enquanto for null, o logotipo textual com tipografia oficial da marca é exibido.
 */
export const LOGO: { src: string; width: number; height: number } | null = null;

/** Rota da Política de Privacidade. */
export const PRIVACY_POLICY_URL: string = "/politica-de-privacidade";

/** Canais oficiais de contato / redes sociais validadas. */
export const SOCIAL_LINKS: { label: string; href: string }[] = [];

/** Origem comercial registrada no atendimento. */
export const LEAD_ORIGIN = "Landing Page Oficial | Diagnóstico Estratégico Gratuito";

