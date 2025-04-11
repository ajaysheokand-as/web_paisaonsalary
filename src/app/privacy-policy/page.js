import React from "react";
import Header from "../components/common/Header";
import { EMAIL } from "@/constants";

export default function PrivacyPolicy() {
  return (
    <>
      <Header title="Privacy Policy" />
      <div className="px-6 md:px-20 py-12 bg-[#f9f9f9] text-[#1D3E50]">
        <div className="space-y-6 max-w-4xl mx-auto text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
            <p>
              Welcome to Paisa On Salary. We are committed to safeguarding your
              privacy and ensuring your personal information is handled in a
              secure and responsible manner. This Privacy Policy describes how
              we collect, use, and protect your data when you use our financial
              services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              2. Information We Collect
            </h2>
            <p>
              We may collect the following types of personal data to process
              your loan application: your name, contact number, email address,
              city, pin code, monthly income, employment type, PAN card, Aadhaar
              number, bank account details, and other relevant documents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              3. How We Use Your Information
            </h2>
            <p>
              We use your information to assess eligibility, provide support,
              disburse approved loans, and comply with legal obligations. Your
              data will never be shared with any third-party marketing platforms
              without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
            <p>
              We take data security seriously and follow industry-leading
              practices including data encryption, secured server storage, and
              strict access controls to ensure your personal and financial
              information is protected at all times.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how your
              data is handled, you can contact our support team at{" "}
              <a href={EMAIL} className="text-blue-600 underline">
                {EMAIL}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
