"use client";

import { useState } from "react";

export default function LoanDetails({
  repaymentData,
  onPaymentClick,
  loading,
}) {
  const [paymentAmount, setPaymentAmount] = useState("");

  const handlePaymentAmountChange = (e) => {
    let value = e.target.value;

    if (value.length === 1 && value === "0") {
      return;
    }

    const regex = /^(?!0(\.\d+)?)(\d*\.?\d*)$/;
    if (regex.test(value) || value === "") {
      setPaymentAmount(value);
    }
  };

  const handleProceedToPay = () => {
    onPaymentClick(paymentAmount);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-indigo-400 text-white p-5 text-center">
        <h2 className="m-0 text-2xl">Loan Repayment Details</h2>
      </div>

      <div className="p-5">
        <div className="flex justify-between py-3 border-b border-gray-200">
          <span className="font-medium text-gray-600">Loan Number:</span>
          <span className="font-semibold">{repaymentData.loan_no}</span>
        </div>
        <div className="flex justify-between py-3 border-b border-gray-200">
          <span className="font-medium text-gray-600">Disbursal Date:</span>
          <span className="font-semibold">{repaymentData.disbursal_date}</span>
        </div>
        <div className="flex justify-between py-3 border-b border-gray-200">
          <span className="font-medium text-gray-600">Repayment Date:</span>
          <span className="font-semibold">{repaymentData.repayment_date}</span>
        </div>
        <div className="flex justify-between py-3 border-b border-gray-200">
          <span className="font-medium text-gray-600">Repayment Amount:</span>
          <span className="font-semibold">
            ₹{repaymentData.repayment_amount.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between py-3 border-b border-gray-200">
          <span className="font-medium text-gray-600">Loan Amount:</span>
          <span className="font-semibold">
            ₹{repaymentData.loan_recommended.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between py-3 border-b border-gray-200">
          <span className="font-medium text-gray-600">Real Interest:</span>
          <span className="font-semibold">
            ₹{repaymentData.real_interest.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between py-3 border-b border-gray-200">
          <span className="font-medium text-gray-600">
            Repayment With Interest:
          </span>
          <span className="font-semibold">
            ₹{repaymentData.total_due_amount.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between p-4 mt-2.5 bg-gray-50 rounded-md">
          <span className="font-medium text-gray-600">Total Due Amount:</span>
          <span className="font-semibold">
            ₹{repaymentData.total_due_amount.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between mt-5">
          <span className="font-medium text-gray-600">Amount To Pay</span>
          <input
            type="text"
            value={paymentAmount}
            onChange={handlePaymentAmountChange}
            placeholder="Enter payment amount"
            className="p-3 border border-gray-300 rounded-md text-base w-full"
          />
        </div>
      </div>

      <div className="p-5 text-center">
        <button
          className="bg-indigo-400 hover:bg-indigo-500 text-white border-none rounded-md py-3 px-8 text-base cursor-pointer transition-colors w-full max-w-xs"
          onClick={handleProceedToPay}
        >
          {loading ? (
            <div className="inline-block w-5 h-5 border-3 border-white border-t-white rounded-full animate-spin"></div>
          ) : (
            "Proceed to Pay"
          )}
        </button>
      </div>
    </div>
  );
}
