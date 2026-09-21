type FaqItem = { question: string; answer: string };

// Native <details>/<summary> — no JS needed, answers stay in the
// server-rendered HTML, and multiple items can be open at once.
export function FaqAccordion({
  items,
  className = "",
}: {
  items: FaqItem[];
  className?: string;
}) {
  return (
    <div className={`divide-y divide-zinc-800 ${className}`}>
      {items.map((item, index) => (
        <details key={item.question} className="group" open={index === 0}>
          <summary
            className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 pr-10 [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            <span className="font-bold text-white transition-colors duration-200 group-hover:text-orange-400">
              {item.question}
            </span>
            <span
              aria-hidden
              className="pointer-events-none relative flex h-5 w-5 shrink-0 items-center justify-center"
            >
              <span className="absolute h-0.5 w-4 rounded-full bg-orange-500" />
              <span className="absolute h-0.5 w-4 rotate-90 rounded-full bg-orange-500 transition-transform duration-200 ease-out group-open:rotate-0 motion-reduce:transition-none" />
            </span>
          </summary>
          <p className="pb-6 pr-10 text-sm text-zinc-400">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
