# Manual de marca — Terrazul

**Terrazul Servicios y Comercialización SpA**
Versión 1.0 · Talcahuano, Región del Biobío

Este documento es la fuente de verdad de la marca. Todo lo que se diseñe para Terrazul
—el sitio web, una cotización, una gigantografía de obra, un polerón— se resuelve con lo
que está aquí. Si algo no está resuelto en este manual, la decisión se toma y se documenta
en este archivo, no en el diseño puntual.

Los tokens de este manual están implementados en [`src/styles/global.css`](../src/styles/global.css).
Cambiar un color de marca significa cambiarlo en ese archivo, no en cada componente.

---

## 1. La marca

### 1.1 Qué es Terrazul

Terrazul especifica, suministra e instala sistemas de protección para estructuras:
impermeabilización, pisos y revestimientos industriales, sellado de juntas, refuerzos
estructurales en fibra de carbono, grouting de nivelación y obras de mantención.

No es una constructora ni una ferretería industrial. Es el especialista al que se llama
cuando una estructura tiene un problema que el resto no sabe diagnosticar.

### 1.2 Idea central

> **La capa que protege.**

Todo lo que hace Terrazul es, literalmente, poner una capa entre una estructura y aquello
que la ataca: agua, ácido, abrasión, carga. Esa idea gobierna el logo, el lenguaje visual
y el tono de la comunicación.

### 1.3 Posicionamiento

Para **jefes de mantención, gerentes de planta, ITO y constructoras de la zona sur** que
tienen una estructura fallando o un proyecto que exige protección especializada, Terrazul
es el **especialista local en sistemas de protección** que cubre las tres etapas
—especificación, suministro e instalación— bajo una sola contraparte responsable.

A diferencia del distribuidor que solo vende el producto o del contratista que solo lo
aplica, Terrazul **diagnostica primero** y responde por el resultado completo.

### 1.4 Atributos de personalidad

| Somos | No somos |
| --- | --- |
| Técnicos: hablamos de espesores, sustratos y condiciones de servicio | Solemnes ni acartonados |
| Directos: decimos qué falla y qué cuesta | Vendedores de humo con superlativos |
| Locales: conocemos las plantas y el clima de acá | Provincianos ni informales |
| Preventivos: explicamos el porqué del problema | Alarmistas |

### 1.5 Promesa

**Diagnóstico primero, producto después.** Es la frase que resume la diferencia y la que
debe quedar clara en cualquier pieza, aunque no aparezca escrita.

---

## 2. Verbal

### 2.1 Tono de voz

Español de Chile, profesional, en **segunda persona singular** (tú / tu planta), sin caer
en el tuteo publicitario. Nunca "usted" en el sitio; sí en documentos formales de licitación.

**Reglas:**

1. **Frase corta y verbo concreto.** "Detenemos la filtración en el punto donde entra",
   no "brindamos soluciones integrales orientadas a la satisfacción del cliente".
2. **Beneficio antes que catálogo.** El cliente no compra una membrana de PVC: compra que
   no se le moje la bodega.
3. **Cero superlativos vacíos.** Prohibido "líderes", "excelencia garantizada", "los
   mejores", "calidad insuperable". Si algo es bueno, se demuestra con un dato o un cómo.
4. **Números solo si son verificables.** No inventar años de experiencia, m² ejecutados ni
   cantidad de clientes. Si no está confirmado por la empresa, no se publica.
5. **Sin promesas legales al aire.** No usar la palabra "garantía" ni plazos de garantía sin
   respaldo contractual. Se habla de *respaldo*: protocolo de recepción, fichas técnicas y
   recomendaciones de mantención.
6. **Nombrar el dolor.** El titular funciona cuando el lector se reconoce: "Manchas de
   humedad que reaparecen cada invierno".

### 2.2 Arquitectura de mensajes

