import React from "react";
import Header from "../components/common/Header";
import { ADDRESS, EMAIL, PHONE } from "@/constants";

export default function PrivacyPolicy() {
  return (
    <>
      <Header title="Privacy Policy" />
      <div className="px-6 md:px-20 py-12 bg-[#f9f9f9] text-[#1D3E50]">
        <div className="space-y-6 max-w-4xl mx-auto text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
            <p>
              Paisa On Salary operates the website &nbsp;
              <a
                href="https://www.paisaonsalary.com"
                className="text-blue-600 underline"
              >
                https://www.paisaonsalary.com
              </a>
              &nbsp;in partnership with NAMAN FINLEASE PRIVATE LIMITED, a
              registered NBFC. This Privacy Policy outlines how we collect, use,
              share, and protect your personal information when you use our
              financial services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              2. Information We Collect
            </h2>
            <p>
              <strong>Personal Information:</strong> When you apply for a loan
              or use our services, we collect details such as your name,
              address, email, phone number, date of birth, gender, and
              employment type.
            </p>
            <p>
              <strong>Financial Information:</strong> Includes bank account
              details, credit history, PAN card, Aadhaar number, and other
              documents required for financial assessment.
            </p>
            <p>
              <strong>Usage Information:</strong> Includes technical data like
              IP address, browser type, device info, and browsing behavior.
            </p>
            <p>
              <strong>Identification Documents:</strong> We may require scanned
              copies of government-issued IDs for identity verification.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              3. How We Use Your Information
            </h2>
            <p>
              We use your information to evaluate loan applications, verify
              identity, prevent fraud, maintain your account, and comply with
              legal obligations including the Prevention of Money Laundering
              Act, 2002. We do not share your data with third-party marketers
              without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
            <p>
              We implement technical and organizational safeguards including
              encryption, secure servers, and access controls to protect your
              data. However, no system is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
            <p>
              Subject to applicable laws, you have rights to access, correct,
              delete, or restrict the processing of your personal data. You may
              also withdraw consent for data use when no longer required,
              especially after loan closure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              6. Data Retention and Deletion
            </h2>
            <p>
              We retain personal data as necessary for internal records and
              compliance. You can request data deletion if your credit
              obligations are settled, subject to regulatory permissions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              7. Cookies and Tracking
            </h2>
            <p>
              We use cookies to enhance your experience and track website usage.
              You may adjust cookie settings in your browser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              8. Grievance Officer
            </h2>
            <p>
              For concerns regarding your data, please contact our Grievance
              Officer:
            </p>
            <p>
              <strong>Phone:</strong> {PHONE}
              <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@paisaonsalary.com"
                className="text-blue-600 underline"
              >
                {EMAIL}
              </a>
              <br />
              <strong>Address:</strong> {ADDRESS}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              9. Updates to Privacy Policy
            </h2>
            <p>
              This Privacy Policy may be updated from time to time. Any changes
              will be posted on our website with the revised effective date.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
