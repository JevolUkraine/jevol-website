import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/wireframe/Header";
import { Footer } from "@/components/wireframe/Footer";
import { ImgBox } from "@/components/wireframe/Box";
import { ContactForm } from "@/components/ContactForm";
import { categories } from "@/lib/categories";

const TITLE =
  "Детектор люфтів ходової частини JEVOL PDT-500/PDT-800 — купити в Україні | JEVOL";
const DESCRIPTION =
  "Детектор люфтів JEVOL PDT-500/PDT-800 для діагностики підвіски та рульового керування авто під час техогляду в Україні. Гідравлічні платформи, рух у 8 напрямках.";
const URL = "https://jevol.com.ua/detektor-lyuftiv/";

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

const faqs = [
  {
    question: "Для чого призначений детектор люфтів JEVOL?",
    answer:
      "Детектор люфтів JEVOL призначений для автоматизованої діагностики ходової частини транспортних засобів — виявлення люфтів та дефектів у рульовому управлінні та підвісці під час проведення обов'язкового технічного контролю в Україні. Прилад дозволяє виявити несправності у кульових опорах та сайлент-блоках, шарнірних з'єднаннях та амортизаторах, демпферних прокладках та пневматичних ресорах, сталевих ресорах та елементах кріплення підвіски.",
  },
  {
    question: "Як працює детектор люфтів?",
    answer:
      "Гідравлічні платформи створюють різноспрямоване навантаження на вісь автомобіля, органи рульового управління та елементи кріплення підвіски. Це дозволяє оператору лабораторії здійснювати точний візуальний контроль всіх дефектів у режимі реального часу.",
  },
  {
    question: "Чи забезпечує прилад швидку діагностику?",
    answer:
      "Так. Прилад забезпечує швидку візуальну діагностику сайлент-блоків, втулок, ресор та інших гумових складових підвіски автомобіля — скорочує час проведення технічного контролю без втрати точності.",
  },
  {
    question: "Наскільки надійна гідравлічна система приладу?",
    answer:
      "Конструкція базується на потужних надійних гідравлічних вузлах та компонентах промислового класу — розрахована на інтенсивну щоденну експлуатацію в умовах акредитованої лабораторії.",
  },
  {
    question: "У скількох напрямках рухаються платформи?",
    answer:
      "Діагностичні платформи переміщуються у 8 напрямках, включаючи діагональний рух — повне навантаження на всі елементи підвіски для максимально точного виявлення дефектів.",
  },
  {
    question: "Як забезпечується зручність керування приладом?",
    answer:
      "Пульт діагностичного керування оснащено вбудованим потужним LED ліхтарем — для зручного візуального огляду ходової частини навіть у погано освітлених приміщеннях.",
  },
];

const models = [
  { param: "Максимальне навантаження на вісь", pdt500: "3 Т", pdt800: "15 Т" },
  { param: "Потужність електродвигуна", pdt500: "1.5 кВт", pdt800: "1.5 кВт" },
  { param: "Рух платформ", pdt500: "-50 мм +50 мм", pdt800: "-50 мм +50 мм" },
  { param: "Тиск у гідравлічній системі", pdt500: "7 МПа", pdt800: "16 МПа" },
  { param: "Потік гідравлічної рідини", pdt500: "2.5 л", pdt800: "5 л" },
  { param: "Об'єм гідравлічного ресивера", pdt500: "10 л", pdt800: "20 л" },
  {
    param: "Габарити (Д х Ш х В)",
    pdt500: "580 × 580 × 70 мм",
    pdt800: "1000 × 700 × 140 мм",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Детектор люфтів JEVOL PDT-500",
      description: DESCRIPTION,
      brand: { "@type": "Brand", name: "JEVOL" },
      url: URL,
      additionalProperty: models.map((m) => ({
        "@type": "PropertyValue",
        name: m.param,
        value: m.pdt500,
      })),
    },
    {
      "@type": "Product",
      name: "Детектор люфтів JEVOL PDT-800",
      description: DESCRIPTION,
      brand: { "@type": "Brand", name: "JEVOL" },
      url: URL,
      additionalProperty: models.map((m) => ({
        "@type": "PropertyValue",
        name: m.param,
        value: m.pdt800,
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

const relatedCategories = categories.filter(
  (c) => c.href !== "/detektor-lyuftiv",
);

export default function PlayDetectorPage() {
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
          <Link href="/">Головна</Link> / <span>Прилади</span> /{" "}
          <span className="text-gray-600">
            Детектор люфтів ходової частини
          </span>
        </div>

        {/* Product info block */}
        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-8 sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            <ImgBox label="fotoLuft1.webp — hero" className="h-80 w-full sm:h-96" />
            <ImgBox label="fotoLuft1.JPG" className="h-24 w-full text-[10px]" />
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-gray-900">
              ДЕТЕКТОР ЛЮФТІВ ТА ЗАЗОРІВ ХОДОВОЇ ЧАСТИНИ АВТОМОБІЛЯ
              PDT-500/PDT-800
            </h1>
            <p className="text-gray-600">
              Детектор люфтів ходової частини JEVOL — діагностика підвіски
              для техогляду.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              {faqs.map((f) => (
                <div key={f.question}>
                  <h2 className="font-semibold text-gray-900">
                    {f.question}
                  </h2>
                  <p className="text-sm text-gray-600">{f.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-2 flex flex-wrap gap-3">
              <a
                href="https://wa.me/380504709561"
                className="inline-flex h-11 items-center justify-center border-2 border-dashed border-gray-400 bg-gray-200 px-6 text-xs font-medium uppercase text-gray-600"
              >
                Написати нам у WhatsApp
              </a>
              <a
                href="https://tflgmyvvavucbmcawtzv.supabase.co/storage/v1/object/public/pdfs/JEVOL_PDT500_PDT800.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center border border-gray-300 px-6 text-xs font-medium uppercase text-gray-600"
              >
                Завантажити PDF
              </a>
            </div>
          </div>
        </section>

        {/* Model comparison table */}
        <section className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">
            Технічні параметри: PDT-500 та PDT-800
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300 text-left">
                  <th className="py-2 pr-4 font-semibold text-gray-900">
                    Параметр
                  </th>
                  <th className="py-2 pr-4 font-semibold text-gray-900">
                    PDT-500
                  </th>
                  <th className="py-2 font-semibold text-gray-900">
                    PDT-800
                  </th>
                </tr>
              </thead>
              <tbody>
                {models.map((m) => (
                  <tr key={m.param} className="border-b border-gray-200">
                    <td className="py-2 pr-4 text-gray-500">{m.param}</td>
                    <td className="py-2 pr-4 font-medium text-gray-900">
                      {m.pdt500}
                    </td>
                    <td className="py-2 font-medium text-gray-900">
                      {m.pdt800}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Related products */}
        <section className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">
            Інші прилади
          </h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-5">
            {relatedCategories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="flex flex-col gap-3"
              >
                <ImgBox label="Image" className="h-32 w-full" />
                <span className="text-sm font-medium text-gray-700">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact form */}
        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-2">
          <ImgBox
            label="fotoPlant.webp — JEVOL factory floor (B&W)"
            className="h-56 w-full sm:h-full"
          />
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-gray-900">
              Заповніть форму зворотного зв&apos;язку
            </h2>
            <p className="mb-2 text-gray-600">
              Ми зв&apos;яжемось з вами для консультації
            </p>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