| Nivel | Mensaje |
| --- | --- |
| Claim principal | Protegemos lo que sostiene tu operación. |
| Descriptor | Impermeabilización, pisos industriales y refuerzos estructurales en el Biobío. |
| Prueba 1 | Una sola contraparte: especificación, suministro e instalación. |
| Prueba 2 | Diagnóstico antes que producto. |
| Prueba 3 | Trabajamos con la planta operando. |
| Llamado a la acción | Solicitar visita técnica · Cotizar por WhatsApp |

### 2.3 Nombre y escritura

- **Terrazul** en texto corrido, con mayúscula inicial. Nunca "TerraZul" ni "TERRAZUL"
  en medio de una frase.
- **Terrazul SpA** cuando se necesita la figura societaria.
- **Terrazul Servicios y Comercialización SpA** solo en documentos legales, pie de página
  y facturación.
- "SpA" siempre así: S mayúscula, p minúscula, A mayúscula. Nunca "SPA".

---

## 3. Color

### 3.1 Lógica del sistema

El nombre contiene la paleta: **tierra** + **azul**. El azul manda (es la instrucción
explícita del cliente y el color del rubro: agua, técnica, confianza); la tierra aparece
como acento cálido en dosis mínimas, para que el conjunto no se vuelva frío y corporativo.

### 3.2 Azul Terrazul — color principal

| Token | HEX | Uso |
| --- | --- | --- |
| `azul-50` | `#EEF5FD` | Fondos de apoyo, superficies de iconos |
| `azul-100` | `#D5E6FA` | Texto secundario sobre fondo oscuro |
| `azul-200` | `#ADCDF4` | Antetítulos sobre fondo oscuro, bordes suaves |
| `azul-300` | `#7CADEC` | Detalles decorativos |
| `azul-400` | `#4A8BE2` | Iconos sobre fondo oscuro |
| **`azul-500`** | **`#1E6BD6`** | **Color de marca. Botón primario, arco del isotipo, enlaces destacados** |
| `azul-600` | `#1555AE` | Hover del botón primario, enlaces en texto |
| `azul-700` | `#124487` | — |
| `azul-800` | `#103763` | — |
| **`azul-900`** | **`#0A2038`** | **Azul Profundo. Titulares, gota y base del isotipo, fondos oscuros** |
| `azul-950` | `#04131F` | Pie de página, secciones oscuras a sangre |

### 3.3 Agua — acento técnico

Cian de alta luminosidad. Es **el color del agua**: se reserva para señalar el elemento que
Terrazul controla —la membrana, el recorrido de la filtración, la propia marca dentro de un
diagrama—. No es color de marca y **nunca reemplaza al azul**.

| Token | HEX | Uso |
| --- | --- | --- |
| `agua-300` | `#7DD3FC` | Trazos y recorridos sobre fondo muy oscuro |
| `agua-400` | `#38BDF8` | Elementos destacados en figuras, halos de profundidad |
| `agua-500` | `#0EA5E9` | Reserva |

**Solo sobre fondos oscuros.** Sobre blanco no alcanza contraste para texto. Verificado:
`agua-400` sobre `azul-900` da 7,7:1 y `agua-300` sobre `azul-950` da 11,3:1.

### 3.4 Óxido — acento

Deriva de la "terra" del nombre y del óxido, presente en toda estructura que Terrazul
repara. **Nunca supera el 5 % de la superficie de una pieza.**

| Token | HEX | Uso |
| --- | --- | --- |
| `oxido-50` | `#FBEDE6` | Fondo del bloque "señales de que lo necesitas" |
| `oxido-200` | `#F3C9B2` | Bordes de ese mismo bloque |
| `oxido-500` | `#D9622B` | Guion del antetítulo, viñetas, numeración. **Solo gráfico, nunca texto pequeño** |
| `oxido-700` | `#A8481D` | Texto de error y cualquier acento que deba leerse (5,8:1 sobre blanco) |

### 3.5 Hormigón — neutros

Grises con sesgo frío para que convivan con el azul sin ensuciarlo.

