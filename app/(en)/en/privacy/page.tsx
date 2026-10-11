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

// Terjemahan Inggris dari app/(id)/privacy. Versi Indonesia yang berlaku bila ada perbedaan — perbarui keduanya bersamaan.
export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How SEVA collects, uses, and protects users' personal data, and your rights under Indonesia's Personal Data Protection Law.",
  path: "/privacy",
  locale: "en",
});

const CONTACT_EMAIL = SUPPORT_EMAIL;

const sections: LegalSection[] = [
  {
    id: "pengendali-data",
    title: "Data Controller",
    content: (
      <p>
        This policy applies to the <strong>sevataxi.com</strong> website and the SEVA app operated by{" "}
        <strong>{LEGAL_NAME}</strong> (&ldquo;SEVA&rdquo;, &ldquo;we&rdquo;). Under this policy, SEVA acts as the
        personal data controller as defined in Law No. 27 of 2022 on Personal Data Protection (the &ldquo;PDP
        Law&rdquo;).
      </p>
    ),
  },
  {
    id: "data-dikumpulkan",
    title: "Data We Collect",
    content: (
      <>
        <p>The data we process depends on the services you use:</p>
        <ul>
          <li>
            <strong>Account data</strong> — your name, phone number, and other profile information you provide
            when registering or verifying your account (including OTP verification).
          </li>
          <li>
            <strong>Location data</strong> — pickup point, destination, and trip route when you book or take a
            trip.
          </li>
          <li>
            <strong>Transaction data</strong> — booking details, fares, payment method, and SEVA eWallet history.
          </li>
          <li>
            <strong>Communication data</strong> — messages and calls between you and driver partners through the
            in-app communication features, and conversations with customer service.
          </li>
          <li>
            <strong>Safety data</strong> — incident reports or use of the emergency (SOS) button and, on vehicles
            fitted with cabin cameras, recordings relevant to trip safety.
          </li>
          <li>
            <strong>Device and usage data</strong> — device type, app version, and technical logs needed for the
            app to work properly.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "situs-web",
    title: "Use of the sevataxi.com Website",
    content: (
      <>
        <p>
          This website is informational. You do not need an account to visit it. Text you enter in the fare
          estimator on the home page is processed in your browser to show an estimate and is not sent to or stored
          on our servers.
        </p>
        <p>
          We use Vercel Web Analytics to count page visits in aggregate. This service does not use cookies and does
          not identify you personally. This website does not set tracking cookies or advertising pixels.
        </p>
        <p>
          Forms on this website (corporate, fleet operator, and merchant partnerships, the SEVA Food waitlist, and
          problem reports) do not store your answers on our servers. Your answers are turned into a message that you
          send yourself to the SEVA team via WhatsApp or email, which we then use to follow up on your request.
        </p>
      </>
    ),
  },
  {
    id: "tujuan",
    title: "How We Use Data",
    content: (
      <ul>
        <li>To provide the service: processing bookings, matching you with driver partners, and completing trips or deliveries.</li>
        <li>To process payments, including OTP verification and SEVA eWallet records.</li>
        <li>To keep people safe, prevent fraud, and handle reports or complaints.</li>
        <li>To provide customer support and contact you about your orders.</li>
        <li>To meet legal obligations and official requests from competent authorities.</li>
        <li>To analyse and improve service quality and user experience.</li>
      </ul>
    ),
  },
  {
    id: "dasar-pemrosesan",
    title: "Legal Basis for Processing",
    content: (
      <p>
        We process personal data based on your consent, the performance of the service agreement, compliance with
        legal obligations, and/or legitimate interests, in line with the PDP Law. You may withdraw consent at any
        time, although some services may then no longer be available to you.
      </p>
    ),
  },
  {
    id: "pembagian-data",
    title: "Sharing Data with Others",
    content: (
      <>
        <p>We only share data as far as necessary with:</p>
        <ul>
          <li>
            <strong>Driver partners and fleet operators</strong> — the information needed to fulfil an order, such
            as your name, pickup point, and destination. Your phone number is masked in in-app communication.
          </li>
          <li>
            <strong>Service providers</strong> — parties that help us run the service, such as technology
            infrastructure and payment processing providers, who are bound to keep data confidential.
          </li>
          <li>
            <strong>Competent authorities</strong> — where required by law or a valid order.
          </li>
        </ul>
        <p>We do not sell your personal data.</p>
      </>
    ),
  },
  {
    id: "penyimpanan-keamanan",
    title: "Storage and Security",
    content: (
      <>
        <p>
          We keep personal data for as long as needed for the purposes above or as required by law, then delete or
          anonymise it.
        </p>
        <p>
          We apply reasonable technical and organisational safeguards to protect data from unauthorised access,
          disclosure, alteration, or deletion. However, no system is entirely risk-free; keep your OTP codes and
          device secure.
        </p>
      </>
    ),
  },
  {
    id: "hak-anda",
    title: "Your Rights",
    content: (
      <>
        <p>Under the PDP Law, you have the right to:</p>
        <ul>
          <li>be informed about how your personal data is processed;</li>
          <li>access and obtain a copy of your personal data;</li>
          <li>complete or update inaccurate data;</li>
          <li>request deletion or destruction of your data and end its processing;</li>
          <li>withdraw consent you have given;</li>
          <li>object to, or request restriction of, certain processing;</li>
          <li>request your data in a portable format, where applicable.</li>
        </ul>
        <p>
          To exercise these rights, contact us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We may ask
          you to verify your identity before processing a request, and will respond within the time limits set by
          law.
        </p>
      </>
    ),
  },
  {
    id: "anak",
    title: "Children",
    content: (
      <p>
        SEVA services are not intended for children. Minors must use the service with the supervision and consent
        of a parent or guardian. If you believe we have collected a child&apos;s data without valid consent, please
        contact us so we can act on it.
      </p>
    ),
  },
  {
    id: "perubahan",
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this policy from time to time. The latest version is always available on this page with its
        update date. We will announce material changes through the app or other official channels.
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

export default function PrivacyPageEn() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900 min-h-screen">
        <PageHeader
          locale="en"
          badge="PERSONAL DATA PROTECTION // LAW NO. 27 OF 2022"
          title="Privacy Policy"
          subtitle="What data we collect when you use SEVA, what we use it for, how we protect it, and what rights you have."
          breadcrumbs={[{ label: "Privacy Policy" }]}
        />
        <LegalDocument
          locale="en"
          updatedAt="10 October 2026"
          intro={
            <>
              <p>
                Your privacy matters to us. By using the SEVA website and app, you understand how we process personal
                data as described on this page.
              </p>
              <p className="text-xs text-slate-500">
                This is an English translation for convenience. If there is any difference in meaning, the{" "}
                <Link href="/privacy" hrefLang="id" className="text-[#225FD2] hover:underline">
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
