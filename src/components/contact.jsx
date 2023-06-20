import { forwardRef } from "react";
import contactBg from "../../images/contactBg.jpeg";
import marcoProfile from "../../images/marco-profile.webp";
import giacomoProfile from "../../images/giacomo-profile.webp";
import Image from "next/image";

import { Lexend, Roboto, Merriweather } from "next/font/google";
const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});

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

const robotoHeavy = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const merriweather = Merriweather({
  weight: "300",
  subsets: ["latin"],
});

const merriweatherItalic = Merriweather({
  subsets: ["latin"],
  weight: "300",
  style: "italic",
});

function ContactCard({ name, phone, mail, img }) {
  return (
    <div
      className="w-[340px] h-[78px] rounded-md border-b-[3px] \\
    border-salice-50 bg-white flex flex-row gap-[8px]"
    >
      <div>
        <Image
          height={64}
          width={64}
          alt={`Foto profilo di ${name}`}
          src={img}
          className="rounded-full my-[7px] ml-[8px]"
        />
      </div>
      <div>
        <h3
          className={`${robotoHeavy.className} text-md uppercase`}
          // style={{ fontVariantCaps: "petite-caps" }}
        >
          {name}
        </h3>
        <h4 className={`${roboto.className} text-md`}>{phone}</h4>
        <h4 className={`${roboto.className} text-md`}>{mail}</h4>
      </div>
    </div>
  );
}

function PhotoGallery() {
  return <div className="w-full h-[244px] bg-salice-700 my-96"></div>;
}

function Quote() {
  return (
    <div
      className="w-[290px] h-[200px] rounded-lg border-2 border-salice-200 shadow-md \\
    flex flex-col justify-between mx-auto bg-white py-[8px] px-[18px]"
    >
      <p
        className={`${merriweatherItalic.className} text-center text-shadow text-md mb-[25px]`}
      >
        Il corpo è un meccanismo di autoguarigione e il ruolo dell'osteopata è
        facilitare questo processo.
      </p>
      <p className={`${merriweather.className} text-right text-sm`}>
        W. G. Sutherland, fondatore dell'osteopatia craniale
      </p>
    </div>
  );
}

export default forwardRef(function Contact(props, ref) {
  return (
    <section className="pt-[100px] relative overflow-hidden">
      <Image
        src={contactBg}
        alt="Sfondo per la sezione dei contatti"
        placeholder="blur"
        fill={true}
        style={{
          objectFit: "cover",
        }}
        className="relative opacity-60 -z-20"
      />
      <div
        className="flex flex-col mb-[80px] justify-between gap-[27px] \\
      bg-transparent items-center"
      >
        <ContactCard
          name="Marco De Canal"
          phone="338 533 0241"
          mail="marco.decanal@gmail.com"
          img={marcoProfile}
        />
        <ContactCard
          name="Giacomo Muccioli"
          phone="339 318 2797"
          mail="giacomo.muccioli.scout@gmail.com"
          img={giacomoProfile}
        />
      </div>
      <PhotoGallery />
      <Quote />
    </section>
  );
});
