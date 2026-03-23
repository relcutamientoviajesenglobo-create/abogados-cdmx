# GEO Audit Report — abogadosencdmx.com

**Date:** 2026-03-22
**Business Type:** Local Service (Legal Firm)
**Language:** es-MX
**Platform:** Astro + Cloudflare Pages

---

## Scorecard

| Category | Score | Grade | Severity |
|----------|-------|-------|----------|
| Technical SEO | 83 | A | Low |
| Internal Links | 95 | A | Pass |
| Content Freshness | 85 | A | Low |
| Hreflang | 100 | A | Pass |
| llms.txt Quality | 100 | A | Pass |
| AI Citability | 36 | F | Critical |
| E-E-A-T | 0 | F | Critical |
| Brand Presence | 0 | F | Critical |
| Search Intent | 30 | F | Critical |
| **Platform Readiness** | **46** | **D** | **High** |

### Platform Readiness Breakdown

| AI Platform | Score | Grade |
|-------------|-------|-------|
| ChatGPT | 68 | B |
| Perplexity | 60 | C |
| Claude | 44 | D |
| Google AI Overviews | 32 | F |
| Gemini | 26 | F |

---

## 1. AI Citability (36/100 — F)

**Current state:** 11 content passages analyzed, all scored D or F. Zero passages are citation-ready for AI models.

**Issues found:**

| Issue | Severity | Confidence |
|-------|----------|------------|
| Passages too short (10/11 under 225 words) | Critical | Confirmed |
| No FAQ/snippet-ready content (no Q&A, no definitions, no numbered steps) | Critical | Confirmed |
| Flesch readability 10.8 (very difficult; target 60-75) | High | Confirmed |
| No conversational language (no second-person, no questions) | Medium | Confirmed |
| Zero multi-modal content (no video, infographics, interactive) | Medium | Confirmed |
| No data tables on a service page | Low | Hypothesis |

**Priority fixes:**
1. Expand homepage content blocks to 225-415 words each
2. Add FAQ sections with question headings + direct answers
3. Simplify language (shorter sentences, active voice)
4. Add comparison tables, process steps, cost breakdowns

---

## 2. AI Crawler Access (CONFLICTED)

**Current state:** llms.txt (100/100 A), llms-full.txt present, RSL 1.0 at /.well-known/rsl.json

**Critical issue:** Cloudflare Managed Content rules OVERRIDE manual robots.txt rules

| Crawler | Owner | Manual Rule | Cloudflare Block | Result |
|---------|-------|-------------|-----------------|--------|
| GPTBot | OpenAI | Allow | Disallow | CONFLICTED |
| ClaudeBot | Anthropic | Allow | Disallow | CONFLICTED |
| Google-Extended | Google | Allow | Disallow | CONFLICTED |
| Applebot-Extended | Apple | Allow | Disallow | CONFLICTED |
| Amazonbot | Amazon | Allow | Disallow | CONFLICTED |
| OAI-SearchBot | OpenAI | Allow | — | ALLOWED |
| ChatGPT-User | OpenAI | Allow | — | ALLOWED |
| PerplexityBot | Perplexity | Allow | — | ALLOWED |
| CCBot | Common Crawl | Disallow | Disallow | BLOCKED (correct) |
| Bytespider | ByteDance | Disallow | Disallow | BLOCKED (correct) |
| Meta-ExternalAgent | Meta | — | Disallow | BLOCKED |

**Action required:** In Cloudflare dashboard → Bots → AI Crawlers:
- ALLOW: GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, Amazonbot
- KEEP BLOCKED: CCBot, Bytespider
- DECIDE: Meta-ExternalAgent (allow if you want Meta AI visibility)

---

## 3. llms.txt & RSL Status (100/100 — A)

**Current state:**
- llms.txt: Present (2,960 chars) — well-structured
- llms-full.txt: Present (29,492 bytes, 10K+ words) — comprehensive
- RSL 1.0: Present at /.well-known/rsl.json

**No issues.** This is best-in-class for AI content accessibility.

---

## 4. Structured Data / Schema (Partial — ~65)

**Current state:**
- LegalService schema: Valid, well-populated (address, geo, hours, reviews, aggregateRating)
- WebSite schema: Valid with SearchAction

**Missing schemas:**

| Schema Type | Priority | Why |
|-------------|----------|-----|
| Organization | High | Brand signals, Knowledge Panel eligibility, sameAs for social profiles |
| BreadcrumbList | High | Navigation clarity in SERPs, crawl understanding |
| FAQPage | High | Rich results for FAQ sections, AI snippet eligibility |
| Service (per specialty) | Medium | Individual rich results per practice area |
| Person/Attorney | Medium | Individual lawyer profiles with credentials |
| HowTo | Low | For process-oriented content (divorce steps, etc.) |

