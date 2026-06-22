import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Mengimpor komponen dari path spesifik yang Anda buat
import Navbar from "@/components/home/Navbar";
import WhatsAppFAB from "@/components/home/WhatsAppFAB";
import Footer from "@/components/home/Footer";
// Konfigurasi Font Inter bawaan Next.js (Secara otomatis diunduh dan dilayani secara lokal untuk mencegah CLS - Memenuhi Task 1.4)
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: "swap",
});

// TASK 5.2: Penggabungan Metadata lama Anda dengan konfigurasi SEO Lanjutan
export const metadata: Metadata = {
  metadataBase: new URL('https://balicleaningservice.com'), 
  title: {
    default: "Aleksa Bali Cleaning Service | Profesional & Terpercaya",
    template: "%s | Aleksa Bali Cleaning" 
  },
  description: "Layanan cleaning service premium untuk rumah, villa, dan kantor di Bali. Melayani cuci sofa, springbed, poles marmer, dan deep cleaning.",
  keywords: ["cleaning service bali", "jasa kebersihan bali", "cuci sofa bali", "deep cleaning villa", "poles marmer bali"],
  icons: {
    icon: "/images/logo.webp", 
    apple: "/images/logo.webp", 
  },
  openGraph: {
    title: 'Aleksa Bali Cleaning Service',
    description: 'Layanan cleaning service premium untuk rumah, villa, dan kantor di Bali.',
    url: 'https://balicleaningservice.com', 
    siteName: 'Aleksa Bali Cleaning',
    locale: 'id_ID',
    type: 'website',
  },
  alternates: {
    canonical: '/', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Menambahkan scroll-smooth agar saat link navbar (seperti #layanan) diklik, halamannya meluncur mulus
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Navbar />
        {/* Konten utama halaman (termasuk Hero Section di page.tsx) akan dirender di sini */}
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}