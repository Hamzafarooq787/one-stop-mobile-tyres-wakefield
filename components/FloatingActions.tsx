import { site } from "@/lib/site";
import Icon from "@/components/Icon";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3">
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 hover:scale-110 active:scale-95 transition-transform duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="relative w-7 h-7"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.99.583 3.847 1.588 5.408L2 22l4.735-1.556A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.077a8.06 8.06 0 0 1-4.113-1.13l-.295-.176-3.048 1.002 1.008-2.966-.192-.305A8.06 8.06 0 0 1 3.923 12c0-4.463 3.614-8.077 8.077-8.077 4.462 0 8.077 3.614 8.077 8.077 0 4.462-3.615 8.077-8.077 8.077z" />
        </svg>
      </a>
      <a
        href={site.phoneHref}
        aria-label="Call now"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-container text-white glow-primary hover:scale-110 active:scale-95 transition-transform duration-300"
      >
        <Icon name="call" className="w-6 h-6" />
      </a>
    </div>
  );
}
