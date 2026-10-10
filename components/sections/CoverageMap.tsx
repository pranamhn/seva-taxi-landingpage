"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useMemo, useRef, useState } from "react";
import type * as Leaflet from "leaflet";
import {
  MapPin,
  Plane,
  Train,
  Car,
  Bike,
  Package,
  ArrowRight,
} from "lucide-react";
import { REGION_POLYGONS, type RegionGroup } from "@/lib/coverage-geo";
import { FLEET_TOTAL_VEHICLES } from "@/lib/fleet-companies";

type ZoneType = "hub" | "core" | "metropolitan";

interface CoverageZone {
  id: string;
  name: string;
  label: string;
  city: string;
  type: ZoneType;
  kind: "airport" | "station" | "area";
  lat: number;
  lng: number;
  anchor?: [number, number]; // geser ikon agar tidak menumpuk
  region: string; // id polygon wilayah administratif
  group: RegionGroup;
  eta: string;
  services: string[];
  desc: string;
  badge: string;
}

const COVERAGE_POINTS: CoverageZone[] = [
  {
    id: "cgk",
    name: "Bandara Internasional Soekarno-Hatta (CGK)",
    label: "Soekarno-Hatta",
    city: "Kota Tangerang",
    type: "hub",
    kind: "airport",
    lat: -6.1256,
    lng: 106.6559,
    region: "tangerang-kota",
    group: "tangerang",
    eta: "~2–4 mnt",
    services: ["SEVA Car", "SEVA Ride", "SEVA Send"],
    desc: "Shelter titik jemput resmi di Terminal 1, 2, dan 3 (kedatangan domestik & internasional).",
    badge: "Hub Bandara Utama",
  },
  {
    id: "jkt-pusat",
    name: "Jakarta Pusat (Sudirman - Thamrin - Monas)",
    label: "Jakarta Pusat",
    city: "DKI Jakarta",
    type: "core",
    kind: "area",
    lat: -6.1944,
    lng: 106.8229,
    region: "jakarta-pusat",
    group: "jakarta",
    eta: "~2–3 mnt",
    services: ["SEVA Ride", "SEVA Car", "SEVA Send"],
    desc: "Kawasan bisnis utama, Stasiun Gambir, Bundaran HI, dan perkantoran Thamrin.",
    badge: "Kawasan Pusat Bisnis",
  },
  {
    id: "scbd",
    name: "SCBD & Senayan - Mega Kuningan",
    label: "SCBD & Kuningan",
    city: "Jakarta Selatan",
    type: "core",
    kind: "area",
    lat: -6.2262,
    lng: 106.8096,
    region: "jakarta-selatan",
    group: "jakarta",
    eta: "~2 mnt",
    services: ["SEVA Ride", "SEVA Car", "SEVA Send"],
    desc: "Pusat perkantoran SCBD, Gelora Bung Karno, Kuningan, dan TB Simatupang.",
    badge: "Koridor Komersial",
  },
  {
    id: "hlp",
    name: "Bandara Halim Perdanakusuma (HLP)",
    label: "Halim (HLP)",
    city: "Jakarta Timur",
    type: "hub",
    kind: "airport",
    lat: -6.2666,
    lng: 106.891,
    anchor: [4, 4],
    region: "jakarta-timur",
    group: "jakarta",
    eta: "~2–4 mnt",
    services: ["SEVA Car", "SEVA Ride"],
    desc: "Penjemputan cepat langsung di lobi kedatangan penerbangan komersial & dinas.",
    badge: "Hub Bandara Kota",
  },
  {
    id: "whoosh",
    name: "Stasiun Kereta Cepat Whoosh Halim",
    label: "Whoosh Halim",
    city: "Jakarta Timur",
    type: "hub",
    kind: "station",
    lat: -6.259,
    lng: 106.88,
    anchor: [28, 28],
    region: "jakarta-timur",
    group: "jakarta",
    eta: "~2–3 mnt",
    services: ["SEVA Car", "SEVA Ride", "SEVA Send"],
    desc: "Koneksi mobilitas langsung penumpang KCIC rute Jakarta–Bandung ke seluruh penjuru ibu kota.",
    badge: "Hub KCIC Whoosh",
  },
  {
    id: "bsd",
    name: "BSD City, Alam Sutera & Bintaro",
    label: "BSD & Bintaro",
    city: "Tangerang Selatan",
    type: "metropolitan",
    kind: "area",
    lat: -6.301,
    lng: 106.656,
    region: "tangsel",
    group: "tangerang",
    eta: "~3–5 mnt",
    services: ["SEVA Ride", "SEVA Car", "SEVA Send"],
    desc: "Melayani pusat residensial, ICE BSD, mall Alam Sutera, dan stasiun Rawa Buntu/KRL.",
    badge: "Kawasan Mandiri",
  },
  {
    id: "depok",
    name: "Margonda Raya & Kampus UI",
    label: "Margonda & UI",
    city: "Kota Depok",
    type: "metropolitan",
    kind: "area",
    lat: -6.3715,
    lng: 106.8319,
    region: "depok",
    group: "depok",
    eta: "~3–4 mnt",
    services: ["SEVA Ride", "SEVA Car", "SEVA Send"],
    desc: "Koridor utama Margonda, Cinere, Sawangan, dan simpul transportasi KRL Commuter Line.",
    badge: "Pendidikan & Transit",
  },
  {
    id: "bekasi",
    name: "Summarecon & Metropolitan Bekasi",
    label: "Summarecon Bekasi",
    city: "Kota & Kab. Bekasi",
    type: "metropolitan",
    kind: "area",
    lat: -6.2268,
    lng: 106.9998,
    region: "bekasi-kota",
    group: "bekasi",
    eta: "~3–5 mnt",
    services: ["SEVA Ride", "SEVA Car", "SEVA Send"],
    desc: "Bekasi Barat, Summarecon, Harapan Indah, stasiun LRT Bekasi Barat, hingga kawasan industri Cikarang.",
    badge: "Metropolitan Timur",
  },
  {
    id: "bogor",
    name: "Pusat Kota Bogor & Sentul City",
    label: "Bogor & Sentul",
    city: "Kota & Kab. Bogor",
    type: "metropolitan",
    kind: "area",
    lat: -6.5951,
    lng: 106.79,
    region: "bogor-kota",
    group: "bogor",
    eta: "~3–5 mnt",
    services: ["SEVA Ride", "SEVA Car", "SEVA Send"],
    desc: "Stasiun Bogor, Kebun Raya, Baranangsiang, Sentul City, dan jalur wisata puncak.",
    badge: "Kawasan Selatan",
  },
];

