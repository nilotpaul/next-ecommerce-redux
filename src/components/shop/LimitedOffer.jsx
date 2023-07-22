import "@/styles/limitedOffer.scss";
import Image from "next/image";
import Link from "next/link";

export default function LimitedOffer() {
  return (
    <div className="offer_inside">
      <Image
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        src={"/offer-banner.png"}
        alt="Limited-Time-Offer"
        fill
        quality={100}
        sizes="85vw"
      />
      <div className="details_container">
        <div className="details">
          <h3>Limited Time Offer</h3>
          <h1>Special Edition</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            asperiores.
          </p>
          <h4>Get This Outfit At 20% Off, Use Code OFF20</h4>
          <Link prefetch href={"/products"}>
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
}
