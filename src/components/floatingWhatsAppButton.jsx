import WAIconWhite from "../../vendors/logo/WA-white.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function WhatsAppFAB({ refToObserve }) {
  const [isVisible, setIsVisible] = useState(false);
  //const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(!entry.isIntersecting);
        });
      },
      { threshold: 0.5 } // Configura la percentuale di visibilità per il callback
    );

    if (refToObserve.current) {
      observer.observe(refToObserve.current);
    }

    return () => {
      if (refToObserve.current) {
        observer.unobserve(refToObserve.current);
      }
    };
  }, []);
  return (
    <a
      href="https://wa.me/3385330241"
      target="_blank"
      aria-label="Apri chat su WhatsApp"
      className={`fixed bottom-4 right-4 z-50 bg-gradient-to-br from-salice-100 to-salice-500 rounded-full shadow-material default-hidden ${
        isVisible ? "visible" : ""
      }`}
    >
      <Image
        src={WAIconWhite}
        alt="Logo WhatsApp"
        height={40}
        width={40}
        className="h-[40px] w-[40px] m-[15px]"
      />
    </a>
  );
}
