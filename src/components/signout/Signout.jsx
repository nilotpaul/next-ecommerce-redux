"use client";

import { signOut } from "next-auth/react";

export default function Signout() {
  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });

    window.localStorage.removeItem("cartItems")
  };

  return (
    <>
      <h3>Are you sure? This will erase your cart data.</h3>
      <button onClick={handleSignOut}>Sign Out</button>
    </>
  );
}
