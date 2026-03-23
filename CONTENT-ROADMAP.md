# Content Roadmap — abogadosencdmx.com
## Meta: 70 artículos para dominar el sector legal CDMX

**Repo:** relcutamientoviajesenglobo-create/abogados-cdmx
**Branch:** main
**Deploy:** Cloudflare Pages (auto-deploy on push)
**Node:** 18 (nvm use 18)
**Build:** npx astro build

---

## Instrucciones para Claude

Cuando el usuario abra un nuevo chat y referencie este archivo:
1. Lee este roadmap completo
2. Identifica el siguiente bloque de artículos NO marcados con [x]
3. Crea los artículos .md en src/content/blog/ siguiendo el formato existente
4. Agrega cada artículo nuevo al array de `articulos` en src/pages/blog/index.astro
5. Agrega internal links (a especialidades, perfiles de abogados, otros posts)
6. Agrega URLs al public/sitemap.xml
7. Haz build (source ~/.nvm/nvm.sh && nvm use 18 && npx astro build)
8. Commit + push
9. Marca los artículos completados con [x] en este archivo
10. Continúa con el siguiente bloque hasta terminar o que el usuario diga stop

**Formato frontmatter para .md:**
```yaml
---
title: "Título del artículo"
description: "Meta description 150-160 chars"
date: YYYY-MM-DD
author: "Nombre del abogado asignado"
keywords: "keyword1, keyword2, keyword3"
---
```

**Estructura de cada artículo:**
- Párrafo introductorio citable (sin heading, 150-200 palabras con datos concretos)
- 8-12 secciones H2 con contenido sustancial (200+ palabras cada una)
- Tablas comparativas donde aplique
- FAQs al final (5-8 preguntas)
- Sección "También le puede interesar" con 2-3 links a otros posts
- Referencias a códigos/leyes mexicanas específicas
- Total: 2,500-4,000 palabras por artículo

**Asignación de autores por especialidad:**
- Familiar → Lic. Andrea Solís
- Penal → Lic. Roberto Fuentes
- Civil → Lic. Mariana Ortega
- Corporativo → Lic. Ian Montiel
- Inmobiliario → Lic. Tania Mendoza
- Laboral → Lic. Luciana Valle
- Migratorio → Lic. Diego Navarro

---

## FASE A: Completada (13 artículos)

### Derecho Familiar (5/10)
- [x] guia-divorcio-cdmx-2026 — Guía completa para tramitar un divorcio en CDMX
- [x] cuanto-cuesta-divorcio-cdmx — ¿Cuánto cuesta un divorcio en CDMX? Guía completa 2026
- [x] divorcio-express-cdmx — Divorcio Express en CDMX: Requisitos, Costo y Tiempo
- [x] custodia-hijos-cdmx — Guarda y Custodia en CDMX: Todo lo que necesitas saber
- [x] pension-alimenticia-cdmx — Pensión alimenticia en México: Cómo se calcula

### Derecho Penal (1/8)
- [x] derechos-detenido-cdmx — Derechos del detenido en CDMX

### Derecho Civil (1/8)
- [x] sucesiones-herencias-cdmx-2026 — Sucesiones y herencias en CDMX 2026

### Derecho Corporativo (1/7)
- [x] constituir-empresa-mexico-2026 — Cómo constituir una empresa en México 2026

### Derecho Inmobiliario (1/7)
- [x] derechos-inquilino-cdmx-2026 — Derechos del inquilino en CDMX

### Derecho Laboral (2/8)
- [x] despido-injustificado-cdmx-2026 — Despido injustificado: qué le corresponde y cómo demandar
- [x] despido-injustificado-cdmx — Despido injustificado: tus derechos y cómo demandar

### Derecho Migratorio (1/7)
- [x] residencia-permanente-mexico-2026 — Cómo obtener la residencia permanente en México

### General (1)
- [x] nuevo-codigo-procedimientos-civiles-familiares-2026 — Nuevo Código Nacional 2026

---

## FASE B: Especialidades débiles — Prioridad ALTA (20 artículos)

