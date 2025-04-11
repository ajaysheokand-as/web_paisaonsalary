"use client";
import { TITLE } from "@/constants";
import AdmissionForm from "../AdmissionForm";

const HeroSection = () => {
  return (
    <section className="relative bg-[#F5F7FA] overflow-hidden min-h-screen flex items-center pt-24 pb-8 md:pt-0 md:pb-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
      >
        <source src="/background2.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 min-h-full">
        {/* Left Side - Highlights */}
        <div className="lg:w-2/3 text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1D3E50]">
            Instant Salary-Based Loans, Anytime You Need!
          </h1>
          <p className="text-lg text-gray-700 font-semibold leading-relaxed pr-4">
            {`${TITLE} provides quick and reliable short-term loans tailored for salaried employees. Enjoy a fully digital process with minimal documentation and instant disbursal—whenever you need financial support.`}
          </p>
          <ul className="list-disc text-gray-700 space-y-2 ml-6">
            <li>Instant approval in just a few minutes</li>
            <li>No paperwork—100% online process</li>
            <li>Exclusively for salaried professionals</li>
          </ul>
        </div>

        {/* Right Side - Admission Form */}
        <div className="lg:w-1/3 w-full mt-8 lg:mt-0">
          <AdmissionForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
