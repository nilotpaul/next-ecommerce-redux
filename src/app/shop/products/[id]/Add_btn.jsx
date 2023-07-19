"use client";

import { add } from "@/Redux/CartSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function Add_btn({ item }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = () => {
    dispatch(add(item))

    router.push("/cart")
  }

  return <button onClick={handleClick}>Buy Now</button>;
}
