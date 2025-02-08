import Head from "next/head";
import { useRef } from "react";
import Navbar from "../components/navbar";

import WhatsAppFAB from "../components/floatingWhatsAppButton";
import LandingView from "../components/landing";
import Contact from "../components/contact";
import Target from "../components/target";
import Treatments from "../components/treatments";
import Footer from "../components/footer";
import Map from "../components/map";
import PrivacyPolicyBanner from "../components/PrivacyPolicyBanner";

function HomePage() {
  const landingRef = useRef(null);
  const contactRef = useRef(null);
  const targetRef = useRef(null);
  const treatmentsRef = useRef(null);
  const footerRef = useRef(null);
  const mapRef = useRef(null);
  const refsMap = {
    landing: landingRef,
    contact: contactRef,
    target: targetRef,
    treatments: treatmentsRef,
    footer: footerRef,
    map: mapRef,
  };
  return (
    <>
      <Head>
        <title>il Salice</title>
        <meta
          name="description"
          content="Il Salice è uno studio di fisioterapia, massofisioterapia e tecniche osteopatiche a San Giovanni in Marignano, in provincia di Rimini. Marco De Canal e Giacomo Muccioli sono i due fisioterapisti e osteopati che lavorano presso il Salice. Contatti e mappa."
        />
        <link rel="canonical" href="https://ilsalice.netlify.app/" />
      </Head>
      <header>
        <Navbar
          smoothScrollFunc={(ev, target) => {
            ev.preventDefault();
            if (!refsMap[target]) return;
            console.dir(refsMap[target]);
            refsMap[target].current.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </header>

      <main>
        <PrivacyPolicyBanner />
        <WhatsAppFAB refToObserve={landingRef} />
        <LandingView ref={landingRef} />
        <Contact ref={contactRef} />
        <Target ref={targetRef} />
        <Treatments ref={treatmentsRef} />
        <Map ref={mapRef} />
        <Footer ref={footerRef} />
        
      </main>
    </>
  );
}

export default HomePage;
