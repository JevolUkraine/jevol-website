import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/wireframe/Header";
import { Footer } from "@/components/wireframe/Footer";
import { ImgBox } from "@/components/wireframe/Box";
import { ContactForm } from "@/components/ContactForm";
import { HeroGallery } from "@/components/HeroGallery";
import { categories } from "@/lib/categories";
import { storageUrl } from "@/lib/storage";

const HOME_TITLE =
  "Обладнання для техогляду в Україні — гальмівні стенди, димоміри, газоаналізатори | JEVOL";
const HOME_DESCRIPTION =
  "Офіційний представник JEVOL в Україні: гальмівні стенди, газоаналізатори, димоміри, реглоскопи для техогляду СТО. Монтаж, навчання, сервіс по всій Україні.";

export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  alternates: {
    canonical: "https://jevol.com.ua/",
  },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: "https://jevol.com.ua/",
    type: "website",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://jevol.com.ua/#organization",
      name: "JEVOL",
      url: "https://jevol.com.ua/",
      email: "info.jevol@gmail.com",
      description: HOME_DESCRIPTION,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+380-50-470-9561",
          contactType: "sales",
          areaServed: "UA",
          availableLanguage: ["uk", "ru"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://jevol.com.ua/#website",
      url: "https://jevol.com.ua/",
      name: "JEVOL",
      inLanguage: "uk",
      publisher: { "@id": "https://jevol.com.ua/#organization" },
    },
  ],
};

const trustItems = [
  {
    title: "Всесвітньо відомий бренд JEVOL",
    text: "— міжнародний виробник обладнання для технічного контролю транспортних засобів, добре знайомий власникам випробувальних лабораторій та контролюючим органам по всьому світу. Компанія є єдиним офіційним та ексклюзивним представником Shanghai JEVOL в Україні.",
  },
  {
    title: "Більше 100 інсталяцій по всій Україні.",
    text: "За роки роботи на українському ринку ми укомплектували понад 100 акредитованих лабораторій технічного контролю транспортних засобів у всіх регіонах країни.",
  },
  {
    title: "Досвід, монтаж та підтримка.",
    text: "Маємо багаторічний досвід у постачанні та обслуговуванні обладнання для техогляду. Здійснюємо професійний монтаж та налаштування по всій Україні, проводимо навчання персоналу лабораторії замовника. Комплектуючі завжди є на складі в Україні — швидка заміна без очікування з-за кордону.",
  },
  {
    title: "Призначення обладнання.",
    text: "Обладнання JEVOL призначене для випробування легкових та вантажних транспортних засобів під час проведення обов'язкового державного технічного контролю в Україні. Відповідає вимогам ДСТУ 3649, ДСТУ 3333 та міжнародним стандартам ISO/IEC 17025:2019.",
  },
  {
    title: "Єдиний протокол випробувань.",
    text: "Програмне забезпечення JEVOL дозволяє одночасно керувати всіма приладами випробувальної лінії — газоаналізатором, димоміром, реглоскопом та тахометром. Всі отримані показники автоматично зберігаються в базі даних протоколів на ПК та об'єднуються в єдиний протокол результатів технічного контролю транспортного засобу.",
  },
];

