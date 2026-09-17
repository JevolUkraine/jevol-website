import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/wireframe/Header";
import { Footer } from "@/components/wireframe/Footer";
import { ImgBox } from "@/components/wireframe/Box";
import { ContactForm } from "@/components/ContactForm";
import { categories } from "@/lib/categories";

const TITLE =
  "Реглоскоп JVH-M100 — контроль та налаштування світла фар для техогляду в Україні | JEVOL";
const DESCRIPTION =
  "Реглоскоп JVH-M100 JEVOL — лазерне наведення, контроль сили світла фар та покажчиків поворотів. Відповідає ДСТУ 3649:2010. Офіційний представник в Україні.";
const URL = "https://jevol.com.ua/regloskopp/";

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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Реглоскоп JVH-M100",
      description: DESCRIPTION,
      brand: { "@type": "Brand", name: "JEVOL" },
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
        {/* Breadcrumb */}
        <div className="mx-auto max-w-6xl px-4 pt-6 text-xs text-gray-400">
          <Link href="/">Головна</Link> / <span>Прилади</span> /{" "}
          <span className="text-gray-600">Реглоскоп</span>
        </div>

        {/* Product info block */}
        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-8 sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            <ImgBox
              label="gazoanalizator-dymom.webp — hero (mismatched source image — client will replace)"
              className="h-80 w-full sm:h-96 text-[11px]"
            />
            <ImgBox label="IMG_2928.webp" className="h-24 w-full text-[10px]" />
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-gray-900">
              ПРИЛАД НАЛАШТУВАННЯ СВІТЛА ФАР - РЕГЛОСКОП (Фотометр) JVH-M100
            </h1>
            <p className="text-gray-600">
              Реглоскоп JVH-M100 — контроль та налаштування світла фар для
              техогляду в Україні.
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
                href="https://tflgmyvvavucbmcawtzv.supabase.co/storage/v1/object/public/pdfs/JEVOL_JVH_M100.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center border border-gray-300 px-6 text-xs font-medium uppercase text-gray-600"
              >
                Завантажити PDF
              </a>
            </div>
          </div>
        </section>

        {/* Technical specs */}
        <section className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="mb-2 text-xl font-semibold text-gray-900">
            Технічні параметри реглоскопа JVH-M100
          </h2>
          <p className="mb-6 text-sm text-gray-600">
            Реглоскоп JVH-M100 розроблений для точних вимірювань світлотехніки
            транспортних засобів в умовах акредитованої лабораторії технічного
            контролю відповідно до вимог ДСТУ 3649:2010 та ISO/IEC 17025:2017.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {specs.map((s) => (
              <div key={s.title}>
                <h3 className="font-medium text-gray-900">
                  {s.title} —{" "}
                  <span className="font-semibold">{s.range}</span>
                </h3>
                <p className="text-sm text-gray-600">{s.text}</p>
              </div>
            ))}
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
