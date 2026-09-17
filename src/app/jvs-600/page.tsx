import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/wireframe/Header";
import { Footer } from "@/components/wireframe/Footer";
import { ImgBox } from "@/components/wireframe/Box";
import { ContactForm } from "@/components/ContactForm";
import { categories } from "@/lib/categories";
import { storageUrl } from "@/lib/storage";

const TITLE = "Димомір JVS-600 — вимірювання димності для техогляду в Україні | JEVOL";
const DESCRIPTION =
  "Димомір JVS-600 JEVOL для точного вимірювання димності дизельних двигунів під час техогляду. Відповідає ДСТУ 4276:2004. Офіційний представник в Україні.";
const URL = "https://jevol.com.ua/jvs-600";

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
    question: "Для чого призначений димомір JVS-600?",
    answer:
      "Димомір JVS-600 призначений для точного вимірювання димності відпрацьованих газів дизельних та газодизельних автомобільних двигунів під час проведення обов'язкового технічного контролю транспортних засобів в Україні.",
  },
  {
    question: "Що вимірює димомір JVS-600?",
    answer:
      "Прилад вимірює два ключових показники якості відпрацьованих газів: натуральний показник послаблення світлового потоку (К) — основний параметр димності, та коефіцієнт послаблення світлового потоку (N) — додатковий показник для повного аналізу.",
  },
  {
    question: "Яким стандартам відповідає димомір JVS-600?",
    answer:
      "Димомір JVS-600 дозволяє проводити випробування у повній відповідності до вимог ДСТУ 4276:2004 (український стандарт вимірювання димності) та ISO/TS 16949:2002 (міжнародний стандарт якості автомобільної промисловості). Прилад підходить для застосування в акредитованих лабораторіях технічного контролю, сертифікованих НААУ.",
  },
  {
    question: "Які додаткові вимірювання підтримує прилад?",
    answer:
      "До складу комплектації входить цифровий тахометр та датчик вимірювання температури мастила — додаткові параметри для повноцінного технічного контролю двигуна.",
  },
  {
    question: "Як відображаються результати вимірювань?",
    answer:
      "Всі показники відображаються на вбудованому LCD дисплеї в режимі реального часу та одночасно передаються на діагностичний комп'ютер до бази даних програмного забезпечення TSR — для автоматичного формування протоколу випробувань.",
  },
  {
    question: "Чи інтегрується JVS-600 з іншим обладнанням JEVOL?",
    answer:
      "Так. Димомір JVS-600 працює в системі \"єдиний протокол\" разом з гальмівним стендом RRT7500S (перевірка гальмівної системи), газоаналізатором JVE-501 (аналіз вихлопних газів бензинових двигунів) та реглоскопом JVH-M100 (контроль та налаштування світла фар). Всі результати автоматично об'єднуються в єдиний протокол технічного контролю.",
  },
];

const specs = [
  { label: "Вхідна номінальна напруга", value: "220 В / 1 фаза / 50 Гц / 200 Вт" },
  { label: "Діапазон вимірювань (N)", value: "від 0 до 99.9" },
  { label: "Вимірювання коефіцієнта поглинання (К)", value: "від 0 до 16.0 м⁻¹" },
  { label: "Вимірювання температури мастила", value: "від 0 до 150°С" },
  { label: "Габаритні розміри", value: "450 × 300 × 200 мм" },
  { label: "Вага", value: "14 кг" },
];

const STORAGE_BUCKET = "images";
const STORAGE_FOLDER = "dymomir-jvs-600";
const imageUrl = (path: string) =>
  storageUrl(STORAGE_BUCKET, `${STORAGE_FOLDER}/${path}`);

const heroImage = {
  path: "1.webp",
  alt: "Димомір JVS-600 JEVOL на пересувному візку",
};

const galleryImages = [
  { path: "2.webp", alt: "Комплекс JEVOL: газоаналізатор JVE-501 та димомір JVS-600" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Димомір JVS-600",
      description: DESCRIPTION,
      brand: { "@type": "Brand", name: "JEVOL" },
      image: imageUrl(heroImage.path),
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

const relatedCategories = categories.filter((c) => c.href !== "/jvs-600");

export default function Jvs600Page() {
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
          <span className="text-gray-600">Димомір JVS-600</span>
        </div>

        {/* Product info block */}
        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-8 sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            <div className="relative h-80 w-full overflow-hidden sm:h-96">
              <Image
                src={imageUrl(heroImage.path)}
                alt={heroImage.alt}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {galleryImages.map((img) => (
                <div key={img.path} className="relative h-24 w-full overflow-hidden">
                  <Image
                    src={imageUrl(img.path)}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="240px"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-gray-900">
              Димомір JVS-600 — вимірювання димності для техогляду в Україні
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
                href="https://tflgmyvvavucbmcawtzv.supabase.co/storage/v1/object/public/pdfs/Smoke_%20JVS-600.pdf"
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
