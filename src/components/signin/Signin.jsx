"use client";

import { useSearchParams } from "next/navigation";

import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";
import Loader from "@/additional/Loader";
import { useState } from "react";

export default function Signin() {
  const searchParams = useSearchParams();
  const URL = searchParams.get("callbackUrl");
  const callbackUrl = URL ? URL : "/";
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadings, setIsLoadings] = useState(false);

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
          setIsLoading(true);
          signIn("github", { callbackUrl });
        }}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <>
            Sign in with GitHub <FaGithub size={20} />
          </>
        )}
      </button>
      <button
        onClick={() => {
          setIsLoadings(true);
          signIn("google", { callbackUrl });
        }}
      >
        {isLoadings ? (
          <Loader />
        ) : (
          <>
            Sign in with Google <FcGoogle size={20} />
          </>
        )}
      </button>
    </div>
  );
}
