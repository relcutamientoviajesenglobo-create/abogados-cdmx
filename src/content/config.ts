import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    keywords: z.string(),
    schema_type: z.string().optional(),
    article_type: z.string().optional(),
  }),
});

export const collections = { blog };
