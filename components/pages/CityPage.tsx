import Link from "next/link";
import { ArrowRightIcon as ArrowRight, MotorcycleIcon as Bike, CarIcon as Car, ClockIcon as Clock, InfoIcon as Info, PackageIcon as Package } from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import AppDownload from "@/components/sections/AppDownload";
import { CITY_DIRECTORY, ZONE_LABELS, arrivalLabel, cityName, provinceName, type CityItem } from "@/lib/cities";
import { FARES, estimateFare, type FareKey } from "@/lib/articles";
import { localePath, type Locale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import type { Article } from "@/lib/articles";

const ICONS: Record<FareKey, typeof Bike> = { ride: Bike, car: Car, send: Package };
const SERVICE_KEYS: FareKey[] = ["ride", "car", "send"];
const DISTANCES = [3, 5, 10, 15];

export const CITY_COPY: Record<
  Locale,
  {
    numberLocale: string;
    metaTitle: (city: string) => string;
    metaDescription: (city: string, from: string) => string;
    keywords: (city: string) => string[];
    badge: string;
    title: (city: string) => string;
    subtitle: (city: string, province: string) => string;
    areasCrumb: string;
    fromLabel: string;
    etaLabel: string;
    etaHint: string;
    areaLabel: string;
    servicesTitle: (city: string) => string;
    serviceDesc: Record<FareKey, string>;
    from: string;
    faresTitle: string;
    faresIntro: (city: string) => string;
    distance: string;
    fareNote: string;
    guidesTitle: (city: string) => string;
    readTime: (n: number) => string;
    guidesEmpty: string;
    blog: string;
    nearbyTitle: (zone: string) => string;
    allAreas: string;
  }
> = {
  id: {
    numberLocale: "id-ID",
    metaTitle: (c) => `Ojek & Taksi Online ${c}`,
    metaDescription: (c, from) =>
      `Pesan SEVA Ride, SEVA Car, dan SEVA Send di ${c}: tarif mulai ${from}, tarif pasti di awal tanpa lonjakan, dan estimasi biaya per jarak.`,
    keywords: (c) => [`ojek online ${c.toLowerCase()}`, `taksi online ${c.toLowerCase()}`, `kurir instan ${c.toLowerCase()}`],
    badge: "WILAYAH LAYANAN",
    title: (c) => `Ojek & Taksi Online di ${c}`,
    subtitle: (c, p) =>
      `SEVA Ride, SEVA Car, dan SEVA Send melayani ${c}, ${p}. Tarif dihitung dari tarif buka pintu dan jarak rute, lalu ditampilkan di aplikasi sebelum Anda memesan.`,
    areasCrumb: "Cakupan Wilayah",
    fromLabel: "Tarif Mulai",
    etaLabel: "Estimasi Jemput",
    etaHint: "Rata-rata waktu tiba",
    areaLabel: "Wilayah",
    servicesTitle: (c) => `Layanan SEVA di ${c}`,
    serviceDesc: {
      ride: "Ojek motor untuk perjalanan cepat menembus macet.",
      car: "Taksi mobil untuk perjalanan nyaman.",
      send: "Kurir instan untuk dokumen dan paket.",
    },
    from: "Mulai",
    faresTitle: "Estimasi Tarif per Jarak",
    faresIntro: (c) => `Berlaku sama untuk seluruh wilayah Jabodetabek, termasuk ${c}.`,
    distance: "Jarak",
    fareNote: "Estimasi dari tarif dasar dan jarak, belum termasuk tol dan parkir. Tarif final tampil di aplikasi sebelum Anda mengonfirmasi pesanan.",
    guidesTitle: (c) => `Panduan Rute dari ${c}`,
    readTime: (n) => `${n} menit baca`,
    guidesEmpty: "Lihat panduan tarif dan rute lainnya di",
    blog: "Blog SEVA",
    nearbyTitle: (z) => `Wilayah lain di ${z}`,
    allAreas: "Semua wilayah →",
  },
  en: {
    numberLocale: "en-US",
    metaTitle: (c) => `Motorbike Taxi & Online Taxi in ${c}`,
    metaDescription: (c, from) =>
      `Book SEVA Ride, SEVA Car, and SEVA Send in ${c}: fares from ${from}, fixed upfront with no surge pricing, plus fare estimates by distance.`,
    keywords: (c) => [`motorbike taxi ${c.toLowerCase()}`, `online taxi ${c.toLowerCase()}`, `courier ${c.toLowerCase()}`],
    badge: "SERVICE AREA",
    title: (c) => `Rides & Deliveries in ${c}`,
    subtitle: (c, p) =>
      `SEVA Ride, SEVA Car, and SEVA Send serve ${c}, ${p}. Your fare is a base fare plus distance, shown in the app before you book.`,
    areasCrumb: "Service Areas",
    fromLabel: "Fares From",
    etaLabel: "Pickup Time",
    etaHint: "Average arrival",
    areaLabel: "Area",
    servicesTitle: (c) => `SEVA Services in ${c}`,
    serviceDesc: {
      ride: "Motorbike rides to get through traffic quickly.",
      car: "Cars for a comfortable trip.",
      send: "Same-day courier for documents and parcels.",
    },
    from: "From",
    faresTitle: "Fare Estimates by Distance",
    faresIntro: (c) => `The same fares apply across Greater Jakarta, including ${c}.`,
    distance: "Distance",
    fareNote: "Estimates from the base fare and distance, excluding tolls and parking. The final fare is shown in the app before you confirm.",
    guidesTitle: (c) => `Route Guides from ${c}`,
    readTime: (n) => `${n} min read`,
    guidesEmpty: "See more fare and route guides on the",
    blog: "SEVA Blog",
    nearbyTitle: (z) => `Other areas in ${z}`,
    allAreas: "All areas →",
  },
};

export function relatedArticles(city: CityItem, articles: Article[]) {
  return articles
    .filter((a) => {
      const hay = `${a.slug} ${a.title}`.toLowerCase();
      return city.keywords.some((k) => hay.includes(k));
    })
    .slice(0, 6);
}

// Halaman per kota; dipakai app/(id)/cities/[slug] dan app/(en)/en/cities/[slug].
export default function CityPage({ city, locale, articles }: { city: CityItem; locale: Locale; articles: Article[] }) {
  const t = CITY_COPY[locale];
  const lp = (href: string) => localePath(locale, href);
  const rp = (n: number) => `Rp ${n.toLocaleString(t.numberLocale)}`;
  const name = cityName(city, locale);
  const province = provinceName(city, locale);
  const zone = ZONE_LABELS[locale][city.zone];
  const related = relatedArticles(city, articles);
  const nearby = CITY_DIRECTORY.filter((c) => c.zone === city.zone && c.slug !== city.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: `SEVA Taxi ${name}`,
    url: `${SITE_URL}${lp(`/cities/${city.slug}`)}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "City", name: city.name, containedInPlace: { "@type": "State", name: city.province } },
  };

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <PageHeader
          locale={locale}
          badge={`${t.badge} // ${city.code}`}
          title={t.title(name)}
          subtitle={t.subtitle(name, province)}
          breadcrumbs={[{ label: t.areasCrumb, href: lp("/cities") }, { label: name }]}
          metrics={[
            { label: t.fromLabel, value: rp(FARES.ride.base), hint: "SEVA Ride" },
            { label: t.etaLabel, value: arrivalLabel(city, locale), hint: t.etaHint },
            { label: t.areaLabel, value: zone, hint: province },
          ]}
        />

        {/* Layanan */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">{t.servicesTitle(name)}</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
              {SERVICE_KEYS.map((key) => {
                const Icon = ICONS[key];
                const fare = FARES[key];
                return (
                  <Link
                    key={key}
                    href={lp(`/services/${key}`)}
                    className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#225FD2]/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 font-semibold text-slate-900">
                        <Icon className="w-4 h-4 text-[#225FD2]" aria-hidden="true" />
                        {fare.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#225FD2] transition-colors" aria-hidden="true" />
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{t.serviceDesc[key]}</p>
                    <p className="mt-3 text-xs text-slate-500 tabular-nums">
                      {t.from} <span className="font-semibold text-slate-900">{rp(fare.base)}</span> + {rp(fare.perKm)}/km
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Estimasi tarif */}
        <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">{t.faresTitle}</h2>
            <p className="mt-1 text-sm text-slate-600">{t.faresIntro(name)}</p>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[480px] text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs uppercase tracking-wider text-slate-500">
                    <th scope="col" className="px-4 py-3 font-semibold">{t.distance}</th>
                    {SERVICE_KEYS.map((key) => (
                      <th key={key} scope="col" className="px-4 py-3 font-semibold">{FARES[key].name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="tabular-nums">
                  {DISTANCES.map((km) => (
                    <tr key={km} className="border-b border-slate-100 last:border-0">
                      <th scope="row" className="px-4 py-3 text-left font-medium text-slate-700">{km} km</th>
                      {SERVICE_KEYS.map((key) => (
                        <td key={key} className="px-4 py-3 font-semibold text-slate-900">
                          {rp(estimateFare(key, km))}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-3 flex items-start gap-2 text-xs text-slate-500">
              <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" aria-hidden="true" />
              {t.fareNote}
            </p>
          </div>
        </section>

        {/* Panduan terkait */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">{t.guidesTitle(name)}</h2>
            {related.length > 0 ? (
              <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {related.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={lp(`/blog/${a.slug}`)}
                      className="group flex h-full flex-col justify-between p-5 rounded-2xl border border-slate-200 hover:border-[#225FD2]/50 transition-colors"
                    >
                      <span className="text-sm font-semibold text-slate-900 group-hover:text-[#225FD2] transition-colors">{a.title}</span>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs text-slate-500">
                        <Clock className="w-3 h-3" aria-hidden="true" />
                        {t.readTime(a.readMinutes)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-slate-600">
                {t.guidesEmpty}{" "}
                <Link href={lp("/blog")} className="font-semibold text-[#225FD2] hover:underline">{t.blog}</Link>.
              </p>
            )}

            {nearby.length > 0 && (
              <div className="mt-10">
                <h3 className="text-sm font-semibold text-slate-900">{t.nearbyTitle(zone)}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {nearby.map((c) => (
                    <Link
                      key={c.slug}
                      href={lp(`/cities/${c.slug}`)}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:border-[#225FD2] hover:text-[#225FD2] transition-colors"
                    >
                      {cityName(c, locale)}
                    </Link>
                  ))}
                  <Link href={lp("/cities")} className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#225FD2] hover:underline">
                    {t.allAreas}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        <AppDownload locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
