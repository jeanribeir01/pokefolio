# Pokefolio

Pokefolio e um template de portfolio pessoal com Next.js que gera um site estatico a partir de um unico arquivo `data.json`.

## O que o projeto faz

- Renderiza um portfolio completo (hero, skills, projetos, experiencia e educacao) com base nos dados do `data.json`.
- Valida os dados antes do build para evitar deploy com informacao invalida.
- Atualiza configuracao de repositorio automaticamente para deploy no GitHub Pages.
- Pode importar dados do GitHub para preencher avatar e projetos.

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Zod

## Estrutura principal

- `data.json`: fonte principal dos dados do portfolio
- `schema.json`: schema para validacao e autocomplete
- `src/app`: layout e pagina principal
- `src/components`: secoes visuais do portfolio
- `scripts`: automacoes de validacao, configuracao e geracao de assets

## Scripts

- `npm run dev`: inicia ambiente local
- `npm run build`: valida dados e gera build de producao
- `npm run start`: sobe app em modo producao
- `npm run lint`: executa lint
- `npm run validate`: valida `data.json`
- `npm run update:config`: atualiza configuracoes de repositorio/basePath
- `npm run fetch:github`: importa dados do GitHub para o `data.json`

## Como usar

1. Instale dependencias:

```bash
npm install
```

2. Edite o arquivo `data.json` com seus dados.

3. Rode localmente:

```bash
npm run dev
```

4. Gere build para deploy:

```bash
npm run build
```

## Deploy

O projeto esta preparado para export estatico e deploy no GitHub Pages via GitHub Actions.

## Creditos

Ferramentas, bibliotecas e fontes de assets utilizadas neste projeto:

- [PokeAPI](https://pokeapi.co/): base de dados publica de Pokemon usada como referencia para nomes e identidade tematica.
- [PokeAPI Sprites (GitHub)](https://github.com/PokeAPI/sprites): sprites animados usados no tema dos starters (`bulbasaur`, `charmander`, `squirtle`).
- [nes.css](https://nostalgic-css.github.io/NES.css/): estilo visual retro/pixel art da interface.
- [@hackernoon/pixel-icon-library](https://www.npmjs.com/package/@hackernoon/pixel-icon-library): icones em estilo pixel usados nos componentes.
- [Pokemon](https://www.pokemon.com/): franquia que inspira a direcao visual do template.

Nota legal: Pokemon e marcas relacionadas pertencem a Nintendo, Game Freak e Creatures. Este projeto e uma homenagem visual para fins educacionais e de portfolio.

## Licenca

MIT
