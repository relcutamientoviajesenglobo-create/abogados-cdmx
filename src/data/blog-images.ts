// Centralized blog image mapping — every slug gets a UNIQUE Unsplash photo
// URL format: https://images.unsplash.com/photo-{ID}?w=700&h=420&fit=crop&fm=webp&q=75

export const blogImages: Record<string, string> = {

  // ── FAMILIAR (family, children, marriage, divorce, custody, adoption) ──
  'guia-completa-pension-alimenticia-calculo-cdmx': 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=700&h=420&fit=crop&fm=webp&q=75',
  'pension-alimenticia-cdmx': 'https://images.unsplash.com/photo-1581952976147-5a2d15560349?w=700&h=420&fit=crop&fm=webp&q=75',
  'divorcio-express-cdmx': 'https://images.unsplash.com/photo-1537655780520-1e392ead81f2?w=700&h=420&fit=crop&fm=webp&q=75',
  'guia-divorcio-cdmx-2026': 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=700&h=420&fit=crop&fm=webp&q=75',
  'cuanto-cuesta-divorcio-cdmx': 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=700&h=420&fit=crop&fm=webp&q=75',
  'custodia-hijos-cdmx': 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=700&h=420&fit=crop&fm=webp&q=75',
  'guarda-custodia-compartida-cdmx': 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=700&h=420&fit=crop&fm=webp&q=75',
  'adopcion-cdmx': 'https://images.unsplash.com/photo-1499728603263-13571c8e3601?w=700&h=420&fit=crop&fm=webp&q=75',
  'patria-potestad-cdmx': 'https://images.unsplash.com/photo-1478476868527-002ae3f3e159?w=700&h=420&fit=crop&fm=webp&q=75',
  'violencia-familiar-cdmx': 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=700&h=420&fit=crop&fm=webp&q=75',
  'violencia-domestica-orden-proteccion-cdmx': 'https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=700&h=420&fit=crop&fm=webp&q=75',
  'concubinato-derechos-cdmx': 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=700&h=420&fit=crop&fm=webp&q=75',
  'matrimonio-bienes-separados-vs-sociedad-conyugal-cdmx': 'https://images.unsplash.com/photo-1506836467174-27f1042aa48c?w=700&h=420&fit=crop&fm=webp&q=75',
  'interdiccion-tutela-cdmx': 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=700&h=420&fit=crop&fm=webp&q=75',

  // ── PENAL (criminal law, defense, prison, courts, police) ──
  'derechos-detenido-cdmx': 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=700&h=420&fit=crop&fm=webp&q=75',
  'defensa-penal-cdmx': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&h=420&fit=crop&fm=webp&q=75',
  'juicio-oral-penal-cdmx': 'https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=700&h=420&fit=crop&fm=webp&q=75',
  'amparo-penal-cdmx': 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=700&h=420&fit=crop&fm=webp&q=75',
  'libertad-bajo-caucion-cdmx': 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=700&h=420&fit=crop&fm=webp&q=75',
  'antecedentes-penales-cdmx-carta': 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=700&h=420&fit=crop&fm=webp&q=75',
  'narcomenudeo-cdmx-defensa': 'https://images.unsplash.com/photo-1611773542744-8b3b2e7a15f0?w=700&h=420&fit=crop&fm=webp&q=75',
  'robo-vehiculo-cdmx': 'https://images.unsplash.com/photo-1587825140708-dfaf18c4b07a?w=700&h=420&fit=crop&fm=webp&q=75',
  'delitos-patrimoniales-cdmx': 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=700&h=420&fit=crop&fm=webp&q=75',
  'prescripcion-delitos-cdmx': 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=700&h=420&fit=crop&fm=webp&q=75',
  'recursos-apelacion-penal-cdmx': 'https://images.unsplash.com/photo-1589994965851-a8f479c573a1?w=700&h=420&fit=crop&fm=webp&q=75',
  'mediacion-penal-cdmx': 'https://images.unsplash.com/photo-1542744173-8e7e91415e5c?w=700&h=420&fit=crop&fm=webp&q=75',
  'violencia-familiar-cdmx-penal': 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&h=420&fit=crop&fm=webp&q=75',
  'violencia-genero-cdmx-tipos-denuncia': 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=700&h=420&fit=crop&fm=webp&q=75',

  // ── CIVIL (contracts, lawsuits, property, consumer, mediation) ──
  'contratos-civiles-cdmx': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=700&h=420&fit=crop&fm=webp&q=75',
  'demanda-civil-cdmx': 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=700&h=420&fit=crop&fm=webp&q=75',
  'juicio-oral-civil-cdmx': 'https://images.unsplash.com/photo-1517245386747-bb6c9c34c75e?w=700&h=420&fit=crop&fm=webp&q=75',
  'responsabilidad-civil-cdmx': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=700&h=420&fit=crop&fm=webp&q=75',
  'prescripcion-civil-cdmx': 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=700&h=420&fit=crop&fm=webp&q=75',
  'mediacion-civil-cdmx': 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=700&h=420&fit=crop&fm=webp&q=75',
  'cobro-deudas-prescripcion-cdmx': 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=700&h=420&fit=crop&fm=webp&q=75',
  'embargo-bienes-cdmx': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=700&h=420&fit=crop&fm=webp&q=75',
  'derechos-consumidor-profeco-cdmx': 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=700&h=420&fit=crop&fm=webp&q=75',
  'sucesiones-herencias-cdmx-2026': 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=700&h=420&fit=crop&fm=webp&q=75',
  'testamento-cdmx': 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=420&fit=crop&fm=webp&q=75',
  'nuevo-codigo-procedimientos-civiles-familiares-2026': 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=700&h=420&fit=crop&fm=webp&q=75',
  'juicio-ejecutivo-mercantil-cdmx': 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&h=420&fit=crop&fm=webp&q=75',
  'contratos-mercantiles-cdmx': 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=700&h=420&fit=crop&fm=webp&q=75',
  'contratos-mercantiles-mexico': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&h=420&fit=crop&fm=webp&q=75',

  // ── CORPORATIVO (companies, business, startups, IP, compliance) ──
  'compliance-empresarial-mexico': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&h=420&fit=crop&fm=webp&q=75',
  'constituir-empresa-mexico-2026': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&h=420&fit=crop&fm=webp&q=75',
  'sa-de-cv-vs-srl-cdmx': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=420&fit=crop&fm=webp&q=75',
  'sa-de-cv-vs-srl-vs-sas-mexico': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=420&fit=crop&fm=webp&q=75',
  'startups-legal-mexico': 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=700&h=420&fit=crop&fm=webp&q=75',
  'franquicias-mexico': 'https://images.unsplash.com/photo-1542626991-cbc4e04d76f4?w=700&h=420&fit=crop&fm=webp&q=75',
  'fusiones-adquisiciones-mexico': 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&h=420&fit=crop&fm=webp&q=75',
  'gobierno-corporativo-mexico': 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=700&h=420&fit=crop&fm=webp&q=75',
  'disolucion-liquidacion-empresa-mexico': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&h=420&fit=crop&fm=webp&q=75',
  'propiedad-intelectual-empresas-cdmx': 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=700&h=420&fit=crop&fm=webp&q=75',
  'proteccion-datos-personales-empresas': 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=700&h=420&fit=crop&fm=webp&q=75',
  'empresa-extranjeros-mexico-inversion': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=420&fit=crop&fm=webp&q=75',

  // ── INMOBILIARIO (real estate, property, housing) ──
  'compraventa-inmueble-cdmx': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&h=420&fit=crop&fm=webp&q=75',
  'contrato-arrendamiento-cdmx': 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&h=420&fit=crop&fm=webp&q=75',
  'arrendamiento-conflictos-cdmx': 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=700&h=420&fit=crop&fm=webp&q=75',
  'derechos-inquilino-cdmx-2026': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&h=420&fit=crop&fm=webp&q=75',
  'escrituracion-cdmx': 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=700&h=420&fit=crop&fm=webp&q=75',
  'regularizacion-propiedad-cdmx': 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=700&h=420&fit=crop&fm=webp&q=75',
  'usucapion-cdmx': 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&h=420&fit=crop&fm=webp&q=75',
  'avaluo-inmobiliario-cdmx': 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=700&h=420&fit=crop&fm=webp&q=75',
  'fideicomiso-inmobiliario-cdmx': 'https://images.unsplash.com/photo-1560185127-6a8e38e1d7e2?w=700&h=420&fit=crop&fm=webp&q=75',
  'due-diligence-inmobiliario-cdmx': 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=700&h=420&fit=crop&fm=webp&q=75',
  'condominos-administracion-cdmx': 'https://images.unsplash.com/photo-1565402170291-8491f14678db?w=700&h=420&fit=crop&fm=webp&q=75',
  'hipoteca-vs-credito-infonavit-vs-fovissste': 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=700&h=420&fit=crop&fm=webp&q=75',
  'impuestos-compraventa-inmueble-cdmx': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&h=420&fit=crop&fm=webp&q=75',
  'zona-restringida-extranjeros-inmuebles-mexico': 'https://images.unsplash.com/photo-1503220317266-8c685ff5e247?w=700&h=420&fit=crop&fm=webp&q=75',

  // ── MIGRATORIO (immigration, visas, passports, borders) ──
  'residencia-temporal-mexico': 'https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=700&h=420&fit=crop&fm=webp&q=75',
  'residencia-permanente-mexico-2026': 'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=700&h=420&fit=crop&fm=webp&q=75',
  'visa-trabajo-mexico': 'https://images.unsplash.com/photo-1544016768-982d1554f0b3?w=700&h=420&fit=crop&fm=webp&q=75',
  'visa-trabajo-mexico-tipos': 'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?w=700&h=420&fit=crop&fm=webp&q=75',
  'visa-inversionista-mexico': 'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?w=700&h=420&fit=crop&fm=webp&q=75',
  'naturalizacion-mexico': 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=700&h=420&fit=crop&fm=webp&q=75',
  'naturalizacion-mexicana-requisitos': 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=700&h=420&fit=crop&fm=webp&q=75',
  'doble-nacionalidad-mexico': 'https://images.unsplash.com/photo-1529180979161-06b8b6d6f2be?w=700&h=420&fit=crop&fm=webp&q=75',
  'regularizacion-migratoria-mexico': 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=700&h=420&fit=crop&fm=webp&q=75',
  'permiso-trabajo-extranjeros-mexico': 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&h=420&fit=crop&fm=webp&q=75',
  'deportacion-expulsion-mexico-defensa': 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700&h=420&fit=crop&fm=webp&q=75',
  'asilo-refugio-mexico': 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=700&h=420&fit=crop&fm=webp&q=75',
  'reunificacion-familiar-mexico': 'https://images.unsplash.com/photo-1526778548025-9c3a01e99e87?w=700&h=420&fit=crop&fm=webp&q=75',

  // ── LABORAL (employment, work, labor rights) ──
  'contrato-trabajo-mexico': 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=700&h=420&fit=crop&fm=webp&q=75',
  'contrato-trabajo-tipos-mexico': 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=700&h=420&fit=crop&fm=webp&q=75',
  'despido-injustificado-cdmx': 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=700&h=420&fit=crop&fm=webp&q=75',
  'despido-injustificado-cdmx-2026': 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=700&h=420&fit=crop&fm=webp&q=75',
  'liquidacion-laboral-cdmx': 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=700&h=420&fit=crop&fm=webp&q=75',
  'liquidacion-laboral-calculo-cdmx': 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=700&h=420&fit=crop&fm=webp&q=75',
  'demanda-laboral-cdmx': 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&h=420&fit=crop&fm=webp&q=75',
  'acoso-laboral-cdmx': 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=700&h=420&fit=crop&fm=webp&q=75',
  'acoso-laboral-mobbing-cdmx': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&h=420&fit=crop&fm=webp&q=75',
  'accidente-trabajo-cdmx': 'https://images.unsplash.com/photo-1530099486328-e021101a494a?w=700&h=420&fit=crop&fm=webp&q=75',
  'horas-extras-jornada-laboral-mexico': 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=700&h=420&fit=crop&fm=webp&q=75',
  'home-office-teletrabajo-derechos-mexico': 'https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?w=700&h=420&fit=crop&fm=webp&q=75',
  'outsourcing-subcontratacion-mexico': 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=700&h=420&fit=crop&fm=webp&q=75',
  'sindicatos-negociacion-colectiva-mexico': 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&h=420&fit=crop&fm=webp&q=75',

  // ── GENERAL ──
  'derechos-fundamentales-mexico-guia': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=700&h=420&fit=crop&fm=webp&q=75',
  'como-elegir-abogado-cdmx': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&h=420&fit=crop&fm=webp&q=75',
  'cuanto-cobra-abogado-cdmx': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&h=420&fit=crop&fm=webp&q=75',
};

/**
 * Returns a smaller (400x240) version of the blog image for use in RelatedPosts thumbnails.
 * Falls back to a generic scales-of-justice image if the slug is not found.
 */
export function getRelatedImage(slug: string): string {
  const img = blogImages[slug];
  if (img) return img.replace('w=700&h=420', 'w=400&h=240');
  // fallback
  return 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=240&fit=crop&fm=webp&q=75';
}
