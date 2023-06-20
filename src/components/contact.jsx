import { forwardRef } from "react";
import contactBg from "../../images/contactBg.jpeg";
import marcoProfile from "../../images/marco-profile.webp";
import giacomoProfile from "../../images/giacomo-profile.webp";
import Image from "next/image";

import { Lexend, Roboto, Merriweather } from "next/font/google";
import Link from "next/link";
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

function ContactCard({ name, phone, phoneString, mail, img }) {
  return (
    <div
      className="w-[340px] lg:w-[500px] h-[78px] lg:h-[96px] xl:h-[260px] rounded-md border-b-[3px] \\
    border-salice-50 bg-white flex flex-row gap-[8px]"
    >
      <div
        className="relative h-[64px] w-[64px] xl:h-[96px] xl:w-[96px] overflow-hidden \\
       my-[7px] lg:my-[12px] xl:my-[20px] ml-[8px] lg:mx-[20px]"
      >
        <Image
          // height={64}
          // width={64}
          fill={true}
          style={{ objectFit: "cover" }}
          alt={`Foto profilo di ${name}`}
          src={img}
          className="rounded-full"
          sizes="(max-width: 1279px) 64px, 96px"
        />
      </div>
      <div className="grow">
        <h3
          className={`${robotoHeavy.className} text-md lg:text-lg xl:text-2xl xl:ml-[20px] xl:mt-[48px] uppercase`}
          // style={{ fontVariantCaps: "petite-caps" }}
        >
          {name}
        </h3>
        <div className="max-xl:hidden border border-gray-500 w-[300px] mt-[24px] ml-[18px]" />
        <h4
          className={`${roboto.className} text-md lg:text-lg xl:text-xl xl:mt-[32px] xl:ml-[20px]`}
        >
          <Link href={`tel:${phone}`}>{phoneString}</Link>
        </h4>
        <h4
          className={`${roboto.className} text-md lg:text-lg xl:text-xl xl:mt-[20px] xl:ml-[20px]`}
        >
          <a href={`mailto:${mail}`}>{mail}</a>
        </h4>
      </div>
      <div></div>
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
        className="flex flex-col xl:flex-row xl:mx-[40px] mb-[80px] justify-between gap-[27px] \\
      bg-transparent items-center"
      >
        <ContactCard
          name="Marco De Canal"
          phone="3385330241"
          phoneString="338 533 0241"
          mail="marco.decanal@gmail.com"
          img={marcoProfile}
        />
        <ContactCard
          name="Giacomo Muccioli"
          phone="3393182797"
          phoneString="339 318 2797"
          mail="giacomo.muccioli.scout@gmail.com"
          img={giacomoProfile}
        />
      </div>
      <PhotoGallery />
      <Quote />
    </section>
  );
});
