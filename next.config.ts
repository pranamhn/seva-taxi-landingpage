import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Dua root layout (app/(id) & app/(en)) → 404 untuk URL tak dikenal ditangani app/global-not-found.tsx
  experimental: { globalNotFound: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  redirects() {
    // URL lama /panduan dipindah ke /blog; halaman kemitraan dipindah ke /partner/{driver,fleet,b2b}
    const partnerMoves = [
      { from: "/driver-partners", to: "/partner/driver" },
      { from: "/fleet-partners", to: "/partner/fleet" },
      { from: "/b2b-partners", to: "/partner/b2b" },
    ];
    return [
      { source: "/panduan", destination: "/blog", permanent: true },
      { source: "/panduan/:slug", destination: "/blog/:slug", permanent: true },
      { source: "/driver", destination: "/partner/driver", permanent: true },
      { source: "/fleet-operator", destination: "/partner/fleet", permanent: true },
      { source: "/fleet-partner", destination: "/partner/b2b", permanent: true },
      { source: "/partner", destination: "/partner/driver", permanent: false },
      { source: "/en/partner", destination: "/en/partner/driver", permanent: false },
      ...partnerMoves.flatMap(({ from, to }) => [
        { source: from, destination: to, permanent: true },
        { source: `/en${from}`, destination: `/en${to}`, permanent: true },
      ]),
    ];
  },
  headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