const brakeStandFeatures = [
  {
    title: "Повний комплекс вимірювань гальмівної системи",
    text: "Стенд виконує всі необхідні вимірювання для протоколу технічного контролю: сила гальмування, ефективність гальм, дисбаланс гальмівних зусиль, коефіцієнт тертя, навантаження на вісь та овальність гальмівних барабанів — повна картина стану гальмівної системи за одне випробування.",
  },
  {
    title: "Встановлення без оглядової ями",
    text: "Пересувні гальмівні стенди JEVOL не потребують монтажу в оглядову яму — значна економія на підготовці приміщення та будівельних роботах. Встановлення безпосередньо на рівній підлозі лабораторії. За бажанням та для зручності використання також можуть бути вбудовані в підлогу. (Великий попит)",
  },
  {
    title: "Довговічні корундові ролики",
    text: "Стенд оснащено корундовими роликами з гарантованим терміном служби понад 200 000 випробувальних циклів — мінімальні витрати на обслуговування та заміну протягом багатьох років експлуатації.",
  },
  {
    title: "Вбудована функція зважування",
    text: "Вимірювання вагового навантаження на кожну вісь та кожне колесо окремо — додатковий параметр для повноцінного протоколу технічного контролю без використання окремих ваг.",
  },
  {
    title: "Динамометр педалі гальма",
    text: "Вбудований динамометр педалі гальма вимірює зусилля натиску та час спрацювання гальмівної системи — обов'язковий параметр для протоколу техогляду відповідно до ДСТУ 3649.",
  },
  {
    title: "Тестування повнопривідних автомобілів 4WD",
    text: "Стенд підтримує випробування повнопривідних транспортних засобів — охоплює весь спектр сучасних автомобілів що проходять технічний контроль.",
  },
  {
    title: "Реверсивне тестування",
    text: "Транспортний засіб може заїжджати на стенд з обох боків — реверсивний режим роботи економить площу лабораторії та прискорює процес випробування.",
  },
  {
    title: "Повноцінна випробувальна лінія",
    text: "У поєднанні з детектором люфтів, стендом перевірки підвіски та стендом бокового відхилення гальмівний стенд JEVOL утворює повноцінну випробувальну лінію технічного контролю — єдине програмне забезпечення, єдиний протокол результатів.",
  },
];

const playDetectorFeatures = [
  {
    title: "Універсальна платформа для будь-якої колісної бази",
    text: "Надширока інспекційна платформа детектора люфтів підходить для транспортних засобів із різною колісною базою — від компактних легкових автомобілів до великогабаритних вантажних транспортних засобів. Один прилад для всього парку транспорту лабораторії.",
  },
  {
    title: "Бездротове керування",
    text: "Опційний бездротовий пульт керування дозволяє оператору лабораторії вільно переміщатися під час діагностики — зручний огляд ходової частини з будь-якої точки без прив'язки до кабелю. (Звичайний кабельний пульт керування постачається у базовій комплектації).",
  },
  {
    title: "Автоматичне повернення в початкове положення",
    text: "Після завершення кожного випробування платформа автоматично повертається в центральне положення — оператор не витрачає час на ручне налаштування між перевірками транспортних засобів. Значне прискорення процесу техогляду.",
  },
  {
    title: "Захист від перегріву та економія енергії",
    text: "Якщо прилад не використовується понад 1 хвилину — двигун автоматично зупиняється. Це запобігає перегріву масла гідравлічної системи та знижує споживання електроенергії при інтенсивній щоденній роботі лабораторії.",
  },
  {
    title: "Безперервний круговий рух платформи",
    text: "Завдяки функції кругового руху платформа переміщується вперед і назад безперервно без зупинок — рівномірне та постійне навантаження на елементи підвіски для максимально точного виявлення люфтів та дефектів.",
  },
];

