import Footer from "@/components/essentials/Footer";
import Navbar from "@/components/essentials/Navbar";

export default function Layout({ children }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
