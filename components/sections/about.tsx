"use client";

import { motion } from "framer-motion";
import { GraduationCap, Globe, User, Zap, Award } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-24 px-4 md:px-6 lg:px-8">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Sobre mí
          </h2>
          <p className="mt-4 text-muted-foreground">
            AI, Backend & Automation Engineer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 rounded-xl border border-border/50 bg-card/30 p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <User className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Héctor Alejandro Castrillón Cardona
              </h3>
            </div>

            <div className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                Disponible para trabajar
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Soy estudiante de Ingeniería de Sistemas (9.º semestre) con perfil Full Stack,
              especializado en el desarrollo, automatización y despliegue de soluciones de Inteligencia
              Artificial y Backend. Cuento con experiencia práctica optimizando procesos empresariales y
              construyendo agentes autónomos con arquitecturas RAG (Qdrant), Meta API y n8n. Busco aplicar
              mi experiencia técnica en un rol donde pueda escalar arquitecturas, automatizar flujos
              operativos y construir productos basados en IA.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl border border-border/50 bg-card/30 p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Idiomas</h3>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-muted-foreground">Español</span>
                  <span className="text-xs text-primary font-medium">Nativo</span>
                </div>
                <div className="h-2 rounded-full bg-border/30">
                  <div className="h-2 rounded-full bg-primary w-full" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-muted-foreground">Inglés</span>
                  <span className="text-xs text-primary font-medium">B2</span>
                </div>
                <div className="h-2 rounded-full bg-border/30">
                  <div className="h-2 rounded-full bg-primary w-3/4" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3 rounded-xl border border-border/50 bg-card/30 p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Educación y Certificaciones
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg border border-border/50 bg-night-900/50 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="h-4 w-4 text-primary shrink-0" />
                  <h4 className="font-semibold text-foreground text-sm">
                    Ingeniería de Sistemas y Telecomunicaciones
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground mb-1">
                  Universidad de Manizales
                </p>
                <p className="text-xs text-muted-foreground">
                  2021 - Actualidad · 9.º semestre
                </p>
              </div>

              <div className="rounded-lg border border-border/50 bg-night-900/50 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-4 w-4 text-primary shrink-0" />
                  <h4 className="font-semibold text-foreground text-sm">
                    Bootcamp de Inteligencia Artificial
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground mb-1">
                  Nivel Básico · 159 horas
                </p>
                <p className="text-xs text-muted-foreground mb-2">
                  Expedida el 26 de agosto de 2025 · Avalado por MinTIC, Universidad de Antioquia,
                  Universidad de Caldas y Ubicua Technology
                </p>
                <a
                  href="https://res.cloudinary.com/dxhbunijg/image/upload/f_auto,q_auto/v1779383958/Presentaci%C3%B3n_de_PowerPoint_page-0001_sitypo.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors mt-2"
                >
                  <Zap className="h-3 w-3" />
                  Ver certificado
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