### Derecho Penal (7 artículos nuevos)
- [x] amparo-penal-cdmx — Amparo penal en CDMX: cuándo procede y cómo tramitarlo
- [x] defensa-penal-cdmx — Defensa penal en CDMX: cómo elegir abogado penalista
- [x] delitos-patrimoniales-cdmx — Fraude, robo y abuso de confianza en CDMX: guía legal
- [ ] violencia-familiar-cdmx-penal — Violencia familiar como delito en CDMX: denuncia y proceso
- [ ] libertad-bajo-caucion-cdmx — Libertad bajo caución en CDMX: requisitos y costos 2026
- [ ] juicio-oral-penal-cdmx — El juicio oral penal en CDMX: etapas y derechos del acusado
- [ ] recursos-apelacion-penal-cdmx — Recursos de apelación en materia penal: guía práctica

### Derecho Civil (7 artículos nuevos)
- [x] contratos-civiles-cdmx — Contratos civiles en CDMX: tipos, requisitos y validez legal
- [x] responsabilidad-civil-cdmx — Responsabilidad civil en CDMX: daños, perjuicios e indemnización
- [x] usucapion-cdmx — Usucapión en CDMX: cómo obtener la propiedad por prescripción
- [ ] testamento-cdmx — Cómo hacer un testamento en CDMX: tipos, costos y requisitos 2026
- [ ] juicio-ejecutivo-mercantil-cdmx — Juicio ejecutivo mercantil en CDMX: cobro de pagarés y deudas
- [ ] demanda-civil-cdmx — Cómo presentar una demanda civil en CDMX: paso a paso
- [ ] arrendamiento-conflictos-cdmx — Conflictos de arrendamiento en CDMX: desalojos y rentas impagadas

### Derecho Inmobiliario (6 artículos nuevos)
- [x] compraventa-inmueble-cdmx — Compraventa de inmuebles en CDMX: guía legal completa
- [x] escrituracion-cdmx — Escrituración en CDMX: proceso, costos y requisitos notariales
- [ ] regularizacion-propiedad-cdmx — Regularización de propiedad en CDMX sin escrituras
- [x] contrato-arrendamiento-cdmx — Contrato de arrendamiento en CDMX: cláusulas esenciales 2026
- [ ] due-diligence-inmobiliario-cdmx — Due diligence inmobiliario: qué revisar antes de comprar
- [ ] condominos-administracion-cdmx — Derechos y obligaciones de condóminos en CDMX

---

## FASE C: Crecimiento — Prioridad MEDIA (20 artículos)

### Derecho Corporativo (6 artículos nuevos)
- [ ] sa-de-cv-vs-srl-cdmx — S.A. de C.V. vs S. de R.L.: cuál conviene para tu negocio
- [ ] compliance-empresarial-mexico — Compliance empresarial en México: obligaciones legales 2026
- [ ] contratos-mercantiles-cdmx — Contratos mercantiles: tipos y cláusulas esenciales
- [ ] fusiones-adquisiciones-mexico — Fusiones y adquisiciones en México: proceso legal completo
- [ ] propiedad-intelectual-mexico — Registro de marca y patente en México: guía IMPI 2026
- [ ] disolucion-liquidacion-empresa — Disolución y liquidación de empresas en México

### Derecho Laboral (6 artículos nuevos)
- [ ] liquidacion-laboral-cdmx — Liquidación laboral en CDMX: cómo calcular lo que te corresponde
- [ ] acoso-laboral-cdmx — Acoso laboral (mobbing) en CDMX: cómo denunciar y qué pruebas necesitas
- [ ] contrato-trabajo-mexico — Contrato de trabajo en México: tipos, derechos y obligaciones
- [ ] demanda-laboral-cdmx — Cómo presentar una demanda laboral en CDMX: paso a paso 2026
- [ ] prestaciones-ley-mexico — Prestaciones de ley en México: aguinaldo, vacaciones, prima
- [ ] renuncia-voluntaria-derechos — Renuncia voluntaria en México: qué derechos conservas

