import Image from "next/image";
import "@/styles/product.scss";
import Add_btn from "./Add_btn";
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
            src={product.img}
            alt={product.name}
            height={550}
            width={460}
          />
        </div>
        <div className="right">
          <h1>{product.name}</h1>
          <strong>₹ {product.price}</strong>
          <p>
            <span>Product Description: </span>
            {product.desc}
          </p>
          <Add_btn item={product} />
        </div>
      </div>
    </div>
  );
}
