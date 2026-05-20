"use client";

import { motion } from "framer-motion";
import HighlightCard from "@/components/highlight-card";
import ShimmerText from "@/components/ui/shimmer-text";
import { Briefcase, Bot } from "lucide-react";

const experiences = [
  {
    title: "Desarrollador Backend & Automatización",
    subtitle: "Empresa E-commerce | 2025 - Actualidad",
    description: [
      "Diseñé e implementé flujos de automatización complejos utilizando n8n y funciones de JavaScript para conectar sistemas SaaS, optimizando la gestión y ordenamiento de datos empresariales.",
      "Desarrollé lógicas de backend en Python y gestioné integraciones vía API para plataformas de atención como LucidBot y ChateaPro.",
      "Automaticé la generación de reportes operativos, reduciendo la carga manual del equipo.",
      "Elaboré la documentación técnica de endpoints e iteré pruebas exhaustivas de APIs REST con Postman, validando procesos críticos como la duplicación y activación de tiendas online.",
    ],
    icon: <Briefcase className="w-8 h-8 text-white" />,
    highlights: ["automatización", "n8n", "JavaScript", "Python", "API", "APIs REST", "Postman", "SaaS"],
  },
  {
    title: "Desarrollador de IA & Automatización",
    subtitle: "Proyectos de Producción Recientes",
    description: [
      "Agent Setter Autónomo: Arquitecté y desplegué un chatbot para la calificación de leads verificado por la API oficial de Meta. Implementé arquitectura RAG con documentación vectorizada e ingeniería de prompts para gestionar interacciones.",
      "Gestión de Citas y CRM: Desarrollé herramientas CRUD integradas en el bot para agendar, consultar, editar y eliminar citas. Sincronicé la gestión con sistemas CRM externos mediante HTTP Requests y manipulación de arrays JSON.",
      "Bot de Contenido Telegram: Construí un bot interactivo en Telegram que genera automáticamente carruseles para redes sociales. Orquesté la lógica del flujo con JavaScript, expresiones regulares (Regex) y APIs de terceros.",
      "DevOps e Infraestructura: Desplegué y administré las soluciones en entornos VPS utilizando Dokploy. Diseñé la arquitectura de datos usando PostgreSQL para persistencia crítica y Redis para caché.",
    ],
    icon: <Bot className="w-8 h-8 text-white" />,
    highlights: ["IA", "Chatbot", "Meta", "RAG", "CRUD", "Telegram", "JavaScript", "DevOps", "PostgreSQL", "Redis", "Dokploy"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 md:px-6 lg:px-8">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <ShimmerText className="text-3xl font-bold tracking-tight sm:text-4xl">
            Experiencia
          </ShimmerText>
          <p className="mt-4 text-muted-foreground">
            Trayectoria profesional en desarrollo backend, IA y automatización.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center gap-8 items-stretch"
        >
          {experiences.map((exp, index) => (
            <motion.div key={exp.title} variants={itemVariants} className="w-full max-w-[350px] mx-auto md:mx-0 md:flex-1">
              <HighlightCard
                title={exp.title}
                subtitle={exp.subtitle}
                description={exp.description}
                icon={exp.icon}
                highlights={exp.highlights}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
