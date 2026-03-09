import { data } from "@/lib/data";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { EducationSection } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative px-4 py-8 md:px-6 md:py-10 lg:px-8 lg:py-12">
        <div className="mx-auto grid w-full max-w-[1400px] gap-4 lg:grid-cols-[1fr_2fr_1fr] items-stretch">
          <div className="w-full h-full">
            <Hero data={data.basics} config={data.config} />
          </div>

          <section id="summary" className="h-full">
            <div className="flex h-full flex-col gap-0">
              <div>
                <h2 className="pokemon-section-title pokemon-section-title-full pixel-font text-base sm:text-lg">
                  Sobre Mim
                </h2>
              </div>
              <div
                className="pokemon-panel pokemon-panel-no-top-border bg-card/80 p-4 md:p-5 flex-1"
                style={{
                  boxShadow:
                    "4px 4px 0px 0px rgba(0, 0, 0, 0.3), 8px 8px 0px 0px rgba(0, 0, 0, 0.12)",
                }}
              >
                <p className="text-xl leading-relaxed text-muted-foreground">
                  {data.basics.summary}
                </p>
              </div>
            </div>
          </section>

          <section
            id="hero-gif"
            className="pokemon-panel bg-card/80 p-4 md:p-5 flex items-stretch"
            style={{
              boxShadow:
                "4px 4px 0px 0px rgba(0, 0, 0, 0.3), 8px 8px 0px 0px rgba(0, 0, 0, 0.12)",
            }}
          >
            {data.basics.heroGifUrl ? (
              <Image
                src={data.basics.heroGifUrl}
                alt="GIF de destaque"
                width={400}
                height={400}
                className="aspect-square w-full h-full pokemon-panel border-2 border-foreground/20 object-cover"
                loading="lazy"
                unoptimized
              />
            ) : (
              <div className="flex aspect-square w-full h-full items-center justify-center pokemon-panel border-2 border-dashed border-foreground/30 px-2 text-center text-xs text-muted-foreground">
                Adicione `basics.heroGifUrl` no data.json
              </div>
            )}
          </section>
        </div>
      </section>

      <section className="px-4 pb-10 md:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-[1400px] flex-wrap gap-4 lg:gap-5">
          <div className="h-[360px] w-full min-w-[280px] flex-1 lg:w-[calc(50%-0.75rem)]">
            {data.skills && <Skills skills={data.skills} compact />}
          </div>
          <div className="h-[360px] w-full min-w-[280px] flex-1 lg:w-[calc(50%-0.75rem)]">
            {data.projects && <Projects projects={data.projects} compact />}
          </div>
          <div className="h-[360px] w-full min-w-[280px] flex-1 lg:w-[calc(50%-0.75rem)]">
            {data.work && <Experience work={data.work} compact />}
          </div>
          <div className="h-[360px] w-full min-w-[280px] flex-1 lg:w-[calc(50%-0.75rem)]">
            {data.education && (
              <EducationSection education={data.education} compact />
            )}
          </div>
        </div>
      </section>

      <Footer config={data.config} />
    </main>
  );
}
