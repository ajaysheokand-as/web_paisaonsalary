"use client";
import { TITLE } from "@/constants";
import AdmissionForm from "../AdmissionForm";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden min-h-screen flex items-center">
       <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
      >
        <source src="/background2.mp4" type="video/mp4" />
      </video>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <span className="flex h-2 w-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold">Instant Disbursal</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Salary-Based
              </span>{" "}
              Loans in Minutes
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              {`${TITLE} provides instant short-term loans exclusively for salaried professionals. 100% digital process with minimal documentation and lightning-fast approval.`}
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-lg">⚡</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Instant Approval</h3>
                  <p className="text-sm text-gray-600">Get approved in minutes</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 text-lg">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">100% Digital</h3>
                  <p className="text-sm text-gray-600">No paperwork required</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 text-lg">💼</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Salaried Only</h3>
                  <p className="text-sm text-gray-600">Exclusive for professionals</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 text-lg">💰</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Flexible Amount</h3>
                  <p className="text-sm text-gray-600">Borrow as per your needs</p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xs">✓</span>
                </div>
                <span>Secure & Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xs">✓</span>
                </div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-1">
              <AdmissionForm />
            </div>
          </div>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;