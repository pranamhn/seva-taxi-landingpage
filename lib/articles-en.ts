// Versi Inggris artikel blog (/en/blog/[slug]). Slug sama dengan versi Indonesia di lib/articles.ts
// agar hreflang & tombol ganti bahasa menunjuk ke artikel pasangannya. Isi dibagi per file di lib/articles-en/.
import type { Article } from "@/lib/articles";
import { PART_1 } from "@/lib/articles-en/part-1";
import { PART_2 } from "@/lib/articles-en/part-2";
import { PART_3 } from "@/lib/articles-en/part-3";
import { PART_4 } from "@/lib/articles-en/part-4";
import { PART_5 } from "@/lib/articles-en/part-5";
import { PART_6 } from "@/lib/articles-en/part-6";

export const ARTICLES_EN: Article[] = [...PART_1, ...PART_2, ...PART_3, ...PART_4, ...PART_5, ...PART_6];

export const getArticleEn = (slug: string) => ARTICLES_EN.find((a) => a.slug === slug);
