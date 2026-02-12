import portfolioData from "../../data.json";
import { portfolioSchema } from "./schema";
import type { PortfolioData } from "@/types/portfolio";

/**
 * Processa os dados do portfolio antes da validação
 * Detecta automaticamente a foto de perfil do GitHub se necessário
 */
function processPortfolioData(
  rawData: typeof portfolioData,
): typeof portfolioData {
  const processed = { ...rawData };

  // Detecta foto de perfil do GitHub automaticamente
  if (processed.basics?.profiles) {
    const githubProfile = processed.basics.profiles.find(
      (p) => p.network === "GitHub",
    );

    if (githubProfile?.username) {
      // Se a imagem estiver com placeholder ou seguir o padrão genérico,
      // substitui pela foto real do GitHub
      const currentImage = processed.basics.image || "";
      const isPlaceholder =
        currentImage.includes("seu-usuario") ||
        currentImage === "" ||
        currentImage === "https://github.com/.png";

      if (isPlaceholder) {
        processed.basics.image = `https://github.com/${githubProfile.username}.png`;
      }
    }
  }

  return processed;
}

/**
 * Dados do portfolio validados pelo schema Zod
 * Exporta os dados tipados e validados
 */
export const data: PortfolioData = portfolioSchema.parse(
  processPortfolioData(portfolioData),
);
