import Link from "next/link";
import { ChevronRight } from "lucide-react";

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
  return (
    <div className="pt-24 pb-12 bg-gradient-to-b from-blue-50/50 via-slate-50/60 to-white border-b border-slate-200">
      <div className="section-container">
        {/* Breadcrumbs */}
        <nav className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 font-mono mb-4">
          <Link href="/" className="hover:text-[#225FD2] transition-colors shrink-0">
            Beranda
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <div key={idx} className="flex items-center gap-1.5 shrink-0">
              <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-[#225FD2] transition-colors">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[11px] font-mono uppercase tracking-wider text-[#225FD2] max-w-full">
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
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3 w-full lg:w-auto">
              {metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white border border-slate-200 shadow-xs min-w-0 sm:min-w-[130px]"
                >
                  <div className="text-[10px] font-mono text-slate-500 uppercase truncate">
                    {metric.label}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 font-mono tabular truncate">
                    {metric.value}
                  </div>
                  {metric.hint && (
                    <div className="text-[10px] sm:text-[11px] text-slate-500 font-sans truncate">
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
