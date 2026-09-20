import { ContactForm } from "@/components/ContactForm";
import { ContactPhoto } from "@/components/ContactPhoto";
import { CONTACT_PHOTO_PATH } from "@/lib/images";

export function ContactSection() {
  return (
    <section className="bg-white">
      <div
        className={`mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:py-20 ${
          CONTACT_PHOTO_PATH ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
        }`}
      >
        <ContactPhoto />
        <div className={CONTACT_PHOTO_PATH ? "" : "mx-auto w-full max-w-xl"}>
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
  );
}
