"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Download } from "lucide-react";
import dynamic from "next/dynamic";
import { GooeyText } from "@/components/ui/gooey-text";
import ShimmerText from "@/components/ui/shimmer-text";

const SplineScene = dynamic(
  () => import("@/components/ui/splite").then((m) => ({ default: m.SplineScene })),
  { ssr: false, loading: () => <div className="w-full h-full bg-night-900/50 rounded-xl" /> }
);

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24 md:px-6 lg:px-8">
      <div className="container relative z-10 grid max-w-7xl grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2 items-center">
        <div className="flex flex-col items-start gap-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Ingeniero de Sistemas & IA
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-400 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
              </span>
              Open to work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-6xl lg:text-5xl xl:text-6xl w-full"
          >
            <ShimmerText className="pb-3 -mb-3 leading-none">Ingeniero</ShimmerText>
            <GooeyText 
              texts={["IA", "Full Stack", "Backend", "de Automatización", "DevOps"]}
              className="relative h-[1.2em] w-full"
              textClassName="bg-gradient-to-r from-tech-blue to-purple-500 bg-clip-text text-transparent"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Diseño arquitecturas de software robustas, orquesto flujos de datos complejos y construyo agentes inteligentes que transforman la infraestructura empresarial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-tech-blue to-blue-600 text-white font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span className="relative">
                Ver Proyectos
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-tech-blue to-blue-600 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              </span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="https://res.cloudinary.com/dxhbunijg/image/upload/f_auto,q_auto/v1779387799/CurrriculumAIAlejandro_page-0001_dh22dc.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-300 font-semibold text-sm backdrop-blur-sm hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-purple-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Download className="h-4 w-4" />
              Descargar CV
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-border/60 bg-white/[0.03] text-foreground font-semibold text-sm backdrop-blur-sm hover:bg-white/[0.06] hover:border-primary/40 hover:text-primary hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Terminal className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
              Contactar
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative h-[400px] w-full sm:h-[500px] lg:h-[600px] flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"
        >
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full flex items-center justify-center"
          >
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
