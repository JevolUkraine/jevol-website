import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t-2 border-dashed border-gray-400 bg-gray-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-8 text-sm text-gray-500">
        <div className="flex h-10 w-28 items-center justify-center border-2 border-dashed border-gray-400 bg-gray-200 text-xs font-medium uppercase text-gray-500">
          JEVOL
        </div>
        <nav className="flex gap-6">
          <Link href="/">Головна</Link>
          <Link href="/contact">Контакти</Link>
        </nav>
        <div>info.jevol@gmail.com</div>
      </div>
      <div className="border-t-2 border-dashed border-gray-400 px-4 py-4 text-center text-xs text-gray-400">
        © Всі права захищені. Jevol. 2026
      </div>
    </footer>
  );
}
