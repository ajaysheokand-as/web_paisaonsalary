"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { TITLE } from "@/constants";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Paisa On Salary",
//   description:
//     "Paisa On Salary offers fast and secure short-term loans exclusively for salaried individuals. Get instant approval, 100% digital processing, and same-day disbursal—all from your mobile device.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-white`}
      >
        <Head>
          <title>{TITLE}</title>
          <meta
            name={TITLE}
            content="Paisa On Salary offers fast and secure short-term loans exclusively for salaried individuals. Get instant approval, 100% digital processing, and same-day disbursal—all from your mobile device."
          />
          <link rel="icon" href="/favicon.ico" />

          {/* Open Graph */}
          <meta property="og:title" content="Paisa On Salary" />
          <meta
            property="og:description"
            content="Paisa On Salary offers fast and secure short-term loans exclusively for salaried individuals. Get instant approval, 100% digital processing, and same-day disbursal—all from your mobile device."
          />
          <meta property="og:image" content="/PaisaOnSalary.jpeg" />
          <meta property="og:url" content="https://paisaonsalary.com" />
          <meta property="og:type" content="website" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:title" content="Paisa On Salary" />
          <meta
            name="twitter:description"
            content="Paisa On Salary offers fast and secure short-term loans exclusively for salaried individuals. Get instant approval, 100% digital processing, and same-day disbursal—all from your mobile device."
          />
          <meta name="twitter:image" content="/PaisaOnSalary.jpeg" />
        </Head>

        <Toaster position="top-center" />
        {<Navbar />}
        {children}
        {<Footer />}
      </body>
    </html>
  );
}
