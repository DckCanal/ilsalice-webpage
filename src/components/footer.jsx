import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
});

const robotoLight = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "100",
});

const robotoLightItalic = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "100",
  style: "italic",
});

export default function Footer(props) {
  return (
    <footer className="bg-[#636363] dark:bg-gray-900 py-4 text-white text-center">
      <h3 className={`text-base ${roboto.className}`}>il Salice</h3>
      <h4 className={`text-base ${robotoLightItalic.className}`}>
        massofisioterapia e osteopatia
      </h4>
      <h5 className={`mt-3 ${robotoLight.className}`}>
        Via Vittorio Veneto 15/A
      </h5>
      <h5 className={`${robotoLight.className}`}>
        San Giovanni in Marignano, 47842, RN
      </h5>
      <h5 className={`mt-3 ${robotoLight.className}`}>
        Marco De Canal 338 533 0241
      </h5>
      <h6 className={`${robotoLight.className}`}>
        P. Iva 04370000400
      </h6>
      <h5 className={`mt-2 ${robotoLight.className}`}>
        Giacomo Muccioli 339 318 2797
      </h5>
      <h6 className={`${robotoLight.className}`}>
        P. Iva 04119390401
      </h6>
    </footer>
  );
}
