"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState, Suspense } from "react";

const SparklesCore = dynamic(
  () => import("@/components/ui/sparkles").then((m) => ({ default: m.SparklesCore })),
  { ssr: false, loading: () => null }
);

const GLSLHills = dynamic(
  () => import("@/components/glsl-hills").then((m) => ({ default: m.GLSLHills })),
  { ssr: false, loading: () => null }
);

export function GlobalBackground() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 0.85]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-[#02040a]">
      <motion.div
        style={{ scale }}
        className="w-full h-full transform-gpu origin-center will-change-transform"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#02040a] via-[#050814] to-[#010204]" />

        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,white,transparent_80%)]">
          <Suspense fallback={null}>
            <SparklesCore
              id="sky-sparkles"
              background="transparent"
              minSize={0.4}
              maxSize={1.2}
              particleDensity={80}
              className="w-full h-full"
              particleColor="#FFFFFF"
              speed={0.5}
            />
          </Suspense>
        </div>

        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-tech-blue/10 blur-[100px]" />

        <div className="absolute inset-0">
          <Suspense fallback={null}>
            <GLSLHills />
          </Suspense>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-black pointer-events-none"
      />
    </div>
  );
}
