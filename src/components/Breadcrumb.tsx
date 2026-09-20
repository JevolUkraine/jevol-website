import Link from "next/link";

export function Breadcrumb({ current }: { current: string }) {
  return (
    <section className="border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-3 text-xs text-zinc-500">
        <Link href="/" className="hover:text-zinc-900">
          Головна
        </Link>{" "}
        / <span>Прилади</span> /{" "}
        <span className="font-semibold text-zinc-900">{current}</span>
      </div>
    </section>
  );
}
