# Progress Tracker — abogadosencdmx.com
## Proyecto: Dominación SEO/GEO sector legal CDMX

**Repo:** github.com/relcutamientoviajesenglobo-create/abogados-cdmx
**Deploy:** abogados-cdmx.pages.dev → abogadosencdmx.com (Cloudflare Pages, auto-deploy on push)
**Stack:** Astro 4 + Cloudflare Pages
**Última actualización:** 2026-03-23

---

## META: 7+ artículos por especialidad, 50+ total

| Especialidad | Actual | Meta | Estado |
|---|---|---|---|
| Familiar | 9 | 7 | COMPLETA |
| Penal | 8 | 7 | COMPLETA |
| Inmobiliario | 8 | 7 | COMPLETA |
| Civil | 7 | 7 | COMPLETA |
| Laboral | 5 → 7 | 7 | EN PROGRESO (2 nuevos escribiéndose) |
| Corporativo | 4 → 7 | 7 | EN PROGRESO (3 nuevos escribiéndose) |
| Migratorio | 4 → 7 | 7 | EN PROGRESO (3 nuevos escribiéndose) |
| **TOTAL** | **45 → 53** | **49+** | — |

---

## FASES DEL ROADMAP

### [x] Fase 0 — Infraestructura base
- [x] robots.txt con reglas para AI crawlers
- [x] sitemap.xml
- [x] vercel.json / _headers (security headers)
- [x] llms.txt + llms-full.txt
- [x] RSL 1.0 (/.well-known/rsl.json)

### [x] Fase 1 — Componentes Astro
- [x] SchemaOrg component
- [x] FAQ section component
- [x] BreadcrumbNav component
- [x] BlogPostLayout component
- [x] SobreNosotros component

### [x] Fase 2 — JSON-LD Schemas
- [x] LegalService schema (homepage)
- [x] WebSite schema con SearchAction
- [x] Organization schema
- [x] BreadcrumbList schema
- [x] FAQPage schema (homepage, 5 preguntas)
- [x] Service schemas (7 especialidades)

### [x] Fase 3 — Configuración
- [x] Sitemap config con todas las páginas
- [x] Content collections para .md blog posts
- [x] Dynamic route [slug].astro para renderizar .md posts

### [x] Fase 4 — Blog Tier 1 (13 artículos originales)
- [x] guia-divorcio-cdmx-2026.astro
- [x] nuevo-codigo-procedimientos-civiles-familiares-2026.astro
- [x] derechos-inquilino-cdmx-2026.astro
- [x] derechos-detenido-cdmx.astro
- [x] despido-injustificado-cdmx-2026.astro
- [x] residencia-permanente-mexico-2026.astro
- [x] constituir-empresa-mexico-2026.astro
- [x] sucesiones-herencias-cdmx-2026.astro
- [x] cuanto-cuesta-divorcio-cdmx.md
- [x] custodia-hijos-cdmx.md
- [x] despido-injustificado-cdmx.md
- [x] divorcio-express-cdmx.md
- [x] pension-alimenticia-cdmx.md

### [x] Fase 5 — Deploy Cloudflare Pages
- [x] Conectado a GitHub (auto-deploy on push to main)
- [x] Build command: `npm run build`
- [x] Output directory: `dist`
- [x] Dominio: abogadosencdmx.com

### [x] Fase 6 — Auditoría GEO/SEO
- [x] 12 análisis paralelos completados
- [x] Scorecard: Technical 83/A, Links 95/A, Freshness 85/A, llms.txt 100/A
- [x] Gaps identificados: E-E-A-T 0/F, Brand 0/F, Citability 36/F
- [x] Autofix files generados en geo-fixes/

### [x] Fase A — Blog Batch 1 (9 artículos: Penal, Civil, Inmobiliario)
- [x] amparo-penal-cdmx.md
- [x] defensa-penal-cdmx.md
- [x] delitos-patrimoniales-cdmx.md
- [x] contratos-civiles-cdmx.md
- [x] responsabilidad-civil-cdmx.md
- [x] usucapion-cdmx.md
- [x] compraventa-inmueble-cdmx.md
- [x] escrituracion-cdmx.md
- [x] contrato-arrendamiento-cdmx.md

### [x] Fase B — Blog Batch 2 (11 artículos: Penal, Civil, Inmobiliario avanzados)
- [x] violencia-familiar-cdmx-penal.md
- [x] libertad-bajo-caucion-cdmx.md
- [x] juicio-oral-penal-cdmx.md
- [x] recursos-apelacion-penal-cdmx.md
- [x] testamento-cdmx.md
- [x] juicio-ejecutivo-mercantil-cdmx.md
- [x] demanda-civil-cdmx.md
- [x] arrendamiento-conflictos-cdmx.md
- [x] regularizacion-propiedad-cdmx.md
- [x] due-diligence-inmobiliario-cdmx.md
- [x] condominos-administracion-cdmx.md

