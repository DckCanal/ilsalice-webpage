import Image from "next/image";
import StudioImg from "../../images/Studio.webp";
export default function BackgroundImage() {
  return (
    <Image
      alt="Immagine di sfondo"
      src={StudioImg}
      placeholder="blur"
      className="fixed inset-0 -z-10"
      priority
    />
  );
}
