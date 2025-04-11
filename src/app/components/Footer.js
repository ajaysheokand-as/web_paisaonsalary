"use client";

import { ADDRESS, EMAIL, PHONE, TITLE } from "@/constants";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGoogle, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E293B] text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Paisa On Salary
          </h2>
          <p className="text-sm">
            Paisa On Salary is a fast and secure short-term loan platform
            exclusively for salaried individuals. Get instant approvals, minimal
            documentation, and 100% digital disbursals directly to your bank
            account.
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <Link
              href="#"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaFacebook />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaGoogle />
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Connect With Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li>📍 {ADDRESS}</li>
            <li>📧 {EMAIL}</li>
            <li>📞 {PHONE}</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-conditions"
                className="hover:text-white transition"
              >
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Paisa On Salary. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
