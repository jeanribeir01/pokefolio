"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Basics } from "@/types/portfolio";

interface HeroProps {
  data: Basics;
}

const socialIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Instagram: Twitter,
  Facebook: Twitter,
};

export function Hero({ data }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {data.image && (
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                <Image
                  src={data.image}
                  alt={data.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </motion.div>

          {/* Nome e Título */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {data.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              {data.label}
            </p>
          </motion.div>

          {/* Localização */}
          {data.location && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <MapPin className="w-4 h-4" />
              <span>
                {data.location.city}, {data.location.region} -{" "}
                {data.location.countryCode}
              </span>
            </motion.div>
          )}

          {/* Resumo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-2xl text-lg text-muted-foreground leading-relaxed"
          >
            {data.summary}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {data.email && (
              <Button asChild size="lg">
                <a href={`mailto:${data.email}`}>
                  <Mail className="w-4 h-4" />
                  Entre em Contato
                </a>
              </Button>
            )}
            {data.url && (
              <Button asChild variant="outline" size="lg">
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Website
                </a>
              </Button>
            )}
          </motion.div>

          {/* Redes Sociais */}
          {data.profiles && data.profiles.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-4"
            >
              {data.profiles.map((profile, index) => {
                const Icon = socialIcons[profile.network] || ExternalLink;
                return (
                  <Button key={index} variant="ghost" size="icon" asChild>
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={profile.network}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  </Button>
                );
              })}
            </motion.div>
          )}
        </div>
      </div>

      {/* Decoração de fundo */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
