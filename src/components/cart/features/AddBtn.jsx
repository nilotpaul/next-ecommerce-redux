"use client";

import { add } from "@/Redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import "../styles/addToCart.scss"

export default function AddBtn({ items }) {
  const currCartItems = useSelector((state) => state.cartSlice.cart);

  const dispatch = useDispatch();

  const addToCart = (items) => {
    dispatch(add(items));
  };

  const check = currCartItems?.find((elem) => elem.id === items.id);

  return (
    <>{check ? <></> : 
    <button id="add_to_cart" onClick={() => addToCart(items)}>
      Add to cart     
    </button>}</>
  );
}
