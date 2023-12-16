import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Layout({ children }) {
  return <div className={`${montserrat.className}`}>{children}</div>;
}
