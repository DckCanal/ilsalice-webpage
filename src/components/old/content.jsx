import Image from "next/image";

import marcoProfile from "../../../images/marco-profile.webp";
import giacomoProfile from "../../../images/giacomo-profile.webp";
import insieme from "../../../images/insieme.jpg";
import attesa from "../../../images/attesa.JPG";
import articolazioni from "../../../images/articolazioni.jpg";
import marcoScrivania from "../../../images/IMG_1621.jpeg";

import whatsappLogo from "../../../vendors/logo/WhatsApp.png";
import telegramLogo from "../../../vendors/logo/Telegram.svg";

import { PhoneIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

import { Section, SectionTitle, SectionSubtitle } from "./section";
import { Highlight } from "./text";

import {
  TransitionLeft,
  TransitionAbove,
  ElementWithTransition,
} from "./transitions";

export function ChiSiamo() {
  return (
    <Section
      id="chi-siamo"
      className="bg-[#9da886] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6"
    >
      {/* <SectionTitle>Chi siamo</SectionTitle> */}
      {/* <div
        className="border-2 border-black bg-no-repeat bg-blend-multiply bg-right bg-contain w-[300px]"
        style={{
          background:
            "linear-gradient(90deg, rgba(157,168,134,1) 10%, rgba(2,0,36,0.7277532839307599) 100%)",
          backgroundImage: `url(${attesa.src})`,
        }}
      >
        <p className="my-4">
          Ci chiamiamo Marco e Giacomo e ti diamo il benvenuto nel nostro centro
          - <i>il Salice</i>
          .<br /> Siamo entrambi massofisioterapisti specializzati nel
          trattamento osteopatico, in particolare nelle tecniche fasciali,
          viscerali e nell'approccio cranio sacrale. <br />
        </p>
      </div> */}
      <div className="grow">
        <div className="my-4 text-center text-white">
          <ElementWithTransition>
            <div
              className="inline-block shadow-lg lg:translate-x-32 p-3 mt-12 -skew-y-6 rounded-lg"
              style={{
                background:
                  // "linear-gradient(90deg, rgba(40, 181, 134, 1) 0%, hsla(79, 16%, 59%, 1) 100%)",
                  // "linear-gradient(90deg, #48A0DB 0%, #86A786 100%)",
                  "linear-gradient(90deg, hsla(116, 50%, 48%, 0.6) 0%, hsla(101, 46%, 8%, 0.6) 100%)",
              }}
            >
              <h3 className="font-semibold text-2xl md:text-4xl uppercase skew-y-6 rounded-lg">
                Armonia
              </h3>
            </div>
            <h4 className="font-normal text-lg md:text-xl lg:translate-x-32 mt-4 w-fit mx-auto">
              tra tutte le parti del tuo corpo
            </h4>
          </ElementWithTransition>
          <ElementWithTransition>
            <div
              className="inline-block shadow-xl p-3 mt-12 -skew-y-6 rounded-lg"
              style={{
                background: "linear-gradient(90deg, #099773 0%, #43b692 100%)",
              }}
            >
              <h3 className="font-semibold text-2xl md:text-4xl uppercase skew-y-6 rounded-lg">
                Fiducia
                <br />
                reciproca
              </h3>
            </div>
            <h4 className="font-normal text-lg md:text-xl mt-4">
              tra voi e noi
            </h4>
          </ElementWithTransition>
          <ElementWithTransition>
            <div
              className="inline-block shadow-lg lg:-translate-x-32 p-3 mt-12 -skew-y-6 rounded-lg"
              style={{
                background:
                  "linear-gradient(90deg, #5e6e49 0%, hsla(79, 16%, 59%, 1) 100%)",
              }}
            >
              <h3 className="font-semibold text-2xl md:text-4xl uppercase skew-y-6 rounded-lg">
                Ascolto
              </h3>
            </div>
            <h4 className="font-normal text-lg lg:-translate-x-32 md:text-xl mt-4 w-fit mx-auto">
              dei tuoi sintomi
            </h4>
          </ElementWithTransition>
        </div>
        <ElementWithTransition>
          <p className="text-center mt-20 font-normal text-xl md:text-2xl text-white max-w-xl mx-auto">
            Crediamo che siano queste le chiavi per raggiungere insieme la tua
            guarigione!
          </p>
        </ElementWithTransition>
      </div>
      <Image
        src={marcoScrivania}
        width={400}
        alt="Marco seduto alla scrivania"
        placeholder="blur"
        className="max-md:w-[250px] rounded-3xl shadow-lg"
      />

      {/* <p className="my-4">
        Crediamo che per raggiungere e mantenere uno stato di salute ottimale
        sia necessario che tutte le componenti di una persona siano tra loro in
        armonia. Questo è il principio che ci guida quando visitiamo i nostri
        pazienti!
      </p> */}
    </Section>
  );
}

export function Perche() {
  return (
    <Section id="perche">
      <SectionTitle>Perché dovrei averne bisogno</SectionTitle>
      <h3>Lombalgia</h3>
      <p>
        La lombalgia è un disturbo piuttosto comune che può causare dolore e
        limitare la tua mobilità nella parte bassa della schiena. La buona
        notizia è che l'osteopatia può aiutare il tuo corpo a recuperare
        l'equilibrio tra le sue parti, alleviando il dolore e migliorando la tua
        funzionalità!
      </p>
      <p>
        Inoltre, il trattamento osteopatico lombare migliora la circolazione a
        livello della sfera viscerale e rafforzare il tuo sistema immunitario,
        consentendoti di prevenire ulteriori infiammazioni.
      </p>
      <p>
        Se soffri di lombalgia in modo ricorrente, è possibile che tu possa
        beneficiare di trattamenti osteopatici periodici durante l'anno per
        evitare ricadute fastidiose.
      </p>
      <p>
        Non esitare a prendere un appuntamento per discutere se questo tipo di
        trattamento possa essere utile nel tuo caso specifico!
      </p>
      <h3>Cervicalgia</h3>
      <p>
        La cervicalgia è un dolore localizzato nella zona del collo e delle
        spalle, che può essere causato da vari fattori come lo stress, le
        posture scorrette o i traumi. Tale dolore può essere accompagnato da
        sintomi fastidiosi, come mal di testa, vertigini o formicolii alle
        braccia. Tuttavia, esiste un rimedio efficace per alleviare la
        cervicalgia: il trattamento osteopatico.
      </p>
      <p>
        L'osteopatia si occupa di ristabilire l'equilibrio del corpo attraverso
        manipolazioni precise e delicate. Il trattamento osteopatico per la
        cervicalgia agisce sulle cause del dolore, migliorando la mobilità delle
        vertebre cervicali e rilassando i muscoli contratti. Ciò consente di
        ottenere un sollievo immediato e duraturo, oltre a prevenire eventuali
        recidive. Perciò, se soffri di cervicalgia, prova a risolverla il
        trattamento osteopatico. In tal modo, potrai sentirti meglio e godere
        della vita senza fastidiosi dolori al collo!
      </p>
      <h3>Mal di testa</h3>
      <p>
        Se soffri di mal di testa, potresti trovare sollievo grazie
        all'osteopatia. Il mal di testa può essere un problema davvero
        fastidioso, ma ci sono molte cose che puoi fare per alleviare il dolore
        e ridurre la frequenza dei tuoi episodi di mal di testa. Il trattamento
        osteopatico è una di queste opzioni.
      </p>
      <p>
        I sintomi del mal di testa possono variare da persona a persona, ma
        alcuni dei sintomi più comuni includono dolore pulsante o pressione
        nella testa, dolore al collo o alla nuca, nausea, vomito e sensibilità
        alla luce e ai rumori. Se soffri di mal di testa, sai già quanto questi
        sintomi possono essere fastidiosi e invalidanti.
      </p>
      <p>
        L'osteopatia si concentra sul ripristino della funzione del corpo
        attraverso la manipolazione delle articolazioni, dei tessuti molli e del
        sistema muscolo-scheletrico. In altre parole, cerchiamo di aiutare il
        tuo corpo a guarire se stesso, rimuovendo le tensioni e le restrizioni
        che possono causare dolore e altri sintomi.
      </p>
      <p>
        Uno dei principali vantaggi dell'osteopatia nel trattamento del mal di
        testa è che può essere molto efficace nel ridurre la frequenza e
        l'intensità degli episodi dolorosi. Inoltre, gli osteopati possono
        aiutare a identificare e correggere eventuali problemi di postura,
        tensione muscolare o altre condizioni che potrebbero essere alla radice
        del tuo mal di testa.
      </p>
      <p>
        L'osteopatia è anche una terapia non invasiva, il che significa che non
        comporta l'uso di farmaci o di procedure chirurgiche. Inoltre, gli
        osteopati si concentrano sulla salute e il benessere generale del
        paziente, non solo sul trattamento del sintomo specifico. Quindi, se
        soffri di mal di testa, perché non prenotare una consulenza? Potrebbe
        essere la soluzione che hai cercato per alleviare i tuoi sintomi e
        migliorare la tua qualità di vita!
      </p>
      <p>Lombalgia, cervicalgia, cefalee... Con foto!</p>
      <p>Problemi digestivi,</p>
    </Section>
  );
}

export function CosaFacciamo() {
  return (
    // <Section id="cosa-facciamo" className="bg-yellow-800/40">
    <Section id="cosa-facciamo" className="bg-[#cfb8a2]">
      <SectionTitle className="text-4xl font-light text-center mb-8 uppercase tracking-wider">
        Cosa facciamo
      </SectionTitle>

      <div className="row tab-container">
        <div className="max-w-3xl mx-auto" id="tab1">
          <h5 className="text-md md:text-lg font-light mt-5 mb-3 uppercase text-left">
            Valutazione
          </h5>
          <p className="text-sm md:text-lg">
            {/* Durante il primo appuntamento, di circa un'ora, viene fatta una{" "}
            <Highlight>valutazione generale</Highlight>, per raccogliere le
            informazioni necessarie ad impostare il percorso terapeutico. La
            valutazione riguarda il corpo nella sua totalità, secondo un{" "}
            <Highlight>approccio olistico</Highlight>: questo permette di
            individuare le cause dei disturbi anche quando si trovano in zone
            distanti o apparentemente scollegate. */}
            La prima volta che ci vediamo, dedichiamo del tempo a fare una
            valutazione generale del tuo corpo per capire come impostare il
            percorso terapeutico. Questa valutazione riguarda il corpo nella sua
            totalità e ci permette di individuare le cause dei disturbi anche
            quando si trovano in zone distanti o apparentemente scollegate.
          </p>
        </div>

        <div className="max-w-3xl mx-auto" id="tab2">
          <h5 className="text-md md:text-lg font-light mt-5 mb-3 uppercase text-left">
            Intervento
          </h5>
          <p className="text-sm md:text-lg">
            {/* Gli appuntamenti successivi hanno una durata di circa 45-50 minuti,
            durante i quali si procede al{" "}
            <Highlight>trattamento manuale</Highlight> vero e proprio. Ogni
            seduta si conclude con una breve <Highlight>verifica</Highlight> per
            valutare i risultati ottenuti. Tipicamente un ciclo di trattamenti
            comprende <Highlight>dai 3 ai 6 appuntamenti</Highlight>, anche se
            questo può variare molto in base al soggetto e alla problematica in
            questione! */}
            Gli appuntamenti successivi durano circa 45-50 minuti e si procede
            al trattamento manuale vero e proprio. Ogni seduta si conclude con
            una breve verifica per valutare i risultati ottenuti. Tipicamente un
            ciclo di trattamenti comprende dai 3 ai 6 appuntamenti, anche se
            questo può variare molto in base al soggetto e alla problematica in
            questione!
          </p>
        </div>
        <div className="max-w-3xl mx-auto" id="tab3">
          <h5 className="text-md md:text-lg font-light mt-5 mb-3 uppercase text-left">
            Esercizi
          </h5>
          <p className="text-sm md:text-lg">
            {/* Un supporto importante al lavoro terapeutico che viene fatto in
            studio sono gli <Highlight>esercizi rieducativi</Highlight> e di{" "}
            <Highlight>allungamento</Highlight>, da svolgere quotidianamente a
            casa. Questi vengono proposti in maniera{" "}
            <Highlight>personalizzata</Highlight> per ogni paziente e{" "}
            <Highlight>verificati</Highlight> in studio di volta in volta. */}
            Inoltre, ti proponiamo degli esercizi rieducativi e di allungamento
            da svolgere quotidianamente a casa, personalizzati per ogni paziente
            e verificati in studio di volta in volta. Ad esempio, potresti fare
            degli esercizi di stretching per la schiena o degli esercizi di
            rafforzamento muscolare per le gambe.
          </p>
        </div>
      </div>
      <Image
        src={articolazioni}
        width={300}
        className="w-2/3 md:w-[300px] absolute bottom-0 right-0 opacity-70"
        style={{
          filter:
            "sepia(100%) hue-rotate(20deg) brightness(80%) contrast(100%) saturate(100%) drop-shadow(0px 0px 0px #cfb8a2)",
        }}
      />
    </Section>
  );
}
export function Contatti() {
  return (
    // <Section id="contatti" className="bg-[#3b5301]/50">
    <Section id="contatti" className="bg-[#9da886]">
      <SectionTitle className="text-xl font-light text-center mb-8 uppercase tracking-wider">
        Contatti
      </SectionTitle>
      <div className="flex flex-wrap gap-6 justify-around w-full">
        <div className="shadow-xl rounded-lg my-8 p-6 flex-initial w-80 bg-gradient-to-br to-white/70 from-slate-300/40">
          <SectionSubtitle className="text-center">
            Marco De Canal
          </SectionSubtitle>
          <Image
            className="my-10 h-56 w-56 block mx-auto"
            alt="marco"
            src={marcoProfile}
            placeholder="blur"
          />
          <div className="text-center">
            <ul className="list-none flex flex-row justify-center gap-2">
              <li className="text-left mb-2">
                <a href="tel:+393385330241">
                  <PhoneIcon className="h-8 w-8 text-white bg-lime-800 inline p-2 rounded-xl mr-2" />
                  {/* +39 338 533 0241 */}
                </a>
              </li>
              <li className="text-left mb-2">
                <a href="mailto:marco.decanal@gmail.com">
                  <EnvelopeIcon className="h-8 w-8 text-white bg-lime-800 inline p-2 rounded-xl mr-2" />
                  {/* marco.decanal@gmail.com */}
                </a>
              </li>
              <li className="text-left mb-2">
                <a href="https://wa.link/r3pzu4">
                  <Image
                    className="h-8 w-8 p-0 rounded-xl mr-2"
                    src={whatsappLogo}
                    alt="WhatsApp logo"
                  />
                </a>
              </li>
              <li className="text-left mb-2">
                <a href="https://t.me/MarcoDeCanal">
                  <Image
                    className="h-8 w-8 p-0 rounded-xl mr-2"
                    src={telegramLogo}
                    alt="Telegram logo"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="shadow-xl rounded-lg my-8 p-6 flex-initial w-80 bg-gradient-to-br to-white/70 from-slate-300/40">
          <SectionSubtitle className="text-center">
            Giacomo Muccioli
          </SectionSubtitle>
          <Image
            className="my-10 h-56 w-56 block mx-auto"
            alt="Giacomo"
            src={giacomoProfile}
            placeholder="blur"
          />
          <div className="text-center">
            <ul className="list-none flex flex-row justify-center gap-2">
              <li className="text-left mb-2">
                <a href="tel:+393393182797">
                  <PhoneIcon className="h-8 w-8 text-white bg-lime-800 inline p-2 rounded-xl mr-2" />{" "}
                  {/* +39 339 318 2797 */}
                </a>
              </li>
              <li className="text-left mb-2">
                <a href="https://wa.link/n6tfe9">
                  <Image
                    className="h-8 w-8 p-0 rounded-xl mr-2"
                    src={whatsappLogo}
                    alt="WhatsApp logo"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Trattamenti() {
  return (
    <Section id="trattamenti">
      <SectionTitle>I nostri trattamenti</SectionTitle>
      <p>Qui indichiamo anche i prezzi</p>
    </Section>
  );
}

export function Mappa() {
  return (
    // <Section id="mappa" className="bg-lime-800/30 where">
    <Section id="mappa" className="bg-[#c5cfba] where">
      <SectionTitle>Dove siamo</SectionTitle>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d718.2483921729589!2d12.712009964292564!3d43.93880675591388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ce7207ce6ee35%3A0x7186b0319e152428!2sil%20Salice%20-%20massofisioterapia!5e0!3m2!1sit!2sit!4v1613653035947!5m2!1sit!2sit"
          width="100%"
          height="100%"
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="Mappa Google"
        ></iframe>
      </div>
    </Section>
  );
}
