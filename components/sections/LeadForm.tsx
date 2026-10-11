"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { CONTACT_WHATSAPP_URL, SUPPORT_EMAIL } from "@/lib/site";

type Variant = "b2b" | "fleet" | "merchant";

interface Field {
  name: string;
  label: string;
  type: "text" | "tel" | "email" | "select" | "textarea";
  placeholder?: string;
  options?: string[];
  required?: boolean;
  wide?: boolean;
}

const CONFIG: Record<
  Variant,
  { id: string; badge: string; title: string; intro: string; subject: string; opening: string; fields: Field[] }
> = {
  b2b: {
    id: "ajukan-kemitraan",
    badge: "FORMULIR KEMITRAAN KORPORAT",
    title: "Ajukan Kemitraan Korporat",
    intro: "Ceritakan kebutuhan mobilitas perusahaan Anda. Tim SEVA akan menghubungi untuk simulasi biaya dan penawaran.",
    subject: "Kemitraan B2B Corporate SEVA",
    opening: "Halo Tim SEVA, saya ingin mengajukan kemitraan korporat (B2B).",
    fields: [
      { name: "nama", label: "Nama lengkap", type: "text", placeholder: "Nama Anda", required: true },
      { name: "perusahaan", label: "Perusahaan / instansi", type: "text", placeholder: "PT / CV / instansi", required: true },
      { name: "whatsapp", label: "No. WhatsApp", type: "tel", placeholder: "08xx xxxx xxxx", required: true },
      { name: "email", label: "Email kantor", type: "email", placeholder: "nama@perusahaan.co.id" },
      {
        name: "kebutuhan",
        label: "Kebutuhan utama",
        type: "select",
        required: true,
        wide: true,
        options: [
          "Voucher perjalanan karyawan",
          "Antar-jemput tamu / hotel / bandara",
          "Pengiriman dokumen & paket (SEVA Send)",
          "Armada acara / MICE",
          "Lainnya",
        ],
      },
      { name: "catatan", label: "Catatan", type: "textarea", placeholder: "Perkiraan jumlah karyawan, rute, atau jadwal", wide: true },
    ],
  },
  fleet: {
    id: "daftar-operator",
    badge: "FORMULIR FLEET OPERATOR",
    title: "Daftarkan Armada Anda",
    intro: "Isi data singkat perusahaan dan armada Anda. Tim kemitraan SEVA akan menghubungi untuk proses verifikasi dan integrasi.",
    subject: "Kemitraan Fleet Operator SEVA",
    opening: "Halo Tim SEVA, saya ingin mendaftarkan armada sebagai fleet operator.",
    fields: [
      { name: "nama", label: "Nama penanggung jawab", type: "text", placeholder: "Nama Anda", required: true },
      { name: "perusahaan", label: "Nama perusahaan", type: "text", placeholder: "PT / CV / Koperasi", required: true },
      { name: "whatsapp", label: "No. WhatsApp", type: "tel", placeholder: "08xx xxxx xxxx", required: true },
      { name: "kota", label: "Kota operasional", type: "text", placeholder: "Contoh: Jakarta Selatan" },
      {
        name: "jumlah",
        label: "Jumlah armada",
        type: "select",
        required: true,
        options: ["1–10 unit", "11–50 unit", "51–200 unit", "Lebih dari 200 unit"],
      },
      {
        name: "jenis",
        label: "Jenis armada",
        type: "select",
        required: true,
        options: ["Taksi reguler", "Rental mobil", "Shuttle", "Mobil listrik (EV)", "Lainnya"],
      },
    ],
  },
  merchant: {
    id: "daftar-merchant",
    badge: "FORMULIR MERCHANT SEVA FOOD",
    title: "Daftar Lebih Awal sebagai Merchant",
    intro: "Daftarkan resto atau usaha kuliner Anda untuk onboarding SEVA Food. Tim kami akan menghubungi saat pendaftaran dibuka.",
    subject: "Pendaftaran Merchant SEVA Food",
    opening: "Halo Tim SEVA, saya ingin mendaftar sebagai merchant SEVA Food.",
    fields: [
      { name: "nama", label: "Nama pemilik / PIC", type: "text", placeholder: "Nama Anda", required: true },
      { name: "usaha", label: "Nama usaha", type: "text", placeholder: "Nama resto / kafe / UMKM", required: true },
      { name: "whatsapp", label: "No. WhatsApp", type: "tel", placeholder: "08xx xxxx xxxx", required: true },
      { name: "kota", label: "Lokasi usaha", type: "text", placeholder: "Contoh: Depok, Margonda" },
      {
        name: "kategori",
        label: "Kategori",
        type: "select",
        required: true,
        wide: true,
        options: ["Restoran", "Kafe & minuman", "UMKM kuliner rumahan", "Lainnya"],
      },
    ],
  },
};

