"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowingCardProps {
  className?: string;
  children: React.ReactNode;
}

export function GlowingCard({ className, children }: GlowingCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn("group relative h-full", className)}
    >
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-tech-blue via-tech-purple to-wine opacity-0 blur-lg transition duration-500 group-hover:opacity-100" />
      <div className="relative h-full rounded-xl bg-card p-6 shadow-xl border border-border">
        {children}
      </div>
    </motion.div>
  );
}
