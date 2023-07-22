import dynamic from "next/dynamic";
import { products } from "@/lib/Products";
import "@/styles/bestSelling.scss";
import Image from "next/image";
import Link from "next/link";
const Add_to_cart = dynamic(() => import("@/app/products/Add_to_cart"), {
  ssr: false,
});

export default function BestSelling() {
  return (
    <div className="best_selling_inside">
      <h1>Best Selling Products</h1>
      <div className="products">
        {products
          .map((items) => {
            return (
              <div className="inside_products" key={items.id}>
                <Link prefetch href={`/products/${items.id}`} className="items">
                  <div className="img">
                    <Image
                      style={{ objectFit: "cover" }}
                      src={items.img}
                      alt={items.name}
                      fill
                      sizes="(max-width: 640px) 220px, (max-width: 768px) 320px, 475px"
                    />
                  </div>
                  <div className="product_info">
                    <h4>{items.name}</h4>
                    <span>₹ {items.price}</span>
                  </div>
                </Link>
                <Add_to_cart items={items} key={items.id} />
              </div>
            );
          })
          .slice(0, 4)}
      </div>
    </div>
  );
}
