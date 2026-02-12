import { z } from "zod";

const profileSchema = z.object({
  network: z.string().min(1, "Nome da rede é obrigatório"),
  username: z.string().min(1, "Username é obrigatório"),
  url: z.string().url("URL inválida"),
});

const locationSchema = z.object({
  city: z.string(),
  region: z.string(),
  countryCode: z.string().length(2, "Código do país deve ter 2 caracteres"),
});

const basicsSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  label: z.string().min(2, "Título profissional é obrigatório"),
  image: z.string().url("URL da imagem inválida").optional().or(z.literal("")),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  phone: z.string().optional(),
  url: z.string().url("URL inválida").optional().or(z.literal("")),
  summary: z.string().min(10, "Resumo deve ter pelo menos 10 caracteres"),
  location: locationSchema.optional(),
  profiles: z.array(profileSchema).optional(),
});

const skillSchema = z.object({
  category: z.string().min(1, "Categoria é obrigatória"),
  items: z.array(z.string()).min(1, "Adicione pelo menos 1 skill"),
});

const projectSchema = z.object({
  name: z.string().min(1, "Nome do projeto é obrigatório"),
  description: z
    .string()
    .min(10, "Descrição deve ter pelo menos 10 caracteres"),
  highlights: z.array(z.string()).optional(),
  url: z.string().url("URL do projeto inválida").optional().or(z.literal("")),
  image: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

const educationSchema = z.object({
  institution: z.string().min(1, "Nome da instituição é obrigatório"),
  area: z.string().min(1, "Área de estudo é obrigatória"),
  studyType: z.string().min(1, "Tipo de estudo é obrigatório"),
  startDate: z
    .string()
    .regex(/^[0-9]{4}-[0-9]{2}$/, "Data deve estar no formato YYYY-MM"),
  endDate: z
    .string()
    .regex(
      /^([0-9]{4}-[0-9]{2})?$/,
      "Data deve estar no formato YYYY-MM ou vazia",
    )
    .optional(),
});

const workSchema = z.object({
  name: z.string().min(1, "Nome da empresa é obrigatório"),
  position: z.string().min(1, "Cargo é obrigatório"),
  url: z.string().url("URL da empresa inválida").optional().or(z.literal("")),
  startDate: z
    .string()
    .regex(/^[0-9]{4}-[0-9]{2}$/, "Data deve estar no formato YYYY-MM"),
  endDate: z
    .string()
    .regex(
      /^([0-9]{4}-[0-9]{2})?$/,
      "Data deve estar no formato YYYY-MM ou vazia",
    )
    .optional(),
  summary: z.string().optional(),
  highlights: z.array(z.string()).optional(),
});

const languageSchema = z.object({
  language: z.string().min(1, "Nome do idioma é obrigatório"),
  fluency: z.string().min(1, "Fluência é obrigatória"),
});

const configSchema = z
  .object({
    theme: z.string().default("default"),
    accentColor: z
      .string()
      .regex(/^#[0-9a-fA-F]{6}$/, "Cor deve estar em formato hex (#000000)")
      .default("#6366f1"),
    darkMode: z.boolean().default(true),
    showFooterCredit: z.boolean().default(true),
    githubAutoFetch: z.boolean().default(false),
    analyticsId: z.string().optional(),
  })
  .optional();

export const portfolioSchema = z.object({
  basics: basicsSchema,
  skills: z.array(skillSchema).optional(),
  projects: z.array(projectSchema).optional(),
  education: z.array(educationSchema).optional(),
  work: z.array(workSchema).optional(),
  languages: z.array(languageSchema).optional(),
  config: configSchema,
});

export type PortfolioData = z.infer<typeof portfolioSchema>;
