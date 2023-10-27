import "../Scss/global.scss";
import { Inter } from "next/font/google";

import siteFavicon from "../Images/Favicon/github.png";

// import modules
import { Suspense } from "react";

// reserved import
import Loading from "../components/Reserved Files/loading.jsx";

// component  import
import Header from "./Header";

// Bootstrap Connect
import "bootstrap/dist/css/bootstrap.min.css";
import { BootstrapConnect, Contextprovider } from "@/components/Clients.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learn Next",
  description: "Generated by create next app",
  icons: [{ rel: "icon", url: siteFavicon.src }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BootstrapConnect />
        <Contextprovider>
          <Suspense fallback={<Loading />}>
            <Header />
            {children}
          </Suspense>
        </Contextprovider>
      </body>
    </html>
  );
}