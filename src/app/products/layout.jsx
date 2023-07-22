import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/essentials/Navbar"));
const Footer = dynamic(() => import("@/components/essentials/Footer"));

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
