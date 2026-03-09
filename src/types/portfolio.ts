export interface Profile {
  network: string;
  url: string;
}

export interface Location {
  city: string;
  region: string;
}

export interface Basics {
  name: string;
  label: string;
  image?: string;
  email?: string;
  phone?: string;
  summary: string;
  heroGifUrl?: string;
  location?: Location;
  profiles?: Profile[];
}

export interface Project {
  name: string;
  description?: string;
  highlights?: string[];
  url?: string;
}

export interface Education {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate?: string;
}

export interface Work {
  name: string;
  position: string;
  url?: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

export type StarterPokemon = "squirtle" | "bulbasaur" | "charmander";

export interface PokemonThemeTokens {
  primary: string;
  secondary: string;
  accent: string;
  bg: string;
  frame: string;
  text: string;
  sprite: string;
  speciesLabel: string;
}

export interface Config {
  starterPokemon?: StarterPokemon;
  showFooterCredit?: boolean;
}

export interface PortfolioData {
  basics: Basics;
  skills?: string[];
  projects?: Project[];
  education?: Education[];
  work?: Work[];
  config?: Config;
}
