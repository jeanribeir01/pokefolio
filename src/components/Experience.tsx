"use client";

import { PixelIcon } from "@/components/ui/pixel-icon";
import { Badge } from "@/components/ui/badge";
import { formatDate, calculateDuration } from "@/lib/utils";
import type { Work } from "@/types/portfolio";

interface ExperienceProps {
  work: Work[];
  compact?: boolean;
}

function toYear(date?: string) {
  if (!date) return "Atual";
  return date.slice(0, 4);
}

export function Experience({ work, compact = false }: ExperienceProps) {
  if (!work || work.length === 0) return null;

  if (compact) {
    return (
      <section id="experience" className="h-full">
        <div className="flex h-full flex-col gap-0">
          <div>
            <h2 className="pokemon-section-title pokemon-section-title-full pixel-font text-base sm:text-lg">
              Experiência
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
              {work.map((job, index) => (
                <div
                  key={index}
                  className="pokemon-panel border-2 border-foreground/20 bg-background px-3 py-2"
                >
                  <p className="text-sm font-semibold text-foreground">
                    {job.position}
                  </p>
                  <p className="text-xs text-muted-foreground">{job.name}</p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    {toYear(job.startDate)} a {toYear(job.endDate)}
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
    <section id="experience" className="py-20 bg-background">
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
              {"> EXPERIENCIA >"}
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              Minha trajetoria profissional
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            {work.map((job, index) => (
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
                      <PixelIcon name="business" size="lg" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="pixel-font text-lg text-foreground">
                            {job.position}
                          </h3>
                          <div className="flex items-center gap-2 text-sm font-medium text-primary">
                            {job.name}
                            {job.url && (
                              <a
                                href={job.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center"
                              >
                                <PixelIcon name="external-link" size="sm" />
                              </a>
                            )}
                          </div>
                        </div>
                        {!job.endDate && (
                          <Badge
                            variant="secondary"
                            className="pixel-font flex-shrink-0 text-xs"
                          >
                            Atual
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2 border-t-2 border-foreground/20 pt-2 text-xs text-muted-foreground">
                        <span className="pt-1">
                          {formatDate(job.startDate)}
                        </span>
                        <span className="pt-1">-</span>
                        <span className="pt-1">
                          {job.endDate ? formatDate(job.endDate) : "Presente"}
                        </span>
                        <span className="pt-1">|</span>
                        <span className="pt-1 font-semibold">
                          {calculateDuration(job.startDate, job.endDate)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {(job.summary ||
                    (job.highlights && job.highlights.length > 0)) && (
                    <div className="mt-4 space-y-3 border-t-2 border-foreground/20 pt-4">
                      {job.summary && (
                        <p className="text-sm text-muted-foreground">
                          {job.summary}
                        </p>
                      )}

                      {job.highlights && job.highlights.length > 0 && (
                        <ul className="space-y-1.5 text-xs">
                          {job.highlights.slice(0, 3).map((highlight, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-muted-foreground"
                            >
                              <span className="mt-0.5 flex-shrink-0 text-primary">
                                &gt;
                              </span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
