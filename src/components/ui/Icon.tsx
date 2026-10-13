import type { SVGProps } from "react";

/**
 * Conjunto de ícones próprio, em traço único (1.75) e cantos arredondados,
 * para manter consistência sem instalar bibliotecas.
 */
const PATHS = {
  target: (
    <>
      <circle cx="12" cy="12" r="8.25" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="12" cy="12" r="0.75" fill="currentColor" />
    </>
  ),
  convert: (
    <>
      <path d="M4 7.5h11.5" />
      <path d="m12.5 4 3.5 3.5-3.5 3.5" />
      <path d="M20 16.5H8.5" />
      <path d="m11.5 13-3.5 3.5 3.5 3.5" />
    </>
  ),
  chart: (
    <>
      <path d="M4 4v16h16" />
      <path d="m7.5 14.5 3.5-3.5 3 3 5-6" />
    </>
  ),
  trend: (
    <>
      <path d="m3.5 16.5 6-6 4 4 7-7" />
      <path d="M15 7.5h5.5V13" />
    </>
  ),
  megaphone: (
    <>
      <path d="M4 10.25v3.5a1 1 0 0 0 1 1h2.5l7.5 4.25V5L7.5 9.25H5a1 1 0 0 0-1 1Z" />
      <path d="M18.5 9a4 4 0 0 1 0 6" />
      <path d="m8 14.75 1.25 4.75" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="18" r="2.25" />
      <circle cx="18" cy="6" r="2.25" />
      <path d="M8.25 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.75" />
    </>
  ),
  automation: (
    <>
      <rect x="5" y="7" width="14" height="11" rx="2.5" />
      <path d="M12 3.5V7" />
      <circle cx="9.25" cy="12.5" r="1" fill="currentColor" />
      <circle cx="14.75" cy="12.5" r="1" fill="currentColor" />
      <path d="M2.75 12v2.5M21.25 12v2.5" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3.75 8.25 4.5L12 12.75 3.75 8.25 12 3.75Z" />
      <path d="m3.75 12.25 8.25 4.5 8.25-4.5" />
      <path d="m3.75 16.25 8.25 4.5 8.25-4.5" />
    </>
  ),
  school: (
    <>
      <path d="M2.75 9 12 4.5 21.25 9 12 13.5 2.75 9Z" />
      <path d="M6.5 11v4.75c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3V11" />
      <path d="M21.25 9v5" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  arrowRight: (
    <>
      <path d="M4.5 12h15" />
      <path d="m13.5 6 6 6-6 6" />
    </>
  ),
  arrowUp: (
    <>
      <path d="M12 19.5v-15" />
      <path d="m6 10.5 6-6 6 6" />
    </>
  ),
  chevronDown: <path d="m6 9 6 6 6-6" />,
  menu: (
    <>
      <path d="M4 7.5h16" />
      <path d="M4 16.5h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  alert: (
    <>
      <circle cx="12" cy="12" r="8.75" />
      <path d="M12 7.75v5" />
      <circle cx="12" cy="16.25" r="0.6" fill="currentColor" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="8.75" />
      <path d="M12 11v5.25" />
      <circle cx="12" cy="7.9" r="0.6" fill="currentColor" />
    </>
  ),
  copy: (
    <>
      <rect x="8.5" y="8.5" width="11" height="11" rx="2" />
      <path d="M15.5 8.5V6.5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2" />
    </>
  ),
  external: (
    <>
      <path d="M13.5 4.5h6v6" />
      <path d="m19.5 4.5-8 8" />
      <path d="M17.5 13.5v4a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h4" />
    </>
  ),
} as const;

export type IconName = keyof typeof PATHS | "whatsapp";

type IconProps = SVGProps<SVGSVGElement> & { name: IconName; size?: number };

export function Icon({ name, size = 20, ...rest }: IconProps) {
  if (name === "whatsapp") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...rest}>
        <path
          fill="currentColor"
          d="M12.04 2.5a9.43 9.43 0 0 0-8.1 14.26L2.5 21.5l4.86-1.4a9.43 9.43 0 1 0 4.68-17.6Zm0 17.2a7.77 7.77 0 0 1-3.96-1.09l-.28-.17-2.88.83.85-2.8-.19-.29a7.77 7.77 0 1 1 6.46 3.52Zm4.27-5.82c-.23-.12-1.38-.68-1.6-.76-.21-.08-.37-.12-.52.12-.16.23-.6.76-.74.92-.13.15-.27.17-.5.06a6.35 6.35 0 0 1-3.16-2.77c-.24-.41.24-.38.68-1.27.08-.15.04-.29-.02-.4-.06-.12-.52-1.26-.72-1.72-.19-.45-.38-.39-.52-.4h-.45a.86.86 0 0 0-.62.3 2.6 2.6 0 0 0-.81 1.93 4.52 4.52 0 0 0 .95 2.4 10.34 10.34 0 0 0 3.96 3.5c1.47.64 2.05.69 2.78.58.45-.07 1.38-.56 1.57-1.11.2-.55.2-1.02.14-1.12-.06-.1-.21-.16-.44-.27Z"
        />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {PATHS[name]}
    </svg>
  );
}
