"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListIcon as Menu, XIcon as X, HouseIcon as Home, CarIcon as Car, MotorcycleIcon as Bike, PackageIcon as Package, ForkKnifeIcon as Utensils, MapPinIcon as MapPin, UsersIcon as Users, BriefcaseIcon as Briefcase, CaretRightIcon as ChevronRight, CaretDownIcon as ChevronDown, SparkleIcon as Sparkles, ArrowRightIcon as ArrowRight, InfoIcon as Info, NewspaperIcon as Newspaper } from "@phosphor-icons/react/dist/ssr";
import StoreBadges from "@/components/ui/StoreBadges";
import Image from "next/image";
import { SUPPORT_EMAIL } from "@/lib/site";
import { basePath, localeFromPathname, localePath, type Locale } from "@/lib/i18n";

type NavItem = {
  label: string;
  href: string;
  desc: string;
  badge: string;
  badgeType: string;
  icon: typeof Bike;
};

// Teks navbar per bahasa. href selalu path versi Indonesia; diubah lewat localePath() saat render.
const NAV: Record<
  Locale,
  {
    passenger: NavItem[];
    logistics: NavItem[];
    partners: NavItem[];
    links: { label: string; href: string; icon: typeof Bike }[];
    home: string;
    services: string;
    servicesMobile: string;
    partner: string;
    passengerHeading: string;
    logisticsHeading: string;
    partnerHeading: string;
    compareFares: string;
    seeAllServices: string;
    seeAllServicesMobile: string;
    partnerContact: string;
    mainNav: string;
    mobileNav: string;
    menuHeading: string;
    openMenu: string;
    closeMenu: string;
    logoAlt: string;
  }
> = {
  id: {
    passenger: [
      { label: "SEVA Ride", href: "/services/ride", desc: "Taksi motor gesit mulai Rp 8.000", badge: "Hemat", badgeType: "primary", icon: Bike },
      { label: "SEVA Car", href: "/services/car", desc: "Taksi mobil nyaman mulai Rp 9.500", badge: "Populer", badgeType: "popular", icon: Car },
    ],
    logistics: [
      { label: "SEVA Send", href: "/services/send", desc: "Pengiriman kilat & kurir on-demand", badge: "Kilat", badgeType: "fast", icon: Package },
      { label: "SEVA Food", href: "/services/food", desc: "Pesan antar kuliner favorit hangat", badge: "Segera Hadir", badgeType: "soon", icon: Utensils },
    ],
    partners: [
      { label: "Driver Partners", href: "/partner/driver", desc: "Bagi hasil 95%, pendaftaran mitra online", badge: "Komisi 5%", badgeType: "driver", icon: Bike },
      { label: "Fleet Partners", href: "/partner/fleet", desc: "Integrasi armada rental & live monitoring", badge: "Armada", badgeType: "fleet", icon: Car },
      { label: "B2B Partners", href: "/partner/b2b", desc: "Mobilitas dinas korporat & faktur resmi PPN", badge: "Korporat", badgeType: "b2b", icon: Briefcase },
    ],
    links: [
      { label: "Operasional", href: "/cities", icon: MapPin },
      { label: "Newsroom", href: "/newsroom", icon: Newspaper },
      { label: "Tentang Kami", href: "/about", icon: Info },
    ],
    home: "Beranda",
    services: "Layanan",
    servicesMobile: "Layanan Mobilitas",
    partner: "Partner",
    passengerHeading: "Transportasi Penumpang",
    logisticsHeading: "Logistik & Kuliner",
    partnerHeading: "Ekosistem Kemitraan",
    compareFares: "Bandingkan tarif seluruh tipe kendaraan",
    seeAllServices: "Lihat Semua Layanan",
    seeAllServicesMobile: "Lihat Semua Layanan & Tarif",
    partnerContact: "Hubungi Kemitraan:",
    mainNav: "Navigasi utama",
    mobileNav: "Navigasi seluler",
    menuHeading: "Menu Navigasi",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    logoAlt: "SEVA - Ride Hailing & Mobility Partner",
  },
  en: {
    passenger: [
      { label: "SEVA Ride", href: "/services/ride", desc: "Motorbike rides from Rp 8,000", badge: "Budget", badgeType: "primary", icon: Bike },
      { label: "SEVA Car", href: "/services/car", desc: "Comfortable car rides from Rp 9,500", badge: "Popular", badgeType: "popular", icon: Car },
    ],
    logistics: [
      { label: "SEVA Send", href: "/services/send", desc: "Same-day, on-demand courier", badge: "Fast", badgeType: "fast", icon: Package },
      { label: "SEVA Food", href: "/services/food", desc: "Food delivery from local favourites", badge: "Coming Soon", badgeType: "soon", icon: Utensils },
    ],
    partners: [
      { label: "Driver Partners", href: "/partner/driver", desc: "Keep 95% of every fare, sign up online", badge: "5% fee", badgeType: "driver", icon: Bike },
      { label: "Fleet Partners", href: "/partner/fleet", desc: "Connect your rental fleet with live monitoring", badge: "Fleet", badgeType: "fleet", icon: Car },
      { label: "B2B Partners", href: "/partner/b2b", desc: "Corporate travel with VAT invoices", badge: "Corporate", badgeType: "b2b", icon: Briefcase },
    ],
    links: [
      { label: "Service Areas", href: "/cities", icon: MapPin },
      { label: "Newsroom", href: "/newsroom", icon: Newspaper },
      { label: "About Us", href: "/about", icon: Info },
    ],
    home: "Home",
    services: "Services",
    servicesMobile: "Services",
    partner: "Partners",
    passengerHeading: "Passenger Transport",
    logisticsHeading: "Delivery & Food",
    partnerHeading: "Partner With Us",
    compareFares: "Compare fares for every vehicle type",
    seeAllServices: "See All Services",
    seeAllServicesMobile: "See All Services & Fares",
    partnerContact: "Partnerships:",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    menuHeading: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    logoAlt: "SEVA - Ride Hailing & Mobility Partner",
  },
};


