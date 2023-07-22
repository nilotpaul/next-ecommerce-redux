import dynamic from "next/dynamic";
import Footer from "@/components/essentials/Footer";
const Navbar = dynamic(() => import("@/components/essentials/Navbar"));
import BestSelling from "@/components/shop/BestSelling";
import Gurantee from "@/components/shop/Gurantee";
import LimitedOffer from "@/components/shop/LimitedOffer";
import TopBanner from "@/components/shop/TopBanner";
import "@/styles/shop.scss";
import Link from "next/link";

export default function Shop() {
  return (
    <>
      <Navbar />
      <div className="main_div">
        <div className="top_banner">
          <TopBanner />
        </div>
        <div className="gurantees">
          <Gurantee />
        </div>
        <div className="best_selling">
          <BestSelling />
        </div>
        <div className="limited_offer">
          <LimitedOffer />
        </div>
        <div className="mobile_only">
          <Link href={"/products"} prefetch>
            Explore More
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
