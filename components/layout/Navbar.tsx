"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Home,
  Car, 
  Bike,
  Package,
  Utensils,
  MapPin, 
  Users,
  Briefcase,
  ChevronRight,
  ChevronDown,
  Sparkles,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import StoreBadges from "@/components/ui/StoreBadges";
import Image from "next/image";
import { SUPPORT_EMAIL } from "@/lib/site";

export const PASSENGER_SERVICES = [
  {
    label: "SEVA Ride",
    href: "/services/ride",
    desc: "Taksi motor gesit mulai Rp 8.000",
    badge: "Hemat",
    badgeType: "primary",
    icon: Bike,
  },
  {
    label: "SEVA Car",
    href: "/services/car",
    desc: "Taksi mobil AC nyaman mulai Rp 9.500",
    badge: "Populer",
    badgeType: "popular",
    icon: Car,
  },
];

export const LOGISTICS_SERVICES = [
  {
    label: "SEVA Send",
    href: "/services/send",
    desc: "Pengiriman kilat & kurir on-demand",
    badge: "Kilat",
    badgeType: "fast",
    icon: Package,
  },
  {
    label: "SEVA Food",
    href: "/services/food",
    desc: "Pesan antar kuliner favorit hangat",
    badge: "Segera Hadir",
    badgeType: "soon",
    icon: Utensils,
  },
];

export const SERVICE_DROPDOWN_ITEMS = [
  ...PASSENGER_SERVICES,
  ...LOGISTICS_SERVICES,
];

export const PARTNER_DROPDOWN_ITEMS = [
  {
    label: "Driver Partners",
    href: "/driver-partners",
    desc: "Bagi hasil 95%, pendaftaran mitra online",
    badge: "Komisi 5%",
    badgeType: "driver",
    icon: Bike,
  },
  {
    label: "Fleet Partners",
    href: "/fleet-partners",
    desc: "Integrasi armada rental & live monitoring",
    badge: "Armada",
    badgeType: "fleet",
    icon: Car,
  },
  {
    label: "B2B Partners",
    href: "/b2b-partners",
    desc: "Mobilitas dinas korporat & faktur resmi PPN",
    badge: "Korporat",
    badgeType: "b2b",
    icon: Briefcase,
  },
];

export const navLinks = [
  { label: "Kota Operasional", href: "/cities", icon: MapPin },
  { label: "Fleet Operator", href: "/fleet-partners", icon: Car },
  { label: "FAQ", href: "/faq", icon: HelpCircle },
];

export default function Navbar() {
  const pathname = usePathname();
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

  const isServicesActive = pathname.startsWith("/services");
  const isPartnerActive = pathname === "/driver-partners" || pathname === "/fleet-partners" || pathname === "/b2b-partners";

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
          href="/" 
          className="flex items-center shrink-0 transition-transform duration-200 hover:scale-[1.02]"
          aria-label="SEVA Ride-Hailing"
        >
          <Image
            src="/assets/logo/logo-seva.png"
            alt="SEVA - Ride Hailing & Mobility Partner"
            width={152}
            height={48}
            priority
            className="h-7 sm:h-8 md:h-8.5 w-auto object-contain select-none"
          />
        </Link>

        {/* Center Desktop Navigation Links */}
        <nav aria-label="Navigasi utama" className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Beranda */}
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={`text-[13.5px] px-3.5 py-2 rounded-xl font-medium transition-all duration-150 ${
              pathname === "/"
                ? "text-[#225FD2] font-semibold bg-blue-50/80 shadow-2xs"
                : "text-slate-600 hover:text-[#225FD2] hover:bg-slate-100/70"
            }`}
          >
            Beranda
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
              <span>Layanan</span>
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
                        Transportasi Penumpang
                      </span>
                    </div>

                    <div className="space-y-1">
                      {PASSENGER_SERVICES.map((item) => {
                        const Icon = item.icon;
                        const isItemActive = pathname === item.href;
                        return (
                          <Link
                            key={item.label}
                            href={item.href}
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
                        Logistik &amp; Kuliner
                      </span>
                    </div>

                    <div className="space-y-1">
                      {LOGISTICS_SERVICES.map((item) => {
                        const Icon = item.icon;
                        const isItemActive = pathname === item.href;
                        return (
                          <Link
                            key={item.label}
                            href={item.href}
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
                    Bandingkan tarif seluruh tipe kendaraan
                  </span>
                  <Link
                    href="/services"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center gap-1 text-[#225FD2] hover:text-[#194cb0] transition-colors text-xs font-bold"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Lihat Semua Layanan</span>
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
              <span>Partner</span>
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
                    Ekosistem Kemitraan
                  </span>
                </div>

                <div className="space-y-1">
                  {PARTNER_DROPDOWN_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const isItemActive = pathname === item.href;
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
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
                  <span className="text-slate-500 font-medium">Hubungi Kemitraan:</span>
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
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
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

        {/* Right Action: Clean App Store & Google Play Badges */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <StoreBadges size="sm" />
        </div>

        {/* Mobile Controls: Menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl bg-slate-100/90 border border-slate-200 text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200/90 px-5 py-4 space-y-4 shadow-xl animate-in fade-in duration-200 max-h-[85vh] overflow-y-auto">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2">
            Menu Navigasi
          </div>

          <nav aria-label="Navigasi seluler" className="flex flex-col space-y-1">
            {/* Beranda */}
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition-all ${
                pathname === "/"
                  ? "text-[#225FD2] bg-blue-50/90 border border-blue-200 font-bold"
                  : "text-slate-700 hover:text-[#225FD2] hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                  pathname === "/" ? "bg-blue-100 text-[#225FD2]" : "bg-slate-100 text-slate-500"
                }`}>
                  <Home className="w-3.5 h-3.5" />
                </div>
                <span>Beranda</span>
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
                  <span>Layanan Mobilitas</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileServicesOpen && (
                <div className="p-2.5 bg-white border-t border-slate-200/60 space-y-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {SERVICE_DROPDOWN_ITEMS.map((item) => {
                      const Icon = item.icon;
                      const isItemActive = pathname === item.href;
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
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
                    href="/services"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-[#225FD2] bg-blue-50 border border-blue-100"
                  >
                    <span>Lihat Semua Layanan &amp; Tarif</span>
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
                  <span>Partner</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${mobilePartnerOpen ? "rotate-180" : ""}`} />
              </button>

              {mobilePartnerOpen && (
                <div className="p-2.5 bg-white border-t border-slate-200/60 space-y-1">
                  {PARTNER_DROPDOWN_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const isItemActive = pathname === item.href;
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
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
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
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
            <StoreBadges size="md" />
          </div>
        </div>
      )}
    </header>
  );
}
