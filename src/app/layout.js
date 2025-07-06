"use client";
import { usePathname } from "next/navigation";
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

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideLayout = pathname.startsWith("/e-kyc");
  return (
    <html lang="en">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-white`}
      >
        <Head>
          <title>Paisa On Salary – Instant Salary Loans</title>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Paisa On Salary offers fast and secure short-term loans exclusively for salaried individuals. Get instant approval, 100% digital processing, and same-day disbursal—all from your mobile device."
          />
          <meta
            name="keywords"
            content="salary loan, instant loan, paisa on salary, payday loan, short term loan, online loan for salaried"
          />
          <meta name="theme-color" content="#ffffff" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://paisaonsalary.com" />
          <link rel="apple-touch-icon" href="/apple-icon.png" />
          <link rel="manifest" href="/manifest.json" />

          {/* Open Graph */}
          <meta
            property="og:title"
            content="Paisa On Salary – Instant Salary Loans"
          />
          <meta
            property="og:description"
            content="Paisa On Salary offers fast and secure short-term loans exclusively for salaried individuals. Get instant approval, 100% digital processing, and same-day disbursal—all from your mobile device."
          />
          <meta property="og:image" content="/PaisaOnSalary.jpeg" />
          <meta property="og:url" content="https://paisaonsalary.com" />
          <meta property="og:type" content="website" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Paisa On Salary – Instant Salary Loans"
          />
          <meta
            name="twitter:description"
            content="Paisa On Salary offers fast and secure short-term loans exclusively for salaried individuals. Get instant approval, 100% digital processing, and same-day disbursal—all from your mobile device."
          />
          <meta name="twitter:image" content="/PaisaOnSalary.jpeg" />

          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
                "@context": "https://schema.org",
                "@type": "FinancialService",
                "name": "Paisa On Salary",
                "url": "https://paisaonsalary.com",
                "logo": "https://paisaonsalary.com/PaisaOnSalary.jpeg",
                "description": "Get short-term salary loans instantly with 100% digital processing. Trusted by salaried professionals across India.",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "New Delhi",
                  "addressCountry": "IN"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-9588534824",
                  "contactType": "customer service"
                }
              }`,
            }}
          />
        </Head>

        <Toaster position="top-center" />
        {!hideLayout && <Navbar />}
        {children}
        {!hideLayout && <Footer />}
      </body>
    </html>
  );
}
