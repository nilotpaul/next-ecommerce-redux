import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/providers";
import "@/components/signin/signin.scss";
import { redirect } from "next/navigation";
import Signin from "@/components/signin/Signin";

export default async function SigninPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }

  return (
    <div className="signin_div">
      <div className="signin_container">
        <Signin />
      </div>
    </div>
  );
}
