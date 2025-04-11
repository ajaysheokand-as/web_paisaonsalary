"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What is Paisa On Salary?",
    answer:
      "Paisa On Salary is a short-term loan service designed specifically for salaried individuals who need instant financial assistance with minimal documentation.",
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
    question: "Is my personal data safe with Paisa On Salary?",
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
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1D3E50] mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.01]"
            >
              <button
                className="w-full text-left px-6 py-4 font-medium text-[#1D3E50] flex justify-between items-center hover:text-blue-600 cursor-pointer"
                onClick={() => toggle(index)}
              >
                {faq.question}
                <span className="ml-2">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
