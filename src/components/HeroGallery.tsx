"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Photo = { src: string; alt: string; width: number; height: number };

export function HeroGallery({
  photos,
  featuredIndices,
}: {
  photos: Photo[];
  featuredIndices: number[];
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
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

  return (
    <div>
      {/* Curated photo grid */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {featuredIndices.map((idx) => {
          const photo = photos[idx];
          return (
            <button
              key={photo.src}
              type="button"
              onClick={() => setLightboxIndex(idx)}
              aria-label={`Переглянути фото ${idx + 1} на весь екран`}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-zinc-800 shadow-[0_0_16px_rgba(255,255,255,0.25)] transition-shadow duration-300 hover:shadow-none"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 640px) 25vw, 50vw"
              />
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex justify-center">
        <button
          type="button"
          onClick={() => setLightboxIndex(0)}
          className="text-sm font-bold uppercase tracking-wide text-white underline underline-offset-4 transition-colors hover:text-gray-300"
        >
          Переглянути всі фото ({photos.length})
        </button>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Перегляд фото"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
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
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
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
