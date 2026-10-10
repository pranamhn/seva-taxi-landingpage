import Image from "next/image";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/site";

type Size = "sm" | "md" | "lg";

const HEIGHT: Record<Size, string> = {
  sm: "h-7 sm:h-8",
  md: "h-9",
  lg: "h-10",
};

// Renders the App Store + Google Play badges as two sibling links so the
// parent decides the flex layout. Badges are self-hosted in /public/images/badges.
export default function StoreBadges({ size = "lg" }: { size?: Size }) {
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
          alt="Unduh di App Store"
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
          alt="Dapatkan di Google Play"
          width={564}
          height={168}
          className={`${height} w-auto`}
        />
      </a>
    </>
  );
}
