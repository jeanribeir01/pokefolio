import { readFileSync, writeFileSync } from "fs";

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  homepage: string | null;
}

interface PortfolioData {
  basics: {
    profiles?: Array<{
      network: string;
      username: string;
      url: string;
    }>;
  };
  projects?: Array<unknown>;
  config?: {
    githubAutoFetch?: boolean;
  };
}

async function fetchGitHubRepos() {
  console.log("🔍 Verificando configuração de auto-fetch...\n");

  try {
    const data: PortfolioData = JSON.parse(
      readFileSync("./data.json", "utf-8"),
    );

    // Verifica se auto-fetch está habilitado
    if (!data.config?.githubAutoFetch) {
      console.log("⏭️  Auto-fetch do GitHub está desabilitado");
      console.log(
        "💡 Para habilitar, configure githubAutoFetch: true no data.json\n",
      );
      process.exit(0);
    }

    // Busca username do GitHub
    const githubProfile = data.basics.profiles?.find(
      (p) => p.network === "GitHub",
    );

    if (!githubProfile) {
      console.log("⚠️  Nenhum perfil do GitHub encontrado no data.json");
      console.log("💡 Adicione seu GitHub em basics.profiles\n");
      process.exit(0);
    }

    const username = githubProfile.username;
    console.log(`📦 Buscando repositórios de @${username}...\n`);

    // Faz request para a API do GitHub
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=stars&per_page=6&type=owner`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          // Se houver GITHUB_TOKEN nas env vars, usa
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
          }),
        },
      },
    );

    if (!response.ok) {
      if (response.status === 404) {
        console.log(`❌ Usuário @${username} não encontrado no GitHub`);
      } else if (response.status === 403) {
        console.log("⚠️  Limite de rate da API do GitHub excedido");
        console.log(
          "💡 Configure GITHUB_TOKEN nas variáveis de ambiente para aumentar o limite",
        );
      } else {
        console.log(`❌ Erro ao buscar repos: ${response.status}`);
      }
      process.exit(0);
    }

    const repos: GitHubRepo[] = await response.json();

    if (repos.length === 0) {
      console.log("📭 Nenhum repositório público encontrado");
      process.exit(0);
    }

    // Converte repos para formato do portfolio
    const projects = repos.map((repo) => ({
      name: repo.name,
      description: repo.description || "Sem descrição",
      url: repo.html_url,
      tags: repo.language ? [repo.language] : [],
      highlights: [
        `⭐ ${repo.stargazers_count} ${repo.stargazers_count === 1 ? "estrela" : "estrelas"}`,
      ],
      ...(repo.homepage && { image: repo.homepage }),
    }));

    // Atualiza data.json
    data.projects = projects;

    writeFileSync("./data.json", JSON.stringify(data, null, 2));

    console.log(`✅ ${projects.length} repositórios importados com sucesso!\n`);

    projects.forEach((project, i) => {
      console.log(`${i + 1}. ${project.name}`);
      console.log(`   ${project.description}`);
      console.log(`   ${project.highlights.join(", ")}\n`);
    });

    console.log("📝 data.json atualizado automaticamente\n");

    process.exit(0);
  } catch (error) {
    console.error("❌ Erro ao buscar repositórios:");
    console.error(error);

    console.log("\n⚠️  Prosseguindo sem importar repositórios");
    console.log("💡 Verifique sua conexão e tente novamente\n");

    process.exit(0);
  }
}

fetchGitHubRepos();
