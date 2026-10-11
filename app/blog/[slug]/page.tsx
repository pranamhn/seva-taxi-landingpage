import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock, Info } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import StoreBadges from "@/components/ui/StoreBadges";
import { ARTICLES, FARES, estimateFare, getArticle, rupiah, type ArticleBlock } from "@/lib/articles";
import { pageMetadata, OG_IMAGE } from "@/lib/seo";
import { LEGAL_NAME, SITE_NAME, SITE_URL } from "@/lib/site";

// Hanya slug yang terdaftar di lib/articles.ts; selain itu 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMetadata({
    title: article.seoTitle,
    description: article.description,
    path: `/blog/${article.slug}`,
    keywords: article.keywords,
    article: { publishedTime: article.published, section: article.category },
  });
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "p":
      return <p className="text-slate-700 leading-relaxed">{block.text}</p>;
    case "h2":
      return <h2 className="pt-4 text-xl sm:text-2xl font-bold tracking-tight text-slate-900">{block.text}</h2>;
    case "ul":
      return (
        <ul className="list-disc space-y-2 pl-5 text-slate-700 leading-relaxed marker:text-[#225FD2]">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal space-y-2 pl-5 text-slate-700 leading-relaxed marker:font-semibold marker:text-[#225FD2]">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    case "fareTable": {
      const fare = FARES[block.service];
      return (
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Estimasi tarif {fare.name}</caption>
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <tr>
                <th scope="col" className="px-4 py-3">Jarak</th>
                <th scope="col" className="px-4 py-3">Contoh perjalanan</th>
                <th scope="col" className="px-4 py-3 text-right">Estimasi {fare.name}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {block.distances.map((d) => (
                <tr key={`${block.service}-${d.km}`}>
                  <td className="px-4 py-3 font-semibold text-slate-900 tabular-nums">{d.km} km</td>
                  <td className="px-4 py-3 text-slate-600">{d.label}</td>
                  <td className="px-4 py-3 text-right font-bold text-slate-900 tabular-nums">
                    {rupiah(estimateFare(block.service, d.km))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    case "note":
      return (
        <p className="flex items-start gap-2 rounded-xl border border-blue-100 bg-blue-50/60 p-4 text-sm text-slate-700 leading-relaxed">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#225FD2]" />
          <span>{block.text}</span>
        </p>
      );
    case "cta":
      return (
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-700">{block.text}</p>
          <Link
            href={block.href}
            className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-[#225FD2] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#194cb0]"
          >
            {block.label}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      );
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const url = `${SITE_URL}/blog/${article.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.published,
    dateModified: article.published,
    inLanguage: "id-ID",
    mainEntityOfPage: url,
    image: `${SITE_URL}${OG_IMAGE.url}`,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, legalName: LEGAL_NAME, logo: { "@type": "ImageObject", url: `${SITE_URL}/icons/icon-512.png` } },
    keywords: article.keywords.join(", "),
  };

  const others = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
        <PageHeader
          badge={`BLOG // ${article.category.toUpperCase()}`}
          title={article.title}
          subtitle={article.description}
          breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: article.category }]}
        />

        <section className="py-10 sm:py-14">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <article className="lg:col-span-8 max-w-3xl space-y-5 text-[15px]">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <time dateTime={article.published}>Diterbitkan {formatDate(article.published)}</time>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {article.readMinutes} menit baca
                </span>
              </div>
              {article.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </article>

            <aside className="lg:col-span-4 space-y-4 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700">Terkait</h2>
                <ul className="mt-3 space-y-1">
                  {article.related.map((r) => (
                    <li key={r.href}>
                      <Link href={r.href} className="flex items-center justify-between gap-2 py-1.5 text-sm text-slate-700 hover:text-[#225FD2]">
                        {r.label}
                        <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-[#194cb0] to-[#225FD2] p-5 text-white">
                <p className="font-bold">Pesan lewat aplikasi SEVA</p>
                <p className="mt-1 text-xs text-blue-100 leading-relaxed">Tarif final tampil di aplikasi sebelum Anda konfirmasi.</p>
                <div className="mt-4">
                  <StoreBadges size="sm" />
                </div>
              </div>
            </aside>
          </div>
        </section>

        {others.length > 0 && (
          <section className="py-12 sm:py-16 bg-slate-50/60 border-t border-slate-200/80">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
                  Panduan Lainnya
                </h2>
                <Link
                  href="/blog"
                  className="text-xs sm:text-sm font-bold text-[#225FD2] hover:underline flex items-center gap-1"
                >
                  <span>Lihat Semua Artikel</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {others.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/blog/${a.slug}`}
                    className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 transition-all duration-300"
                  >
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#225FD2] border border-blue-200/70">
                        {a.category}
                      </span>
                      <h3 className="mt-4 font-bold text-base leading-snug text-slate-900 group-hover:text-[#225FD2] transition-colors line-clamp-2">
                        {a.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {a.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-[#225FD2] transition-colors">
                      <span>Baca Selengkapnya</span>
                      <span className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#225FD2] text-slate-500 group-hover:text-white flex items-center justify-center transition-all shadow-2xs">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
