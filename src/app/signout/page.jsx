import Signout from "@/components/signout/Signout";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/providers";
import { redirect } from "next/navigation";

import "./signout.scss";

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