| Token | HEX | Uso |
| --- | --- | --- |
| `hormigon-50` | `#F7F9FB` | Fondo de secciones alternas |
| `hormigon-100` | `#EEF1F5` | — |
| `hormigon-200` | `#DDE3EA` | Bordes de tarjetas y separadores |
| `hormigon-300` | `#C2CBD6` | Bordes de campos de formulario |
| `hormigon-400` | `#94A1B2` | Texto deshabilitado, marcas de posición |
| `hormigon-500` | `#6B7A8D` | Texto de apoyo pequeño |
| `hormigon-600` | `#4E5C6E` | Texto secundario |
| `hormigon-700` | `#3A4655` | **Texto de cuerpo** |
| `hormigon-800` | `#26303C` | — |
| `hormigon-900` | `#151C24` | — |

### 3.6 Proporción

```
70 %  blanco y hormigon-50      (respiro, fondo)
20 %  azul-900 / azul-950       (secciones de peso, pie)
 8 %  azul-500                  (acción: botones, enlaces, isotipo)
 2 %  oxido-500 / agua-400      (acentos puntuales y figuras)
```

### 3.7 Contraste — no negociable

Todas las combinaciones cumplen **WCAG 2.1 AA** como mínimo. Verificado en el sitio:

| Combinación | Ratio | Estado |
| --- | --- | --- |
| `azul-900` sobre blanco | 16,5:1 | AAA |
| `hormigon-700` sobre blanco | 9,6:1 | AAA |
| `azul-600` sobre blanco | 7,1:1 | AAA |
| `hormigon-600` sobre blanco | 6,8:1 | AA |
| Blanco sobre `azul-500` | 5,1:1 | AA |
| `azul-100` sobre `azul-900` | 11,9:1 | AAA |

**Prohibido:** `oxido-500` como color de texto bajo 24 px (solo alcanza 3,7:1); usar
`oxido-700`. Tampoco usar `azul-500` sobre `azul-900` para texto.

---

## 4. Identificador

### 4.1 Concepto

El isotipo es un **arco estructural** que resguarda una **gota** y se apoya en una **base**.

- **Arco** (azul-500): la capa que protege. También lee como arco de obra civil.
- **Gota** (azul-900): el agua, bajo control, no como amenaza.
- **Base** (azul-900): la estructura, el sustrato sobre el que todo se construye.

El arco es **más angosto que la base**: la protección se apoya en la estructura, nunca
la excede. Es una decisión de significado, no de estética.

### 4.2 Construcción

Retícula de **48 × 48**. Ninguna medida es arbitraria.

| Elemento | Geometría |
| --- | --- |
| Arco | Radio 14, trazo 7, patas verticales de y=22 a y=41 |
| Gota | Altura 17, semiancho 6,4, centrada en x=24 |
| Base | 40 × 6, radio 3, centrada, de y=38 a y=44 |

### 4.3 Archivos

| Archivo | Uso |
| --- | --- |
| `logo/isotipo.svg` | Versión a color. Principal |
| `logo/isotipo-mono.svg` | Una tinta, `azul-900`. Impresión económica, sellos, grabados |
| `logo/isotipo-blanco.svg` | Negativo. Sobre fotografía o fondo oscuro |
| `logo/logo-horizontal.svg` | Lockup isotipo + logotipo. Papelería y firmas |
| `logo/logo-vertical.svg` | Lockup apilado. Formatos angostos, redes sociales |
| `../public/favicon.svg` | Favicon con contenedor `azul-900` y arco `azul-400` |
| `og-terrazul.svg` | Fuente de la imagen para compartir en redes (1200 × 630) |
| `../public/og-terrazul.png` | Export de la anterior. **Pendiente: regenerar con Archivo** (§12) |

> **Nota de producción.** Los archivos de lockup componen el texto con la fuente Archivo.
> Antes de mandar a imprenta o rotulista, el texto debe convertirse a curvas. Para uso
> digital no hace falta: el sitio compone el logotipo con la fuente cargada.

### 4.4 Zona de protección

Alrededor del identificador debe quedar libre un margen igual a **la mitad del alto del
isotipo** (24 unidades en la retícula de 48). Nada entra en esa zona: ni texto, ni
imágenes, ni el borde del soporte.

### 4.5 Tamaño mínimo

