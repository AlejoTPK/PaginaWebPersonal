import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Stack } from "@/components/sections/stack";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { GlobalBackground } from "@/components/global-background";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <GlobalBackground />
      <Hero />
      <Experience />
      <Stack />
      <Projects />
      <Contact />
    </main>
  );
}
