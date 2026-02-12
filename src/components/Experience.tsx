"use client";

import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate, calculateDuration } from "@/lib/utils";
import type { Work } from "@/types/portfolio";

interface ExperienceProps {
  work: Work[];
}

export function Experience({ work }: ExperienceProps) {
  if (!work || work.length === 0) return null;

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Experiência
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Minha trajetória profissional
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {work.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <CardTitle>{job.position}</CardTitle>
                            <CardDescription className="flex items-center gap-2">
                              {job.name}
                              {job.url && (
                                <a
                                  href={job.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center hover:text-primary transition-colors"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              )}
                            </CardDescription>
                          </div>
                          {!job.endDate && (
                            <Badge variant="secondary">Atual</Badge>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground pt-1">
                          <span>{formatDate(job.startDate)}</span>
                          <span>—</span>
                          <span>
                            {job.endDate ? formatDate(job.endDate) : "Presente"}
                          </span>
                          <span>•</span>
                          <span>
                            {calculateDuration(job.startDate, job.endDate)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  {(job.summary ||
                    (job.highlights && job.highlights.length > 0)) && (
                    <CardContent className="space-y-4">
                      {job.summary && (
                        <p className="text-sm text-muted-foreground">
                          {job.summary}
                        </p>
                      )}

                      {job.highlights && job.highlights.length > 0 && (
                        <ul className="space-y-2 text-sm">
                          {job.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
