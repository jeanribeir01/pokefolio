"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Code2,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Mail,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Início", icon: User },
  { id: "skills", label: "Habilidades", icon: Code2 },
  { id: "projects", label: "Projetos", icon: FolderGit2 },
  { id: "experience", label: "Experiência", icon: Briefcase },
  { id: "education", label: "Formação", icon: GraduationCap },
  { id: "contact", label: "Contato", icon: Mail },
];

export function SideNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            const aTop = a.boundingClientRect.top;
            const bTop = b.boundingClientRect.top;
            return Math.abs(aTop) - Math.abs(bTop);
          });

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      },
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      <div className="flex flex-col gap-1 rounded-2xl border border-border/60 bg-background/80 backdrop-blur-md p-2 shadow-lg">
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = activeSection === id;

          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`
                group relative flex items-center gap-3 rounded-xl px-3 py-2.5
                cursor-pointer select-none
                transition-all duration-200 text-sm font-medium
                ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }
              `}
              aria-label={label}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">{label}</span>

              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 rounded-xl bg-primary -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Theme toggle */}
      <div className="flex justify-center rounded-2xl border border-border/60 bg-background/80 backdrop-blur-md p-2 shadow-lg">
        <ThemeToggle />
      </div>
    </nav>
  );
}
