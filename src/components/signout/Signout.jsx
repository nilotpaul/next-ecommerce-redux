"use client";

import Loader from "@/additional/Loader";
import { signOut } from "next-auth/react";
import { useState } from "react";

export default function Signout() {
  const handleSignOut = () => {
    setIsLoading(true);
    signOut({ callbackUrl: "/" });

    window.localStorage.removeItem("cartItems");
  };

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <h3>Are you sure? This will erase your cart data.</h3>
      <button onClick={handleSignOut}>
        {isLoading ? <Loader /> : <>Sign Out</>}
      </button>
    </>
  );
}
