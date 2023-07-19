"use client";

import { add } from "@/Redux/CartSlice";
import { useDispatch } from "react-redux";

export default function Add_to_cart({ items }) {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(add(items))}>Add to cart</button>;
}
