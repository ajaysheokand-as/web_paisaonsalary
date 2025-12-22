"use client";

import { ADDRESS, EMAIL, HEAD_OFFICE, PHONE, TITLE } from "@/constants";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGoogle, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1D3E50] to-[#4A91A4] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo and Tagline */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-2">
            RupeyLo
          </h2>
          <p className="text-gray-200">
            RupeyLo is a fast and secure short-term loan platform
            exclusively for salaried individuals. Get instant approvals, minimal
            documentation, and 100% digital disbursals directly to your bank
            account.
          </p>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4 text-xl">
              <Link
                href="#"
                target="_blank"
                className="hover:text-cyan-200 transition"
              >
                <FaInstagram />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="hover:text-cyan-200 transition"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="hover:text-cyan-200 transition"
              >
                <FaFacebook />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="hover:text-cyan-200 transition"
              >
                <FaGoogle />
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Links */}
<div className="space-y-4 md:flex md:flex-col items-center">
<h3 className="text-lg font-semibold text-white mb-2 relative -left-6">
  Quick Links
</h3>


          <ul className="space-y-3">
            <li>
              <Link href="/" className="text-gray-200 hover:text-white transition hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-200 hover:text-white transition hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-200 hover:text-white transition hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="text-gray-200 hover:text-white transition hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-conditions"
                className="text-gray-200 hover:text-white transition hover:underline"
              >
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white mb-3">
            Connect With Us
          </h3>
          <ul className="space-y-3 text-gray-200">
            <li className="space-y-1">
              <p className="font-medium text-white">Head Office:</p>
              <p>📍 {HEAD_OFFICE}</p>
            </li>
            <li>
              <p>📧 {EMAIL}</p>
            </li>
            <li>
              <p>📞 {PHONE}</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-12 text-sm text-gray-300 pt-6 border-t border-white/20">
        © {new Date().getFullYear()} RupeyLo, powered by Sunlog Credits Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;