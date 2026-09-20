import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

// z-40 keeps this below the photo-gallery lightbox (z-50), so an open
// lightbox always renders above these buttons instead of the reverse.
// ScrollToTopButton is always mounted (just hidden via opacity when not
// scrolled) so it keeps reserving its slot in the column — the WhatsApp
// button above it never jumps position.
export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <FloatingWhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
}
