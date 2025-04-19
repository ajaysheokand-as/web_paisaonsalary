"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import AdmissionForm from "../components/AdmissionForm";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`transition-all duration-300 fixed w-full z-50 ${
        scrolled ? "bg-[#1D3E50] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_w_bg.png"
            alt="PaisaOnSalary Logo"
            width={120}
            height={60}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 my-auto">
          <Link
            href="/"
            className={`my-auto ${
              scrolled ? "text-white" : "text-black"
            } hover:text-[#4A91A4] transition-colors duration-200 font-medium`}
          >
            Home
          </Link>
          {/* <Link
            href="/courses"
            className={`my-auto ${
              scrolled ? "text-white" : "text-black"
            } hover:text-[#4A91A4] transition-colors duration-200 font-medium`}
          >
            Courses
          </Link> */}
          <Link
            href="/about"
            className={`my-auto ${
              scrolled ? "text-white" : "text-black"
            } hover:text-[#4A91A4] transition-colors duration-200 font-medium`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`my-auto ${
              scrolled ? "text-white" : "text-black"
            } hover:text-[#4A91A4] transition-colors duration-200 font-medium`}
          >
            Contact
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#4A91A4] text-white px-4 py-2 rounded-md hover:bg-[#3a7d8e] transition duration-300 font-medium"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1D3E50] text-center py-4 space-y-4">
          <Link
            href="/"
            className="block hover:text-[#4A91A4] transition-colors duration-200 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          {/* <Link
            href="/courses"
            className="block hover:text-[#4A91A4] transition-colors duration-200 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Courses
          </Link> */}
          <Link
            href="/about"
            className="block hover:text-[#4A91A4] transition-colors duration-200 font-medium"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block hover:text-[#4A91A4] transition-colors duration-200 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#4A91A4] text-white px-4 py-2 rounded-md hover:bg-[#3a7d8e] transition duration-300 font-medium"
          >
            Apply Now
          </button>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-white/10 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <div className="w-full mx-auto text-gray-800">
              <AdmissionForm />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
