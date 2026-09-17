import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:py-5">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-white sm:text-2xl"
        >
          JEVOL<span className="text-orange-500">.</span>
        </Link>
        <nav className="hidden gap-8 text-sm font-semibold uppercase tracking-wide text-zinc-400 sm:flex">
          <Link href="/" className="transition-colors hover:text-white">
            Головна
          </Link>
          <Link href="/#categories" className="transition-colors hover:text-white">
            Прилади
          </Link>
          <Link href="/contact" className="transition-colors hover:text-white">
            Контакти
          </Link>
        </nav>
        <a
          href="https://wa.me/380504709561"
          className="inline-flex h-10 shrink-0 items-center justify-center bg-orange-500 px-4 text-xs font-bold uppercase tracking-wide text-zinc-950 transition-colors hover:bg-orange-400 sm:px-5"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
