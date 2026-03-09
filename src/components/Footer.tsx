"use client";

import { PixelIcon } from "@/components/ui/pixel-icon";
import type { Config } from "@/types/portfolio";

interface FooterProps {
  config?: Config;
}

export function Footer({ config }: FooterProps) {
  const showCredit = config?.showFooterCredit !== false;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-border bg-background">
      <div className="mx-auto w-full max-w-[1400px] px-4 py-3 md:px-6 md:py-4 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          <p className="m-0 pixel-font text-xs text-muted-foreground text-center md:text-left sm:text-sm">
            © {currentYear} Todos os direitos reservados.
          </p>

          {showCredit && (
            <p className="m-0 flex items-center gap-1 text-xs text-muted-foreground sm:text-sm">
              Feito com
              <PixelIcon name="heart" size="sm" className="text-red-500" />
              usando
              <a
                href="https://github.com/pokefolio-portfolio/pokefolio"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-primary"
              >
                Pokefolio
              </a>
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
