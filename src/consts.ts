/**
 * Datos de la empresa. Punto único de edición: cambiar aquí actualiza
 * cabecera, pie, formularios, datos estructurados y etiquetas SEO.
 */

export const EMPRESA = {
  nombre: 'Terrazul',
  nombreLargo: 'Terrazul SpA',
  razonSocial: 'Terrazul Servicios y Comercialización SpA',
  descripcionCorta:
    'Impermeabilización, revestimientos industriales y refuerzos estructurales en la Región del Biobío.',
  telefono: '+56 9 9789 0113',
  telefonoE164: '+56997890113',
  whatsapp: '56997890113',
  email: 'mlagos@terrazulspa.cl',
  direccion: {
    calle: 'Calle 4 N° 402',
    comuna: 'Talcahuano',
    region: 'Región del Biobío',
    pais: 'Chile',
  },
  mapaUrl: 'https://www.google.com/maps/search/?api=1&query=Calle+4+402+Talcahuano+Biobio+Chile',
  facebook: 'https://facebook.com/terrazulspa',
  horario: 'Lunes a viernes, 08:30 – 18:00',
} as const;

export const SITIO = {
  url: 'https://terrazulspa.cl',
  titulo: 'Terrazul — Impermeabilización y protección industrial en el Biobío',
  descripcion:
    'Especificación, suministro e instalación de sistemas de impermeabilización, pisos industriales, sellado de juntas y refuerzos estructurales para plantas y obras de la Región del Biobío.',
  idioma: 'es-CL',
} as const;

