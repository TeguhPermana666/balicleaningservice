"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  priority?: boolean; // Tambahkan properti ini
}

export default function YouTubeFacade({ videoId, title, priority = false }: YouTubeFacadeProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <>
      <div 
        className="relative w-full max-w-[280px] mx-auto aspect-[9/16] rounded-2xl overflow-hidden shadow-lg group cursor-pointer border border-slate-200 dark:border-slate-800 bg-slate-900"
        onClick={() => setIsOpen(true)}
      >
        <Image 
          src={thumbnailUrl} 
          alt={`Thumbnail video ${title}`} 
          fill 
          priority={priority} // Gunakan properti priority di sini
          className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" 
          sizes="(max-width: 768px) 100vw, 300px" // Sudah dioptimasi
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
          <Play className="w-8 h-8 text-white ml-1 group-hover:text-white" fill="currentColor" />
        </div>

        <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
           <p className="text-white text-sm sm:text-base font-medium line-clamp-2 drop-shadow-md">{title}</p>
        </div>
      </div>

      {/* ... POP-UP MODAL SAMA SEPERTI SEBELUMNYA ... */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer" onClick={() => setIsOpen(false)}></div>
          <div className="relative z-10 w-full max-w-[400px] h-[80vh] sm:h-[85vh] bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-300">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-red-600 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors shadow-lg" aria-label="Tutup video">
              <X size={24} />
            </button>
            <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      )}
    </>
  );
}