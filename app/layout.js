import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] });

export const metadata = {
  title: "FACITE SYNERGY",
  description: "Your trusted partner in Property Management, Roofing & Tiling, and Professional Property Survey Services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body className={poppins.className}>{children}</body>
      <Footer />
    </html>
  );
}
