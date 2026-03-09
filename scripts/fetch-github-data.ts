import { readFileSync, writeFileSync } from "fs";

interface GitHubRepo {
  name: string;
  html_url: string;
}

interface GitHubUser {
  login: string;
  avatar_url: string;
  name: string | null;
  bio: string | null;
  location: string | null;
  email: string | null;
  blog: string | null;
  public_repos: number;
}

interface PortfolioData {
  basics: {
    image?: string;
    profiles?: Array<{
      network: string;
      username?: string;
      url: string;
    }>;
  };
  projects?: Array<unknown>;
  config?: {
    // Mantido apenas por compatibilidade de tipo com data.json.
    githubAutoFetch?: boolean;
  };
}

function extractGitHubUsernameFromUrl(url?: string): string | undefined {
  if (!url) {
    return undefined;
  }

  try {
    const { pathname } = new URL(url);
    const username = pathname.split("/").filter(Boolean)[0];
    return username || undefined;
  } catch {
    return undefined;
  }
}

async function fetchGitHubRepos() {
  console.log("🔍 Iniciando import automático do GitHub...\n");

  try {
    const data: PortfolioData = JSON.parse(
      readFileSync("./data.json", "utf-8"),
    );

    // Busca username do GitHub
    const githubProfile = data.basics.profiles?.find(
      (p) => p.network === "GitHub",
    );

    if (!githubProfile) {
      console.log("⚠️  Nenhum perfil do GitHub encontrado no data.json");
      console.log("💡 Adicione seu GitHub em basics.profiles\n");
      return;
    }

    const username =
      githubProfile.username || extractGitHubUsernameFromUrl(githubProfile.url);

    if (!username) {
      console.log("⚠️  Não foi possível identificar o username do GitHub");
      console.log(
        "💡 Preencha basics.profiles[].username ou use uma URL como https://github.com/seu-usuario\n",
      );
      return;
    }

    console.log(`📦 Buscando dados de @${username}...\n`);

    const headers = {
      Accept: "application/vnd.github.v3+json",
      // Se houver GITHUB_TOKEN nas env vars, usa
      ...(process.env.GITHUB_TOKEN && {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      }),
    };

    // 1. Busca dados do usuário (incluindo avatar)
    console.log("👤 Buscando perfil do usuário...");
    const userResponse = await fetch(
      `https://api.github.com/users/${username}`,
      { headers },
    );

    if (!userResponse.ok) {
      if (userResponse.status === 404) {
        console.log(`❌ Usuário @${username} não encontrado no GitHub`);
      } else if (userResponse.status === 403) {
        console.log("⚠️  Limite de rate da API do GitHub excedido");
        console.log(
          "💡 Configure GITHUB_TOKEN nas variáveis de ambiente para aumentar o limite",
        );
      } else {
        console.log(`❌ Erro ao buscar perfil: ${userResponse.status}`);
      }
      return;
    }

    const user: GitHubUser = await userResponse.json();
    console.log(`✅ Perfil encontrado: ${user.name || user.login}`);

    // Atualiza foto de perfil
    if (user.avatar_url) {
      data.basics.image = user.avatar_url;
      console.log(`📸 Foto de perfil atualizada\n`);
    }

    // 2. Busca repositórios
    console.log("💼 Buscando repositórios...");
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?sort=stars&per_page=6&type=owner`,
      { headers },
    );

    if (!reposResponse.ok) {
      if (reposResponse.status === 404) {
        console.log(`❌ Repositórios não encontrados`);
      } else if (reposResponse.status === 403) {
        console.log("⚠️  Limite de rate da API do GitHub excedido");
        console.log(
          "💡 Configure GITHUB_TOKEN nas variáveis de ambiente para aumentar o limite",
        );
      } else {
        console.log(`❌ Erro ao buscar repos: ${reposResponse.status}`);
      }
      return;
    }

    const repos: GitHubRepo[] = await reposResponse.json();

    if (repos.length === 0) {
      console.log("📭 Nenhum repositório público encontrado");
      return;
    }

    // Converte repos para formato do portfolio
    const projects = repos.map((repo) => ({
      name: repo.name,
      url: repo.html_url,
    }));

    // Atualiza data.json
    data.projects = projects;

    writeFileSync("./data.json", JSON.stringify(data, null, 2));

    console.log(`✅ ${projects.length} repositórios importados com sucesso!\n`);
    console.log(`📸 Foto de perfil: ${data.basics.image}\n`);

    projects.forEach((project, i) => {
      console.log(`${i + 1}. ${project.name}`);
    });

    console.log("📝 data.json atualizado automaticamente\n");
  } catch (error) {
    console.error("❌ Erro ao buscar repositórios:");
    console.error(error);

    console.log("\n⚠️  Prosseguindo sem importar repositórios");
    console.log("💡 Verifique sua conexão e tente novamente\n");
  }
}

fetchGitHubRepos();
