import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, BadgeCheck, Bike, Car, CheckCircle2, Clock, HelpCircle, Package, ShieldCheck, Sparkles, Utensils, Wallet } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Services from "@/components/sections/Services";
import AppDownload from "@/components/sections/AppDownload";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import { FARES } from "@/lib/articles";
import { localePath, type Locale } from "@/lib/i18n";

type Slug = "ride" | "car" | "send" | "food";
const SLUGS: Slug[] = ["ride", "car", "send", "food"];
const ICON: Record<Slug, LucideIcon> = { ride: Bike, car: Car, send: Package, food: Utensils };
const BENEFIT_ICONS: LucideIcon[] = [Wallet, ShieldCheck, BadgeCheck, Clock];

type Row = { type: string; capacity: string; luggage: string; eta: string; idealFor: string };

const rp = (n: number, nl: string) => `Rp ${n.toLocaleString(nl)}`;

export const SERVICES_COPY = {
  id: {
    numberLocale: "id-ID",
    metaTitle: "Pilihan Armada & Tarif",
    metaDescription:
      "Daftar tipe kendaraan, spesifikasi kapasitas, dan tarif argo pasti transparan untuk SEVA RIDE, SEVA CAR, SEVA SEND, dan SEVA FOOD.",
    badge: "LAYANAN SEVA // TARIF PASTI",
    title: "Pilihan Armada & Tarif Layanan",
    subtitle:
      "Jelajahi armada terstandar SEVA: motor lincah tembus macet, mobil taksi yang nyaman, pengiriman paket instan, hingga layanan pesan antar kuliner.",
    crumb: "Armada",
    metrics: {
      active: "Layanan Aktif",
      activeHint: "SEVA FOOD segera hadir",
      from: "Tarif Mulai",
      fromHint: "Pasti transparan di muka",
      eta: "Estimasi Jemput",
      etaValue: "2–4 Menit",
      etaHint: "Driver terdekat langsung jalan",
    },
    compareEyebrow: "TABEL PERBANDINGAN",
    compareTitle: "Bandingkan Spesifikasi & Tarif",
    compareIntro: "Pilih layanan yang paling tepat sesuai kebutuhan perjalanan harian atau logistik Anda.",
    cols: { service: "Layanan", type: "Tipe Kendaraan", base: "Tarif Buka Pintu", capacity: "Kapasitas", ideal: "Ideal Untuk", status: "Status" },
    pickup: "Jemput ~",
    baseMobile: "Tarif Dasar Buka Pintu",
    capacityLabel: "Kapasitas:",
    idealLabel: "Ideal:",
    detail: "Lihat Detail & Tarif Lengkap",
    statusActive: "Aktif Beroperasi",
    statusSoon: "Segera Hadir",
    soonFare: "Segera Hadir",
    rows: {
      ride: { type: "Sepeda Motor", capacity: "1 Penumpang", luggage: "1 Ransel / Tas Laptop", eta: "1–3 Menit", idealFor: "Mobilitas lincah tembus jam sibuk & hemat biaya" },
      car: { type: "Mobil MPV", capacity: "4 Penumpang", luggage: "2 Koper Medium + Tas", eta: "3–5 Menit", idealFor: "Perjalanan keluarga, kantor, & antar-jemput bandara" },
      send: { type: "Kurir Motor Cepat", capacity: "Barang s/d 20 kg", luggage: "Dimensi maks. 40x40x40 cm", eta: "2–4 Menit", idealFor: "Kirim dokumen kantor, belanjaan, atau paket instan" },
      food: { type: "Pesan Antar Makanan", capacity: "Makanan & Minuman", luggage: "Tas thermal higienis", eta: "Estimasi Masak + Kirim", idealFor: "Pesan menu restoran & UMKM kuliner favorit" },
    } satisfies Record<Slug, Row>,
    benefitsEyebrow: "JAMINAN KUALITAS SETIAP PERJALANAN",
    benefitsTitle: "Standar Kenyamanan di Setiap Armada",
    benefitsIntro: "Apapun pilihan armada Anda, SEVA menjamin standar layanan yang konsisten, aman, dan dapat diandalkan.",
    benefits: [
      { title: "Tarif Pasti Tanpa Kejutan", desc: "Nominal tarif tampil transparan di aplikasi sebelum Anda klik konfirmasi pesanan. Tidak ada biaya siluman atau lonjakan tarif tak wajar." },
      { title: "Kendaraan Bersih & Terawat", desc: "Kendaraan mitra minimal tahun 2017, dengan STNK dan pajak aktif, serta kabin SEVA CAR yang dijaga bersih dan bebas asap rokok." },
      { title: "Driver Terverifikasi", desc: "Setiap mitra pengemudi melewati verifikasi identitas, pengecekan dokumen kendaraan aktif, serta pembekalan SOP keselamatan berkendara." },
      { title: "Penjemputan Presisi & Cepat", desc: "Algoritma penugasan pintar SEVA menghubungkan pesanan Anda langsung ke driver terdekat, membantu memangkas waktu tunggu penjemputan." },
    ],
    faqEyebrow: "TANYA JAWAB",
    faqTitle: "Pertanyaan Seputar Layanan & Tarif",
    faqIntro: "Punya pertanyaan sebelum memesan? Temukan jawaban langsung di bawah ini.",
    faqs: [
      { q: "Bagaimana cara SEVA menghitung tarif perjalanan?", a: "Tarif dihitung berdasarkan tarif buka pintu dasar ditambah biaya per kilometer sesuai jarak rute yang tertera di peta aplikasi sebelum Anda memesan." },
      { q: "Apakah ada biaya tambahan untuk membawa barang atau bagasi?", a: "Tidak ada biaya tambahan selama barang bawaan masih dalam batas kapasitas wajar armada (1 tas untuk SEVA RIDE, dan kapasitas bagasi standar untuk SEVA CAR)." },
      { q: "Metode pembayaran apa saja yang diterima?", a: "SEVA mendukung pembayaran tunai langsung ke pengemudi serta pembayaran non-tunai praktis melalui SEVA eWallet dan QRIS terintegrasi." },
      { q: "Kapan layanan SEVA FOOD resmi dapat digunakan?", a: "SEVA FOOD saat ini dalam tahap integrasi merchant kuliner dan mitra restoran pilihan. Masuk daftar tunggu di halaman SEVA Food untuk dikabari saat layanan dibuka." },
    ],
    moreHelp: "Butuh bantuan lain terkait pemesanan atau kemitraan?",
    safetyLink: "Pelajari panduan keamanan",
  },
  en: {
    numberLocale: "en-US",
    metaTitle: "Vehicles & Fares",
    metaDescription:
      "Vehicle types, capacity, and transparent fixed fares for SEVA RIDE, SEVA CAR, SEVA SEND, and SEVA FOOD.",
    badge: "SEVA SERVICES // UPFRONT FARES",
    title: "Vehicles & Fares",
    subtitle:
      "Explore SEVA's standardised options: nimble motorbikes to beat traffic, comfortable cars, same-day parcel delivery, and soon food delivery.",
    crumb: "Services",
    metrics: {
      active: "Live Services",
      activeHint: "SEVA FOOD coming soon",
      from: "Fares From",
      fromHint: "Fixed and shown upfront",
      eta: "Pickup Time",
      etaValue: "2–4 Minutes",
      etaHint: "Nearest driver heads your way",
    },
    compareEyebrow: "COMPARISON TABLE",
    compareTitle: "Compare Specs & Fares",
    compareIntro: "Pick the service that fits your daily trip or delivery.",
    cols: { service: "Service", type: "Vehicle Type", base: "Base Fare", capacity: "Capacity", ideal: "Best For", status: "Status" },
    pickup: "Pickup ~",
    baseMobile: "Base Fare",
    capacityLabel: "Capacity:",
    idealLabel: "Best for:",
    detail: "See Full Details & Fares",
    statusActive: "Live",
    statusSoon: "Coming Soon",
    soonFare: "Coming Soon",
    rows: {
      ride: { type: "Motorbike", capacity: "1 Passenger", luggage: "1 Backpack / Laptop Bag", eta: "1–3 Minutes", idealFor: "Quick, low-cost trips through rush hour" },
      car: { type: "MPV Car", capacity: "4 Passengers", luggage: "2 Medium Suitcases + Bags", eta: "3–5 Minutes", idealFor: "Family trips, office travel, and airport transfers" },
      send: { type: "Motorbike Courier", capacity: "Items up to 20 kg", luggage: "Max. 40x40x40 cm", eta: "2–4 Minutes", idealFor: "Office documents, shopping, or same-day parcels" },
      food: { type: "Food Delivery", capacity: "Food & Drinks", luggage: "Insulated, hygienic bag", eta: "Cooking + Delivery Time", idealFor: "Dishes from restaurants and local food businesses" },
    } satisfies Record<Slug, Row>,
    benefitsEyebrow: "QUALITY ON EVERY TRIP",
    benefitsTitle: "The Same Comfort Standards in Every Vehicle",
    benefitsIntro: "Whichever option you choose, SEVA keeps the service consistent, safe, and reliable.",
    benefits: [
      { title: "Fixed Fares, No Surprises", desc: "The fare is shown in the app before you confirm. No hidden fees and no unfair surges." },
      { title: "Clean & Well-Kept", desc: "Partner vehicles are 2017 or newer with valid registration and tax, and SEVA CAR cabins are kept clean and smoke-free." },
      { title: "Verified Drivers", desc: "Every driver partner passes an identity check, active vehicle document checks, and safe-driving training." },
      { title: "Fast, Accurate Pickup", desc: "SEVA's dispatch connects your order to the nearest driver to cut waiting time." },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Questions About Services & Fares",
    faqIntro: "Have a question before booking? Find the answers below.",
    faqs: [
      { q: "How does SEVA calculate the fare?", a: "The fare is a base fare plus a per-kilometre charge for the route distance shown on the map in the app before you book." },
      { q: "Is there an extra charge for luggage?", a: "No, as long as your luggage is within the vehicle's normal capacity (1 bag on SEVA RIDE, standard boot space on SEVA CAR)." },
      { q: "Which payment methods are accepted?", a: "SEVA accepts cash paid to the driver, as well as cashless payment with SEVA eWallet and QRIS." },
      { q: "When will SEVA FOOD be available?", a: "SEVA FOOD is currently onboarding food merchants and partner restaurants. Join the waitlist on the SEVA Food page to hear when it launches." },
    ],
    moreHelp: "Need more help with bookings or partnerships?",
    safetyLink: "Read our safety guide",
  },
} as const;

// Dipakai app/(id)/services dan app/(en)/en/services.
export default function ServicesIndexPage({ locale }: { locale: Locale }) {
  const t = SERVICES_COPY[locale];
  const lp = (href: string) => localePath(locale, href);
  const baseFare = (slug: Slug) => (slug === "food" ? t.soonFare : rp(FARES[slug].base, t.numberLocale));
  const rows = SLUGS.map((slug) => ({ slug, name: `SEVA ${slug.toUpperCase()}`, href: lp(`/services/${slug}`), ...t.rows[slug] }));

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        <PageHeader
          locale={locale}
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
          breadcrumbs={[{ label: t.crumb }]}
          metrics={[
            { label: t.metrics.active, value: "RIDE • CAR • SEND", hint: t.metrics.activeHint },
            { label: t.metrics.from, value: rp(FARES.ride.base, t.numberLocale), hint: t.metrics.fromHint },
            { label: t.metrics.eta, value: t.metrics.etaValue, hint: t.metrics.etaHint },
          ]}
        />

        {/* Interactive Services Tab Showcase (Header hidden to prevent duplication) */}
        <Services hideHeader={true} locale={locale} />

        {/* Comparison Matrix Table */}
        <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.compareEyebrow}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{t.compareTitle}</h2>
              <p className="mt-2 text-sm text-slate-600">{t.compareIntro}</p>
            </div>

            {/* Desktop Table View */}
            <div className="hidden lg:block bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
              <table className="w-full text-left text-sm text-slate-700">
                <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="py-4 px-6">{t.cols.service}</th>
                    <th scope="col" className="py-4 px-5">{t.cols.type}</th>
                    <th scope="col" className="py-4 px-5">{t.cols.base}</th>
                    <th scope="col" className="py-4 px-5">{t.cols.capacity}</th>
                    <th scope="col" className="py-4 px-6">{t.cols.ideal}</th>
                    <th scope="col" className="py-4 px-6 text-center">{t.cols.status}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {rows.map((item) => {
                    const Icon = ICON[item.slug];
                    const isSoon = item.slug === "food";
                    return (
                      <tr key={item.slug} className="hover:bg-blue-50/30 transition-colors">
                        <td className="py-4 px-6">
                          <Link href={item.href} className="flex items-center gap-3 group">
                            <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#225FD2] flex items-center justify-center shrink-0 border border-blue-100 group-hover:scale-105 group-hover:bg-[#225FD2] group-hover:text-white transition-all">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-bold text-slate-900 group-hover:text-[#225FD2] transition-colors flex items-center gap-1">
                                <span>{item.name}</span>
                                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#225FD2]" />
                              </div>
                              <div className="text-[11px] text-slate-500 font-medium">
                                {t.pickup}
                                {item.eta}
                              </div>
                            </div>
                          </Link>
                        </td>
                        <td className="py-4 px-5 text-slate-700">{item.type}</td>
                        <td className="py-4 px-5 font-bold text-slate-900 tabular-nums">{baseFare(item.slug)}</td>
                        <td className="py-4 px-5 text-slate-600 text-xs">
                          <div>{item.capacity}</div>
                          <div className="text-slate-400 text-[11px]">{item.luggage}</div>
                        </td>
                        <td className="py-4 px-6 text-slate-600 text-xs leading-relaxed max-w-xs">{item.idealFor}</td>
                        <td className="py-4 px-6 text-center">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                              isSoon ? "bg-amber-50 text-amber-700 border border-amber-200" : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            }`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${isSoon ? "bg-amber-500" : "bg-emerald-500"}`}></span>
                            {isSoon ? t.statusSoon : t.statusActive}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
              {rows.map((item) => {
                const Icon = ICON[item.slug];
                const isSoon = item.slug === "food";
                return (
                  <div key={item.slug} className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#225FD2] flex items-center justify-center shrink-0 border border-blue-100">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-base">{item.name}</div>
                          <div className="text-xs text-slate-500">{item.type}</div>
                        </div>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          isSoon ? "bg-amber-50 text-amber-700 border border-amber-200" : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        }`}
                      >
                        {isSoon ? t.statusSoon : t.statusActive}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-slate-100 text-xs">
                      <div className="bg-slate-50/80 p-2.5 rounded-xl">
                        <div className="text-[10px] font-semibold text-slate-500 uppercase">{t.baseMobile}</div>
                        <div className="font-bold text-slate-900 text-sm mt-0.5 tabular-nums">{baseFare(item.slug)}</div>
                      </div>
                    </div>

                    <div className="text-xs text-slate-600 space-y-1 pt-1">
                      <div>
                        <strong className="text-slate-800">{t.capacityLabel}</strong> {item.capacity} ({item.luggage})
                      </div>
                      <div>
                        <strong className="text-slate-800">{t.idealLabel}</strong> {item.idealFor}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <Link href={item.href} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#225FD2] hover:underline">
                        <span>{t.detail}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Keunggulan Standar Layanan SEVA */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{t.benefitsEyebrow}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{t.benefitsTitle}</h2>
              <p className="mt-2 text-sm text-slate-600">{t.benefitsIntro}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.benefits.map((benefit, idx) => {
                const Icon = BENEFIT_ICONS[idx];
                return (
                  <div
                    key={benefit.title}
                    className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/20 transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-[#225FD2] mb-4 group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-base mb-2">{benefit.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <FaqJsonLd faqs={[...t.faqs]} />

        {/* FAQ Layanan & Tarif */}
        <section className="py-16 sm:py-20 bg-slate-50/50 border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{t.faqEyebrow}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{t.faqTitle}</h2>
              <p className="mt-2 text-sm text-slate-600">{t.faqIntro}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {t.faqs.map((faq, idx) => (
                <div key={faq.q} className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200/80 shadow-2xs space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2.5">
                    <span className="text-[#225FD2] text-xs mt-0.5 font-bold">0{idx + 1}.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-xs sm:text-sm text-slate-500">
                {t.moreHelp}{" "}
                <Link href={lp("/safety")} className="text-[#225FD2] font-semibold hover:underline inline-flex items-center gap-1">
                  {t.safetyLink} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </p>
            </div>
          </div>
        </section>

        <AppDownload locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
