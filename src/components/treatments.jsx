import { forwardRef } from "react";
import Image from "next/image";

import cranio from "../../images/cranio.jpg";
import viscerale from "../../images/viscerale.jpg";
import fasciale from "../../images/fasciale.jpg";
import riabilitazione from "../../images/riabilitazione.jpg";
import massaggio from "../../images/massaggio.jpg";
import posturale from "../../images/posturale.jpg";

import treatmentsBg from "../../images/gallery/IMG_1667.jpeg";

import { Roboto, Nunito, Lexend } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});

function Card({ title, text, image }) {
  return (
    <div className="rounded-lg w-64  shadow-material">
      <div className={`text-center ${roboto.className} `}>
        <h4
          className="text-xl text-white bg-gradient-to-br from-salice-100 to-salice-600 rounded-t-lg h-16 py-4"
          style={{ fontVariantCaps: "small-caps" }}
        >
          {title}
        </h4>
        <div
          className="relative w-full h-72"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 60%)",
          }}
        >
          <Image src={image} alt="" fill={true} className="-z-10" />
          <p
            className={`${nunito.className} text-center px-5 pt-44 pb-3 h-72 font-medium`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(function Treatments(props, ref) {
  return (
    <section className="relative bg-white -z-30 pb-10 pt-20" ref={ref}>
      <Image
        src={treatmentsBg}
        alt="Sfondo per la sezione dei trattamenti"
        placeholder="blur"
        fill={true}
        style={{
          objectFit: "cover",
        }}
        className="relative opacity-40 blur-[3px] -z-20"
      />
      <h2
        className={`${lexend.className} text-3xl text-white font-semibold p-4 pb-3 text-shadow`}
      >
        I trattamenti
      </h2>
      <div className="border-2 border-white w-56 shadow-md" />

      <div className="flex flex-row flex-wrap gap-6 justify-evenly bg-transparent mt-10 min-[320px]:mx-2">
        <Card
          title="Viscerale"
          text="Rilascio dei visceri, degli organi e delle strutture legamentose e degli apparati di sospensione"
          image={viscerale.src}
        />
        <Card
          title="Riabilitativo"
          text="Recupero della piena funzionalità a seguito di fratture, chirurgie o traumi"
          image={riabilitazione.src}
        />
        <Card
          title="Fasciale"
          text="Distensione delle strutture legamentose del corpo, per eliminare aderenze e fissazioni disfunzionali"
          image={fasciale.src}
        />
        <Card
          title="Drenante"
          text="Stimolo alla circolazione della linfa e al pieno recupero funzionale del sistema linfatico"
          image={massaggio.src}
        />
        <Card
          title="Cranio sacrale"
          text="Recupero della respirazione craniale e della circolazione del liquido cerebro spinale"
          image={cranio.src}
        />
        <Card
          title="Posturale"
          text="Miglioramento della postura ed esercizi per il suo mantenimento"
          image={posturale.src}
        />
      </div>
    </section>
  );
});
