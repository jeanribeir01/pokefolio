"use client";

import { PixelIcon } from "@/components/ui/pixel-icon";
import type { Project } from "@/types/portfolio";

interface ProjectsProps {
  projects: Project[];
  compact?: boolean;
}

export function Projects({ projects, compact = false }: ProjectsProps) {
  if (!projects || projects.length === 0) return null;

  if (compact) {
    return (
      <section id="projects" className="h-full">
        <div className="flex h-full flex-col gap-0">
          <div>
            <h2 className="pokemon-section-title pokemon-section-title-full pixel-font text-base sm:text-lg">
              Projetos
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
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="pokemon-panel border-2 border-foreground/20 bg-background px-3 py-2"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-foreground">
                      {project.name}
                    </p>
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline shrink-0"
                      >
                        Link
                        <PixelIcon name="external-link" size="sm" />
                      </a>
                    ) : (
                      <span className="text-xs text-muted-foreground shrink-0">
                        Sem link
                      </span>
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

  return (
    <section id="projects" className="py-20 bg-background">
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
              ▸ PROJETOS ▸
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Alguns dos meus trabalhos e contribuições
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index}>
                <div
                  className="h-full pokemon-panel bg-card/80 p-5 flex flex-col"
                  style={{
                    boxShadow:
                      "4px 4px 0px 0px rgba(0, 0, 0, 0.2), 8px 8px 0px 0px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <div className="border-b-4 border-primary pb-2">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {project.url?.includes("github.com") ? (
                          <PixelIcon name="github" size="md" />
                        ) : (
                          <PixelIcon name="external-link" size="md" />
                        )}
                        <h3 className="pixel-font text-lg text-foreground line-clamp-1">
                          {project.url ? (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {project.name}
                            </a>
                          ) : (
                            project.name
                          )}
                        </h3>
                      </div>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground flex-shrink-0"
                        >
                          <PixelIcon name="external-link" size="md" />
                        </a>
                      )}
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