### Derecho Migratorio (6 artículos nuevos)
- [ ] visa-trabajo-mexico — Visa de trabajo en México: tipos, requisitos y proceso 2026
- [ ] residencia-temporal-mexico — Residencia temporal en México: guía completa de trámite
- [ ] naturalizacion-mexico — Naturalización mexicana: requisitos, examen y costos
- [ ] cambio-condicion-migratoria — Cambio de condición migratoria en México: opciones legales
- [ ] empresa-extranjeros-mexico — Abrir una empresa siendo extranjero en México: requisitos legales
- [ ] deportacion-mexico-derechos — Deportación en México: derechos y recursos legales

### Derecho Familiar (5 artículos nuevos)
- [ ] violencia-familiar-cdmx — Violencia familiar en CDMX: medidas de protección y denuncia
- [ ] patria-potestad-cdmx — Patria potestad en CDMX: diferencias con custodia y cómo se pierde
- [ ] concubinato-derechos-cdmx — Derechos del concubinato en CDMX: pensión, herencia y custodia
- [ ] adopcion-cdmx — Adopción en CDMX: requisitos, proceso y tiempos 2026
- [ ] regimen-matrimonial-cdmx — Régimen matrimonial en CDMX: sociedad conyugal vs separación de bienes

---

## FASE D: Autoridad total — Prioridad BAJA (17 artículos)

### Temas transversales y long-tail
- [ ] como-elegir-abogado-cdmx — Cómo elegir un abogado en CDMX: 10 criterios clave
- [ ] costo-abogado-cdmx — ¿Cuánto cobra un abogado en CDMX? Guía de honorarios 2026
- [ ] juzgados-familiares-cdmx-directorio — Juzgados familiares en CDMX: ubicaciones y horarios
- [ ] tribunales-laborales-cdmx — Tribunales laborales en CDMX: dónde y cómo presentar demandas
- [ ] registro-publico-propiedad-cdmx — Registro Público de la Propiedad CDMX: trámites y consultas
- [ ] notario-publico-cdmx — ¿Cuándo necesitas un notario público en CDMX?
- [ ] mediacion-conciliacion-cdmx — Mediación y conciliación en CDMX: alternativa al juicio
- [ ] amparo-indirecto-mexico — Amparo indirecto en México: guía completa para ciudadanos
- [ ] poder-notarial-cdmx — Poder notarial en CDMX: tipos, costos y para qué sirve
- [ ] acta-nacimiento-cdmx — Acta de nacimiento en CDMX: trámite, corrección y apostilla
- [ ] juicio-nulidad-cdmx — Juicio de nulidad en CDMX: cuándo y cómo impugnar actos
- [ ] embargo-bienes-cdmx — Embargo de bienes en CDMX: proceso legal y cómo evitarlo
- [ ] pensiones-imss-issste — Pensiones IMSS e ISSSTE: modalidades y cómo reclamar
- [ ] seguro-social-derechos — Derechos ante el IMSS: incapacidad, pensión y prestaciones
- [ ] sat-problemas-fiscales — Problemas con el SAT: auditorías, multas y defensa fiscal
- [ ] derechos-consumidor-mexico — Derechos del consumidor en México: PROFECO y reclamaciones
- [ ] accidentes-transito-cdmx — Accidentes de tránsito en CDMX: responsabilidad legal y seguros

---

## Progreso total

| Fase | Artículos | Status |
|------|-----------|--------|
| A — Base | 13/13 | COMPLETADA |
| B — Especialidades débiles | 9/20 | EN PROGRESO |
| C — Crecimiento | 0/20 | Pendiente |
| D — Autoridad total | 0/17 | Pendiente |
| **TOTAL** | **22/70** | **31%** |

---

## Checklist técnico por sesión

Antes de empezar cada sesión de contenido:
- [ ] `cd /Users/seosecreto/Documents/abogados-cdmx`
- [ ] `git pull origin main`
- [ ] `source ~/.nvm/nvm.sh && nvm use 18`

Después de crear artículos:
- [ ] Agregar al array de articulos en src/pages/blog/index.astro
- [ ] Agregar URLs a public/sitemap.xml
- [ ] Agregar internal links (especialidades, perfiles, otros posts)
- [ ] `npx astro build` — verificar 0 errores
- [ ] `git add -u && git add src/content/blog/*.md`
- [ ] `git commit -m "feat(blog): add X new articles — [especialidades]"`
- [ ] `git push origin main`
- [ ] Marcar [x] en este archivo
