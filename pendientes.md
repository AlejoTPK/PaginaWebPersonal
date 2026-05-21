# Pendientes del Portfolio

> Última actualización: 2026-05-20

---

## 🔴 Críticos (funcionalidad real)

- [ ] **OG Image faltante** - `og-image.jpg` referenciado en metadata pero no existe en `/public`. Sin esto, los previews en redes sociales se verán rotos.
- [ ] **Google verification code** - `"your-google-verification-code"` en layout.tsx necesita el código real de Google Search Console.
- [ ] **Botones "Ver Demo" y "Ver Código"** en páginas de proyecto (`/projects/[slug]`) no tienen links funcionales.
- [ ] **Loading screen** creado en `components/loading-screen.tsx` pero nunca se usa en `page.tsx`.

---

## 🟡 Importantes (UX/contenido)

- [ ] **Sección "Sobre mí" / About** - No hay una sección que cuente quién eres más allá del hero. Una breve bio personal agregaría contexto.
- [ ] **Certificaciones / Educación** - No hay mención del título de Ingeniero de Sistemas ni certificaciones.
- [ ] **Idiomas** - No se menciona qué idiomas se hablan.
- [ ] **Indicador de disponibilidad** - Un badge visual de "Disponible para trabajar" o "Open to work".
- [ ] **Blog / Artículos** - Sección para contenido técnico que demuestre expertise.
- [ ] **Analytics** - Google Analytics, Vercel Analytics, o similar para tracking de visitas.

---

## 🟢 Nice-to-have (pulido)

- [ ] **Transiciones de página** - Al navegar a `/projects/[slug]` no hay animación de transición entre páginas.
- [ ] **404 page personalizada** - La página de error es la default de Next.js.
- [ ] **Dark/Light mode toggle** - Aunque dark es el default, algunos usuarios prefieren light.
- [ ] **CV descargable** - Botón para descargar CV en PDF.
- [ ] **Testimonials reales** - Si hay recomendaciones reales de LinkedIn, valdría la pena agregarlas.
- [ ] **Contador de visitas** - Widget discreto que muestre visitas al portfolio.
- [ ] **RSS feed** - Si se agrega blog, un feed RSS sería útil.
- [ ] **Schema.org markup** - JSON-LD para que Google entienda mejor el perfil profesional.

---

##  Estado actual

| Categoría | Estado |
|-----------|--------|
| Navegación | ✅ |
| Hero | ✅ |
| Experiencia | ✅ |
| Stack (tabs) | ✅ |
| Proyectos | ✅ |
| Contacto (WhatsApp) | ✅ |
| SEO básico | ✅ |
| Performance | ✅ |
| Accesibilidad | ✅ |
| Responsive | ✅ |

---

## 📝 Notas

- Los datos de contacto están actualizados (WhatsApp, GitHub, LinkedIn, Email)
- El stack tecnológico está organizado en 7 categorías con tabs
- Las tarjetas del stack tienen animación 3D con tilt effect
- El background global tiene lazy loading para optimizar rendimiento
