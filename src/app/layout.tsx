"use client"

import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import ContactBar from "@/components/contact-bar";

export const poppinsRegular = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--pregular",
});

export const poppinsBlack = Poppins({
  weight: "900",
  style: "normal",
  subsets: ["latin"],
  variable: "--pblack"
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsRegular.variable} ${poppinsBlack.variable}`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar/>   
        <ContactBar/> 
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
