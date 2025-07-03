import React from "react";
import Header from "../components/common/Header";

export default function interestRate() {
  return (
    <>
      <Header title="Risk Management" />
      <div className="px-6 md:px-20 py-12 bg-[#f9f9f9] text-[#1D3E50]">
        <div className="space-y-6 max-w-6xl mx-auto text-lg leading-relaxed">
          <h1 className="text-3xl font-bold text-center mb-4">
            AMAN FINCAP LIMITED
          </h1>
          <h2 className="text-2xl font-semibold text-center mb-2">
            Risk Management Policy
          </h2>
          <p className="text-center mb-4">(Brand Name: Paisa On Salary)</p>

          <section>
            <h3 className="text-xl font-semibold mb-2">1. Preamble</h3>
            <p>
              The Board of Directors (“Board”) of Aman Fincap Limited
              (“Company”) has adopted the following policy, encompassing
              practices relating to identification, assessment, monitoring, and
              mitigation/treatment of various risks to the business.
            </p>
            <p>
              The Risk Management Policy (“Policy”) aims to minimize
              unfavourable impacts on business objectives and enhance
              stakeholder value. Furthermore, risk management practices are
              intended to sustain and enhance the Company’s long-term
              competitive advantage.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">2. Purpose</h3>
            <p>
              This Policy is framed in accordance with the Risk Management
              Framework issued by the Reserve Bank of India (RBI) via Master
              Direction DNBR. PD. 008/03.10.119/2016-17 dated September 01,
              2016, and subsequent amendments.
            </p>
            <p>
              The Policy addresses potential losses to the Company’s human
              resources and financial assets, without unnecessarily limiting
              activities that advance its mission and goals.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">3. Principles</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Risk management must create and protect value.</li>
              <li>It must be integrated into organizational processes.</li>
              <li>It supports informed decision-making.</li>
              <li>It focuses on uncertainties around achieving objectives.</li>
              <li>It must be tailored to the business context.</li>
              <li>It must be dynamic, iterative, and responsive to change.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">4. Definitions</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Board:</strong> Board of Directors of the Company
              </li>
              <li>
                <strong>Company:</strong> Aman Fincap Limited
              </li>
              <li>
                <strong>Directors:</strong> Members of the Board
              </li>
              <li>
                <strong>Policy:</strong> Risk Management Policy
              </li>
              <li>
                <strong>RBI:</strong> Reserve Bank of India
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">5. Policy Objectives</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Continuously identify organizational risks affecting business
                operations.
              </li>
              <li>
                Protect shareholder rights and values through an effective risk
                management framework.
              </li>
              <li>
                Enhance and maintain risk management tools to support strategic
                and operational decisions.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              6. Risk Identification, Measurement, and Assessment
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                The management, under Board supervision, implements the Risk
                Management Program.
              </li>
              <li>
                Risks are measured using qualitative and quantitative methods
                based on likelihood and impact.
              </li>
              <li>Risks are categorized into inherent and residual types.</li>
              <li>
                Key Risk Categories:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Strategic Risk</li>
                  <li>Operational Risk</li>
                  <li>Market Risk</li>
                  <li>Financial Risk</li>
                  <li>Credit & Concentration Risk</li>
                  <li>Regulatory & Compliance Risk</li>
                  <li>Human Resource Risk</li>
                  <li>Reputational Risk</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              7. Risk Categorization and Mitigation Factors
            </h3>

            <h4 className="font-semibold mt-4">7.1 Strategic Risk</h4>
            <p>
              <strong>Mitigation:</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>Regular strategic reviews</li>
              <li>Board/Committee consultations</li>
              <li>Directors’ & Officers’ Liability Insurance</li>
            </ul>

            <h4 className="font-semibold mt-4">7.2 Operational Risk</h4>
            <ul className="list-disc pl-6">
              <li>Document digitization and secure storage</li>
              <li>Whistle Blower Policy</li>
              <li>Periodic internal audits</li>
              <li>Robust IT infrastructure and cybersecurity</li>
              <li>Security systems (CCTV, safes, ID cards)</li>
              <li>Employee insurance coverage</li>
            </ul>

            <h4 className="font-semibold mt-4">7.3 Market Risk</h4>
            <ul className="list-disc pl-6">
              <li>Business model and competitor analysis</li>
              <li>Monitoring macro/microeconomic indicators</li>
            </ul>

            <h4 className="font-semibold mt-4">7.4 Financial Risk</h4>
            <ul className="list-disc pl-6">
              <li>
                <strong>Interest Rate Risk:</strong> Strategic loan pricing, NII
                & NIM monitoring
              </li>
              <li>
                <strong>Foreign Exchange Risk:</strong> RBI-approved hedging
                instruments, managed by designated personnel
              </li>
              <li>
                <strong>Liquidity Risk:</strong> ALM Committee reviews, lender
                monitoring, leverage ratio controls, cash flow analysis
              </li>
            </ul>

            <h4 className="font-semibold mt-4">
              7.5 Credit & Concentration Risk
            </h4>
            <p>
              <strong>Credit Risk:</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>Structured credit approval & monitoring</li>
              <li>Legal and technical due diligence</li>
              <li>Ongoing training and performance tracking</li>
            </ul>
            <p>
              <strong>Concentration Risk:</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>Diversified loan portfolio</li>
              <li>Third-party validation</li>
            </ul>

            <h4 className="font-semibold mt-4">
              7.6 Regulatory & Compliance Risk
            </h4>
            <ul className="list-disc pl-6">
              <li>Compliance Management System</li>
              <li>Quarterly internal audits</li>
              <li>CEO/CS certification to Board</li>
            </ul>

            <h4 className="font-semibold mt-4">7.7 Human Resource Risk</h4>
            <ul className="list-disc pl-6">
              <li>Fair HR policies and appraisal systems</li>
              <li>Retention initiatives</li>
              <li>ESOP programs</li>
            </ul>

            <h4 className="font-semibold mt-4">7.8 Reputational Risk</h4>
            <ul className="list-disc pl-6">
              <li>Fair Practices Code adherence</li>
              <li>Robust grievance redressal system</li>
              <li>Ethical collections process</li>
              <li>Strict vendor/employee vetting</li>
              <li>Confidentiality contracts</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">8. Responsibility</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Risk management is a shared responsibility throughout the
                Company.
              </li>
              <li>The Board reviews the framework annually.</li>
              <li>
                The Risk Management Committee advises and monitors key risks.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">9. Amendments</h3>
            <p>
              This Policy may be updated by the Board in line with evolving
              business or regulatory needs.
            </p>
          </section>

          <div className="text-sm mt-8">
            <p>
              <strong>Approved By:</strong> Board of Directors
            </p>
            <p>
              <strong>Effective From:</strong> 15 April 2025
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
