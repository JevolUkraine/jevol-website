import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/wireframe/Header";
import { Footer } from "@/components/wireframe/Footer";
import { ImgBox } from "@/components/wireframe/Box";
import { ContactForm } from "@/components/ContactForm";
import { categories } from "@/lib/categories";

const TITLE =
  "Газоаналізатор JVE-501 — 5-канальний аналіз вихлопних газів для техогляду в Україні | JEVOL";
const DESCRIPTION =
  "Газоаналізатор JVE-501 JEVOL — 5-канальний аналіз CO, CH, CO₂, O₂, NO для техогляду. Відповідає ISO/IEC 17025:2019. Офіційний представник в Україні.";
const URL = "https://jevol.com.ua/jve-501";

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
    question: "Для чого призначений газоаналізатор JVE-501?",
    answer:
      "Газоаналізатор JVE-501 — сучасний 5-канальний прилад для точного вимірювання складу відпрацьованих газів транспортних засобів з бензиновими, газовими та комбінованими двигунами під час проведення обов'язкового технічного контролю в Україні.",
  },
  {
    question: "Що вимірює JVE-501?",
    answer:
      "Прилад одночасно вимірює п'ять ключових показників якості вихлопних газів: CO (оксид вуглецю), CH (вуглеводні), CO₂ (діоксид вуглецю), O₂ (кисень) та NO (оксид азоту). Повний аналіз за одне вимірювання — без додаткових приладів.",
  },
  {
    question: "Яким стандартам відповідає JVE-501?",
    answer:
      "Газоаналізатор JVE-501 повністю відповідає вимогам міжнародного стандарту ISO/IEC 17025:2019 та може застосовуватись у складі лінії технічного контролю при проведенні сертифікаційних випробувань транспортних засобів, обов'язкового державного технічного контролю в Україні та досліджень в акредитованих лабораторіях НААУ.",
  },
  {
    question: "Як відображаються та друкуються результати?",
    answer:
      "Всі вимірювання та розрахунки відображаються в режимі реального часу на великому LCD екрані. За потреби результати можуть бути роздруковані безпосередньо на місці за допомогою вбудованого мікропринтера (додаткове обладнання) — зручно для оформлення протоколів на місці випробування.",
  },
  {
    question: "Чи підтримує прилад базу даних випробувань?",
    answer:
      "Так. Прилад підтримує програмне забезпечення для ведення повноцінної бази даних випробувань на комп'ютерних носіях — автоматичне збереження всіх результатів, швидкий пошук та формування звітів.",
  },
  {
    question: "Чи інтегрується JVE-501 з іншим обладнанням JEVOL?",
    answer:
      "Так. Газоаналізатор JVE-501 працює в системі \"єдиний протокол\" разом з гальмівним стендом RRT7500S (перевірка гальмівної системи), димоміром JVS-600 (вимірювання димності дизельних двигунів), реглоскопом JVH-M100 (контроль та налаштування світла фар) та детектором люфтів (діагностика ходової частини). Всі результати автоматично об'єднуються в єдиний протокол технічного контролю транспортного засобу та зберігаються в базі даних на ПК.",
  },
];

const specs = [
  { label: "Вхідна номінальна напруга", value: "220 В / 1 фаза / 50 Гц / 150 Вт" },
  { label: "Діапазон вимірювання CO", value: "0 – 10 %" },
  { label: "Діапазон вимірювання CO₂", value: "0 – 20 %" },
  { label: "Діапазон вимірювання HC", value: "0 – 9999 ppm" },
  { label: "Діапазон вимірювання O₂", value: "0 – 30 %" },
  { label: "Діапазон вимірювання NO", value: "0 – 5000 ppm" },
  { label: "Лямбда", value: "0.5 – 1.8" },
  { label: "Вага", value: "7 кг" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Газоаналізатор JVE-501",
      description: DESCRIPTION,
      brand: { "@type": "Brand", name: "JEVOL" },
      url: URL,
      additionalProperty: specs.map((s) => ({
        "@type": "PropertyValue",
        name: s.label,
        value: s.value,
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

const relatedCategories = categories.filter((c) => c.href !== "/jve-501");

export default function Jve501Page() {
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
          <span className="text-gray-600">Газоаналізатор JVE-501</span>
        </div>

        {/* Product info block */}
        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-8 sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            <ImgBox
              label="gazoanalizator-dymom.webp — hero"
              className="h-80 w-full sm:h-96"
            />
            <ImgBox
              label="RRT-7500M.webp (mismatched source image — client will replace)"
              className="h-24 w-full text-[10px]"
            />
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-gray-900">
              Газоаналізатор JVE-501 — 5-канальний аналіз вихлопних газів для
              техогляду в Україні
            </h1>
            <div className="flex flex-col gap-3">
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
                href="https://tflgmyvvavucbmcawtzv.supabase.co/storage/v1/object/public/pdfs/Gas_JEVOL_%20JVE-501.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center border border-gray-300 px-6 text-xs font-medium uppercase text-gray-600"
              >
                Завантажити PDF
              </a>
            </div>
          </div>
        </section>

        {/* Technical specs table */}
        <section className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">
            Загальні технічні параметри
          </h2>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {specs.map((s) => (
              <div
                key={s.label}
                className="flex justify-between border-b border-gray-200 py-2 text-sm"
              >
                <dt className="text-gray-500">{s.label}</dt>
                <dd className="font-medium text-gray-900">{s.value}</dd>
              </div>
            ))}
          </dl>
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