const STEPS = ["Isi formulir singkat", "Kirim lewat WhatsApp", "Tim SEVA menghubungi Anda"];

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#225FD2] focus:outline-none focus:ring-2 focus:ring-blue-500/15";

export default function LeadForm({ variant }: { variant: Variant }) {
  const cfg = CONFIG[variant];
  const [values, setValues] = useState<Record<string, string>>({});
  const [error, setError] = useState("");
  const [sentUrl, setSentUrl] = useState("");

  const set = (name: string, value: string) => setValues((v) => ({ ...v, [name]: value }));

  const buildMessage = () =>
    [
      cfg.opening,
      "",
      ...cfg.fields
        .filter((f) => values[f.name]?.trim())
        .map((f) => `${f.label}: ${values[f.name].trim()}`),
    ].join("\n");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const phone = (values.whatsapp ?? "").replace(/[^\d+]/g, "");
    if (phone.replace(/\D/g, "").length < 9) {
      setError("Nomor WhatsApp belum valid.");
      return;
    }
    setError("");
    const url = `${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent(buildMessage())}`;
    setSentUrl(url);
    track("lead_submit", { form: variant });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(cfg.subject)}&body=${encodeURIComponent(buildMessage())}`;

  return (
    <section id={cfg.id} className="scroll-mt-24 py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] gap-10 lg:gap-16 items-start">
        {/* Intro */}
        <div className="lg:pt-4">
          <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-[#225FD2]">
            {cfg.badge}
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">{cfg.title}</h2>
          <p className="mt-2 max-w-md text-sm text-slate-600 leading-relaxed">{cfg.intro}</p>

          <ol className="mt-6 space-y-3">
            {STEPS.map((step, i) => (
              <li key={step} className="flex items-center gap-3 text-sm text-slate-700">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-xs font-bold text-[#225FD2]">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>

          <p className="mt-6 text-xs text-slate-500">
            Lebih suka email?{" "}
            <a href={mailto} className="font-semibold text-[#225FD2] hover:underline">
              {SUPPORT_EMAIL}
            </a>
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-[0_10px_25px_-12px_rgba(34,95,210,0.15)]"
          noValidate={false}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cfg.fields.map((f) => {
              const id = `${cfg.id}-${f.name}`;
              return (
                <div key={f.name} className={f.wide ? "sm:col-span-2" : ""}>
                  <label htmlFor={id} className="mb-1.5 block text-xs font-semibold text-slate-700">
                    {f.label}
                    {!f.required && <span className="font-normal text-slate-500"> (opsional)</span>}
                  </label>
                  {f.type === "select" ? (
                    <select
                      id={id}
                      required={f.required}
                      value={values[f.name] ?? ""}
                      onChange={(e) => set(f.name, e.target.value)}
                      className={`${inputClass.replace("text-slate-900", values[f.name] ? "text-slate-900" : "text-slate-400")} cursor-pointer`}
                    >
                      <option value="" disabled>
                        Pilih salah satu
                      </option>
                      {f.options?.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  ) : f.type === "textarea" ? (
                    <textarea
                      id={id}
                      rows={3}
                      required={f.required}
                      placeholder={f.placeholder}
                      value={values[f.name] ?? ""}
                      onChange={(e) => set(f.name, e.target.value)}
                      className={`${inputClass} resize-y`}
                    />
                  ) : (
                    <input
                      id={id}
                      type={f.type}
                      required={f.required}
                      placeholder={f.placeholder}
                      autoComplete={f.type === "tel" ? "tel" : f.type === "email" ? "email" : f.name === "nama" ? "name" : "off"}
                      inputMode={f.type === "tel" ? "tel" : undefined}
                      value={values[f.name] ?? ""}
                      onChange={(e) => set(f.name, e.target.value)}
                      className={inputClass}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {error && (
            <p role="alert" className="mt-4 text-xs font-semibold text-rose-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#225FD2] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#194cb0] cursor-pointer"
          >
            Kirim via WhatsApp
            <ArrowRight className="h-4 w-4" />
          </button>

          {sentUrl ? (
            <p className="mt-3 flex items-start gap-2 text-xs text-emerald-700" role="status">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              <span>
                WhatsApp dibuka di tab baru. Belum terbuka?{" "}
                <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                  Buka WhatsApp
                </a>{" "}
                atau{" "}
                <a href={mailto} className="font-semibold underline">
                  kirim lewat email
                </a>
                .
              </span>
            </p>
          ) : (
            <p className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-500">
              <Mail className="h-3 w-3" />
              Isian tidak disimpan di server; Anda mengirimnya sendiri ke tim SEVA.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
