import { forwardRef } from "react";
import contactBg from "../../images/contactBg.jpeg";
import marcoProfile from "../../images/marco-profile.webp";
import giacomoProfile from "../../images/giacomo-profile.webp";
import Image from "next/image";

import { Lexend, Roboto } from "next/font/google";
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
  weight: "500",
});

function ContactCard({ name, phone, mail, img }) {
  return (
    <div className="w-[340px] h-[78px] rounded-md border-b-[3px] border-salice-50 bg-white flex flex-row gap-[8px]">
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
  return <div className="w-full h-[244px] bg-salice-700"></div>;
}

export default forwardRef(function Contact(props, ref) {
  return (
    <section className="pt-[100px]">
      <div
        className="h-screen"
        style={{
          backgroundImage: `url(${contactBg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          opacity: "60%",
          zIndex: "-1",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transform: "translateY(100%)",
        }}
      />
      <div className="flex flex-col mb-[80px] justify-between gap-[27px] bg-transparent items-center">
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
    </section>
  );
});
