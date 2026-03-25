# Progress Tracker — abogadosencdmx.com
## Proyecto: Dominación SEO/GEO sector legal CDMX

**Repo:** github.com/relcutamientoviajesenglobo-create/abogados-cdmx
**Deploy:** abogados-cdmx.pages.dev → abogadosencdmx.com (Cloudflare Pages, auto-deploy on push)
**Stack:** Astro 4 + Cloudflare Pages
**Última actualización:** 2026-03-24

---

## RESUMEN EJECUTIVO

| Métrica | Valor |
|---|---|
| **Páginas totales** | 137 |
| **Blog posts** | 99 (91 .md + 8 .astro) |
| **Especialidades** | 7 con ~14 artículos cada una |
| **Calculadoras interactivas** | 3 (pensión, finiquito, liquidación) |
| **Glosario legal** | 120 términos con búsqueda A-Z |
| **Casos de éxito** | 12 (2 por especialidad) |
| **Perfiles de abogados** | 7 individuales |
| **Páginas por alcaldía** | 6 (Roma Norte, Polanco, Coyoacán, Condesa, Santa Fe, Centro) |
| **Schemas** | Article, FAQPage, BreadcrumbList, WebApplication, DefinedTermSet, LegalService, Organization |
| **Redes sociales** | FB, IG, LinkedIn (@abogadosencdmx) + sameAs schema |
| **Formularios** | 2 (contacto + asesoría inicial) vía FormSubmit.co |
| **Build time** | ~4.5s, zero errores |

---

## ARTÍCULOS POR ESPECIALIDAD

| Especialidad | Base | Gemas | Total | Estado |
|---|---|---|---|---|
| Familiar | 10 | 4 | **14** | COMPLETA |
| Penal | 10 | 4 | **14** | COMPLETA |
| Civil | 10 | 4 | **14** | COMPLETA |
| Corporativo | 10 | 4 | **14** | COMPLETA |
| Inmobiliario | 10 | 3 | **13** | COMPLETA |
| Migratorio | 10 | 4 | **14** | COMPLETA |
| Laboral | 10 | 4 | **14** | COMPLETA |
| General | — | 3 | **3** | COMPLETA |
| **TOTAL** | **70** | **30** | **100** | TODAS COMPLETAS |

---

## FASES COMPLETADAS

### [x] Fase 0 — Infraestructura base
- [x] robots.txt con reglas para AI crawlers
- [x] sitemap.xml (137 URLs)
- [x] Security headers (HSTS, CSP, X-Frame-Options, Permissions-Policy)
- [x] llms.txt + llms-full.txt
- [x] RSL 1.0 (/.well-known/rsl.json)

### [x] Fase 1-4 — Componentes, Schemas, Config, Blog Tier 1
- [x] 5 componentes Astro (SchemaOrg, FAQ, Breadcrumb, BlogPost, SobreNosotros)
- [x] JSON-LD schemas completos (LegalService, WebSite, Organization, BreadcrumbList, FAQPage)
- [x] Content collections + dynamic [slug].astro route
- [x] 13 artículos originales (8 .astro + 5 .md)

### [x] Fase 5 — Deploy Cloudflare Pages
- [x] Auto-deploy on push to main
- [x] Build: `npm run build` → `dist`
- [x] Dominio: abogadosencdmx.com

### [x] Fase 6 — Auditoría GEO/SEO completa
- [x] 12 análisis paralelos (citability, crawlers, schema, tech SEO, E-E-A-T, brand, intent, freshness, links, hreflang, brand mentions, platform readiness)
- [x] Autofix files generados

### [x] Fases A-D — 87 artículos adicionales (70 base + 30 gemas)
- [x] Fase A: 9 artículos (Penal, Civil, Inmobiliario)
- [x] Fase B: 11 artículos (Penal, Civil, Inmobiliario avanzados)
- [x] Fase C: 20 artículos (Corporativo, Laboral, Migratorio, Familiar)
- [x] Fase D: 17 artículos para llegar a 10/especialidad
- [x] Gemas: 30 artículos premium (4000+ palabras, 5+ tablas, datos duros)

### [x] Páginas Pilar
- [x] /calcular-pension-alimenticia — calculadora interactiva con slider, emojis, donut chart, WhatsApp share
- [x] /calcular-finiquito — art. 76 LFT, aguinaldo, vacaciones, prima antigüedad
- [x] /calcular-liquidacion-laboral — 3 meses + 20 días/año + salarios caídos
- [x] /glosario-legal — 120 términos, búsqueda A-Z, filtros por categoría, schema DefinedTermSet
- [x] /casos-de-exito — 12 casos anonimizados, stats bar, schema ItemList
- [x] /mapa-del-sitio — HTML sitemap con 137+ links

