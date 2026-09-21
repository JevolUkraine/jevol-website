import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/wireframe/Header";
import { Footer } from "@/components/wireframe/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactSection } from "@/components/ContactSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { categories } from "@/lib/categories";
import { storageUrl } from "@/lib/storage";

const TITLE =
  "Реглоскоп JVH-M100 — контроль та налаштування світла фар для техогляду в Україні | JEVOL";
const DESCRIPTION =
  "Реглоскоп JVH-M100 JEVOL — лазерне наведення, контроль сили світла фар та покажчиків поворотів. Відповідає ДСТУ 3649:2010. Офіційний представник в Україні.";
const URL = "https://jevol.com.ua/regloskopp";

const STORAGE_BUCKET = "images";
// Note: the real folder in Supabase Storage is "regloskop-jvh-m1oo" (typo'd
// with letter "oo" instead of "00" when it was created) — using it as-is.
const STORAGE_FOLDER = "regloskop-jvh-m1oo";
const imageUrl = (path: string) =>
  storageUrl(STORAGE_BUCKET, `${STORAGE_FOLDER}/${path}`);

const heroImage = {
  path: "!IMG_3733.webp",
  alt: "Реглоскоп JVH-M100 JEVOL — блок з екраном та лазерним наведенням",
};

const OG_IMAGE = imageUrl(heroImage.path);

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const faqs = [
  {
    question: "Для чого призначений реглоскоп JVH-M100?",
    answer:
      "Реглоскоп JVH-M100 — високотехнологічний прилад для контролю та налаштування світла фар транспортних засобів під час проведення обов'язкового державного технічного контролю в Україні. Дозволяє виконувати випробування технічного стану світлових приладів відповідно до вимог ДСТУ 3649:2010.",
  },
  {
    question: "Чи має прилад лазерне наведення?",
    answer:
      "Так. Прилад оснащено системою лазерного наведення та фокусування — точне позиціонування відносно фар транспортного засобу без зайвих налаштувань. Висока точність вимірювань при мінімальному часі підготовки до випробування.",
  },
  {
    question: "Як відображаються та передаються результати?",
    answer:
      "Вмонтований LCD екран відображає покрокові вказівки щодо налаштування геометричних параметрів світлотехніки автомобіля в режимі реального часу. Результати тестування автоматично передаються до програмного забезпечення на комп'ютер — для формування протоколу технічного контролю.",
  },
  {
    question: "Яким стандартам відповідає реглоскоп JVH-M100?",
    answer:
      "Реглоскоп JVH-M100 повністю відповідає вимогам ДСТУ 3649:2010 (український стандарт технічного стану світлових приладів) та ISO/IEC 17025:2017 (міжнародний стандарт акредитації випробувальних лабораторій). Прилад може використовуватись у складі лінії технічного контролю при проведенні сертифікаційних випробувань та обов'язкового державного технічного контролю транспортних засобів в акредитованих лабораторіях НААУ.",
  },
  {
    question: "Чи інтегрується реглоскоп з іншим обладнанням JEVOL?",
    answer:
      "Так. Реглоскоп JVH-M100 працює в системі \"єдиний протокол\" разом з гальмівним стендом RRT7500S (перевірка гальмівної системи), газоаналізатором JVE-501 (аналіз вихлопних газів), димоміром JVS-600 (вимірювання димності дизельних двигунів) та детектором люфтів (діагностика ходової частини). Всі результати автоматично об'єднуються в єдиний протокол технічного контролю транспортного засобу.",
  },
];

const specs = [
  {
    title: "Вимірювання сили світла",
    range: "1 – 120 000 кд",
    text: "Широкий діапазон охоплює всі типи світлових приладів — від денних ходових вогнів до потужних фар вантажних транспортних засобів.",
  },
  {
    title: "Контроль покажчиків поворотів",
    range: "30 – 180 імпульсів/хв",
    text: "Діапазон вимірювання частоти проходження проблисків покажчиків поворотів та бічних повторювачів. Точний контроль відповідності нормам технічного контролю.",
  },
  {
    title: "Час реакції світлового сигналу",
    range: "0,1 – 10 с",
    text: "Діапазон вимірювання часу від моменту увімкнення покажчиків поворотів до появи першого блиску. Виявлення несправностей у системі освітлення на ранній стадії.",
  },
  {
    title: "Регулювання нахилу світлотіньової межі",
    range: "15 – 140 кутових хвилин",
    text: "Точне налаштування геометрії світлового пучка фар відповідно до нормативних вимог.",
  },
  {
    title: "Регулювання висоти",
    range: "250 – 1300 мм",
    text: "Підходить для діагностики світлових приладів легкових та вантажних транспортних засобів різної висоти.",
  },
  {
    title: "Живлення",
    range: "батарея 9В / мережа 220В",
    text: "Прилад підтримує два режими живлення — автономне живлення від батареї 9В для мобільного використання та підключення до мережі 220В для стаціонарної роботи в лабораторії.",
  },
];

const galleryImages = [
  { path: "IMG-3ed9cc1a7c29d1e49a2340031c2e9dac-V.webp", alt: "Реглоскоп JVH-M100 JEVOL — вигляд спереду" },
  { path: "IMG-753cc0fde3524d5c89e5a5bd5d04b13d-V.webp", alt: "Реглоскоп JVH-M100 JEVOL — вигляд збоку" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Реглоскоп JVH-M100",
      description: DESCRIPTION,
      brand: { "@type": "Brand", name: "JEVOL" },
      image: imageUrl(heroImage.path),
      url: URL,
      additionalProperty: specs.map((s) => ({
        "@type": "PropertyValue",
        name: s.title,
        value: s.range,
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

const relatedCategories = categories.filter((c) => c.href !== "/regloskopp");

export default function RegloskopPage() {
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
              ПРИЛАД НАЛАШТУВАННЯ СВІТЛА ФАР - РЕГЛОСКОП (Фотометр) JVH-M100
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-100">
              Реглоскоп JVH-M100 — контроль та налаштування світла фар для
              техогляду в Україні.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/380504709561"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#25D366] px-8 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#20BD5A]"
              >
                Написати нам у WhatsApp
              </a>
              <a
                href="https://tflgmyvvavucbmcawtzv.supabase.co/storage/v1/object/public/pdfs/JEVOL_JVH_M100.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md border-2 border-white/40 px-8 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white"
              >
                Завантажити PDF
              </a>
            </div>
          </div>
        </section>

        <Breadcrumb current="Реглоскоп JVH-M100" />

        {/* FAQ */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl">
              Поширені запитання
            </h2>
            <FaqAccordion items={faqs} theme="light" className="mt-10" />
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

        {/* Technical specs */}
        <section className="bg-zinc-950">
          <div className="mx-auto max-w-6xl px-4 pb-16 sm:pb-20">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Технічні параметри реглоскопа JVH-M100
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-zinc-400">
              Реглоскоп JVH-M100 розроблений для точних вимірювань
              світлотехніки транспортних засобів в умовах акредитованої
              лабораторії технічного контролю відповідно до вимог ДСТУ
              3649:2010 та ISO/IEC 17025:2017.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
              {specs.map((s) => (
                <div key={s.title} className="border-l-2 border-orange-500 pl-4">
                  <h3 className="font-bold text-white">
                    {s.title} —{" "}
                    <span className="text-orange-400">{s.range}</span>
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">{s.text}</p>
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
                  className="group relative block h-40 overflow-hidden rounded-lg shadow-[0_0_16px_rgba(255,255,255,0.25)] transition-shadow duration-300 hover:shadow-none"
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
