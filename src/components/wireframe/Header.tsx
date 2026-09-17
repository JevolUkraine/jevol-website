import Link from "next/link";

export function Header() {
  return (
    <header className="border-b-2 border-dashed border-gray-400 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link
          href="/"
          className="flex h-10 w-32 items-center justify-center border-2 border-dashed border-gray-400 bg-gray-200 text-xs font-medium uppercase text-gray-500"
        >
          JEVOL
        </Link>
        <nav className="hidden gap-6 text-sm text-gray-500 sm:flex">
          <Link href="/">Головна</Link>
          <Link href="/#categories">Прилади</Link>
          <Link href="/contact">Контакти</Link>
        </nav>
        <a
          href="https://wa.me/380504709561"
          className="flex h-9 w-32 items-center justify-center border-2 border-dashed border-gray-400 bg-gray-200 text-center text-[11px] uppercase leading-tight text-gray-500"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
