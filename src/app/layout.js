"use client";
import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { TITLE } from "@/constants";
import Script from "next/script";
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
        <Script
          src="https://cdn-in.pagesense.io/js/60043956077/8f602df488af4951b11b89a7bb69e290.js"
          strategy="afterInteractive"
        />
        <Head>
          <title>RupeyLo – Instant Salary Loans</title>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="RupeyLo offers fast and secure short-term loans exclusively for salaried individuals. Get instant approval, 100% digital processing, and same-day disbursal—all from your mobile device."
          />
          <meta
            name="keywords"
            content="salary loan, instant loan, RupeyLo, payday loan, short term loan, online loan for salaried"
          />
          <meta name="theme-color" content="#ffffff" />
          <link rel="icon" href="/favicon1.ico" />
          <link rel="canonical" href="https://rupeylo.com" />
          <link rel="apple-touch-icon" href="/apple-icon.png" />
          <link rel="manifest" href="/manifest.json" />

          {/* Open Graph */}
          <meta
            property="og:title"
            content="RupeyLo – Instant Salary Loans"
          />
          <meta
            property="og:description"
            content="RupeyLo offers fast and secure short-term loans exclusively for salaried individuals. Get instant approval, 100% digital processing, and same-day disbursal—all from your mobile device."
          />
          <meta property="og:image" content="/favicon1.ico" />
          <meta property="og:url" content="https://RupeyLo.com" />
          <meta property="og:type" content="website" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RupeyLo – Instant Salary Loans"
          />
          <meta
            name="twitter:description"
            content="RupeyLo offers fast and secure short-term loans exclusively for salaried individuals. Get instant approval, 100% digital processing, and same-day disbursal—all from your mobile device."
          />
          <meta name="twitter:image" content="/favicon1.ico" />
          {/* <Script src="https://cdn-in.pagesense.io/js/60043956077/8f602df488af4951b11b89a7bb69e290.js"></Script> */}

          {/* <!-- Meta Pixel Code --> */}
          {/* Meta Pixel Code */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                      !function(f,b,e,v,n,t,s)
                      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                      n.queue=[];t=b.createElement(e);t.async=!0;
                      t.src=v;s=b.getElementsByTagName(e)[0];
                      s.parentNode.insertBefore(t,s)}(window, document,'script',
                      'https://connect.facebook.net/en_US/fbevents.js');
                      fbq('init', '2072012063285055');
                      fbq('track', 'PageView');
                    `,
            }}
          />

          <noscript
            dangerouslySetInnerHTML={{
              __html: `
                        <img height="1" width="1" style="display:none"
                        src="https://www.facebook.com/tr?id=2072012063285055&ev=PageView&noscript=1"
                        />
                      `,
            }}
          />
          {/* <!-- End Meta Pixel Code --> */}

          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
                "@context": "https://schema.org",
                "@type": "FinancialService",
                "name": "RupeyLo",
                "url": "https://rupeylo.com",
                "logo": "https://rupeylo.com/favicon1.ico",
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
