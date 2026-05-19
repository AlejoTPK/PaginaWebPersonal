import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers";

export const metadata: Metadata = {
  title: "Tu Nombre | AI & Automation Engineer",
  description: "Portafolio de un Ingeniero especializado en IA, Automatización y Analítica de Datos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