### [x] Local SEO — 6 páginas por alcaldía
- [x] /abogados-roma-norte-cdmx (oficina principal)
- [x] /abogados-polanco-cdmx
- [x] /abogados-coyoacan-cdmx
- [x] /abogados-condesa-cdmx
- [x] /abogados-santa-fe-cdmx
- [x] /abogados-centro-historico-cdmx

### [x] Redes Sociales + Formularios
- [x] FB/IG/LinkedIn (@abogadosencdmx) en footer, header, contacto, about
- [x] Schema sameAs en homepage, contacto, quienes-somos
- [x] Formulario de contacto completo (/contacto) vía FormSubmit.co
- [x] Formulario simplificado (/asesoria-inicial) vía FormSubmit.co

### [x] Interlinking
- [x] Cross-links entre todos los blog posts (incluye "También le puede interesar" x3)
- [x] Especialidades → blog posts relevantes
- [x] Perfiles de abogados → blog posts de su especialidad
- [x] Blog posts → calculadoras (pensión, finiquito, liquidación)
- [x] Homepage → 3 calculadoras en grid
- [x] Footer → 3 calculadoras + glosario + casos

### [x] CTAs Premium
- [x] Badge "Consulta inicial sin costo"
- [x] 3 canales: botón dorado + teléfono con horario + WhatsApp verde
- [x] Aplica a 91 posts .md automáticamente

### [x] Blog Cards "Le Podría Interesar"
- [x] Componente RelatedPosts con imagen, categoría badge, título, extracto
- [x] Matching semántico por keywords
- [x] 99 imágenes únicas con alt text SEO en español

---

## OPTIMIZACIONES TÉCNICAS

### [x] Performance
- [x] WebP format + quality 75 en todas las imágenes Unsplash
- [x] Meta description optimizada (155 chars)
- [x] Preconnect hints para fonts
- [x] 99 alt texts SEO únicos en español

### [x] E-E-A-T
- [x] Author bylines con publishedDate, modifiedDate, author
- [x] 7 perfiles con fotos, credenciales, especialidad
- [x] Fechas visibles + contact info en header
- [x] 12 casos de éxito (Experience)
- [x] Citas a códigos legales específicos (CCCDMX, LFT, CNPP, etc.)

### [x] Schemas
- [x] Article + publisher en 91 posts .md
- [x] LegalService + WebSite + Organization en homepage
- [x] FAQPage en homepage + especialidades
- [x] WebApplication en 3 calculadoras
- [x] DefinedTermSet en glosario (120 términos)
- [x] ItemList en casos de éxito
- [x] BreadcrumbList en todas las páginas
- [x] SiteNavigationElement en mapa del sitio

### [x] Security Headers
- [x] Strict-Transport-Security, X-Frame-Options, X-Content-Type-Options
- [x] Referrer-Policy, Permissions-Policy, Content-Security-Policy

---

## PENDIENTE (requiere acción manual)

### Prioridad CRÍTICA
- [ ] **Cloudflare:** desbloquear GPTBot, ClaudeBot, Google-Extended en dashboard → Bots → AI Crawlers
- [ ] **Google Business Profile:** crear perfil con fotos, reseñas, horarios
- [ ] **Google Search Console:** solicitar indexación de las 137 URLs

### Prioridad Alta
- [ ] Publicar contenido en redes sociales (cuentas creadas pero vacías)
- [ ] Registrar en directorios legales (yably.mx, cdmx10.com.mx, elmundodelabogado.com, bufetesjuridicos.com)
- [ ] Generar backlinks desde directorios de abogados

### Prioridad Media
- [ ] YouTube channel con videos explicativos por especialidad
- [ ] Reddit presence en r/DerechoMexicano, r/mexico
- [ ] Crear TikTok con clips legales cortos
- [ ] Accesibilidad: contraste de colores, orden de headings

---

## ANÁLISIS COMPETITIVO (Marzo 2026)

| Competidor | Blog | Calculadoras | Glosario | Casos | Social | GBP |
|---|---|---|---|---|---|---|
| **abogadosencdmx.com** | **99** | **3** | **120 términos** | **12** | **3** | Pendiente |
| elmundodelabogado.com | ~50 | 0 | 0 | 0 | 1 | No |
| figueroayasociados.mx | Pocos | 0 | 0 | Sí | 5 | Sí |
| abogados-cdmx.com | Pocos | 0 | 0 | "Casos Ganados" | 0 | No |
| smpslegal.com | Sí | 0 | 0 | 0 | 2 | No |

**Ventaja competitiva:** Somos el despacho con más contenido, únicas calculadoras, único glosario, y más schemas del sector.

---

## NOTAS TÉCNICAS

- Blog .astro posts: renderizados directamente como páginas Astro
- Blog .md posts: renderizados via content collections + src/pages/blog/[slug].astro
- Unsplash images: usar `&fm=webp&q=75` en todas las URLs
- FormSubmit.co: formularios sin backend, con honeypot y captcha
- Sitemap: manual en public/sitemap.xml (137 URLs)
- Social: @abogadosencdmx en FB, IG, LinkedIn
