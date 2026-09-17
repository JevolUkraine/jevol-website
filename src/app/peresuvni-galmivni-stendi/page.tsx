import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/wireframe/Header";
import { Footer } from "@/components/wireframe/Footer";
import { ImgBox } from "@/components/wireframe/Box";
import { ContactForm } from "@/components/ContactForm";
import { categories } from "@/lib/categories";

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

const galleryImages = [
  "foto3.jpg",
  "IMG_4858.webp",
  "IMG_1612.webp",
  "IMG_1587.webp",
  "RRT-7500M.webp",
  "F8843F7D-F9D7-4483-B.webp",
  "IMG_2394.webp",
  "2.webp",
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
        {/* Breadcrumb */}
        <div className="mx-auto max-w-6xl px-4 pt-6 text-xs text-gray-400">
          <Link href="/">Головна</Link> / <span>Прилади</span> /{" "}
          <span className="text-gray-600">Пересувні гальмівні стенди</span>
        </div>

        {/* Product info block */}
        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-8 sm:grid-cols-2">
          {/* Image gallery */}
          <div className="flex flex-col gap-3">
            <ImgBox
              label="mobilnyy-galmivnyy-s.webp — hero"
              className="h-80 w-full sm:h-96"
            />
            <div className="grid grid-cols-4 gap-3">
              {galleryImages.map((img) => (
                <ImgBox
                  key={img}
                  label={img}
                  className="h-16 w-full text-[9px]"
                />
              ))}
            </div>
          </div>

          {/* Product details */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-gray-900">
              УНІВЕРСАЛЬНИЙ ПЕРЕСУВНИЙ ГАЛЬМІВНИЙ СТЕНД СЕРІЇ RRT
            </h1>
            <p className="font-medium text-gray-700">
              Не потребує фундаментних робіт.
            </p>
            <p className="text-gray-600">
              Все обладнання в одній системі: автоматичний збір даних з усіх
              приладів лінії техогляду та миттєве формування єдиного
              фінального протоколу.
            </p>
            <div className="pt-2">
              <h2 className="mb-3 font-semibold text-gray-900">
                Загальні технічні параметри гальмівного стенду RRT7500S
              </h2>
              <div className="flex flex-col gap-3">
                {specs.map((s) => (
                  <div key={s.title}>
                    <h3 className="font-medium text-gray-900">{s.title}</h3>
                    <p className="text-sm text-gray-600">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-2 flex flex-wrap gap-3">
              <a
                href="https://wa.me/380504709561"
                className="inline-flex h-11 items-center justify-center border-2 border-dashed border-gray-400 bg-gray-200 px-6 text-xs font-medium uppercase text-gray-600"
              >
                Написати нам у WhatsApp
              </a>
              <a
                href="https://drive.google.com/file/d/1zPZD5BpiOXFw-hsem-smw0oRrd2rWvB0/view?usp=drive_link"
                className="inline-flex h-11 items-center justify-center border border-gray-300 px-6 text-xs font-medium uppercase text-gray-600"
              >
                Завантажити PDF
              </a>
            </div>
          </div>
        </section>

        {/* FAQ / technical specs */}
        <section className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">
            Технічні характеристики пересувного гальмівного стенду JEVOL
          </h2>
          <div className="flex flex-col divide-y divide-gray-200">
            {faqs.map((f) => (
              <div key={f.question} className="py-4">
                <h3 className="font-medium text-gray-900">{f.question}</h3>
                <p className="mt-1 text-sm text-gray-600">{f.answer}</p>
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
