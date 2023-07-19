import { products } from "@/lib/Products";
import "@/styles/bestSelling.scss";
import Add from "@/components/shop/features/Add"
import Image from "next/image";
import Link from "next/link";


export default function BestSelling() {

  return (
    <div className="best_selling_inside">
      <h1>Best Selling Products</h1>
      <div className="products">
        {products.map((items) => {
            return (
              <div className="inside_products" key={items.id}>
                <Link href={`/shop/products/${items.id}`} className="items">
                  <div className="img">
                    <Image
                      src={items.img}
                      alt={items.name}
                      fill
                      // sizes=""
                    />
                  </div>
                  <div className="product_info">
                    <h4>{items.name}</h4>
                    <span>₹ {items.price}</span>
                  </div>
                </Link>
                <Add items={items} />
              </div>
            );
          })
          .slice(0, 4)}
      </div>
    </div>
  );
}
