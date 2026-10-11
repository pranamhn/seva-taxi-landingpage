// Dibuat dari terjemahan ringkas + struktur lib/articles.ts (slug, km, href sama dengan versi Indonesia).
import type { Article } from "@/lib/articles";
import { FARE_NOTE_EN } from "./shared";

export const PART_3: Article[] = [
  {
    "slug": "ojek-online-depok-ke-jakarta",
    "title": "Motorbike & Car Taxi from Depok to Jakarta: Daily Fare Estimates",
    "seoTitle": "Motorbike Taxi Depok to Jakarta: Fares",
    "description": "SEVA Ride and SEVA Car fare estimates from Depok (Margonda, Cinere, Sawangan) to Jakarta, plus tips for daily commuters.",
    "category": "Fares & Costs",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "motorbike taxi depok to jakarta",
      "online taxi depok jakarta",
      "ojek fare margonda"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Depok is one of the satellite cities with the most commuters heading into Jakarta. Here's what the trip costs with SEVA."
      },
      {
        "type": "h2",
        "text": "SEVA Ride fare estimates"
      },
      {
        "type": "fareTable",
        "service": "ride",
        "distances": [
          {
            "km": 10,
            "label": "Margonda to southern South Jakarta"
          },
          {
            "km": 15,
            "label": "Depok to South Jakarta's business districts"
          },
          {
            "km": 20,
            "label": "Depok to the city centre"
          }
        ]
      },
      {
        "type": "h2",
        "text": "SEVA Car fare estimates"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 15,
            "label": "Depok to South Jakarta's business districts"
          },
          {
            "km": 20,
            "label": "Depok to the city centre"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE_EN
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "ul",
        "items": [
          "Combine with the KRL: take SEVA Ride to the nearest station, then continue by train.",
          "Fares don't rise in rush hour or rain.",
          "Tolls on SEVA Car trips are paid by the passenger at the actual cost."
        ]
      },
      {
        "type": "cta",
        "text": "See SEVA's service areas in and around Depok.",
        "href": "/cities",
        "label": "Service area map"
      }
    ],
    "related": [
      {
        "href": "/blog/ojek-online-ke-stasiun-krl-mrt-jakarta",
        "label": "Motorbike taxi to KRL & MRT stations"
      },
      {
        "href": "/blog/tarif-ojek-online-jakarta",
        "label": "Jakarta motorbike taxi fares"
      }
    ]
  },
  {
    "slug": "taksi-online-bekasi-ke-jakarta",
    "title": "Online Taxi from Bekasi to Jakarta: Fare Estimates & Money-Saving Tips",
    "seoTitle": "Online Taxi Bekasi to Jakarta: Fares",
    "description": "How much is a car or motorbike taxi from Bekasi to Jakarta? See SEVA Car and SEVA Ride estimates for 15–30 km and tips to save on the trip.",
    "category": "Fares & Costs",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "online taxi bekasi to jakarta",
      "motorbike taxi bekasi jakarta",
      "bekasi taxi fare"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "The Bekasi–Jakarta route is one of the busiest in Greater Jakarta. Knowing the fare estimate helps you choose the right option."
      },
      {
        "type": "h2",
        "text": "SEVA Car fare estimates"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 15,
            "label": "West Bekasi to East Jakarta"
          },
          {
            "km": 25,
            "label": "Bekasi to Jakarta's business districts"
          },
          {
            "km": 30,
            "label": "Bekasi to South Jakarta"
          }
        ]
      },
      {
        "type": "h2",
        "text": "SEVA Ride fare estimates"
      },
      {
        "type": "fareTable",
        "service": "ride",
        "distances": [
          {
            "km": 15,
            "label": "West Bekasi to East Jakarta"
          },
          {
            "km": 25,
            "label": "Bekasi to Jakarta's business districts"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE_EN
      },
      {
        "type": "h2",
        "text": "Money-saving tips"
      },
      {
        "type": "ul",
        "items": [
          "Travelling as two to four people? SEVA Car can be cheaper per person.",
          "Use the Bekasi LRT and SEVA Ride for the short hop to the station.",
          "Pay with SEVA eWallet so you don't need exact change."
        ]
      },
      {
        "type": "cta",
        "text": "Compare fares for every SEVA service.",
        "href": "/services",
        "label": "Compare services"
      }
    ],
    "related": [
      {
        "href": "/blog/ojek-atau-taksi-online",
        "label": "Motorbike or car taxi?"
      },
      {
        "href": "/blog/tarif-pasti-tanpa-lonjakan",
        "label": "Fixed fares with no surge"
      }
    ]
  },
  {
    "slug": "taksi-online-bogor-ke-jakarta",
    "title": "Online Taxi from Bogor to Jakarta: Fare Estimates & Route Options",
    "seoTitle": "Online Taxi Bogor to Jakarta: Fares",
    "description": "SEVA Car fare estimates from Bogor and Sentul to Jakarta, when the KRL makes more sense, and tips for long trips in Greater Jakarta.",
    "category": "Fares & Costs",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "online taxi bogor to jakarta",
      "taxi fare bogor jakarta",
      "bogor to jakarta transport"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Bogor and Sentul are quite far from central Jakarta. For family trips or when you're carrying luggage, an online taxi gives you door-to-door comfort."
      },
      {
        "type": "h2",
        "text": "SEVA Car fare estimates"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 30,
            "label": "Sentul to East Jakarta"
          },
          {
            "km": 40,
            "label": "Bogor to South Jakarta"
          },
          {
            "km": 50,
            "label": "Bogor to central Jakarta"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE_EN
      },
      {
        "type": "h2",
        "text": "SEVA Car or KRL?"
      },
      {
        "type": "ul",
        "items": [
          "Choose the KRL when travelling alone with light luggage, then continue with SEVA Ride from the station.",
          "Choose SEVA Car when travelling as 2–4 people, carrying suitcases, or heading somewhere far from a station."
        ]
      },
      {
        "type": "h2",
        "text": "Extra costs"
      },
      {
        "type": "p",
        "text": "Tolls on the route are paid by the passenger at the actual cost, on top of the trip fare shown in the app."
      },
      {
        "type": "cta",
        "text": "See SEVA Car capacity and features.",
        "href": "/services/car",
        "label": "SEVA Car details"
      }
    ],
    "related": [
      {
        "href": "/blog/ojek-online-ke-stasiun-krl-mrt-jakarta",
        "label": "Motorbike taxi to KRL & MRT stations"
      },
      {
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Online taxi to Soekarno-Hatta Airport"
      }
    ]
  },
  {
    "slug": "cara-bayar-seva-ewallet-dan-qris",
    "title": "How to Pay for SEVA Trips: SEVA eWallet, QRIS, or Cash",
    "seoTitle": "Paying for SEVA: eWallet, QRIS, or Cash",
    "description": "The payment methods in the SEVA app explained: how SEVA eWallet works, paying with QRIS, paying cash, and where to find your trip receipt.",
    "category": "Tips & Safety",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "pay motorbike taxi with qris",
      "seva ewallet",
      "online taxi payment methods"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "SEVA offers several payment options so you're never locked into just one."
      },
      {
        "type": "h2",
        "text": "SEVA eWallet"
      },
      {
        "type": "p",
        "text": "The digital wallet inside the app. Your balance is deducted automatically when the trip ends, and every transaction is recorded in your history. Top up through the Wallet menu using the methods available in the app."
      },
      {
        "type": "h2",
        "text": "QRIS"
      },
      {
        "type": "p",
        "text": "Pay with any e-wallet or mobile banking app that supports QRIS."
      },
      {
        "type": "h2",
        "text": "Cash"
      },
      {
        "type": "p",
        "text": "Pay the driver directly at the end of the trip, using the fare shown in the app."
      },
      {
        "type": "h2",
        "text": "Trip receipts"
      },
      {
        "type": "p",
        "text": "After your trip, a digital receipt is saved in your history and can be downloaded as a PDF for expense claims."
      },
      {
        "type": "cta",
        "text": "See the full booking and payment flow.",
        "href": "/how-it-works",
        "label": "How SEVA works"
      }
    ],
    "related": [
      {
        "href": "/blog/cara-klaim-perjalanan-dinas-dengan-struk-digital",
        "label": "How to claim business travel"
      },
      {
        "href": "/blog/cara-pakai-aplikasi-seva-pertama-kali",
        "label": "Using the SEVA app"
      }
    ]
  },
  {
    "slug": "cara-klaim-perjalanan-dinas-dengan-struk-digital",
    "title": "Claiming Business Travel with SEVA Digital Receipts",
    "seoTitle": "Claim Business Travel with Digital Receipts",
    "description": "How to download SEVA trip receipts as a PDF for office reimbursement, plus the option of a corporate account with monthly invoicing.",
    "category": "Partners & Business",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "claim online taxi reimbursement",
      "motorbike taxi receipt for work",
      "business travel proof"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "To reimburse business travel, offices usually need proof showing the date, route, and amount. SEVA digital receipts include all of this."
      },
      {
        "type": "h2",
        "text": "How to download a receipt"
      },
      {
        "type": "ol",
        "items": [
          "Open Trip History in the SEVA app.",
          "Select the trip you want to claim.",
          "Download the receipt as a PDF.",
          "Attach the receipt to your office reimbursement form."
        ]
      },
      {
        "type": "h2",
        "text": "Easier with a corporate account"
      },
      {
        "type": "p",
        "text": "If business travel is frequent, your company can use a corporate account with staff travel vouchers and one central monthly invoice with tax invoices, so employees don't need to claim manually."
      },
      {
        "type": "cta",
        "text": "Apply for a corporate account for your company.",
        "href": "/partner/b2b#ajukan-kemitraan",
        "label": "Apply for a corporate account"
      }
    ],
    "related": [
      {
        "href": "/blog/transportasi-karyawan-untuk-perusahaan",
        "label": "Staff transport for companies"
      },
      {
        "href": "/blog/cara-bayar-seva-ewallet-dan-qris",
        "label": "How to pay for SEVA trips"
      }
    ]
  },
  {
    "slug": "kirim-dokumen-penting-hari-ini",
    "title": "Send Important Documents Today: An Instant Courier Guide for Offices",
    "seoTitle": "Send Important Documents Today by Courier",
    "description": "How to send contracts, legal papers, or office documents that must arrive today with SEVA Send: packing, tracking, and proof of delivery.",
    "category": "Delivery",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "send documents today jakarta",
      "office document courier",
      "same day contract delivery"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "A contract that must be signed today or paperwork left at home can't wait for a regular delivery service. An instant courier delivers directly, with no warehouse stops."
      },
      {
        "type": "h2",
        "text": "Delivery fee estimates"
      },
      {
        "type": "fareTable",
        "service": "send",
        "distances": [
          {
            "km": 5,
            "label": "Between buildings in the same area"
          },
          {
            "km": 10,
            "label": "Between districts"
          },
          {
            "km": 20,
            "label": "Between cities in Greater Jakarta"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE_EN
      },
      {
        "type": "h2",
        "text": "How to pack documents"
      },
      {
        "type": "ul",
        "items": [
          "Put documents in a sealed envelope, and use a plastic folder if there are many pages.",
          "Write the recipient's name and phone number clearly on the envelope.",
          "Don't send cash; money is not an item you can send."
        ]
      },
      {
        "type": "h2",
        "text": "Track it until it's received"
      },
      {
        "type": "p",
        "text": "Share the tracking link with the recipient. Once delivered, a handover photo and the recipient's digital signature appear in your order history."
      },
      {
        "type": "cta",
        "text": "See SEVA Send delivery specs.",
        "href": "/services/send",
        "label": "SEVA Send details"
      }
    ],
    "related": [
      {
        "href": "/blog/kirim-paket-instan-jakarta",
        "label": "Same-day parcel delivery rules"
      },
      {
        "href": "/blog/transportasi-karyawan-untuk-perusahaan",
        "label": "Staff transport for companies"
      }
    ]
  },
  {
    "slug": "kirim-hampers-dan-kue-dengan-kurir-instan",
    "title": "Sending Hampers & Cakes by Instant Courier: Tips to Keep Them Neat",
    "seoTitle": "Sending Hampers & Cakes by Instant Courier",
    "description": "Tips for sending hampers, cakes, and dry food with SEVA Send so they arrive neat: size limits, packing, and delivery fee estimates in Greater Jakarta.",
    "category": "Delivery",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "send hampers jakarta",
      "cake courier",
      "same day food delivery greater jakarta"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Hampers and cakes are often sent for special occasions. To make sure they arrive neat, pay attention to the parcel size and how you pack it."
      },
      {
        "type": "h2",
        "text": "Check the size"
      },
      {
        "type": "ul",
        "items": [
          "Maximum weight 20 kg per delivery.",
          "Maximum size 40 × 40 × 40 cm so it can be carried safely by motorbike.",
          "Split large hampers into several parcels."
        ]
      },
      {
        "type": "h2",
        "text": "How to pack"
      },
      {
        "type": "ul",
        "items": [
          "Use a sturdy cardboard box and seal it well.",
          "Fill empty spaces with paper or bubble wrap so the contents don't shift.",
          "Food must be tightly sealed and hygienic.",
          "Mark the top of the box if the contents are fragile."
        ]
      },
      {
        "type": "h2",
        "text": "Delivery fee estimates"
      },
      {
        "type": "fareTable",
        "service": "send",
        "distances": [
          {
            "km": 4,
            "label": "Same area"
          },
          {
            "km": 10,
            "label": "Between districts"
          },
          {
            "km": 18,
            "label": "Between cities"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE_EN
      },
      {
        "type": "cta",
        "text": "Check the weight and size limits and prohibited items.",
        "href": "/services/send",
        "label": "SEVA Send details"
      }
    ],
    "related": [
      {
        "href": "/blog/kirim-paket-instan-jakarta",
        "label": "Same-day parcel delivery rules"
      },
      {
        "href": "/blog/ongkir-kurir-instan-jakarta-bekasi-tangerang",
        "label": "Cross-city courier fees"
      }
    ]
  },
  {
    "slug": "menghitung-pendapatan-driver-bagi-hasil-95-persen",
    "title": "How to Calculate Driver Earnings with a 95% Revenue Share",
    "seoTitle": "Calculating Driver Earnings at a 95% Share",
    "description": "A simple per-trip earnings example for SEVA driver partners with a platform fee of only 5%, plus the factors that affect income.",
    "category": "Partners & Business",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "calculate ride hailing driver earnings",
      "motorbike taxi driver revenue share",
      "5 percent platform fee"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "SEVA driver partners keep 95% of the trip fare; the platform fee is only 5%. Here's how to calculate your earnings per trip."
      },
      {
        "type": "h2",
        "text": "The simple formula"
      },
      {
        "type": "p",
        "text": "Driver earnings per trip = trip fare × 95%. For example, on a Rp 28,000 SEVA Ride fare (8 km), the driver's share is Rp 26,600 and the platform fee is Rp 1,400."
      },
      {
        "type": "h2",
        "text": "Example trip fares"
      },
      {
        "type": "fareTable",
        "service": "ride",
        "distances": [
          {
            "km": 5,
            "label": "Short trip"
          },
          {
            "km": 8,
            "label": "Medium trip"
          },
          {
            "km": 15,
            "label": "Long trip"
          }
        ]
      },
      {
        "type": "p",
        "text": "Multiply the fares above by 95% to get the driver's share. Weekly bonuses and rush-hour incentives come on top of this."
      },
      {
        "type": "h2",
        "text": "What affects your income"
      },
      {
        "type": "ul",
        "items": [
          "How many hours you're online and how many trips you do each day.",
          "Your area and operating hours, including rush hour.",
          "Hitting weekly bonus targets."
        ]
      },
      {
        "type": "note",
        "text": "This calculation is an illustration, not an income guarantee. A breakdown of earnings for every trip is available in the SEVA Driver app."
      },
      {
        "type": "cta",
        "text": "See the requirements and benefits of driving with SEVA.",
        "href": "/partner/driver",
        "label": "Become a driver"
      }
    ],
    "related": [
      {
        "href": "/blog/cara-daftar-driver-ojek-online",
        "label": "How to become a driver"
      },
      {
        "href": "/partner/driver",
        "label": "Driver partner page"
      }
    ]
  },
  {
    "slug": "mengenal-seva-food",
    "title": "Meet SEVA Food: Our Upcoming Food Delivery Service",
    "seoTitle": "Meet SEVA Food: Food Delivery",
    "description": "What SEVA Food is, when you'll be able to use it, and how restaurant and home food business owners can register early as merchants.",
    "category": "Delivery",
    "published": "2026-10-11",
    "readMinutes": 2,
    "keywords": [
      "seva food",
      "food delivery greater jakarta",
      "food delivery merchant sign up"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "SEVA Food is a food delivery service from partner restaurants and local food businesses that SEVA is preparing. It is still onboarding merchants and can't be ordered yet."
      },
      {
        "type": "h2",
        "text": "What to expect"
      },
      {
        "type": "ul",
        "items": [
          "Dishes from local restaurants and food businesses across Greater Jakarta.",
          "Orders delivered by SEVA driver partners in dedicated delivery bags.",
          "Payment through SEVA eWallet and other methods in the app."
        ]
      },
      {
        "type": "h2",
        "text": "For restaurant and small business owners"
      },
      {
        "type": "p",
        "text": "Restaurant, café, and food business owners can register early with no registration fee. The SEVA team will contact you when onboarding opens."
      },
      {
        "type": "p",
        "text": "The launch will be announced in the SEVA app and on Instagram @seva.taxi."
      },
      {
        "type": "cta",
        "text": "Register your food business as a merchant.",
        "href": "/services/food#daftar-merchant",
        "label": "Register as a merchant"
      }
    ],
    "related": [
      {
        "href": "/services/food",
        "label": "About SEVA Food"
      },
      {
        "href": "/blog/kirim-hampers-dan-kue-dengan-kurir-instan",
        "label": "Sending hampers & cakes"
      }
    ]
  },
  {
    "slug": "taksi-online-jakarta-pusat-ke-bandara-soekarno-hatta",
    "title": "Online Taxi from Central Jakarta to Soekarno-Hatta Airport: Fare Estimates",
    "seoTitle": "Online Taxi Central Jakarta to CGK Airport",
    "description": "SEVA Car fare estimates from Central Jakarta to Soekarno-Hatta Airport (CGK), luggage space, tolls, and tips so you leave on time.",
    "category": "Airports & Stations",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "online taxi central jakarta to soekarno hatta airport",
      "taxi fare central jakarta to cgk",
      "taxi to cgk airport"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Heading from Thamrin, Sudirman, or Monas to Soekarno-Hatta Airport? SEVA Car picks you up at your door or building lobby in a comfortable MPV, so you don't have to drag your suitcases to public transport."
      },
      {
        "type": "h2",
        "text": "SEVA Car fare estimates from Central Jakarta"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 22,
            "label": "From the part of Central Jakarta closest to the airport"
          },
          {
            "km": 27,
            "label": "A typical trip from Central Jakarta"
          },
          {
            "km": 32,
            "label": "From the far side of Central Jakarta"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE_EN
      },
      {
        "type": "h2",
        "text": "Tolls and parking"
      },
      {
        "type": "p",
        "text": "The fare in the app is the trip fare. Tolls on the route and official airport parking are paid by the passenger at the actual cost."
      },
      {
        "type": "h2",
        "text": "Tips for getting to the airport"
      },
      {
        "type": "ul",
        "items": [
          "Allow extra time for traffic, especially in the morning and evening rush.",
          "SEVA Car carries up to 4 passengers with about 2 medium suitcases and 2 backpacks; book two cars if you have more luggage.",
          "Cancelling a SEVA Car within the first 5 minutes after booking is free.",
          "Turn on Trip Sharing so your family can follow your route."
        ]
      },
      {
        "type": "cta",
        "text": "Read the full guide to getting to Soekarno-Hatta Airport.",
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "CGK airport guide"
      }
    ],
    "related": [
      {
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Online taxi to Soekarno-Hatta Airport"
      },
      {
        "href": "/services/car",
        "label": "SEVA Car details"
      }
    ]
  },
  {
    "slug": "taksi-online-jakarta-selatan-ke-bandara-soekarno-hatta",
    "title": "Online Taxi from South Jakarta to Soekarno-Hatta Airport: Fare Estimates",
    "seoTitle": "Online Taxi South Jakarta to CGK Airport",
    "description": "SEVA Car fare estimates from South Jakarta to Soekarno-Hatta Airport (CGK), luggage space, tolls, and tips so you leave on time.",
    "category": "Airports & Stations",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "online taxi south jakarta to soekarno hatta airport",
      "taxi fare south jakarta to cgk",
      "taxi to cgk airport"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Heading from SCBD, Kuningan, or Kebayoran to Soekarno-Hatta Airport? SEVA Car picks you up at your door or building lobby in a comfortable MPV, so you don't have to drag your suitcases to public transport."
      },
      {
        "type": "h2",
        "text": "SEVA Car fare estimates from South Jakarta"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 30,
            "label": "From the part of South Jakarta closest to the airport"
          },
          {
            "km": 35,
            "label": "A typical trip from South Jakarta"
          },
          {
            "km": 40,
            "label": "From the far side of South Jakarta"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE_EN
      },
      {
        "type": "h2",
        "text": "Tolls and parking"
      },
      {
        "type": "p",
        "text": "The fare in the app is the trip fare. Tolls on the route and official airport parking are paid by the passenger at the actual cost."
      },
      {
        "type": "h2",
        "text": "Tips for getting to the airport"
      },
      {
        "type": "ul",
        "items": [
          "Allow extra time for traffic, especially in the morning and evening rush.",
          "SEVA Car carries up to 4 passengers with about 2 medium suitcases and 2 backpacks; book two cars if you have more luggage.",
          "Cancelling a SEVA Car within the first 5 minutes after booking is free.",
          "Turn on Trip Sharing so your family can follow your route."
        ]
      },
      {
        "type": "cta",
        "text": "Read the full guide to getting to Soekarno-Hatta Airport.",
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "CGK airport guide"
      }
    ],
    "related": [
      {
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Online taxi to Soekarno-Hatta Airport"
      },
      {
        "href": "/services/car",
        "label": "SEVA Car details"
      }
    ]
  },
  {
    "slug": "taksi-online-jakarta-barat-ke-bandara-soekarno-hatta",
    "title": "Online Taxi from West Jakarta to Soekarno-Hatta Airport: Fare Estimates",
    "seoTitle": "Online Taxi West Jakarta to CGK Airport",
    "description": "SEVA Car fare estimates from West Jakarta to Soekarno-Hatta Airport (CGK), luggage space, tolls, and tips so you leave on time.",
    "category": "Airports & Stations",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "online taxi west jakarta to soekarno hatta airport",
      "taxi fare west jakarta to cgk",
      "taxi to cgk airport"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Heading from Puri Indah, Grogol, or Kebon Jeruk to Soekarno-Hatta Airport? SEVA Car picks you up at your door or building lobby in a comfortable MPV, so you don't have to drag your suitcases to public transport."
      },
      {
        "type": "h2",
        "text": "SEVA Car fare estimates from West Jakarta"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 15,
            "label": "From the part of West Jakarta closest to the airport"
          },
          {
            "km": 20,
            "label": "A typical trip from West Jakarta"
          },
          {
            "km": 25,
            "label": "From the far side of West Jakarta"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE_EN
      },
      {
        "type": "h2",
        "text": "Tolls and parking"
      },
      {
        "type": "p",
        "text": "The fare in the app is the trip fare. Tolls on the route and official airport parking are paid by the passenger at the actual cost."
      },
      {
        "type": "h2",
        "text": "Tips for getting to the airport"
      },
      {
        "type": "ul",
        "items": [
          "Allow extra time for traffic, especially in the morning and evening rush.",
          "SEVA Car carries up to 4 passengers with about 2 medium suitcases and 2 backpacks; book two cars if you have more luggage.",
          "Cancelling a SEVA Car within the first 5 minutes after booking is free.",
          "Turn on Trip Sharing so your family can follow your route."
        ]
      },
      {
        "type": "cta",
        "text": "Read the full guide to getting to Soekarno-Hatta Airport.",
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "CGK airport guide"
      }
    ],
    "related": [
      {
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Online taxi to Soekarno-Hatta Airport"
      },
      {
        "href": "/services/car",
        "label": "SEVA Car details"
      }
    ]
  },
  {
    "slug": "taksi-online-jakarta-utara-ke-bandara-soekarno-hatta",
    "title": "Online Taxi from North Jakarta to Soekarno-Hatta Airport: Fare Estimates",
    "seoTitle": "Online Taxi North Jakarta to CGK Airport",
    "description": "SEVA Car fare estimates from North Jakarta to Soekarno-Hatta Airport (CGK), luggage space, tolls, and tips so you leave on time.",
    "category": "Airports & Stations",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "online taxi north jakarta to soekarno hatta airport",
      "taxi fare north jakarta to cgk",
      "taxi to cgk airport"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Heading from PIK, Pluit, or Kelapa Gading to Soekarno-Hatta Airport? SEVA Car picks you up at your door or building lobby in a comfortable MPV, so you don't have to drag your suitcases to public transport."
      },
      {
        "type": "h2",
        "text": "SEVA Car fare estimates from North Jakarta"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 20,
            "label": "From the part of North Jakarta closest to the airport"
          },
          {
            "km": 25,
            "label": "A typical trip from North Jakarta"
          },
          {
            "km": 30,
            "label": "From the far side of North Jakarta"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE_EN
      },
      {
        "type": "h2",
        "text": "Tolls and parking"
      },
      {
        "type": "p",
        "text": "The fare in the app is the trip fare. Tolls on the route and official airport parking are paid by the passenger at the actual cost."
      },
      {
        "type": "h2",
        "text": "Tips for getting to the airport"
      },
      {
        "type": "ul",
        "items": [
          "Allow extra time for traffic, especially in the morning and evening rush.",
          "SEVA Car carries up to 4 passengers with about 2 medium suitcases and 2 backpacks; book two cars if you have more luggage.",
          "Cancelling a SEVA Car within the first 5 minutes after booking is free.",
          "Turn on Trip Sharing so your family can follow your route."
        ]
      },
      {
        "type": "cta",
        "text": "Read the full guide to getting to Soekarno-Hatta Airport.",
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "CGK airport guide"
      }
    ],
    "related": [
      {
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Online taxi to Soekarno-Hatta Airport"
      },
      {
        "href": "/services/car",
        "label": "SEVA Car details"
      }
    ]
  },
  {
    "slug": "taksi-online-jakarta-timur-ke-bandara-soekarno-hatta",
    "title": "Online Taxi from East Jakarta to Soekarno-Hatta Airport: Fare Estimates",
    "seoTitle": "Online Taxi East Jakarta to CGK Airport",
    "description": "SEVA Car fare estimates from East Jakarta to Soekarno-Hatta Airport (CGK), luggage space, tolls, and tips so you leave on time.",
    "category": "Airports & Stations",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "online taxi east jakarta to soekarno hatta airport",
      "taxi fare east jakarta to cgk",
      "taxi to cgk airport"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Heading from Cawang, Rawamangun, or Cakung to Soekarno-Hatta Airport? SEVA Car picks you up at your door or building lobby in a comfortable MPV, so you don't have to drag your suitcases to public transport."
      },
      {
        "type": "h2",
        "text": "SEVA Car fare estimates from East Jakarta"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 35,
            "label": "From the part of East Jakarta closest to the airport"
          },
          {
            "km": 40,
            "label": "A typical trip from East Jakarta"
          },
          {
            "km": 45,
            "label": "From the far side of East Jakarta"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE_EN
      },
      {
        "type": "h2",
        "text": "Tolls and parking"
      },
      {
        "type": "p",
        "text": "The fare in the app is the trip fare. Tolls on the route and official airport parking are paid by the passenger at the actual cost."
      },
      {
        "type": "h2",
        "text": "Tips for getting to the airport"
      },
      {
        "type": "ul",
        "items": [
          "Allow extra time for traffic, especially in the morning and evening rush.",
          "SEVA Car carries up to 4 passengers with about 2 medium suitcases and 2 backpacks; book two cars if you have more luggage.",
          "Cancelling a SEVA Car within the first 5 minutes after booking is free.",
          "Turn on Trip Sharing so your family can follow your route."
        ]
      },
      {
        "type": "cta",
        "text": "Read the full guide to getting to Soekarno-Hatta Airport.",
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "CGK airport guide"
      }
    ],
    "related": [
      {
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Online taxi to Soekarno-Hatta Airport"
      },
      {
        "href": "/services/car",
        "label": "SEVA Car details"
      }
    ]
  },
  {
    "slug": "taksi-online-tangerang-ke-bandara-soekarno-hatta",
    "title": "Online Taxi from Tangerang City to Soekarno-Hatta Airport: Fare Estimates",
    "seoTitle": "Online Taxi Tangerang City to CGK Airport",
    "description": "SEVA Car fare estimates from Tangerang City to Soekarno-Hatta Airport (CGK), luggage space, tolls, and tips so you leave on time.",
    "category": "Airports & Stations",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "online taxi tangerang city to soekarno hatta airport",
      "taxi fare tangerang to cgk",
      "taxi to cgk airport"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Heading from central Tangerang City and nearby areas to Soekarno-Hatta Airport? SEVA Car picks you up at your door or building lobby in a comfortable MPV, so you don't have to drag your suitcases to public transport."
      },
      {
        "type": "h2",
        "text": "SEVA Car fare estimates from Tangerang City"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 10,
            "label": "From the part of Tangerang City closest to the airport"
          },
          {
            "km": 15,
            "label": "A typical trip from Tangerang City"
          },
          {
            "km": 20,
            "label": "From the far side of Tangerang City"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE_EN
      },
      {
        "type": "h2",
        "text": "Tolls and parking"
      },
      {
        "type": "p",
        "text": "The fare in the app is the trip fare. Tolls on the route and official airport parking are paid by the passenger at the actual cost."
      },
      {
        "type": "h2",
        "text": "Tips for getting to the airport"
      },
      {
        "type": "ul",
        "items": [
          "Allow extra time for traffic, especially in the morning and evening rush.",
          "SEVA Car carries up to 4 passengers with about 2 medium suitcases and 2 backpacks; book two cars if you have more luggage.",
          "Cancelling a SEVA Car within the first 5 minutes after booking is free.",
          "Turn on Trip Sharing so your family can follow your route."
        ]
      },
      {
        "type": "cta",
        "text": "Read the full guide to getting to Soekarno-Hatta Airport.",
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "CGK airport guide"
      }
    ],
    "related": [
      {
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Online taxi to Soekarno-Hatta Airport"
      },
      {
        "href": "/services/car",
        "label": "SEVA Car details"
      }
    ]
  },
  {
    "slug": "taksi-online-bsd-tangerang-selatan-ke-bandara-soekarno-hatta",
    "title": "Online Taxi from BSD & South Tangerang to Soekarno-Hatta Airport: Fare Estimates",
    "seoTitle": "Taxi BSD & South Tangerang to CGK Airport",
    "description": "SEVA Car fare estimates from BSD & South Tangerang to Soekarno-Hatta Airport (CGK), luggage space, tolls, and tips so you leave on time.",
    "category": "Airports & Stations",
    "published": "2026-10-11",
    "readMinutes": 3,
    "keywords": [
      "online taxi bsd south tangerang to soekarno hatta airport",
      "taxi fare bsd to cgk",
      "taxi to cgk airport"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "Heading from BSD City, Alam Sutera, or Serpong to Soekarno-Hatta Airport? SEVA Car picks you up at your door or building lobby in a comfortable MPV, so you don't have to drag your suitcases to public transport."
      },
      {
        "type": "h2",
        "text": "SEVA Car fare estimates from BSD & South Tangerang"
      },
      {
        "type": "fareTable",
        "service": "car",
        "distances": [
          {
            "km": 30,
            "label": "From the part of BSD & South Tangerang closest to the airport"
          },
          {
            "km": 35,
            "label": "A typical trip from BSD & South Tangerang"
          },
          {
            "km": 40,
            "label": "From the far side of BSD & South Tangerang"
          }
        ]
      },
      {
        "type": "note",
        "text": FARE_NOTE_EN
      },
      {
        "type": "h2",
        "text": "Tolls and parking"
      },
      {
        "type": "p",
        "text": "The fare in the app is the trip fare. Tolls on the route and official airport parking are paid by the passenger at the actual cost."
      },
      {
        "type": "h2",
        "text": "Tips for getting to the airport"
      },
      {
        "type": "ul",
        "items": [
          "Allow extra time for traffic, especially in the morning and evening rush.",
          "SEVA Car carries up to 4 passengers with about 2 medium suitcases and 2 backpacks; book two cars if you have more luggage.",
          "Cancelling a SEVA Car within the first 5 minutes after booking is free.",
          "Turn on Trip Sharing so your family can follow your route."
        ]
      },
      {
        "type": "cta",
        "text": "Read the full guide to getting to Soekarno-Hatta Airport.",
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "CGK airport guide"
      }
    ],
    "related": [
      {
        "href": "/blog/taksi-online-ke-bandara-soekarno-hatta",
        "label": "Online taxi to Soekarno-Hatta Airport"
      },
      {
        "href": "/services/car",
        "label": "SEVA Car details"
      }
    ]
  }
];