const diagnosticsFeatures = [
  {
    title: "Димомір JVS-600 — вимірювання димності дизельних двигунів",
    text: "Призначений для точного вимірювання димності відпрацьованих газів дизельних та газодизельних автомобільних двигунів. Вимірює два ключових показники якості вихлопних газів — натуральний показник послаблення світлового потоку (К) та коефіцієнт послаблення світлового потоку (N) — відповідно до вимог ДСТУ 4276:2004.",
  },
  {
    title: "Газоаналізатор JVE-501 — 5-канальний аналіз вихлопних газів",
    text: "Сучасний 5-канальний газоаналізатор для вимірювання складу відпрацьованих газів транспортних засобів з бензиновими, газовими та комбінованими двигунами. Одночасно вимірює п'ять показників — оксид вуглецю (СО), вуглеводні (СН), діоксид вуглецю (СО₂), кисень (О₂) та оксид азоту (NO) — повний аналіз за одне вимірювання.",
  },
  {
    title: "Цифровий тахометр та датчик температури мастила",
    text: "Додаткові прилади для розширеної діагностики — вимірювання обертів двигуна та температури мастила під час проведення технічного контролю. Всі показники автоматично включаються до єдиного протоколу випробувань.",
  },
  {
    title: "Реглоскоп JVH-M100 — контроль та налаштування світла фар",
    text: "Високотехнологічний прилад з лазерним наведенням та фокусуванням для точного контролю та налаштування світлових приладів транспортних засобів відповідно до ДСТУ 3649:2010. Вмонтований LCD екран відображає покрокові вказівки щодо налаштування геометричних параметрів світлотехніки. Результати тестування автоматично передаються до програмного забезпечення на комп'ютер.",
  },
  {
    title: "Пересувна платформа для зберігання та використання приладів",
    text: "Зручна мобільна платформа для компактного зберігання та комфортного переміщення всього комплексу діагностичних приладів у межах лабораторії — економія простору та швидкий доступ до обладнання.",
  },
  {
    title: "Єдина система — єдиний протокол",
    text: "Всі прилади комплексу JEVOL працюють в інтегрованій програмній системі. Газоаналізатор, димомір, реглоскоп та тахометр одночасно передають дані до єдиної бази — автоматичне формування повного протоколу технічного контролю транспортного засобу без ручного введення результатів.",
  },
];

const HERO_BUCKET = "images";
const HERO_FOLDER = "hero-gallery";
const heroImage = (path: string) => storageUrl(HERO_BUCKET, `${HERO_FOLDER}/${path}`);

const heroSlides = [
  { path: "AutoTechService_7.webp", alt: "Стенд JEVOL на виставці «Все для техогляду»", width: 4032, height: 3024 },
  { path: "RRT-7500M.webp", alt: "Тестування вантажівки Mercedes Actros на гальмівному стенді JEVOL", width: 817, height: 647 },
  { path: "AutoTechService_3.webp", alt: "Стенд JEVOL на виставці «Все для техогляду 2020»", width: 5333, height: 3000 },
  { path: "5 (1).webp", alt: "Тестування вантажівки на пересувному гальмівному стенді JEVOL", width: 4032, height: 3024 },
  { path: "exhibition.webp", alt: "Відвідувачі на стенді JEVOL, виставка «Все для техогляду 2021»", width: 960, height: 712 },
  { path: "10.webp", alt: "Гальмівний стенд JEVOL, встановлений у лабораторії техогляду", width: 4032, height: 3024 },
  { path: "AutoTechService_5 (1).webp", alt: "Стенд JEVOL на виставці «Все для техогляду 2022»", width: 4032, height: 3024 },
  { path: "3434.webp", alt: "Монтаж гальмівного стенду JEVOL в оглядовій ямі", width: 4032, height: 3024 },
  { path: "2.webp", alt: "Встановлення пересувного гальмівного стенду JEVOL", width: 1348, height: 1011 },
  { path: "AutoTechServise_6.webp", alt: "Мобільний гальмівний стенд JEVOL на виставці «Все для техогляду 2021»", width: 4032, height: 3024 },
  { path: "IMG_7891.webp", alt: "Лінія технічного контролю з диспетчерською кабіною JEVOL", width: 4032, height: 3024 },
  { path: "5.webp", alt: "Оглядова яма для гальмівного стенду JEVOL", width: 4032, height: 3024 },
  { path: "foto3.webp", alt: "Гальмівний стенд JEVOL, вигляд зверху", width: 533, height: 400 },
].map((s) => ({ src: heroImage(s.path), alt: s.alt, width: s.width, height: s.height }));

// Curated for the homepage display: 5 (1).webp, 5.webp, exhibition.webp,
// foto3.webp, IMG_7891.webp — indices into heroSlides above.
const heroFeaturedIndices = [3, 11, 4, 12, 10];

