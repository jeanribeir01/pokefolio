"use client";

import { Heart } from "lucide-react";
import type { Config } from "@/types/portfolio";

interface FooterProps {
  config?: Config;
}

export function Footer({ config }: FooterProps) {
  const showCredit = config?.showFooterCredit !== false;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Todos os direitos reservados.
          </p>

          {showCredit && (
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Feito com
              <Heart className="w-4 h-4 text-red-500 fill-red-500 inline" />
              usando
              <a
                href="https://github.com/viu-portfolio/viu"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-primary transition-colors"
              >
                Viu
              </a>
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
