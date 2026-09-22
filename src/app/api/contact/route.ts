import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabase-admin";

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info.jevol@gmail.com";
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "JEVOL Website <onboarding@resend.dev>";

const NAME_MAX = 100;
const MESSAGE_MIN = 5;
const MESSAGE_MAX = 2000;
const PHONE_PATTERN = /^[0-9+\-\s()]{7,20}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  entry.count += 1;
  return true;
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type ContactPayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  message?: unknown;
  consent?: unknown;
  // Honeypot field — real users never fill this in.
  company?: unknown;
};

export async function POST(request: Request) {
  const ip = getClientIp(request);

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: "Забагато запитів. Спробуйте, будь ласка, пізніше." },
      { status: 429 },
    );
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Некоректний запит." },
      { status: 400 },
    );
  }

  // Honeypot: bots that fill in this hidden field get a fake success
  // response so they don't learn their submission was rejected.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const consent = body.consent === true;

  if (!name || name.length > NAME_MAX) {
    return NextResponse.json(
      { ok: false, error: "Будь ласка, вкажіть коректне ім'я." },
      { status: 400 },
    );
  }
  if (!email || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Будь ласка, вкажіть коректний email." },
      { status: 400 },
    );
  }
  if (phone && !PHONE_PATTERN.test(phone)) {
    return NextResponse.json(
      { ok: false, error: "Будь ласка, вкажіть коректний номер телефону." },
      { status: 400 },
    );
  }
  if (!message || message.length < MESSAGE_MIN || message.length > MESSAGE_MAX) {
    return NextResponse.json(
      {
        ok: false,
        error: `Повідомлення має містити від ${MESSAGE_MIN} до ${MESSAGE_MAX} символів.`,
      },
      { status: 400 },
    );
  }
  if (!consent) {
    return NextResponse.json(
      {
        ok: false,
        error: "Потрібна згода на обробку персональних даних.",
      },
      { status: 400 },
    );
  }

  const { error: insertError } = await supabaseAdmin
    .from("contact_submissions")
    .insert({ name, phone: phone || null, email, message });

  if (insertError) {
    console.error("Contact form: Supabase insert failed", insertError);
    return NextResponse.json(
      { ok: false, error: "Сталася помилка. Спробуйте ще раз." },
      { status: 500 },
    );
  }

  // Email notification is best-effort: the submission is already saved,
  // so a failure here must not affect the response the user sees.
  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn(
        "Contact form: RESEND_API_KEY is not set — skipping email notification.",
      );
    } else {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const pageUrl = request.headers.get("referer") ?? "невідомо";
      const timestamp = new Date().toLocaleString("uk-UA", {
        timeZone: "Europe/Kyiv",
        dateStyle: "medium",
        timeStyle: "medium",
      });

      const textBody = [
        `Ім'я: ${name}`,
        `Телефон: ${phone || "—"}`,
        `Email: ${email}`,
        `Повідомлення: ${message}`,
        `Сторінка: ${pageUrl}`,
        `Дата: ${timestamp} (Europe/Kyiv)`,
      ].join("\n");

      const htmlBody = `
        <p><strong>Ім'я:</strong> ${escapeHtml(name)}</p>
        <p><strong>Телефон:</strong> ${escapeHtml(phone || "—")}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Повідомлення:</strong> ${escapeHtml(message)}</p>
        <p><strong>Сторінка:</strong> ${escapeHtml(pageUrl)}</p>
        <p><strong>Дата:</strong> ${escapeHtml(timestamp)} (Europe/Kyiv)</p>
      `.trim();

      const { error: emailError } = await resend.emails.send({
        to: CONTACT_TO_EMAIL,
        from: CONTACT_FROM_EMAIL,
        replyTo: email || undefined,
        subject: `Нова заявка з сайту JEVOL — ${name}`,
        text: textBody,
        html: htmlBody,
      });

      if (emailError) {
        console.error("Contact form: Resend send failed", emailError);
      }
    }
  } catch (err) {
    console.error("Contact form: unexpected error sending email", err);
  }

  return NextResponse.json({ ok: true });
}
