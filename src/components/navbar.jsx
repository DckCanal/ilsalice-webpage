import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
// import logoWhite from "../../../images/icons/logo - white alpha.png";
import logo from "../../images/icons/logo.jpeg";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { StyleSheet } from "react";
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

  //   const NavLink = ({ children, ...otherProps }) => (
  //     <Link
  //       {...otherProps}
  //       className="on-header nav-link font-medium uppercase text-xs border-b border-transparent pb-[5px] transition-all duration-500 hover:border-b-white"
  //     >
  //       {children}
  //     </Link>
  //   );

  return (
    // <div className="fixed h-12 top-0 w-screen px-4 text-white bg-lime-900">
    //   <div className="flex justify-between items-center h-full">
    //     <div>
    //       <Link href="/">Home</Link>
    //     </div>
    //     <div className="flex flex-row gap-4">
    //       <Link href="/contatti">Contatti</Link>
    //       <Link href="/mappa">Mappa</Link>
    //     </div>
    //   </div>
    // </div>
    // <nav
    //   // className={`h-[60px] py-[10px] px-[5px] max-w-[1920px] fixed w-full z-10 overflow-hidden top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#3b5301] to-green-900 text-white text-sm shadow-lg`}
    //   // className={`h-[60px] py-[10px] px-[5px] max-w-[1920px] fixed w-full z-10 overflow-hidden top-0 left-1/2 -translate-x-1/2 bg-[#3b5301] text-white text-sm shadow-lg`}
    //   className={`h-[60px] py-[10px] px-[5px] max-w-[1420px] fixed w-[98%] z-10 overflow-hidden top-0 left-1/2 -translate-x-1/2 bg-white/50 backdrop-blur-2xl mt-2 mx-auto rounded-md text-[#3b5301] text-sm`}
    //   onClick={(e) => {
    //     // e.preventDefault();
    //     // const link = e.target.closest("a");
    //     // if (!link) return;
    //     // const id = link.dataset["for"];
    //     // const targetSection = document.getElementById(id);
    //     // targetSection.scrollIntoView({ behavior: "smooth" });
    //     // compactNavbar();
    //   }}
    // >
    //   <div className="float-left">
    //     <Link href="/">
    //       <Image
    //         src={logo}
    //         alt="logo"
    //         className="w-9 h-9 inline-block rounded-full -translate-y-[2px] ring-[#3b5301] ring-1"
    //       />
    //     </Link>
    //   </div>
    //   {/* <div className="navbar-toggle">
    //     <button
    //       className={`navbar-toggle-btn ${open ? "rotate90" : "rotate0"}`}
    //       aria-label="Espandi barra di navigazione"
    //       onClick={() => toggleNavbar()}
    //     >
    //       <ion-icon name="menu"></ion-icon>
    //     </button>
    //   </div> */}
    //   <ul className="mr-5 float-right w-auto list-none flex flex-row justify-around gap-3">
    //     <li className="mt-[8px]">
    //       <NavLink href="/dettagli">Dettagli</NavLink>
    //     </li>
    //     <li className="mt-[8px]">
    //       <NavLink href="https://www.google.com/maps/dir//il+Salice+-+massofisioterapia+Via+Vittorio+Veneto,+15%2FA+47842+San+Giovanni+in+Marignano+RN/@43.9396227,12.7099613,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x132ce7207ce6ee35:0x7186b0319e152428!2m2!1d12.7099613!2d43.9396227">
    //         Naviga
    //       </NavLink>
    //     </li>
    //   </ul>
    // </nav>
    <nav
      className={`bg-white ${
        !open ? "h-[60px]" : "h-[240px]"
      } rounded-md mt-3 flex flex-col border border-t-1 border-salice-50 \\ 
      shadow-md fixed w-[95%] max-w-[1420px] left-1/2 -translate-x-1/2 transition-[height] duration-500 z-10`}
      // onClick={smoothScrollFunc}
    >
      <div className="flex flex-row justify-between">
        <Link
          href="#landing"
          className="my-2 ml-3 no-click-bg"
          onClick={(ev) => handleLinkClick(ev, "landing")}
        >
          <Image src={logo} height={44} width={44} alt="Logo sulla navbar" />
        </Link>
        <h1 className="font-normal italic text-2xl mt-3 text-shadow">
          il Salice
        </h1>
        <button
          ref={toggleIcon}
          onClick={() => toggleNavbar()}
          className="no-click-bg"
          // style={{
          //   WebkitTapHighlightColor: "transparent",
          // }}
        >
          <Bars3Icon className="h-9 w-9 my-3 mx-3" />
        </button>
      </div>
    </nav>
  );
}
