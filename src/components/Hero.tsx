"use client";

import Image from "next/image";
import { PixelIcon } from "@/components/ui/pixel-icon";
import { getStarterTheme } from "@/lib/pokemonTheme";
import type { Basics, Config } from "@/types/portfolio";

interface HeroProps {
  data: Basics;
  config?: Config;
}

const socialIconMap: Record<string, "github" | "linkedin" | "twitter"> = {
  GitHub: "github",
  LinkedIn: "linkedin",
  Twitter: "twitter",
};

export function Hero({ data, config }: HeroProps) {
  const starterTheme = getStarterTheme(config?.starterPokemon);

  return (
    <section id="hero" className="relative w-full h-full min-h-[200px]">
      <div
        className="relative w-full h-full pokemon-panel bg-card/80 p-4 md:p-5 flex flex-col"
        style={{
          boxShadow:
            "4px 4px 0px 0px rgba(0, 0, 0, 0.3), 8px 8px 0px 0px rgba(0, 0, 0, 0.12)",
        }}
      >
        <div className="grid grid-cols-1 items-start gap-3 md:grid-cols-[auto,minmax(0,1fr)] md:gap-4">
          <div className="flex flex-row items-start gap-3">
            {data.image && (
              <div
                className="relative h-28 w-28 flex-shrink-0 overflow-hidden border-4 border-primary pokemon-panel bg-background sm:h-32 sm:w-32"
                style={{
                  boxShadow:
                    "3px 3px 0px 0px rgba(0, 0, 0, 0.24), 6px 6px 0px 0px rgba(0, 0, 0, 0.12)",
                }}
              >
                <Image
                  src={data.image}
                  alt={data.name}
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = "/placeholder-avatar.svg";
                  }}
                />
              </div>
            )}

            <div
              className="relative h-28 w-28 flex-shrink-0 overflow-hidden pokemon-panel bg-background sm:h-32 sm:w-32"
              style={{
                boxShadow:
                  "3px 3px 0px 0px rgba(0, 0, 0, 0.24), 6px 6px 0px 0px rgba(0, 0, 0, 0.12)",
              }}
            >
              <Image
                src={starterTheme.sprite}
                alt={starterTheme.speciesLabel}
                width={128}
                height={128}
                unoptimized
                className="h-full w-full object-contain p-2 [image-rendering:pixelated]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 min-w-0">
            <div>
              <h1 className="text-lg font-semibold leading-tight tracking-tight text-foreground sm:text-xl md:text-2xl">
                {data.name}
              </h1>
              <p className="text-sm font-medium text-primary md:text-base">
                {data.label}
              </p>
            </div>

            {data.location && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <PixelIcon
                  name="location-pin"
                  size="md"
                  className="text-[hsl(var(--primary))]"
                />
                <span className="text-xs sm:text-sm">
                  {data.location.city}, {data.location.region}
                </span>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-2 pt-2">
              {data.email && (
                <a
                  href={`mailto:${data.email}`}
                  className="inline-flex items-center gap-2 border-2 border-foreground bg-secondary text-[hsl(var(--primary))] px-4 py-2 text-sm font-semibold pixel-font hover:bg-secondary/80 transition-colors"
                >
                  <PixelIcon
                    name="envelope"
                    size="md"
                    className="text-[hsl(var(--primary))]"
                  />
                  <span className="text-[hsl(var(--primary))]">CONTATO</span>
                </a>
              )}

              {data.profiles && data.profiles.length > 0 && (
                <div className="flex items-center gap-1.5">
                  {data.profiles.map((profile, index) => {
                    const iconName: "github" | "linkedin" | "twitter" =
                      (socialIconMap[profile.network] || "twitter") as
                        | "github"
                        | "linkedin"
                        | "twitter";

                    return (
                      <a
                        key={index}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={profile.network}
                        title={profile.network}
                        className="inline-flex items-center justify-center border-2 border-foreground bg-secondary text-[hsl(var(--primary))] w-10 h-10 hover:bg-secondary/80 transition-colors"
                      >
                        <PixelIcon
                          name={iconName}
                          size="md"
                          className="text-[hsl(var(--primary))]"
                        />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
