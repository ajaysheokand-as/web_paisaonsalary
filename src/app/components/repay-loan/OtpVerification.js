"use client";

import { useState } from "react";

export default function OtpVerification({ pancard, onOtpVerified, loading }) {
  const [otp, setOtp] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleOTP = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 4) {
      setOtp(value);
    }
  };

  const handleSubmit = () => {
    onOtpVerified(otp);
  };

  return (
    <div className="flex flex-col">
      <p className="font-medium mb-5">PAN NUMBER : {pancard}</p>
      <input
        type="text"
        placeholder="Please enter the OTP received"
        value={otp}
        onChange={handleOTP}
        maxLength={4}
        className="p-3 border border-gray-300 rounded-md text-base w-full max-w-md"
      />
      <p className="flex items-start mt-5 ml-2.5">
        <input
          type="checkbox"
          className="mr-2.5 mt-1"
          checked={acceptTerms}
          onChange={(e) => setAcceptTerms(e.target.checked)}
        />{" "}
        <span>
          To proceed with your loan application, please confirm your acceptance
          of our Terms and Conditions, Privacy Policy, and provide your consent
          for processing the payment.
        </span>
      </p>
      <div className="mt-5 ml-2.5">
        <button
          onClick={handleSubmit}
          disabled={!acceptTerms}
          className={`text-white border-none rounded-md py-3 px-8 text-base cursor-pointer transition-colors ${
            acceptTerms ? "bg-indigo-400 hover:bg-indigo-500" : "bg-gray-400"
          }`}
        >
          {loading ? (
            <div className="inline-block w-5 h-5 border-3 border-white border-t-white rounded-full animate-spin"></div>
          ) : (
            "Get Amount"
          )}
        </button>
      </div>
    </div>
  );
}
