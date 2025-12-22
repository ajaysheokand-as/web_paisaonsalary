import React from "react";
import Header from "../components/common/Header";

export default function corporateGovernance() {
  return (
    <>
      <Header title="Corporate Governance" />
      <div className="px-6 md:px-20 py-12 bg-[#f9f9f9] text-[#1D3E50]">
        <div className="space-y-6 max-w-6xl mx-auto text-lg leading-relaxed">
          <h1 className="text-3xl font-bold text-center mb-4">
            Sunlog Credits Pvt Ltd
          </h1>
          <h2 className="text-2xl font-semibold text-center mb-2">
            Corporate Governance Policy
          </h2>
          <p className="text-center mb-4">
            Reviewed by Board of Directors | Approved on 15 April 2025
          </p>

          <section>
            <h3 className="text-xl font-semibold mb-2">Background</h3>
            <p>
              {`The Corporate Governance Policy provides the framework
              under which the Board of Directors operates. It includes the
              Company’s corporate structure, culture, policies and stakeholder
              interaction. It aligns with the Companies Act, 2013, SEBI Listing
              Regulations, and RBI's Corporate Governance guidelines for NBFCs.`}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              A. Board of Directors
            </h3>
            <p>
              The Board acts in the best interest of the Company and
              shareholders, complying with the adopted Code of Conduct. The
              Board shall include a mix of executive and non-executive directors
              with at least one independent woman director, and at least 50%
              non-executive directors.
            </p>
            <p>
              If the Chairperson is a promoter or related to a promoter, at
              least 50% of the Board shall be independent directors.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">B. Board Meetings</h3>
            <p>
              The Board shall meet at least four times annually with not more
              than 120 days between meetings. Information as per SEBI Listing
              Regulations shall be made available to Directors.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              C. Committees of the Board
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Audit Committee:</strong> At least two-thirds
                Independent Directors, meeting four times a year. Quorum
                requires at least two Independent Directors.
              </li>
              <li>
                <strong>Nomination and Remuneration Committee:</strong> Minimum
                three non-executive directors, two-thirds Independent. Meets at
                least once a year.
              </li>
              <li>
                <strong>Stakeholders Relationship Committee:</strong> Minimum
                three directors, one Independent. Chaired by a Non-executive
                Director. Meets at least once a year.
              </li>
              <li>
                <strong>Risk Management Committee:</strong> Minimum three
                members, majority Board members, at least one Independent. Meets
                twice a year.
              </li>
              <li>
                <strong>Corporate Social Responsibility Committee:</strong>{" "}
                Minimum three directors, at least one Independent. Recommends
                CSR policy to the Board.
              </li>
              <li>
                <strong>IT Strategy Committee:</strong> Chairperson must be an
                Independent Director. Meets as prescribed.
              </li>
              <li>
                <strong>Customer Service Committee:</strong> Oversees service
                quality, grievance redressal, and Ombudsman policy adherence.
              </li>
              <li>
                <strong>ALCO:</strong> Comprises top management, headed by MD,
                ensures liquidity risk strategy implementation.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">D. Vigil Mechanism</h3>
            <p>
              A whistle blower policy enables Directors/employees to report
              concerns regarding unethical behavior or fraud without fear of
              victimization. It shall be hosted on the Company’s website.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              E. Fit & Proper Criteria
            </h3>
            <p>
              The Company shall maintain a Board-approved policy for assessing
              director eligibility. Declarations, undertakings, and deeds of
              covenant must be obtained and submitted to RBI quarterly.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              F. Disclosure and Transparency
            </h3>
            <p>
              The Board shall receive regular updates on risk management,
              governance conformity, committee composition, etc. Annual
              disclosures include regulatory registrations, credit ratings,
              penalties, joint ventures, and financial exposures.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              G. Rotation of Statutory Auditors
            </h3>
            <p>
              Audit partners shall rotate every three years with a three-year
              cooling period. Complies with RBI Guidelines dated 27 April 2021.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              H. CEO/CFO Certification
            </h3>
            <p>
              The MD & CEO and CFO shall certify financials, internal controls,
              and regulatory compliance to the Board in line with SEBI and RBI
              requirements.
            </p>
          </section>

          <div className="text-sm mt-8">
            <p>
              <strong>Place:</strong> Uttar Pradesh
            </p>
            <p>
              <strong>Date:</strong> 03 July 2025
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
