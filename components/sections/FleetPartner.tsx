"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

// Official Fleet Operator Clients powered by sevaqu.com FMS
const fleetClients = [
  { name: "Sarnaz Transport", logo: "/assets/logo/partners/trimmed/sarnaz-transport.png", fleetSize: "120 Armada", type: "Taksi Reguler", category: "reguler" },
  { name: "Arkatama Trans Indonesia", logo: "/assets/logo/partners/trimmed/arkatama-trans-indonesia.png", fleetSize: "85 Armada", type: "Executive Fleet", category: "executive" },
  { name: "Sinergi Aletra", logo: "/assets/logo/partners/trimmed/sinergi-aletra.png", fleetSize: "210 Armada", type: "EV Fleet", category: "ev" },
  { name: "Express Group", logo: "/assets/logo/partners/trimmed/express-group.png", fleetSize: "450 Armada", type: "Urban Taxi", category: "reguler" },
  { name: "TransGO", logo: "/assets/logo/partners/trimmed/transgo.png", fleetSize: "95 Armada", type: "Airport Shuttle", category: "shuttle" },
  { name: "LTI Logistics", logo: "/assets/logo/partners/trimmed/lti.png", fleetSize: "140 Armada", type: "Van & Cargo", category: "shuttle" },
  { name: "PT Satu Kosong 7", logo: "/assets/logo/partners/trimmed/pt-satu-kosong-7.png", fleetSize: "75 Armada", type: "City Cab", category: "reguler" },
  { name: "TOP Trans", logo: "/assets/logo/partners/trimmed/top.png", fleetSize: "110 Armada", type: "Urban Taxi", category: "reguler" },
  { name: "OBCB", logo: "/assets/logo/partners/trimmed/obcb.png", fleetSize: "60 Armada", type: "Shuttle Antarkota", category: "shuttle" },
  { name: "KKA Transport", logo: "/assets/logo/partners/trimmed/kka.png", fleetSize: "90 Armada", type: "Executive", category: "executive" },
  { name: "Tiga Pemuda Bersama", logo: "/assets/logo/partners/trimmed/tiga-pemuda-bersama.png", fleetSize: "130 Armada", type: "Taksi Reguler", category: "reguler" },
  { name: "Privot", logo: "/assets/logo/partners/trimmed/privot.png", fleetSize: "50 Armada", type: "VIP Transfer", category: "executive" },
];

// Telemetry live feed entries from sevaqu FMS with full diagnostic metrics
const liveTelemetryData = [
  {
    unitId: "SEV-0821-JKT",
    model: "Transmover EV Edition",
    operator: "Sinergi Aletra",
    driver: "Bambang Sudirman",
    status: "IN_TRIP",
    speed: "42 km/h",
    ping: "2s",
    loc: "-6.2146, 106.8451",
    batteryFuel: "84% (Baterai BEV)",
    temp: "32°C (Pack Normal)",
    kirExpiry: "14 Nov 2027",
    odometer: "48.210 KM",
  },
  {
    unitId: "SEV-0419-BDG",
    model: "Avanza Trans 1.5L",
    operator: "Sarnaz Transport",
    driver: "Ahmad Ridwan",
    status: "DISPATCHED",
    speed: "28 km/h",
    ping: "1s",
    loc: "-6.9175, 107.6191",
    batteryFuel: "68% (BBM Pertalite)",
    temp: "88°C (Coolant OK)",
    kirExpiry: "22 Mei 2027",
    odometer: "82.450 KM",
  },
  {
    unitId: "SEV-1102-SBY",
    model: "Innova Zenix Hybrid",
    operator: "Arkatama Trans",
    driver: "Dedi Kusuma",
    status: "STANDBY",
    speed: "0 km/h",
    ping: "4s",
    loc: "-7.2575, 112.7521",
    batteryFuel: "92% (BBM + Pack OK)",
    temp: "45°C (Idle)",
    kirExpiry: "08 Agu 2027",
    odometer: "31.900 KM",
  },
  {
    unitId: "SEV-0914-DPS",
    model: "BYD e6 Fleet",
    operator: "Express Group",
    driver: "I Wayan Suarna",
    status: "IN_TRIP",
    speed: "56 km/h",
    ping: "2s",
    loc: "-8.7482, 115.1672",
    batteryFuel: "61% (Baterai BEV)",
    temp: "34°C (Normal)",
    kirExpiry: "19 Des 2027",
    odometer: "59.120 KM",
  },
];

