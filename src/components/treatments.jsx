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

function Card({ title, text, image, alt }) {
  return (
    <div>
      <div className="rounded-lg w-64  shadow-material mx-auto">
        <div className={`text-center ${roboto.className} `}>
          <h4
            className="text-xl text-white bg-gradient-to-br from-salice-100 to-salice-600 rounded-t-lg h-16 py-4"
            style={{ fontVariantCaps: "small-caps" }}
          >
            {title}
          </h4>
          <div
            className="relative w-full h-72 treatment-card" // bg-gradient-to-b from-white/0 to-white/100 via-white/90 dark:from-transparent dark:to-salice-900 dark:via-salice-900/90"
          >
            <Image src={image} alt={alt} fill={true} className="-z-10" placeholder="blur" />
            <p
              className={`${nunito.className} text-center px-5 pt-44 pb-3 h-72 font-medium dark:text-white dark:font-thin`}
            >
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(function Treatments(props, ref) {
  return (
    <section
      className="relative dark:bg-salice-900 bg-white -z-30 pb-10 pt-20"
      ref={ref}
    >
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
        className={`${lexend.className} text-3xl text-salice-900 dark:text-white font-semibold p-4 pb-3 text-shadow`}
      >
        I trattamenti
      </h2>
      <div className="border-2 border-salice-900 dark:border-white w-56 shadow-md" />

      {/* <div className="flex flex-row flex-wrap gap-6 justify-evenly bg-transparent mt-10 min-[320px]:mx-2"> */}
      <div className="grid place-content-center gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        <Card
          title="Viscerale"
          text="Rilascio dei visceri, degli organi e delle strutture legamentose e degli apparati di sospensione"
          image={viscerale.src}
          alt="Mani di Marco De Canal sulla pancia di una paziente per eseguire un trattamento viscerale dell'intestino tenue"
        />
        <Card
          title="Riabilitativo"
          text="Recupero della piena funzionalità a seguito di fratture, chirurgie o traumi"
          image={riabilitazione.src}
          alt="Esecuzione di un esercizio con elastici per il rinforzo del muscolo sovraspinato"
        />
        <Card
          title="Fasciale"
          text="Distensione delle strutture legamentose del corpo, per eliminare aderenze e fissazioni disfunzionali"
          image={fasciale.src}
          alt="Marco De Canal tratta la fascia lombare a una paziente"
        />
        <Card
          title="Drenante"
          text="Stimolo alla circolazione della linfa e al pieno recupero funzionale del sistema linfatico"
          image={massaggio.src}
          alt="Esecuzione di un massaggio drenante all'avambraccio"
        />
        <Card
          title="Cranio sacrale"
          text="Recupero della respirazione craniale e della circolazione del liquido cerebro spinale"
          image={cranio.src}
          alt="Marco De Canal tratta il cranio di una paziente, seduto alla testa del lettino"
        />
        <Card
          title="Posturale"
          text="Miglioramento della postura ed esercizi per il suo mantenimento"
          image={posturale.src}
          alt="Esecuzione di un test di extrarotazione sulla spalla"
        />
      </div>
    </section>
  );
});
