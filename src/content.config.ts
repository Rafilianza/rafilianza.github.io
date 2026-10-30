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
      finding: z.string().min(1).optional(),
      limitation: z.string().min(1).optional(),
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

const profile = defineCollection({
  loader: glob({ base: "./src/content/profile", pattern: "*.md" }),
  schema: z.object({
    name: z.string().min(1),
    summary: z.string().min(1),
    homeIntroduction: z.string().min(1).optional(),
    location: z.string().optional(),
    email: z.email().optional(),
    linkedin: z.url().optional(),
    pdf: z.string().startsWith("/").endsWith(".pdf").optional(),
    sections: z.array(z.object({
      id: z.string().regex(/^[a-z0-9-]+$/),
      title: z.string().min(1),
      entries: z.array(z.object({
        id: z.string().regex(/^[a-z0-9-]+$/),
        title: z.string().min(1),
        organisation: z.string().optional(),
        // Keep the precision supplied by the CV, including expected dates.
        dateLabel: z.string().optional(),
        location: z.string().optional(),
        summary: z.string().optional(),
        details: z.array(z.string()).default([]),
        journeyOrder: z.number().int().nonnegative().optional(),
        journeyTopics: z.array(z.string().min(1)).default([]),
      })).min(1),
    })).min(1),
    skills: z.array(z.object({
      title: z.string().min(1),
      items: z.array(z.string()).min(1),
    })).default([]),
  }),
});

export const collections = { projects, profile };
