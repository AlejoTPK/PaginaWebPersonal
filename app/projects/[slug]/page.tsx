import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const projects = {
  autoops: {
    title: "AutoOps",
    description:
      "Sistema de gestión de operaciones automatizadas. Orquesta flujos de trabajo complejos, monitorea métricas en tiempo real y reduce la intervención manual en pipelines críticos.",
    icon: "Boxes",
    tags: ["n8n", "Docker", "Python", "PostgreSQL"],
    status: "En Desarrollo",
    features: [
      "Orquestación de flujos de trabajo complejos con n8n",
      "Monitoreo de métricas en tiempo real",
      "Automatización de pipelines críticos",
      "Dashboard de operaciones centralizado",
      "Alertas y notificaciones inteligentes",
      "Integración con múltiples servicios SaaS",
    ],
    techStack: {
      backend: ["Python", "FastAPI", "n8n"],
      database: ["PostgreSQL", "Redis"],
      infra: ["Docker", "Dokploy", "VPS"],
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
            <Badge variant="secondary" className="bg-wine/20 text-wine-light border-none">
              {project.status}
            </Badge>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

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
          <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90">
            Ver Demo
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
          <Button size="lg" variant="outline" className="border-border hover:bg-secondary hover:text-secondary-foreground">
            Ver Código
          </Button>
        </div>
      </div>
    </main>
  );
}
