# Terrazul

Sitio web de **Terrazul Servicios y Comercialización SpA** — impermeabilización,
revestimientos industriales y refuerzos estructurales en la Región del Biobío.

🔗 https://terrazulspa.cl

---

## Qué hay acá

| Carpeta | Qué contiene |
| --- | --- |
| `brand/` | **Manual de marca**, **bitácora de mensajes**, **pauta de fotos** y archivos de identidad |
| `src/` | Código del sitio: páginas, componentes, contenido y estilos |
| `public/` | Archivos que se copian tal cual al sitio publicado (favicon, robots, `.htaccess`, endpoint PHP) |
| `dist/` | Resultado del build. **Esto es lo que se sube al hosting.** No se versiona |
| `legacy/` | Sitio anterior (HTML + Bootstrap 4 + jQuery), conservado como referencia |

👉 **¿Nunca usaste Astro? Parte por [`GUIA.md`](GUIA.md)** — cómo abrir, editar, probar y
publicar el sitio, sin necesidad de aprender el framework.

👉 **Para cualquier decisión de diseño: [`brand/MANUAL-DE-MARCA.md`](brand/MANUAL-DE-MARCA.md).**
Es la fuente de verdad de colores, tipografía, tono de voz y uso del logo. Cualquier cambio
visual del sitio debería poder justificarse con ese documento.

👉 **Antes de cambiar un texto: [`brand/BITACORA-DE-MENSAJES.md`](brand/BITACORA-DE-MENSAJES.md).**
Registra por qué el sitio dice lo que dice —con la investigación de competencia detrás— y
lleva la lista de afirmaciones que faltan por confirmar con Terrazul.

---

## Stack

| | |
| --- | --- |
| **Astro 5** | Genera HTML estático. Cero JavaScript por defecto en el cliente |
| **Tailwind CSS 4** | Utilidades + tokens de marca definidos en `src/styles/global.css` |
| **TypeScript** | Validación de tipos en componentes y contenido |
| **Content Collections** | Los servicios son archivos Markdown con esquema validado |
| **Fuentes locales** | Archivo + Inter servidas desde el propio dominio, sin Google Fonts |

Se reemplazó el stack anterior (jQuery, Bootstrap 4, Owl Carousel, WOW.js, MixItUp,
Waypoints, SlickNav, FontAwesome y Simple Line Icons) por dependencias cero en runtime.

---

## Desarrollo

```bash
npm install
```

```bash
npm run dev
```

Queda en http://localhost:4321 con recarga automática.

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Valida tipos y genera el sitio en `dist/` |
| `npm run preview` | Sirve `dist/` para revisar el resultado final |

---

## Cómo editar contenido

### Datos de la empresa

Todo en [`src/consts.ts`](src/consts.ts): teléfono, WhatsApp, correo, dirección, horario,
menú de navegación, sectores, pasos del proceso, diferenciales y preguntas frecuentes.
Cambiar el teléfono ahí lo actualiza en la cabecera, el pie, los botones de WhatsApp y los
datos estructurados de Google, todo a la vez.

### Servicios

Cada servicio es un archivo Markdown en [`src/content/servicios/`](src/content/servicios/).
El nombre del archivo define la URL: `impermeabilizacion.md` → `/servicios/impermeabilizacion`.

Para **agregar un servicio**: copia un `.md` existente, cambia el nombre del archivo,
completa el frontmatter y deja la foto en `src/assets/servicios/`. Aparece solo en la home,
en `/servicios`, en el pie de página y en el selector del formulario de contacto.

Los campos del frontmatter están validados en [`src/content.config.ts`](src/content.config.ts):
si falta uno o el icono no existe, el build falla con un mensaje claro.

### Textos de las páginas

Están en los archivos de [`src/pages/`](src/pages/). Antes de escribir, revisar las reglas
de tono de voz del manual (§2): frase corta, beneficio antes que catálogo, cero superlativos
vacíos y **ningún número que no esté confirmado por la empresa**.

---

## Publicar en Vercel

El proyecto ya trae [`vercel.json`](vercel.json) con la configuración de build y las
cabeceras de seguridad. Desde la carpeta del proyecto:

```bash
npx vercel login
```

```bash
npx vercel --prod
```

La primera vez pregunta el scope y si es un proyecto nuevo: acepta los valores por defecto,
ya vienen definidos en `vercel.json`. Cada despliegue posterior es solo el segundo comando.

> **Antes de apuntar el dominio, revisa los registros MX.** Si `mlagos@terrazulspa.cl`
> está alojado en el hosting actual y cambias los *nameservers* a Vercel sin recrear los MX,
> dejas de recibir correo. Lo más seguro es dejar el DNS donde está y apuntar solo un
> registro A o CNAME hacia Vercel.

### Publicar en un hosting normal (FTP)

```bash
npm run build
```

Sube **el contenido de `dist/`** a la raíz del hosting (`public_html/` o similar). Es HTML
estático: no necesita Node en el servidor. `public/.htaccess` aplica HTTPS forzado,
compresión, caché y cabeceras de seguridad en Apache (Vercel lo ignora, ya lo cubre
`vercel.json`).

---

## Formulario de contacto

El sitio es estático, así que el envío necesita un servicio externo. Se configura en un
solo lugar: `FORMULARIO` en [`src/consts.ts`](src/consts.ts).

**Estado actual: sin conectar.** Mientras `accessKey` esté vacío, `/contacto` muestra un
bloque con WhatsApp y correo en vez de un formulario que se tragaría los mensajes.

### Para activarlo en Vercel (o cualquier hosting estático)

1. Entra a **web3forms.com** y escribe el correo de destino (`mlagos@terrazulspa.cl`).
   Te mandan una clave al instante. No hay que crear cuenta.
2. Pega esa clave en `FORMULARIO.accessKey`.
3. `npm run build` y vuelve a desplegar. El formulario aparece solo.

### Para activarlo en un hosting Apache con PHP

Cambia `FORMULARIO.endpoint` a `'/api/contacto.php'` y deja `accessKey` vacío. Ese endpoint
sigue en [`public/api/contacto.php`](public/api/contacto.php) y requiere `mail()` habilitado
y la casilla `web@terrazulspa.cl` como remitente. Si los correos no llegan, casi siempre es
el registro **SPF** del dominio.

En ambos casos, sin JavaScript el formulario sigue funcionando: hace POST normal y redirige
a `/gracias`.

---

## Pendientes

### De contenido y afirmaciones

Viven en la [bitácora de mensajes](brand/BITACORA-DE-MENSAJES.md#parte-1--pendientes-por-confirmar),
que es el registro único. Los dos urgentes, porque **ya están publicados sin confirmar**:

- 🔴 **"En terreno el mismo día"** en el hero — promesa operativa sin validar con Terrazul.
- 🟡 **"Visita técnica sin costo"** — perdió la condición *"dentro del Gran Concepción"*.

### Técnicos

- [ ] **Redirecciones 301.** El sitio anterior era una sola página con anclas (`#about`,
      `#services`). Si esas URLs están indexadas, conviene redirigirlas a las páginas nuevas
      desde `vercel.json`.
- [ ] **Regenerar `public/og-terrazul.png` con la tipografía Archivo.** La versión actual
      se exportó con Arial porque Archivo no estaba instalada en el equipo donde se generó.
      El archivo fuente es `brand/og-terrazul.svg`.
- [ ] **Verificar la casilla `web@terrazulspa.cl`**, remitente del endpoint PHP. Solo aplica
      si se vuelve a un hosting Apache; en Vercel ese endpoint no corre.
- [ ] **Conectar el formulario** (ver sección anterior) o dejar los canales directos.
