"use client";

import Image from "next/image";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";
// 1. Impor Suspense dari React
import { Suspense } from "react"; 

// 2. Gunakan dynamic import biasa, bungkus di Suspense di bawah
const CompanyStats = dynamic(() => import("@/components/home/CompanyStats"), { 
  ssr: false 
});

export default function AboutUs() {
  return (
    <section id="tentang-kami" className="w-full py-24 bg-white dark:bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Kolom Kiri: Gambar Banner & Badge Pengalaman */}
          <div className="relative">
            {/* Gambar Utama (Bawah) */}
            <div className="relative w-[85%] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/about_utama.webp" 
                alt="Tim Aleksa Bali Cleaning sedang bekerja" 
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="eager"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>

            {/* Gambar Sekunder (Atas / Overlapping) */}
            <div className="absolute -bottom-10 -right-4 lg:-right-10 w-[55%] aspect-square rounded-3xl overflow-hidden shadow-xl border-8 border-white dark:border-background">
              <Image 
                src="/images/about_sekunder.webp" 
                alt="Csleaning service profesional" 
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
                loading="eager"
              />
            </div>

            {/* Badge Pengalaman (Mengambang) */}
            <div className="absolute top-10 -left-6 lg:-left-12 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow border border-slate-100 dark:border-slate-700">
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <Sparkles size={32} />
              </div>
              <div>
                <p className="text-4xl font-extrabold text-foreground">5<span className="text-primary">+</span></p>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Tahun Pengalaman</p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Teks & Ikon Fitur */}
          <div className="flex flex-col text-justify">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary"></div>
              <p className="text-primary font-bold uppercase tracking-widest text-sm">Kenali Aleksa Bali</p>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-6">
              Cerita dan Pengalaman Kami dalam Layanan <span className="text-primary">Kebersihan</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Sejak tahun 2019, Aleksa Bali Cleaning Service hadir sebagai mitra terpercaya perawatan properti di Pulau Dewata. Kami bukan sekadar tukang bersih-bersih biasa. Kami adalah tim lokal Bali profesional yang memahami standar kebersihan tertinggi untuk rumah pribadi, villa premium, hingga gedung perkantoran.
            </p>

            <div className="space-y-8">
              {/* Poin 1 */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <CheckCircle2 size={32} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Petugas Berpengalaman & Jujur</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Dengan tim yang solid dan tersertifikasi, kami fokus pada proses <span className="text-primary font-semibold">deep cleaning</span> yang detail, memastikan setiap sudut properti Anda bebas kuman dan noda membandel secara aman.
                  </p>
                </div>
              </div>

              {/* Poin 2 */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <ShieldCheck size={32} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Peralatan Mesin Terbaik</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Kami tidak menggunakan alat seadanya. Pengerjaan dilakukan menggunakan mesin <span className="text-primary font-semibold">extractor modern</span>, <span className="text-primary font-semibold">polisher</span> lantai khusus, dan <span className="text-primary font-semibold">bahan sampo</span> ramah lingkungan (<span className="text-primary font-semibold">eco-friendly</span>).
                  </p>
                </div>
              </div>
            </div>

            {/* Tombol CTA Bawah */}
            <div className="mt-12 flex items-center gap-6 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
              <div className="flex-1">
                <p className="text-sm font-semibold text-muted-foreground mb-1">Butuh Bantuan Kami?</p>
                <p className="text-lg font-bold text-foreground">Konsultasi & Survei Gratis</p>
              </div>
              <a 
                href="https://wa.me/6285808463467" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
              >
                Hubungi WA Kami
              </a>
            </div>

          </div>
        </div>
      </div>
      {/* 4. Statistik Perusahaan (Animasi Angka) */}
      {/* 3. Bungkus CompanyStats dengan Suspense, tambahkan fallback agar CLS terjaga */}
      <Suspense fallback={(
        <div className="w-full h-32 bg-slate-100 dark:bg-slate-900/80 animate-pulse rounded-2xl mt-12"></div>
      )}>
        <CompanyStats />
      </Suspense>
    </section>
  );
}