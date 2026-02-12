"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Globe,
  Github,
  Linkedin,
  Twitter,
  Languages,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Basics, Language } from "@/types/portfolio";

interface ContactProps {
  basics: Basics;
  languages?: Language[];
}

const socialIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
};

export function Contact({ basics, languages }: ContactProps) {
  const contactMethods = [
    basics.email && {
      icon: Mail,
      label: "Email",
      value: basics.email,
      href: `mailto:${basics.email}`,
    },
    basics.phone && {
      icon: Phone,
      label: "Telefone",
      value: basics.phone,
      href: `tel:${basics.phone}`,
    },
    basics.url && {
      icon: Globe,
      label: "Website",
      value: basics.url,
      href: basics.url,
    },
  ].filter(Boolean);

  return (
    <section id="contact" className="py-20 bg-muted/30">
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
              Contato
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Entre em contato comigo
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
            {/* Informações de Contato */}
            <Card>
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
                <CardDescription>Como você pode me encontrar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => {
                  if (!method) return null;
                  const Icon = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      target={method.label === "Website" ? "_blank" : undefined}
                      rel={
                        method.label === "Website"
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">
                          {method.label}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {method.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            {/* Redes Sociais e Idiomas */}
            <div className="space-y-6">
              {/* Redes Sociais */}
              {basics.profiles && basics.profiles.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Redes Sociais</CardTitle>
                    <CardDescription>Me acompanhe nas redes</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {basics.profiles.map((profile, index) => {
                      const Icon = socialIcons[profile.network] || Globe;
                      return (
                        <Button
                          key={index}
                          variant="outline"
                          className="w-full justify-start"
                          asChild
                        >
                          <a
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Icon className="w-4 h-4" />
                            {profile.network}
                          </a>
                        </Button>
                      );
                    })}
                  </CardContent>
                </Card>
              )}

              {/* Idiomas */}
              {languages && languages.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Languages className="w-5 h-5" />
                      Idiomas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {languages.map((lang, index) => (
                        <Badge key={index} variant="secondary">
                          {lang.language} — {lang.fluency}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
