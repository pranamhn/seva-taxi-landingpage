// Versi Inggris Pusat Bantuan (FAQ). `id` sama dengan lib/faq.ts — perbarui keduanya bersamaan.
import { SUPPORT_EMAIL } from "@/lib/site";
import type { FaqCategory, FaqItem } from "@/lib/faq";

export const FAQ_CATEGORY_LABELS_EN: Record<FaqCategory, string> = {
  booking: "Booking & Fares",
  send: "SEVA Send & Food",
  ewallet: "SEVA eWallet & Payments",
  driver: "Driver Partners",
  safety: "Safety & Account",
  partner: "Fleet, Corporate & Merchants",
};

export const FAQ_LIST_EN: FaqItem[] = [
  // Booking & Fares
  {
    id: "booking-cara-pesan",
    category: "booking",
    question: "How do I book a trip in the SEVA app?",
    answer:
      "Download the SEVA app from Google Play or the Apple App Store and sign in with your phone number. Set your pickup point and destination on the map, choose a service (SEVA Ride for motorbike, SEVA Car for a car, or SEVA Send for parcels), check the fare, and confirm. The nearest driver will head to your pickup point.",
    link: { href: "/how-it-works", label: "See the booking guide" },
  },
  {
    id: "booking-hitung-tarif",
    category: "booking",
    question: "How does SEVA calculate fares?",
    answer:
      "The fare is a base fare plus a per-kilometre charge for the route distance shown in the app: SEVA Ride from Rp 8,000 + Rp 2,500/km, SEVA Car from Rp 9,500 + Rp 6,200/km, and SEVA Send from Rp 10,000 + Rp 3,000/km. The total is shown in the app before you confirm.",
    link: { href: "/services", label: "Compare fares for all services" },
  },
  {
    id: "booking-lonjakan",
    category: "booking",
    question: "Do fares go up in rush hour or when it rains?",
    answer:
      "No. SEVA uses a fixed fare shown from the start of your booking, with no surge in rush hour or rain. Extra costs outside the trip fare, such as tolls or parking, are charged at their actual cost.",
  },
  {
    id: "booking-tol-parkir",
    category: "booking",
    question: "Who pays for tolls and parking?",
    answer:
      "The fare in the app is the trip fare. Tolls and official parking at airports, stations, or buildings are paid by the passenger at the actual cost incurred during the trip.",
  },
  {
    id: "booking-batal",
    category: "booking",
    question: "Is there a cancellation fee?",
    answer:
      "For SEVA Car, cancelling within the first 5 minutes after booking is free. Cancellation terms after that time, and for other services, are shown in the app when you book. Repeated cancellations without a good reason may lead to account restrictions.",
    link: { href: "/terms", label: "Read the Terms & Conditions" },
  },
  {
    id: "booking-bagasi",
    category: "booking",
    question: "How much luggage can I bring?",
    answer:
      "SEVA Ride carries 1 passenger with 1 backpack or laptop bag (max. 10 kg). SEVA Car carries up to 4 adults with about 2 medium suitcases and 2 backpacks. For items without a passenger, use SEVA Send.",
  },
  {
    id: "booking-area",
    category: "booking",
    question: "Where does SEVA operate?",
    answer:
      "SEVA currently serves Greater Jakarta: Central, North, West, South, and East Jakarta, Tangerang City, South Tangerang, Bogor City and Regency, Depok, and Bekasi City and Regency.",
    link: { href: "/cities", label: "See the service area map" },
  },
  {
    id: "booking-luar-kota",
    category: "booking",
    question: "Can I book a trip outside Greater Jakarta?",
    answer:
      "Yes, with SEVA Car, as long as the pickup point is inside Greater Jakarta and the destination is agreed in the app before the trip starts.",
  },
  {
    id: "booking-bandara",
    category: "booking",
    question: "Can SEVA pick me up at airports and stations?",
    answer:
      "Yes. Pickups are available in the arrival areas of Soekarno-Hatta Airport (Terminals 1, 2, and 3), Halim Perdanakusuma Airport, Whoosh Halim high-speed rail station, and around KRL, MRT, and LRT stations in Greater Jakarta.",
  },

  // SEVA Send & Food
  {
    id: "send-batas",
    category: "send",
    question: "What are the weight and size limits for SEVA Send?",
    answer:
      "Up to 20 kg per delivery, with a parcel size of up to 40 × 40 × 40 cm so it can be carried safely by motorbike. Parcels go straight from pickup to the recipient with no warehouse stops.",
    link: { href: "/services/send", label: "SEVA Send details" },
  },
  {
    id: "send-terlarang",
    category: "send",
    question: "Which items can't be sent?",
    answer:
      "Explosive or flammable substances, pressurised gas, petrol, toxic chemicals, sharp weapons or firearms, narcotics, illegal goods, and animals or other living things. Items over 20 kg or of a size that makes the motorbike unstable also can't be sent.",
  },
  {
    id: "send-lacak",
    category: "send",
    question: "How do I track a parcel and confirm it was delivered?",
    answer:
      "You can follow the courier in real time on the in-app map and share a tracking link with the recipient. Once delivered, a handover photo and the recipient's digital signature appear in your order history.",
  },
  {
    id: "food-kapan",
    category: "send",
    question: "When will SEVA Food be available?",
    answer:
      "SEVA Food is still onboarding merchants and can't be ordered yet. The launch will be announced in the SEVA app and on Instagram @seva.taxi.",
    link: { href: "/services/food", label: "About SEVA Food" },
  },

  // SEVA eWallet & Payments
  {
    id: "ewallet-apa",
    category: "ewallet",
    question: "What is SEVA eWallet?",
    answer:
      "SEVA eWallet is the digital wallet inside the SEVA app for paying for trips and deliveries. Payment is deducted automatically when the trip ends, and every transaction is recorded in your app history.",
  },
  {
    id: "ewallet-topup",
    category: "ewallet",
    question: "How do I top up my SEVA eWallet?",
    answer:
      "Open the Wallet menu in the SEVA app, choose Top Up, and follow one of the available methods, such as bank transfer or QRIS. The active methods are always shown in the app.",
  },
  {
    id: "ewallet-metode",
    category: "ewallet",
    question: "Which payment methods are accepted?",
    answer:
      "You can pay with SEVA eWallet, QRIS (from any e-wallet or mobile banking app that supports QRIS), or cash directly to your driver.",
  },
  {
    id: "ewallet-kuitansi",
    category: "ewallet",
    question: "Do I get a receipt for expense claims?",
    answer:
      "Yes. A digital receipt is saved automatically in your trip history and can be downloaded as a PDF for business expense claims.",
  },

  // Driver Partners
  {
    id: "driver-bagi-hasil",
    category: "driver",
    question: "How does the revenue share work for driver partners?",
    answer:
      "Driver partners keep 95% of trip earnings; the platform fee is only 5%, nothing more. Earnings can be paid out daily to a bank account in the driver's name, with no hidden deductions.",
    link: { href: "/partner/driver", label: "Become a driver partner" },
  },
  {
    id: "driver-syarat",
    category: "driver",
    question: "What do I need to become a SEVA driver?",
    answer:
      "An Indonesian citizen aged 18–60 with an original national ID (KTP), a valid SIM C (motorbike) or SIM A (car) licence, a valid police clearance (SKCK), a bank account in your name, valid vehicle registration (STNK) with tax paid, and an Android or iOS smartphone with GPS. Vehicles must be 2017 or newer.",
  },
  {
    id: "driver-daftar",
    category: "driver",
    question: "How much does sign-up cost and how long does it take?",
    answer:
      "Sign-up is free and 100% online in the SEVA Driver app. Once you upload your documents, the SEVA team verifies them within 24 hours and sends an account activation notification.",
  },
  {
    id: "driver-jam-kerja",
    category: "driver",
    question: "Are driver working hours fixed?",
    answer:
      "No. Drivers choose when to start and stop by switching the online button on or off in the app, so it works as a main income or a side job.",
  },

  // Safety & Account
  {
    id: "safety-fitur",
    category: "safety",
    question: "Which safety features are available during a trip?",
    answer:
      "The SEVA app has an emergency (SOS) button to call the 112 emergency line or the emergency contact you have saved, Trip Sharing so family can follow your route live, and phone number masking when you contact your driver.",
    link: { href: "/safety", label: "See our safety standards" },
  },
  {
    id: "safety-tertinggal",
    category: "safety",
    question: "What if I leave something in the vehicle?",
    answer:
      "Open Trip History, select the trip, and contact the driver through the app. You can also contact the SEVA help team on WhatsApp or by email with your trip ID.",
  },
  {
    id: "safety-otp",
    category: "safety",
    question: "How do I keep my SEVA account secure?",
    answer:
      "Never share your OTP code with anyone, including people claiming to be from SEVA. Contact the SEVA help team right away if you suspect someone has used your account without permission.",
  },
  {
    id: "safety-data",
    category: "safety",
    question: "How does SEVA protect my personal data?",
    answer:
      "Data is processed in line with Indonesia's Personal Data Protection Law. Your phone number is masked when you talk to drivers, data is only shared as needed to fulfil your order, and SEVA does not sell your personal data.",
    link: { href: "/privacy", label: "Read the Privacy Policy" },
  },
  {
    id: "safety-hapus-akun",
    category: "safety",
    question: "How do I delete my account?",
    answer: `You can stop using the service at any time and request account deletion through SEVA's help channels (WhatsApp or ${SUPPORT_EMAIL}). We may ask you to verify your identity before processing the request.`,
  },

  // Fleet, Corporate & Merchants
  {
    id: "partner-fleet",
    category: "partner",
    question: "How can fleet owners join as a fleet operator?",
    answer:
      "Companies that own taxi, rental, or shuttle fleets can apply through the SEVA team. After we verify the business licence, vehicle ownership, and roadworthiness tests (KIR), the fleet is integrated and can be monitored in the Fleet Management System at sevaqu.com.",
  },
  {
    id: "partner-b2b",
    category: "partner",
    question: "Can companies open a corporate account?",
    answer:
      "Yes. Corporate accounts support staff travel vouchers, one central monthly invoice with tax invoices, and document delivery via SEVA Send. Apply using the form on the B2B Partners page.",
    link: { href: "/partner/b2b#ajukan-kemitraan", label: "Apply for a corporate account" },
  },
  {
    id: "partner-merchant",
    category: "partner",
    question: "How do I register my restaurant for SEVA Food?",
    answer:
      "Restaurant, café, and home food business owners can register early using the merchant form on the SEVA Food page. Registration is free, and the SEVA team will contact you when onboarding opens.",
    link: { href: "/services/food#daftar-merchant", label: "Register as a merchant" },
  },
];
