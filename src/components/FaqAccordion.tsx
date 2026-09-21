type FaqItem = { question: string; answer: string };

type Theme = "dark" | "light";

const THEME_STYLES: Record<
  Theme,
  {
    divide: string;
    question: string;
    questionHover: string;
    answer: string;
    icon: string;
    ringOffset: string;
  }
> = {
  dark: {
    divide: "divide-zinc-800",
    question: "text-white",
    questionHover: "group-hover:text-orange-400",
    answer: "text-zinc-400",
    icon: "bg-orange-500",
    ringOffset: "focus-visible:ring-offset-zinc-950",
  },
  light: {
    divide: "divide-zinc-200",
    question: "text-zinc-900",
    questionHover: "group-hover:text-orange-600",
    answer: "text-zinc-600",
    icon: "bg-zinc-900",
    ringOffset: "focus-visible:ring-offset-white",
  },
};

// Native <details>/<summary> — no JS needed, answers stay in the
// server-rendered HTML, and multiple items can be open at once.
export function FaqAccordion({
  items,
  theme = "dark",
  className = "",
}: {
  items: FaqItem[];
  theme?: Theme;
  className?: string;
}) {
  const styles = THEME_STYLES[theme];

  return (
    <div className={`divide-y ${styles.divide} ${className}`}>
      {items.map((item, index) => (
        <details key={item.question} className="group" open={index === 0}>
          <summary
            className={`flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 pr-10 [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 ${styles.ringOffset}`}
          >
            <span
              className={`font-bold transition-colors duration-200 ${styles.question} ${styles.questionHover}`}
            >
              {item.question}
            </span>
            <span
              aria-hidden
              className="pointer-events-none relative flex h-5 w-5 shrink-0 items-center justify-center"
            >
              <span className={`absolute h-0.5 w-4 rounded-full ${styles.icon}`} />
              <span
                className={`absolute h-0.5 w-4 rotate-90 rounded-full ${styles.icon} transition-transform duration-200 ease-out group-open:rotate-0 motion-reduce:transition-none`}
              />
            </span>
          </summary>
          <p className={`pb-6 pr-10 text-sm ${styles.answer}`}>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
