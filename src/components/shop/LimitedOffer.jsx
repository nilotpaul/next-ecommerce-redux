import "@/styles/limitedOffer.scss";
import Image from "next/image";
import Link from "next/link";

export default function LimitedOffer() {
  return (
    <div className="offer_inside">
      <div className="details_container">
        <div className="details">
          <h3>Limited Time Offer</h3>
          <h1>Special Edition</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            asperiores.
          </p>
          <h4>Get This Outfit At 20% Off, Use Code OFF20</h4>
          <Link href={"shop/products"}>
            <button>Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
