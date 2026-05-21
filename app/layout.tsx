import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const siteUrl = "https://alejandrocastrillon.dev";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alejandro Castrillón",
  url: siteUrl,
  jobTitle: "AI & Automation Engineer",
  sameAs: [
    "https://github.com/AlejoTPK",
    "https://www.linkedin.com/in/alejandrocastrilloncardona",
  ],
  knowsAbout: [
    "Inteligencia Artificial",
    "Automatización",
    "Backend Development",
    "Data Analytics",
    "Python",
    "FastAPI",
    "Next.js",
    "Machine Learning",
    "DevOps",
  ],
  description:
    "Ingeniero especializado en IA, Automatización y Analítica de Datos. Diseño arquitecturas de software robustas y construyo agentes inteligentes.",
};

export const metadata: Metadata = {
  title: {
    default: "Alejandro Castrillón | AI & Automation Engineer",
    template: "%s | Alejandro Castrillón",
  },
  description:
    "Portafolio de Alejandro Castrillón - Ingeniero especializado en IA, Automatización, Backend y Analítica de Datos. Diseño arquitecturas de software robustas y construyo agentes inteligentes.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  keywords: [
    "Alejandro Castrillón",
    "AI Engineer",
    "Automation Engineer",
    "Backend Developer",
    "Python",
    "FastAPI",
    "Next.js",
    "n8n",
    "RAG",
    "LLM",
    "DevOps",
  ],
  authors: [{ name: "Alejandro Castrillón" }],
  creator: "Alejandro Castrillón",
  publisher: "Alejandro Castrillón",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    title: "Alejandro Castrillón | AI & Automation Engineer",
    description:
      "Ingeniero especializado en IA, Automatización y Analítica de Datos. Diseño arquitecturas de software robustas y construyo agentes inteligentes.",
    siteName: "Alejandro Castrillón Portfolio",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Alejandro Castrillón - AI & Automation Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alejandro Castrillón | AI & Automation Engineer",
    description:
      "Ingeniero especializado en IA, Automatización y Analítica de Datos.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "Xaqi2gbxUFOk2BE1efWdksHtinuo3H2ZR35ho32nmUc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
