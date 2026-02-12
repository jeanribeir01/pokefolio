# 👀 Viu - Gerador de Portfólio Profissional

<div align="center">

**Crie seu portfólio profissional em 3 minutos**

[![Deploy with GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-blue?logo=github)](https://docs.github.com/pages)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## 🚀 O que é Viu?

**Viu** é um template de repositório GitHub que transforma um único arquivo JSON no seu portfólio profissional completo. Feito para desenvolvedores que querem um site profissional sem perder tempo com código.

### ✨ Principais Recursos

- **📝 Configure com 1 arquivo** - Edite apenas `data.json` e pronto
- **🎨 Design moderno** - Interface elegante com tema claro/escuro
- **📱 100% Responsivo** - Perfeito em mobile, tablet e desktop
- **🚀 Deploy automático** - GitHub Actions → GitHub Pages (grátis)
- **⚡ Performance** - Site estático otimizado (Next.js 15)
- **🎯 SEO otimizado** - Meta tags, Open Graph, Twitter Cards
- **� Foto de perfil automática** - Detecta sua foto do GitHub automaticamente
- **🔄 GitHub Auto-Import** - Importe repos e avatar automaticamente
- **🎨 OG Image** - Gere preview social automaticamente
- **♿ Acessível** - WCAG compliant, navegação por teclado
- **🌐 Validação automática** - Nunca faça deploy com dados inválidos

---

## 🎯 Quick Start

### 1️⃣ Use este Template

1. Clique no botão **"Use this template"** no topo desta página
2. Escolha um nome para seu repositório (ex: `meu-portfolio`)
3. Marque **"Public"** (necessário para GitHub Pages grátis)
4. Clique em **"Create repository"**

### 2️⃣ Edite seus Dados

1. Abra o arquivo [`data.json`](data.json)
2. Clique no ícone de **lápis** para editar
3. **Preencha suas informações** (nome, bio, projetos, etc.)
4. Clique em **"Commit changes"**

> 💡 **Dica**: O VS Code oferece autocomplete completo ao editar `data.json` graças ao `schema.json`!

### 3️⃣ Ative o GitHub Pages

1. Vá em **Settings** → **Pages**
2. Em **Source**, selecione **"GitHub Actions"**
3. Aguarde 2-3 minutos para o deploy

### 4️⃣ Acesse seu Portfólio

Seu site estará disponível em:

```
https://<seu-usuario>.github.io/<nome-do-repo>/
```

**Exemplo**: `https://seu-usuario.github.io/portfolio/`

> ⚙️ **Detecção Automática do Nome do Repositório**: O sistema detecta automaticamente o nome do seu repositório durante o deploy! Se você renomear seu repositório, o próximo deploy atualizará tudo automaticamente. Não é necessário editar manualmente nenhum arquivo de configuração.

---

## 📝 Editando `data.json`

O arquivo `data.json` é a **única coisa** que você precisa editar. Ele contém todas as informações do seu portfólio.

### Estrutura Básica

```json
{
  "basics": {
    "name": "Seu Nome",
    "label": "Desenvolvedor Full Stack",
    "image": "https://github.com/seu-usuario.png",
    "email": "seu@email.com",
    "phone": "+55 11 99999-9999",
    "url": "https://seusite.com",
    "summary": "Sua biografia profissional...",
    "location": {
      "city": "São Paulo",
      "region": "SP",
      "countryCode": "BR"
    },
    "profiles": [
      {
        "network": "GitHub",
        "username": "seu-usuario",
        "url": "https://github.com/seu-usuario"
      }
    ]
  }
}
```

> 📸 **Foto de Perfil Automática**: Deixe o campo `image` como `"https://github.com/seu-usuario.png"` e ele será substituído automaticamente pela sua foto real do GitHub baseado no `username` configurado em `profiles`! Não precisa editar manualmente.

---

### Seções Disponíveis

| Seção       | Descrição                                      | Obrigatória |
| ----------- | ---------------------------------------------- | ----------- |
| `basics`    | Informações pessoais e contato                 | ✅ Sim      |
| `skills`    | Habilidades técnicas organizadas por categoria | ❌ Não      |
| `projects`  | Seus projetos/trabalhos                        | ❌ Não      |
| `work`      | Experiência profissional                       | ❌ Não      |
| `education` | Formação acadêmica                             | ❌ Não      |
| `languages` | Idiomas que você fala                          | ❌ Não      |
| `config`    | Configurações de tema e funcionalidades        | ✅ Sim      |

### IntelliSense no VS Code

Ao abrir `data.json` no VS Code, você terá **autocomplete automático** graças ao `schema.json`.

--- ## 🎨 Personalização

### Cores

Altere a cor de destaque no `data.json`:

```json
{
  "config": {
    "accentColor": "#6366f1" // Qualquer cor hexadecimal
  }
}
```

**Cores populares**:

- 🔵 Azul: `#3b82f6`
- 🟢 Verde: `#10b981`
- 🟣 Roxo: `#8b5cf6`
- 🔴 Vermelho: `#ef4444`
- 🟠 Laranja: `#f97316`

### Tema Padrão

```json
{
  "config": {
    "darkMode": true // false para começar no tema claro
  }
}
```

### Imagens de Projetos

Adicione imagens dos seus projetos em `public/images/`:

```json
{
  "projects": [
    {
      "name": "Meu Projeto",
      "image": "/NOME-DO-SEU-REPO/images/meu-projeto.png"
    }
  ]
}
```

> ⚠️ **Atenção**: Substitua `NOME-DO-SEU-REPO` pelo nome do seu repositório (ex: `portfolio`, `meu-site`, etc.). O sistema detecta automaticamente o nome durante o build, mas você precisa usar o prefixo correto nas URLs de imagem no `data.json`.

---

## 🔄 GitHub Auto-Import

Importe automaticamente seus repositórios **e foto de perfil** do GitHub:

### 1. Ative o Auto-Import

```json
{
  "config": {
    "githubAutoFetch": true
  }
}
```

### 2. Execute Localmente (Opcional)

```bash
npm install
npm run fetch:github
```

**O que é importado:**

- ✅ Foto de perfil do GitHub
- ✅ Os 6 repositórios com mais estrelas
- ✅ Descrições, linguagens e contagem de estrelas

> 💡 **Automático no Build**: O auto-import roda automaticamente antes de cada build em produção!

### 3. Rate Limits (Opcional)

Para evitar limites da API do GitHub, crie um token:

1. GitHub → Settings → Developer settings → Personal access tokens
2. Crie um token com escopo `public_repo`
3. Crie arquivo `.env.local`:

```env
GITHUB_TOKEN=seu_token_aqui
```

---

## 🖼️ Open Graph Image

Gere automaticamente uma imagem de preview para redes sociais:

```bash
npm install
npm run generate:og
```

Isso cria `public/og-image.png` com seu nome e título.

A imagem é gerada automaticamente antes de cada build.

---

## 🛠️ Desenvolvimento Local

### Pré-requisitos

- **Node.js 18+** ([Download](https://nodejs.org/))
- **npm, pnpm ou yarn**

### Instalação

```bash
# Clone seu repositório
git clone https://github.com/seu-usuario/seu-portfolio.git
cd seu-portfolio

# Instale dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Scripts Disponíveis

```bash
npm run dev           # Inicia servidor de desenvolvimento
npm run build         # Gera build de produção
npm run start         # Inicia servidor de produção
npm run validate      # Valida data.json
npm run update:config # Atualiza nome do repo automaticamente
npm run fetch:github  # Importa repositórios do GitHub
npm run generate:og   # Gera Open Graph image
```

---## 📁 Estrutura do Projeto

```
viu/
├── data.json              # ✏️ ÚNICO ARQUIVO QUE VOCÊ EDITA
├── schema.json            # Esquema JSON para autocomplete
├── public/
│   ├── images/           # Suas imagens de projetos
│   ├── favicon.svg       # Favicon do site
│   └── og-image.png      # Preview para redes sociais
├── src/
│   ├── app/              # Páginas Next.js
│   ├── components/       # Componentes React
│   ├── lib/              # Utilitários e validação
│   └── types/            # TypeScript types
├── scripts/
│   ├── validate-data.ts  # Validador de data.json
│   ├── fetch-github-data.ts  # Auto-import GitHub
│   ├── update-repo-config.ts # Detecta nome do repo automaticamente
│   └── generate-og-image.ts  # Gerador de OG image
└── .github/
    └── workflows/
        └── deploy.yml    # CI/CD para GitHub Pages
```

> ⚙️ **Detecção Automática**: O script `update-repo-config.ts` detecta automaticamente o nome do seu repositório via GitHub Actions ou git remote, atualizando o `basePath` do Next.js. Isso significa que você pode renomear seu repositório a qualquer momento sem editar código!

---

## 🚀 Deploy

### GitHub Pages (Recomendado)

✅ **Grátis** • ✅ **Automático** • ✅ **HTTPS**

O deploy acontece automaticamente a cada push na branch `main`.

### Vercel

1. Importe seu repositório no Vercel
2. Configure o **Framework Preset**: Next.js
3. Clique em **Deploy**

### Netlify

1. Importe seu repositório no Netlify
2. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
3. Clique em **Deploy**

---

## 🔧 Troubleshooting

### ❌ Deploy falhou

**Verifique se `data.json` é válido:**

```bash
npm install
npm run validate
```

Se houver erros, corrija-os no `data.json`.

### 🖼️ Imagens não aparecem

**Verifique o caminho no `data.json`:**

- ✅ Correto: `/seu-repo/images/projeto.png`
- ❌ Errado: `/images/projeto.png`
- ❌ Errado: `images/projeto.png`

> **Nota**: Substitua `seu-repo` pelo nome real do seu repositório GitHub. O sistema detecta automaticamente o nome durante o build.

### 🌐 Página 404

**O sistema detecta automaticamente o nome do repositório!** Se você renomeou seu repositório e está tendo problemas:

1. Faça um novo commit (pode ser vazio): `git commit --allow-empty -m "Update config"`
2. Faça push: `git push`
3. O GitHub Actions irá detectar o novo nome automaticamente

Se o problema persistir, execute localmente:

```bash
npm run update:config
```

### 🔄 GitHub Auto-Import não funciona

**Verifique se o username está correto:**

```json
{
  "basics": {
    "profiles": [
      {
        "network": "GitHub",
        "username": "seu-usuario-real" // ← Deve ser seu username real
      }
    ]
  }
}
```

---

## 📦 Stack Tecnológica

- **Next.js 15** — Framework React com Static Site Generation
- **TypeScript 5.7** — Tipagem estática
- **Tailwind CSS 4.x** — Estilização utility-first
- **Framer Motion** — Animações suaves
- **Zod** — Validação de dados em runtime
- **Satori + Sharp** — Geração de Open Graph images
- **GitHub Actions** — CI/CD automático
- **GitHub Pages** — Hospedagem gratuita

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Veja [CONTRIBUTING.md](CONTRIBUTING.md) para:

- 🐛 Reportar bugs
- 💡 Sugerir funcionalidades
- 🔧 Enviar pull requests
- 📝 Melhorar documentação

---

## 📜 Licença

Este projeto está sob a licença **MIT**. Veja [LICENSE](LICENSE) para mais detalhes.

**Isso significa que você pode:**

✅ Usar comercialmente  
✅ Modificar  
✅ Distribuir  
✅ Uso privado

**Desde que:**

⚠️ Mantenha o aviso de copyright  
⚠️ Mantenha a licença MIT

---

## 🙏 Créditos

Desenvolvido com ❤️ usando:

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Estilização
- [Framer Motion](https://www.framer.com/motion/) - Animações
- [Lucide Icons](https://lucide.dev/) - Ícones
- [Zod](https://zod.dev/) - Validação de dados
- [Satori](https://github.com/vercel/satori) - Geração de OG images

---

<div align="center">

**Feito com 👀 por desenvolvedores, para desenvolvedores**

Se o Viu foi útil, considere dar uma ⭐ no repositório!

</div>
