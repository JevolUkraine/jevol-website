import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t-2 border-orange-500 bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-12 text-center">
        <span className="text-xl font-extrabold tracking-tight text-white">
          JEVOL<span className="text-orange-500">.</span>
        </span>
        <nav className="flex gap-8 text-sm font-semibold uppercase tracking-wide text-zinc-400">
          <Link href="/" className="transition-colors hover:text-white">
            Головна
          </Link>
          <Link href="/contact" className="transition-colors hover:text-white">
            Контакти
          </Link>
        </nav>
        <a
          href="mailto:info.jevol@gmail.com"
          className="text-sm text-zinc-400 transition-colors hover:text-white"
        >
          info.jevol@gmail.com
        </a>
      </div>
      <div className="border-t border-zinc-800 px-4 py-4 text-center text-xs text-zinc-600">
        © Всі права захищені. Jevol. 2026
      </div>
    </footer>
  );
}
