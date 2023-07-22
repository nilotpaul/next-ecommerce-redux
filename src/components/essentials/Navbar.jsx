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
    window.addEventListener("mousedown", (e) => {
      if (
        !cartIco.current?.contains(e.target) &&
        !cartRef.current?.contains(e.target)
      ) {
        setOpenDrop(false);
      }
    });
  }, [openDrop]);

  useEffect(() => {
    window.addEventListener("mousedown", (e) => {
      if (
        !profileIco.current?.contains(e.target) &&
        !profileRef.current?.contains(e.target)
      ) {
        setProfileDrop(false);
      }
    });
  }, [profileDrop]);

  useEffect(() => {
    dispatch(totals());
  });

  return (
    <nav>
      <div className="nav_container">
        <div className="left_side">
          <Link href={"/"} id="brandname">
            <Image
              id="logo"
              src="/logo.png"
              alt="NexusMart"
              height={37}
              width={180}
              priority
            />
          </Link>
        </div>
        {data.status === "authenticated" ? (
          <div className="items">
            <button
              id="cart_btn"
              ref={cartIco}
              onClick={() => setOpenDrop(!openDrop)}
            >
              <span>{totalCount}</span>
              <FaShoppingCart id="shop_ico" />
            </button>
            <Link id="mobile_cart" href={"/cart"}>
              <span id="moblie_count">{totalCount}</span>
              <FaShoppingCart id="mobile_ico" />
            </Link>

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
                        <Link prefetch href={`/products/${items.id}`}>
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
                  <Link prefetch id="cart_btn" href={"/cart"}>
                    <button onClick={() => setOpenDrop(false)} id="go_to_cart">
                      GO TO CART
                    </button>
                  </Link>
                </>
              )}
            </div>
            <button
              id="profile_btn"
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
              <span>{data?.data.user.name}</span>
              <span>{data?.data.user.email}</span>
              <Link href={"/signout"}>
                <span>Logout</span>
              </Link>
            </div>
          </div>
        ) : (
          <Link href={"/signin"} id="login">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
