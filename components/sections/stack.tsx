"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ShimmerText from "@/components/ui/shimmer-text";
import {
  Code2,
  Database,
  Workflow,
  Container,
  Braces,
  Layers,
  GitBranch,
  Cpu,
  Server,
  Zap,
  MessageSquare,
  Terminal,
  Shield,
  Cloud,
  Monitor,
  HardDrive,
  Bot,
  Plug,
  CloudCog,
  Wrench,
} from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

const categories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Monitor,
    technologies: [
      { name: "JavaScript", icon: Code2 },
      { name: "TypeScript", icon: Braces },
      { name: "Next.js", icon: Layers },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    technologies: [
      { name: "Python", icon: Code2 },
      { name: "Node.js / Express", icon: Server },
      { name: "FastAPI", icon: Zap },
      { name: "Django", icon: Shield },
    ],
  },
  {
    id: "database",
    label: "Bases de Datos & Caché",
    icon: HardDrive,
    technologies: [
      { name: "PostgreSQL", icon: Database },
      { name: "Qdrant", icon: Database },
      { name: "Redis", icon: Zap },
    ],
  },
  {
    id: "ai",
    label: "IA & Automatización",
    icon: Bot,
    technologies: [
      { name: "RAG / LLMs", icon: Cpu },
      { name: "n8n", icon: Workflow },
    ],
  },
  {
    id: "apis",
    label: "APIs & Tiempo Real",
    icon: Plug,
    technologies: [
      { name: "Meta API", icon: MessageSquare },
      { name: "WebSockets", icon: Cloud },
    ],
  },
  {
    id: "infra",
    label: "Infraestructura & DevOps",
    icon: CloudCog,
    technologies: [
      { name: "Docker", icon: Container },
      { name: "Dokploy", icon: GitBranch },
    ],
  },
  {
    id: "tools",
    label: "Herramientas de Desarrollo",
    icon: Wrench,
    technologies: [
      { name: "Cursor / Claude", icon: Terminal },
    ],
  },
];

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const mouseXSpring = useSpring(x, { stiffness: 800, damping: 25, mass: 0.5 });
  const mouseYSpring = useSpring(y, { stiffness: 800, damping: 25, mass: 0.5 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["18deg", "-18deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-18deg", "18deg"]);

  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
    setMousePosition({ x: mouseX, y: mouseY });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div style={{ perspective: "1000px" }}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className={cn(
          "relative rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm overflow-hidden",
          isHovered && "border-primary/50 shadow-2xl shadow-primary/10 bg-card",
          className
        )}
      >
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: isHovered ? 0.3 : 0,
            background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3), transparent)`,
            transition: "opacity 0.15s ease",
          }}
        />
        <div style={{ transform: "translateZ(60px)" }} className="flex flex-col items-center justify-center h-full w-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Stack() {
  return (
    <section id="stack" className="relative py-24 px-4 md:px-6 lg:px-8">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <ShimmerText className="text-3xl font-bold tracking-tight sm:text-4xl">
            Stack Tecnológico
          </ShimmerText>
          <p className="mt-4 text-muted-foreground">
            Ecosistema de herramientas para construir, orquestar y escalar.
          </p>
        </motion.div>

        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="w-full flex-wrap h-auto gap-2 bg-transparent p-0 justify-center">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="flex items-center gap-2 rounded-lg border border-border/50 bg-card/30 px-4 py-2 text-sm font-medium text-muted-foreground data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border-primary/30 transition-all duration-200"
              >
                <cat.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{cat.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
              >
                {cat.technologies.map((tech) => (
                  <motion.div key={tech.name} variants={itemVariants}>
                    <TiltCard className="flex flex-col items-center justify-center h-full">
                      <div style={{ transform: "translateZ(80px)", transformStyle: "preserve-3d" }}>
                        <tech.icon className="h-8 w-8 mb-4 text-primary drop-shadow-[0_4px_8px_rgba(59,130,246,0.4)]" />
                      </div>
                      <h3
                        className="text-lg font-semibold text-foreground text-center"
                        style={{
                          transform: "translateZ(60px)",
                          textShadow: "0 1px 0 #1a1a2e, 0 2px 0 #1a1a2e, 0 3px 0 #1a1a2e, 0 4px 0 #1a1a2e, 0 5px 10px rgba(0,0,0,0.4)",
                        }}
                      >
                        {tech.name}
                      </h3>
                      <div style={{ transform: "translateZ(40px)" }}>
                        <Badge
                          variant="outline"
                          className="mt-2 text-xs border-secondary text-secondary-foreground"
                        >
                          {cat.label}
                        </Badge>
                      </div>
                    </TiltCard>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
