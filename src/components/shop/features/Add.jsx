"use client";

import { add } from "@/Redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import "../styles/add.scss"

export default function Add({ items }) {
  const currCartItems = useSelector((state) => state.cartSlice.cart);

  const dispatch = useDispatch();

  const addToCart = (items) => {
    dispatch(add(items));
  };

  const check = currCartItems?.find((elem) => elem.id === items.id);

  return (
    <>{check ? <button id="btn_disabled" disabled>In cart</button> : 
    <button id="add" onClick={() => addToCart(items)}>
      Add to cart     
    </button>}</>
  );
}