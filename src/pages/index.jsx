import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import marcoProfile from "../../images/marco-profile.webp";
import giacomoProfile from "../../images/giacomo-profile.webp";

import whatsappLogo from "../../vendors/logo/WhatsApp.png";
import telegramLogo from "../../vendors/logo/Telegram.svg";

import Navbar from "../components/navbar";
function HomePage() {
  return (
    <>
      <Head>
        <title>il Salice - massofisioterapia</title>
        <meta
          name="description"
          content="Il Salice è uno studio di fisioterapia, massofisioterapia e tecniche osteopatiche a San Giovanni in Marignano, in provincia di Rimini. Marco De Canal e Giacomo Muccioli sono i due fisioterapisti e osteopati che lavorano presso il Salice. Contatti e mappa."
        />
      </Head>
      <header id="head">
        {/* <nav className="main-navbar nav-on-header navbar-min">
            <div className="logo-wrapper">
              <a href="#" data-for="head" className="nav-logo">
                <Image src={logo} alt="logo" className="logo-img" />
              </a>
            </div>
            <div className="navbar-toggle">
              <button
                className="navbar-toggle-btn"
                aria-label="Espandi barra di navigazione"
              >
                <ion-icon name="menu" className="rotate0"></ion-icon>
              </button>
            </div>
            <ul>
              <li>
                <a href="#" className="on-header nav-link" data-for="sec1">
                  Chi siamo
                </a>
              </li>
              <li>
                <a href="#" className="on-header nav-link" data-for="sec2">
                  Il trattamento osteopatico
                </a>
              </li>
              <li>
                <a href="#" className="on-header nav-link" data-for="sec3">
                  Cosa facciamo
                </a>
              </li>
              <li>
                <a href="#" className="on-header nav-link" data-for="sec4">
                  Dove siamo
                </a>
              </li>
            </ul>
          </nav> */}
        <Navbar />

        <div className="btn-container row">
          <a
            className="btn btn-main btn-contact"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector(".who")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <ion-icon name="call-outline"></ion-icon>
            <p>CONTATTI</p>
          </a>
          <a
            className="btn btn-main btn-map"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector(".where")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <ion-icon name="map-outline"></ion-icon>
            <p>MAPPA</p>
          </a>
        </div>
        <div className="hero-text">
          <h1>il Salice</h1>
          <h2>osteopatia e massofisioterapia</h2>
        </div>
      </header>
      <main>
        <section className="who" id="sec1">
          <div className="row">
            <h3>Chi siamo</h3>
            <p>
              <i>Il Salice</i> nasce dalla volontà di due amici di lavorare
              insieme per portare il trattamento e le tecniche osteopatiche
              anche a San Giovanni in Marignano. Entrambi massofisioterapisti,
              Marco e Giacomo si sono specializzati nell'esecuzione di manovre
              osteopatiche, tra le quali ad esempio il
              <strong className="text-blue">trattamento fasciale</strong> e il
              <strong className="text-blue">cranio sacrale</strong>.
            </p>
            <div className="col-1-of-2 contact-card">
              <h4 className="center-text">Marco De Canal</h4>
              <Image
                className="profile-img"
                alt="marco"
                // src="../../images/marco-profile.JPG"
                src={marcoProfile}
              />
              <div className="contact-info center-text">
                <ul>
                  <li>
                    <a className="btn btn-border" href="tel:+393385330241">
                      <ion-icon name="call"></ion-icon> +39 338 533 0241
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-border"
                      href="mailto:marco.decanal@gmail.com"
                    >
                      <ion-icon name="mail"></ion-icon> marco.decanal@gmail.com
                    </a>
                  </li>
                  <li>
                    <div className="social-button">
                      <a href="https://wa.link/r3pzu4">
                        <Image
                          className="social-logo"
                          src={whatsappLogo}
                          alt="WhatsApp logo"
                        />
                      </a>
                      <a href="https://t.me/MarcoDeCanal">
                        <Image
                          className="social-logo"
                          src={telegramLogo}
                          alt="Telegram logo"
                        />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-1-of-2 contact-card">
              <h4 className="center-text">Giacomo Muccioli</h4>
              <Image
                className="profile-img"
                alt="Giacomo"
                src={giacomoProfile}
              />
              <div className="contact-info center-text">
                <ul>
                  <li>
                    <a className="btn btn-border" href="tel:+393393182797">
                      <ion-icon name="call"></ion-icon> +39 339 318 2797
                    </a>
                  </li>
                  <li>
                    <div className="social-button">
                      <a href="https://wa.link/n6tfe9">
                        <Image
                          className="social-logo"
                          src={whatsappLogo}
                          alt="WhatsApp logo"
                        />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* SEZIONE 2: IL TRATTAMENTO OSTEOPATICO */}
        <section className="what-is" id="sec2">
          <div className="row">
            <h3>Il trattamento osteopatico</h3>
            <div className="row tabular-row">
              <div className="col-1-of-3">
                <ion-icon name="leaf-outline"></ion-icon>
                <h4 className="center-text">Cos'è</h4>
              </div>
              <div className="col-2-of-3">
                <p>
                  Nata più di un secolo fa dalle intuizioni del medico e
                  chirurgo americano{" "}
                  <i className="text-blue fw-400">A. T. Still</i>, oggi
                  l'osteopatia si configura come
                  <strong className="text-blue">
                    medicina olistica manuale
                  </strong>
                  , racchiudendo in sé sia i tratti della
                  <i>disciplina scientifica</i> (studio approfondito
                  dell'anatomia, solide basi fisiologiche) sia quelli dell'
                  <i>arte</i>
                  (fine sensibilità manuale, personalizzazione del piano
                  terapeutico).
                </p>
                <p>
                  Secondo la fisolofia osteopatica lo stato di
                  <strong className="text-blue">salute ottimale</strong> si
                  raggiunge quando tutte le componenti di una persona sono in
                  equilibrio. Ciò avviene naturalmente, perché il corpo è dotato
                  di grandi capacità di
                  <i className="text-blue fw-400">
                    rigenerazione e autoguarigione
                  </i>
                  . Talvolta però succede che queste capacità vengano ostacolate
                  o addirittura bloccate dall'instaurarsi di
                  <strong>disfunzioni</strong>, che a lungo andare possono
                  degenerare in vere e proprie <strong>patologie</strong>.
                </p>
                <p>
                  Nell'esecuzione del trattamento osteopatico l'obiettivo
                  principale è la ricerca delle
                  <strong className="text-blue">cause</strong> del problema, che
                  possono anche essere distanti dalla zona di manifestazione.
                  Una volta individuate, si procede al loro trattamento.
                </p>
                <p>
                  L'indagine e la diagnosi osteopatica si svolgono
                  prevalentemente con un ascolto attento e fine dei tessuti del
                  paziente, tramite le mani del terapista.
                </p>
              </div>
            </div>

            <div className="row reverse-row tabular-row">
              <div className="col-1-of-3">
                <ion-icon name="man-outline"></ion-icon>
                <h4 className="center-text">Per chi</h4>
              </div>
              <div className="col-2-of-3">
                <h5>Adulti</h5>
                <p>
                  Troppo stress, abitudini errate nell'ambiente di lavoro o a
                  casa e la carenza di attività sportiva sono caratteristiche
                  ricorrenti nella vita di molti adulti di oggi. Questi fattori
                  possono portare all'instaurarsi di grandi
                  <strong>tensioni meccaniche</strong>
                  dell'apparato muscolo-scheletrico, che a loro volta possono
                  evolvere in disequilibri:
                </p>
                <ul>
                  <li>
                    <strong>meccanici</strong>, come disfunzioni, riduzioni di
                    mobilità, blocchi articolari o alterazioni posturali;
                  </li>
                  <li>
                    <strong>biochimici</strong>, come stati infiammatori diffusi
                    o alterazioni della pressione;
                  </li>
                  <li>
                    <strong>psico-emotivi</strong>, come un'ipersuscettibilità,
                    una costante insoddisfazione o disturbi dell'attenzione.
                  </li>
                </ul>
                <p>
                  Aver cura di sé tramite il trattamento osteopatico permette di
                  <strong className="text-blue">migliorare</strong> e
                  <strong className="text-blue">risolvere</strong> alla radice
                  molte di queste problematiche, migliorando notevolmente la
                  qualità della vita.
                </p>
                <h5>Anziani</h5>
                <p>
                  Con il progredire dell'età insorgono dolori e problemi fisici
                  che compromettono gravemente la
                  <strong>qualità della vita</strong>. In molti casi con il
                  trattamento osteopatico è possibile
                  <strong className="text-blue">ridurre le tensioni</strong> che
                  causano il dolore e
                  <strong className="text-blue">recuperare una mobilità</strong>{" "}
                  e una postura migliori.
                </p>
                <h5>Sportivi</h5>
                <p>
                  Il fisico dello sportivo professionista è normalmente soggetto
                  a grandi sollecitazioni. Se non vengono adeguatamente gestite
                  queste possono portare a disfunzioni,
                  <strong>cali di performance</strong>, e problemi di salute. Il
                  trattamento osteopatico contribuisce al
                  <strong className="text-blue">
                    recupero e mantenimento
                  </strong>{" "}
                  della forma fisica ottimale: migliora le performance, accorcia
                  i<strong className="text-blue">tempi di recupero</strong> e
                  riduce il
                  <strong className="text-blue">rischio di infortuni</strong>.
                </p>
                <p>
                  Anche per lo sportivo amatoriale il trattamento osteopatico è
                  importante: lo aiuta a
                  <strong className="text-blue">
                    correggere posture errate
                  </strong>{" "}
                  che possono derivare dalla pratica sportiva e risolve tutte
                  quelle piccole problematiche dolorose che rischiano di
                  precludere l'attività.
                </p>
              </div>
            </div>
            <div className="row tabular-row">
              <div className="col-1-of-3">
                <ion-icon name="fitness-outline"></ion-icon>
                <h4 className="center-text">A cosa serve</h4>
              </div>
              <div className="col-2-of-3">
                <p>
                  Sono tanti i problemi di salute che ogni giorno incontriamo in
                  studio, spesso molto diversi tra loro. I più frequenti sono:
                </p>
                <ul>
                  <li>
                    <strong>cervicalgia</strong>: dolore al collo che può
                    irradiarsi dalle spalle fino alle mani, talvolta con
                    formicolii;
                  </li>
                  <li>
                    <strong>lombalgia</strong>: basso mal di schiena a cui si
                    associano talvolta problematiche intestinali o alle gambe;
                  </li>
                  <li>
                    <strong>cefalee ed emicranie</strong>: varie forme di mal di
                    testa che possono durare per più giorni e talvolta si
                    associano a nausea e vertigini;
                  </li>
                  <li>
                    <strong>sciatalgie</strong>: bruciore persistente oppure
                    sensazioni di scosse intense nel nervo sciatico;
                  </li>
                  <li>
                    <strong>blocchi articolari</strong>: chiamati anche "colpi
                    della strega", dolorosi ed invalidanti.
                  </li>
                  <li>
                    <strong>disfunzioni dell'apparato gastro-enterico</strong>:
                    possono causare sintomi fastidiosi come stitichezza, dolori
                    addominali, sonnolenza dopo i pasti o bruciore di stomaco.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="what-do" id="sec3">
          <div className="row">
            <h3>Cosa facciamo</h3>

            <h4 className="center-text">Come si svolge la terapia</h4>
            <div className="row tab-container">
              <div className="tab-control">
                <a
                  href="#sec3"
                  className="tab-btn tab-btn-active"
                  data-tab-id="tab1"
                  aria-label="Espandi tab Valutazione"
                >
                  <ion-icon name="document-text-outline"></ion-icon>
                </a>
                <a
                  href="#sec3"
                  className="tab-btn tab-btn-inactive"
                  data-tab-id="tab2"
                  aria-label="Espandi tab Intervento"
                >
                  <ion-icon name="shield-checkmark-outline"></ion-icon>
                </a>
                <a
                  href="#sec3"
                  className="tab-btn tab-btn-inactive"
                  data-tab-id="tab3"
                  aria-label="Espandi tab Esercizi"
                >
                  <ion-icon name="flash-outline"></ion-icon>
                </a>
              </div>
              <div className="tab-content tab-content-active" id="tab1">
                <h5>Valutazione</h5>
                <p>
                  Durante il primo appuntamento, di circa un'ora, viene fatta
                  una
                  <strong className="text-blue">valutazione generale</strong>,
                  per raccogliere le informazioni necessarie ad impostare il
                  successivo iter terapeutico. La valutazione riguarda il corpo
                  nella sua totalità, secondo un
                  <strong className="text-blue">approccio olistico</strong>:
                  questo permette di individuare le cause dei disturbi anche
                  quando queste si trovano in zone distanti o apparentemente
                  scollegate.
                </p>
              </div>

              <div className="tab-content tab-content-inactive" id="tab2">
                <h5>Intervento</h5>
                <p>
                  Gli appuntamenti successivi hanno una durata di circa 45-50
                  minuti, durante i quali si procede al
                  <strong className="text-blue">
                    trattamento manuale
                  </strong>{" "}
                  vero e proprio. Ogni seduta si conclude con una breve
                  <strong className="text-blue">verifica</strong> per valutare i
                  risultati ottenuti. Tipicamente un ciclo di trattamenti
                  comprende
                  <i className="text-blue fw-400">dai 3 ai 6 appuntamenti</i>,
                  anche se questo può variare molto in base al soggetto e alla
                  problematica in questione!
                </p>
              </div>
              <div className="tab-content tab-content-inactive" id="tab3">
                <h5>Esercizi</h5>
                <p>
                  Un supporto importante al lavoro terapeutico che viene fatto
                  in studio sono gli
                  <strong className="text-blue">esercizi rieducativi</strong> o
                  di
                  <strong className="text-blue">allungamento</strong>, da
                  svolgere quotidianamente a casa. Questi vengono proposti in
                  maniera
                  <i className="text-blue fw-400">personalizzata</i> per ogni
                  paziente, e <i className="text-blue fw-400">verificati</i> in
                  studio di volta in volta.
                </p>
              </div>
            </div>

            <div className="row">
              <h4 className="center-text">Tipologie di trattamento</h4>
              <p className="center-text">
                Le metodologie di trattamento che adottiamo nel nostro studio
                comprendono:
              </p>
              <ul className="center-list fw-300">
                <li>terapia manuale osteopatica</li>
                <li>cranio sacrale</li>
                <li>fasciale</li>
                <li>viscerale</li>
                <li>
                  riabilitazione e rieducazione post trauma o post chirurgia
                </li>
                <li>rieducazione e riequilibrio posturale</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="where" id="sec4">
          <div className="row">
            <h3>Dove siamo</h3>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d718.2483921729589!2d12.712009964292564!3d43.93880675591388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ce7207ce6ee35%3A0x7186b0319e152428!2sil%20Salice%20-%20massofisioterapia!5e0!3m2!1sit!2sit!4v1613653035947!5m2!1sit!2sit"
                width="100%"
                height="100%"
                // frameborder="0"
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Mappa Google"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="row">
          <div className="col-1-of-3">
            <h4>il Salice - osteopatia e massofisioterapia</h4>
            <h5>di Giacomo Muccioli e Marco De Canal</h5>
          </div>
          <div className="col-1-of-3">
            <h4>Contatti</h4>
            <h5>Giacomo Muccioli</h5>
            <p>
              Tel: <a href="tel:+393393182797">+39 339 318 2797</a>
            </p>
            <h5>Marco De Canal</h5>
            <p>
              Tel: <a href="tel:+393385330241">+39 338 533 0241</a>
            </p>
            <p>
              email:{" "}
              <a href="mailto:marco.decanal@gmail.com">
                marco.decanal@gmail.com
              </a>
            </p>
          </div>
          <div className="col-1-of-3">
            <p>
              San Giovanni in Marignano
              <br />
              Via Vittorio Veneto 15/A
              <br />
              47842, RN
            </p>
          </div>
        </div>
      </footer>
      <Script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      />
      <Script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      />
      {/* </body>
  </html> */}
    </>
  );
}

export default HomePage;
