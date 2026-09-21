import Image from "next/image";
import { storageUrl } from "@/lib/storage";
import { CONTACT_PHOTO_PATH } from "@/lib/images";

export function ContactPhoto({
  className = "h-64 w-full sm:h-full",
}: {
  className?: string;
}) {
  if (!CONTACT_PHOTO_PATH) return null;

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <Image
        src={storageUrl("images", CONTACT_PHOTO_PATH)}
        alt="JEVOL — виробництво"
        fill
        className="object-cover"
      />
    </div>
  );
}
