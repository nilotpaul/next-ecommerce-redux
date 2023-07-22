import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/essentials/Footer"));
const Navbar = dynamic(() => import("@/components/essentials/Navbar"));

export default function Layout({ children }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
