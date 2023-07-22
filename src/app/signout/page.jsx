import dynamic from "next/dynamic";
const Signout = dynamic(() => import("@/components/signout/Signout"), {
  ssr: false,
});
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/providers";
import { redirect } from "next/navigation";

import "./signout.scss";

export const metadata = {
  title: {
    absolute: "Sign out?",
  },
  description: "Are you sure? This will erase your cart data.",
};

export default async function SignoutPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <div className="signout_div">
      <div className="signout_container">
        <Signout />
      </div>
    </div>
  );
}