export default function Navbar() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const base = basePath(pathname);
  const t = NAV[locale];
  const lp = (href: string) => localePath(locale, href);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // Desktop Dropdown States
  const [servicesOpen, setServicesOpen] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);

  // Mobile Accordion States
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePartnerOpen, setMobilePartnerOpen] = useState(false);

  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const partnerDropdownRef = useRef<HTMLDivElement>(null);
  const servicesCloseTimer = useRef<NodeJS.Timeout | null>(null);
  const partnerCloseTimer = useRef<NodeJS.Timeout | null>(null);

  const isServicesActive = base.startsWith("/services");
  const isPartnerActive = base.startsWith("/partner/");

  const openServices = () => {
    if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
    if (partnerCloseTimer.current) clearTimeout(partnerCloseTimer.current);
    setPartnerOpen(false);
    setServicesOpen(true);
  };

  const closeServices = () => {
    servicesCloseTimer.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  const openPartner = () => {
    if (partnerCloseTimer.current) clearTimeout(partnerCloseTimer.current);
    if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
    setServicesOpen(false);
    setPartnerOpen(true);
  };

  const closePartner = () => {
    partnerCloseTimer.current = setTimeout(() => {
      setPartnerOpen(false);
    }, 150);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(target)) {
        setServicesOpen(false);
      }
      if (partnerDropdownRef.current && !partnerDropdownRef.current.contains(target)) {
        setPartnerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Tutup semua menu saat pindah halaman (penyesuaian state saat render, tanpa effect)
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setServicesOpen(false);
    setPartnerOpen(false);
    setMobileOpen(false);
  }

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 w-full ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] py-2.5 sm:py-3"
          : "bg-white/85 backdrop-blur-md border-b border-slate-200/60 py-3 sm:py-3.5"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-6">

        {/* Brand Logo */}
        <Link 
          href={lp("/")} 
          className="flex items-center shrink-0 transition-transform duration-200 hover:scale-[1.02]"
          aria-label="SEVA Ride-Hailing"
        >
          <Image
            src="/assets/logo/logo-seva.png"
            alt={t.logoAlt}
            width={152}
            height={48}
            priority
            className="h-7 sm:h-8 md:h-8.5 w-auto object-contain select-none"
          />
        </Link>

        {/* Center Desktop Navigation Links */}
        <nav aria-label={t.mainNav} className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Beranda */}
          <Link
            href={lp("/")}
            aria-current={base === "/" ? "page" : undefined}
            className={`text-[13.5px] px-3.5 py-2 rounded-xl font-medium transition-all duration-150 ${
              base === "/"
                ? "text-[#225FD2] font-semibold bg-blue-50/80 shadow-2xs"
                : "text-slate-600 hover:text-[#225FD2] hover:bg-slate-100/70"
            }`}
          >
            {t.home}
          </Link>

          {/* Layanan Dropdown (2-Column) */}
          <div 
            className="relative" 
            ref={servicesDropdownRef}
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            <button
              type="button"
              onClick={() => {
                setPartnerOpen(false);
                setServicesOpen(!servicesOpen);
              }}
              aria-expanded={servicesOpen}
              className={`text-[13.5px] px-3.5 py-2 rounded-xl font-medium transition-all duration-150 inline-flex items-center gap-1.5 cursor-pointer ${
                isServicesActive || servicesOpen
                  ? "text-[#225FD2] font-semibold bg-blue-50/80 shadow-2xs"
                  : "text-slate-600 hover:text-[#225FD2] hover:bg-slate-100/70"
              }`}
            >
              <span>{t.services}</span>
              <ChevronDown 
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180 text-[#225FD2]" : "text-slate-400"
                }`} 
              />
            </button>

            {/* Dropdown Menu Box (2 Column Grid Kanan & Kiri) */}
            {servicesOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-[580px] bg-white rounded-2xl border border-slate-100 shadow-xl p-3.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                onMouseEnter={openServices}
                onMouseLeave={closeServices}
              >
                {/* 2 Column Layout (Kiri: Penumpang | Kanan: Logistik & Kuliner) */}
                <div className="grid grid-cols-2 gap-3 divide-x divide-slate-100">
                  
                  {/* Kolom Kiri: Transportasi Penumpang */}
                  <div className="space-y-1 pr-1.5">
                    <div className="px-2 py-1 mb-1">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
                        {t.passengerHeading}
                      </span>
                    </div>

                    <div className="space-y-1">
                      {t.passenger.map((item) => {
                        const Icon = item.icon;
                        const isItemActive = base === item.href;
                        return (
                          <Link
                            key={item.label}
                            href={lp(item.href)}
                            onClick={() => setServicesOpen(false)}
                            className={`group flex items-center gap-3 p-2.5 rounded-xl transition-all ${
                              isItemActive
                                ? "bg-blue-50/90 text-[#225FD2]"
                                : "hover:bg-slate-50 text-slate-800"
                            }`}
                          >
                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                              isItemActive 
                                ? "bg-[#225FD2] text-white shadow-xs" 
                                : "bg-blue-50 text-[#225FD2] group-hover:bg-[#225FD2] group-hover:text-white"
                            }`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs font-bold text-slate-900 group-hover:text-[#225FD2] transition-colors">
                                  {item.label}
                                </span>
                                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                                  item.badgeType === "popular"
                                    ? "bg-blue-50 text-[#225FD2]"
                                    : "bg-emerald-50 text-emerald-700"
                                }`}>
                                  {item.badge}
                                </span>
                              </div>
                              <p className="text-[11.5px] text-slate-500 leading-snug mt-0.5 truncate">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Kolom Kanan: Logistik & Kuliner */}
                  <div className="space-y-1 pl-3.5">
                    <div className="px-2 py-1 mb-1">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
                        {t.logisticsHeading}
                      </span>
                    </div>

                    <div className="space-y-1">
                      {t.logistics.map((item) => {
                        const Icon = item.icon;
                        const isItemActive = base === item.href;
                        return (
                          <Link
                            key={item.label}
                            href={lp(item.href)}
                            onClick={() => setServicesOpen(false)}
                            className={`group flex items-center gap-3 p-2.5 rounded-xl transition-all ${
                              isItemActive
                                ? "bg-blue-50/90 text-[#225FD2]"
                                : "hover:bg-slate-50 text-slate-800"
                            }`}
                          >
                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                              isItemActive 
                                ? "bg-[#225FD2] text-white shadow-xs" 
                                : "bg-blue-50 text-[#225FD2] group-hover:bg-[#225FD2] group-hover:text-white"
                            }`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs font-bold text-slate-900 group-hover:text-[#225FD2] transition-colors">
                                  {item.label}
                                </span>
                                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                                  item.badgeType === "soon"
                                    ? "bg-amber-50 text-amber-800"
                                    : "bg-emerald-50 text-emerald-700"
                                }`}>
                                  {item.badge}
                                </span>
                              </div>
                              <p className="text-[11.5px] text-slate-500 leading-snug mt-0.5 truncate">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                </div>

                {/* Dropdown Bottom Banner Full Width */}
                <div className="mt-3 pt-2.5 -mx-3.5 -mb-3.5 px-3.5 py-2.5 bg-slate-50/80 rounded-b-2xl border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11.5px] text-slate-500">
                    {t.compareFares}
                  </span>
                  <Link
                    href={lp("/services")}
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center gap-1 text-[#225FD2] hover:text-[#194cb0] transition-colors text-xs font-bold"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t.seeAllServices}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Partner Dropdown (Replaces /safety in Navbar) */}
          <div 
            className="relative" 
            ref={partnerDropdownRef}
            onMouseEnter={openPartner}
            onMouseLeave={closePartner}
          >
            <button
              type="button"
              onClick={() => {
                setServicesOpen(false);
                setPartnerOpen(!partnerOpen);
              }}
              aria-expanded={partnerOpen}
              className={`text-[13.5px] px-3.5 py-2 rounded-xl font-medium transition-all duration-150 inline-flex items-center gap-1.5 cursor-pointer ${
                isPartnerActive || partnerOpen
                  ? "text-[#225FD2] font-semibold bg-blue-50/80 shadow-2xs"
                  : "text-slate-600 hover:text-[#225FD2] hover:bg-slate-100/70"
              }`}
            >
              <span>{t.partner}</span>
              <ChevronDown 
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  partnerOpen ? "rotate-180 text-[#225FD2]" : "text-slate-400"
                }`} 
              />
            </button>

            {/* Partner Dropdown Menu Box */}
            {partnerOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-[360px] bg-white rounded-2xl border border-slate-100 shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                onMouseEnter={openPartner}
                onMouseLeave={closePartner}
              >
                <div className="px-2 py-1 mb-1">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
                    {t.partnerHeading}
                  </span>
                </div>

                <div className="space-y-1">
                  {t.partners.map((item) => {
                    const Icon = item.icon;
                    const isItemActive = base === item.href;
                    return (
                      <Link
                        key={item.label}
                        href={lp(item.href)}
                        onClick={() => setPartnerOpen(false)}
                        className={`group flex items-center gap-3 p-2.5 rounded-xl transition-all ${
                          isItemActive
                            ? "bg-blue-50/90 text-[#225FD2]"
                            : "hover:bg-slate-50 text-slate-800"
                        }`}
                      >
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isItemActive 
                            ? "bg-[#225FD2] text-white shadow-xs" 
                            : "bg-blue-50 text-[#225FD2] group-hover:bg-[#225FD2] group-hover:text-white"
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-slate-900 group-hover:text-[#225FD2] transition-colors">
                              {item.label}
                            </span>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                              item.badgeType === "driver"
                                ? "bg-emerald-50 text-emerald-700"
                                : item.badgeType === "fleet"
                                ? "bg-blue-50 text-[#225FD2]"
                                : "bg-purple-50 text-purple-700"
                            }`}>
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-[11.5px] text-slate-500 leading-snug mt-0.5 truncate">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Partner Bottom Banner */}
                <div className="mt-3 pt-2.5 -mx-3 -mb-3 px-3.5 py-2.5 bg-slate-50/80 rounded-b-2xl border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">{t.partnerContact}</span>
                  <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    className="font-bold text-[#225FD2] hover:underline"
                  >
                    {SUPPORT_EMAIL} →
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Remaining Desktop Nav Links: Cara Pesan, Cakupan Kota */}
          {t.links.map((link) => {
            const isActive = base === link.href;
            return (
              <Link
                key={link.label}
                href={lp(link.href)}
                aria-current={isActive ? "page" : undefined}
                className={`text-[13.5px] px-3.5 py-2 rounded-xl font-medium transition-all duration-150 ${
                  isActive
                    ? "text-[#225FD2] font-semibold bg-blue-50/80 shadow-2xs"
                    : "text-slate-600 hover:text-[#225FD2] hover:bg-slate-100/70"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: store badges, menu toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:flex items-center gap-2">
            <StoreBadges size="sm" locale={locale} />
          </div>

          {/* Mobile & Tablet Controls: Menu toggle (muncul sampai breakpoint lg, sama dengan drawer) */}
          <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl bg-slate-100/90 border border-slate-200 text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label={mobileOpen ? t.closeMenu : t.openMenu}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
          </div>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200/90 px-5 py-4 space-y-4 shadow-xl animate-in fade-in duration-200 max-h-[85vh] overflow-y-auto">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2">
            {t.menuHeading}
          </div>

          <nav aria-label={t.mobileNav} className="flex flex-col space-y-1">
            {/* Beranda */}
            <Link
              href={lp("/")}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition-all ${
                base === "/"
                  ? "text-[#225FD2] bg-blue-50/90 border border-blue-200 font-bold"
                  : "text-slate-700 hover:text-[#225FD2] hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                  base === "/" ? "bg-blue-100 text-[#225FD2]" : "bg-slate-100 text-slate-500"
                }`}>
                  <Home className="w-3.5 h-3.5" />
                </div>
                <span>{t.home}</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>

            {/* Mobile Layanan Accordion */}
            <div className="rounded-2xl border border-slate-200/80 overflow-hidden bg-slate-50/50">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-semibold text-slate-800"
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                    isServicesActive ? "bg-blue-100 text-[#225FD2]" : "bg-slate-100 text-slate-500"
                  }`}>
                    <Car className="w-3.5 h-3.5" />
                  </div>
                  <span>{t.servicesMobile}</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileServicesOpen && (
                <div className="p-2.5 bg-white border-t border-slate-200/60 space-y-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[...t.passenger, ...t.logistics].map((item) => {
                      const Icon = item.icon;
                      const isItemActive = base === item.href;
                      return (
                        <Link
                          key={item.label}
                          href={lp(item.href)}
                          onClick={() => setMobileOpen(false)}
                          className={`p-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between border ${
                            isItemActive
                              ? "bg-blue-50 border-blue-200 text-[#225FD2]"
                              : "bg-slate-50/70 border-slate-200/60 text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0 flex-1 mr-2">
                            <Icon className="w-4 h-4 text-[#225FD2] shrink-0" />
                            <div className="min-w-0 flex-1">
                              <div className="font-bold text-slate-900 text-xs truncate">{item.label}</div>
                              <div className="text-[10px] text-slate-500 mt-0.5 truncate">{item.desc}</div>
                            </div>
                          </div>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                            item.badgeType === "soon"
                              ? "bg-amber-100 text-amber-700"
                              : item.badgeType === "popular"
                              ? "bg-blue-100 text-[#225FD2]"
                              : "bg-emerald-100 text-emerald-700"
                          }`}>
                            {item.badge}
                          </span>
                        </Link>
                      );
                    })}
                  </div>

                  <Link
                    href={lp("/services")}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-[#225FD2] bg-blue-50 border border-blue-100"
                  >
                    <span>{t.seeAllServicesMobile}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Partner Accordion */}
            <div className="rounded-2xl border border-slate-200/80 overflow-hidden bg-slate-50/50">
              <button
                type="button"
                onClick={() => setMobilePartnerOpen(!mobilePartnerOpen)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-semibold text-slate-800"
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                    isPartnerActive ? "bg-blue-100 text-[#225FD2]" : "bg-slate-100 text-slate-500"
                  }`}>
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <span>{t.partner}</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${mobilePartnerOpen ? "rotate-180" : ""}`} />
              </button>

              {mobilePartnerOpen && (
                <div className="p-2.5 bg-white border-t border-slate-200/60 space-y-1">
                  {t.partners.map((item) => {
                    const Icon = item.icon;
                    const isItemActive = base === item.href;
                    return (
                      <Link
                        key={item.label}
                        href={lp(item.href)}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-colors border ${
                          isItemActive
                            ? "bg-blue-50 border-blue-200 text-[#225FD2] font-bold"
                            : "border-transparent text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="w-4 h-4 text-[#225FD2]" />
                          <div>
                            <div className="font-bold text-slate-900">{item.label}</div>
                            <div className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">{item.desc}</div>
                          </div>
                        </div>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                          item.badgeType === "driver"
                            ? "bg-emerald-100 text-emerald-700"
                            : item.badgeType === "fleet"
                            ? "bg-blue-100 text-[#225FD2]"
                            : "bg-purple-100 text-purple-700"
                        }`}>
                          {item.badge}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Remaining Mobile Links */}
            {t.links.map((link) => {
              const Icon = link.icon;
              const isActive = base === link.href;
              return (
                <Link
                  key={link.label}
                  href={lp(link.href)}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition-all ${
                    isActive
                      ? "text-[#225FD2] bg-blue-50/90 border border-blue-200 font-bold"
                      : "text-slate-700 hover:text-[#225FD2] hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                      isActive ? "bg-blue-100 text-[#225FD2]" : "bg-slate-100 text-slate-500"
                    }`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span>{link.label}</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              );
            })}
          </nav>

          {/* Download Badges on Mobile Drawer */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-3">
            <StoreBadges size="md" locale={locale} />
          </div>
        </div>
      )}
    </header>
  );
}
