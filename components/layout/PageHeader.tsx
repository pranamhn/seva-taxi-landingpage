import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SITE_URL } from "@/lib/site";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface MetricItem {
  label: string;
  value: string;
  hint?: string;
}

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  metrics?: MetricItem[];
}

export default function PageHeader({
  badge,
  title,
  subtitle,
  breadcrumbs,
  metrics,
}: PageHeaderProps) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: SITE_URL,
      },
      ...breadcrumbs.map((crumb, idx) => ({
        "@type": "ListItem",
        position: idx + 2,
        name: crumb.label,
        ...(crumb.href ? { item: `${SITE_URL}${crumb.href}` } : {}),
      })),
    ],
  };

  return (
    <div className="pt-24 pb-12 bg-gradient-to-b from-blue-50/50 via-slate-50/60 to-white border-b border-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Breadcrumbs */}
        <nav className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 mb-4">
          <Link href="/" className="inline-flex items-center min-h-6 py-1 hover:text-[#225FD2] transition-colors shrink-0">
            Beranda
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <div key={idx} className="flex items-center gap-1.5 shrink-0">
              <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
              {crumb.href ? (
                <Link href={crumb.href} className="inline-flex items-center min-h-6 py-1 hover:text-[#225FD2] transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-slate-800 font-medium">{crumb.label}</span>
              )}
            </div>
          ))}
        </nav>

        {/* Header Content */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[11px] font-semibold uppercase tracking-wider text-[#225FD2] max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#225FD2] shrink-0"></span>
              <span className="break-words">{badge}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight break-words">
              {title}
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed break-words">
              {subtitle}
            </p>
          </div>

          {/* Quick Telemetry / Metrics if provided */}
          {metrics && metrics.length > 0 && (
            <div
              className={`grid ${
                metrics.length === 3
                  ? "grid-cols-3"
                  : metrics.length === 2
                  ? "grid-cols-2"
                  : "grid-cols-2 sm:grid-cols-4"
              } gap-2 sm:gap-3 w-full lg:w-auto lg:shrink-0`}
            >
              {metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="px-2.5 sm:px-4 py-2 sm:py-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs min-w-0 sm:min-w-[130px] lg:min-w-[140px] flex flex-col justify-between hover:border-slate-300 transition-colors"
                >
                  <div className="text-[9.5px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wide truncate">
                    {metric.label}
                  </div>
                  <div className="text-xs sm:text-base font-bold text-slate-900 tabular-nums truncate my-0.5">
                    {metric.value}
                  </div>
                  {metric.hint && (
                    <div className="text-[9.5px] sm:text-[11px] text-slate-500 font-sans truncate">
                      {metric.hint}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
