"use client";

import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
// 1. Impor Suspense dari React
import { Suspense } from "react"; 

// 2. Sederhanakan dynamic import, hapus properti 'loading'
const HeroAnimation = dynamic(() => import("./HeroAnimation"), { 
  ssr: false,
});

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden bg-slate-50 dark:bg-slate-900">
      
      {/* Efek Latar Belakang Halus */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="text-center lg:text-left order-2 lg:order-1">
          
          {/* Badge Indikator Status Tersedia */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            Tersedia di Seluruh Bali
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 fill-mode-both">
            Jasa <span className="text-primary">Cleaning Service Bali</span> Profesional
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 fill-mode-both text-justify">
            Spesialis jasa bersih rumah, deep cleaning villa, cuci sofa, hingga poles lantai marmer panggilan di Bali. Pengerjaan detail, alat lengkap, dan bergaransi.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
            <Button size="lg" asChild className="rounded-full text-lg px-8 py-6 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all hover:-translate-y-1">
              <a href="https://wa.me/6285726868969" target="_blank" rel="noopener noreferrer">
                Pesan Sekarang via WA
              </a>
            </Button>
            
            <Button size="lg" asChild variant="outline" className="rounded-full text-lg px-8 py-6 bg-white dark:bg-transparent border-slate-200 hover:border-primary/50 transition-all hover:-translate-y-1">
              <a href="/#layanan">
                Lihat Layanan
              </a>
            </Button>
          </div>
          
        </div>

        <div className="w-full flex justify-center order-1 lg:order-2 animate-in fade-in zoom-in-95 duration-1000">
          {/* 3. Bungkus komponen dinamis dengan Suspense, pindahkan fallback ke sini */}
          <Suspense fallback={(
            <div className="w-full max-w-lg mx-auto aspect-square bg-slate-200/50 dark:bg-slate-800/50 rounded-full animate-pulse"></div>
          )}>
            <HeroAnimation />
          </Suspense>
        </div>
        
      </div>
    </section>
  );
}