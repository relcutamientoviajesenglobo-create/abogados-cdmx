// Centralized blog image mapping — every slug gets a UNIQUE Unsplash photo
// URL format: https://images.unsplash.com/photo-{ID}?w=700&h=420&fit=crop&fm=webp&q=75

export const blogImages: Record<string, { url: string; alt: string }> = {

  // ── FAMILIAR (family, children, marriage, divorce, custody, adoption) ──
  'guia-completa-pension-alimenticia-calculo-cdmx': {
    url: 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Padre e hijo representando pensión alimenticia en CDMX'
  },
  'pension-alimenticia-cdmx': {
    url: 'https://images.unsplash.com/photo-1581952976147-5a2d15560349?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Familia calculando monto de pensión alimenticia en Ciudad de México'
  },
  'divorcio-express-cdmx': {
    url: 'https://images.unsplash.com/photo-1537655780520-1e392ead81f2?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Pareja firmando trámite de divorcio express en CDMX'
  },
  'guia-divorcio-cdmx-2026': {
    url: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Anillos de matrimonio sobre documentos legales de divorcio en CDMX'
  },
  'cuanto-cuesta-divorcio-cdmx': {
    url: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Calculadora y documentos para costos de divorcio en CDMX'
  },
  'custodia-hijos-cdmx': {
    url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Madre protegiendo a sus hijos durante proceso de custodia en CDMX'
  },
  'guarda-custodia-compartida-cdmx': {
    url: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Padres compartiendo tiempo con hijo bajo custodia compartida en CDMX'
  },
  'adopcion-cdmx': {
    url: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Manos de familia unidas representando adopción en Ciudad de México'
  },
  'patria-potestad-cdmx': {
    url: 'https://images.unsplash.com/photo-1478476868527-002ae3f3e159?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Manos de padre sosteniendo a menor representando patria potestad en CDMX'
  },
  'violencia-familiar-cdmx': {
    url: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Hombre reflexivo ante situación de violencia familiar en CDMX'
  },
  'violencia-domestica-orden-proteccion-cdmx': {
    url: 'https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Mujer buscando orden de protección contra violencia doméstica en CDMX'
  },
  'concubinato-derechos-cdmx': {
    url: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Pareja en unión libre conociendo sus derechos de concubinato en CDMX'
  },
  'matrimonio-bienes-separados-vs-sociedad-conyugal-cdmx': {
    url: 'https://images.unsplash.com/photo-1506836467174-27f1042aa48c?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Novios revisando régimen matrimonial de bienes en CDMX'
  },
  'interdiccion-tutela-cdmx': {
    url: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Persona mayor bajo cuidado representando interdicción y tutela en CDMX'
  },

  // ── PENAL (criminal law, defense, prison, courts, police) ──
  'derechos-detenido-cdmx': {
    url: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Esposas policiales representando derechos del detenido en CDMX'
  },
  'defensa-penal-cdmx': {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Abogado penalista preparando defensa legal en tribunal de CDMX'
  },
  'juicio-oral-penal-cdmx': {
    url: 'https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Sala de juicio oral penal en tribunal de Ciudad de México'
  },
  'amparo-penal-cdmx': {
    url: 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Martillo judicial sobre escritorio para amparo penal en CDMX'
  },
  'libertad-bajo-caucion-cdmx': {
    url: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Llave representando libertad bajo caución en juzgado de CDMX'
  },
  'antecedentes-penales-cdmx-carta': {
    url: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Documentos oficiales para carta de antecedentes penales en CDMX'
  },
  'narcomenudeo-cdmx-defensa': {
    url: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Símbolo de justicia en defensa por narcomenudeo en Ciudad de México'
  },
  'robo-vehiculo-cdmx': {
    url: 'https://images.unsplash.com/photo-1505664063603-28e48ca204eb?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Ventana de prisión simbolizando consecuencias del robo de vehículo en CDMX'
  },
  'delitos-patrimoniales-cdmx': {
    url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Caja fuerte abierta simbolizando delitos patrimoniales en CDMX'
  },
  'prescripcion-delitos-cdmx': {
    url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Biblioteca jurídica con libros sobre prescripción de delitos en CDMX'
  },
  'recursos-apelacion-penal-cdmx': {
    url: 'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Tribunal donde se presentan recursos de apelación penal en CDMX'
  },
  'mediacion-penal-cdmx': {
    url: 'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Balanza de justicia representando mediación penal en CDMX'
  },
  'violencia-familiar-cdmx-penal': {
    url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Abogada especialista en violencia familiar penal en Ciudad de México'
  },
  'violencia-genero-cdmx-tipos-denuncia': {
    url: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Mujer presentando denuncia por violencia de género en CDMX'
  },

  // ── CIVIL (contracts, lawsuits, property, consumer, mediation) ──
  'contratos-civiles-cdmx': {
    url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Personas revisando contrato civil ante notario en CDMX'
  },
  'demanda-civil-cdmx': {
    url: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Expediente judicial de demanda civil en juzgado de CDMX'
  },
  'juicio-oral-civil-cdmx': {
    url: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Columnas de tribunal donde se realizan juicios orales civiles en CDMX'
  },
  'responsabilidad-civil-cdmx': {
    url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Abogado profesional atendiendo caso de responsabilidad civil en CDMX'
  },
  'prescripcion-civil-cdmx': {
    url: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Reloj y expedientes representando prescripción civil en CDMX'
  },
  'mediacion-civil-cdmx': {
    url: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Sesión de mediación civil entre partes en conflicto en CDMX'
  },
  'cobro-deudas-prescripcion-cdmx': {
    url: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Calculadora y facturas pendientes para cobro de deudas en CDMX'
  },
  'embargo-bienes-cdmx': {
    url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Documentos legales de embargo de bienes en juzgado de CDMX'
  },
  'derechos-consumidor-profeco-cdmx': {
    url: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Consumidor ejerciendo sus derechos ante PROFECO en CDMX'
  },
  'sucesiones-herencias-cdmx-2026': {
    url: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Testamento y escrituras para trámite de herencia en CDMX'
  },
  'testamento-cdmx': {
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Persona redactando testamento ante notario en Ciudad de México'
  },
  'nuevo-codigo-procedimientos-civiles-familiares-2026': {
    url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Equipo jurídico analizando nuevo código de procedimientos civiles en México'
  },
  'juicio-ejecutivo-mercantil-cdmx': {
    url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Apretón de manos tras juicio ejecutivo mercantil en CDMX'
  },
  'contratos-mercantiles-cdmx': {
    url: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Empresarios firmando contratos mercantiles en oficina de CDMX'
  },
  'contratos-mercantiles-mexico': {
    url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Reunión ejecutiva para negociación de contratos mercantiles en México'
  },

  // ── CORPORATIVO (companies, business, startups, IP, compliance) ──
  'compliance-empresarial-mexico': {
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Ejecutivo revisando programa de compliance empresarial en México'
  },
  'constituir-empresa-mexico-2026': {
    url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Empresarios firmando acta constitutiva de empresa en México'
  },
  'sa-de-cv-vs-srl-cdmx': {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Gráficas comparativas entre SA de CV y SRL en CDMX'
  },
  'sa-de-cv-vs-srl-vs-sas-mexico': {
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Equipo directivo comparando tipos de sociedades mercantiles en México'
  },
  'startups-legal-mexico': {
    url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Emprendedores trabajando en startup con asesoría legal en México'
  },
  'franquicias-mexico': {
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Oficina tecnológica representando franquicias modernas en México'
  },
  'fusiones-adquisiciones-mexico': {
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Directivos negociando fusión empresarial y adquisición en México'
  },
  'gobierno-corporativo-mexico': {
    url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Junta directiva en sesión de gobierno corporativo en México'
  },
  'disolucion-liquidacion-empresa-mexico': {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Edificio corporativo simbolizando disolución de empresa en México'
  },
  'propiedad-intelectual-empresas-cdmx': {
    url: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Laptop mostrando registro de propiedad intelectual empresarial en CDMX'
  },
  'proteccion-datos-personales-empresas': {
    url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Candado digital representando protección de datos personales empresariales en México'
  },
  'empresa-extranjeros-mexico-inversion': {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Inversionista extranjero analizando oportunidades de negocio en México'
  },

  // ── INMOBILIARIO (real estate, property, housing) ──
  'compraventa-inmueble-cdmx': {
    url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Llaves de casa nueva tras compraventa de inmueble en CDMX'
  },
  'contrato-arrendamiento-cdmx': {
    url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Casa en renta con contrato de arrendamiento en Ciudad de México'
  },
  'arrendamiento-conflictos-cdmx': {
    url: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Propiedad en disputa por conflicto de arrendamiento en CDMX'
  },
  'derechos-inquilino-cdmx-2026': {
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Departamento moderno representando derechos del inquilino en CDMX'
  },
  'escrituracion-cdmx': {
    url: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Notario preparando escrituras de propiedad en Ciudad de México'
  },
  'regularizacion-propiedad-cdmx': {
    url: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Residencia en proceso de regularización de propiedad en CDMX'
  },
  'usucapion-cdmx': {
    url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Vivienda sujeta a prescripción adquisitiva por usucapión en CDMX'
  },
  'avaluo-inmobiliario-cdmx': {
    url: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Perito realizando avalúo inmobiliario de edificio en CDMX'
  },
  'fideicomiso-inmobiliario-cdmx': {
    url: 'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Entrega de llaves de propiedad en fideicomiso inmobiliario en CDMX'
  },
  'due-diligence-inmobiliario-cdmx': {
    url: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Inspector revisando propiedad en due diligence inmobiliario en CDMX'
  },
  'condominos-administracion-cdmx': {
    url: 'https://images.unsplash.com/photo-1565402170291-8491f14678db?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Edificio de condóminos con administración regulada en CDMX'
  },
  'hipoteca-vs-credito-infonavit-vs-fovissste': {
    url: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Casa financiada comparando hipoteca Infonavit y Fovissste en México'
  },
  'impuestos-compraventa-inmueble-cdmx': {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Propiedad de lujo sujeta a impuestos por compraventa en CDMX'
  },
  'zona-restringida-extranjeros-inmuebles-mexico': {
    url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Departamento moderno en zona restringida para inmuebles de extranjeros en México'
  },

  // ── MIGRATORIO (immigration, visas, passports, borders) ──
  'residencia-temporal-mexico': {
    url: 'https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Pasaporte y tarjeta de residencia temporal en México'
  },
  'residencia-permanente-mexico-2026': {
    url: 'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Documentos migratorios para obtener residencia permanente en México'
  },
  'visa-trabajo-mexico': {
    url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Aeropuerto de salida representando trámite de visa de trabajo en México'
  },
  'visa-trabajo-mexico-tipos': {
    url: 'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Viajero con documentación sobre tipos de visa de trabajo en México'
  },
  'visa-inversionista-mexico': {
    url: 'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Empresario extranjero tramitando visa de inversionista en México'
  },
  'naturalizacion-mexico': {
    url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Bandera mexicana representando proceso de naturalización en México'
  },
  'naturalizacion-mexicana-requisitos': {
    url: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Destino turístico representando el camino hacia la naturalización mexicana'
  },
  'doble-nacionalidad-mexico': {
    url: 'https://images.unsplash.com/photo-1529180979161-06b8b6d6f2be?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Dos pasaportes representando doble nacionalidad mexicana y extranjera'
  },
  'regularizacion-migratoria-mexico': {
    url: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Extranjero realizando trámite de regularización migratoria en México'
  },
  'permiso-trabajo-extranjeros-mexico': {
    url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Profesional extranjero trabajando con permiso laboral en México'
  },
  'deportacion-expulsion-mexico-defensa': {
    url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Abogado migratorio preparando defensa contra deportación en México'
  },
  'asilo-refugio-mexico': {
    url: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Persona solicitando asilo y refugio humanitario en México'
  },
  'reunificacion-familiar-mexico': {
    url: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Padre e hijo caminando juntos tras reunificación familiar en México'
  },

  // ── LABORAL (employment, work, labor rights) ──
  'contrato-trabajo-mexico': {
    url: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Empleado revisando contrato de trabajo en oficina de México'
  },
  'contrato-trabajo-tipos-mexico': {
    url: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Escritorio con diferentes tipos de contrato laboral en México'
  },
  'despido-injustificado-cdmx': {
    url: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Trabajador recibiendo carta de despido injustificado en oficina'
  },
  'despido-injustificado-cdmx-2026': {
    url: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Empleado consultando abogado laboral por despido injustificado en CDMX'
  },
  'liquidacion-laboral-cdmx': {
    url: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Documentos y cálculos de liquidación laboral en Ciudad de México'
  },
  'liquidacion-laboral-calculo-cdmx': {
    url: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Calculadora determinando monto de liquidación laboral en CDMX'
  },
  'demanda-laboral-cdmx': {
    url: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Trabajador presentando demanda laboral ante tribunal de CDMX'
  },
  'acoso-laboral-cdmx': {
    url: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Empleado sufriendo acoso laboral en ambiente de trabajo en CDMX'
  },
  'acoso-laboral-mobbing-cdmx': {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Profesional enfrentando mobbing y acoso laboral en empresa de CDMX'
  },
  'accidente-trabajo-cdmx': {
    url: 'https://images.unsplash.com/photo-1530099486328-e021101a494a?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Casco de seguridad en zona de accidente de trabajo en CDMX'
  },
  'horas-extras-jornada-laboral-mexico': {
    url: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Reloj marcando horas extras de jornada laboral en México'
  },
  'home-office-teletrabajo-derechos-mexico': {
    url: 'https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Trabajador en home office ejerciendo derechos de teletrabajo en México'
  },
  'outsourcing-subcontratacion-mexico': {
    url: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Oficina corporativa gestionando outsourcing y subcontratación en México'
  },
  'sindicatos-negociacion-colectiva-mexico': {
    url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Grupo de trabajadores en negociación colectiva sindical en México'
  },

  // ── GENERAL ──
  'derechos-fundamentales-mexico-guia': {
    url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Balanza de justicia representando derechos fundamentales en México'
  },
  'como-elegir-abogado-cdmx': {
    url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Cliente reunido con abogado profesional en despacho de CDMX'
  },
  'cuanto-cobra-abogado-cdmx': {
    url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&h=420&fit=crop&fm=webp&q=75',
    alt: 'Honorarios y costos de contratar abogado en Ciudad de México'
  },
};

/**
 * Returns a smaller (400x240) version of the blog image for use in RelatedPosts thumbnails.
 * Falls back to a generic scales-of-justice image if the slug is not found.
 */
export function getRelatedImage(slug: string): string {
  const entry = blogImages[slug];
  if (entry) return entry.url.replace('w=700&h=420', 'w=400&h=240');
  return 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=240&fit=crop&fm=webp&q=75';
}

export function getImageAlt(slug: string): string {
  const entry = blogImages[slug];
  if (entry) return entry.alt;
  return 'Abogados especializados en CDMX — despacho jurídico profesional';
}

export function getImageUrl(slug: string): string {
  const entry = blogImages[slug];
  if (entry) return entry.url;
  return 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=700&h=420&fit=crop&fm=webp&q=75';
}
