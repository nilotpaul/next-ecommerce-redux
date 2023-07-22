"use client";

import { add } from "@/Redux/CartSlice";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function Add_to_cart({ items }) {
  const dispatch = useDispatch();
  const session = useSession();
  const router = useRouter();

  const handleAdd = () => {
    if (session.status === "authenticated") {
      dispatch(add(items));
    } else {
      router.push("/signin")
    }
  };

  return <button onClick={handleAdd}>Add to cart</button>;
}
