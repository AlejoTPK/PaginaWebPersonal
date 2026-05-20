"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { id: "hero", label: "Inicio" },
  { id: "experience", label: "Experiencia" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled && "bg-night-900/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
        )}
        role="banner"
      >
        <nav className="container mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between" role="navigation" aria-label="Navegación principal">
          <button
            onClick={() => scrollTo("hero")}
            className="text-lg font-bold bg-gradient-to-r from-tech-blue to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2 py-1"
            aria-label="Ir al inicio"
          >
            AC
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "px-3 py-2 text-sm rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  activeSection === item.id
                    ? "text-primary bg-primary/10 font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                )}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-night-900/95 backdrop-blur-xl border-b border-border/50"
            >
              <div className="flex flex-col p-4 gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={cn(
                      "px-4 py-3 text-left rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                      activeSection === item.id
                        ? "text-primary bg-primary/10 font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    )}
                    aria-current={activeSection === item.id ? "page" : undefined}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-night-900"
            aria-label="Volver al inicio"
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
