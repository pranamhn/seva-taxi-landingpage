import Image from "next/image";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

type Size = "sm" | "md" | "lg";

const HEIGHT: Record<Size, string> = {
  sm: "h-7 sm:h-8",
  md: "h-9",
  lg: "h-10",
};

// Renders the App Store + Google Play badges as two sibling links so the
// parent decides the flex layout. Badges are self-hosted in /public/images/badges.
const ALT: Record<Locale, { appStore: string; googlePlay: string }> = {
  id: { appStore: "Unduh di App Store", googlePlay: "Dapatkan di Google Play" },
  en: { appStore: "Download on the App Store", googlePlay: "Get it on Google Play" },
};

export default function StoreBadges({ size = "lg", locale = "id" }: { size?: Size; locale?: Locale }) {
  const height = HEIGHT[size];
  return (
    <>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 transition-transform hover:scale-105"
      >
        <Image
          src="/images/badges/app-store.svg"
          alt={ALT[locale].appStore}
          width={120}
          height={40}
          className={`${height} w-auto`}
        />
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 transition-transform hover:scale-105"
      >
        <Image
          src="/images/badges/google-play.png"
          alt={ALT[locale].googlePlay}
          width={564}
          height={168}
          className={`${height} w-auto`}
        />
      </a>
    </>
  );
}