const fmsSpecs = [
  { label: "Protokol Telemetri", val: "MQTT / TLS 1.3 over 4G LTE" },
  { label: "Interval Ping GPS", val: "2 - 5 Detik Realtime" },
  { label: "Dukungan Port OBD-II", val: "J1939, OBD-II CanBus, CAN 2.0B" },
  { label: "Sensor Suhu & Kabin", val: "Akurasi ±0.5°C dengan Dashcam IR" },
  { label: "API Integrasi Argo", val: "RESTful JSON / Webhook Event Dispatch" },
  { label: "SLA Uptime Platform", val: "99.98% High Availability" },
];

export default function FleetPartner() {
  const [selectedUnit, setSelectedUnit] = useState(liveTelemetryData[0]);
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const filteredClients = filterCategory === "all"
    ? fleetClients
    : fleetClients.filter((c) => c.category === filterCategory);

  return (
    <section id="fleet-partner" className="py-20 bg-white border-b border-slate-200">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[11px] font-mono text-[#225FD2] mb-3">
              PLATFORM FLEET MANAGEMENT SYSTEM // MITRA OPERATOR
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Mitra Fleet Operator & Ekosistem sevaqu.com
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-xl leading-relaxed">
              SEVA Taxi terhubung penuh dengan teknologi telematika{" "}
              <a 
                href="https://sevaqu.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#225FD2] font-semibold underline inline-flex items-center gap-1"
              >
                sevaqu.com <ExternalLink className="w-3 h-3" />
              </a>{" "}
              untuk pelacakan telemetri real-time, perawatan terencana, dan audit kepatuhan pengemudi.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://sevaqu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <span>Dokumentasi FMS</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="/driver"
              className="btn-primary"
            >
              <span>Daftarkan Operator</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 70/30 Asymmetric Command Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          
          {/* Left Panel: FMS Live Architecture & Specs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main FMS Overview Box */}
            <div className="surface-card p-6 bg-white border border-slate-200 rounded-2xl shadow-xs">
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 mb-5">
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                    MODUL OPERASIONAL RESMI
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Integrasi Dua Arah: SEVA Taxi App ↔ sevaqu.com
                  </h3>
                </div>
                <span className="badge-mono">
                  API v2.4 CONNECTED
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Fleet operator yang bergabung dengan SEVA tidak perlu mengganti sistem perangkat keras. Platform <strong className="text-slate-900">sevaqu.com</strong> memetakan order penumpang langsung ke unit armada terdekat, mencatat konsumsi BBM/listrik via OBD-II, serta merekonsiliasi bagi hasil secara otomatis tanpa intervensi manual.
              </p>

              {/* Hardware & Protocol Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {fmsSpecs.map((spec) => (
                  <div key={spec.label} className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <div className="text-[10px] font-mono uppercase text-slate-500 mb-1">{spec.label}</div>
                    <div className="text-xs font-mono font-semibold text-slate-900 tabular">{spec.val}</div>
                  </div>
                ))}
              </div>

              {/* Functional Key Feature Rows */}
              <div className="border-t border-slate-100 pt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#225FD2] mt-1.5 flex-shrink-0"></div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Dispatch Terotomatisasi & Zonasi Armada</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Penetapan order berbasis radius penjemputan terpendek untuk menekan dead-mileage kendaraan.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Log Inspeksi Digital & Pengingat Servis (KIR/STNK)</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Checklist fisik armada wajib diunggah driver sebelum unit dapat menerima order ride di aplikasi.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Operator Telemetry Log Preview with Interactive Row Click */}
            <div className="surface-card p-5 bg-white border border-slate-200 rounded-2xl shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-900 font-semibold">
                    Live Telemetry Stream // sevaqu.com
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">Klik baris untuk inspeksi unit</span>
              </div>

              {/* Tabular data rows */}
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-[10px] font-mono text-slate-500 uppercase">
                      <th className="pb-2">Unit ID</th>
                      <th className="pb-2">Mitra Operator</th>
                      <th className="pb-2">Status</th>
                      <th className="pb-2 text-right">Kecepatan</th>
                      <th className="pb-2 text-right">Ping</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs font-mono">
                    {liveTelemetryData.map((unit) => {
                      const isSelected = selectedUnit.unitId === unit.unitId;
                      return (
                        <tr
                          key={unit.unitId}
                          onClick={() => setSelectedUnit(unit)}
                          className={`cursor-pointer transition-colors ${
                            isSelected
                              ? "bg-blue-50/80 font-semibold text-slate-900"
                              : "hover:bg-slate-50 text-slate-700"
                          }`}
                        >
                          <td className="py-2.5 font-bold text-[#225FD2]">{unit.unitId}</td>
                          <td className="py-2.5 font-sans">{unit.operator}</td>
                          <td className="py-2.5">
                            <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                              unit.status === "IN_TRIP"
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                : unit.status === "DISPATCHED"
                                ? "bg-blue-50 text-[#225FD2] border border-blue-200"
                                : "bg-slate-100 text-slate-600"
                            }`}>
                              {unit.status}
                            </span>
                          </td>
                          <td className="py-2.5 text-right tabular">{unit.speed}</td>
                          <td className="py-2.5 text-right tabular text-slate-500">{unit.ping}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Expanded Diagnostic Detail Box */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 mb-3">
                  <span className="text-[10px] uppercase text-slate-500">Inspeksi OBD-II Terpilih:</span>
                  <span className="text-slate-900 font-bold">{selectedUnit.unitId} ({selectedUnit.model})</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px]">
                  <div>
                    <div className="text-slate-500 text-[10px]">Driver Aktif</div>
                    <div className="text-slate-900 font-sans font-semibold mt-0.5">{selectedUnit.driver}</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-[10px]">Level Daya / BBM</div>
                    <div className="text-slate-900 font-semibold mt-0.5">{selectedUnit.batteryFuel}</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-[10px]">Status Suhu</div>
                    <div className="text-slate-900 font-semibold mt-0.5">{selectedUnit.temp}</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-[10px]">Masa Uji KIR</div>
                    <div className="text-emerald-700 font-semibold mt-0.5">{selectedUnit.kirExpiry}</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Panel: Official Client Operators & Integration (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Operator Client Roster */}
            <div className="surface-card p-6 bg-white border border-slate-200 rounded-2xl shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Klien Operator Terdaftar
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    12 Kemitraan armada resmi terhubung via sevaqu FMS.
                  </p>
                </div>
                <div className="text-[10px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  100% RESMI
                </div>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["all", "reguler", "ev", "executive", "shuttle"].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setFilterCategory(cat)}
                    className={`px-3 py-1 rounded-full text-[11px] font-mono uppercase transition-colors border ${
                      filterCategory === cat
                        ? "bg-blue-50 border-blue-400 text-[#225FD2] font-semibold"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {cat === "all" ? "Semua" : cat}
                  </button>
                ))}
              </div>

              {/* Clients Grid */}
              <div className="grid grid-cols-2 gap-2.5 max-h-[380px] overflow-y-auto pr-1">
                {filteredClients.map((client) => (
                  <div 
                    key={client.name} 
                    className="p-3 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-2xs transition-all"
                  >
                    <div className="w-8 h-8 relative mb-2 bg-white rounded-lg p-1 border border-slate-200 flex items-center justify-center">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={28}
                        height={28}
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <div className="text-xs font-bold text-slate-900 truncate">{client.name}</div>
                    <div className="flex items-center justify-between mt-1 text-[10px] font-mono text-slate-500">
                      <span className="tabular">{client.fleetSize}</span>
                      <span className="text-slate-700 font-medium truncate max-w-[80px]">{client.type}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* FMS Integration Guarantee Card */}
              <div className="mt-4 p-4 bg-blue-50/50 border border-blue-100 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-900">SLA & Keamanan Operasi Terverifikasi</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Semua unit armada dari operator terdaftar wajib memenuhi standar uji kelayakan fisik berkala, sertifikasi pengemudi, dan monitoring kecepatan aktif sevaqu untuk beroperasi di SEVA Taxi.
                </p>
                <div className="mt-3 pt-3 border-t border-blue-100 flex items-center justify-between text-[11px] font-mono text-slate-600">
                  <span>Penyedia Solusi:</span>
                  <a href="https://sevaqu.com" target="_blank" rel="noopener noreferrer" className="text-[#225FD2] font-semibold hover:underline flex items-center gap-1">
                    PT Seva Qu Indonesia <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
