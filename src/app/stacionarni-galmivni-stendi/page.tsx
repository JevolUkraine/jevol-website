import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/wireframe/Header";
import { Footer } from "@/components/wireframe/Footer";
import { ImgBox } from "@/components/wireframe/Box";
import { ContactForm } from "@/components/ContactForm";
import { categories } from "@/lib/categories";

const TITLE = "Гальмівний стенд для техогляду RRT7500S — купити в Україні | JEVOL";
const DESCRIPTION =
  "Стаціонарні гальмівні стенди JEVOL серії RRT для техогляду легкових та вантажних авто. Корундові ролики 200 000+ циклів, підтримка 4WD, вбудоване зважування. Монтаж по всій Україні. Понад 100 інсталяцій. Офіційний представник.";
const URL = "https://jevol.com.ua/stacionarni-galmivni-stendi/";

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

const infoBlocks = [
  {
    label: "Для кого призначений:",
    text: "Стенд розроблено для випробування легкових та вантажних транспортних засобів всіх видів під час проведення державного технічного огляду в акредитованих лабораторіях України та інших підприємствах.",
  },
  {
    label: "Відповідність стандартам:",
    text: "Обладнання повністю відповідає вимогам ДСТУ 3649 та ДСТУ 3333, а також міжнародним стандартам ISO/IEC 17025:2006 та ISO/IEC 17025:2019. Застосовується суб'єктами, акредитованими НААУ.",
  },
  {
    label: "Технічні переваги:",
    text: "Стенд оснащено бездротовим динамометром педалі гальма для визначення зусилля натиску та часу спрацювання гальмівної системи. Карбідокремнієве покриття роликів забезпечує максимальне зчеплення і гарантований строк служби понад 200 000 випробувань.",
  },
  {
    label: "Інтеграція з іншими приладами:",
    text: "Програмне забезпечення стенда дозволяє одночасно керувати газоаналізатором, димоміром, реглоскопом та тахометром. Всі результати — гальмівна система, вихлопні гази, димність, світло фар — автоматично об'єднуються в єдиний протокол випробувань і зберігаються в базі даних на ПК.",
  },
  {
    label: "Сервіс та підтримка:",
    text: "Здійснюємо доставку та професійний монтаж по всій території України. Проводимо навчання персоналу лабораторії замовника. Гарантійна та післягарантійна підтримка клієнтів — наші комплектуючі завжди є на складі в Україні.",
  },
];

const faqs = [
  {
    question: "Для яких транспортних засобів підходить стенд RRT7500S?",
    answer:
      "Стенд призначений для випробування як легкових, так і вантажних транспортних засобів усіх категорій під час проведення обов'язкового технічного контролю в Україні.",
  },
  {
    question: "Яка система безпеки передбачена в стенді?",
    answer:
      "Автоматизована система зупинки електродвигунів миттєво спрацьовує у разі неконтрольованого з'їзду транспортного засобу зі стенду — надійний захист обладнання та персоналу лабораторії.",
  },
  {
    question: "Чи є функція зважування?",
    answer:
      "Вбудована функція вимірювання вагового навантаження на кожну вісь автомобіля та кожне колесо окремо забезпечує повну картину розподілу гальмівних зусиль.",
  },
  {
    question: "Як забезпечується плавний заїзд на стенд?",
    answer:
      "Пневматичний підйомний пристрій гарантує плавний та безпечний заїзд і виїзд легкового транспортного засобу — без ривків та пошкоджень підвіски.",
  },
  {
    question: "Який ресурс роликів стенда?",
    answer:
      "Карбідокремнієве покриття роликів стенда на 100% імітує асфальтове покриття та забезпечує максимальний коефіцієнт зчеплення з колесом транспортного засобу. Гарантійний ресурс — понад 200 000 випробувань без заміни роликів.",
  },
  {
    question: "Чи можна керувати стендом дистанційно?",
    answer:
      "Дистанційне керування процесом випробування доступне з будь-якого мобільного пристрою — планшета або смартфона на базі Android. Оператор лабораторії може керувати стендом без прив'язки до стаціонарного комп'ютера.",
  },
];

const galleryImages = [
  "061019E6-E4FB-4250-A.webp",
  "65B04B72-679C-4356-A.webp",
  "IMG_7891.webp",
  "6d02985f-fddd-4bb3-8.webp",
  "IMG-5650.webp",
  "626110EF-2BB0-43E9-A.webp",
  "IMG_1520.webp",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Універсальний роликовий гальмівний стенд RRT7500S",
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
  (c) => c.href !== "/stacionarni-galmivni-stendi",
);

export default function StationaryBrakeStandsPage() {
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
          <span className="text-gray-600">Стаціонарні гальмівні стенди</span>
        </div>

        {/* Product info block */}
        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-8 sm:grid-cols-2">
          {/* Image gallery */}
          <div className="flex flex-col gap-3">
            <ImgBox
              label="galmivnyy-stend-dlya.webp — hero"
              className="h-80 w-full sm:h-96"
            />
            <div className="grid grid-cols-4 gap-3">
              {galleryImages.map((img) => (
                <ImgBox key={img} label={img} className="h-16 w-full text-[9px]" />
              ))}
            </div>
          </div>

          {/* Product details */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-gray-900">
              УНІВЕРСАЛЬНИЙ СТАЦІОНАРНИЙ ГАЛЬМІВНИЙ СТЕНД СЕРІЇ RRT
            </h1>
            <p className="text-gray-600">
              Універсальний роликовий гальмівний стенд RRT7500S — професійне
              обладнання для проведення обов&apos;язкового технічного
              контролю транспортних засобів відповідно до вимог українського
              законодавства.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              {infoBlocks.map((block) => (
                <div key={block.label}>
                  <h2 className="font-semibold text-gray-900">
                    {block.label}
                  </h2>
                  <p className="text-sm text-gray-600">{block.text}</p>
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
                href="https://drive.google.com/file/d/19nYXpb3KF4lUqGlXenEbnKPEQTJbQTW2/view?usp=drive_link"
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
            Технічні характеристики гальмівного стенду RRT7500S
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
