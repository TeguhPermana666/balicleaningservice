import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tambahkan blok images ini
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc", // Untuk Avatar Testimoni
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Untuk Gambar About Us & Why Us
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com", // Untuk Thumbnail YouTube Shorts
      }
    ],
  },
};

export default nextConfig;