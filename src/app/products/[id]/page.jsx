import dynamic from "next/dynamic";
import Image from "next/image";
import "@/styles/product.scss";
const Add_btn = dynamic(() => import("./Add_btn"), { ssr: false });
import { products } from "@/lib/Products";

export const dynamicParams = false;

export function generateStaticParams() {
  const data = products;

  return data?.map((items) => ({
    id: items.id.toString(),
  }));
}

export default function Product({ params: { id } }) {
  const product = products[id - 1];

  return (
    <div className="individual_product">
      <div className="product_container">
        <div className="left">
          <Image
            id="prod_img"
            src={product.img}
            alt={product.name}
            height={550}
            width={460}
            priority
          />
        </div>
        <div className="right">
          <h1>{product.name}</h1>
          <strong>₹ {product.price}</strong>
          <Add_btn item={product} />
          <p>
            <span>Product Description: </span>
            {product.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
