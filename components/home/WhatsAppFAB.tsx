import { MessageCircle } from "lucide-react";

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/6285726868969?text=Halo%20Aleksa%20Bali%20Cleaning%20Service,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi kami langsung via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
    >
      <MessageCircle size={28} />
    </a>
  );
}