"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";
import AdmissionForm from "../components/AdmissionForm";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
   <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-gradient-to-r from-[#1D3E50]/95 to-[#2A5B6F]/95 backdrop-blur-lg shadow-xl py-3" 
            : "bg-gradient-to-r from-[#1D3E50] to-[#4A91A4] py-4"
        }`}
>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <Image
                  src="/Rupeylo_Logo001.png"
                  alt="PaisaOnSalary Logo"
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-8">
                <Link
                  href="/"
                  className="group relative font-medium text-black-700 hover:text-[#1D3E50] transition-colors duration-300"
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4A91A4] group-hover:w-full transition-all duration-300"></span>
                </Link>
                
                <Link
                  href="/about"
                  className="group relative font-medium text-black-700 hover:text-[#1D3E50] transition-colors duration-300"
                >
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4A91A4] group-hover:w-full transition-all duration-300"></span>
                </Link>
                
                <Link
                  href="/contact"
                  className="group relative font-medium text-black-700 hover:text-[#1D3E50] transition-colors duration-300"
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4A91A4] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group relative px-6 py-3 bg-gradient-to-r from-[#1D3E50] to-[#4A91A4] text-white font-medium rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Apply Now
                    <MdArrowForward className="ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4A91A4] to-[#1D3E50] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                {/* <Link
                  href="/repayloan"
                  className="group px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-medium rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden relative"
                >
                  <span className="relative z-10">Repay Loan</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link> */}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? (
                <FiX className="w-6 h-6 text-gray-700" />
              ) : (
                <FiMenu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isOpen 
              ? "max-h-96 opacity-100 pt-4" 
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-2 pb-8 space-y-6 bg-white border-t border-gray-100">
            <div className="space-y-4">
              <Link
                href="/"
                className="block py-3 px-4 rounded-lg hover:bg-gray-50 text-gray-700 font-medium transition-colors duration-200 group"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span>Home</span>
                  <MdArrowForward className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
              
              <Link
                href="/about"
                className="block py-3 px-4 rounded-lg hover:bg-gray-50 text-gray-700 font-medium transition-colors duration-200 group"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span>About</span>
                  <MdArrowForward className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
              
              <Link
                href="/contact"
                className="block py-3 px-4 rounded-lg hover:bg-gray-50 text-gray-700 font-medium transition-colors duration-200 group"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span>Contact</span>
                  <MdArrowForward className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-100">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full py-3 px-4 bg-gradient-to-r from-[#1D3E50] to-[#4A91A4] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Apply Now</span>
                <MdArrowForward />
              </button>

              {/* <Link
                href="/repayloan"
                className="block w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                Repay Loan
              </Link> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Apply Now</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <FiX className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            <div className="p-6">
              <AdmissionForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;