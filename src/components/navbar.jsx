import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import logo from "../../images/icons/logo.webp";
import logoDark from "../../images/icons/logoDark.png";
import { Bars3Icon } from "@heroicons/react/24/solid";
export default function Navbar({ smoothScrollFunc }) {
  const [open, setOpen] = useState(false);
  const toggleIcon = useRef(null);

  const expandNavbar = () => {
    toggleIcon.current.classList.remove("rotate0");
    toggleIcon.current.classList.add("rotate90");
    setOpen(true);
  };
  const compactNavbar = () => {
    toggleIcon.current.classList.remove("rotate90");
    toggleIcon.current.classList.add("rotate0");
    setOpen(false);
  };

  const toggleNavbar = () => (open ? compactNavbar() : expandNavbar());

  const handleLinkClick = (ev, target) => {
    smoothScrollFunc(ev, target);
    compactNavbar();
  };

  return (
    <nav
      className={`bg-white dark:bg-salice-900 ${
        !open ? "h-[60px]" : "h-[240px]"
      } rounded-md mt-3 flex flex-col border border-t-1 border-salice-50 dark:border-white  \\ 
      shadow-md fixed w-[95%] max-w-[1420px] left-1/2 -translate-x-1/2 transition-[height] duration-500 z-40 overflow-hidden`}
    >
      <div className="flex flex-row justify-between">
        <Link
          href="#landing"
          className="my-2 ml-3 no-click-bg"
          onClick={(ev) => handleLinkClick(ev, "landing")}
        >
          <Image
            src={logo}
            height={44}
            width={44}
            alt="Logo sulla navbar"
            className="block dark:hidden"
          />
          <Image
            src={logoDark}
            height={44}
            width={44}
            alt="Logo sulla navbar"
            className="hidden dark:block"
          />
        </Link>
        <h1 className="font-normal italic text-2xl mt-3 text-shadow dark:text-white">
          il Salice
        </h1>
        <button
          ref={toggleIcon}
          aria-label="Espandi barra di navigazione"
          onClick={() => toggleNavbar()}
          className="no-click-bg"
          // style={{
          //   WebkitTapHighlightColor: "transparent",
          // }}
        >
          <Bars3Icon className="h-9 w-9 my-3 mx-3 dark:text-white" />
        </button>
      </div>

      {/* Links */}
      <div className="flex flex-col justify-evenly text-center h-[180px] dark:text-white">
        <a
          className="grow text-shadow-only-over"
          href="#contatti"
          onClick={(ev) => handleLinkClick(ev, "contact")}
        >
          <h2>Contatti</h2>
        </a>
        <a
          className="grow text-shadow-only-over"
          href="#pazienti"
          onClick={(ev) => handleLinkClick(ev, "target")}
        >
          <h2>Cosa facciamo</h2>
        </a>
        <a
          className="grow text-shadow-only-over"
          href="#trattamenti"
          onClick={(ev) => handleLinkClick(ev, "treatments")}
        >
          <h2>Tipi di trattamento</h2>
        </a>
        <a
          className="grow text-shadow-only-over"
          href="#mappa"
          onClick={(ev) => handleLinkClick(ev, "map")}
        >
          <h2>Mappa</h2>
        </a>
      </div>
    </nav>
  );
}
