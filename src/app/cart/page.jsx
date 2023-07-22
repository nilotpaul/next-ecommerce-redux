"use client";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import Image from "next/image";
import ItemsQty from "@/components/cart/features/ItemsQty";
import "@/styles/cart.scss";
import { CiCircleRemove } from "react-icons/ci";
import { remove, totals } from "@/Redux/CartSlice";
import { AiFillShopping } from "react-icons/ai";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function Cart() {
  const router = useRouter();
  const dispatch = useDispatch();
  const session = useSession();
  const [onHover, setOnHover] = useState(false);

  const cart = useSelector((state) => state.cartSlice.cart);
  const totalPrice = useSelector((state) => state.cartSlice.totalPrice);

  useEffect(() => {
    dispatch(totals());
  }, [cart, totalPrice, dispatch]);

  return (
    <div className="cart_div">
      {session.status === "authenticated" ? (
        <>
          {cart?.length === 0 ? (
            <>
              <p id="empty">Cart is empty!</p>
              <Link id="shop_now" href={"/products"}>
                Shop Now
              </Link>
            </>
          ) : (
            <div className="inside_cart_container">
              <ul className="head">
                <li id="first">Product</li>
                <li id="second">Price</li>
                <li id="third">Quantity</li>
                <li id="fourth">Subtotal</li>
              </ul>
              <>
                {cart?.map((items) => {
                  return (
                    <ul key={items.id} className="children">
                      <li id="first" key={items.id}>
                        <div className="info">
                          <i onClick={() => dispatch(remove(items))}>
                            <CiCircleRemove id="rem_button" />
                          </i>
                          <Link href={`/products/${items.id}`}>
                            <Image
                              src={items.img}
                              alt={items.name}
                              width={150}
                              height={185}
                              priority
                            />
                          </Link>
                          {items.name}
                        </div>
                      </li>
                      <li id="second">₹ {items.price}</li>
                      <li id="third">
                        <ItemsQty items={items} cartCount={items.count} />
                      </li>
                      <li id="fourth">
                        ₹ {items.price.replace(",", "") * items.count}
                      </li>
                    </ul>
                  );
                })}
              </>
              <div className="calculate_totals">
                <span>
                  Discount <strong>₹ 0</strong>
                </span>
                <span>
                  Delivery <strong>₹ 0</strong>
                </span>
                <span>
                  Subtotal <strong>₹ {totalPrice}</strong>
                </span>
                <span>
                  Total <strong>₹ {totalPrice}</strong>
                </span>
              </div>
              <div className="last">
                <div className="left">
                  <label>if you have a promo code, enter it here:</label>
                  <form>
                    <input type="text" placeholder="enter promo code" />
                    <button>Apply Discount</button>
                  </form>
                </div>
                <div className="right">
                  <button id="checkout">
                    <Link href={"/checkout"}>Checkout</Link>
                  </button>
                  <button
                    onMouseEnter={() => setOnHover(!onHover)}
                    onMouseLeave={() => setOnHover(false)}
                    id="shop_btn"
                  >
                    <AiFillShopping id="shop_ico" />
                  </button>
                  <button
                    onClick={() => router.push("/")}
                    id="continue_shopping"
                    onMouseEnter={() => setOnHover(!onHover)}
                    onMouseLeave={() => setOnHover(false)}
                    className={onHover === false ? "hidden" : ""}
                  >
                    Continue shopping
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : null}
    </div>
  );
}
