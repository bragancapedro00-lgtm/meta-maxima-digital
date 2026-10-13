/**
 * Parâmetros de campanha.
 * São lidos da URL de entrada e mantidos apenas na sessionStorage da aba (expiram ao fechá-la).
 * Não são dados pessoais: identificam o anúncio/campanha, nunca o visitante.
 */

export const CAMPAIGN_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
] as const;

export type CampaignParams = Partial<Record<(typeof CAMPAIGN_KEYS)[number], string>>;

const STORAGE_KEY = "mmd_campaign";

function safeSession(): Storage | null {
  try {
    return typeof window !== "undefined" ? window.sessionStorage : null;
  } catch {
    return null; // modo privado / storage bloqueado
  }
}

function readFromUrl(search: string): CampaignParams {
  const params = new URLSearchParams(search);
  const found: CampaignParams = {};
  for (const key of CAMPAIGN_KEYS) {
    const value = params.get(key);
    if (value) found[key] = value.slice(0, 200);
  }
  return found;
}

/** Captura na primeira carga. Parâmetros novos na URL substituem os anteriores (último clique). */
export function captureCampaignParams(): CampaignParams {
  if (typeof window === "undefined") return {};
  const fromUrl = readFromUrl(window.location.search);
  const storage = safeSession();
  if (Object.keys(fromUrl).length) {
    storage?.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
    return fromUrl;
  }
  try {
    return JSON.parse(storage?.getItem(STORAGE_KEY) ?? "{}") as CampaignParams;
  } catch {
    return {};
  }
}

export function getCampaignParams(): CampaignParams {
  return captureCampaignParams();
}

/**
 * Garante que a URL visível continue com os parâmetros de campanha
 * (ex.: após navegação interna ou recarregamento), sem criar entrada no histórico.
 */
export function ensureCampaignParamsInUrl(params: CampaignParams) {
  if (typeof window === "undefined" || !Object.keys(params).length) return;
  const url = new URL(window.location.href);
  let changed = false;
  for (const [key, value] of Object.entries(params)) {
    if (value && !url.searchParams.has(key)) {
      url.searchParams.set(key, value);
      changed = true;
    }
  }
  if (changed) window.history.replaceState(window.history.state, "", url.toString());
}

/** Acrescenta os parâmetros de campanha a um link interno/externo (ex.: outra página do site). */
export function withCampaignParams(href: string, params: CampaignParams = getCampaignParams()): string {
  if (!Object.keys(params).length || href.startsWith("#")) return href;
  try {
    const url = new URL(href, window.location.origin);
    if (url.origin !== window.location.origin) return href;
    for (const [key, value] of Object.entries(params)) {
      if (value && !url.searchParams.has(key)) url.searchParams.set(key, value);
    }
    return url.pathname + url.search + url.hash;
  } catch {
    return href;
  }
}
