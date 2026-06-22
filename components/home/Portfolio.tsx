import YouTubeFacade from "@/components/home/YouTubeFacade";
import ImageGallery from "@/components/home/ImageGallery";

export default function Portfolio() {
  // --- AGILE DATA ---
  const shortsData = [
    { id: "o355EAX8ZmQ", title: "Proses Cuci Sofa Premium Bali" },
    { id: "lfxl6NP9uQ4", title: "Proses Poles Lantai Marmer Bali" },
  ];

  const beforeAfterData = [
    { src: "/images/before_after1.webp", alt: "Hasil Sebelum dan Sesudah 1" },
    { src: "/images/before_after2.webp", alt: "Hasil Sebelum dan Sesudah 2" },
    { src: "/images/before_after3.webp", alt: "Hasil Sebelum dan Sesudah 3" },
    { src: "/images/before_after4.webp", alt: "Hasil Sebelum dan Sesudah 4" },
    { src: "/images/before_after5.webp", alt: "Hasil Sebelum dan Sesudah 5" },
    { src: "/images/before_after6.webp", alt: "Hasil Sebelum dan Sesudah 6" },
    { src: "/images/before_after7.webp", alt: "Hasil Sebelum dan Sesudah 7" },
  ];
  // ------------------

  return (
    <section id="portofolio" className="w-full py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        
        {/* Header Portfolio */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Bukti Kualitas Kami</h2>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Jangan hanya percaya kata-kata kami. Lihat langsung hasil pengerjaan tim profesional Aleksa Cleaning di lapangan.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          
          {/* Bagian Atas: YouTube Shorts */}
          <div className="flex flex-col items-center w-full">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
              Live Action Pekerjaan
            </h3>
            <div className="flex flex-wrap justify-center gap-4 w-full max-w-5xl mx-auto">
              {shortsData.map((video, index) => (
                <YouTubeFacade 
                   key={index} 
                   videoId={video.id} 
                   title={video.title} 
                   priority={index < 2} 
                />
              ))}
            </div>
          </div>

          {/* Garis Pemisah */}
          <div className="w-full h-px bg-slate-200 dark:bg-slate-800 max-w-6xl mx-auto"></div>

          {/* Bagian Bawah: Galeri Gambar Before-After */}
          <div className="flex flex-col items-center w-full">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
              Galeri Before & After
            </h3>
            <ImageGallery images={beforeAfterData} />
          </div>

        </div>
      </div>
    </section>
  );
}