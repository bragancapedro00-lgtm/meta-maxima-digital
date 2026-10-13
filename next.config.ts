import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exporta HTML/CSS/JS estáticos em /out — publicável em qualquer hospedagem
  // (Vercel, Netlify, Hostinger, S3, cPanel...). Nenhum servidor é necessário.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
