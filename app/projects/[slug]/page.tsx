import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const projects = {
  salespredict: {
    title: "SalesPredict (AI CRM)",
    description:
      "Plataforma CRM moderna impulsada por inteligencia artificial, diseñada para optimizar las ventas mediante modelos predictivos avanzados y analítica en tiempo real. Desarrollada con una arquitectura limpia para garantizar alta escalabilidad y rendimiento.",
    icon: "Brain",
    tags: ["Next.js 15", "FastAPI", "XGBoost", "Docker"],
    status: "En Desarrollo",
    gif: "https://res.cloudinary.com/dxhbunijg/video/upload/v1779376012/SalesPredict_1_k8tjar.mp4",
    repo: "https://github.com/AlejoTPK/SalesPredict",
    opencodeSkills: [
      "fastapi-expert",
      "fastapi-templates",
      "pandas-pro",
      "postgres-pro",
      "redis-development",
      "tailwind-design-system",
      "vercel-react-best-practices",
    ],
    features: [
      "Modelos predictivos avanzados con XGBoost",
      "Analítica de ventas en tiempo real",
      "Arquitectura limpia y escalable",
      "Procesamiento asíncrono con Celery",
      "Seguimiento de experimentos ML con MLflow",
      "Dashboard interactivo con métricas clave",
    ],
    techStack: {
      frontend: ["Next.js 15", "React 19", "Tailwind CSS"],
      backend: ["Python", "FastAPI", "SQLAlchemy 2.0", "Celery"],
      data: ["PostgreSQL", "XGBoost", "MLflow", "Pandas"],
      infra: ["Docker"],
    },
  },
  sovereigncrm: {
    title: "SovereignCRM",
    description:
      "Plataforma de analítica y seguimiento de datos en tiempo real. Diseñada para empresas que necesitan soberanía total sobre sus datos de clientes y ventas.",
    icon: "Network",
    tags: ["Next.js", "Qdrant", "TypeScript", "Tailwind"],
    status: "En Desarrollo",
    features: [
      "CRM personalizado con soberanía de datos",
      "Analítica de ventas en tiempo real",
      "Búsqueda vectorial con Qdrant",
      "Dashboard interactivo con métricas clave",
      "Integración con APIs de terceros",
      "Sistema de reportes automatizados",
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      database: ["Qdrant", "PostgreSQL"],
      infra: ["Docker", "VPS"],
    },
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen px-4 py-24 md:px-6 lg:px-8">
      <div className="container max-w-4xl mx-auto">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2 py-1">
          <ArrowLeft className="h-4 w-4" />
          Volver a Proyectos
        </Link>

        <div className="mb-12">
          <div className="flex items-start justify-between mb-6">
            <h1 className="text-4xl font-bold text-foreground">{project.title}</h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        {"opencodeSkills" in project && (
          <div className="mb-12">
            <p className="text-sm text-muted-foreground mb-3">
              <span className="text-primary font-medium">Desarrollado con:</span> OpenCode - Antigravity
            </p>
            <div className="flex flex-wrap gap-2">
              {(project.opencodeSkills as string[]).map((skill: string) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="border-primary/30 text-primary text-xs bg-primary/5"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {"gif" in project && (
          <div className="mb-12 rounded-xl overflow-hidden border border-border/50 shadow-lg">
            <video
              src={project.gif as string}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
          </div>
        )}

        <div className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-6">Características</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 p-4 rounded-lg border border-border/50 bg-card/30"
              >
                <ArrowUpRight className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-6">Stack Tecnológico</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(project.techStack).map(([category, techs]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-border text-muted-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-8 border-t border-border/30">
          {"repo" in project && project.repo && (
            <a href={project.repo as string} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="group border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                <Github className="mr-2 h-5 w-5" />
                Repositorio
                <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
