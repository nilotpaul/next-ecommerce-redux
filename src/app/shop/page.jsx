import BestSelling from "@/components/shop/BestSelling";
import Gurantee from "@/components/shop/Gurantee";
import LimitedOffer from "@/components/shop/LimitedOffer";
import TopBanner from "@/components/shop/TopBanner";
import "@/styles/shop.scss"

export default async function Shop() {

  return (
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
    </div>
  );
}
