"use client";

import { motion } from "framer-motion";
import { GlowingCard } from "@/components/magic-ui/glowing-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Brain, Network } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "SalesPredict (AI CRM)",
    slug: "salespredict",
    description:
      "Plataforma CRM moderna impulsada por inteligencia artificial, diseñada para optimizar las ventas mediante modelos predictivos avanzados y analítica en tiempo real.",
    icon: Brain,
    tags: ["Next.js 15", "FastAPI", "XGBoost", "Docker"],
    status: "En Desarrollo",
    opencodeSkills: [
      "fastapi-expert",
      "fastapi-templates",
      "pandas-pro",
      "postgres-pro",
      "redis-development",
      "tailwind-design-system",
      "vercel-react-best-practices",
    ],
    repo: "https://github.com/AlejoTPK/SalesPredict",
  },
  {
    title: "Sovereign CRM",
    slug: "sovereigncrm",
    description:
      "CRM financiero con motor de IA en segundo plano para detección de anomalías 24/7, dashboard interactivo con WebSockets e integración de APIs financieras en tiempo real.",
    icon: Network,
    tags: ["FastAPI", "Reflex", "Groq", "PostgreSQL"],
    status: "En Desarrollo",
    opencodeSkills: [
      "design-md",
      "enhance-prompt",
      "fetch",
      "git-commit",
      "react-components",
      "remotion",
      "shadcn-ui",
      "stitch-design",
      "stitch-loop",
      "taste-design",
    ],
    repo: "https://github.com/AlejoTPK/CRMBolsa",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 md:px-6 lg:px-8">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Proyectos Destacados
          </h2>
          <p className="mt-4 text-muted-foreground">
            Arquitecturas de software diseñadas para resolver problemas complejos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <GlowingCard className="h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <project.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-border text-muted-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {"opencodeSkills" in project && (
                  <p className="text-xs text-muted-foreground mb-4">
                    <span className="text-primary font-medium">Desarrollado con:</span> OpenCode - Antigravity
                  </p>
                )}

                <Link href={`/projects/${project.slug}`}>
                  <Button
                    variant="ghost"
                    className="group px-0 hover:bg-transparent hover:text-primary"
                  >
                    Ver Detalles
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </Link>
              </GlowingCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
