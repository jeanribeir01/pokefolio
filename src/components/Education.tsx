"use client";

import { PixelIcon } from "@/components/ui/pixel-icon";
import type { Education } from "@/types/portfolio";

interface EducationProps {
  education: Education[];
  compact?: boolean;
}

function toYear(date?: string) {
  if (!date) return "Atual";
  return date.slice(0, 4);
}

export function EducationSection({
  education,
  compact = false,
}: EducationProps) {
  if (!education || education.length === 0) return null;

  if (compact) {
    return (
      <section id="education" className="h-full">
        <div className="flex h-full flex-col gap-0">
          <div>
            <h2 className="pokemon-section-title pokemon-section-title-full pixel-font text-base sm:text-lg">
              Formação
            </h2>
          </div>
          <div
            className="h-full min-h-0 overflow-hidden pokemon-panel pokemon-panel-no-top-border bg-card/80 p-4 md:p-5 flex flex-col"
            style={{
              boxShadow:
                "4px 4px 0px 0px rgba(0, 0, 0, 0.3), 8px 8px 0px 0px rgba(0, 0, 0, 0.12)",
            }}
          >
            <div className="min-h-0 flex-1 space-y-2 overflow-y-auto pr-2">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="pokemon-panel border-2 border-foreground/20 bg-background px-3 py-2"
                >
                  <p className="text-sm font-semibold text-foreground">
                    {edu.studyType} em {edu.area}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {edu.institution}
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    {toYear(edu.startDate)} a {toYear(edu.endDate)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="education" className="py-20 bg-background pokemon-scanlines">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div
            className="pokemon-panel border-4 bg-card/70 p-6 text-center space-y-4"
            style={{
              boxShadow:
                "4px 4px 0px 0px rgba(0, 0, 0, 0.2), 8px 8px 0px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h2 className="pokemon-section-title pixel-font text-2xl md:text-3xl">
              {"> FORMACAO >"}
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              Minha jornada academica
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            {education.map((edu, index) => (
              <div key={index}>
                <div
                  className="pokemon-panel bg-card/80 p-5"
                  style={{
                    boxShadow:
                      "4px 4px 0px 0px rgba(0, 0, 0, 0.2), 8px 8px 0px 0px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 border-4 border-primary bg-primary/10 p-3">
                      <PixelIcon name="graduation-cap" size="lg" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="pixel-font text-lg text-foreground">
                        {edu.institution}
                      </h3>
                      <p className="text-sm font-medium text-primary">
                        {edu.studyType} em {edu.area}
                      </p>
                      <div className="flex flex-wrap gap-2 border-t-2 border-foreground/20 pt-1 text-xs text-muted-foreground">
                        <span className="pt-1 font-semibold">
                          {toYear(edu.startDate)}
                        </span>
                        <span className="pt-1">-</span>
                        <span className="pt-1">{toYear(edu.endDate)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
