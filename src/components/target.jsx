import { forwardRef } from "react";
import { Lexend, Roboto, Nunito } from "next/font/google";
import Image from "next/image";

import lombare from "../../images/lombare.jpeg";
import corsa from "../../images/corsa.jpeg";
import bambino from "../../images/bambino.jpeg";

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

const LeftCard = ({ title, text, children }) => (
  <div className="w-[467px] p-2 bg-white shadow-md my-10 -translate-x-28">
    <h3
      style={{ fontVariantCaps: "small-caps" }}
      className={`${roboto.className} text-right text-xl`}
    >
      {title}
    </h3>
    <div className="flex flex-row gap-3 mt-2">
      <div className="">{children}</div>
      <p className={`text-right ${nunito.className} text-sm w-[184px]`}>
        {text}
      </p>
    </div>
  </div>
);

const Card = ({ title, text, children }) => (
  <div className="w-[300px] flex flex-col bg-white shadow-md my-10 rounded-t-xl">
    {children}
    <div className="p-2">
      <h3
        style={{ fontVariantCaps: "small-caps" }}
        className={`${roboto.className} text-left text-xl mt-5 mb-2`}
      >
        {title}
      </h3>
      <p className={`text-left ${nunito.className} text-sm`}>{text}</p>
    </div>
  </div>
);
export default forwardRef(function Target(props, ref) {
  return (
    <section
      style={{
        backgroundColor: "rgb(157,168,134)",
        background:
          "linear-gradient(rgba(157,168,134,1) 0%, rgba(223,228,214,1) 49%, rgba(157,168,134,1) 100%)",
      }}
      className="pt-20"
      ref={ref}
    >
      <h2
        className={`${lexend.className} text-3xl text-white font-semibold p-4 pb-3 text-shadow`}
      >
        Cosa trattiamo
      </h2>
      <div className="border-2 border-white w-64 shadow-md" />
      <div className="flex flex-row flex-wrap justify-evenly gap-6 min-[320px]:mx-2">
        <Card
          title="Dolori muscolo-scheletrici"
          text="Il mal di schiena, i dolori cervicali o i problemi articolari sono una causa comune di disagio. L'osteopatia può aiutare ad alleviare questi sintomi e a ristabilire l'equilibrio del corpo."
        >
          <Image
            width={300}
            height={150}
            //className="rounded-[117px]"
            className="rounded-t-xl"
            src={lombare.src}

            //placeholder="blur"
          />
        </Card>
        <Card
          title="Problemi viscerali"
          text="La sfera viscerale viene tenuta in grande considerazione dall’osteopatia. Che si tratti di un blocco del diaframma, di difficoltà nella digestione, di acidità di stomaco o di un fegato in sovraccarico, il trattamento viscerale osteopatico può contribuire a risolvere il problema."
        >
          {/* <Image width={300} height={150} src={anziano.src}            className="rounded-t-xl"
 /> */}
        </Card>
        <Card
          title="Sportivi"
          text="L'atleta agonista richiede al proprio corpo un grado di performance più elevato del normale. Flessibilità, forza, velocità, mobilità articolare e tempi di recupero veloci sono alcuni dei parametri che è possibile migliorare con il trattamento orientato alla disciplina sportiva."
        >
          <Image
            width={300}
            height={150}
            src={corsa.src}
            className="rounded-t-xl"
          />
        </Card>

        <Card
          title="Anziani"
          text="Con il progredire dell’età possono manifestarsi sempre più spesso dei dolori o delle riduzioni nella mobilità articolare che, se non trattati, rischiano di avere un impatto fortemente negativo nella vita di tutti i giorni. Il trattamento manuale può sicuramente aiutarti a migliorare la qualità di vita."
        >
          {/* <Image width={300} height={150} src={anziano.src}             className="rounded-t-xl"
/> */}
        </Card>
        <Card
          title="Disturbi da ansia e stress"
          text="I ritmi e le preoccupazioni della società attuale creano spesso situazioni prolungate di ansia e stress, che si manifestano con sintomi più o meno gravi: mal di testa, gastriti, difficoltà a respirare o a concentrarsi... Il trattamento manuale osteopatico aiuta il corpo a ridurre il livello di stress mentre agisce anche direttamente sui sintomi più fastidiosi dell’ansia."
        >
          {/* <Image width={300} height={150} src={anziano.src}            className="rounded-t-xl"
 /> */}
        </Card>
        <Card
          title="Età dello sviluppo"
          text="È fondamentale prestare attenzione ai segnali che i bambini ci danno riguardo ai loro problemi muscolo-scheletrici, poiché la postura durante lo sviluppo influisce sulla struttura definitiva del corpo. Un atteggiamento posturale errato, se non corretto in tempo, può rendersi definitivo al termine della crescita."
        >
          <Image
            width={300}
            height={150}
            src={bambino.src}
            className="rounded-t-xl"
          />
        </Card>
      </div>
    </section>
  );
});
