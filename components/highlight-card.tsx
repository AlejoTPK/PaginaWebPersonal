"use client";

import { FC, ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface ComponentProps {
  title: string;
  subtitle?: string;
  description: string[];
  icon?: ReactNode;
  highlights?: string[];
}

const highlightText = (text: string, highlights: string[]) => {
  if (!highlights.length) return text;

  const regex = new RegExp(`\\b(${highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`, "gi");
  const parts = text.split(regex);

  return parts.map((part, i) =>
    highlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
      <span
        key={i}
        className="bg-gradient-to-r from-tech-blue to-purple-500 bg-clip-text text-transparent"
      >
        {part}
      </span>
    ) : (
      part
    )
  );
};

const Component: FC<ComponentProps> = ({ title, subtitle, description, icon, highlights = [] }) => {
  return (
    <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 h-full">
      <Card className="text-white rounded-2xl border border-border bg-card/50 shadow-2xl relative backdrop-blur-sm overflow-hidden hover:bg-card hover:border-primary/50 w-[350px] h-full">


        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-tech-blue/5 to-tech-blue/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-tech-blue/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce"></div>
          <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-tech-blue/5 blur-xl animate-ping"></div>
          <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-tech-blue/5 blur-lg animate-ping"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tech-blue/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
        </div>


        <div className="p-8 relative z-10 flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full border-2 border-tech-blue/20 animate-ping"></div>
            <div className="absolute inset-0 rounded-full border border-tech-blue/10 animate-pulse"></div>

            <div className="p-6 rounded-full backdrop-blur-lg border border-tech-blue/20 bg-card/80 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 hover:shadow-tech-blue/20">
              <div className="transform group-hover:rotate-180 transition-transform duration-700">
                {icon}
              </div>
            </div>
          </div>

          <h3 className="mb-2 text-3xl font-bold bg-gradient-to-r from-tech-blue to-purple-500 bg-clip-text text-transparent transform group-hover:scale-105 transition-transform duration-300">
            {title}
          </h3>

          {subtitle && (
            <p className="mb-6 text-sm font-medium text-muted-foreground">
              {subtitle}
            </p>
          )}

          <div className="space-y-3 max-w-sm flex-1">
            {description.map((line, idx) => (
              <p
                key={idx}
                className="text-gray-300 text-sm leading-relaxed transform group-hover:text-gray-200 transition-colors duration-300"
              >
                {highlightText(line, highlights)}
              </p>
            ))}
          </div>

          <div className="mt-auto pt-6 w-full flex flex-col items-center">
            <div className="w-1/3 h-0.5 bg-gradient-to-r from-transparent via-tech-blue to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500 animate-pulse"></div>

            <div className="flex space-x-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-2 h-2 bg-tech-blue rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-tech-blue rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
              <div className="w-2 h-2 bg-tech-blue rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            </div>
          </div>
        </div>


        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-tech-blue/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-tech-blue/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </Card>
    </div>
  );
};

export default Component;
