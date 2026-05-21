import Link from "next/link";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="flex items-center justify-center mb-8">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
            <FileQuestion className="h-10 w-10 text-primary" />
          </div>
        </div>
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Página no encontrada
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          La ruta que buscas no existe o fue movida. Puedes volver al inicio y
          seguir explorando.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al Inicio
        </Link>
      </div>
    </main>
  );
}
