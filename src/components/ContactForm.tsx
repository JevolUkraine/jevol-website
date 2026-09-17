"use client";

import { useState, type FormEvent } from "react";
import { supabase } from "@/lib/supabase";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");

    const { error } = await supabase.from("contact_submissions").insert({
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      message: data.get("message"),
    });

    if (error) {
      setStatus("error");
      return;
    }

    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <p className="text-sm font-medium text-gray-700">
        Дякуємо! Ми зв&apos;яжемось з вами найближчим часом.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        name="name"
        type="text"
        required
        placeholder="Ваше Ім'я"
        className="h-10 w-full border border-gray-300 px-3 text-sm"
      />
      <input
        name="phone"
        type="tel"
        placeholder="+380 XX XXX XX XX"
        className="h-10 w-full border border-gray-300 px-3 text-sm"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        className="h-10 w-full border border-gray-300 px-3 text-sm"
      />
      <textarea
        name="message"
        required
        placeholder="Ваше питання:"
        rows={4}
        className="w-full border border-gray-300 px-3 py-2 text-sm"
      />
      <label className="flex items-start gap-2 text-xs text-gray-600">
        <input type="checkbox" name="consent" required className="mt-0.5" />
        Погоджуюсь з обробкою персональних даних
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="h-11 w-full bg-gray-900 text-sm font-medium uppercase text-white disabled:opacity-50 sm:w-40"
      >
        {status === "submitting" ? "Надсилання…" : "Відправити"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Сталася помилка. Спробуйте ще раз.
        </p>
      )}
    </form>
  );
}
