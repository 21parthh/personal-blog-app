import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Parth's Blog",
  description: "Navigating Life's Pathways with Insight",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <div className="container">
            <div className="wrapper">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
