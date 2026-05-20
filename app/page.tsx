import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Stack } from "@/components/sections/stack";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Navigation } from "@/components/navigation";
import { GlobalBackground } from "@/components/global-background";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <GlobalBackground />
      <Navigation />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Saltar al contenido principal
      </a>
      <div id="main-content">
        <Hero />
        <Experience />
        <Stack />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
