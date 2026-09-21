"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { categories } from "@/lib/categories";

const ALL_CATEGORIES_HREF = "/#categories";

export function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
    setCategoriesOpen(false);
  }, [pathname]);

  function closeAll() {
    setMenuOpen(false);
    setCategoriesOpen(false);
  }

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Закрити меню" : "Відкрити меню"}
        onClick={() => setMenuOpen((v) => !v)}
        className="flex h-11 w-11 shrink-0 items-center justify-center text-white"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          aria-hidden
          className="h-6 w-6"
        >
          {menuOpen ? (
            <path d="M6 6l12 12M18 6 6 18" />
          ) : (
            <>
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </>
          )}
        </svg>
      </button>

      {menuOpen && (
        <div className="absolute inset-x-0 top-full z-40 border-t border-zinc-800 bg-zinc-950 shadow-xl">
          <nav className="flex flex-col px-4 py-2 text-sm font-semibold uppercase tracking-wide text-zinc-300">
            <Link
              href="/"
              onClick={closeAll}
              className="flex min-h-11 items-center py-3 transition-colors hover:text-white"
            >
              Головна
            </Link>

            <div className="flex flex-col">
              <button
                type="button"
                aria-expanded={categoriesOpen}
                onClick={() => setCategoriesOpen((v) => !v)}
                className="flex min-h-11 w-full items-center justify-between py-3 text-left transition-colors hover:text-white"
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
                  className={`h-4 w-4 transition-transform duration-200 motion-reduce:transition-none ${
                    categoriesOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {categoriesOpen && (
                <div className="flex flex-col border-l border-zinc-800 pl-4 normal-case tracking-normal">
                  <Link
                    href={ALL_CATEGORIES_HREF}
                    onClick={closeAll}
                    className="flex min-h-11 items-center py-2.5 text-zinc-400 transition-colors hover:text-orange-400"
                  >
                    Усі прилади
                  </Link>
                  {categories.map((cat) => {
                    const isCurrent = pathname === cat.href;
                    return (
                      <Link
                        key={cat.href}
                        href={cat.href}
                        onClick={closeAll}
                        aria-current={isCurrent ? "page" : undefined}
                        className={`flex min-h-11 items-center py-2.5 transition-colors hover:text-orange-400 ${
                          isCurrent ? "text-orange-500" : "text-zinc-400"
                        }`}
                      >
                        {cat.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              onClick={closeAll}
              className="flex min-h-11 items-center py-3 transition-colors hover:text-white"
            >
              Контакти
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
