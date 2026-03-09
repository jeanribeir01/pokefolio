import { readFileSync, writeFileSync } from "fs";
import satori from "satori";
import sharp from "sharp";

interface PortfolioData {
  basics: {
    name: string;
    label: string;
    summary: string;
  };
  config?: {
    accentColor?: string;
  };
}

async function generateOGImage() {
  console.log("🎨 Gerando Open Graph Image...\n");

  try {
    // Lê os dados do portfolio
    const data: PortfolioData = JSON.parse(
      readFileSync("./data.json", "utf-8"),
    );

    const name = data.basics.name;
    const label = data.basics.label;
    const accentColor = data.config?.accentColor || "#6366f1";

    // Baixa a fonte Noto Sans
    console.log("⬇️  Baixando fontes...");
    const fontResponse = await fetch(
      "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans@latest/latin-400-normal.ttf",
    );

    if (!fontResponse.ok) {
      throw new Error(`Erro ao baixar fonte: ${fontResponse.status}`);
    }

    const fontData = await fontResponse.arrayBuffer();
    console.log("✓ Fontes baixadas com sucesso\n");

    // Template HTML/CSS para a imagem
    // @ts-ignore - Satori aceita este formato mas o tipo TypeScript não reconhece
    const svg = await satori(
      {
        type: "div",
        props: {
          style: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            background: `linear-gradient(135deg, ${accentColor}22 0%, ${accentColor}11 100%)`,
            padding: "80px",
            fontFamily: "Noto Sans",
            position: "relative",
          },
          children: [
            // Pattern de fundo
            {
              type: "div",
              props: {
                style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `radial-gradient(circle at 25px 25px, ${accentColor}15 2%, transparent 0%), radial-gradient(circle at 75px 75px, ${accentColor}15 2%, transparent 0%)`,
                  backgroundSize: "100px 100px",
                },
              },
            },
            // Conteúdo
            {
              type: "div",
              props: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flex: 1,
                  position: "relative",
                  zIndex: 1,
                },
                children: [
                  {
                    type: "h1",
                    props: {
                      style: {
                        fontSize: "72px",
                        fontWeight: "bold",
                        color: "#1a1a1a",
                        marginBottom: "20px",
                        lineHeight: 1.2,
                      },
                      children: name,
                    },
                  },
                  {
                    type: "p",
                    props: {
                      style: {
                        fontSize: "42px",
                        color: accentColor,
                        fontWeight: 600,
                        marginBottom: "40px",
                      },
                      children: label,
                    },
                  },
                  {
                    type: "div",
                    props: {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                      },
                      children: [
                        {
                          type: "div",
                          props: {
                            style: {
                              width: "60px",
                              height: "6px",
                              background: accentColor,
                              borderRadius: "3px",
                            },
                          },
                        },
                        {
                          type: "p",
                          props: {
                            style: {
                              fontSize: "28px",
                              color: "#666",
                              fontWeight: 500,
                            },
                            children: "Portfólio Profissional",
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
            // Footer com logo Pokefolio
            {
              type: "div",
              props: {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginTop: "auto",
                  position: "relative",
                  zIndex: 1,
                },
                children: [
                  {
                    type: "div",
                    props: {
                      style: {
                        width: "40px",
                        height: "40px",
                        background: accentColor,
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                      children: {
                        type: "span",
                        props: {
                          style: {
                            fontSize: "24px",
                            color: "white",
                            fontWeight: "bold",
                          },
                          children: "👀",
                        },
                      },
                    },
                  },
                  {
                    type: "span",
                    props: {
                      style: {
                        fontSize: "24px",
                        color: "#999",
                        fontWeight: 500,
                      },
                      children: "Feito com Pokefolio",
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Noto Sans",
            data: fontData,
            weight: 400,
            style: "normal",
          },
        ],
      },
    );

    // Converte SVG para PNG usando sharp
    const png = await sharp(Buffer.from(svg)).png().toBuffer();

    // Salva a imagem
    writeFileSync("./public/og-image.png", png);

    console.log("✅ Open Graph Image gerada com sucesso!");
    console.log("📁 Localização: public/og-image.png");
    console.log(`📏 Dimensões: 1200x630px\n`);
    console.log(`🎨 Tema: ${accentColor}`);
    console.log(`👤 Nome: ${name}`);
    console.log(`💼 Título: ${label}\n`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Erro ao gerar OG Image:");
    console.error(error);

    // Não falha o build, apenas avisa
    console.log("\n⚠️  Prosseguindo sem OG Image personalizada");
    console.log("💡 Adicione uma imagem manualmente em public/og-image.png\n");

    process.exit(0);
  }
}

generateOGImage();
