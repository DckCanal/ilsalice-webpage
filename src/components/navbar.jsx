import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logoWhite from "../../images/icons/logo - white alpha.png";
import logo from "../../images/icons/logo.jpeg";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  //const toggleIcon = document.querySelector(".navbar-toggle-btn ion-icon");
  const expandNavbar = () => {
    //toggleIcon.classList.remove("rotate0");
    //toggleIcon.classList.add("rotate90");
    setOpen(true);
  };
  const compactNavbar = () => {
    //toggleIcon.classList.remove("rotate90");
    //toggleIcon.classList.add("rotate0");
    setOpen(false);
  };
  const toggleNavbar = () => (open ? compactNavbar() : expandNavbar());

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
      className={`main-navbar nav-on-header ${
        open ? "navbar-max" : "navbar-min"
      }`}
      onClick={(e) => {
        e.preventDefault();
        const link = e.target.closest("a");
        if (!link) return;
        const id = link.dataset["for"];
        const targetSection = document.getElementById(id);
        targetSection.scrollIntoView({ behavior: "smooth" });
        compactNavbar();
      }}
    >
      <div className="logo-wrapper">
        <a href="#" data-for="head" className="nav-logo">
          <Image src={logo} alt="logo" className="logo-img" />
        </a>
      </div>
      <div className="navbar-toggle">
        <button
          className={`navbar-toggle-btn ${open ? "rotate90" : "rotate0"}`}
          aria-label="Espandi barra di navigazione"
          onClick={() => toggleNavbar()}
        >
          <ion-icon name="menu"></ion-icon>
        </button>
      </div>
      <ul>
        <li>
          <a href="#" className="on-header nav-link" data-for="sec1">
            Chi siamo
          </a>
        </li>
        <li>
          <a href="#" className="on-header nav-link" data-for="sec2">
            Il trattamento osteopatico
          </a>
        </li>
        <li>
          <a href="#" className="on-header nav-link" data-for="sec3">
            Cosa facciamo
          </a>
        </li>
        <li>
          <a href="#" className="on-header nav-link" data-for="sec4">
            Dove siamo
          </a>
        </li>
      </ul>
    </nav>
  );
}
