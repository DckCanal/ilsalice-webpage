import { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});

export default function LandingText() {
  const [index, setIndex] = useState(0);
  const texts = ["Ascolto", "Competenza", "Affidabilità"];

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => (index + 1) % texts.length),
      3000 // Cambia testo ogni 2 secondi
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mx-auto grow items-center flex">
      <h2
        className={`font-medium text-4xl ${lexend.className}\\
text-[#284800] dark:text-white text-shadow`}
      >
        <TextTransition springConfig={presets.gentle}>
          {texts[index]}
        </TextTransition>
      </h2>
    </div>
    // mx-auto
    // <div
    //   className={`font-medium text-4xl \\

    //         text-center ${lexend.className} \\
    //       text-[#284800] dark:text-white text-shadow`} // grow flex flex-col justify-center`}
    // >
    /* <h2
        className="landing-text m-0 p-0"
        style={{
          opacity: "0%",
        }}
      >
        Ascolto
      </h2>
      <h2
        className="landing-text m-0 p-0 -translate-y-full"
        style={{
          animationDelay: "3s",
          opacity: "0%",
        }}
      >
        Competenza
      </h2>
      <h2
        className="landing-text m-0 p-0 -translate-y-[200%]"
        style={{
          animationDelay: "6s",
          opacity: "0%",
        }}
      >
        Affidabilità
      </h2> 
       m-0 p-0 */

    /* </div> */
  );
}
