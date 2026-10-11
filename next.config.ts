import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  redirects() {
    // URL lama /panduan dipindah ke /blog, driver & fleet-operator dipindah ke partners
    return [
      { source: "/panduan", destination: "/blog", permanent: true },
      { source: "/panduan/:slug", destination: "/blog/:slug", permanent: true },
      { source: "/driver", destination: "/driver-partners", permanent: true },
      { source: "/fleet-operator", destination: "/fleet-partners", permanent: true },
    ];
  },
  headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
