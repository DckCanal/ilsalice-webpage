import { forwardRef } from "react";
import contactBg from "../../images/contactBg.jpeg";
import marcoProfile from "../../images/marco-profile.webp";
import giacomoProfile from "../../images/giacomo-profile.webp";
import Image from "next/image";
import PhotoGallery from "./photoGallery/PhotoGallery";
import { PhoneArrowUpRightIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

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
    // border-b-[3px]
    <div
      className={`w-[360px] lg:w-[500px] ${
        mail ? "h-[134px] lg:h-[152px]" : "h-[84px] lg:h-[96px]"
      }  xl:h-[270px] rounded-md  border  \\
    border-salice-50 bg-white flex flex-row gap-[8px]`}
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
          className={`${robotoHeavy.className} text-md lg:text-lg xl:text-2xl xl:ml-[20px] mt-2 xl:mt-[48px] uppercase`}
          // style={{ fontVariantCaps: "petite-caps" }}
          //style={{ fontVariantCaps: "small-caps" }}
        >
          {name}
        </h3>
        <div className="max-xl:hidden border border-gray-500 w-[300px] mt-[24px] ml-[18px]" />

        <a
          href={`tel:${phone}`}
          className="flex flex-row border border-salice-700 bg-salice-50/25 shadow-md rounded-lg w-36 lg:w-40 xl:w-44 lg:mt-1 xl:mt-6 ml-4"
        >
          <PhoneArrowUpRightIcon className="h-5 w-5 xl:h-6 xl:w-6 mx-2 my-auto" />
          <h4
            className={`${roboto.className} text-md lg:text-lg xl:text-xl my-2`}
          >
            {phoneString}
          </h4>
        </a>

        {mail && (
          <a
            href={`mailto:${mail}`}
            className="flex flex-row border border-salice-700 rounded-lg w-fit mt-2 xl:my-6 ml-4"
          >
            <EnvelopeIcon className="h-5 w-5 xl:h-6 xl:w-6 mx-2 my-auto" />
            <h4
              className={`${roboto.className} text-md lg:text-lg xl:text-xl  my-2 mr-4`}
            >
              {mail}
            </h4>
          </a>
        )}
      </div>
      <div></div>
    </div>
  );
}

function Quote() {
  return (
    <div className="pt-4 pb-10">
      <div
        className="w-[290px] lg:w-[400px] xl:w-[600px] h-[200px] rounded-lg border border-salice-200 shadow-md \\
    flex flex-col justify-between mx-auto bg-white py-[8px] lg:py-[20px] px-[18px]"
      >
        <p
          className={`${merriweatherItalic.className} text-center text-shadow text-md mb-[25px]`}
        >
          Il corpo è un meccanismo di autoguarigione e il ruolo dell'osteopata è
          facilitare questo processo.
        </p>
        <p
          className={`${merriweather.className} text-right text-sm lg:w-[60%] mr-0 ml-auto`}
        >
          W. G. Sutherland, fondatore dell'osteopatia craniale
        </p>
      </div>
    </div>
  );
}

export default forwardRef(function Contact(props, ref) {
  return (
    <section className="pt-[100px] relative bg-white -z-30" ref={ref}>
      <Image
        src={contactBg}
        alt="Sfondo per la sezione dei contatti"
        placeholder="blur"
        fill={true}
        style={{
          objectFit: "cover",
        }}
        className="relative opacity-30 -z-20 blur-sm"
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
          //mail="giacomo.muccioli.scout@gmail.com"
          img={giacomoProfile}
        />
      </div>
      <PhotoGallery />
      <Quote />
    </section>
  );
});
