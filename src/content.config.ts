import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const servicios = defineCollection({
  loader: glob({ base: './src/content/servicios', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      /** Orden en la grilla de servicios. */
      orden: z.number(),
      /** Nombre corto, el que se ve en las tarjetas y el menú. */
      titulo: z.string(),
      /** Título completo para la página de detalle y el <h1>. */
      tituloLargo: z.string(),
      /** Frase de una línea: qué problema resuelve. */
      resumen: z.string(),
      /** Meta description de la página de detalle. */
      descripcionSeo: z.string(),
      /** Identificador del icono en src/components/Icono.astro */
      icono: z.enum(['gota', 'piso', 'junta', 'refuerzo', 'grouting', 'planta']),
      imagen: image(),
      imagenAlt: z.string(),
      /** Prestaciones concretas incluidas en la línea de servicio. */
      prestaciones: z.array(z.string()).min(2),
      /** Señales de que el cliente necesita este servicio. */
      sintomas: z.array(z.string()).min(2),
    }),
});

export const collections = { servicios };