function WhatsAppCta() {
  return (
    <a
      href="https://wa.me/380504709561"
      className="inline-flex h-11 w-fit items-center justify-center border-2 border-dashed border-gray-400 bg-gray-200 px-6 text-xs font-medium uppercase text-gray-600"
    >
      Написати нам у WhatsApp
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col items-start gap-3">
            <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
              Сучасне високоточне обладнання для діагностики транспортних
              засобів
            </h1>
            <p className="text-lg text-gray-600">
              Гальмівні стенди, детектор люфтів, газоаналізатор, димомір,
              реглоскоп та додаткове обладнання.
            </p>
            <p className="text-gray-500">
              Обладнання для техогляду в Україні — офіційний представник
              JEVOL.
            </p>
          </div>
          <div className="mt-6">
            <HeroGallery photos={heroSlides} featuredIndices={heroFeaturedIndices} />
          </div>
        </section>

        {/* Why JEVOL trust strip */}
        <section className="mx-auto max-w-6xl px-4 py-10">
          <ImgBox
            label="AutoTechService_5_1.webp — JEVOL trade-show booth"
            className="h-56 w-full sm:h-72"
          />
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {trustItems.map((item) => (
              <div key={item.title} className="flex flex-col gap-1">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Category grid */}
        <section id="categories" className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">
            Прилади
          </h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="flex flex-col gap-3"
              >
                <ImgBox label="Image" className="h-40 w-full" />
                <span className="text-sm font-medium text-gray-700">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Brake stands */}
        <section className="mx-auto max-w-6xl px-4 py-10">
          <ImgBox
            label="IMG_1612.webp — mobile brake stand testing a car"
            className="h-56 w-full sm:h-72"
          />
          <h2 className="mt-6 text-2xl font-semibold text-gray-900">
            Універсальні гальмівні стенди JEVOL — стаціонарні та пересувні
            моделі для техогляду.
          </h2>
          <p className="mt-2 text-gray-600">
            Гальмівні стенди JEVOL забезпечують повний комплекс вимірювань під
            час проведення обов&apos;язкового технічного контролю
            транспортних засобів в Україні.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {brakeStandFeatures.map((item) => (
              <div key={item.title} className="flex flex-col gap-1">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <WhatsAppCta />
          </div>
        </section>

        {/* Play detector */}
        <section className="mx-auto max-w-6xl px-4 py-10">
          <ImgBox
            label="IMG_4858.webp — pit-mounted play-detector platform"
            className="h-56 w-full sm:h-72"
          />
          <h2 className="mt-6 text-2xl font-semibold text-gray-900">
            Детектор люфтів ходової частини JEVOL — діагностика підвіски для
            техогляду
          </h2>
          <p className="mt-2 text-gray-600">
            Детектор люфтів JEVOL (Play Detector) забезпечує точну та швидку
            діагностику ходової частини транспортних засобів під час
            проведення обов&apos;язкового технічного контролю в Україні.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {playDetectorFeatures.map((item) => (
              <div key={item.title} className="flex flex-col gap-1">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <WhatsAppCta />
          </div>
        </section>

        {/* Diagnostics combo */}
        <section className="mx-auto max-w-6xl px-4 py-10">
          <ImgBox
            label="fotoStacionar1.jpeg — pit-mounted test line"
            className="h-56 w-full sm:h-72"
          />
          <h2 className="mt-6 text-2xl font-semibold text-gray-900">
            Комплекс діагностичних приладів JEVOL — аналіз вихлопних газів та
            контроль світла фар.
          </h2>
          <p className="mt-2 text-gray-600">
            Повний комплекс приладів JEVOL для діагностики транспортних
            засобів під час обов&apos;язкового технічного контролю в Україні.
            Всі прилади працюють в єдиній системі та формують єдиний протокол
            випробувань.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {diagnosticsFeatures.map((item) => (
              <div key={item.title} className="flex flex-col gap-1">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <WhatsAppCta />
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
