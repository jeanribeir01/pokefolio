"use client";

import { Badge } from "@/components/ui/badge";

interface SkillsProps {
  skills: string[];
  compact?: boolean;
}

export function Skills({ skills, compact = false }: SkillsProps) {
  if (!skills || skills.length === 0) return null;

  if (compact) {
    return (
      <section id="skills" className="h-full">
        <div className="flex h-full flex-col gap-0">
          <div>
            <h2 className="pokemon-section-title pokemon-section-title-full pixel-font text-base sm:text-lg">
              Habilidades
            </h2>
          </div>
          <div
            className="h-full min-h-0 overflow-hidden pokemon-panel pokemon-panel-no-top-border bg-card/80 p-4 md:p-5 flex flex-col"
            style={{
              boxShadow:
                "4px 4px 0px 0px rgba(0, 0, 0, 0.3), 8px 8px 0px 0px rgba(0, 0, 0, 0.12)",
            }}
          >
            <div className="min-h-0 flex-1 overflow-y-auto pr-2">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={`${skill}-${index}`}
                    variant="secondary"
                    className="border-2 border-foreground text-foreground bg-secondary pixel-font text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20 bg-background pokemon-scanlines">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="space-y-12">
          <div
            className="text-center space-y-4 pokemon-panel bg-card/70 p-6 border-4"
            style={{
              boxShadow:
                "4px 4px 0px 0px rgba(0, 0, 0, 0.2), 8px 8px 0px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h2 className="pokemon-section-title pixel-font text-2xl md:text-3xl">
              ▸ HABILIDADES ▸
            </h2>
          </div>

          <div
            className="pokemon-panel bg-card/80 p-6"
            style={{
              boxShadow:
                "4px 4px 0px 0px rgba(0, 0, 0, 0.2), 8px 8px 0px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="border-2 border-foreground text-foreground bg-secondary pixel-font text-xs"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
