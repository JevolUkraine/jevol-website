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
      {/* Curated photo row */}
      <div className="flex flex-wrap justify-center gap-2">
        {featuredIndices.map((idx) => {
          const photo = photos[idx];
          return (
            <button
              key={photo.src}
              type="button"
              onClick={() => setLightboxIndex(idx)}
              aria-label={`Переглянути фото ${idx + 1} на весь екран`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="h-36 w-auto sm:h-48"
              />
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex justify-center">
        <button
          type="button"
          onClick={() => setLightboxIndex(0)}
          className="text-sm font-medium text-gray-700 underline underline-offset-2 hover:text-gray-900"
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
