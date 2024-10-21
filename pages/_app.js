import "@/styles/globals.css";
import "@/styles/Home.css"; // Ensure this doesn't conflict with Tailwind styles
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { AppProvider } from "@/Context/AppContext";
import LeadsPoup from "@/Components/LeadPoup";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <LeadsPoup />
        <div className="mt-[86px] flex-grow">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </AppProvider>
  );
}


// https://chatgpt.com/c/6713886e-24fc-8001-8416-6c265fbb9c33
