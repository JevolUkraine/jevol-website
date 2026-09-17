"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Photo = { src: string; alt: string; width: number; height: number };

export function HeroGallery({ photos }: { photos: Photo[] }) {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const featured = photos[featuredIndex];
  const lightboxOpen = lightboxIndex !== null;

  useEffect(() => {
    if (!lightboxOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((i) => (i === null ? i : (i + 1) % photos.length));
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen, photos.length]);

  function closeLightbox() {
    if (lightboxIndex !== null) setFeaturedIndex(lightboxIndex);
    setLightboxIndex(null);
  }

  return (
    <div>
      {/* Featured photo */}
      <button
        type="button"
        onClick={() => setLightboxIndex(featuredIndex)}
        aria-label="Переглянути фото на весь екран"
        className="mx-auto block w-fit max-w-full"
      >
        <Image
          key={featured.src}
          src={featured.src}
          alt={featured.alt}
          width={featured.width}
          height={featured.height}
          priority
          className="h-auto max-h-[32rem] w-auto max-w-full"
        />
      </button>

      {/* Thumbnail row */}
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setFeaturedIndex(i)}
            aria-label={`Показати фото ${i + 1}`}
            aria-current={i === featuredIndex}
            className={`relative h-16 w-24 flex-shrink-0 overflow-hidden sm:h-20 sm:w-28 ${
              i === featuredIndex ? "ring-2 ring-gray-900" : "opacity-80 hover:opacity-100"
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="112px"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Перегляд фото"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Закрити"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center text-2xl text-white"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
            }}
            aria-label="Попереднє фото"
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-3xl text-white sm:left-4"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i === null ? i : (i + 1) % photos.length));
            }}
            aria-label="Наступне фото"
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-3xl text-white sm:right-4"
          >
            ›
          </button>

          <Image
            src={photos[lightboxIndex].src}
            alt={photos[lightboxIndex].alt}
            width={photos[lightboxIndex].width}
            height={photos[lightboxIndex].height}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/80">
            {lightboxIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </div>
  );
}