| Soporte | Isotipo solo | Lockup horizontal |
| --- | --- | --- |
| Digital | 20 px | 120 px de ancho |
| Impreso | 8 mm | 35 mm de ancho |

### 4.6 Usos incorrectos

1. Cambiar los colores del isotipo por otros fuera de la paleta.
2. Aplicar degradados, sombras, biseles o contornos.
3. Deformar, rotar o inclinar el identificador.
4. Cambiar la proporción entre arco, gota y base.
5. Poner la versión a color sobre fondo oscuro o sobre fotografía (usar el negativo).
6. Encerrar el isotipo en una figura que no sea el contenedor definido del favicon.
7. Reescribir el logotipo con otra tipografía.
8. Usar el logo antiguo (edificios + swoosh + serif). Queda **descontinuado** a partir de
   esta versión; se conserva solo en `legacy/` por referencia histórica.

---

## 5. Tipografía

### 5.1 Familias

| Rol | Fuente | Por qué |
| --- | --- | --- |
| Títulos y elementos de interfaz | **Archivo Variable** | Grotesca de origen industrial, alta y compacta. Aguanta titulares grandes sin verse decorativa |
| Texto de lectura | **Inter Variable** | Diseñada para pantalla, excelente legibilidad en párrafo y en formularios |

Ambas son de licencia libre (SIL Open Font License) y se sirven **desde el propio dominio**
mediante `@fontsource-variable`. No se cargan desde Google Fonts: es más rápido y no expone
la IP de los visitantes a un tercero.

### 5.2 Escala

Fluida con `clamp()`: no hay saltos bruscos entre móvil y escritorio.

| Rol | Token | Móvil → Escritorio | Peso | Interlínea |
| --- | --- | --- | --- | --- |
| Display (hero) | `text-display` | 40 → 68 px | 700 | 1,02 |
| Título de página | `text-h1` | 34 → 54 px | 700 | 1,08 |
| Título de sección | `text-h2` | 28 → 42 px | 700 | 1,15 |
| Subtítulo | `text-h3` | 19 → 22 px | 700 | 1,35 |
| Bajada | `text-lead` | 18 → 21 px | 400 | 1,65 |
| Cuerpo | — | 17 px | 400 | 1,7 |
| Antetítulo | `text-eyebrow` | 13 px | 600 | versalitas, `+0.14em` |

### 5.3 Reglas

- **Interletrado negativo en titulares:** `-0.022em`. Archivo abre demasiado en tamaños
  grandes sin esa corrección.
- **Antetítulo siempre en mayúsculas** con `+0.14em` y precedido del guion `oxido-500`.
- **Medida de línea máxima:** 70 caracteres en texto de lectura (`max-w-2xl` o menor).
- **`text-wrap: balance`** en titulares y `pretty` en párrafos: evita la palabra huérfana
  en la última línea.
- **Nunca centrar** un párrafo de más de tres líneas.

---

## 6. Retícula y espaciado

- **Ancho de contenido:** 1200 px máximo, centrado.
- **Margen lateral:** fluido, de 20 px en móvil a 40 px en escritorio.
- **Columnas:** 12 en escritorio, 1 en móvil. Los quiebres 5/7 y 4/8 son los preferidos
  para bloques de texto + apoyo.
- **Ritmo vertical de sección:** de 56 px en móvil a 104 px en escritorio.
- **Radios:** 6 px (campos) · 10 px (bloques) · 16 px (tarjetas) · 24 px (bloques grandes) ·
  999 px (botones y píldoras).
- **Sombras:** siempre tintadas en `azul-900` con baja opacidad. **Nunca negro puro**: sobre
  fondo claro el negro ensucia y delata la plantilla genérica.

---

## 7. Fotografía

### 7.1 Criterio

La fotografía es el activo de credibilidad más importante de Terrazul. Una foto real de
faena vale más que cualquier adjetivo.

**Sí:**
- Obra real, en ejecución, con el trabajador y su EPP puesto.
- Detalle macro del sistema aplicado: la textura del piso, el sello en la junta, la lámina
  de fibra de carbono.
