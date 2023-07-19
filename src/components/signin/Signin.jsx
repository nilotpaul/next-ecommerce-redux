"use client";

import { useSearchParams } from "next/navigation";

import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";

export default function Signin() {
  const searchParams = useSearchParams();
  const URL = searchParams.get("callbackUrl")
  const callbackUrl = URL ? URL : "/"

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <button
        onClick={() => {
          signIn("github", { callbackUrl });
        }}
      >
        Sign in with GitHub
        <FaGithub size={20} />
      </button>
      <button
        onClick={() => {
          signIn("google", { callbackUrl });
        }}
      >
        Sign in with Google
        <FcGoogle size={20} />
      </button>
    </div>
  );
}
