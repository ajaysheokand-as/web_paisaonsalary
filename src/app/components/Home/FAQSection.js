"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What is RupeyLo?",
    answer:
      "RupeyLo is a short-term loan service designed specifically for salaried individuals who need instant financial assistance with minimal documentation.",
  },
  {
    question: "How quickly can I get a loan?",
    answer:
      "Loan approvals are processed within minutes. Once approved, the amount is disbursed directly to your bank account, often within the same day.",
  },
  {
    question: "What documents are required for applying?",
    answer:
      "We require basic documents like a valid ID proof, your latest salary slip, and a bank statement to verify your salary account.",
  },
  {
    question: "Who is eligible to apply for a loan?",
    answer:
      "Any salaried individual between the age of 21–58 with a stable monthly income and an active salary account is eligible to apply.",
  },
  {
    question: "Is the loan process completely online?",
    answer:
      "Yes, the entire process from application to disbursal is 100% digital, ensuring convenience and speed without any physical paperwork.",
  },
  {
    question: "What is the interest rate on the loan?",
    answer:
      "Our interest rate ranges from 0.25% to 1% per day depending on your profile, tenure, and loan amount.",
  },
  {
    question: "What is the maximum loan amount I can borrow?",
    answer:
      "You can borrow any amount between ₹5,000 to ₹100,000, subject to your eligibility and income profile.",
  },
  {
    question: "Is my personal data safe with RupeyLo?",
    answer:
      "Absolutely. We follow industry-standard encryption protocols and never share your information with third parties without consent.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5"
            >
              <button
                className="w-full text-left px-6 py-5 font-semibold text-gray-100 flex justify-between items-center hover:text-white cursor-pointer group"
                onClick={() => toggle(index)}
              >
                <span className="pr-4">{faq.question}</span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <span className="text-lg font-light text-gray-300 group-hover:text-cyan-400">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5">
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-5"></div>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Didn't find what you were looking for?
          </p>
          <button className="px-8 py-3 bg-cyan-600 text-white font-medium rounded-lg hover:bg-cyan-700 transition-colors duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            Contact Our Support Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;