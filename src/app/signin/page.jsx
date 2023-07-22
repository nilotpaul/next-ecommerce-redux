import dynamic from "next/dynamic";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/providers";
import "@/components/signin/signin.scss";
import { redirect } from "next/navigation";
const Signin = dynamic(() => import("@/components/signin/Signin"), {
  ssr: false,
});

export const metadata = {
  title: {
    absolute: "Sign in to NexusMart",
  },
};

export default async function SigninPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }

  return (
    <div className="signin_div">
      <div className="signin_container">
        <Signin session={session} />
      </div>
    </div>
  );
}
