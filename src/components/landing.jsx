import landingBg from "../../images/landingBg.jpeg";
import landingBadge from "../../images/landingBadge.jpeg";
import logo from "../../images/icons/logo.jpeg";
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
export default forwardRef(function LandingView(props, ref) {
  return (
    <section
      className="overflow-hidden flex flex-col justify-between h-screen"
      id="landing"
      ref={ref}
    >
      <div
        className="h-screen absolute top-0 my-auto w-full overflow-hidden max-w-[1440px]"
        style={{
          objectFit: "cover",
        }}
        // style={{
        //   backgroundImage: `url(${landingBg.src})`,
        //   filter: "blur(4px)",
        //   backgroundPosition: "50% -40px",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   opacity: "60%",
        //   zIndex: -2,
        //   position: "absolute",
        //   top: 0,
        //   left: 0,
        //   width: "100%",
        //   height: "100%",
        // }}
      >
        <Image
          src={landingBg}
          alt="Background home page"
          className="absolute opacity-60 -z-20 left-0 blur-sm"
          placeholder="blur"
          fill={true}
        />
        <div className="w-[2000px] h-[1000px] translate-y-[500px] bg-white absolute top-[-33px] left-1/2 -translate-x-[1000px] rotate-[4deg] -z-[1] border-t-4 border-[#D9D9D9]" />
      </div>
      {/* <div className="w-[2000px] h-[500px] bg-white relative -top-32 -left-1/2 rotate-[16deg] -z-[1] border-t-4 border-[#D9D9D9]" /> */}
      <div
        className={`font-semibold text-4xl space-y-11 mx-auto pt-28 text-center ${lexend.className} text-[#284800] text-shadow`}
      >
        {/* <Image src={landingBg} className="opacity-60" /> */}
        <h2>Ascolto</h2>
        <h2>Competenza</h2>
        <h2>Affidabilità</h2>
      </div>
      <div>
        <h3 className="italic text-3xl text-shadow text-center text-[#626262] mt-60">
          al vostro servizio
        </h3>
        <div className="mt-4 border border-salice-50 w-[270px] mx-auto mb-[30px]" />
        <div className="flex flex-row justify-between">
          <div className="flex flex-col ml-5">
            <Image src={logo} height={74} width={74} alt="Logo" />
            <h4 className="italic text-2xl">il Salice</h4>
            <h5 className="font-light text-base">
              MASSOFISIOTERAPIA <br /> OSTEOPATIA
            </h5>
          </div>
          <div className="flex flex-col gap-4 mt-10">
            <Link
              className={`border-2 border-salice-50 rounded-xl flex flex-row w-32 h-12 mr-4 ${roboto.className} text-sm no-click-bg`}
              href="https://wa.me/3385330241"
              aria-label="Apri chat su WhatsApp"
            >
              <Image
                src={WAIconGreen}
                alt="Logo WhatsApp"
                height={34}
                width={34}
                className="h-[34px] w-[34px] ml-[8px] my-[5px]"
              />
              <span className="mt-[13px] ml-[15px]">SCRIVI</span>
            </Link>
            <Link
              className={`border-2 border-salice-50 rounded-xl flex flew-row w-32 h-12 mr-4 ${roboto.className} text-sm no-click-bg`}
              href="#"
              aria-label="Link alla mappa"
            >
              <MapPinIcon className="h-[34px] w-[34px] ml-[8px] my-[5px]" />
              <span className="mt-[13px] ml-[10px]">NAVIGA</span>
            </Link>
          </div>
        </div>
        {/* <div className="w-[2000px] h-[500px] bg-white relative -top-32 -left-1/2 rotate-[16deg] -z-[1] border-t-4 border-[#D9D9D9]" /> */}
      </div>
      <Image
        src={landingBadge}
        alt="Immagine di benvenuto"
        width={180}
        height={180}
        className="absolute rounded-full border-2 border-white top-[377px] left-1/2 -translate-x-1/2 shadow-md"
      />
    </section>
  );
});
