import type { Article } from "@/lib/articles";
import { FARE_NOTE_EN } from "./shared";

export const PART_2: Article[] = [
  {
    slug: "cara-daftar-driver-ojek-online",
    title: "How to Become a SEVA Motorbike & Car Driver: Requirements and Steps",
    seoTitle: "How to Become a SEVA Driver",
    description:
      "Want to become a driver partner? Here are the document and vehicle requirements, the online sign-up steps, and the 95% revenue share for SEVA drivers.",
    category: "Partners & Business",
    published: "2026-10-11",
    readMinutes: 4,
    keywords: ["how to become a ride hailing driver", "ojek driver requirements", "online taxi driver sign up"],
    blocks: [
      {
        type: "p",
        text: "Driving with SEVA can be your main income or a side job. Sign-up is free and fully online from your phone.",
      },
      { type: "h2", text: "Why drive with SEVA?" },
      {
        type: "ul",
        items: [
          "Keep 95% of trip earnings; the platform fee is only 5%, nothing more.",
          "Daily payouts to a bank account in your name.",
          "Set your own working hours.",
          "Weekly target bonuses and rush-hour incentives.",
        ],
      },
      { type: "h2", text: "Document requirements" },
      {
        type: "ul",
        items: [
          "Indonesian citizen aged 18–60 with a valid original national ID (KTP).",
          "A valid SIM C (motorbike) or SIM A (car) driving licence.",
          "A valid police clearance certificate (SKCK).",
          "A bank account in your own name.",
        ],
      },
      { type: "h2", text: "Vehicle and device requirements" },
      {
        type: "ul",
        items: [
          "Valid vehicle registration (STNK) with tax paid.",
          "A motorbike or MPV from 2017 or newer.",
          "An Android or iOS smartphone with GPS on.",
          "A clean, roadworthy vehicle.",
        ],
      },
      { type: "h2", text: "Sign-up steps" },
      {
        type: "ol",
        items: [
          "Download the SEVA Driver app from Google Play or the Apple App Store.",
          "Enter your phone number, then take clear photos of your KTP, SIM, STNK, and SKCK.",
          "The SEVA team verifies your documents within 24 hours and sends an activation notification.",
          "Once your account is active, go online and start accepting orders.",
        ],
      },
      {
        type: "cta",
        text: "See all the benefits and start your driver partner sign-up.",
        href: "/partner/driver",
        label: "Become a driver",
      },
    ],
    related: [
      { href: "/partner/driver", label: "Driver partner page" },
      { href: "/faq", label: "Help Center & FAQ" },
    ],
  },
  {
    slug: "ojek-online-ke-stasiun-krl-mrt-jakarta",
    title: "Motorbike Taxi to Jakarta KRL & MRT Stations: Save Time on Your Daily Commute",
    seoTitle: "Motorbike Taxi to Jakarta KRL & MRT Stations",
    description:
      "Combine KRL or MRT with SEVA Ride for the first and last mile. Short-trip fare estimates, station pickup points, and daily commuting tips.",
    category: "Airports & Stations",
    published: "2026-10-11",
    readMinutes: 3,
    keywords: ["motorbike taxi to krl station", "ojek from mrt station", "jakarta commuter transport"],
    blocks: [
      {
        type: "p",
        text: "Many Greater Jakarta commuters combine the KRL, MRT, or LRT with a motorbike taxi for the short hops from home to the station and from the station to the office. It's often faster than driving yourself at rush hour.",
      },
      { type: "h2", text: "Short-trip fare estimates with SEVA Ride" },
      {
        type: "fareTable",
        service: "ride",
        distances: [
          { km: 2, label: "Station to a nearby office building" },
          { km: 3, label: "Home to the nearest station" },
          { km: 5, label: "Station to a residential area" },
        ],
      },
      { type: "note", text: FARE_NOTE_EN },
      { type: "h2", text: "Popular station pickup points" },
      {
        type: "p",
        text: "Pickups are available around Greater Jakarta's transit hubs, such as Manggarai, Sudirman, Dukuh Atas, and Lebak Bulus stations, and the Bekasi and Cibubur LRT stations.",
      },
      { type: "h2", text: "Daily commuting tips" },
      {
        type: "ul",
        items: [
          "Book as your train approaches your stop so the driver arrives just as you leave the gates.",
          "Pick a pickup point away from crowded exits so it's easy for motorbikes to reach.",
          "Use SEVA eWallet so payment is automatic and you don't need small change.",
          "When it's raining or you have lots of bags, consider SEVA Car.",
        ],
      },
      { type: "cta", text: "See the areas and transit points SEVA serves.", href: "/cities", label: "Service area map" },
    ],
    related: [
      { href: "/blog/tarif-ojek-online-jakarta", label: "Jakarta motorbike taxi fares" },
      { href: "/blog/ojek-atau-taksi-online", label: "Motorbike or car taxi?" },
    ],
  },
  {
    slug: "taksi-online-bsd-ke-jakarta",
    title: "Online Taxi from BSD & South Tangerang to Jakarta: Fare Estimates",
    seoTitle: "Online Taxi from BSD to Jakarta: Fares",
    description:
      "SEVA Car and SEVA Ride fare estimates from BSD City, Alam Sutera, and Bintaro to Jakarta, plus tips for cross-city trips at rush hour.",
    category: "Fares & Costs",
    published: "2026-10-11",
    readMinutes: 3,
    keywords: ["online taxi bsd to jakarta", "motorbike taxi bsd senayan", "taxi fare south tangerang to jakarta"],
    blocks: [
      {
        type: "p",
        text: "Trips from BSD City, Alam Sutera, or Bintaro into Jakarta are busy cross-city routes every working day. Here's what they cost with SEVA.",
      },
      { type: "h2", text: "SEVA Car fare estimates" },
      {
        type: "fareTable",
        service: "car",
        distances: [
          { km: 20, label: "Bintaro to South Jakarta" },
          { km: 27, label: "BSD to Senayan" },
          { km: 35, label: "BSD to central Jakarta" },
        ],
      },
      { type: "h2", text: "SEVA Ride fare estimates" },
      {
        type: "fareTable",
        service: "ride",
        distances: [
          { km: 20, label: "Bintaro to South Jakarta" },
          { km: 27, label: "BSD to Senayan" },
        ],
      },
      { type: "note", text: FARE_NOTE_EN },
      { type: "h2", text: "Cross-city travel tips" },
      {
        type: "ul",
        items: [
          "Tolls on SEVA Car routes are paid by the passenger at the actual cost.",
          "For 2–4 people travelling together, SEVA Car can cost less per person than several motorbikes.",
          "Fares don't rise in rush hour or rain, so daily costs are easier to plan.",
        ],
      },
      { type: "cta", text: "Compare the capacity and fares of every service.", href: "/services", label: "Compare services" },
    ],
    related: [
      { href: "/blog/ojek-atau-taksi-online", label: "Motorbike or car taxi?" },
      { href: "/blog/tarif-pasti-tanpa-lonjakan", label: "Why SEVA fares don't rise in the rain" },
    ],
  },
  {
    slug: "tarif-pasti-tanpa-lonjakan",
    title: "Fixed Fares, No Surge: Why SEVA Fares Don't Go Up When It Rains",
    seoTitle: "Fixed Fares with No Surge in the Rain",
    description:
      "Why SEVA fares don't rise in rush hour or rain, what's included in the fare, and which costs you still need to cover.",
    category: "Fares & Costs",
    published: "2026-10-11",
    readMinutes: 3,
    keywords: ["motorbike taxi fare in rain", "no surge pricing", "online taxi without price surge"],
    blocks: [
      {
        type: "p",
        text: "One of the most common complaints about ride-hailing is prices suddenly jumping when it rains or at the end of the working day. SEVA uses fixed fares so you can plan your travel costs.",
      },
      { type: "h2", text: "How fixed fares work" },
      {
        type: "p",
        text: "The fare is a base fare plus a per-kilometre charge for the route distance. The total is shown in the app before you confirm, and it is never raised because of weather or rush hour.",
      },
      {
        type: "ul",
        items: ["SEVA Ride: Rp 8,000 + Rp 2,500/km", "SEVA Car: Rp 9,500 + Rp 6,200/km", "SEVA Send: Rp 10,000 + Rp 3,000/km"],
      },
      { type: "h2", text: "Costs you still need to cover" },
      {
        type: "p",
        text: "Tolls and official parking at airports, stations, or buildings are not included in the trip fare and are paid by the passenger at the actual cost.",
      },
      { type: "h2", text: "Example: an 8 km trip on a rainy day" },
      {
        type: "fareTable",
        service: "ride",
        distances: [{ km: 8, label: "Same in normal hours and in the rain" }],
      },
      {
        type: "fareTable",
        service: "car",
        distances: [{ km: 8, label: "Same in normal hours and in the rain" }],
      },
      { type: "note", text: FARE_NOTE_EN },
      { type: "cta", text: "Learn how booking works and how fares are calculated.", href: "/how-it-works", label: "How SEVA works" },
    ],
    related: [
      { href: "/blog/tarif-ojek-online-jakarta", label: "Jakarta motorbike taxi fares" },
      { href: "/blog/taksi-online-ke-bandara-soekarno-hatta", label: "Online taxi to Soekarno-Hatta Airport" },
    ],
  },
  {
    slug: "tips-aman-naik-ojek-dan-taksi-online",
    title: "7 Safety Tips for Motorbike and Car Taxis, Especially at Night",
    seoTitle: "7 Safety Tips for Ride-Hailing Trips",
    description:
      "How to stay safe on motorbike and car taxi trips: check the driver and plate, share your trip, use SOS, and keep your OTP code private.",
    category: "Tips & Safety",
    published: "2026-10-11",
    readMinutes: 4,
    keywords: ["ride hailing safety tips", "online taxi safety at night", "motorbike taxi safety features"],
    blocks: [
      {
        type: "p",
        text: "In-app safety features work best alongside good habits. Here are simple steps you can take every time you travel.",
      },
      {
        type: "ol",
        items: [
          "Match the driver's name, plate number, and vehicle photo in the app before you get in.",
          "Wait somewhere bright and busy, especially at night.",
          "Turn on Trip Sharing so family or friends can follow your route live.",
          "Only contact your driver through in-app chat or calls; your phone number stays masked.",
          "If you feel unsafe, use the SOS button to call 112 or your emergency contact.",
          "Never share your OTP code with anyone, including people claiming to be from SEVA.",
          "On SEVA Ride, always wear the helmet your driver provides.",
        ],
      },
      { type: "h2", text: "If something goes wrong" },
      {
        type: "p",
        text: "Report the incident in the app or contact the SEVA help team on WhatsApp or by email with your trip ID so it can be followed up quickly.",
      },
      { type: "cta", text: "See all of SEVA's trip safety features.", href: "/safety", label: "Safety standards" },
    ],
    related: [
      { href: "/blog/barang-tertinggal-di-taksi-online", label: "Left something in an online taxi" },
      { href: "/faq", label: "Help Center & FAQ" },
    ],
  },
  {
    slug: "barang-tertinggal-di-taksi-online",
    title: "Left Something in a Taxi or on a Motorbike Ride? Here's What to Do",
    seoTitle: "Left Something in an Online Taxi? Do This",
    description:
      "Quick steps if you leave something in a SEVA vehicle: contact the driver from your trip history, have your trip ID ready, and contact the help team.",
    category: "Tips & Safety",
    published: "2026-10-11",
    readMinutes: 2,
    keywords: ["left item in online taxi", "lost item motorbike taxi", "contact driver after trip"],
    blocks: [
      {
        type: "p",
        text: "Leaving your phone, wallet, or bag in a vehicle can happen to anyone. The faster you act, the better your chance of getting it back.",
      },
      { type: "h2", text: "What to do" },
      {
        type: "ol",
        items: [
          "Open Trip History in the SEVA app.",
          "Select the trip, then contact the driver through in-app chat or call.",
          "Describe the item and agree on how it will be returned.",
          "If you can't reach the driver, contact the SEVA help team on WhatsApp or by email with your trip ID.",
        ],
      },
      { type: "h2", text: "Tips so it doesn't happen again" },
      {
        type: "ul",
        items: [
          "Check the seats and boot before you get out.",
          "Keep small items in one bag instead of putting them on the seat.",
          "If it's your phone you left behind, use another phone to contact the help team.",
        ],
      },
      { type: "cta", text: "Find more answers about accounts and safety.", href: "/faq", label: "Open the Help Center" },
    ],
    related: [
      { href: "/blog/tips-aman-naik-ojek-dan-taksi-online", label: "7 ride-hailing safety tips" },
      { href: "/safety", label: "Safety standards" },
    ],
  },
  {
    slug: "cara-pakai-aplikasi-seva-pertama-kali",
    title: "Using the SEVA App for the First Time: From Sign-Up to Payment",
    seoTitle: "Using the SEVA App for the First Time",
    description:
      "A guide for new users: sign up with your phone number, book SEVA Ride, Car, or Send, choose how to pay, and download your trip receipt.",
    category: "Tips & Safety",
    published: "2026-10-11",
    readMinutes: 4,
    keywords: ["how to use seva app", "booking a motorbike taxi for the first time", "online taxi app sign up"],
    blocks: [
      {
        type: "p",
        text: "Using SEVA for the first time? This guide takes you from downloading the app to finishing your first trip.",
      },
      { type: "h2", text: "1. Download and sign up" },
      {
        type: "p",
        text: "Download the SEVA app from Google Play or the Apple App Store, then sign up with your phone number. Enter the OTP code we send to verify it, and never share this code with anyone.",
      },
      { type: "h2", text: "2. Choose a service" },
      {
        type: "ul",
        items: [
          "SEVA Ride for solo motorbike trips with light luggage.",
          "SEVA Car for a car with up to 4 passengers.",
          "SEVA Send for parcels up to 20 kg.",
        ],
      },
      { type: "h2", text: "3. Set your pickup and destination" },
      {
        type: "p",
        text: "Enter your destination or drag the pin on the map to the exact gate or building lobby. An accurate pickup point helps your driver find you faster.",
      },
      { type: "h2", text: "4. Check the fare and choose how to pay" },
      {
        type: "p",
        text: "The fixed fare is shown before you confirm. Choose SEVA eWallet, QRIS, or cash, then confirm your booking.",
      },
      { type: "h2", text: "5. During and after your trip" },
      {
        type: "p",
        text: "Follow your driver on the map, use Trip Sharing if needed, and when you arrive, your digital receipt is saved in your history. Receipts can be downloaded as a PDF.",
      },
      { type: "cta", text: "See the full booking and payment flow.", href: "/how-it-works", label: "How SEVA works" },
    ],
    related: [
      { href: "/blog/tips-aman-naik-ojek-dan-taksi-online", label: "Ride-hailing safety tips" },
      { href: "/blog/tarif-pasti-tanpa-lonjakan", label: "Fixed fares with no surge" },
    ],
  },
  {
    slug: "transportasi-karyawan-untuk-perusahaan",
    title: "Staff Transport for Companies: Travel Vouchers & Monthly Invoicing",
    seoTitle: "Staff Transport Solutions for Companies",
    description:
      "Manage staff business travel without manual reimbursements: travel vouchers, one central monthly invoice with tax invoices, and SEVA Send document courier.",
    category: "Partners & Business",
    published: "2026-10-11",
    readMinutes: 3,
    keywords: ["corporate staff transport", "employee transport vouchers", "online taxi for business travel"],
    blocks: [
      {
        type: "p",
        text: "Reimbursing business travel often takes time: collecting receipts, checking amounts, and matching budgets. SEVA corporate accounts are designed to simplify all of that.",
      },
      { type: "h2", text: "What companies get" },
      {
        type: "ul",
        items: [
          "Staff travel vouchers with budgets set by department or job level.",
          "One central monthly invoice with tax invoices.",
          "Trip reports showing the route, pickup time, and actual cost for audits.",
          "Access to SEVA Ride, SEVA Car, and the SEVA Send courier for office documents.",
        ],
      },
      { type: "h2", text: "Who is it for?" },
      {
        type: "p",
        text: "Companies, hotels, and institutions with regular business travel, guest transfers, or document deliveries in Greater Jakarta.",
      },
      {
        type: "cta",
        text: "Fill in a short form and the SEVA team will contact you with an offer.",
        href: "/partner/b2b#ajukan-kemitraan",
        label: "Apply for a corporate account",
      },
    ],
    related: [
      { href: "/blog/ongkir-kurir-instan-jakarta-bekasi-tangerang", label: "Cross-city courier fees" },
      { href: "/partner/b2b", label: "B2B Partners" },
    ],
  },
  {
    slug: "cara-daftar-armada-fleet-operator",
    title: "How to Register Your Fleet as a SEVA Fleet Operator",
    seoTitle: "Register Your Fleet as a Fleet Operator",
    description:
      "Taxi, rental, or shuttle fleet owners: learn the 4 steps to join SEVA as a fleet operator and monitor your fleet in the Fleet Management System.",
    category: "Partners & Business",
    published: "2026-10-11",
    readMinutes: 3,
    keywords: ["become a fleet operator", "car rental fleet partnership", "online taxi fleet partner"],
    blocks: [
      {
        type: "p",
        text: "Fleet owners can connect their vehicles to trip demand across Greater Jakarta through SEVA, and monitor operations from one console.",
      },
      { type: "h2", text: "4 steps to join" },
      {
        type: "ol",
        items: [
          "Register your company profile (PT, CV, or cooperative) with your fleet size and vehicle types.",
          "Document checks: business licence, vehicle ownership, and roadworthiness tests (KIR).",
          "System integration and driver onboarding, including service procedure training.",
          "Your fleet starts taking orders, with regular performance reports.",
        ],
      },
      { type: "h2", text: "Fleet Management System features" },
      {
        type: "ul",
        items: [
          "Real-time GPS tracking for every vehicle.",
          "Driver assignments, shifts, and trip history.",
          "Reminders for service schedules and KIR test dates.",
          "Revenue share of up to 95% with daily payouts.",
        ],
      },
      {
        type: "cta",
        text: "Register your fleet using the fleet operator partnership form.",
        href: "/partner/fleet#daftar-operator",
        label: "Register your fleet",
      },
    ],
    related: [
      { href: "/blog/cara-daftar-driver-ojek-online", label: "How to become a driver" },
      { href: "/partner/fleet", label: "Fleet operator page" },
    ],
  },
];
