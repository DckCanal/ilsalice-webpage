import Navbar from "./navbar";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="mt-12 p-4">{children}</main>
    </>
  );
}
