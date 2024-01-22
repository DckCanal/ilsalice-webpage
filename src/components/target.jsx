import { forwardRef } from "react";
import { Lexend, Roboto, Nunito } from "next/font/google";
import Image from "next/image";

import lombare from "../../images/lombare.webp";
import corsa from "../../images/corsa.webp";
import bambino from "../../images/bambino.webp";
import ansia from "../../images/ansia.webp";
import visceri from "../../images/visceri.webp";
import anziano from "../../images/anziano.webp";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

const Card = ({ title, text, children }) => (
  <div>
    <div className="max-w-[300px] h-[420px] flex flex-col bg-white dark:bg-salice-900  dark:text-white shadow-material rounded-t-xl mx-auto">
      {children}
      <div className="p-2 grow flex flex-col justify-around">
        <h3
          style={{ fontVariantCaps: "small-caps" }}
          className={`${roboto.className} text-left text-xl mt-5 mb-2`}
        >
          {title}
        </h3>
        <p className={`text-left ${nunito.className} text-sm dark:font-thin`}>
          {text}
        </p>
      </div>
    </div>
  </div>
);
export default forwardRef(function Target(props, ref) {
  return (
    <section className="pt-20 pb-10 target-bg" ref={ref}>
      <h2
        className={`${lexend.className} text-3xl text-salice-900 dark:text-white font-semibold p-4 pb-3 text-shadow`}
      >
        Cosa trattiamo
      </h2>
      <div className="border-2 border-salice-900 dark:border-white w-64 shadow-md" />
      <div className="grid place-content-center gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        <Card
          title="Dolori muscolo-scheletrici"
          text="Il mal di schiena, i dolori cervicali o i problemi articolari sono una causa comune di disagio. Se vengono trascurati per troppo tempo possono anche diventare sintomi invalidanti. L'osteopatia può aiutare ad alleviare questi sintomi e a ristabilire l'equilibrio del corpo."
        >
          <Image
            width={300}
            height={150}
            alt="Quaderno degli appunti con disegno di una colonna vertebrale"
            className="rounded-t-xl"
            //src={lombare.src}
            src={lombare}
            placeholder="blur"
          />
        </Card>
        <Card
          title="Problemi viscerali"
          text="La sfera viscerale viene tenuta in grande considerazione dall’osteopatia. Che si tratti di un blocco del diaframma, di difficoltà nella digestione, di acidità di stomaco o di un fegato in sovraccarico, il trattamento viscerale osteopatico può contribuire a risolvere il problema."
        >
          <Image
            width={300}
            height={150}
            src={visceri}
            className="rounded-t-xl"
            placeholder="blur"
            alt="Una donna che si tocca la pancia"
          />
        </Card>
        <Card
          title="Sportivi"
          text="L'atleta agonista richiede al proprio corpo un grado di performance più elevato del normale. Flessibilità, forza, velocità, mobilità articolare e tempi di recupero veloci sono alcuni dei parametri che è possibile migliorare con il trattamento orientato alla disciplina sportiva."
        >
          <Image
            width={300}
            height={150}
            src={corsa}
            className="rounded-t-xl"
            placeholder="blur"
            alt="Un corridore di staffetta sui blocchi di partenza"
          />
        </Card>

        <Card
          title="Anziani"
          text="Con il progredire dell’età possono manifestarsi sempre più spesso dei dolori o delle riduzioni nella mobilità articolare che, se non trattati, rischiano di avere un impatto fortemente negativo nella vita di tutti i giorni. Il trattamento manuale può sicuramente aiutarti a migliorare la qualità di vita."
        >
          <Image
            width={300}
            height={150}
            src={anziano}
            className="rounded-t-xl"
            placeholder="blur"
            alt="Un anziano visto da dietro con un tramonto sullo sfondo"
          />
        </Card>
        <Card
          title="Disturbi da ansia e stress"
          text="I ritmi e le preoccupazioni della società attuale creano spesso situazioni prolungate di ansia e stress, che si manifestano con sintomi più o meno gravi: mal di testa, gastriti, difficoltà a respirare o a concentrarsi... Il trattamento manuale osteopatico aiuta il corpo a ridurre il livello di stress mentre agisce anche direttamente sui sintomi più fastidiosi dell’ansia."
        >
          <Image
            width={300}
            height={150}
            src={ansia}
            className="rounded-t-xl"
            placeholder="blur"
            alt="Una studente di fronte ad un computer con le mani nei capelli"
          />
        </Card>
        <Card
          title="Età dello sviluppo"
          text="È fondamentale prestare attenzione ai segnali che i bambini ci danno riguardo ai loro problemi muscolo-scheletrici, poiché la postura durante lo sviluppo influisce sulla struttura definitiva del corpo. Un atteggiamento posturale errato, se non corretto in tempo, può rendersi definitivo al termine della crescita."
        >
          <Image
            width={300}
            height={150}
            src={bambino}
            className="rounded-t-xl"
            placeholder="blur"
            alt="Un bambino corre in un campo da gioco."
          />
        </Card>
      </div>
    </section>
  );
});
