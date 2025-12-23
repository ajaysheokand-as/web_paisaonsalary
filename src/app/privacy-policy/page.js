import React from "react";
import Header from "../components/common/Header";
import { HEAD_OFFICE, EMAIL, PHONE } from "@/constants";

export default function PrivacyPolicy() {
  return (
    <>
      <Header title="Privacy Policy" />
      <div className="px-4 sm:px-6 md:px-8 py-8 md:py-12 bg-gray-900 text-gray-200 min-h-screen">
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              1. Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed">
              RupeyLo, in partnership with Sunlog Credits Pvt Ltd (a registered NBFC),
              provides financial services through our platform. This Privacy Policy
              outlines how we collect, use, share, and protect your personal information
              when you use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              2. Information We Collect
            </h2>
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">
                  Personal Information
                </h3>
                <p className="text-gray-300">
                  When you apply for a loan or use our services, we collect details such as your name,
                  address, email, phone number, date of birth, gender, and employment type.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">
                  Financial Information
                </h3>
                <p className="text-gray-300">
                  Includes bank account details, credit history, PAN card, Aadhaar number, and other
                  documents required for financial assessment.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">
                  Usage Information
                </h3>
                <p className="text-gray-300">
                  Includes technical data like IP address, browser type, device info, and browsing behavior.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">
                  Identification Documents
                </h3>
                <p className="text-gray-300">
                  We may require scanned copies of government-issued IDs for identity verification.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              3. How We Use Your Information
            </h2>
            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
              <p className="text-gray-300 leading-relaxed">
                We use your information to evaluate loan applications, verify
                identity, prevent fraud, maintain your account, and comply with
                legal obligations including the Prevention of Money Laundering
                Act, 2002. We do not share your data with third-party marketers
                without your explicit consent.
              </p>
            </div>
          </section>

          {/* Data Security */}
          <section className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              4. Data Security
            </h2>
            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
              <p className="text-gray-300 leading-relaxed">
                We implement technical and organizational safeguards including
                encryption, secure servers, and access controls to protect your
                data. However, no system is completely secure.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              5. Your Rights
            </h2>
            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
              <p className="text-gray-300 leading-relaxed">
                Subject to applicable laws, you have rights to access, correct,
                delete, or restrict the processing of your personal data. You may
                also withdraw consent for data use when no longer required,
                especially after loan closure.
              </p>
            </div>
          </section>

          {/* Data Retention and Deletion */}
          <section className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              6. Data Retention and Deletion
            </h2>
            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
              <p className="text-gray-300 leading-relaxed">
                We retain personal data as necessary for internal records and
                compliance. You can request data deletion if your credit
                obligations are settled, subject to regulatory permissions.
              </p>
            </div>
          </section>

          {/* Cookies and Tracking */}
          <section className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              7. Cookies and Tracking
            </h2>
            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
              <p className="text-gray-300 leading-relaxed">
                We use cookies to enhance your experience and track website usage.
                You may adjust cookie settings in your browser.
              </p>
            </div>
          </section>

          {/* Grievance Officer */}
          <section className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              8. Grievance Officer
            </h2>
            <div className="p-6 rounded-lg bg-gray-900/50 border border-gray-800 space-y-4">
              <p className="text-gray-300">
                For concerns regarding your data, please contact our Grievance Officer:
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a 
                      href={`tel:${PHONE}`}
                      className="text-blue-300 hover:text-blue-200 font-medium transition-colors"
                    >
                      {PHONE}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-purple-300 hover:text-purple-200 font-medium transition-colors"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Address</p>
                    <p className="text-gray-300 font-medium">
                      {HEAD_OFFICE}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Updates to Privacy Policy */}
          <section className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              9. Updates to Privacy Policy
            </h2>
            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
              <p className="text-gray-300 leading-relaxed">
                This Privacy Policy may be updated from time to time. Any changes
                will be posted on our website with the revised effective date.
              </p>
            </div>
          </section>

          {/* Footer Note */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-500 text-center">
              Last updated: {new Date().toLocaleDateString('en-IN', { 
                day: '2-digit', 
                month: 'long', 
                year: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}