import landingBg from "../../images/landingBg.webp";
import landingBadge from "../../images/landingBadge.webp";
import logo from "../../images/icons/logoAlpha.webp";
import logoDark from "../../images/icons/logoDark.png";

import WAIconWhite from "../../vendors/logo/WA-white.png";
import { MapPinIcon } from "@heroicons/react/24/outline";

import Image from "next/image";
import { forwardRef } from "react";
import { Roboto } from "next/font/google";
import LandingText from "./landingText";

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
      className={`overflow-visible h-screen min-h-[1000px] min-[330px]:min-h-[680px] flex flex-col justify-between pt-[84px]`}
      id="landing"
      ref={ref}
    >
      <LandingText />
      <div className="flex flex-col grow-0">
        <Image
          src={landingBadge}
          alt="Marco De Canal alla scrivania con una paziente"
          width={180}
          height={180}
          className="rounded-full border-2 border-white shadow-material mx-auto"
          placeholder="blur"
          priority
        />
        <div className="mt-4">
          <h3 className="italic text-2xl lg:text-3xl text-shadow text-center text-[#626262] dark:text-white">
            al vostro servizio
          </h3>
          <div
            className="mt-4 border border-salice-50 w-[220px] lg:w-[270px] \\
          mx-auto mb-[30px]"
          />
        </div>
      </div>

      <div className="flex flex-col min-[330px]:flex-row justify-between my-6 mx-6 grow">
        <div className="flex flex-col justify-center min-[330px]:justify-end order-2 min-[330px]:order-1 text-center min-[330px]:text-left dark:text-white">
          <Image
            src={logo}
            height={74}
            width={74}
            alt="Logo"
            className="mx-auto min-[330px]:mx-0 block dark:hidden"
            placeholder="blur"
          />
          <Image
            src={logoDark}
            height={74}
            width={74}
            alt="Logo"
            className="mx-auto min-[330px]:mx-0 hidden dark:block"
            placeholder="blur"
          />
          <h4 className="italic text-xl lg:text-2xl">il Salice</h4>
          <h5 className="font-light text-sm lg:text-base">
            MASSOFISIOTERAPIA <br /> OSTEOPATIA
          </h5>
        </div>
        <div className="flex flex-col min-[330px]:justify-end gap-4 text-min-[330px] lg:text-base order-3">
          <a
            className={`border-0 border-salice-50 rounded-xl flex flex-row w-32 h-12 mx-auto \\
              ${robotoBold.className} text-sm no-click-bg text-white bg-gradient-to-br from-salice-100 to-salice-500 shadow-material`}
            href="https://wa.me/3385330241"
            target="_blank"
            aria-label="Scrivi su WhatsApp"
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
          <a
            className={`border border-salice-50 dark:border-white dark:text-white rounded-xl flex flew-row w-32 h-12 ${roboto.className} text-sm no-click-bg mx-auto dark:bg-gradient-to-br dark:from-salice-600 dark:to-salice-800`}
            href="https://maps.google.com/maps/dir//il+Salice+-+massofisioterapia+Via+Vittorio+Veneto,+15%2FA+47842+San+Giovanni+in+Marignano+RN/@43.9396227,12.7099613,18z/data=!4m5!4m4!1m0!1m2!1m1!1s0x132ce7207ce6ee35:0x7186b0319e152428"
            aria-label="Naviga"
            target="_blank"
          >
            <MapPinIcon className="h-[34px] w-[34px] ml-[8px] my-[5px]" />
            <span className="mt-[13px] ml-[10px]">NAVIGA</span>
          </a>
        </div>
      </div>
      <div
        className={`h-screen min-h-[1000px] min-[330px]:min-h-[680px] absolute top-0 my-auto \\
        w-full overflow-hidden max-w-[1440px] bg-white dark:bg-salice-900 -z-30`}
      >
        <Image
          src={landingBg}
          alt="Background home page"
          className="absolute opacity-80 -z-20 left-0 blur-sm"
          placeholder="blur"
          fill={true}
          style={{
            objectFit: "cover",
            animation: "zoom 16s ease-in-out infinite",
          }}
        />

        <div
          className="w-[2000px] h-[1200px] -translate-y-[60px] min-[330px]:-translate-y-[20px] bg-white dark:bg-salice-900 \\
        absolute top-[50%] left-1/2 -translate-x-[1000px] rotate-[16deg] -z-[1] \\
        border-t-4 border-[#D9D9D9] dark:border-white"
        />
      </div>
    </section>
  );
});
