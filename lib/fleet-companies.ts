// Sumber data tunggal mitra fleet operator (dipakai direktori, halaman fleet, dan ringkasan angka).

export interface FleetCompany {
  name: string;
  logo?: string;
  status: "Active" | "Inactive";
  subscription: "Active" | "Unpaid" | "Expired";
  vehicles: number;
  category: "taxi" | "rental" | "premium" | "ev";
  typeLabel: string;
  typeLabelEn: string;
  share: string;
  description: string;
  descriptionEn: string;
}

export const FLEET_COMPANIES: FleetCompany[] = [
  {
    name: "PT. Satu Kosong Tujuh",
    logo: "/assets/logo/partners/trimmed/pt-satu-kosong-7.png",
    status: "Active",
    subscription: "Active",
    vehicles: 2668,
    category: "taxi",
    typeLabel: "Taksi Reguler & Perkotaan",
    typeLabelEn: "Regular & City Taxi",
    share: "60.3%",
    description: "Mitra operator armada taksi perkotaan terbesar dalam jaringan SEVA.",
    descriptionEn: "The largest city taxi fleet operator in the SEVA network.",
  },
  {
    name: "PT Transgo Mobility Rental",
    logo: "/assets/logo/partners/trimmed/transgo.png",
    status: "Active",
    subscription: "Active",
    vehicles: 1126,
    category: "rental",
    typeLabel: "Rental & Airport Mobility",
    typeLabelEn: "Rental & Airport Mobility",
    share: "25.4%",
    description: "Spesialis persewaan armada bandara dan korporasi terstandar.",
    descriptionEn: "Specialist in standardised airport and corporate vehicle rental.",
  },
  {
    name: "PT Express Trasindo Utama, Tbk",
    logo: "/assets/logo/partners/trimmed/express-group.png",
    status: "Active",
    subscription: "Active",
    vehicles: 386,
    category: "taxi",
    typeLabel: "Taksi Publik Reguler",
    typeLabelEn: "Regular Public Taxi",
    share: "8.7%",
    description: "Operator taksi publik reguler.",
    descriptionEn: "Regular public taxi operator.",
  },
  {
    name: "PT. Karya Kreatif Andalan",
    logo: "/assets/logo/partners/trimmed/kka.png",
    status: "Active",
    subscription: "Active",
    vehicles: 92,
    category: "rental",
    typeLabel: "Car Rental & On-Demand",
    typeLabelEn: "Car Rental & On-Demand",
    share: "2.1%",
    description: "Penyedia mobil rental harian dan bulanan dengan perawatan berkala.",
    descriptionEn: "Daily and monthly car rental with regular maintenance.",
  },
  {
    name: "PT Luxury Trans Indonesia",
    logo: "/assets/logo/partners/trimmed/lti.png",
    status: "Active",
    subscription: "Active",
    vehicles: 55,
    category: "premium",
    typeLabel: "Premium Fleet & VIP Transfer",
    typeLabelEn: "Premium Fleet & VIP Transfer",
    share: "1.2%",
    description: "Layanan transportasi eksekutif untuk perjalanan bisnis dan pariwisata.",
    descriptionEn: "Executive transport for business and leisure travel.",
  },
  {
    name: "PT. Sinergi Armada Grup",
    logo: "/assets/logo/partners/trimmed/sinergi-aletra.png",
    status: "Active",
    subscription: "Active",
    vehicles: 39,
    category: "taxi",
    typeLabel: "Armada Taksi & Shuttle",
    typeLabelEn: "Taxi & Shuttle Fleet",
    share: "0.9%",
    description: "Konsorsium pengelola armada transportasi penumpang metropolitan.",
    descriptionEn: "A consortium managing metropolitan passenger transport fleets.",
  },
  {
    name: "PT. Empati Persona Djaya Bersama",
    logo: "/assets/logo/partners/empati-persona-djaya.png",
    status: "Active",
    subscription: "Active",
    vehicles: 14,
    category: "rental",
    typeLabel: "Shuttle & Car Rental",
    typeLabelEn: "Shuttle & Car Rental",
    share: "0.3%",
    description: "Armada operasional pendukung mobilitas harian dan pengantaran.",
    descriptionEn: "An operational fleet supporting daily trips and deliveries.",
  },
  {
    name: "Sarnaz Transport Indonesia",
    logo: "/assets/logo/partners/trimmed/sarnaz-transport.png",
    status: "Active",
    subscription: "Active",
    vehicles: 10,
    category: "rental",
    typeLabel: "Transportasi Penumpang",
    typeLabelEn: "Passenger Transport",
    share: "0.2%",
    description: "Operator armada regional dengan fokus kenyamanan perjalanan.",
    descriptionEn: "A regional fleet operator focused on passenger comfort.",
  },
  {
    name: "RENEWA GREEN ENERGY",
    logo: "/assets/logo/partners/trimmed/renewa.png",
    status: "Active",
    subscription: "Active",
    vehicles: 0,
    category: "ev",
    typeLabel: "Mobil Listrik (BEV)",
    typeLabelEn: "Electric Vehicles (BEV)",
    share: "0.0%",
    description: "Mitra transisi armada masa depan ramah lingkungan bebas emisi (dalam tahap penyiapan unit).",
    descriptionEn: "A zero-emission electric fleet partner (vehicles being prepared).",
  },
];

export const FLEET_COMPANY_COUNT = FLEET_COMPANIES.length;
export const FLEET_TOTAL_VEHICLES = FLEET_COMPANIES.reduce((sum, c) => sum + c.vehicles, 0);
