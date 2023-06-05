import Head from "next/head";

import {
  Section,
  SectionTitle,
  SectionSubtitle,
} from "../components/old/section";
import Footer from "../components/old/footer";

import Header from "../components/old/header";

import {
  ChiSiamo,
  Perche,
  CosaFacciamo,
  Contatti,
  Trattamenti,
  Mappa,
} from "../components/old/content";

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
      {/* <Header /> */}

      <main>
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
