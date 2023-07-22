"use client";

import { add } from "@/Redux/CartSlice";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function Add_btn({ item }) {
  const session = useSession();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = () => {
    if (session.status === "authenticated") {
      dispatch(add(item));

      router.push("/cart");
    } else {
      router.push("/signin");
    }
  };

  return <button onClick={handleClick}>Buy Now</button>;
}
