"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate, calculateDuration } from "@/lib/utils";
import type { Education } from "@/types/portfolio";

interface EducationProps {
  education: Education[];
}

export function EducationSection({ education }: EducationProps) {
  if (!education || education.length === 0) return null;

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Formação
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Minha jornada acadêmica
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, index) => (
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
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <CardTitle>{edu.institution}</CardTitle>
                        <CardDescription>
                          {edu.studyType} em {edu.area}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground pt-1">
                          <span>{formatDate(edu.startDate)}</span>
                          <span>—</span>
                          <span>
                            {edu.endDate ? formatDate(edu.endDate) : "Presente"}
                          </span>
                          <span>•</span>
                          <span>
                            {calculateDuration(edu.startDate, edu.endDate)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
