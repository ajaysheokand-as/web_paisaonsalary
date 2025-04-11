"use client";

import { useState } from "react";
import AdmissionForm from "../AdmissionForm";

const CTABanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-gradient-to-r from-[#20464C] to-[#4D6571] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {`🚀 Need Instant Cash? We've Got You Covered!`}
        </h2>
        <p className="text-lg mb-6">
          Apply for a short-term loan through{" "}
          <span className="font-semibold">Paisa On Salary</span> and get funds
          directly in your bank within minutes. Safe, secure, and 100% digital.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#E3ECEC] text-[#1E293B] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#cfd9d9] hover:scale-105 transition transform duration-300 cursor-pointer"
        >
          Get Loan Now
        </button>
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
      </div>
    </section>
  );
};

export default CTABanner;
