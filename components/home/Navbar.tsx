"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        
        {/* Logo Area */}
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group min-w-0">
          <Image 
            src="/images/logo.webp" 
            alt="Ikon Aleksa Bali Cleaning Service" 
            width={48} 
            height={48} 
            className="w-10 h-10 lg:w-12 lg:h-12 object-contain transition-transform duration-300 group-hover:scale-105 shrink-0"
            priority 
            loading="eager"
          />
          <div className="flex flex-col justify-center min-w-0">
            <span className="text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight leading-none truncate">
              <span className="text-primary">BALI</span>{" "}
              <span className="text-foreground">CLEANING</span>
            </span>
            <span className="text-[9px] sm:text-[10px] lg:text-xs font-semibold text-muted-foreground tracking-widest uppercase hidden sm:block mt-0.5 truncate">
              Professional Service
            </span>
          </div>
        </Link>

        {/* Navigation Area */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 font-medium">
          <Link href="/#tentang-kami" className="transition-colors hover:text-primary">Tentang</Link>
          <Link href="/#layanan" className="transition-colors hover:text-primary">Layanan</Link>
          <Link href="/#kenapa-kami" className="transition-colors hover:text-primary">Kenapa Kami</Link>
          <Link href="/#testimoni" className="transition-colors hover:text-primary">Testimoni</Link>
          <Link href="/blog" className="transition-colors hover:text-primary">Tips Kebersihan</Link>
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden lg:flex shrink-0">
          <Button asChild className="rounded-full shadow-md hover:shadow-lg transition-all">
            <a href="https://wa.me/6285726868969" target="_blank" rel="noopener noreferrer">
              Hubungi Kami
            </a>
          </Button>
        </div>

        {/* Mobile & Tablet Menu Button */}
        <button
          className="lg:hidden p-3 w-12 h-12 flex items-center justify-center text-foreground hover:text-primary focus:outline-none shrink-0"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Tutup menu" : "Buka menu navigasi"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile & Tablet Navigation Dropdown - PERBAIKAN: Ditambah tanda "/" sebelum "#" */}
      {isOpen && (
        <div className="lg:hidden border-b bg-background px-4 py-6 space-y-5 shadow-xl animate-in slide-in-from-top-2">
          <Link href="/#tentang-kami" className="block text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Tentang</Link>
          <Link href="/#layanan" className="block text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Layanan</Link>
          <Link href="/#kenapa-kami" className="block text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Kenapa Kami</Link>
          <Link href="/#testimoni" className="block text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Testimoni</Link>
          <Link href="/blog" className="block text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Tips Kebersihan</Link>
          
          <div className="pt-4 mt-4 border-t border-border/50">
            <Button asChild className="w-full rounded-full text-md py-6">
              <a href="https://wa.me/6285726868969" target="_blank" rel="noopener noreferrer">
                Hubungi Kami Sekarang
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}