import { Montserrat } from "next/font/google";

import Navbar from "./navbar";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      <main className={montserrat.className}>{children}</main>
    </>
  );
}
