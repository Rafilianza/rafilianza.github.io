import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/index.md",
  }),
  schema: ({ image }) => {
    const projectImage = z.object({
      src: image(),
      alt: z.string().min(1),
      caption: z.string().optional(),
    });

    return z.object({
      title: z.string().min(1),
      summary: z.string().min(1),
      // New entries stay unpublished until their author explicitly opts in.
      draft: z.boolean().default(true),
      featured: z.boolean().default(false),
      order: z.number().default(100),
      date: z.coerce.date().optional(),
      role: z.string().optional(),
      technologies: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      steps: z.array(z.object({
        title: z.string().min(1),
        description: z.string().min(1),
      })).default([]),
      cover: projectImage.optional(),
      gallery: z.array(projectImage).default([]),
      comparison: z.object({
        title: z.string().min(1),
        description: z.string().optional(),
        views: z.array(projectImage.extend({
          label: z.string().min(1),
        })).min(2),
      }).optional(),
      links: z.object({
        repository: z.url().optional(),
        notebook: z.url().optional(),
        demo: z.url().optional(),
        publication: z.url().optional(),
      }).optional(),
    });
  },
});

export const collections = { projects };
