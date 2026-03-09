import { z } from "zod";

const profileSchema = z.object({
  network: z.string().min(1, "Nome da rede é obrigatório"),
  url: z.string().url("URL inválida"),
});

const locationSchema = z.object({
  city: z.string(),
  region: z.string(),
});

const basicsSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  label: z.string().min(2, "Título profissional é obrigatório"),
  image: z.string().url("URL da imagem inválida").optional().or(z.literal("")),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  summary: z.string().min(10, "Resumo deve ter pelo menos 10 caracteres"),
  heroGifUrl: z
    .string()
    .url("URL do GIF inválida")
    .optional()
    .or(z.literal("")),
  phone: z.string().optional(),
  location: locationSchema.optional(),
  profiles: z.array(profileSchema).optional(),
});

const projectSchema = z.object({
  name: z.string().min(1, "Nome do projeto é obrigatório"),
  description: z
    .string()
    .min(10, "Descrição deve ter pelo menos 10 caracteres")
    .optional(),
  highlights: z.array(z.string()).optional(),
  url: z.string().url("URL do projeto inválida").optional().or(z.literal("")),
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

const configSchema = z
  .object({
    starterPokemon: z
      .enum(["squirtle", "bulbasaur", "charmander"])
      .default("squirtle"),
    showFooterCredit: z.boolean().default(true),
  })
  .optional();

export const portfolioSchema = z.object({
  basics: basicsSchema,
  skills: z.array(z.string()).optional(),
  projects: z.array(projectSchema).optional(),
  education: z.array(educationSchema).optional(),
  work: z.array(workSchema).optional(),
  config: configSchema,
});