const FILTERS: { id: "all" | ZoneType; label: string }[] = [
  { id: "all", label: "Semua Titik" },
  { id: "hub", label: "Hub Bandara & Kereta" },
  { id: "core", label: "Jakarta Bisnis" },
  { id: "metropolitan", label: "Bodetabek" },
];

const ESRI = "https://server.arcgisonline.com/ArcGIS/rest/services";

const TILES = {
  urls: [
    `${ESRI}/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}`,
    `${ESRI}/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}`,
  ],
  attribution: "Tiles © Esri — HERE, Garmin, © OpenStreetMap contributors",
};

// Warna per kota / kabupaten administratif
const REGION_COLORS: Record<string, string> = {
  "jakarta-pusat": "#4e79a7",
  "jakarta-utara": "#5fa8a3",
  "jakarta-barat": "#a681b0",
  "jakarta-selatan": "#6aa84f",
  "jakarta-timur": "#e0b53c",
  "tangerang-kota": "#d9696b",
  tangsel: "#e8903a",
  depok: "#8fbf7a",
  "bogor-kota": "#e58ca0",
  "bekasi-kota": "#9c8573",
};
const REGION_MUTED = "#64748b";

const URBAN_LEGEND = REGION_POLYGONS.filter((r) => REGION_COLORS[r.id]).map((r) => ({
  id: r.id,
  name: r.name.replace("Kota Tangerang Selatan", "Tangerang Selatan").replace(/^Kota /, ""),
  color: REGION_COLORS[r.id],
}));

// Ikon (path lucide) untuk penanda di peta
const ICON_PATHS: Record<CoverageZone["kind"], string> = {
  airport:
    '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
  station:
    '<path d="M8 3.1V7a4 4 0 0 0 8 0V3.1"/><path d="m9 15-1-1"/><path d="m15 15 1-1"/><path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"/><path d="m8 19-2 3"/><path d="m16 19 2 3"/>',
  area: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
};

