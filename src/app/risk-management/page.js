import React from "react";
import Header from "../components/common/Header";

export default function riskManagement() {
  return (
    <>
      <Header title="Risk Management" />
      <div className="px-6 md:px-20 py-12 bg-[#f9f9f9] text-[#1D3E50]">
        <div className="space-y-6 max-w-6xl mx-auto text-lg leading-relaxed">
          <h1 className="text-3xl font-bold text-center mb-4">
            Sunlog Credits Pvt Ltd
          </h1>
          <h2 className="text-2xl font-semibold text-center mb-2">
            Risk Management Policy
          </h2>
          <p className="text-center mb-4">(Brand Name: RupeyLo)</p>

          <section>
            <h3 className="text-xl font-semibold mb-2">1. Preamble</h3>
            <p>
              The Board of Directors (“Board”) of Sunlog Credits Pvt Ltd
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
              It addresses potential losses to the Company’s human resources and
              financial assets, without unnecessarily limiting activities that
              advance its mission and goals. Effective systems have been
              introduced to manage various risks critical to the Company’s
              growth.
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
                <strong>Company:</strong> Sunlog Credits Pvt Ltd
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
                Management, under Board supervision, implements the Risk
                Management Program.
              </li>
              <li>
                Risks are measured using qualitative and quantitative methods.
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
              <strong>Risk:</strong> Poor responsiveness to market changes or
              flawed strategic decisions.
            </p>
            <p>
              <strong>Mitigation:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Regular strategic reviews.</li>
              <li>Board/Committee consultations.</li>
              <li>Directors’ & Officers’ Liability Insurance.</li>
            </ul>

            <h4 className="font-semibold mt-4">7.2 Operational Risk</h4>
            <p>
              <strong>Risk:</strong> Technology failure, fraud, security, and
              human error.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Document digitization and secure storage.</li>
              <li>Whistle Blower Policy.</li>
              <li>Periodic internal audits.</li>
              <li>Robust IT infrastructure and cybersecurity.</li>
              <li>Security systems (CCTV, safes, ID cards).</li>
              <li>Employee insurance coverage.</li>
            </ul>

            <h4 className="font-semibold mt-4">7.3 Market Risk</h4>
            <p>
              <strong>Risk:</strong> Unanticipated market changes affecting
              investments.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Business model and competitor analysis.</li>
              <li>Monitoring economic indicators.</li>
            </ul>

            <h4 className="font-semibold mt-4">7.4 Financial Risk</h4>
            <h5 className="mt-2 font-medium">Interest Rate Risk</h5>
            <ul className="list-disc pl-6 space-y-1">
              <li>Strategic loan pricing.</li>
              <li>Monitoring NII and NIM.</li>
            </ul>
            <h5 className="mt-2 font-medium">Foreign Exchange Risk</h5>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use of RBI-approved hedging tools.</li>
              <li>Dedicated forex management personnel.</li>
            </ul>
            <h5 className="mt-2 font-medium">Liquidity Risk</h5>
            <ul className="list-disc pl-6 space-y-1">
              <li>ALM Committee oversight.</li>
              <li>Monitoring lender exposures.</li>
              <li>Maintaining conservative leverage and capital adequacy.</li>
              <li>Use of cash flow mismatch analysis.</li>
            </ul>

            <h4 className="font-semibold mt-4">
              7.5 Credit and Concentration Risk
            </h4>
            <p>
              <strong>Credit Risk Mitigation:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Structured credit approval & monitoring.</li>
              <li>Due diligence (legal/technical).</li>
              <li>Staff training and performance tracking.</li>
            </ul>
            <p>
              <strong>Concentration Risk Mitigation:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Diversified lending portfolio.</li>
              <li>Third-party verification.</li>
            </ul>

            <h4 className="font-semibold mt-4">
              7.6 Regulatory and Compliance Risk
            </h4>
            <p>
              <strong>Risk:</strong> Non-compliance with statutory norms.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Compliance Management System.</li>
              <li>Quarterly audits.</li>
              <li>CEO/CS certificates to Board.</li>
            </ul>

            <h4 className="font-semibold mt-4">7.7 Human Resource Risk</h4>
            <p>
              <strong>Risk:</strong> Inability to attract or retain talent.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Fair HR policies and appraisals.</li>
              <li>Talent retention initiatives.</li>
              <li>ESOP schemes.</li>
            </ul>

            <h4 className="font-semibold mt-4">7.8 Reputational Risk</h4>
            <p>
              <strong>Risk:</strong> Negative perception from misconduct or poor
              service.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Fair Practices Code compliance.</li>
              <li>Grievance redressal system.</li>
              <li>Ethical recovery practices.</li>
              <li>Strict employee/vendor background checks.</li>
              <li>Confidentiality agreements.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">8. Responsibility</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Risk management is shared across the organization.</li>
              <li>The Board reviews the risk framework annually.</li>
              <li>
                The Risk Management Committee guides management on risk matters.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">9. Amendments</h3>
            <p>
              This Policy may be amended by the Board of Directors to reflect
              evolving business requirements or changes in regulatory
              directives.
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
