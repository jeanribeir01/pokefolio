import portfolioData from "../../data.json";
import { portfolioSchema } from "./schema";
import type { PortfolioData } from "@/types/portfolio";

/**
 * Dados do portfolio validados pelo schema Zod
 * Exporta os dados tipados e validados
 */
export const data: PortfolioData = portfolioSchema.parse(portfolioData);
