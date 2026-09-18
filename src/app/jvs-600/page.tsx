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
              Димомір JVS-600 — вимірювання димності для техогляду в Україні
            </h1>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/380504709561"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#25D366] px-8 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#20BD5A]"
              >
                Написати нам у WhatsApp
              </a>
              <a
                href="https://tflgmyvvavucbmcawtzv.supabase.co/storage/v1/object/public/pdfs/Smoke_%20JVS-600.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md border-2 border-white/40 px-8 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white"
              >
                Завантажити PDF
              </a>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="border-b border-zinc-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 text-xs text-zinc-500">
            <Link href="/" className="hover:text-zinc-900">
              Головна
            </Link>{" "}
            / <span>Прилади</span> /{" "}
            <span className="font-semibold text-zinc-900">Димомір JVS-600</span>
          </div>
        </section>

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

        {/* Technical specs table */}
        <section className="bg-zinc-950">
          <div className="mx-auto max-w-6xl px-4 pb-16 sm:pb-20">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Загальні технічні параметри
            </h2>
            <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
              {specs.map((s) => (
                <div
                  key={s.label}
                  className="flex justify-between border-b border-zinc-800 py-3 text-sm"
                >
                  <dt className="text-zinc-400">{s.label}</dt>
                  <dd className="font-bold text-white">{s.value}</dd>
                </div>
              ))}
            </dl>
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
                  <ImgBox label="Image" className="absolute inset-0 h-full w-full transition-transform duration-300 group-hover:scale-105" />
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

        {/* Contact form */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 sm:grid-cols-2 sm:py-20">
            <ImgBox
              label="fotoPlant.webp — JEVOL factory floor (B&W)"
              className="h-64 w-full sm:h-full"
            />
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl">
                Заповніть форму зворотного зв&apos;язку
              </h2>
              <p className="mb-6 mt-3 text-zinc-600">
                Ми зв&apos;яжемось з вами для консультації
              </p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
