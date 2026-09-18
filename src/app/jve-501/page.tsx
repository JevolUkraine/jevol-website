import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/wireframe/Header";
import { Footer } from "@/components/wireframe/Footer";
import { ImgBox } from "@/components/wireframe/Box";
import { ContactForm } from "@/components/ContactForm";
import { categories } from "@/lib/categories";
import { storageUrl } from "@/lib/storage";

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

const STORAGE_BUCKET = "images";
const STORAGE_FOLDER = "gazoanalizator-jve-501";
const imageUrl = (path: string) =>
  storageUrl(STORAGE_BUCKET, `${STORAGE_FOLDER}/${path}`);

const heroImage = {
  path: "2.webp",
  alt: "Газоаналізатор JVE-501 JEVOL на пересувному візку",
};

const galleryImages = [
  { path: "1.webp", alt: "Комплекс JEVOL: газоаналізатор JVE-501 та димомір JVS-600" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Газоаналізатор JVE-501",
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
            <div className="text-xs text-gray-300">
              <Link href="/" className="hover:text-white">
                Головна
              </Link>{" "}
              / <span>Прилади</span> /{" "}
              <span className="text-white">Газоаналізатор JVE-501</span>
            </div>
            <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Газоаналізатор JVE-501 — 5-канальний аналіз вихлопних газів для
              техогляду в Україні
            </h1>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/380504709561"
                className="inline-flex h-12 items-center justify-center bg-[#25D366] px-8 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#20BD5A]"
              >
                Написати нам у WhatsApp
              </a>
              <a
                href="https://tflgmyvvavucbmcawtzv.supabase.co/storage/v1/object/public/pdfs/Gas_JEVOL_%20JVE-501.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center border-2 border-white/40 px-8 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white"
              >
                Завантажити PDF
              </a>
            </div>
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

        {/* Technical specs table */}
        <section className="bg-zinc-950">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
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

        {/* Photo gallery */}
        <section className="bg-zinc-950 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {galleryImages.map((img) => (
                <div
                  key={img.path}
                  className="group relative aspect-[4/3] overflow-hidden shadow-[0_0_16px_rgba(255,255,255,0.25)] transition-shadow duration-300 hover:shadow-none"
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
                  className="group relative block h-40 overflow-hidden border-2 border-transparent transition-colors hover:border-orange-500"
                >
                  <ImgBox label="Image" className="absolute inset-0 h-full w-full" />
                  <div className="absolute inset-x-0 bottom-0 bg-zinc-950/80 px-3 py-2">
                    <span className="text-xs font-bold uppercase tracking-wide text-white">
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
