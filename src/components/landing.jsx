import landingBg from "../../images/landingBg.jpeg";
import landingBadge from "../../images/landingBadge.jpeg";
import logo from "../../images/icons/logo - alpha - min.png";

import WAIconGreen from "../../vendors/logo/WA-green.png";
import WAIconWhite from "../../vendors/logo/WA-white.png";
import { MapPinIcon } from "@heroicons/react/24/outline";

import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
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

const robotoBold = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
});
export default forwardRef(function LandingView(props, ref) {
  return (
    <section
      className={`overflow-visible h-screen min-h-[1000px] min-[330px]:min-h-[650px] flex flex-col justify-between pt-[84px]`}
      id="landing"
      ref={ref}
    >
      <div
        className={`font-medium text-2xl \\
           mx-auto text-center ${lexend.className} \\
          text-[#284800] text-shadow grow flex flex-col justify-around`}
      >
        <h2>Ascolto</h2>
        <h2>Competenza</h2>
        <h2>Affidabilità</h2>
      </div>
      <div className="flex flex-col grow-0">
        <Image
          src={landingBadge}
          alt="Immagine di benvenuto"
          width={180}
          height={180}
          className="rounded-full border-2 border-white shadow-md mx-auto"
        />
        <div className="mt-4">
          <h3 className="italic text-2xl lg:text-3xl text-shadow text-center text-[#626262]">
            al vostro servizio
          </h3>
          <div
            className="mt-4 border border-salice-50 w-[220px] lg:w-[270px] \\
          mx-auto mb-[30px]"
          />
        </div>
      </div>

      <div className="flex flex-col min-[330px]:flex-row justify-between my-6 mx-6 grow">
        <div className="flex flex-col justify-center min-[330px]:justify-end order-2 min-[330px]:order-1 text-center min-[330px]:text-left">
          <Image
            src={logo}
            height={74}
            width={74}
            alt="Logo"
            className="mx-auto min-[330px]:mx-0"
          />
          <h4 className="italic text-xl lg:text-2xl">il Salice</h4>
          <h5 className="font-light text-sm lg:text-base">
            MASSOFISIOTERAPIA <br /> OSTEOPATIA
          </h5>
        </div>
        {/* <div className="order-1 min-[330px]:order-2">
          <h3 className="italic text-2xl lg:text-3xl text-shadow text-center text-[#626262]">
            al vostro servizio
          </h3>
          <div
            className="mt-4 border border-salice-50 w-[220px] lg:w-[270px] \\
          mx-auto mb-[30px]"
          />
        </div> */}
        <div className="flex flex-col min-[330px]:justify-end gap-4 text-min-[330px] lg:text-base order-3">
          <a
            className={`border-0 border-salice-50 rounded-xl flex flex-row w-32 h-12 mx-auto \\
              ${robotoBold.className} text-sm no-click-bg text-white bg-salice-400`}
            href="https://wa.me/3385330241"
            target="_blank"
            aria-label="Apri chat su WhatsApp"
          >
            <Image
              src={WAIconWhite}
              alt="Logo WhatsApp"
              height={34}
              width={34}
              className="h-[34px] w-[34px] ml-[8px] my-[5px]"
            />
            <span className="mt-[13px] ml-[15px]">SCRIVI</span>
          </a>
          <Link
            className={`border border-salice-50 rounded-xl flex flew-row w-32 h-12 ${roboto.className} text-sm no-click-bg mx-auto`}
            href="#"
            aria-label="Link alla mappa"
          >
            <MapPinIcon className="h-[34px] w-[34px] ml-[8px] my-[5px]" />
            <span className="mt-[13px] ml-[10px]">NAVIGA</span>
          </Link>
        </div>
      </div>
      <div
        className={`h-screen min-h-[1000px] min-[330px]:min-h-[650px] absolute top-0 my-auto \\
        w-full overflow-hidden max-w-[1440px] bg-white -z-30`}
      >
        <Image
          src={landingBg}
          alt="Background home page"
          className="absolute opacity-80 -z-20 left-0 blur-sm"
          placeholder="blur"
          fill={true}
          style={{
            objectFit: "cover",
          }}
        />
        {/* translate-y-[500px] top-[-10px] */}
        <div
          className="w-[2000px] h-[1200px] -translate-y-[60px] min-[330px]:-translate-y-[20px] bg-white \\
        absolute top-[50%] left-1/2 -translate-x-[1000px] rotate-[16deg] -z-[1] \\
        border-t-4 border-[#D9D9D9]"
        />
        {/* top-[377px] */}
        {/* <Image
          src={landingBadge}
          alt="Immagine di benvenuto"
          width={180}
          height={180}
          className="absolute rounded-full border-2 border-white top-[50%] left-1/2 \\
          -translate-x-1/2 shadow-md"
        />
        {/* top-[118px] */}

        {/* top-[581px] lg:top-[620px] */}
        {/*<div className="absolute top-[60%]  left-1/2 -translate-x-1/2 ">
          <h3 className="italic text-2xl lg:text-3xl text-shadow text-center text-[#626262]">
            al vostro servizio
          </h3>
          <div
            className="mt-4 border border-salice-50 w-[220px] lg:w-[270px] \\
          mx-auto mb-[30px]"
          />
        </div>*/}
      </div>
      {/* <div className="w-[2000px] h-[500px] bg-white relative -top-32 -left-1/2 rotate-[16deg] -z-[1] border-t-4 border-[#D9D9D9]" /> */}

      {/* <div>
        <div className="flex flex-row justify-between"></div>
      </div> */}
    </section>
  );
});
