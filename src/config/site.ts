/**
 * Configuração central da landing page.
 * Altere aqui os dados institucionais reais. Nada neste arquivo deve ser inventado:
 * campos sem informação real ficam vazios/null e a interface os oculta automaticamente.
 */

/** Mantém apenas dígitos. */
const digitsOnly = (value: string | undefined | null) => (value ?? "").replace(/\D/g, "");

/**
 * WhatsApp comercial da Meta Máxima Digital.
 * Formato internacional, apenas números: DDI (55) + DDD + número.
 * Pode ser sobrescrito em build pela variável NEXT_PUBLIC_WHATSAPP_NUMBER.
 * Se ficar vazio, o formulário exibe "configuração pendente" e nunca abre um link inválido.
 */
export const WHATSAPP_NUMBER: string = digitsOnly(
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5521984393482",
);

/** Um número internacional plausível tem entre 12 e 15 dígitos (E.164 sem o "+"). */
export const isWhatsAppConfigured = (number: string = WHATSAPP_NUMBER) =>
  /^[1-9]\d{11,14}$/.test(number);

export const SITE = {
  name: "Meta Máxima Digital",
  title: "Meta Máxima Digital | Estratégia de Marketing e Vendas",
  description:
    "Estratégias de tráfego pago, marketing digital e automação comercial para empresas que desejam atrair clientes e melhorar suas vendas.",
  shortAbout:
    "Tráfego pago, estratégia comercial e tecnologia integrados para empresas que querem atrair clientes e vender com mais estrutura.",
  /** URL pública final. Defina NEXT_PUBLIC_SITE_URL no ambiente de publicação. */
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, ""),
  locale: "pt_BR",
} as const;

/**
 * Logotipo oficial. Quando o arquivo existir, coloque-o em /public (ex.: /public/logo.svg)
 * e informe o caminho abaixo. Enquanto for null, o logotipo textual é exibido.
 */
export const LOGO: { src: string; width: number; height: number } | null = null;

/** Página de política de privacidade. Informe a rota/URL somente quando ela existir. */
export const PRIVACY_POLICY_URL: string | null = null;

/** Canais oficiais. Adicione somente endereços reais. Itens vazios não são exibidos. */
export const SOCIAL_LINKS: { label: string; href: string }[] = [
  // { label: "Instagram", href: "https://www.instagram.com/..." },
];

/** Texto da linha de origem na mensagem enviada ao WhatsApp. */
export const LEAD_ORIGIN = "Landing Page | Campanha de crescimento empresarial";
