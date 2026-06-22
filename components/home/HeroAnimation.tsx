"use client";

import dynamic from "next/dynamic";
// Import file JSON murni tanpa require
import cleanerAnimation from "./animations/Cleaning.json";

// Mematikan SSR agar animasi tidak error di server Next.js
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Menerapkan casting seperti yang Anda sarankan agar aman dari TypeScript strict mode
const cleanerData = cleanerAnimation as any;

export default function HeroAnimation() {
  return (
    <div className="w-full max-w-lg mx-auto drop-shadow-xl">
      <Lottie 
        animationData={cleanerData} 
        loop={true} 
      />
    </div>
  );
}