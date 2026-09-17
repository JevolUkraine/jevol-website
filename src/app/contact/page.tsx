import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/wireframe/Header";
import { Footer } from "@/components/wireframe/Footer";
import { ImgBox } from "@/components/wireframe/Box";
import { ContactForm } from "@/components/ContactForm";

const TITLE = "Контакти JEVOL Україна — обладнання для техогляду";
const DESCRIPTION =
  "Зв'яжіться з JEVOL — офіційним представником обладнання для техогляду в Україні. WhatsApp, Viber, email. Консультація та замовлення обладнання для лабораторій.";
const URL = "https://jevol.com.ua/contacts";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: URL,
  about: { "@id": "https://jevol.com.ua/#organization" },
};

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-6xl px-4 pt-6 text-xs text-gray-400">
          <Link href="/">Головна</Link> /{" "}
          <span className="text-gray-600">Контакти</span>
        </div>

        <section className="mx-auto max-w-6xl px-4 pb-4 pt-6">
          <h1 className="text-2xl font-semibold text-gray-900">Контакти</h1>
        </section>

        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pb-12 sm:grid-cols-2">
          {/* Contact info + form */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <p className="text-lg">
                <a
                  href="https://wa.me/380504709561"
                  className="font-semibold text-green-600"
                >
                  WhatsApp
                </a>{" "}
                /{" "}
                <a
                  href="viber://chat?number=%2B380504709561"
                  className="font-semibold text-violet-600"
                >
                  Viber
                </a>
              </p>
              <a href="tel:+380504709561" className="text-gray-700">
                +38 050 470 95 61
              </a>
              <a href="mailto:info.jevol@gmail.com" className="text-gray-700">
                info.jevol@gmail.com
              </a>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-gray-900">
                Заповніть форму зворотного зв&apos;язку
              </h2>
              <p className="mb-4 text-gray-600">
                Ми зв&apos;яжемось з вами для консультації
              </p>
              <ContactForm />
            </div>
          </div>

          {/* No map/address on the live site — reusing the same factory photo used elsewhere */}
          <ImgBox
            label="fotoPlant.webp — no address/map on live site"
            className="h-64 w-full sm:h-full"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
