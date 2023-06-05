import { Lato } from "next/font/google";
import { Transition } from "@headlessui/react";
import { TransitionAbove, ElementWithTransition } from "./transitions";
import { useEffect } from "react";
import Logo from "../../../images/icons/logo - white alpha.png";
import Image from "next/image";

const lato = Lato({ subsets: ["latin"], weight: "300" });
export default function Header() {
  useEffect(() => {
    // use an IntersectionObserver, to trigger show={true} in Transition's child component
  }, []);
  return (
    <header className={`${lato.className} h-screen flex flex-col-reverse`}>
      <ElementWithTransition>
        {/*
        ml-2 mb-2
        */}
        <div className="relative text-white ml-4 mr-4 lg:mb-4 mb-16 flex flex-col md:flex-row-reverse justify-between">
          <Image src={Logo} width={80} />
          <div>
            <h1 className="font-semibold md:text-4xl text-3xl tracking-wide">
              il Salice
            </h1>
            <h2 className="font-normal md:text-3xl text-xl tracking-wide">
              osteopatia e massofisioterapia
            </h2>
          </div>
        </div>
      </ElementWithTransition>
    </header>
  );
}
