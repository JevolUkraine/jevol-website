"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { categories } from "@/lib/categories";

// Прилади previously linked straight to the homepage's category grid —
// keep that as the first item so nothing is lost.
const ALL_CATEGORIES_HREF = "/#categories";

export function CategoriesDropdown() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current !== null) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  // Close on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on outside click and on Escape (returning focus to the trigger).
  useEffect(() => {
    if (!open) return;

    function onPointerDown(e: PointerEvent) {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => clearCloseTimeout, []);

  function focusLinkAt(index: number) {
    const count = linkRefs.current.length;
    const wrapped = ((index % count) + count) % count;
    linkRefs.current[wrapped]?.focus();
  }

  function onPanelKeyDown(e: React.KeyboardEvent) {
    const currentIndex = linkRefs.current.findIndex(
      (el) => el === document.activeElement,
    );
    if (e.key === "ArrowDown") {
      e.preventDefault();
      focusLinkAt(currentIndex === -1 ? 0 : currentIndex + 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      focusLinkAt(currentIndex === -1 ? -1 : currentIndex - 1);
    }
  }

  const allLinks = [
    { href: ALL_CATEGORIES_HREF, name: "Усі прилади", isAllLink: true },
    ...categories.map((c) => ({ href: c.href, name: c.name, isAllLink: false })),
  ];

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => {
        clearCloseTimeout();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 transition-colors hover:text-white"
      >
        Прилади
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          className={`h-3.5 w-3.5 transition-transform duration-200 motion-reduce:transition-none ${
            open ? "rotate-180" : ""
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        onKeyDown={onPanelKeyDown}
        className={`absolute left-0 top-full z-40 mt-2 w-80 origin-top rounded-lg border border-zinc-800 bg-zinc-950 normal-case tracking-normal text-zinc-300 shadow-xl transition-all duration-150 ease-out motion-reduce:transition-none ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0"
        }`}
      >
        <div className="flex flex-col py-2">
          {allLinks.map((item, index) => {
            const isCurrent = !item.isAllLink && pathname === item.href;
            return (
              <div key={item.href}>
                <Link
                  href={item.href}
                  ref={(el) => {
                    linkRefs.current[index] = el;
                  }}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`block px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-zinc-900 hover:text-orange-400 ${
                    isCurrent ? "text-orange-500" : ""
                  } ${item.isAllLink ? "text-zinc-300" : ""}`}
                >
                  {item.name}
                </Link>
                {item.isAllLink && (
                  <div className="my-1 border-t border-zinc-800" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
