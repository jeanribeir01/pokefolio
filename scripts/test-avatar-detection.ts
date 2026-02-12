/**
 * Script de teste para demonstrar a detecção automática de avatar
 */

// Simula dados com placeholder
const testData = {
  basics: {
    image: "https://github.com/seu-usuario.png", // Placeholder
    profiles: [
      {
        network: "GitHub",
        username: "octocat", // Usuário real do GitHub
        url: "https://github.com/octocat",
      },
    ],
  },
};

function detectAvatar(data: typeof testData) {
  const processed = { ...data };

  if (processed.basics?.profiles) {
    const githubProfile = processed.basics.profiles.find(
      (p) => p.network === "GitHub",
    );

    if (githubProfile?.username) {
      const currentImage = processed.basics.image || "";
      const isPlaceholder =
        currentImage.includes("seu-usuario") ||
        currentImage === "" ||
        currentImage === "https://github.com/.png";

      if (isPlaceholder) {
        processed.basics.image = `https://github.com/${githubProfile.username}.png`;
        return {
          detected: true,
          oldImage: currentImage,
          newImage: processed.basics.image,
        };
      }
    }
  }

  return { detected: false };
}

// Executa teste
console.log("\n🧪 Testando detecção automática de avatar...\n");
console.log("📋 Dados de entrada:");
console.log(JSON.stringify(testData.basics, null, 2));

const result = detectAvatar(testData);

console.log("\n✨ Resultado:");
if (result.detected) {
  console.log("✅ Avatar detectado e atualizado!");
  console.log(`   Antes: ${result.oldImage}`);
  console.log(`   Depois: ${result.newImage}`);
  console.log(`\n🔗 Teste a URL: ${result.newImage}`);
} else {
  console.log("⚠️  Nenhuma substituição necessária");
}
console.log();