/** Mensaje precargado al abrir WhatsApp desde el sitio. */
export function whatsappUrl(mensaje = 'Hola, necesito asesoría para un proyecto.') {
  return `https://wa.me/${EMPRESA.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

/**
 * Formulario de contacto.
 *
 * El sitio es estático, así que el envío necesita un servicio externo. Hay dos
 * escenarios según dónde se publique:
 *
 *  · Vercel / Netlify / cualquier hosting estático → Web3Forms (por defecto).
 *    Consigue la clave en https://web3forms.com escribiendo el correo de destino:
 *    te la mandan al instante, no hay que crear cuenta. Pégala en `accessKey`.
 *
 *  · Hosting Apache con PHP (el anterior de terrazulspa.cl) → cambia `endpoint`
 *    a '/api/contacto.php' y deja `accessKey` vacío. Ese archivo sigue en public/.
 *
 * Mientras `accessKey` esté vacío y el endpoint sea el de Web3Forms, la página de
 * contacto muestra los canales directos en vez de un formulario que no enviaría nada.
 */
export const FORMULARIO = {
  endpoint: 'https://api.web3forms.com/submit',
  accessKey: '',
} as const;

/** ¿Se puede publicar el formulario, o hay que mostrar los canales directos? */
export const formularioActivo =
  FORMULARIO.endpoint !== 'https://api.web3forms.com/submit' || FORMULARIO.accessKey !== '';

export const NAVEGACION = [
  { texto: 'Servicios', href: '/servicios' },
  { texto: 'Sectores', href: '/#sectores' },
  { texto: 'Proceso', href: '/#proceso' },
  { texto: 'Nosotros', href: '/nosotros' },
  { texto: 'Contacto', href: '/contacto' },
] as const;

/**
 * Argumentos del hero, en formato chip.
 * Van sueltos y no dentro de la bajada a propósito: un chip se escanea, una
 * subordinada al final de un párrafo no se lee. Máximo cuatro y de 3 a 4 palabras
 * cada uno; si crecen, dejan de funcionar como chip.
 */
export const VENTAJAS_HERO = [
  'Una sola contraparte',
  'Sin detener tu planta',
  'Visita técnica sin costo',
] as const;

/** Rubros atendidos. Se usan en la home y en los datos estructurados. */
export const SECTORES = [
  {
    nombre: 'Celulosa y papel',
    detalle: 'Pisos resistentes a químicos, sellos y protección de estructuras en ambiente húmedo.',
  },
  {
    nombre: 'Alimentaria',
    detalle: 'Revestimientos sanitarios, sin emisión de polvo y aptos para lavado frecuente.',
  },
  {
    nombre: 'Vitivinícola',
    detalle: 'Protección ante ácidos orgánicos en salas de vinificación, cubas y zonas de lavado.',
  },
  {
    nombre: 'Lechera',
    detalle: 'Pisos antideslizantes y juntas selladas en salas de proceso y cámaras.',
  },
  {
    nombre: 'Pesquera',
    detalle: 'Sistemas resistentes a salmuera, impacto y limpieza intensiva.',
  },
  {
    nombre: 'Retail y comercial',
    detalle: 'Cubiertas sin filtraciones, estacionamientos y remodelación de locales.',
  },
  {
    nombre: 'Construcción y edificación',
    detalle: 'Impermeabilización de subterráneos, terrazas y control de napas.',
  },
  {
    nombre: 'Sanitaria y obras civiles',
    detalle: 'Estanques, canaletas y reparación de hormigón expuesto.',
  },
] as const;

/** Pasos del método de trabajo. */
export const PROCESO = [
  {
    numero: '01',
    titulo: 'Visita técnica',
    texto:
      'Vamos a terreno. Levantamos el estado real del sustrato, las condiciones de servicio y las restricciones operativas antes de proponer nada.',
  },
  {
    numero: '02',
    titulo: 'Especificación',
    texto:
      'Definimos el sistema, los espesores y el procedimiento constructivo. Recibes alcance, plazo y precio por escrito, con las fichas técnicas de respaldo.',
  },
  {
    numero: '03',
    titulo: 'Ejecución',
    texto:
      'Preparación de superficie controlada y aplicación por capas, coordinada con tus turnos para no detener la producción.',
  },
  {
    numero: '04',
    titulo: 'Entrega y respaldo',
    texto:
      'Protocolo de recepción, registro de lo aplicado y recomendaciones de mantención para que la solución dure lo que tiene que durar.',
  },
] as const;

/**
 * Piezas del bento de "Por qué nos llaman".
 *
 * Formato: etiqueta grande en lenguaje del cliente + categoría técnica corta.
 * **Sin párrafos.** La explicación la carga la figura, no el texto: ese es el
 * mecanismo que evita que la sección vuelva a ser un muro.
 * Título de 2 a 4 palabras, categoría de 1 a 3.
 */
export const PIEZAS_PROBLEMA = [
  {
    titulo: 'El agua no entra donde aparece la mancha',
    categoria: 'Recorrido oculto',
    figura: 'recorrido' as const,
    fondo: 'bg-azul-950',
    tono: 'oscuro' as const,
    ancho: 'normal' as const,
  },
  {
    titulo: 'Parada no programada',
    categoria: 'Costo de oportunidad',
    figura: 'parada' as const,
    fondo: 'bg-azul-500',
    tono: 'oscuro' as const,
    ancho: 'normal' as const,
  },
  {
    titulo: 'Corrosión silenciosa',
    categoria: 'Daño acumulado',
    figura: 'inviernos' as const,
    fondo: 'bg-azul-100',
    tono: 'claro' as const,
    ancho: 'normal' as const,
  },
  {
    titulo: 'Una sola contraparte',
    categoria: 'La diferencia',
    figura: 'contraparte' as const,
    fondo: 'bg-azul-900',
    tono: 'oscuro' as const,
    ancho: 'completo' as const,
  },
] as const;

/**
 * Comparativa de modelos de contratación.
 * Existe para volver verificable la afirmación "una sola contraparte": en vez de
 * pedir que nos crean, se muestra quién cubre qué. Cada alternativa conserva sus
 * ventajas reales — una comparativa que deja al resto en cero no se cree.
 */
export const COMPARATIVA = {
  columnas: ['Distribuidor', 'Contratista', 'Terrazul'] as const,
  filas: [
    { criterio: 'Diagnóstico en terreno antes de cotizar', cobertura: [false, false, true] },
    { criterio: 'Especificación del sistema', cobertura: [true, false, true] },
    { criterio: 'Suministro de los materiales', cobertura: [true, false, true] },
    { criterio: 'Instalación con equipo propio', cobertura: [false, true, true] },
    { criterio: 'Responde si el sistema falla', cobertura: [false, false, true] },
  ],
  nota: 'Las otras opciones no están mal. El problema es que, cuando son tres, los vacíos entre ellos no tienen dueño.',
} as const;

export const PREGUNTAS = [
  {
    pregunta: '¿Trabajan fuera de la Región del Biobío?',
    respuesta:
      'Nuestra base está en Talcahuano y operamos principalmente en la Región del Biobío. También atendemos proyectos en el resto de la zona sur; escríbenos con la ubicación y lo evaluamos.',
  },
  {
    pregunta: '¿Pueden intervenir sin detener la planta?',
    respuesta:
      'En la mayoría de los casos, sí. Sectorizamos la faena y trabajamos en turnos o ventanas de mantención. Lo definimos en la visita técnica, según los tiempos de curado del sistema que corresponda.',
  },
  {
    pregunta: '¿Cómo se cotiza un trabajo?',
    respuesta:
      'Con una visita técnica sin costo dentro del Gran Concepción. De ahí sale una propuesta escrita con alcance, procedimiento, plazo y precio. Sin visita solo podemos dar rangos referenciales.',
  },
  {
    pregunta: '¿Venden productos sin instalación?',
    respuesta:
      'Sí. Distribuimos y comercializamos soluciones para industria y construcción de marcas reconocidas, con la asesoría técnica para que elijas el sistema correcto.',
  },
  {
    pregunta: '¿Qué respaldo entregan al terminar?',
    respuesta:
      'Protocolo de recepción, registro de los productos y espesores aplicados, fichas técnicas y hojas de seguridad, más las recomendaciones de mantención del sistema.',
  },
] as const;