- Antes / después del mismo encuadre.
- Luz natural, sin filtros ni virados de color.

**No:**
- Banco de imágenes con oficinistas dándose la mano.
- Cascos blancos impecables posando con planos.
- Fotos sin contexto de escala.
- Cualquier imagen donde no se identifique qué servicio es.

### 7.2 Tratamiento

- Las fotos que sirven de fondo llevan **gradiente `azul-950` de 95 % a 60 %** en diagonal,
  para garantizar el contraste del texto encima.
- Recorte preferente **16:9** para franjas y **4:3** para tarjetas.
- Formato de entrega **WebP**, generado automáticamente en el build.
- **Siempre con `alt` descriptivo**: qué se ve y qué servicio representa.

### 7.3 Deuda pendiente

El material fotográfico actual proviene del sitio anterior y hay imágenes de banco entre
las de faena propia. **Prioridad alta:** hacer una sesión de fotos en obra propia. Es la
inversión que más va a subir la percepción de la marca.

---

## 8. Iconografía

Set propio, dibujado sobre la misma retícula de 24 que el resto del sistema.

- **Trazo 1,75**, extremos y uniones redondeados, sin relleno.
- Geometría emparentada con el isotipo: mismos radios, mismas verticales.
- Un icono por línea de servicio: gota, piso, junta, refuerzo, grouting, planta.
- Los únicos iconos con relleno son los logos de terceros (WhatsApp, Facebook), que se usan
  tal cual los define su marca.
- **No mezclar** con FontAwesome, Material Icons ni ningún otro set. El sitio anterior
  cargaba dos librerías completas (≈1.400 archivos) para usar seis iconos.

---

## 9. Interfaz

### 9.1 Botones

| Variante | Uso | Aspecto |
| --- | --- | --- |
| `btn-primario` | Una sola acción principal por pantalla | Fondo `azul-500`, texto blanco, píldora |
| `btn-secundario` | Acción alternativa | Borde `hormigon-300`, texto `azul-900` |
| `btn-claro` | Acción principal sobre fondo oscuro | Fondo blanco, texto `azul-900` |
| `btn-fantasma` | Acción secundaria sobre fondo oscuro | Borde blanco al 35 % |

Altura mínima **44 px** en todos los casos: es el mínimo táctil accesible.

### 9.2 Movimiento

- **Curva de marca:** `cubic-bezier(0.22, 1, 0.36, 1)`. Entrada rápida, frenado suave.
- **Duraciones:** 200 ms en interacción, 250-300 ms en transiciones de estado,
  700 ms en la aparición de secciones.
- Las secciones entran con un desplazamiento de 20 px y opacidad, escalonadas de a 70 ms.
- **Nada parpadea, nada rebota, nada gira.** El sitio anterior usaba `wow.js` con
  `fadeInDown`, `zoomIn` y `rollIn` simultáneos; eso se elimina.
- **`prefers-reduced-motion` se respeta siempre.** Toda animación se anula si el sistema
  operativo lo pide.

**Animación con significado.** En el bento de "Por qué nos llaman" cada figura se anima para
*contar* lo que dice, no para adornar: el agua recorre la estructura, los bloques de la línea
suben y el tramo detenido no aparece, la grieta avanza invierno a invierno, la barra de
contraparte se barre completa. Reglas:

1. **Cada movimiento representa algo real.** Si una animación no explica el argumento de su
   figura, sobra.
2. **En bucle continuo.** Estas figuras *son* la explicación, así que tienen que seguir
   contándola cuando el visitante llega. Una animación de un disparo deja la sección muerta
   a los dos segundos y no la ve quien entra tarde.
3. **El bucle tiene que cerrar sin salto.** El desplazamiento por ciclo coincide exactamente
   con el periodo del patrón (ejemplo: guion de `9 8` → `stroke-dashoffset: -17`).
4. **Se pausan fuera de pantalla** con `animation-play-state: paused`, para no gastar CPU ni
   batería animando lo que nadie ve.
