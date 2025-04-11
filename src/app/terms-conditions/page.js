import React from "react";
import Header from "../components/common/Header";

const TermsConditionsPage = () => {
  return (
    <>
      <Header title="Terms and Conditions" />
      <div className="px-6 md:px-20 py-12 bg-[#f9f9f9] text-[#1D3E50]">
        <div className="space-y-6 max-w-4xl mx-auto text-lg leading-relaxed">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-base leading-relaxed">
              By accessing and using the Paisa On Salary platform, you agree to
              be bound by the terms and conditions outlined herein. These terms
              govern your use of our loan services and associated features.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              2. Intellectual Property
            </h2>
            <p className="text-base leading-relaxed">
              All content, trademarks, graphics, designs, and materials on this
              site are the intellectual property of Paisa On Salary and are
              protected by applicable copyright and trademark laws.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              3. User Responsibilities
            </h2>
            <p className="text-base leading-relaxed">
              You are responsible for maintaining the confidentiality of your
              account credentials and agree to accept responsibility for all
              activities that occur under your account. Misuse or unauthorized
              use of your account may result in suspension or legal action.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              4. Limitation of Liability
            </h2>
            <p className="text-base leading-relaxed">
              Paisa On Salary is not liable for any direct or indirect damages
              arising from the use or inability to use our platform or services,
              including but not limited to financial loss, data breaches, or
              technical disruptions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Changes to Terms</h2>
            <p className="text-base leading-relaxed">
              Paisa On Salary reserves the right to update or modify these terms
              at any time without prior notice. Continued use of the platform
              after such changes signifies your acceptance of the updated terms.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsConditionsPage;
