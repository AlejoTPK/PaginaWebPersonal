"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import ShimmerText from "@/components/ui/shimmer-text";
import {
  Github,
  Linkedin,
  Mail,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/AlejoTPK",
    color: "hover:text-white hover:bg-white/10",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/alejandrocastrilloncardona",
    color: "hover:text-blue-400 hover:bg-blue-400/10",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:alejandrocastrilloncar@gmail.com",
    color: "hover:text-primary hover:bg-primary/10",
  },
];

export function Contact() {
  return (
    <footer id="contact" className="relative border-t border-border/50 py-24 px-4 md:px-6 lg:px-8">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <ShimmerText className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contacto
          </ShimmerText>
          <p className="mt-4 text-muted-foreground">
            ¿Buscas potenciar tu equipo o tienes un proyecto en mente? Hablemos.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <a
              href="https://wa.link/z0f6j1"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-lg shadow-xl shadow-green-500/20 hover:shadow-green-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              <MessageSquare className="h-5 w-5" />
              <span className="relative">
                Escribir por WhatsApp
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              </span>
            </a>
            <p className="text-sm text-muted-foreground">
              Respuesta rápida · Abierto a nuevas oportunidades
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center gap-6"
          >
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              También puedes encontrarme en
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-3 rounded-full text-muted-foreground border border-border/50 hover:border-primary/50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    link.color
                  )}
                  aria-label={`Visitar ${link.name}`}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Con amor, Alejandro y OpenCode :)
          </p>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="border-border/50 text-muted-foreground">
              Hecho con Next.js & Framer Motion
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
}
