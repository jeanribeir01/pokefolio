/**
 * Script para atualizar automaticamente o nome do repositório no next.config.ts
 * Detecta o nome via GitHub Actions ou package.json
 */

import { readFileSync, writeFileSync } from "fs";
import { execSync } from "child_process";

function getRepositoryName(): string {
  // 1. Tenta pegar do GitHub Actions (durante o deploy)
  if (process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split("/")[1];
    console.log(`✅ Nome detectado via GitHub Actions: ${repoName}`);
    return repoName;
  }

  // 2. Tenta pegar do git remote origin
  try {
    const remoteUrl = execSync("git config --get remote.origin.url", {
      encoding: "utf-8",
    }).trim();

    // Extrai nome do repo de URLs como:
    // https://github.com/user/repo.git
    // git@github.com:user/repo.git
    const match = remoteUrl.match(/\/([^/]+?)(\.git)?$/);
    if (match) {
      const repoName = match[1];
      console.log(`✅ Nome detectado via git remote: ${repoName}`);
      return repoName;
    }
  } catch (error) {
    console.log("⚠️  Não foi possível detectar via git remote");
  }

  // 3. Fallback para o package.json
  try {
    const packageJson = JSON.parse(readFileSync("./package.json", "utf-8"));
    if (packageJson.name) {
      console.log(`✅ Nome detectado via package.json: ${packageJson.name}`);
      return packageJson.name;
    }
  } catch (error) {
    console.log("⚠️  Erro ao ler package.json");
  }

  // 4. Fallback final
  console.log("⚠️  Usando nome padrão: pokefolio");
  return "pokefolio";
}

function updateNextConfig(repoName: string) {
  const configPath = "./next.config.ts";

  try {
    let content = readFileSync(configPath, "utf-8");

    // Atualiza o basePath
    const updatedContent = content.replace(
      /basePath:\s*process\.env\.NODE_ENV\s*===\s*["']production["']\s*\?\s*["']\/[^"']+["']\s*:\s*["']["']/,
      `basePath: process.env.NODE_ENV === "production" ? "/${repoName}" : ""`,
    );

    if (content !== updatedContent) {
      writeFileSync(configPath, updatedContent, "utf-8");
      console.log(`\n✅ next.config.ts atualizado com sucesso!`);
      console.log(`📝 basePath: "/${repoName}"\n`);
    } else {
      console.log(`\n✅ next.config.ts já está configurado corretamente\n`);
    }
  } catch (error) {
    console.error(`❌ Erro ao atualizar ${configPath}:`, error);
    process.exit(1);
  }
}

// Executa
console.log("\n🔧 Detectando nome do repositório...\n");
const repoName = getRepositoryName();
updateNextConfig(repoName);
