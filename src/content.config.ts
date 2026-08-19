import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * Two collections, both plain Markdown on disk. Adding a project or a post is
 * adding a file — no config change, no rebuild of the data layer.
 */

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    /** `Name — What it is`. The card splits on the em dash. */
    title: z.string(),
    /** Mono eyebrow: `Role · Org · Year`. */
    kicker: z.string(),
    status: z.enum(['active', 'wip', 'archived']).default('active'),
    /** Overrides the badge's default word ("Active", "In progress", "Archived"). */
    statusLabel: z.string().optional(),
    /** One dense paragraph, ≤ 55 words. Used on cards and as the detail standfirst. */
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    /** Lower sorts first; the lowest becomes the featured card. */
    order: z.number(),
    featured: z.boolean().default(false),
    /** Live product URL, if there is one. */
    link: z.string().url().optional(),
    linkLabel: z.string().optional(),
    /** Key/value rows for the sticky meta sidebar. */
    meta: z.array(z.tuple([z.string(), z.string()])).default([]),
    draft: z.boolean().default(false),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    /** 2 sentences, ≤ 30 words, ending on the stakes. */
    excerpt: z.string(),
    date: z.coerce.date(),
    /** Slug of a project in the `projects` collection, or a free-form topic. */
    project: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, posts };
