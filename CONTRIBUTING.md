# Contribuindo para o Pokefolio 👀

Primeiramente, obrigado por considerar contribuir para o Pokefolio! São pessoas como você que tornam o Pokefolio uma ferramenta incrível para a comunidade de desenvolvedores.

## 📋 Índice

- [Código de Conduta](#código-de-conduta)
- [Como Posso Contribuir?](#como-posso-contribuir)
- [Configurando o Ambiente de Desenvolvimento](#configurando-o-ambiente-de-desenvolvimento)
- [Process de Desenvolvimento](#processo-de-desenvolvimento)
- [Diretrizes de Código](#diretrizes-de-código)
- [Processo de Pull Request](#processo-de-pull-request)
- [Reportando Bugs](#reportando-bugs)
- [Sugerindo Melhorias](#sugerindo-melhorias)

---

## 📜 Código de Conduta

Este projeto e todos que participam dele são regidos por um código de conduta. Ao participar, você concorda em manter este código. Por favor, reporte comportamentos inaceitáveis.

### Nossos Padrões

**Comportamentos que contribuem para criar um ambiente positivo incluem:**

✅ Uso de linguagem acolhedora e inclusiva  
✅ Respeito por diferentes pontos de vista e experiências  
✅ Aceitar críticas construtivas de forma graciosa  
✅ Focar no que é melhor para a comunidade  
✅ Mostrar empatia com outros membros da comunidade

**Comportamentos inaceitáveis incluem:**

❌ Uso de linguagem ou imagens sexualizadas  
❌ Trolling, comentários insultuosos ou ataques pessoais  
❌ Assédio público ou privado  
❌ Publicar informações privadas de outros sem permissão explícita  
❌ Outras condutas que razoavelmente seriam consideradas inapropriadas

---

## 🤝 Como Posso Contribuir?

Existem várias formas de contribuir para o Pokefolio:

### 1. Reportar Bugs 🐛

Bugs são rastreados como [GitHub Issues](../../issues). Antes de criar um novo issue, **verifique se já não existe um issue similar**. Se encontrar um existente, adicione seus comentários lá.

Se você encontrar um novo bug, crie um issue incluindo:

- **Título claro e descritivo**
- **Passos para reproduzir** o problema
- **Comportamento esperado** vs **comportamento atual**
- **Screenshots** (se aplicável)
- **Ambiente**: OS, versão do Node.js, navegador
- **Informações adicionais** que possam ajudar

### 2. Sugerir Funcionalidades 💡

Sugestões de funcionalidades também são rastreadas como [GitHub Issues](../../issues). Ao sugerir uma funcionalidade:

- **Título claro e descritivo**
- **Descrição detalhada** da funcionalidade proposta
- **Exemplos** de como a funcionalidade seria usada
- **Mockups ou wireframes** (se aplicável)
- **Por que esta funcionalidade seria útil** para a maioria dos usuários

### 3. Contribuir com Código 👨‍💻

Você pode contribuir com código através de Pull Requests. Veja a seção [Processo de Pull Request](#processo-de-pull-request) para detalhes.

**Áreas onde você pode ajudar:**

- Corrigir bugs
- Implementar novas funcionalidades
- Melhorar documentação
- Escrever testes
- Otimizar performance
- Melhorar acessibilidade
- Adicionar internacionalização

### 4. Melhorar Documentação 📝

Documentação é crucial! Você pode ajudar:

- Corrigindo erros de ortografia ou gramática
- Adicionando exemplos
- Melhorando explicações
- Criando tutoriais
- Traduzindo documentação

### 5. Ajudar a Comunidade 💬

- Responder perguntas nas [Discussions](../../discussions)
- Ajudar outros usuários em issues
- Compartilhar o projeto nas redes sociais
- Escrever posts sobre o Pokefolio

---

## 🛠️ Configurando o Ambiente de Desenvolvimento

### Pré-requisitos

- **Node.js 18 ou superior**
- **npm, yarn ou pnpm**
- **Git**
- **Editor de código** (recomendado: VS Code)

### Passos para Setup

1. **Fork o repositório**

   Clique no botão "Fork" no topo da página do repositório.

2. **Clone seu fork**

   ```bash
   git clone https://github.com/SEU-USUARIO/pokefolio.git
   cd pokefolio
   ```

3. **Adicione o repositório original como upstream**

   ```bash
   git remote add upstream https://github.com/ORIGINAL-OWNER/pokefolio.git
   ```

4. **Instale as dependências**

   ```bash
   npm install
   ```

5. **Crie uma branch para sua contribuição**

   ```bash
   git checkout -b feature/minha-feature
   # ou
   git checkout -b fix/meu-bug-fix
   ```

6. **Inicie o servidor de desenvolvimento**

   ```bash
   npm run dev
   ```

   Acesse [http://localhost:3000](http://localhost:3000)

---

## 🔄 Processo de Desenvolvimento

### 1. Mantenha seu fork atualizado

Antes de começar a trabalhar:

```bash
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

### 2. Trabalhe na sua branch

```bash
git checkout feature/minha-feature
# Faça suas alterações
git add .
git commit -m "feat: descrição clara da mudança"
```

### 3. Teste suas alterações

```bash
# Valide o data.json
npm run validate

# Execute os scripts
npm run generate:og
npm run fetch:github

# Execute o build
npm run build

# Teste localmente
npm run start
```

### 4. Push para seu fork

```bash
git push origin feature/minha-feature
```

### 5. Abra um Pull Request

Vá para o repositório original e clique em "New Pull Request".

---

## 📏 Diretrizes de Código

### Estilo de Código

Este projeto usa:

- **TypeScript** para tipagem estática
- **ESLint** para linting
- **Prettier** para formatação (se configurado)

Execute antes de commit:

```bash
npm run lint
```

### Convenções de Commit

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

```
tipo(escopo): descrição

[corpo opcional]

[rodapé opcional]
```

**Tipos permitidos:**

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Mudanças na documentação
- `style`: Formatação, ponto e vírgula, etc (sem mudança de código)
- `refactor`: Refatoração de código
- `perf`: Melhorias de performance
- `test`: Adição ou correção de testes
- `chore`: Mudanças em ferramentas, configurações, etc

**Exemplos:**

```bash
git commit -m "feat: adiciona suporte para Google Analytics"
git commit -m "fix: corrige erro ao gerar OG image"
git commit -m "docs: atualiza README com novos exemplos"
git commit -m "refactor: simplifica lógica de validação"
```

### Estrutura de Arquivos

```
pokefolio/
├── src/
│   ├── app/              # Rotas Next.js
│   ├── components/       # Componentes React
│   │   ├── ui/          # Componentes base
│   │   └── *.tsx        # Componentes específicos
│   ├── lib/             # Utilitários e lógica
│   └── types/           # TypeScript types
├── scripts/             # Scripts Node.js
├── public/              # Assets estáticos
├── data.json            # Dados de exemplo
└── schema.json          # JSON Schema
```

### Componentes React

- Use **TypeScript** para todos os componentes
- Prefira **componentes funcionais** com hooks
- Use **Tailwind CSS** para estilização
- Documente props complexas com JSDoc
- Extraia lógica complexa para hooks customizados

**Exemplo:**

```tsx
import { type FC } from "react";

interface MyComponentProps {
  title: string;
  description?: string;
}

/**
 * Descrição do componente
 */
export const MyComponent: FC<MyComponentProps> = ({ title, description }) => {
  return (
    <div className="container">
      <h2 className="text-2xl font-bold">{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};
```

### Estilização

- Use **Tailwind CSS** utility classes
- Para lógica condicional, use `cn()` de `lib/utils.ts`
- Mantenha cores no `tailwind.config.ts`
- Use variáveis CSS para valores dinâmicos

```tsx
import { cn } from "@/lib/utils";

<div
  className={cn(
    "base-class",
    isActive && "active-class",
    variant === "primary" && "primary-class",
  )}
/>;
```

---

## 🔀 Processo de Pull Request

### Checklist antes de submeter

Antes de abrir um PR, certifique-se de que:

- [ ] Seu código segue o estilo do projeto
- [ ] Você executou `npm run lint` sem erros
- [ ] Você executou `npm run build` com sucesso
- [ ] Você testou as alterações localmente
- [ ] Você atualizou a documentação (se necessário)
- [ ] Seu commit segue [Conventional Commits](#convenções-de-commit)
- [ ] Você descreveu suas alterações no PR

### Descrição do PR

Use este template para descrever seu PR:

```markdown
## Descrição

<!-- Descreva suas alterações -->

## Tipo de mudança

<!-- Marque com um X -->

- [ ] Bug fix
- [ ] Nova funcionalidade
- [ ] Breaking change
- [ ] Documentação

## Como testar

<!-- Descreva os passos para testar -->

1.
2.
3.

## Checklist

- [ ] Código segue o estilo do projeto
- [ ] Build passa sem erros
- [ ] Documentação atualizada
- [ ] Testes adicionados/atualizados (se aplicável)

## Screenshots

<!-- Se aplicável, adicione screenshots -->
```

### Processo de Review

1. **Submissão**: Você abre o PR
2. **Review**: Maintainers revisam seu código
3. **Feedback**: Você responde ao feedback e faz ajustes
4. **Aprovação**: PR é aprovado
5. **Merge**: PR é mesclado na branch main

**Tempo de resposta**: Geralmente 2-7 dias úteis

---

## 🐛 Reportando Bugs

Ao reportar um bug, inclua o máximo de informações possível:

### Template de Bug Report

```markdown
## Descrição do Bug

<!-- Descrição clara e concisa do bug -->

## Passos para Reproduzir

1. Vá para '...'
2. Clique em '....'
3. Role até '....'
4. Veja o erro

## Comportamento Esperado

<!-- O que deveria acontecer -->

## Comportamento Atual

<!-- O que realmente acontece -->

## Screenshots

<!-- Se aplicável -->

## Ambiente

- OS: [e.g. Windows 11, macOS 14]
- Node.js: [e.g. 20.11.0]
- Navegador: [e.g. Chrome 121]
- Versão do Pokefolio: [e.g. 1.0.0]

## Contexto Adicional

<!-- Qualquer outra informação relevante -->
```

---

## 💡 Sugerindo Melhorias

### Template de Feature Request

```markdown
## Problema que a feature resolve

<!-- Descreva o problema ou necessidade -->

## Solução proposta

<!-- Descrição da solução que você propõe -->

## Alternativas consideradas

<!-- Outras soluções que você considerou -->

## Exemplos de uso

<!-- Como a feature seria usada -->

## Benefícios

<!-- Por que esta feature seria útil -->

## Mockups/Wireframes

<!-- Se aplicável -->
```

---

## 🚀 Áreas Prioritárias

Contribuições são especialmente bem-vindas nestas áreas:

### 🌐 Internacionalização

- Adicionar suporte para múltiplos idiomas
- Traduzir interface e mensagens
- Documentação em outros idiomas

### ♿ Acessibilidade

- Melhorar navegação por teclado
- Adicionar ARIA labels
- Testar com screen readers
- Melhorar contraste de cores

### 📊 Analytics

- Integração com Google Analytics
- Integração com Plausible
- Integração com outros analytics

### 🎨 Temas

- Temas predefinidos adicionais
- Editor de temas visual
- Sistema de plugins de temas

### 🔌 Integrações

- Importar dados do LinkedIn
- Importar dados do DEV.to
- Sincronização com Notion

### 📱 PWA

- Transformar em Progressive Web App
- Suporte offline
- Install prompt

---

## 🙏 Reconhecimento

Contribuidores serão adicionados ao README e terão nosso eterno agradecimento! ❤️

---

## 📞 Dúvidas?

Se tiver dúvidas sobre como contribuir:

- Abra uma [Discussion](../../discussions)
- Entre em contato através de um [Issue](../../issues)

---

<div align="center">

**Obrigado por contribuir para o Pokefolio! 👀**

</div>
