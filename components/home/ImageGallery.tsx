"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Mencegah scroll pada body saat gambar pop-up terbuka
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedImage]);

  return (
    <>
      {/* 1. Tampilan Grid Galeri */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 w-full max-w-7xl">
        {images.map((img, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedImage(img.src)}
            className="relative w-full aspect-square md:aspect-[4/3] rounded-xl overflow-hidden shadow-sm group border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 cursor-pointer"
          >
            <Image 
              src={img.src} 
              alt={img.alt} 
              fill 
              priority={index < 6} 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              loading="eager"
            />
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
               <span className="text-white text-sm font-medium px-6 py-2 border border-white/50 rounded-full">
                 Lihat Detail
               </span>
            </div>
          </div>
        ))}
      </div>

      {/* 2. Pop-up Modal Gambar Fullscreen */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300">
          
          {/* Backdrop Gelap (Klik di luar gambar untuk menutup) */}
          <div 
            className="absolute inset-0 bg-black/95 cursor-pointer backdrop-blur-sm" 
            onClick={() => setSelectedImage(null)}
          ></div>
          
          {/* Tombol Close (X) */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 z-20 w-12 h-12 bg-white/10 hover:bg-red-600 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
            aria-label="Tutup gambar"
          >
            <X size={28} />
          </button>

          {/* Gambar Layar Penuh (Tetap object-contain agar tidak terpotong saat diperbesar) */}
          <div className="relative z-10 w-full max-w-5xl h-full flex items-center justify-center animate-in zoom-in-95 duration-300 pointer-events-none">
             <Image 
                src={selectedImage} 
                alt="Detail hasil pekerjaan" 
                fill
                className="object-contain drop-shadow-2xl" 
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority 
                loading="eager"
             />
          </div>
        </div>
      )}
    </>
  );
}