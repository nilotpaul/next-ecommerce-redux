"use client";

import { useSession } from "next-auth/react";

import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, totals } from "@/Redux/CartSlice";

import { FaShoppingCart } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";

import "@/styles/navbar.scss";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const data = useSession();

  const cart = useSelector((state) => state.cartSlice.cart);
  const totalCount = useSelector((state) => state.cartSlice.totalCount);
  const dispatch = useDispatch();
  const [openDrop, setOpenDrop] = useState(false);
  const [profileDrop, setProfileDrop] = useState();
  const cartIco = useRef();
  const cartRef = useRef();
  const profileIco = useRef();
  const profileRef = useRef();

  useEffect(() => {
    if (data.status === "authenticated") {
      window.addEventListener("mousedown", (e) => {
        !cartIco.current.contains(e.target) && 
        !cartRef.current.contains(e.target)
          ? setOpenDrop(false)
          : null;
      });
    }
  }, [openDrop, data]);

  useEffect(() => {
    if (data.status === "authenticated") {
      window.addEventListener("mousedown", (e) => {
        !profileIco.current.contains(e.target) &&
        !profileRef.current.contains(e.target)
          ? setProfileDrop(false)
          : null;
      });
    }
  }, [profileDrop, data]);

  useEffect(() => {
    if (data.status === "authenticated") {
      dispatch(totals());
    }
  });

  return (
    <nav>
      <div className="nav_container">
        <div className="left_side">
          <Link href={"/"} id="brandname">
            <h2>NexusMart</h2>
          </Link>
        </div>
        {data.status === "authenticated" ? (
          <div className="items">
            <button ref={cartIco} onClick={() => setOpenDrop(!openDrop)}>
              <span>{totalCount}</span>
              <FaShoppingCart id="shop_ico" />
            </button>

            <div
              ref={cartRef}
              className={`cart_drop ${openDrop ? "" : "hidden"}`}
            >
              {cart?.length === 0 ? (
                <p>Cart is empty!</p>
              ) : (
                <>
                  {cart?.map((items) => {
                    return (
                      <div key={items.id} className="cart_items_div">
                        <i onClick={() => dispatch(remove(items))}>
                          <CiCircleRemove id="rem_ico" />
                        </i>
                        <Link href={`/shop/products/${items.id}`}>
                          <div className="first_cart">
                            <span>{items.count}</span>
                            <Image
                              src={items.img}
                              alt={items.name}
                              height={70}
                              width={60}
                            />
                          </div>
                        </Link>
                        <h2>{items.name}</h2>
                      </div>
                    );
                  })}
                  <Link id="cart_btn" href={"/cart"}>
                    <button onClick={() => setOpenDrop(false)} id="go_to_cart">
                      CHECKOUT
                    </button>
                  </Link>
                </>
              )}
            </div>
            <button
              ref={profileIco}
              onClick={() => setProfileDrop(!profileDrop)}
            >
              <Image
                src={data?.data.user.image}
                alt={data?.data.user.name}
                height={35}
                width={35}
                id="profile_ico"
              />
            </button>
            <div
              ref={profileRef}
              className={`profile_drop ${profileDrop ? "" : "hidden"}`}
            >
              <span>{data.data.user.name}</span>
              <span>{data.data.user.email}</span>
              <Link href={"/signout"}>
                <span>Logout</span>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
