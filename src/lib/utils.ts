import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina classes CSS com Tailwind de forma inteligente
 * Remove duplicatas e resolve conflitos
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formata uma data no formato YYYY-MM para exibição
 * @param date String no formato YYYY-MM
 * @returns String formatada (ex: "Jan 2024")
 */
export function formatDate(date: string): string {
  if (!date) return "Presente";

  const [year, month] = date.split("-");
  const monthNames = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  const monthIndex = parseInt(month, 10) - 1;
  return `${monthNames[monthIndex]} ${year}`;
}

/**
 * Calcula a duração entre duas datas
 * @param startDate Data de início (YYYY-MM)
 * @param endDate Data de fim (YYYY-MM) ou vazio para data atual
 * @returns String formatada (ex: "2 anos 3 meses")
 */
export function calculateDuration(startDate: string, endDate?: string): string {
  const start = new Date(startDate + "-01");
  const end = endDate ? new Date(endDate + "-01") : new Date();

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} ${remainingMonths === 1 ? "mês" : "meses"}`;
  }

  if (remainingMonths === 0) {
    return `${years} ${years === 1 ? "ano" : "anos"}`;
  }

  return `${years} ${years === 1 ? "ano" : "anos"} ${remainingMonths} ${remainingMonths === 1 ? "mês" : "meses"}`;
}
