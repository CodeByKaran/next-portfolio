"use client"

import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import ContactBar from "@/components/contact-bar";



const poppinsRegular = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--pregular",
});

const poppinsBlack = Poppins({
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
    <html lang="en" suppressHydrationWarning  className={`${poppinsRegular.variable} ${poppinsBlack.variable}`}>
      <head>
        <title>Portfolio | Home</title>
        <meta name="Portfolio" content="my personal portfolio, coded by karan using nextjs." />
      </head>
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
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
