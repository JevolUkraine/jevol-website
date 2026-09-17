"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Slide = { src: string; alt: string };

const AUTOPLAY_MS = 4500;
const SWIPE_THRESHOLD_PX = 50;
const DOT_THRESHOLD = 8;

export function HeroCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (i: number) => setIndex(((i % slides.length) + slides.length) % slides.length),
    [slides.length],
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Restarts on every index change (manual or automatic) and fully pauses on hover.
  useEffect(() => {
    if (isHovering || slides.length <= 1) return;
    const id = setTimeout(() => goTo(index + 1), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [index, isHovering, goTo, slides.length]);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > SWIPE_THRESHOLD_PX) prev();
    else if (delta < -SWIPE_THRESHOLD_PX) next();
    touchStartX.current = null;
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Фотографії обладнання JEVOL"
      className="group relative h-72 w-full overflow-hidden sm:h-96"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="(min-width: 640px) 50vw, 100vw"
          />
        </div>
      ))}

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Попереднє фото"
            className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-black/40 text-lg text-white opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Наступне фото"
            className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-black/40 text-lg text-white opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
          >
            ›
          </button>

          {slides.length <= DOT_THRESHOLD ? (
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
              {slides.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Перейти до фото ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2 w-2 rounded-full ${
                    i === index ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          ) : (
            <div className="absolute bottom-3 right-3 bg-black/40 px-2 py-0.5 text-xs text-white">
              {index + 1} / {slides.length}
            </div>
          )}
        </>
      )}
    </div>
  );
}
