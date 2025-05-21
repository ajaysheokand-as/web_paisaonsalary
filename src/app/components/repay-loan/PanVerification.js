"use client";

import { useState } from "react";

export default function PanVerification({ onOtpReceived, loading }) {
  const [pancard, setPancard] = useState("");

  const handlePAN = (e) => {
    const value = e.target.value.toUpperCase();
    if (
      /^[A-Z]{0,5}$/.test(value.slice(0, 5)) &&
      /^[\d]{0,4}$/.test(value.slice(5, 9)) &&
      /^[A-Z]{0,1}$/.test(value.slice(9))
    ) {
      setPancard(value);
    }
  };

  const handleSubmit = () => {
    onOtpReceived(pancard);
  };

  return (
    <div className="flex flex-col">
      <p className="text-gray-600 italic mb-5">
        Please verify the accuracy of the below details before doing any
        transfer.
      </p>
      <span className="mb-2">Please enter your PAN Details</span>
      <input
        type="text"
        value={pancard}
        onChange={handlePAN}
        required
        maxLength={10}
        className="p-3 border border-gray-300 rounded-md text-base w-full max-w-md"
      />
      <div className="mt-8">
        <button
          onClick={handleSubmit}
          className="bg-indigo-400 hover:bg-indigo-500 text-white border-none rounded-md py-3 px-8 text-base cursor-pointer transition-colors"
        >
          {loading ? (
            <div className="inline-block w-5 h-5 border-3 border-white border-t-white rounded-full animate-spin"></div>
          ) : (
            "Get OTP"
          )}
        </button>
      </div>
    </div>
  );
}
