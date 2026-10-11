import type { ReactNode } from "react";

export interface LegalSection {
  id: string;
  title: string;
  content: ReactNode;
}

interface LegalDocumentProps {
  updatedAt: string;
  intro: ReactNode;
  sections: LegalSection[];
}

// Shared layout for long-form legal pages: sticky table of contents + numbered sections.
export default function LegalDocument({ updatedAt, intro, sections }: LegalDocumentProps) {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Table of contents */}
          <aside className="lg:col-span-3">
            <nav
              aria-label="Daftar isi"
              className="lg:sticky lg:top-24 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4"
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                Daftar Isi
              </p>
              <ol className="space-y-0.5 text-xs">
                {sections.map((section, idx) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex gap-2 py-1.5 text-slate-600 hover:text-[#225FD2] transition-colors"
                    >
                      <span className="font-medium text-slate-400 shrink-0">{idx + 1}.</span>
                      <span>{section.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* Document body */}
          <article className="lg:col-span-9 max-w-3xl">
            <p className="text-xs text-slate-500 mb-5">Terakhir diperbarui: {updatedAt}</p>
            <div className="text-sm text-slate-700 leading-relaxed space-y-3 mb-10">{intro}</div>

            <div className="space-y-9">
              {sections.map((section, idx) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-3">
                    {idx + 1}. {section.title}
                  </h2>
                  <div className="text-sm text-slate-700 leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-[#225FD2] [&_a]:underline-offset-2 hover:[&_a]:underline [&_strong]:text-slate-900">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
