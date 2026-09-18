import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/wireframe/Header";
import { Footer } from "@/components/wireframe/Footer";
import { ImgBox } from "@/components/wireframe/Box";
import { ContactForm } from "@/components/ContactForm";
import { categories } from "@/lib/categories";
import { storageUrl } from "@/lib/storage";

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

const STORAGE_BUCKET = "images";
const STORAGE_FOLDER = "stacionarni-galmivni-stendi";
const imageUrl = (path: string) =>
  storageUrl(STORAGE_BUCKET, `${STORAGE_FOLDER}/${path}`);

const heroImage = {
  path: "6.webp",
  alt: "Стаціонарний гальмівний стенд JEVOL RRT7500S — загальний вигляд",
};

const galleryImages = [
  { path: "343434.webp", alt: "Тестування Volkswagen Tiguan на стаціонарному гальмівному стенді JEVOL" },
  { path: "1.webp", alt: "Стаціонарний гальмівний стенд JEVOL — вигляд зверху" },
  { path: "23.webp", alt: "Стаціонарний гальмівний стенд JEVOL — деталь роликів" },
  { path: "IMG_1520.webp", alt: "Пітний монтаж стаціонарного гальмівного стенду JEVOL" },
  { path: "3333.webp", alt: "Лінія технічного контролю зі стаціонарним гальмівним стендом JEVOL" },
  { path: "3434.webp", alt: "Монтаж стаціонарного гальмівного стенду JEVOL в оглядовій ямі" },
  { path: "5.webp", alt: "Оглядова яма для стаціонарного гальмівного стенду JEVOL" },
  { path: "63.webp", alt: "Лабораторія техогляду зі стаціонарним гальмівним стендом JEVOL" },
  { path: "IMG-1544.webp", alt: "Встановлення лабораторії техогляду з гальмівним стендом JEVOL" },
  { path: "IMG_7891.webp", alt: "Лінія технічного контролю з диспетчерською кабіною JEVOL" },
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
              УНІВЕРСАЛЬНИЙ СТАЦІОНАРНИЙ ГАЛЬМІВНИЙ СТЕНД СЕРІЇ RRT
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-100">
              Універсальний роликовий гальмівний стенд RRT7500S — професійне
              обладнання для проведення обов&apos;язкового технічного
              контролю транспортних засобів відповідно до вимог українського
              законодавства.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/380504709561"
                className="inline-flex h-12 items-center justify-center bg-[#25D366] px-8 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#20BD5A]"
              >
                Написати нам у WhatsApp
              </a>
              <a
                href="https://tflgmyvvavucbmcawtzv.supabase.co/storage/v1/object/public/pdfs/JEVOL_%20RRT7500S.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center border-2 border-white/40 px-8 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white"
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
            <span className="font-semibold text-zinc-900">
              Стаціонарні гальмівні стенди
            </span>
          </div>
        </section>

        {/* Info blocks */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
              {infoBlocks.map((block) => (
                <div key={block.label} className="border-l-2 border-orange-500 pl-4">
                  <h2 className="font-bold text-zinc-950">{block.label}</h2>
                  <p className="mt-1 text-sm text-zinc-600">{block.text}</p>
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

        {/* FAQ / technical specs */}
        <section className="bg-zinc-950">
          <div className="mx-auto max-w-6xl px-4 pb-16 sm:pb-20">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Технічні характеристики гальмівного стенду RRT7500S
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
