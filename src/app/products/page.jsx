import dynamic from "next/dynamic";
import Image from "next/image";
import "@/styles/products.scss";
import Link from "next/link";
const Add_to_cart = dynamic(() => import("./Add_to_cart"));
import { products } from "@/lib/Products";

export const metadata = {
  title: "Products",
  description: "Find the best product from our collection",
};

export default function Products() {
  return (
    <div className="all_products">
      <div className="head">
        <h1>Products</h1>
      </div>
      <div className="all_products_container">
        {products.map((items) => {
          return (
            <div key={items.id} className="items_div">
              <Link prefetch href={`products/${items.id}`}>
                <Image
                  src={items.img}
                  alt={items.name}
                  width={260}
                  height={300}
                  priority
                />
              </Link>
              <h3>{items.name}</h3>

              <p>
                <span>₹ {items.price}</span>
              </p>
              <Add_to_cart items={items} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
