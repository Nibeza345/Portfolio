import type { Metadata } from "next";
import {Sora} from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/Components/Home/Navbar/ResponsiveNav";
import Footer from "@/Components/Home/Footer/Footer";
import ScrollToTop from "@/Components/Helper/ScrollToTop";
 import AnimatedCursor from "react-animated-cursor" 

const font = Sora({
  weight:['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets :['latin']
})

export const metadata: Metadata = {
  title: "Nicole NIBEZA",
  description: "Nicole portfolio with next js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}> 
        <div className="">

        </div>
        <ResponsiveNav/>
        {children}
         </body>
         <Footer/>
         <ScrollToTop/>
    </html>
  );
}
