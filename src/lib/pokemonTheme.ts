import type { PokemonThemeTokens, StarterPokemon } from "@/types/portfolio";

export const DEFAULT_STARTER: StarterPokemon = "squirtle";

// Curated palette based on each starter dominant tones.
const POKEMON_THEME_MAP: Record<StarterPokemon, PokemonThemeTokens> = {
  squirtle: {
    primary: "208 78% 60%",
    secondary: "198 78% 84%",
    accent: "222 63% 40%",
    bg: "199 60% 96%",
    frame: "216 45% 22%",
    text: "216 30% 12%",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/7.gif",
    speciesLabel: "Squirtle",
  },
  bulbasaur: {
    primary: "149 46% 52%",
    secondary: "145 45% 83%",
    accent: "157 42% 28%",
    bg: "138 42% 95%",
    frame: "151 36% 20%",
    text: "150 30% 12%",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
    speciesLabel: "Bulbasaur",
  },
  charmander: {
    primary: "21 92% 64%",
    secondary: "33 100% 84%",
    accent: "14 80% 40%",
    bg: "35 72% 95%",
    frame: "18 45% 21%",
    text: "20 34% 13%",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/4.gif",
    speciesLabel: "Charmander",
  },
};

export function getStarterTheme(starter?: StarterPokemon): PokemonThemeTokens {
  return POKEMON_THEME_MAP[starter ?? DEFAULT_STARTER];
}
