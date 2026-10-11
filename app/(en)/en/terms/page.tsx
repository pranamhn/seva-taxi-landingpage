import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import LegalDocument, { type LegalSection } from "@/components/layout/LegalDocument";
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_WHATSAPP_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  LEGAL_NAME,
  OFFICE_ADDRESS_LINES,
  SUPPORT_EMAIL,
} from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

// Terjemahan Inggris dari app/(id)/terms. Versi Indonesia yang berlaku bila ada perbedaan — perbarui keduanya bersamaan.
export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions",
  description:
    "Terms and conditions for SEVA RIDE, CAR, SEND, and FOOD: bookings, fares, payments, cancellations, and the responsibilities of each party.",
  path: "/terms",
  locale: "en",
});

const CONTACT_EMAIL = SUPPORT_EMAIL;

const sections: LegalSection[] = [
  {
    id: "penerimaan",
    title: "Acceptance of Terms",
    content: (
      <p>
        By accessing sevataxi.com, installing the app, or booking SEVA services operated by{" "}
        <strong>{LEGAL_NAME}</strong>, you confirm that you have read, understood, and agree to these terms and our{" "}
        <Link href="/en/privacy">Privacy Policy</Link>. If you do not agree, please do not use our services.
      </p>
    ),
  },
  {
    id: "definisi",
    title: "Definitions",
    content: (
      <ul>
        <li><strong>Services</strong> — SEVA services available through the app and website: SEVA RIDE, SEVA CAR, SEVA SEND, and other announced services (including SEVA FOOD once launched).</li>
        <li><strong>User</strong> — anyone who uses the website or app to book Services.</li>
        <li><strong>Partners</strong> — drivers, couriers, and fleet operators who work with SEVA to deliver the Services.</li>
        <li><strong>SEVA eWallet</strong> — the digital wallet in the SEVA app used for payments and balance records.</li>
      </ul>
    ),
  },
  {
    id: "layanan",
    title: "Scope of Services",
    content: (
      <>
        <ul>
          <li><strong>SEVA RIDE</strong> — motorbike trips for one passenger.</li>
          <li><strong>SEVA CAR</strong> — trips by car.</li>
          <li><strong>SEVA SEND</strong> — instant parcel and document delivery.</li>
          <li><strong>SEVA FOOD</strong> — food delivery; availability follows the announced launch schedule.</li>
        </ul>
        <p>
          SEVA provides the app and booking system, while trips and deliveries are carried out with verified
          Partners. Availability depends on area, time, and Partner availability, as listed on the{" "}
          <Link href="/en/cities">Service Areas</Link> page.
        </p>
      </>
    ),
  },
  {
    id: "akun",
    title: "Account and Security",
    content: (
      <ul>
        <li>You must provide accurate, up-to-date information when registering.</li>
        <li>You are responsible for keeping your account and OTP codes confidential; do not share them with anyone, including people claiming to be from SEVA.</li>
        <li>Contact us immediately if you suspect unauthorised use of your account.</li>
      </ul>
    ),
  },
  {
    id: "tarif-pembayaran",
    title: "Fares and Payment",
    content: (
      <ul>
        <li>Fares are shown in the app before you confirm a booking. Fare estimates on this website are only estimates and may differ from the fare shown in the app.</li>
        <li>Payment is made via SEVA eWallet or other methods available in the app. Completing a payment may require OTP verification.</li>
        <li>Any additional charges relevant to a trip or delivery will be shown in the app.</li>
      </ul>
    ),
  },
  {
    id: "pembatalan",
    title: "Cancellation",
    content: (
      <p>
        For SEVA CAR, cancelling within the first 5 minutes after booking is free. Cancellation terms after that
        time, and for other services, are shown in the app at the time of booking. Repeated cancellations without a
        good reason may lead to account restrictions.
      </p>
    ),
  },
  {
    id: "kewajiban-pengguna",
    title: "User Obligations",
    content: (
      <ul>
        <li>Be courteous to Partners and follow safety instructions, including wearing a helmet and seat belt.</li>
        <li>Do not use the Services for unlawful purposes, or carry prohibited or dangerous items.</li>
        <li>Do not damage Partners&apos; vehicles or equipment; damage caused by a User&apos;s negligence is the User&apos;s responsibility.</li>
        <li>For SEVA SEND: describe parcel contents honestly, respect the weight and size limits shown in the app, and do not send items prohibited by law.</li>
      </ul>
    ),
  },
  {
    id: "keselamatan",
    title: "Safety",
    content: (
      <p>
        The app provides safety features such as an emergency (SOS) button and trip tracking. Use these features if
        you feel unsafe. In an emergency, also contact local emergency services. More information is on the{" "}
        <Link href="/en/safety">Safety Standards</Link> page.
      </p>
    ),
  },
  {
    id: "hak-kekayaan-intelektual",
    title: "Intellectual Property",
    content: (
      <p>
        SEVA&apos;s name, logo, design, software, and content are protected by intellectual property rights and
        belong to {LEGAL_NAME} or its licensors. You may not copy, modify, or distribute them without written
        permission.
      </p>
    ),
  },
  {
    id: "tanggung-jawab",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          To the extent permitted by law, SEVA is not liable for indirect losses, or losses arising from
          circumstances beyond our reasonable control (such as traffic, extreme weather, network outages, or the
          actions of third parties).
        </p>
        <p>
          These terms do not limit Users&apos; consumer rights under applicable law, or any liability that cannot be
          excluded by law.
        </p>
      </>
    ),
  },
  {
    id: "penangguhan",
    title: "Suspension and Termination",
    content: (
      <p>
        SEVA may suspend or end your access if these terms are breached, fraud is suspected, or for safety reasons.
        You may stop using the Services at any time and request account deletion through our help channels.
      </p>
    ),
  },
  {
    id: "perubahan",
    title: "Changes to These Terms",
    content: (
      <p>
        We may update these terms from time to time. The latest version applies from the moment it is published on
        this page. By continuing to use the Services after a change, you are deemed to accept the updated terms.
      </p>
    ),
  },
  {
    id: "hukum",
    title: "Governing Law and Disputes",
    content: (
      <p>
        These terms are governed by the laws of the Republic of Indonesia. Disputes will first be settled amicably;
        if that fails, they will be resolved through the competent institutions or courts in Indonesia.
      </p>
    ),
  },
  {
    id: "kontak",
    title: "Contact Us",
    content: (
      <p>
        <strong>{LEGAL_NAME}</strong>
        <br />
        {OFFICE_ADDRESS_LINES.join(", ")}
        <br />
        Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        <br />
        WhatsApp / Phone: <a href={CONTACT_WHATSAPP_URL}>{CONTACT_PHONE_DISPLAY}</a>
        <br />
        Instagram: <a href={INSTAGRAM_URL}>{INSTAGRAM_HANDLE}</a>
      </p>
    ),
  },
];

export default function TermsPageEn() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        <PageHeader
          locale="en"
          badge="TERMS OF SERVICE"
          title="Terms & Conditions"
          subtitle="The rules for using the SEVA website and app: bookings, fares, payments, cancellations, and each party's rights and obligations."
          breadcrumbs={[{ label: "Terms & Conditions" }]}
        />
        <LegalDocument
          locale="en"
          updatedAt="10 October 2026"
          intro={
            <>
              <p>Please read these terms and conditions carefully before using SEVA services.</p>
              <p className="text-xs text-slate-500">
                This is an English translation for convenience. If there is any difference in meaning, the{" "}
                <Link href="/terms" hrefLang="id" className="text-[#225FD2] hover:underline">
                  Indonesian version
                </Link>{" "}
                prevails.
              </p>
            </>
          }
          sections={sections}
        />
      </main>
      <Footer locale="en" />
    </>
  );
}