5. **La lógica de pausa va invertida:** por defecto corren, y solo el observador las detiene.
   Si el JavaScript falla, el peor caso es que animen de más — nunca que queden congeladas.
6. **Ciclos largos y suaves:** entre 1,5 s y 6 s. Nada rápido ni nervioso.
7. El escalonado viaja por la variable `--retardo` en cada elemento.

> Esta regla reemplaza a la anterior, que prohibía los bucles. El motivo del cambio y la
> objeción que resolvió están en la [bitácora](BITACORA-DE-MENSAJES.md).

### 9.3 Accesibilidad

Es parte de la marca, no un extra:

- Foco visible con contorno `azul-500` de 3 px y 3 px de separación.
- Todo navegable por teclado, incluido el menú móvil (cierra con `Esc`).
- Enlace "Saltar al contenido" como primer elemento enfocable.
- Formularios con `<label>` real asociado, nunca solo marca de posición.
- Errores de formulario anunciados con `aria-invalid` y texto, no solo con color rojo.

---

## 10. Aplicación en el sitio

| Elemento | Decisión |
| --- | --- |
| Barra de navegación | Transparente sobre el hero oscuro, sólida y blanca al hacer scroll |
| Hero | Foto de faena a sangre + gradiente `azul-950`, titular en display, dos acciones |
| Secciones alternas | Blanco / `hormigon-50` / `azul-950` para dar ritmo |
| Tarjetas de servicio | Imagen 16:10, icono flotante, enlace en toda la tarjeta |
| Bloque de acción | Fondo `azul-900` con la trama del arco al 7 % de opacidad |
| Pie de página | `azul-950`, tres columnas, datos de contacto accionables |

---

## 11. Checklist antes de publicar cualquier pieza

- [ ] ¿Usa solo colores de la paleta y respeta la proporción 70/20/8/2?
- [ ] ¿El texto sobre fondo cumple 4,5:1 como mínimo?
- [ ] ¿Hay una sola acción principal?
- [ ] ¿El titular nombra un problema del cliente, no una virtud propia?
- [ ] ¿Hay algún superlativo vacío que se pueda borrar sin perder información?
- [ ] ¿Todos los números publicados están confirmados por la empresa?
- [ ] ¿El logo tiene su zona de protección y la versión correcta para el fondo?
- [ ] ¿Las fotos son de faena real y tienen `alt` descriptivo?

---

## 12. Pendientes de la marca

> **Los pendientes de contenido y de afirmaciones sin confirmar viven en la
> [bitácora de mensajes](BITACORA-DE-MENSAJES.md#parte-1--pendientes-por-confirmar)**, que es
> el registro único. Aquí quedan solo los que son propiamente de identidad visual.

1. **Sesión fotográfica propia** en dos o tres faenas representativas (§7.3).
   Qué tomar exactamente: [pauta de fotos](PAUTA-DE-FOTOS.md).
2. **Papelería:** aplicar el sistema a cotización, orden de trabajo y protocolo de recepción.
3. **Señalética de obra:** pendón y letrero de faena con la nueva identidad.
4. **Regenerar `og-terrazul.png` con Archivo.** Se exportó con Arial porque Archivo no
   estaba instalada en el equipo de generación. Basta abrir `og-terrazul.svg` con la fuente
   disponible y volver a exportar a 1200 × 630.
5. **Convertir a curvas** los lockups antes del primer trabajo de imprenta o rotulación.

---

## 13. Documentos relacionados

| Documento | Qué resuelve |
| --- | --- |
| Este manual | Las **reglas**: color, tipografía, logo, tono, accesibilidad |
| [Bitácora de mensajes](BITACORA-DE-MENSAJES.md) | Las **decisiones**: por qué cada texto dice lo que dice, y qué falta confirmar |
| [Pauta de fotos](PAUTA-DE-FOTOS.md) | Qué fotografiar en faena. Para llevar a terreno |
| [`../GUIA.md`](../GUIA.md) | Cómo editar el sitio sin saber Astro |
| [`../README.md`](../README.md) | Stack, despliegue y pendientes técnicos |
