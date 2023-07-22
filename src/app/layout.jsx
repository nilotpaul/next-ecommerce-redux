import "./globals.css";
import { Open_Sans } from "next/font/google";
import { ReduxProvider } from "@/Redux/Provider";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "@/context/AuthProvider";

const open_sans = Open_Sans({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata = {
  title: {
    default: "NexusMart",
    template: `%s | NexusMart`
  },
  description: "Clothing brand that provides best quality products"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <ReduxProvider>
          <ToastContainer />
          <AuthProvider>
            <main>{children}</main>
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
