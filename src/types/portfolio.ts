export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface Location {
  city: string;
  region: string;
  countryCode: string;
}

export interface Basics {
  name: string;
  label: string;
  image?: string;
  email?: string;
  phone?: string;
  url?: string;
  summary: string;
  location?: Location;
  profiles?: Profile[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  name: string;
  description: string;
  highlights?: string[];
  url?: string;
  image?: string;
  tags?: string[];
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

export interface Language {
  language: string;
  fluency: string;
}

export interface Config {
  theme?: string;
  accentColor?: string;
  darkMode?: boolean;
  showFooterCredit?: boolean;
  githubAutoFetch?: boolean;
  analyticsId?: string;
}

export interface PortfolioData {
  basics: Basics;
  skills?: Skill[];
  projects?: Project[];
  education?: Education[];
  work?: Work[];
  languages?: Language[];
  config?: Config;
}
