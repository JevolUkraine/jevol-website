import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/wireframe/Header";
import { Footer } from "@/components/wireframe/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactSection } from "@/components/ContactSection";
import { categories } from "@/lib/categories";
import { storageUrl } from "@/lib/storage";

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

const STORAGE_BUCKET = "images";
const STORAGE_FOLDER = "detektor-lyuftiv";
const imageUrl = (path: string) =>
  storageUrl(STORAGE_BUCKET, `${STORAGE_FOLDER}/${path}`);

const heroImage = {
  path: "fotoLuft1.webp",
  alt: "Детектор люфтів JEVOL — платформи, вмонтовані в оглядову яму",
};

const galleryImages = [
  { path: "fotoLuft2.webp", alt: "Детектор люфтів JEVOL — вигляд платформ під іншим кутом" },
  { path: "fotoLuft3 (1).webp", alt: "Блок керування детектора люфтів JEVOL Play Detector" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Детектор люфтів JEVOL PDT-500",
      description: DESCRIPTION,
      brand: { "@type": "Brand", name: "JEVOL" },
      image: imageUrl(heroImage.path),
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
      image: imageUrl(heroImage.path),
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
        {/* Photo header */}
        <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-[rgb(116,116,116)]">
          <Image
            src={imageUrl(heroImage.path)}
            alt=""
            aria-hidden
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
          <div className="relative mx-auto max-w-6xl px-4 py-16">
            <h1 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              ДЕТЕКТОР ЛЮФТІВ ТА ЗАЗОРІВ ХОДОВОЇ ЧАСТИНИ АВТОМОБІЛЯ
              PDT-500/PDT-800
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-100">
              Детектор люфтів ходової частини JEVOL — діагностика підвіски
              для техогляду.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/380504709561"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#25D366] px-8 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#20BD5A]"
              >
                Написати нам у WhatsApp
              </a>
              <a
                href="https://tflgmyvvavucbmcawtzv.supabase.co/storage/v1/object/public/pdfs/JEVOL_PDT500_PDT800.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md border-2 border-white/40 px-8 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white"
              >
                Завантажити PDF
              </a>
            </div>
          </div>
        </section>

        <Breadcrumb current="Детектор люфтів ходової частини" />

        {/* FAQ */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
              {faqs.map((f) => (
                <div key={f.question} className="border-l-2 border-orange-500 pl-4">
                  <h2 className="font-bold text-zinc-950">{f.question}</h2>
                  <p className="mt-1 text-sm text-zinc-600">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo gallery */}
        <section className="bg-zinc-950 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {galleryImages.map((img) => (
                <div
                  key={img.path}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-[0_0_16px_rgba(255,255,255,0.25)] transition-shadow duration-300 hover:shadow-none"
                >
                  <Image
                    src={imageUrl(img.path)}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 640px) 25vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Model comparison table */}
        <section className="bg-zinc-950">
          <div className="mx-auto max-w-6xl px-4 pb-16 sm:pb-20">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Технічні параметри: PDT-500 та PDT-800
            </h2>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-zinc-700 text-left">
                    <th className="py-2 pr-4 font-bold text-white">
                      Параметр
                    </th>
                    <th className="py-2 pr-4 font-bold text-white">
                      PDT-500
                    </th>
                    <th className="py-2 font-bold text-white">PDT-800</th>
                  </tr>
                </thead>
                <tbody>
                  {models.map((m) => (
                    <tr key={m.param} className="border-b border-zinc-800">
                      <td className="py-3 pr-4 text-zinc-400">{m.param}</td>
                      <td className="py-3 pr-4 font-bold text-white">
                        {m.pdt500}
                      </td>
                      <td className="py-3 font-bold text-white">
                        {m.pdt800}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Related products */}
        <section className="bg-zinc-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl">
              Інші прилади
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-5">
              {relatedCategories.map((cat) => (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className="group relative block h-40 overflow-hidden shadow-[0_0_16px_rgba(255,255,255,0.25)] transition-shadow duration-300 hover:shadow-none"
                >
                  <Image
                    src={storageUrl("images", `${cat.imageFolder}/${cat.imagePath}`)}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 640px) 25vw, 50vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex h-14 items-center bg-zinc-950/80 px-3">
                    <span className="line-clamp-2 text-xs font-bold uppercase leading-tight tracking-wide text-white">
                      {cat.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
