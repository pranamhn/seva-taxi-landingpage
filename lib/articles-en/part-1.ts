import type { Article } from "@/lib/articles";
import { FARE_NOTE_EN } from "./shared";

export const PART_1: Article[] = [
  {
    slug: "tarif-ojek-online-jakarta",
    title: "Motorbike Taxi Fares in Jakarta: How They're Calculated & SEVA Ride Price Examples",
    seoTitle: "Jakarta Motorbike Taxi Fares Explained",
    description:
      "How much does a motorbike taxi cost in Jakarta? Learn how SEVA Ride fares are calculated, with price examples for 3 to 15 km trips in Greater Jakarta.",
    category: "Fares & Costs",
    published: "2026-10-11",
    readMinutes: 4,
    keywords: ["motorbike taxi fare jakarta", "ojek price per km", "cheap motorbike taxi jakarta"],
    blocks: [
      {
        type: "p",
        text: "Motorbike taxis (ojek) are how many Jakarta commuters beat rush-hour traffic. Before you book, it helps to know how the fare is calculated so you can estimate your daily travel costs.",
      },
      { type: "h2", text: "How SEVA Ride fares are calculated" },
      {
        type: "p",
        text: "A SEVA Ride fare has two parts: a Rp 8,000 base fare plus Rp 2,500 for every kilometre of the route shown in the app. In short: Rp 8,000 + (distance in km × Rp 2,500).",
      },
      { type: "h2", text: "Motorbike taxi fare examples in Jakarta" },
      {
        type: "fareTable",
        service: "ride",
        distances: [
          { km: 3, label: "MRT station to a nearby office" },
          { km: 5, label: "Between districts in the same city" },
          { km: 8, label: "Daily commute across areas" },
          { km: 10, label: "Cross-city trip within Jakarta" },
          { km: 15, label: "From a satellite city into central Jakarta" },
        ],
      },
      { type: "note", text: FARE_NOTE_EN },
      { type: "h2", text: "Do fares go up in rush hour or rain?" },
      {
        type: "p",
        text: "No. SEVA uses a fixed fare shown from the moment you book, with no surge after office hours or when it rains. The amount you see when you confirm is your trip fare.",
      },
      { type: "h2", text: "Tips to save on motorbike taxi rides" },
      {
        type: "ul",
        items: [
          "Drag the pin to a pickup point that's easy for motorbikes to reach, such as a side entrance, so your driver doesn't have to loop around.",
          "Travel light: SEVA Ride carries 1 passenger with 1 backpack or laptop bag (max. 10 kg).",
          "For items without a passenger, use SEVA Send so they travel safely within its capacity.",
          "Pay with SEVA eWallet or QRIS so you don't need exact change.",
        ],
      },
      {
        type: "cta",
        text: "See full specs and SEVA Ride fare examples.",
        href: "/services/ride",
        label: "SEVA Ride details",
      },
    ],
    related: [
      { href: "/blog/ojek-atau-taksi-online", label: "SEVA Ride or SEVA Car: which one?" },
      { href: "/services", label: "Compare fares for all services" },
    ],
  },
  {
    slug: "taksi-online-ke-bandara-soekarno-hatta",
    title: "Online Taxi to Soekarno-Hatta Airport: Fare Estimates & Tips",
    seoTitle: "Online Taxi to Soekarno-Hatta Airport",
    description:
      "A guide to taking an online taxi to Soekarno-Hatta Airport (CGK): SEVA Car fare estimates, luggage space, tolls and parking, and tips to avoid being late.",
    category: "Airports & Stations",
    published: "2026-10-11",
    readMinutes: 5,
    keywords: ["online taxi to soekarno hatta airport", "taxi fare to cgk airport", "jakarta airport taxi"],
    blocks: [
      {
        type: "p",
        text: "Getting to Soekarno-Hatta Airport (CGK) often means big suitcases, family groups, and a flight you can't miss. An online taxi like SEVA Car makes the trip more comfortable, and you know the cost upfront.",
      },
      { type: "h2", text: "SEVA Car fare estimates to Soekarno-Hatta Airport" },
      {
        type: "p",
        text: "SEVA Car fares are a Rp 9,500 base fare plus Rp 6,200 per kilometre of the route in the app. Here are example estimates by distance:",
      },
      {
        type: "fareTable",
        service: "car",
        distances: [
          { km: 20, label: "From West Jakarta / Tangerang" },
          { km: 25, label: "From the city centre (example airport route)" },
          { km: 30, label: "From South Jakarta" },
          { km: 40, label: "From eastern or southern satellite cities" },
        ],
      },
      { type: "note", text: FARE_NOTE_EN },
      { type: "h2", text: "Airport tolls and parking" },
      {
        type: "p",
        text: "The fare in the app is the trip fare. Tolls on the route and official airport parking are paid by the passenger at the actual cost. Keep an e-money card or some cash ready for these.",
      },
      { type: "h2", text: "How many suitcases fit in a SEVA Car?" },
      {
        type: "p",
        text: "SEVA Car seats up to 4 adults with room for about 2 medium suitcases plus 2 backpacks. If you have more luggage, it's best to book two vehicles.",
      },
      { type: "h2", text: "Tips so you're not late for your flight" },
      {
        type: "ol",
        items: [
          "Book early and allow extra time for traffic, especially during the morning and evening rush.",
          "Set an exact pickup point (lobby or building entrance) so your driver finds you straight away.",
          "Check the driver's name, plate number, and car photo in the app before you get in.",
          "Turn on Trip Sharing so your family can follow your route live.",
          "Need to cancel? For SEVA Car, cancelling within the first 5 minutes after booking is free.",
        ],
      },
      { type: "h2", text: "Coming home from the airport" },
      {
        type: "p",
        text: "Pickups are also available in the arrival areas of Soekarno-Hatta Terminals 1, 2, and 3, and at Halim Perdanakusuma Airport. Book after you collect your bags to keep your driver's waiting time short.",
      },
      {
        type: "cta",
        text: "See cabin capacity, safety features, and SEVA Car fare examples.",
        href: "/services/car",
        label: "SEVA Car details",
      },
    ],
    related: [
      { href: "/cities", label: "Airport & station pickup points" },
      { href: "/blog/ojek-atau-taksi-online", label: "SEVA Ride or SEVA Car: which one?" },
    ],
  },
  {
    slug: "kirim-paket-instan-jakarta",
    title: "Same-Day Parcel Delivery in Jakarta: Fees, Size Limits & Prohibited Items",
    seoTitle: "Same-Day Parcel Delivery in Jakarta",
    description:
      "How to send a same-day parcel in Greater Jakarta with SEVA Send: how the fee is calculated, fee examples, the 20 kg weight limit, 40×40×40 cm size, and prohibited items.",
    category: "Delivery",
    published: "2026-10-11",
    readMinutes: 4,
    keywords: ["same day delivery jakarta", "instant courier jakarta", "motorbike courier fee per km"],
    blocks: [
      {
        type: "p",
        text: "A contract that has to arrive today, a customer's online order, or a set of forgotten keys: an instant courier gets items there within hours without stopping at a sorting warehouse.",
      },
      { type: "h2", text: "How SEVA Send fees are calculated" },
      {
        type: "p",
        text: "A SEVA Send fee is a Rp 10,000 pickup fare plus Rp 3,000 per kilometre of the route. Example estimates:",
      },
      {
        type: "fareTable",
        service: "send",
        distances: [
          { km: 4, label: "Nearby office documents" },
          { km: 10, label: "Online-shop order across districts" },
          { km: 18, label: "Between cities in Greater Jakarta" },
        ],
      },
      { type: "note", text: FARE_NOTE_EN },
      { type: "h2", text: "Weight and size limits" },
      {
        type: "ul",
        items: [
          "Maximum weight 20 kg per delivery.",
          "Maximum size 40 × 40 × 40 cm so it can be carried safely by motorbike.",
          "Parcels go directly point-to-point from sender to recipient, with no warehouse stops.",
        ],
      },
      { type: "h2", text: "Items you can't send" },
      {
        type: "ul",
        items: [
          "Explosive or flammable substances, pressurised aerosols, petrol, and toxic chemicals.",
          "Sharp weapons, firearms, narcotics, and other illegal goods.",
          "Pets or any living animals.",
        ],
      },
      { type: "h2", text: "Packing tips" },
      {
        type: "ul",
        items: [
          "Put important documents in a sealed envelope.",
          "Wrap small electronics in thick bubble wrap.",
          "Make sure dry food and hampers are tightly sealed.",
          "Share the tracking link with the recipient so they're ready. A handover photo will appear in your order history.",
        ],
      },
      {
        type: "cta",
        text: "See SEVA Send delivery specs and fee examples.",
        href: "/services/send",
        label: "SEVA Send details",
      },
    ],
    related: [
      { href: "/partner/b2b", label: "SEVA Send for offices" },
      { href: "/faq", label: "Help Center & FAQ" },
    ],
  },
  {
    slug: "ojek-atau-taksi-online",
    title: "Motorbike or Car? How to Choose Between SEVA Ride and SEVA Car",
    seoTitle: "Motorbike or Car Taxi? How to Choose",
    description:
      "Not sure whether to take a motorbike or a car? Compare the fares, capacity, and comfort of SEVA Ride and SEVA Car for daily trips in Greater Jakarta.",
    category: "Tips & Safety",
    published: "2026-10-11",
    readMinutes: 3,
    keywords: ["motorbike taxi or car taxi", "ojek vs online taxi", "online taxi greater jakarta"],
    blocks: [
      {
        type: "p",
        text: "For the same trip, choosing between a motorbike and a car depends on how many people are travelling, your luggage, the weather, and your budget. Here's a quick comparison.",
      },
      { type: "h2", text: "When to choose SEVA Ride (motorbike)" },
      {
        type: "ul",
        items: [
          "You're travelling alone with light luggage (1 backpack or laptop bag, max. 10 kg).",
          "You're short on time at rush hour and want to get through traffic.",
          "You want the lowest fare: from Rp 8,000 + Rp 2,500/km.",
        ],
      },
      { type: "h2", text: "When to choose SEVA Car (car)" },
      {
        type: "ul",
        items: [
          "You're travelling as two to four people, or with children.",
          "You're carrying suitcases or shopping (about 2 medium suitcases + 2 backpacks).",
          "It's raining or very hot, or it's a long trip such as to the airport.",
          "Fares from Rp 9,500 + Rp 6,200/km.",
        ],
      },
      { type: "h2", text: "Fare comparison for a 10 km trip" },
      {
        type: "fareTable",
        service: "ride",
        distances: [{ km: 10, label: "SEVA Ride, 1 passenger" }],
      },
      {
        type: "fareTable",
        service: "car",
        distances: [{ km: 10, label: "SEVA Car, up to 4 passengers" }],
      },
      {
        type: "p",
        text: "If three or four of you are travelling together, SEVA Car can cost less per person than booking several motorbikes.",
      },
      { type: "note", text: FARE_NOTE_EN },
      {
        type: "cta",
        text: "Compare the specs, capacity, and fares of every SEVA service in one table.",
        href: "/services",
        label: "Compare services",
      },
    ],
    related: [
      { href: "/blog/tarif-ojek-online-jakarta", label: "Jakarta motorbike taxi fares" },
      { href: "/blog/taksi-online-ke-bandara-soekarno-hatta", label: "Online taxi to Soekarno-Hatta Airport" },
    ],
  },
  {
    slug: "taksi-online-ke-stasiun-whoosh-halim",
    title: "Online Taxi from Whoosh Halim Station: Fares & How to Book",
    seoTitle: "Online Taxi from Whoosh Halim Station",
    description:
      "Just arrived on the Whoosh high-speed train at Halim? Here's how to book SEVA Car or SEVA Ride from Halim Station, fare estimates, and tips for a quick pickup.",
    category: "Airports & Stations",
    published: "2026-10-11",
    readMinutes: 3,
    keywords: ["online taxi whoosh halim station", "motorbike taxi halim station", "transport from halim high speed rail"],
    blocks: [
      {
        type: "p",
        text: "Whoosh Halim high-speed rail station is the main gateway for passengers from Bandung into Jakarta. After you get off the train, you can continue to your office, hotel, or home with SEVA without queuing for a taxi.",
      },
      { type: "h2", text: "SEVA Ride or SEVA Car?" },
      {
        type: "ul",
        items: [
          "SEVA Ride: ideal if you're travelling alone with a small bag (max. 1 backpack or laptop bag, 10 kg) and want to beat the traffic.",
          "SEVA Car: ideal if you have a suitcase, are travelling with family or colleagues (up to 4 passengers), or it's raining.",
        ],
      },
      { type: "h2", text: "Fare estimates from Whoosh Halim Station" },
      {
        type: "fareTable",
        service: "ride",
        distances: [
          { km: 10, label: "To the nearest business district" },
          { km: 14, label: "To Kuningan / Mega Kuningan" },
        ],
      },
      {
        type: "fareTable",
        service: "car",
        distances: [
          { km: 10, label: "To the nearest business district" },
          { km: 14, label: "To Kuningan / Mega Kuningan" },
          { km: 20, label: "To central Jakarta" },
        ],
      },
      { type: "note", text: FARE_NOTE_EN },
      { type: "h2", text: "Tips for a quick pickup" },
      {
        type: "ol",
        items: [
          "Book after you've left the arrival gates so your driver doesn't wait too long.",
          "Set a clear pickup point in the station pickup area, then check the plate number in the app.",
          "Use in-app chat to tell your driver where you are; your phone number stays masked.",
          "Tolls on the route are paid by the passenger at the actual cost.",
        ],
      },
      {
        type: "cta",
        text: "See the airport and station pickup points SEVA serves in Greater Jakarta.",
        href: "/cities",
        label: "View the service map",
      },
    ],
    related: [
      { href: "/blog/taksi-online-ke-bandara-soekarno-hatta", label: "Online taxi to Soekarno-Hatta Airport" },
      { href: "/blog/ojek-online-ke-bandara-halim", label: "Motorbike & car taxi to Halim Airport" },
    ],
  },
  {
    slug: "ojek-online-ke-bandara-halim",
    title: "Motorbike & Car Taxi to Halim Perdanakusuma Airport",
    seoTitle: "Motorbike & Car Taxi to Halim Airport",
    description:
      "A guide to getting to Halim Perdanakusuma Airport (HLP) with SEVA Ride or SEVA Car: when to choose a motorbike or a car, fare estimates, and pickup tips.",
    category: "Airports & Stations",
    published: "2026-10-11",
    readMinutes: 3,
    keywords: ["motorbike taxi to halim airport", "online taxi halim airport", "transport to hlp airport"],
    blocks: [
      {
        type: "p",
        text: "Halim Perdanakusuma Airport (HLP) in East Jakarta is fairly close to the city centre, so you can get there by motorbike or by car. The best choice depends on your luggage.",
      },
      { type: "h2", text: "Motorbike or car to Halim Airport?" },
      {
        type: "ul",
        items: [
          "Choose SEVA Ride if you only have a backpack or a small cabin bag (max. 10 kg).",
          "Choose SEVA Car if you have suitcases: it fits about 2 medium suitcases and 2 backpacks for up to 4 passengers.",
        ],
      },
      { type: "h2", text: "Example fare estimates" },
      {
        type: "fareTable",
        service: "ride",
        distances: [
          { km: 8, label: "From East Jakarta" },
          { km: 15, label: "From central Jakarta" },
        ],
      },
      {
        type: "fareTable",
        service: "car",
        distances: [
          { km: 8, label: "From East Jakarta" },
          { km: 15, label: "From central Jakarta" },
          { km: 25, label: "From a satellite city" },
        ],
      },
      { type: "note", text: FARE_NOTE_EN },
      { type: "h2", text: "When you land at Halim Airport" },
      {
        type: "p",
        text: "Pickups are available in the arrivals lobby. Book after you've collected your bags, then check the driver's name, plate number, and vehicle photo in the app before you get in.",
      },
      {
        type: "cta",
        text: "Compare the capacity and fares of SEVA Ride and SEVA Car.",
        href: "/services",
        label: "Compare services",
      },
    ],
    related: [
      { href: "/blog/taksi-online-ke-bandara-soekarno-hatta", label: "Online taxi to Soekarno-Hatta Airport" },
      { href: "/blog/ojek-atau-taksi-online", label: "Motorbike or car taxi?" },
    ],
  },
  {
    slug: "ongkir-kurir-instan-jakarta-bekasi-tangerang",
    title: "Cross-City Courier Fees: Jakarta to Bekasi, Tangerang & Depok",
    seoTitle: "Courier Fees: Jakarta–Bekasi–Tangerang",
    description:
      "How much does a same-day courier cost from Jakarta to Bekasi, Tangerang, or Depok? See how SEVA Send fees are calculated, with examples for 15–30 km.",
    category: "Delivery",
    published: "2026-10-11",
    readMinutes: 3,
    keywords: ["courier fee jakarta bekasi", "instant courier jakarta tangerang", "same day delivery greater jakarta"],
    blocks: [
      {
        type: "p",
        text: "Cross-city deliveries in Greater Jakarta are often needed for office documents, online-shop orders, or personal items that must arrive the same day. SEVA Send takes parcels straight from sender to recipient without warehouse stops.",
      },
      { type: "h2", text: "How cross-city fees are calculated" },
      {
        type: "p",
        text: "SEVA Send fee = Rp 10,000 base fare + Rp 3,000 per kilometre of the route. The longer the distance, the larger the per-kilometre part, with no extra cross-city charge.",
      },
      {
        type: "fareTable",
        service: "send",
        distances: [
          { km: 15, label: "Short cross-city trip" },
          { km: 20, label: "Example: Jakarta to a satellite city" },
          { km: 25, label: "Medium cross-city trip" },
          { km: 30, label: "Long cross-city trip" },
        ],
      },
      { type: "note", text: FARE_NOTE_EN },
      { type: "h2", text: "Make sure your parcel qualifies" },
      {
        type: "ul",
        items: [
          "Maximum weight 20 kg and maximum size 40 × 40 × 40 cm.",
          "Pack neatly: documents in a sealed envelope, electronics in thick bubble wrap.",
          "Flammable items, weapons, narcotics, and live animals can't be sent.",
        ],
      },
      {
        type: "cta",
        text: "For regular company deliveries, use a corporate account with one central monthly invoice.",
        href: "/partner/b2b",
        label: "Corporate account",
      },
    ],
    related: [
      { href: "/blog/kirim-paket-instan-jakarta", label: "Same-day parcel delivery rules" },
      { href: "/services/send", label: "SEVA Send details" },
    ],
  },
];
