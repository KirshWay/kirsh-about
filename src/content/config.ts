import { defineCollection, z } from 'astro:content';

import { BookType, RecommendationEmoji, Status, Variant } from '@/types';

const sharedSchema = z.object({
  title: z.string(),
  status: z.nativeEnum(Status),
  order: z.number(),
  rating: z.number().min(0).max(10).optional(),
  image: z.string().optional(),
  year: z.number().optional(),
  review: z.string().optional(),
  recommendationEmoji: z.nativeEnum(RecommendationEmoji).optional(),
});

const techSchema = z.object({
  id: z.string(),
  name: z.string(),
  color: z.nativeEnum(Variant),
});

const projectsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    url: z.string().url(),
    tech: z.array(techSchema),
    order: z.number(),
  }),
});

const booksCollection = defineCollection({
  type: 'data',
  schema: sharedSchema.extend({
    typeBook: z.nativeEnum(BookType).optional(),
  }),
});

const gamesCollection = defineCollection({
  type: 'data',
  schema: sharedSchema,
});

const filmsCollection = defineCollection({
  type: 'data',
  schema: sharedSchema,
});

export const collections = {
  books: booksCollection,
  games: gamesCollection,
  films: filmsCollection,
  projects: projectsCollection,
};
