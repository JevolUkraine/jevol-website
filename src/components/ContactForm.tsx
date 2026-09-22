"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const DEFAULT_ERROR = "Сталася помилка. Спробуйте ще раз.";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState(DEFAULT_ERROR);

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
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.ok) {
        setErrorMessage(result?.error || DEFAULT_ERROR);
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage(DEFAULT_ERROR);
      setStatus("error");
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
      <button
        type="submit"
        disabled={status === "submitting"}
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