---

## 5. Technical SEO (83/100 — A)

**Current state:** 15/18 checks passed

**Issues:**

| Issue | Severity | Confidence |
|-------|----------|------------|
| Meta description too long (212 chars, max 160) | Medium | Confirmed |
| Missing security headers (HSTS, CSP, X-Frame-Options, Permissions-Policy) | Low | Confirmed |
| No images use srcset for responsive loading | Low | Confirmed |

---

## 6. E-E-A-T (0/100 — F)

**Current state:** ZERO of 9 E-E-A-T signals detected. Critical for a YMYL (Your Money Your Life) legal services site.

**All 9 missing signals:**

| Signal | Weight | Severity | Fix |
|--------|--------|----------|-----|
| Author bylines | 15 | Critical | Add author name + credentials to every content page |
| Publication dates | 12 | High | Show "Publicado" and "Actualizado" dates visibly |
| Citation language | 12 | High | Reference CDMX legal codes, official sources |
| Credentials | 12 | High | Display "Lic.", university, bar number, years of experience |
| Contact information | 10 | Medium | Show phone, email, address in visible footer/header |
| About page link | 10 | Medium | Add prominent link to /quienes-somos |
| Trust indicators | 10 | Medium | Show client testimonials, case count, certifications |
| First-party expertise | 9 | Medium | Use "en nuestra experiencia", "hemos resuelto" language |
| Schema.org authorship | 10 | Medium | Add Person schema with author credentials |

---

## 7. Brand Presence (0/100 — F)

**Current state:** The brand exists ONLY on its own website. Zero external presence.

| Platform | Status |
|----------|--------|
| Facebook | Not found |
| Instagram | Not found |
| LinkedIn | Not found |
| YouTube | Not found |
| Twitter/X | Not found |
| Google Business Profile | Unverified (likely absent) |
| Legal directories | Not listed |
| Reddit mentions | Zero |
| External backlinks | Zero found |

**Priority actions:**
1. Create Google Business Profile (critical for local SEO)
2. Create Facebook page + Instagram business account
3. Register on Mexican legal directories (NexoAbogados, AbogaClick, Juristas.MX, Buholegal, ContactaAbogado)
4. Add sameAs schema markup linking all profiles
5. Build presence on Reddit r/DerechoMexicano, r/mexico

---

## 8. Platform Readiness (46/100 — D)

| Platform | Score | Key Gap |
|----------|-------|---------|
| ChatGPT | 68 (B) | Citability too low |
| Perplexity | 60 (C) | Content not fact-dense enough |
| Claude | 44 (D) | Citability + E-E-A-T weak |
| Google AI Overviews | 32 (F) | Schema + E-E-A-T critical |
| Gemini | 26 (F) | Brand presence + E-E-A-T zero |

---

## 9. Search Intent (30/100 — F)

**Current state:** Homepage signals informational intent but users searching "abogados en cdmx" have commercial/transactional intent.

**Issues:**
- No commercial CTAs aligned with search intent
- No question-format headings for featured snippets
- Content reads as informational brochure, not as a conversion page

**Fix:** Restructure homepage with commercial headings ("Consulta gratuita", "Agenda tu cita hoy"), comparison tables, pricing transparency, testimonials with outcomes.

---

## 10. Content Freshness (85/100 — A)

**Current state:** Most recent content dated Jan 8, 2026 (74 days old). 5 publication dates found in JSON-LD.

**Minor improvements:**
- Add visible "Última actualización" dates on pages
- Add `article:modified_time` meta tags
- Update homepage content quarterly

---

## 11. Internal Link Structure (95/100 — A)

**Current state:** 37 internal links, 25 unique destinations, 82% sitemap coverage, zero generic anchors.

**No critical issues.** 5 sitemap pages not linked from homepage (minor).

---

## 12. Hreflang / International SEO (100/100 — A)

**Current state:** Single-language site (es-MX), no hreflang needed. Correct configuration.

---

## Top 5 Priority Actions

1. **Fix Cloudflare robots.txt conflict** — Unblock GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, Amazonbot in Cloudflare dashboard
2. **Add E-E-A-T signals** — Author bylines, credentials, visible dates, contact info, citations to legal codes
3. **Improve citability** — Expand content blocks to 225-415 words, add FAQ sections, simplify language (Flesch 60+)
4. **Build brand presence** — Google Business Profile, Facebook, Instagram, legal directories, sameAs schema
5. **Add missing schemas** — Organization, BreadcrumbList, FAQPage on relevant pages
