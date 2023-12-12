import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});

export default function LandingText() {
  return (
    <div
      className={`font-medium text-4xl \\
           mx-auto text-center ${lexend.className} \\
          text-[#284800] dark:text-white text-shadow grow flex flex-col justify-center`}
    >
      <h2
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
    </div>
  );
}