function markerHtml(point: CoverageZone, selected: boolean) {
  const cls = [
    "seva-pin",
    point.type === "hub" ? "seva-pin--hub" : "",
    selected ? "seva-pin--active" : "",
  ].join(" ");
  return `<div class="${cls}"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS[point.kind]}</svg></div>`;
}

type FilterId = "all" | ZoneType;

function polygonStyle(
  region: (typeof REGION_POLYGONS)[number],
  filter: FilterId,
  selectedRegion: string
): Leaflet.PathOptions {
  const isJakarta = region.group === "jakarta";
  const inFilter =
    filter === "all" || (filter === "core" && isJakarta) || (filter === "metropolitan" && !isJakarta);
  const isSelected = region.id === selectedRegion;

  const color = REGION_COLORS[region.id];
  const base: Leaflet.PathOptions = color
    ? { color, fillColor: color, weight: 1.5, fillOpacity: 0.34 }
    : { color: REGION_MUTED, fillColor: "#94a3b8", weight: 1.25, fillOpacity: 0.1, dashArray: "5 4" };

  if (!inFilter) {
    return { ...base, opacity: 0.4, fillOpacity: 0.05, weight: 1 };
  }
  if (isSelected) {
    return { ...base, weight: 2.5, fillOpacity: Math.min((base.fillOpacity ?? 0.2) + 0.18, 0.55), opacity: 1 };
  }
  return { ...base, opacity: 0.95 };
}

