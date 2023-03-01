import Link from "next/link";
export default function Navbar() {
  return (
    <div className="fixed h-12 top-0 w-screen px-4 bg-lime-800">
      <div className="flex justify-between items-center h-full">
        <div>
          <Link href="/">Home</Link>
        </div>
        <div className="flex flex-row gap-4">
          <Link href="/contatti">Contatti</Link>
          <Link href="/mappa">Mappa</Link>
        </div>
      </div>
    </div>
  );
}
