"use client";

import { useState } from "react";
import AdmissionForm from "../AdmissionForm";

const CTABanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#020617] text-gray-100 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Need Instant Cash? We’ve Got You Covered
        </h2>

        <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
          Apply for a short-term loan with{" "}
          <span className="font-semibold text-white">RupeyLo</span> and receive
          funds directly in your bank within minutes. Secure, fast, and fully
          digital.
        </p>

        {/* <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:from-emerald-400 hover:to-emerald-500 hover:shadow-emerald-500/30 transition-all duration-300"
        >
          Get Loan Now
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
            <div className="bg-[#020617] border border-gray-700 rounded-xl shadow-2xl p-8 w-full max-w-lg relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-lg"
              >
                ✕
              </button>

              <div className="w-full mx-auto text-gray-200">
                <AdmissionForm />
              </div>
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default CTABanner;
