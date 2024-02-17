import { useState, useEffect } from "react";

import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});

export default function LandingText() {
  const [text, setText] = useState("Ascolto");
  useEffect(() => {
    const timer = setInterval(() => {
      setText((text) =>
        text === "Ascolto"
          ? "Competenza"
          : text === "Competenza"
          ? "Affidabilità"
          : "Ascolto"
      );
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div
      className={`font-medium text-4xl \\
           mx-auto text-center ${lexend.className} \\
          text-[#284800] dark:text-white text-shadow grow flex flex-col justify-around`}
    >
      <h2
        className="overflow-hidden"
        style={{
          animation: "text-animation 4s ease-in-out infinite",
        }}
      >
        {text}
      </h2>
    </div>
  );
}
