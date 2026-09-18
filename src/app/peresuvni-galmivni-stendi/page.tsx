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
  "Пересувні гальмівні стенди для техогляду — купити мобільний стенд в Україні | JEVOL";
const DESCRIPTION =
  "Пересувні мобільні гальмівні стенди JEVOL для техогляду — встановлення без оглядової ями. Для легкових та вантажних авто, підтримка 4WD. Виїзна діагностика. Монтаж по всій Україні. Офіційний представник.";
const URL = "https://jevol.com.ua/peresuvni-galmivni-stendi/";

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

const specs = [
  {
    title: "Мобільна конструкція",
    text: "Зручне компактне виконання стенду дозволяє швидко змонтувати обладнання та одразу розпочати процедуру перевірки транспортного засобу — мінімум часу на підготовку лабораторії.",
  },
  {
    title: "Міцність конструкції",
    text: "Корпус стенду виготовлено з рифленої сталі — це забезпечує високу механічну міцність та захист від деформацій при інтенсивній щоденній експлуатації.",
  },
  {
    title: "Точне вимірювання ваги",
    text: "Система зважування на базі 6 незалежних сенсорів забезпечує точне вимірювання ваги транспортного засобу та навантаження на кожну вісь окремо — відповідно до вимог ДСТУ 3649.",
  },
  {
    title: "Промисловий захист IP65",
    text: "Ступінь захисту компонентів стенду IP65 — повний захист від пилу та струменів води. Обладнання надійно працює навіть у складних умовах виробничих приміщень.",
  },
  {
    title: "Широкий діапазон робочих температур",
    text: "Стенд працює у діапазоні від −30°C до +45°C — підходить для експлуатації у будь-яку пору року по всій Україні, включаючи регіони з суворим кліматом.",
  },
  {
    title: "Довговічне покриття роликів",
    text: "Карбідокремнієве покриття роликів на 100% імітує асфальтове покриття та забезпечує максимальний коефіцієнт зчеплення з колесом транспортного засобу — гарантований ресурс понад 200 000 випробувань.",
  },
  {
    title: "Мобільне керування",
    text: "Дистанційне керування процесом випробування доступне з будь-якого мобільного пристрою — планшета або смартфона на базі Android. Оператор лабораторії може керувати стендом дистанційно без прив'язки до стаціонарного ПК.",
  },
];

const faqs = [
  {
    question: "Для яких транспортних засобів підходить пересувний стенд?",
    answer:
      "Стенд призначений для випробування легкових та вантажних транспортних засобів усіх категорій під час проведення обов'язкового технічного контролю — відповідно до вимог ДСТУ 3649 та ДСТУ 3333.",
  },
  {
    question: "Яка система безпеки передбачена в стенді?",
    answer:
      "Автоматизована система зупинки електродвигунів миттєво спрацьовує у разі неконтрольованого з'їзду транспортного засобу зі стенду — надійний захист персоналу лабораторії та обладнання від пошкоджень.",
  },
  {
    question: "Чи є точне вимірювання навантаження?",
    answer:
      "Вбудована функція вимірювання вагового навантаження на кожну вісь автомобіля та кожне колесо окремо забезпечує детальну картину розподілу гальмівних зусиль — точні дані для протоколу технічного контролю.",
  },
];

const STORAGE_BUCKET = "images";
const STORAGE_FOLDER = "peresuvni-galmivni-stendi";
const imageUrl = (path: string) =>
  storageUrl(STORAGE_BUCKET, `${STORAGE_FOLDER}/${path}`);

const heroImage = {
  path: "6 (1).webp",
  alt: "Пересувний гальмівний стенд JEVOL RRT7500M — загальний вигляд",
};

const galleryImages = [
  { path: "3.webp", alt: "Пересувний гальмівний стенд JEVOL — вигляд спереду" },
  { path: "5 (1).webp", alt: "Тестування вантажівки на пересувному гальмівному стенді JEVOL" },
  { path: "7.webp", alt: "Тестування легкового автомобіля на пересувному гальмівному стенді JEVOL" },
  { path: "9.webp", alt: "Тестування паливної цистерни на пересувному гальмівному стенді JEVOL" },
  { path: "4.webp", alt: "Пересувний гальмівний стенд JEVOL в лабораторії техогляду" },
  { path: "2.webp", alt: "Встановлення пересувного гальмівного стенду JEVOL" },
  { path: "foto3.webp", alt: "Пересувний гальмівний стенд JEVOL — вигляд зверху" },
  { path: "10.webp", alt: "Пересувний гальмівний стенд JEVOL на СТО" },
  { path: "8.webp", alt: "Пересувні гальмівні стенди JEVOL підготовлені до відвантаження" },
  { path: "RRT-7500M.webp", alt: "Тестування вантажівки Mercedes Actros на пересувному гальмівному стенді JEVOL" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Універсальний пересувний гальмівний стенд RRT7500M",
      description: DESCRIPTION,
      brand: { "@type": "Brand", name: "JEVOL" },
      url: URL,
      image: imageUrl(heroImage.path),
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
  (c) => c.href !== "/peresuvni-galmivni-stendi",
);

export default function MobileBrakeStandsPage() {
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
              <span className="text-white">Пересувні гальмівні стенди</span>
            </div>
            <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              УНІВЕРСАЛЬНИЙ ПЕРЕСУВНИЙ ГАЛЬМІВНИЙ СТЕНД СЕРІЇ RRT
            </h1>
            <p className="mt-4 font-semibold text-amber-200">
              Не потребує фундаментних робіт.
            </p>
            <p className="mt-2 max-w-2xl text-lg text-gray-100">
              Все обладнання в одній системі: автоматичний збір даних з усіх
              приладів лінії техогляду та миттєве формування єдиного
              фінального протоколу.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/380504709561"
                className="inline-flex h-12 items-center justify-center bg-[#25D366] px-8 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#20BD5A]"
              >
                Написати нам у WhatsApp
              </a>
              <a
                href="https://tflgmyvvavucbmcawtzv.supabase.co/storage/v1/object/public/pdfs/Mobile_JEVOL_RRT7500M.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center border-2 border-white/40 px-8 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white"
              >
                Завантажити PDF
              </a>
            </div>
          </div>
        </section>

        {/* Technical specs */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl">
              Загальні технічні параметри гальмівного стенду RRT7500S
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
              {specs.map((s) => (
                <div key={s.title} className="border-l-2 border-orange-500 pl-4">
                  <h3 className="font-bold text-zinc-950">{s.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-zinc-950">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Технічні характеристики пересувного гальмівного стенду JEVOL
            </h2>
            <div className="mt-10 flex flex-col divide-y divide-zinc-800">
              {faqs.map((f) => (
                <div key={f.question} className="py-6">
                  <h3 className="font-bold text-white">{f.question}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo gallery */}
        <section className="bg-zinc-950 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-5">
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
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 25vw, 50vw"
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
