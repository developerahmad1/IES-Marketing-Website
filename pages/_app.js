import "@/styles/globals.css";
import "@/styles/Home.css"; 
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { AppProvider } from "@/Context/AppContext";
import LeadsPoup from "@/Components/LeadPoup";
import Posts from "@/Components/Posts";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [bikeKey, setBikeKey] = useState(0);

  // Reset the Bike component key on each route change to retrigger animation
  useEffect(() => {
    setBikeKey((prev) => prev + 1);
  }, [router.pathname]);

  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <LeadsPoup />
        <div className="mt-[86px] flex-grow relative">
          <Component {...pageProps} />
          <Posts />
        </div>
        <Footer />
      </div>
    </AppProvider>
  );
}




// https://chatgpt.com/c/6713886e-24fc-8001-8416-6c265fbb9c33
