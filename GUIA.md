# Guía para editar el sitio

Escrita para alguien que nunca ha usado Astro. No necesitas aprender el framework:
con esto cubres el 95 % de lo que vas a querer cambiar.

---

## 1. La idea en dos líneas

El sitio **no es** un HTML que abres y editas. Son piezas sueltas (textos, fotos,
componentes) que un programa junta y convierte en HTML normal.

```
src/  →  npm run build  →  dist/  →  eso subes al hosting
```

`dist/` es HTML, CSS e imágenes comunes y corrientes. El servidor no necesita nada raro.

---

## 2. Abrirlo y verlo

Abre una terminal en la carpeta del proyecto. La primera vez, y solo la primera:

```bash
npm install
```

Después, cada vez que quieras trabajar:

```bash
npm run dev
```

Te va a imprimir `http://localhost:4321/`. Abre esa dirección en el navegador.

**Deja esa terminal abierta.** Mientras corre, cada archivo que guardes se refleja en el
navegador en menos de un segundo, sin recargar. Para detenerlo: `Ctrl + C`.

---

## 3. Dónde se edita cada cosa

| Quiero cambiar… | Archivo |
| --- | --- |
| Teléfono, WhatsApp, correo, dirección, horario | `src/consts.ts` |
| Los ítems del menú | `src/consts.ts` → `NAVEGACION` |
| Rubros, pasos del proceso, diferenciales, preguntas frecuentes | `src/consts.ts` |
| Textos de la portada | `src/pages/index.astro` |
| Textos de Nosotros / Contacto | `src/pages/nosotros.astro` · `src/pages/contacto.astro` |
| Un servicio (texto, fotos, listados) | `src/content/servicios/<nombre>.md` |
| Colores, tipografías, tamaños | `src/styles/global.css` |
| Cabecera / pie de página | `src/components/Encabezado.astro` · `PieDePagina.astro` |

### Ejemplo: cambiar el teléfono

En `src/consts.ts` cambias **tres líneas** y queda actualizado en la cabecera, el pie, todos
los botones de WhatsApp y los datos que lee Google:

```ts
telefono: '+56 9 9789 0113',      // como se muestra
telefonoE164: '+56997890113',     // para el enlace "llamar"
whatsapp: '56997890113',          // para el enlace de WhatsApp
```

### Ejemplo: cambiar el titular de la portada

En `src/pages/index.astro`, busca `<h1`. Cambias solo el texto entre las etiquetas:

```html
<h1 class="mt-6 text-display !text-white">
  Protegemos lo que sostiene<br class="hidden sm:block" /> tu operación.
</h1>
```

No toques lo que está dentro de `class="…"`: eso es el diseño.

---

## 4. Los archivos `.astro`

Tienen dos partes separadas por `---`:

```astro
---
// ARRIBA: instrucciones para el compilador.
// Esto NO llega al navegador. Aquí se importan cosas y se preparan datos.
import Base from '../layouts/Base.astro';
const servicios = await getCollection('servicios');
---

<!-- ABAJO: el HTML de la página. Aquí van los textos. -->
<h1>Hola</h1>
```

**Regla práctica:** si vas a cambiar un texto, está abajo. Si te encuentras editando arriba
de los `---`, probablemente estás en el lugar equivocado.

Detalles que verás y que son HTML normal con esteroides:

- `{variable}` inserta un valor. `{EMPRESA.telefono}` imprime el teléfono.
- `class:list={[...]}` es lo mismo que `class`, pero permite condiciones.
- `<Componente />` con mayúscula inicial es una pieza reutilizable, no una etiqueta HTML.

---

## 5. Los servicios

Cada servicio es un archivo en `src/content/servicios/`. **El nombre del archivo es la URL**:
`impermeabilizacion.md` → `terrazulspa.cl/servicios/impermeabilizacion`.

Adentro hay dos zonas, otra vez separadas por `---`:

```markdown
---
orden: 1                          ← posición en la grilla
titulo: Impermeabilización        ← nombre corto (tarjetas, menús)
tituloLargo: Impermeabilización y control de aguas…
resumen: Una frase con el problema que resuelve.
descripcionSeo: Lo que aparece en Google.
icono: gota                       ← gota, piso, junta, refuerzo, grouting, planta
imagen: ../../assets/servicios/impermeabilizacion.jpg
imagenAlt: Descripción de la foto para quien no la ve
prestaciones:
  - Cada línea es una viñeta de "Qué incluye".
  - Puedes agregar o quitar las que quieras.
sintomas:
  - Cada línea es una viñeta de "Señales de que lo necesitas".
---

Acá abajo va el texto largo, en párrafos normales.
Una línea en blanco separa un párrafo del siguiente.
```

**Para agregar un servicio:** copia un `.md` existente, renómbralo, deja la foto en
`src/assets/servicios/` y ajusta el frontmatter. Aparece solo en la portada, en `/servicios`,
en el pie de página y en el selector del formulario.

---

## 6. Fotos

Hay dos carpetas y la diferencia importa:

| Carpeta | Para qué | Qué pasa |
| --- | --- | --- |
| `src/assets/` | Fotos del contenido | Se comprimen y convierten a WebP solas. **Usa esta.** |
| `public/` | Favicon, PDFs, archivos sueltos | Se copian tal cual, sin tocar |

Una foto de 218 KB en `src/assets/` termina pesando 21 KB en móvil. La misma en `public/`
se sube completa. Por eso: fotos de obra siempre en `src/assets/`.

---

## 7. Publicar

### En Vercel

La primera vez, para vincular tu cuenta (se abre el navegador):

```bash
npx vercel login
```

Y cada vez que quieras publicar:

```bash
npx vercel --prod
```

Eso compila y sube. No necesitas correr `npm run build` aparte: Vercel lo hace.

### Por FTP

```bash
npm run build
```

Genera `dist/`. Sube **el contenido de esa carpeta** a la raíz del hosting.
No subas `src/`, ni `node_modules/`, ni `package.json`: el servidor no los usa.

Para ver exactamente lo que se va a publicar antes de subirlo:

```bash
npm run preview
```

---

## 8. Trampas que te van a morder

**Dos puntos en el frontmatter de un `.md`.** Esto rompe el build:

```yaml
descripcionSeo: Pisos industriales: protección química y antideslizantes
```

El `:` después de "industriales" confunde al lector de configuración. Solución: comillas.

```yaml
descripcionSeo: 'Pisos industriales: protección química y antideslizantes'
```

Pasa igual con `#` al inicio de un valor. Ante la duda, comillas simples y listo.

**La sangría en el frontmatter es obligatoria.** Las viñetas van con dos espacios y un
guion. Un espacio de más o de menos rompe el archivo.

**Cambios que no se reflejan.** Si editas `astro.config.mjs` o `src/content.config.ts`, o si
agregas un `.md` nuevo y no aparece: detén el servidor (`Ctrl + C`) y vuelve a `npm run dev`.

**Los estilos se quedan pegados.** Si tocas `global.css` y el navegador sigue mostrando lo
viejo, reinicia el servidor. Me pasó armando el sitio.

**No edites `dist/`.** Se borra completo en cada `npm run build`.

**No edites `legacy/`.** Es el sitio antiguo, guardado solo como referencia.

---

## 9. Cuando el build falla

`npm run build` revisa el proyecto antes de generar nada. Si algo está mal, se detiene y te
dice **el archivo y la línea**. Ejemplo real de este proyecto:

```
bad indentation of a mapping entry
  Location: src/content/servicios/sellado-de-juntas.md:5:74
```

Archivo, línea 5, columna 74. Vas ahí y lo arreglas. No genera un sitio a medias: o compila
bien, o no compila.

Errores típicos y qué significan:

| Mensaje | Qué pasó |
| --- | --- |
| `bad indentation` / `mapping entry` | Frontmatter mal escrito (§8) |
| `Invalid enum value … icono` | Pusiste un icono que no existe. Solo hay seis |
| `Required … resumen` | Le falta un campo obligatorio al `.md` |
| `Cannot find module '…jpg'` | La ruta de la imagen no coincide con el archivo real |

---

## 10. Si te arrepientes de Astro

`dist/` es HTML plano. Puedes quedarte con esa carpeta, borrar el resto y mantenerla a mano
como el sitio anterior. Pierdes la comodidad, no el diseño.
