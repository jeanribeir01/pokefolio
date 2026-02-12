import { readFileSync } from "fs";
import { portfolioSchema } from "../src/lib/schema";

console.log("🔍 Validando data.json...\n");

try {
  const raw = readFileSync("./data.json", "utf-8");
  const data = JSON.parse(raw);

  // Valida usando Zod schema
  const result = portfolioSchema.safeParse(data);

  if (result.success) {
    console.log("✅ data.json é válido!");
    console.log("\n📊 Resumo dos dados:");
    console.log(`   Nome: ${result.data.basics.name}`);
    console.log(`   Título: ${result.data.basics.label}`);

    if (result.data.skills) {
      console.log(`   Skills: ${result.data.skills.length} categoria(s)`);
    }

    if (result.data.projects) {
      console.log(`   Projetos: ${result.data.projects.length}`);
    }

    if (result.data.education) {
      console.log(`   Educação: ${result.data.education.length} entrada(s)`);
    }

    if (result.data.work) {
      console.log(`   Experiência: ${result.data.work.length} cargo(s)`);
    }

    console.log("\n✨ Todos os dados estão corretos!\n");
    process.exit(0);
  } else {
    console.error("❌ data.json contém erros:\n");

    result.error.errors.forEach((error) => {
      const path = error.path.join(".");
      console.error(`   • ${path}: ${error.message}`);
    });

    console.error("\n💡 Corrija os erros acima e tente novamente.\n");
    process.exit(1);
  }
} catch (error) {
  if (error instanceof SyntaxError) {
    console.error("❌ Erro de sintaxe no JSON:");
    console.error(`   ${error.message}\n`);
    console.error(
      "💡 Verifique se o arquivo data.json está com a estrutura JSON válida.\n",
    );
  } else {
    console.error("❌ Erro ao ler data.json:");
    console.error(error);
  }
  process.exit(1);
}
