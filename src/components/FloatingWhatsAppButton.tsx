const WHATSAPP_URL =
  "https://wa.me/380504709561?text=" +
  encodeURIComponent(
    "Доброго дня! Хочу дізнатися більше про обладнання JEVOL.",
  );

// Collapsed state is a plain circle sized to match the icon slot exactly, so
// the icon-wrapper (fixed size, last in flex order, container justify-end)
// always sits flush against the right edge — expanding the button's own
// width (clipped by overflow-hidden) reveals the label to its left without
// ever moving the icon. Hover/focus-visible expansion is scoped to
// hover-capable, fine-pointer devices only, so touch taps never show it.
export function FloatingWhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написати у WhatsApp"
      className="flex h-[52px] w-[52px] items-center justify-end overflow-hidden rounded-full bg-[#25D366] shadow-lg transition-[width] duration-200 ease-out hover:bg-[#20BD5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none sm:h-14 sm:w-14 [@media(hover:hover)_and_(pointer:fine)]:hover:w-[250px] [@media(hover:hover)_and_(pointer:fine)]:focus-visible:w-[250px]"
    >
      <span className="whitespace-nowrap pl-4 pr-3 text-sm font-bold text-white">
        Написати у WhatsApp
      </span>
      <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center sm:h-14 sm:w-14">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7 text-white"
          aria-hidden
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.01 2C6.486 2 2 6.486 2 12.01c0 1.85.497 3.663 1.44 5.253L2 22l4.847-1.42a10 10 0 0 0 5.163 1.43h.005c5.524 0 10.01-4.486 10.01-10.01C22.025 6.486 17.539 2 12.01 2Zm0 18.15h-.004a8.13 8.13 0 0 1-4.146-1.135l-.297-.176-3.075.901.916-3.104-.194-.318a8.12 8.12 0 0 1-1.246-4.308c0-4.49 3.655-8.144 8.15-8.144 2.176 0 4.222.848 5.762 2.388a8.09 8.09 0 0 1 2.386 5.762c0 4.49-3.655 8.134-8.152 8.134Z"
          />
        </svg>
      </span>
    </a>
  );
}
