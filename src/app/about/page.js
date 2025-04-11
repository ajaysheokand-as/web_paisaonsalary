"use client";
import React from "react";
import Image from "next/image";
import CTABanner from "../components/Home/CTABanner";
import { TITLE } from "@/constants";
import Header from "../components/common/Header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header
        title="About Paisa On Salary"
        des="A smart solution for salaried individuals needing instant financial
          help"
      />
      {/* <header className="text-center bg-[#1D3E50] text-white mb-10 pt-[100px] pb-12 px-4">
        <h1 className="text-4xl font-bold">About Paisa On Salary</h1>
        <p className="mt-2 text-lg">
          A smart solution for salaried individuals needing instant financial
          help
        </p>
      </header> */}

      {/* <section className="max-w-6xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-10 items-center">
        <div className="flex-1 bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
          <h2 className="text-3xl font-bold text-[#1D3E50] mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700">
            Our mission is to simplify and speed up personal financing for
            salaried professionals by providing quick, secure, and transparent
            loan services.
          </p>
        </div>
        <div className="w-[2px] h-20 bg-gray-200 lg:h-full lg:w-[2px]"></div>
        <div className="flex-1 bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
          <h2 className="text-3xl font-bold text-[#1D3E50] mb-4">Our Vision</h2>
          <p className="text-gray-700">
            {`To become India's most trusted short-term loan platform for the
            salaried workforce, offering unmatched convenience and reliability.`}
          </p>
        </div>
      </section> */}

      {/* <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-3 text-[#1D3E50]">
            Why Choose Us?
          </h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Instant Loan Approval</li>
            <li>100% Digital Process</li>
            <li>No Hidden Charges</li>
            <li>Transparent & Secure</li>
            <li>Trusted by Thousands</li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-3 text-[#1D3E50]">
            Our Team
          </h2>
          <p>
            Our team consists of finance and technology experts dedicated to
            building a frictionless borrowing experience tailored to the needs
            of working professionals.
          </p>
        </div>
      </section> */}

      <section className="max-w-6xl mx-auto px-4 pt-12">
        <h2 className="text-3xl font-bold text-[#1D3E50] text-center mb-4">
          Our Journey & Team
        </h2>
        <p className="text-gray-700 text-center mb-10 max-w-2xl mx-auto">
          {`At Paisa On Salary, we’re driven by the mission to empower salaried
          individuals with financial freedom. Our dedicated team and streamlined
          process ensure you’re supported every step of the way.`}
        </p>
      </section>

      {/* <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/img_journey.png"
            alt="Loan process visual"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/img_journey.png"
            alt="Team collaboration"
            fill
            className="object-cover"
          />
        </div>
      </section> */}

      {/* Section 1: Image Left, Content Right */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-md">
          <Image
            src="/LoanApproved.png"
            alt="Instant loan approval"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#1D3E50] mb-4">
            Instant Loan Approval
          </h2>
          <p className="text-gray-700">
            Apply and get approved for a loan within minutes. Our automated
            system ensures that you receive instant decisions based on your
            profile.
          </p>
        </div>
      </section>

      {/* Section 2: Content Left, Image Right */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#1D3E50] mb-4">
            100% Digital Process
          </h2>
          <p className="text-gray-700">
            Experience a paperless journey from start to finish. Upload your
            documents, verify your details, and get disbursal—all online.
          </p>
        </div>
        <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-md">
          <Image
            src="/DigitalProcess.png"
            alt="Digital process"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Section 3: Image Left, Content Right */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-md">
          <Image
            src="/img_journey.png"
            alt="Secure and trusted"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#1D3E50] mb-4">
            Secure & Trusted
          </h2>
          <p className="text-gray-700">
            Your data is safe with us. We use industry-grade encryption and
            privacy standards to keep your information secure at all times.
          </p>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
