import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projetos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projetos' }),
  schema: z.object({
    titulo: z.string(),
    slug: z.string(),
    descricao: z.string(),
    categoria: z.string(),
    subcategoria: z.string(),
    ano: z.number(),
    local: z.string(),
    capa: z.string(),
    destaque: z.boolean().default(false),
    ordem: z.number(),
    servicos: z.array(z.string()),
    galeria: z.array(z.string()),
    conceito: z.string(),
    desafios: z.string(),
    solucoes: z.string(),
    materiais: z.array(z.string()),
    demonstracao: z.boolean().default(true),
  }),
});

export const collections = { projetos };
