import React from "react";
import Header from "../components/common/Header";

const TermsConditionsPage = () => {
  return (
    <>
      <Header title="Terms and Conditions" />
      <div className="px-4 sm:px-6 md:px-8 py-8 md:py-12 bg-gray-900 text-gray-200 min-h-screen">
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              1. Introduction
            </h2>
            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
              <p className="text-gray-300 leading-relaxed">
                By accessing and using the RupeyLo platform, you agree to
                be bound by the terms and conditions outlined herein. These terms
                govern your use of our loan services and associated features.
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              2. Intellectual Property
            </h2>
            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
              <p className="text-gray-300 leading-relaxed">
                All content, trademarks, graphics, designs, and materials on this
                site are the intellectual property of RupeyLo and are
                protected by applicable copyright and trademark laws.
              </p>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              3. User Responsibilities
            </h2>
            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
              <p className="text-gray-300 leading-relaxed">
                You are responsible for maintaining the confidentiality of your
                account credentials and agree to accept responsibility for all
                activities that occur under your account. Misuse or unauthorized
                use of your account may result in suspension or legal action.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              4. Limitation of Liability
            </h2>
            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
              <p className="text-gray-300 leading-relaxed">
                RupeyLo is not liable for any direct or indirect damages
                arising from the use or inability to use our platform or services,
                including but not limited to financial loss, data breaches, or
                technical disruptions.
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              5. Changes to Terms
            </h2>
            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
              <p className="text-gray-300 leading-relaxed">
                RupeyLo reserves the right to update or modify these terms
                at any time without prior notice. Continued use of the platform
                after such changes signifies your acceptance of the updated terms.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              6. Governing Law
            </h2>
            <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
              <p className="text-gray-300 leading-relaxed">
                These terms and conditions are governed by and construed in accordance 
                with the laws of India. Any disputes arising under or in connection 
                with these terms shall be subject to the exclusive jurisdiction of 
                the courts located in India.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              7. Contact Information
            </h2>
            <div className="p-6 rounded-lg bg-gray-900/50 border border-gray-800">
              <div className="space-y-4">
                <p className="text-gray-300">
                  For any questions or concerns regarding these terms and conditions, 
                  please contact us through the designated channels provided on our platform.
                </p>
                
                <div className="mt-6 p-4 rounded-lg bg-gray-800/30 border border-gray-700">
                  <h3 className="text-lg font-semibold text-blue-300 mb-3">
                    Available Support Channels:
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <span>Customer Support Portal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      <span>Email Support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span>Help Center Documentation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <span>Live Chat (Business Hours)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

         
        </div>
      </div>
    </>
  );
};

export default TermsConditionsPage;