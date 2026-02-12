import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Gera HTML estático em out/
  images: {
    unoptimized: true, // GitHub Pages não tem Image Optimization API
  },
  // basePath usado apenas em produção (GitHub Pages)
  // Em desenvolvimento local, acesse http://localhost:3000
  // Em produção, será usuario.github.io/viu
  basePath: process.env.NODE_ENV === "production" ? "/viu" : "",
  trailingSlash: true, // Compatibilidade com servidores estáticos
};

export default nextConfig;
