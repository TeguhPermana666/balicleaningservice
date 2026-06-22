import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  // Konfigurasi images yang sudah Anda buat sebelumnya biarkan saja tetap ada
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      }
    ],
  },
};

export default nextConfig;