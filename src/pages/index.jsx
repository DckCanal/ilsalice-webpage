import Head from "next/head";
import { useRef } from "react";
import Navbar from "../components/navbar";
// import {
//   Section,
//   SectionTitle,
//   SectionSubtitle,
// } from "../components/old/section";
// import Footer from "../components/old/footer";

// import Header from "../components/old/header";

// import {
//   ChiSiamo,
//   Perche,
//   CosaFacciamo,
//   Contatti,
//   Trattamenti,
//   Mappa,
// } from "../components/old/content";

import LandingView from "../components/landing";
import Contact from "../components/contact";

function HomePage() {
  const landingRef = useRef(null);
  const contactRef = useRef(null);
  const refsMap = {
    landing: landingRef,
    contact: contactRef,
  };
  return (
    <>
      <Head>
        <title>il Salice</title>
        <meta
          name="description"
          content="Il Salice è uno studio di fisioterapia, massofisioterapia e tecniche osteopatiche a San Giovanni in Marignano, in provincia di Rimini. Marco De Canal e Giacomo Muccioli sono i due fisioterapisti e osteopati che lavorano presso il Salice. Contatti e mappa."
        />
      </Head>
      {/* <Header /> */}
      <header>
        <Navbar
          smoothScrollFunc={(ev, target) => {
            ev.preventDefault();
            if (!refsMap[target]) return;
            refsMap[target].current.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </header>

      <main>
        <LandingView ref={landingRef} />
        <Contact ref={contactRef} />
        {/* <ChiSiamo />
        <Perche />
        <CosaFacciamo />
        <Contatti />
        <Trattamenti />
        <Mappa /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default HomePage;