### [x] Fase C parcial — Corporativo, Laboral, Migratorio, Familiar
- [x] compliance-empresarial-mexico.md (Corporativo)
- [x] sa-de-cv-vs-srl-cdmx.md (Corporativo)
- [x] contratos-mercantiles-cdmx.md (Corporativo/Civil)
- [x] acoso-laboral-cdmx.md (Laboral)
- [x] contrato-trabajo-mexico.md (Laboral)
- [x] liquidacion-laboral-cdmx.md (Laboral)
- [x] residencia-temporal-mexico.md (Migratorio)
- [x] naturalizacion-mexico.md (Migratorio)
- [x] visa-trabajo-mexico.md (Migratorio)
- [x] patria-potestad-cdmx.md (Familiar)
- [x] concubinato-derechos-cdmx.md (Familiar)
- [x] violencia-familiar-cdmx.md (Familiar)

### [ ] Fase C final — Artículos faltantes (EN PROGRESO)
- [ ] fusiones-adquisiciones-mexico.md (Corporativo)
- [ ] gobierno-corporativo-mexico.md (Corporativo)
- [ ] propiedad-intelectual-empresas-cdmx.md (Corporativo)
- [ ] visa-inversionista-mexico.md (Migratorio)
- [ ] reunificacion-familiar-mexico.md (Migratorio)
- [ ] regularizacion-migratoria-mexico.md (Migratorio)
- [ ] outsourcing-subcontratacion-mexico.md (Laboral)
- [ ] demanda-laboral-cdmx.md (Laboral)

---

## OPTIMIZACIONES COMPLETADAS

### [x] PageSpeed / Performance
- [x] Hero image: WebP format + quality 75 via Unsplash params
- [x] 27 Unsplash URLs convertidas a WebP en todo el sitio
- [x] Meta description recortada a 155 chars
- [x] Preconnect hints para fonts.googleapis.com y fonts.gstatic.com

### [x] E-E-A-T
- [x] Author bylines en todos los blog posts (publishedDate, modifiedDate, author)
- [x] 7 perfiles individuales de abogados con fotos, credenciales, especialidad
- [x] Fechas de publicación visibles en blog posts
- [x] Contacto visible en header (email, teléfono, dirección)

### [x] Interlinking
- [x] Cross-links entre los 8 .astro blog posts
- [x] Cross-links .astro → .md posts
- [x] Cross-links dentro de los 5 .md posts originales (23 links)
- [x] 3 especialidades (Corporativo, Migratorio, Laboral) vinculadas a blog posts relevantes
- [x] Penal: agregada 3ra especialidad relacionada (Civil)
- [x] 7 perfiles de abogados vinculados a blog posts de su especialidad

### [x] Schemas
- [x] Organization schema con contactPoint
- [x] BreadcrumbList schema
- [x] FAQPage schema (5 preguntas frecuentes)
- [x] Service schemas en 7 especialidades

### [x] Security Headers
- [x] Strict-Transport-Security
- [x] X-Frame-Options
- [x] X-Content-Type-Options
- [x] Referrer-Policy
- [x] Permissions-Policy
- [x] Content-Security-Policy

---

## PENDIENTE (para futuras sesiones)

### Prioridad Alta
- [ ] Cloudflare: desbloquear GPTBot, ClaudeBot, Google-Extended en dashboard → Bots → AI Crawlers
- [ ] Google Business Profile: crear perfil con fotos, reseñas, horarios
- [ ] Google Search Console: solicitar indexación de todas las URLs nuevas

### Prioridad Media
- [ ] Crear Facebook page + Instagram business
- [ ] Registrar en directorios legales mexicanos (NexoAbogados, AbogaClick, Juristas.MX, Buholegal)
- [ ] Agregar sameAs schema cuando se creen perfiles sociales
- [ ] Blog Tier 3: artículos para llegar a 70+ (2-3 por especialidad adicionales)

### Prioridad Baja
- [ ] YouTube channel con video explicativos por especialidad
- [ ] Reddit presence en r/DerechoMexicano, r/mexico
- [ ] LinkedIn company page
- [ ] srcset en imágenes para responsive loading
- [ ] Accesibilidad: contraste de colores, orden de headings

---

## COMMITS RELEVANTES

| Hash | Descripción |
|---|---|
| e14e6f7 | Phase 1-4 components, schemas, blog content |
| (siguiente) | Blog meta tags, E-E-A-T signals |
| 032c877 | Interlinking + cross-links completos |
| (siguiente) | Fase B: 11 artículos Penal/Civil/Inmobiliario |
| (siguiente) | Fase C parcial: 12 artículos Corp/Lab/Mig/Fam |
| (siguiente) | Fase C final: 8 artículos faltantes |

---

## NOTAS TÉCNICAS

- Blog .astro posts: renderizados directamente como páginas Astro
- Blog .md posts: renderizados via content collections + src/pages/blog/[slug].astro
- El [slug].astro usa la clase `.reveal` con IntersectionObserver — asegurar que el observer está activo
- Unsplash images: usar `&fm=webp&q=75` en todas las URLs
- Sitemap: se genera con @astrojs/sitemap, configurado en astro.config.mjs
