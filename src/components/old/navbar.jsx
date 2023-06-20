import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logoWhite from "../../../images/icons/logo - white alpha.png";
import logo from "../../../images/icons/logo quadrato piccolo.jpeg";
export default function Navbar() {
  //const [open, setOpen] = useState(false);
  //const toggleIcon = document.querySelector(".navbar-toggle-btn ion-icon");
  //const expandNavbar = () => {
  //toggleIcon.classList.remove("rotate0");
  //toggleIcon.classList.add("rotate90");
  // setOpen(true);
  // };
  //const compactNavbar = () => {
  //toggleIcon.classList.remove("rotate90");
  //toggleIcon.classList.add("rotate0");
  // setOpen(false);
  // };
  // const toggleNavbar = () => (open ? compactNavbar() : expandNavbar());

  const NavLink = ({ children, ...otherProps }) => (
    <Link
      {...otherProps}
      className="on-header nav-link font-medium uppercase text-xs border-b border-transparent pb-[5px] transition-all duration-500 hover:border-b-white"
    >
      {children}
    </Link>
  );

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
    <nav
      // className={`h-[60px] py-[10px] px-[5px] max-w-[1920px] fixed w-full z-10 overflow-hidden top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#3b5301] to-green-900 text-white text-sm shadow-lg`}
      // className={`h-[60px] py-[10px] px-[5px] max-w-[1920px] fixed w-full z-10 overflow-hidden top-0 left-1/2 -translate-x-1/2 bg-[#3b5301] text-white text-sm shadow-lg`}
      className={`h-[60px] py-[10px] px-[5px] max-w-[1420px] fixed w-[98%] z-10 overflow-hidden top-0 left-1/2 -translate-x-1/2 bg-white/50 backdrop-blur-2xl mt-2 mx-auto rounded-md text-[#3b5301] text-sm`}
      onClick={(e) => {
        // e.preventDefault();
        // const link = e.target.closest("a");
        // if (!link) return;
        // const id = link.dataset["for"];
        // const targetSection = document.getElementById(id);
        // targetSection.scrollIntoView({ behavior: "smooth" });
        // compactNavbar();
      }}
    >
      <div className="float-left">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className="w-9 h-9 inline-block rounded-full -translate-y-[2px] ring-[#3b5301] ring-1"
          />
        </Link>
      </div>
      {/* <div className="navbar-toggle">
        <button
          className={`navbar-toggle-btn ${open ? "rotate90" : "rotate0"}`}
          aria-label="Espandi barra di navigazione"
          onClick={() => toggleNavbar()}
        >
          <ion-icon name="menu"></ion-icon>
        </button>
      </div> */}
      <ul className="mr-5 float-right w-auto list-none flex flex-row justify-around gap-3">
        <li className="mt-[8px]">
          <NavLink href="/dettagli">Dettagli</NavLink>
        </li>
        <li className="mt-[8px]">
          <NavLink href="https://www.google.com/maps/dir//il+Salice+-+massofisioterapia+Via+Vittorio+Veneto,+15%2FA+47842+San+Giovanni+in+Marignano+RN/@43.9396227,12.7099613,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x132ce7207ce6ee35:0x7186b0319e152428!2m2!1d12.7099613!2d43.9396227">
            Naviga
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}