export default function CoverageMap() {
  const [selectedId, setSelectedId] = useState<string>(COVERAGE_POINTS[0].id);
  const [filterType, setFilterType] = useState<FilterId>("all");
  const [ready, setReady] = useState(false);

  const mapEl = useRef<HTMLDivElement>(null);
  const leafletRef = useRef<typeof Leaflet | null>(null);
  const mapRef = useRef<Leaflet.Map | null>(null);
  const markerLayerRef = useRef<Leaflet.LayerGroup | null>(null);
  const polygonsRef = useRef<Map<string, Leaflet.Polygon>>(new Map());
  const selectRef = useRef<(id: string) => void>(() => {});

  const selectedPoint = COVERAGE_POINTS.find((p) => p.id === selectedId) ?? COVERAGE_POINTS[0];
  const filteredPoints = useMemo(
    () => COVERAGE_POINTS.filter((p) => filterType === "all" || p.type === filterType),
    [filterType]
  );

  useEffect(() => {
    selectRef.current = (id: string) => setSelectedId(id);
  });

  // Inisialisasi peta Leaflet (hanya di client)
  useEffect(() => {
    let cancelled = false;
    let map: Leaflet.Map | null = null;
    const polygons = polygonsRef.current;

    (async () => {
      const L = ((await import("leaflet")) as unknown as { default: typeof Leaflet }).default;
      if (cancelled || !mapEl.current) return;
      leafletRef.current = L;

      const m = L.map(mapEl.current, {
        zoomControl: false,
        scrollWheelZoom: false,
        zoomSnap: 0.25,
        minZoom: 9,
        maxZoom: 15,
      });
      map = m;
      m.attributionControl.setPrefix(false);
      L.control.zoom({ position: "bottomright" }).addTo(m);

      // Poligon batas wilayah (data OSM). Kabupaten digambar dulu agar kota berada di atasnya.
      const ordered = [...REGION_POLYGONS].sort((a, b) => Number(a.urban) - Number(b.urban));
      const urbanBounds = L.latLngBounds([]);
      ordered.forEach((region) => {
        const poly = L.polygon(region.rings as Leaflet.LatLngExpression[][], {
          ...polygonStyle(region, "all", ""),
          lineJoin: "round",
        }).addTo(m);
        poly.bindTooltip(region.name, { sticky: true, className: "seva-tip", direction: "top" });
        poly.on("click", () => {
          const target =
            COVERAGE_POINTS.find((p) => p.region === region.id) ??
            COVERAGE_POINTS.find((p) => p.group === region.group);
          if (target) selectRef.current(target.id);
        });
        polygons.set(region.id, poly);
        if (region.urban) urbanBounds.extend(poly.getBounds());
      });

      markerLayerRef.current = L.layerGroup().addTo(m);
      m.fitBounds(urbanBounds, { padding: [20, 20] });
      mapRef.current = m;
      setReady(true);
    })();

    return () => {
      cancelled = true;
      polygons.clear();
      markerLayerRef.current = null;
      mapRef.current = null;
      if (map) map.remove();
    };
  }, []);

  // Basemap abu-abu terang (Esri) agar warna wilayah menjadi fokus
  useEffect(() => {
    const L = leafletRef.current;
    const map = mapRef.current;
    if (!ready || !L || !map) return;
    const layer = L.layerGroup(
      TILES.urls.map((url, i) =>
        L.tileLayer(url, { attribution: i === 0 ? TILES.attribution : "", maxZoom: 15, maxNativeZoom: 15 })
      )
    ).addTo(map);
    return () => {
      map.removeLayer(layer);
    };
  }, [ready]);

  // Gaya poligon mengikuti filter & wilayah terpilih
  useEffect(() => {
    if (!ready) return;
    REGION_POLYGONS.forEach((region) => {
      polygonsRef.current
        .get(region.id)
        ?.setStyle(polygonStyle(region, filterType, selectedPoint.region));
    });
  }, [ready, filterType, selectedPoint.region]);

  // Penanda titik layanan
  useEffect(() => {
    const L = leafletRef.current;
    const layer = markerLayerRef.current;
    if (!ready || !L || !layer) return;
    layer.clearLayers();
    filteredPoints.forEach((point) => {
      const selected = point.id === selectedId;
      const marker = L.marker([point.lat, point.lng], {
        icon: L.divIcon({
          html: markerHtml(point, selected),
          className: "seva-pin-wrap",
          iconSize: [32, 32],
          iconAnchor: point.anchor ?? [16, 16],
        }),
        title: point.name,
        keyboard: true,
        zIndexOffset: selected ? 1000 : 0,
      });
      marker.bindTooltip(point.label, {
        permanent: selected,
        direction: "bottom",
        offset: [0, 14],
        className: selected ? "seva-tip seva-tip--active" : "seva-tip",
      });
      marker.on("click", () => selectRef.current(point.id));
      marker.addTo(layer);
    });
  }, [ready, filteredPoints, selectedId]);

  const handleSelect = (id: string) => {
    setSelectedId(id);
    const point = COVERAGE_POINTS.find((p) => p.id === id);
    if (point && mapRef.current) {
      mapRef.current.panTo([point.lat, point.lng], { animate: true });
    }
  };

  const handleFilter = (id: FilterId) => {
    setFilterType(id);
    const next = COVERAGE_POINTS.filter((p) => id === "all" || p.type === id);
    if (next.length && !next.some((p) => p.id === selectedId)) setSelectedId(next[0].id);
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#225FD2] bg-blue-500/10 border border-blue-500/20 mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>PETA JANGKAUAN SEVA</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight break-words">
              Peta Wilayah Operasional Jabodetabek
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Batas wilayah administratif Jakarta, Bogor, Depok, Tangerang, dan Bekasi beserta hub bandara dan stasiun transit yang terlayani SEVA.
            </p>
          </div>
        </div>

        {/* Main Map Box */}
        <div className="rounded-2xl border border-slate-200 bg-white text-slate-900 overflow-hidden shadow-xs">
          {/* Top Control Bar */}
          <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <span className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-emerald-700 whitespace-nowrap">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Seluruh Zona Aktif 24/7
              </span>
              <span className="text-slate-300 text-xs hidden sm:inline">/</span>
              <span className="text-slate-600 text-xs font-mono tabular-nums hidden sm:inline">
                {FLEET_TOTAL_VEHICLES.toLocaleString("id-ID")} Armada Terpantau
              </span>
            </div>

            <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar text-xs max-w-full pb-0.5" role="group" aria-label="Filter titik">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => handleFilter(f.id)}
                  aria-pressed={filterType === f.id}
                  className={`px-2.5 py-1 rounded-md whitespace-nowrap text-[11px] font-semibold transition-colors cursor-pointer ${
                    filterType === f.id
                      ? "bg-[#225FD2] text-white border border-[#225FD2]"
                      : "bg-white text-slate-600 border border-slate-200 hover:text-slate-900 hover:border-slate-300"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px]">
            {/* Map */}
            <div className="relative z-0 isolate min-h-[420px] sm:min-h-[540px] bg-slate-100">
              <div
                ref={mapEl}
                role="region"
                aria-label="Peta wilayah operasional SEVA di Jabodetabek"
                className="absolute inset-0 seva-map"
              />

              {!ready && (
                <div className="absolute inset-0 flex items-center justify-center text-xs text-slate-500 font-mono">
                  Memuat peta…
                </div>
              )}

              {/* Legend */}
              <div className="absolute bottom-3 left-3 z-[500] hidden sm:block px-3 py-2.5 rounded-lg bg-white/95 border border-slate-200 text-[11px] text-slate-700 shadow-xs">
                <ul className="grid grid-cols-2 gap-x-5 gap-y-1.5">
                  {URBAN_LEGEND.map((item) => (
                    <li key={item.id} className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-[3px] border shrink-0"
                        style={{ backgroundColor: `${item.color}59`, borderColor: item.color }}
                      />
                      {item.name}
                    </li>
                  ))}
                  <li className="flex items-center gap-2 col-span-2">
                    <span className="w-3 h-3 rounded-[3px] border border-dashed border-slate-500 bg-slate-400/20 shrink-0" />
                    Kabupaten penyangga
                  </li>
                </ul>
                <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-200">
                  <Plane className="w-3 h-3 text-[#225FD2]" />
                  Bandara
                  <Train className="w-3 h-3 text-[#225FD2] ml-2" />
                  Stasiun
                </div>
              </div>
            </div>

            {/* Side panel */}
            <aside className="flex flex-col bg-white border-t lg:border-t-0 lg:border-l border-slate-200">
              <div className="p-5 space-y-4 flex-1">
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-500 font-bold mb-2">
                    Layanan aktif ({selectedPoint.name})
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedPoint.services.map((srv) => (
                      <span
                        key={srv}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-white border border-slate-200 text-slate-700"
                      >
                        {srv.includes("Ride") ? (
                          <Bike className="w-3 h-3 text-slate-400" />
                        ) : srv.includes("Car") ? (
                          <Car className="w-3 h-3 text-slate-400" />
                        ) : (
                          <Package className="w-3 h-3 text-slate-400" />
                        )}
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Point list */}
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-500 font-bold mb-2">
                    Titik layanan ({filteredPoints.length})
                  </div>
                  <ul className="rounded-lg border border-slate-200 divide-y divide-slate-200 overflow-hidden">
                    {filteredPoints.map((p) => (
                      <li key={p.id}>
                        <button
                          type="button"
                          onClick={() => handleSelect(p.id)}
                          aria-current={p.id === selectedId}
                          className={`w-full flex items-center justify-between gap-3 px-3 py-2 text-left text-xs transition-colors cursor-pointer ${
                            p.id === selectedId
                              ? "bg-blue-50 text-[#225FD2] font-semibold"
                              : "text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <span className="flex items-center gap-2 min-w-0">
                            <span
                              className="w-2.5 h-2.5 rounded-[3px] shrink-0"
                              style={{ backgroundColor: REGION_COLORS[p.region] ?? REGION_MUTED }}
                            />
                            <span className="truncate">{p.label}</span>
                          </span>
                          <span className="text-[10px] text-slate-500 font-mono shrink-0">{p.city}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-4 border-t border-slate-200">
                <a
                  href="#download"
                  className="w-full py-2.5 px-4 rounded-lg bg-[#225FD2] hover:bg-[#194cb0] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Pesan Penjemputan di Titik Ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <p className="text-[10px] text-center text-slate-500 mt-2">
                  Tersedia untuk pengguna iOS &amp; Android di seluruh Jabodetabek
                </p>
              </div>
            </aside>
          </div>
        </div>

        <p className="mt-3 text-[11px] text-slate-500">
          Batas wilayah: © OpenStreetMap contributors (ODbL). Posisi titik bersifat perkiraan.
        </p>
      </div>
    </section>
  );
}
