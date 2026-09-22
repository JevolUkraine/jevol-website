"use client";

import { useRef, useState, type FormEvent } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

type Status = "idle" | "submitting" | "success" | "error";

const DEFAULT_ERROR = "Сталася помилка. Спробуйте ще раз.";
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

// TEMPORARY DEBUG — remove once the double success/error state is diagnosed.
// Logs how many live Cloudflare challenge iframes exist in the DOM at each
// Turnstile lifecycle event, so we can see whether a second widget appears
// mid-verification (and correlate the timing against onError/etc.).
function logTurnstileState(label: string) {
  if (typeof document === "undefined") return;
  const iframeCount = document.querySelectorAll(
    'iframe[src*="challenges.cloudflare.com"]',
  ).length;
  console.log(
    `[Turnstile] ${label} — iframes in DOM: ${iframeCount} @ ${new Date().toISOString()}`,
  );
}

export function ContactForm({
  theme = "light",
}: {
  theme?: "light" | "dark";
} = {}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState(DEFAULT_ERROR);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  function resetTurnstile() {
    turnstileRef.current?.reset();
    setTurnstileToken(null);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          message: data.get("message"),
          consent: data.get("consent") === "on",
          // Honeypot — left blank by real users, hidden from view.
          company: data.get("company"),
          turnstileToken,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.ok) {
        setErrorMessage(result?.error || DEFAULT_ERROR);
        setStatus("error");
        resetTurnstile();
        return;
      }

      setStatus("success");
      form.reset();
      resetTurnstile();
    } catch {
      setErrorMessage(DEFAULT_ERROR);
      setStatus("error");
      resetTurnstile();
    }
  }

  if (status === "success") {
    return (
      <p className="text-base font-semibold text-zinc-900">
        Дякуємо! Ми зв&apos;яжемось з вами найближчим часом.
      </p>
    );
  }

  const inputClass =
    "h-12 w-full rounded-lg border-2 border-zinc-300 bg-white px-4 text-sm text-zinc-900 outline-none transition-colors focus:border-orange-500";

  // Turnstile is optional in environments where the site key isn't
  // configured (e.g. local dev without Cloudflare set up) — the widget is
  // simply skipped and the submit button isn't gated by it.
  const turnstileRequired = Boolean(TURNSTILE_SITE_KEY);
  const canSubmit =
    status !== "submitting" && (!turnstileRequired || Boolean(turnstileToken));

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input name="name" type="text" required placeholder="Ваше Ім'я" className={inputClass} />
      <input
        name="phone"
        type="tel"
        placeholder="+380 XX XXX XX XX"
        className={inputClass}
      />
      <input name="email" type="email" required placeholder="Email" className={inputClass} />
      <textarea
        name="message"
        required
        placeholder="Ваше питання:"
        rows={4}
        className="w-full rounded-lg border-2 border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition-colors focus:border-orange-500"
      />
      <input
        type="text"
        name="company"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />
      <label className="flex items-start gap-2 text-xs text-zinc-500">
        <input type="checkbox" name="consent" required className="mt-0.5" />
        Погоджуюсь з обробкою персональних даних
      </label>
      {turnstileRequired && (
        <Turnstile
          ref={turnstileRef}
          siteKey={TURNSTILE_SITE_KEY!}
          options={{ theme, language: "uk" }}
          // TEMPORARY DEBUG — remove once the double success/error state is diagnosed.
          onWidgetLoad={(widgetId) =>
            logTurnstileState(`onWidgetLoad id=${widgetId}`)
          }
          onSuccess={(token) => {
            logTurnstileState("onSuccess");
            setTurnstileToken(token);
          }}
          onError={(errorCode) => {
            logTurnstileState(`onError code=${errorCode}`);
            setTurnstileToken(null);
          }}
          onExpire={() => {
            logTurnstileState("onExpire");
            setTurnstileToken(null);
          }}
          onBeforeInteractive={() => logTurnstileState("onBeforeInteractive")}
          onAfterInteractive={() => logTurnstileState("onAfterInteractive")}
        />
      )}
      <button
        type="submit"
        disabled={!canSubmit}
        className="h-12 w-full rounded-md bg-orange-500 text-sm font-bold uppercase tracking-wide text-zinc-950 transition-colors hover:bg-orange-400 disabled:opacity-50 sm:w-48"
      >
        {status === "submitting" ? "Надсилання…" : "Відправити"}
      </button>
      {status === "error" && (
        <p className="text-sm font-semibold text-red-600">{errorMessage}</p>
      )}
    </form>
  );
}
