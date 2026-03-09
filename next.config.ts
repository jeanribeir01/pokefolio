import type { NextConfig } from "next";

// Detecta automaticamente o nome do repositório
// O script update-repo-config.ts atualiza isso antes do build
const getBasePath = () => {
  if (process.env.NODE_ENV !== "production") return "";

  // Detecta via GitHub Actions
  if (process.env.GITHUB_REPOSITORY) {
    return `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`;
  }

  // Fallback para o valor padrão (será atualizado pelo script)
  return "/pokefolio";
};

const nextConfig: NextConfig = {
  output: "export", // Gera HTML estático em out/
  images: {
    unoptimized: true, // GitHub Pages não tem Image Optimization API
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
  // basePath usado apenas em produção (GitHub Pages)
  // Em desenvolvimento local, acesse http://localhost:3000
  // O nome do repo é detectado automaticamente via GITHUB_REPOSITORY ou package.json
  basePath: getBasePath(),
  trailingSlash: true, // Compatibilidade com servidores estáticos
};

export default nextConfig;
