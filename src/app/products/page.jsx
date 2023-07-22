import dynamic from "next/dynamic";
import Image from "next/image";
import "@/styles/products.scss";
import Link from "next/link";
const Add_to_cart = dynamic(() => import("./Add_to_cart"), { ssr: false });
import { products } from "@/lib/Products";

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
                  width={220}
                  height={260}
                  priority
                />
              </Link>
              <h3>{items.name}</h3>

              <p>
                <strong>₹ {items.price}</strong>
              </p>
              <Add_to_cart items={items} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
