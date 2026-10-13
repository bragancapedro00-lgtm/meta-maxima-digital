# Design System · Meta Máxima Digital

<!-- impeccable:design-schema 1 -->

## Visual World

A strategic commercial planning document. Clean, authoritative, grounded in off-white (#F7F9FC) and pure white (#FFFFFF), with graphite typography (#111827), subtle border hairlines (#E5E7EB), and strategic cobalt blue (#2563EB / #1D4ED8) reserved for conversion lines, nodes, and high-salience actions.

## Typography

- **Display & Body Font:** Geist Sans (`--font-sans`), geometric, balanced, high legibility.
- **Data & Stage Annotations:** Geist Mono (`--font-mono`), tabular numerals for stages, conceptual labels and metadata.
- **Headings:**
  - H1: `clamp(2.4rem, 1.35rem + 4.1vw, 4.4rem)`, letter-spacing `-0.035em`, line-height `1.02`.
  - H2: `clamp(1.95rem, 1.35rem + 2.3vw, 3.25rem)`, letter-spacing `-0.03em`.
  - H3: `1.25rem`, letter-spacing `-0.015em`.
  - Body: `1.0625rem` (17px), line-height `1.6`.

## Palette

- Ground / Backgrounds: `#FFFFFF` (pure white), `#F7F9FC` (paper off-white), `#EFF6FF` (blue-50 field tint).
- Ink: `#111827` (headings / primary), `#1F2937` (subheadings), `#475569` (body text), `#64748B` (muted metadata).
- Lines & Borders: `#E5E7EB` (neutral hairline), `#BFDBFE` (active blue line).
- Primary Blue Accent: `#2563EB` (primary action), `#1D4ED8` (hover / dark contrast), `#1E3A8A` (high-contrast label).
- Feedback & Alert: `#B42318` / `#FEF3F2` (error / validation), `#067647` / `#ECFDF3` (success).

## Spatial Rhythm & Elevation

- Container Max Width: `1200px` with fluid gutter `clamp(20px, 4vw, 40px)`.
- Section Spacing: `clamp(4.5rem, 2.5rem + 6vw, 8.5rem)`.
- Border Radii: `8px` (controls), `12px` (inner cards), `16px–24px` (feature boards and panels).
- Elevation: Single declaration elevation (`--shadow-sm`, `--shadow-md`, `--shadow-lg` with soft ambient offset). No neobrutalist zero-blur block shadows.

## Signature Interaction & Motion

- Travelling linear signal along the acquisition-to-sales pipeline in the Hero map.
- Sequential draw of the four-stage differential flow (`01 Atrair` -> `02 Qualificar` -> `03 Converter` -> `04 Analisar`).
- Strict adherence to `prefers-reduced-motion`: all animations fallback immediately to static clear states.

## Responsive Strategy

Tested across viewports (360px, 390px, 768px, 1024px, 1440px). Forms collapse from 2 columns to 1 column, pipeline transitions to a compact alternating horizontal rail, and touch targets preserve minimum 44px comfort.
