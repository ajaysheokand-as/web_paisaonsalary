"use client";

import { useState } from "react";
import { useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";

const parseDate = (dateStr) => {
  if (!dateStr) return null;
  const parts = dateStr.split("-");
  if (parts.length === 3) {
    const [dd, mm, yyyy] = parts;
    const formatted = `${yyyy}-${mm}-${dd}`;
    const date = new Date(formatted);
    return isNaN(date) ? null : date;
  }
  const date = new Date(dateStr);
  return isNaN(date) ? null : date;
};

export default function PanVerification({ loading, fetchData }) {
  const [pancard, setPancard] = useState("");
  const [upiId] = useState("vyapar.174180804884@hdfcbank");
  const [userData, setUserData] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  const upiLink = `upi://pay?pa=${upiId}&pn=POSUser&am=${userData?.total}&cu=INR`;

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

  const formatDate = (dateString) => {
    const date = parseDate(dateString);
    if (!date) return "Invalid Date";

    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const calculateRepaymentWithPenalty = (data) => {
    const disbursementDate = parseDate(data["Disbursement Date"]);
    const repaymentDate = parseDate(data["Repayment Date"]);
    const today = new Date();

    if (!disbursementDate || !repaymentDate) {
      const principal = parseFloat(data["Loan Repay Amount"]) || 0;
      return {
        total: principal.toFixed(2),
        interest: "0.00",
        penalty: "0.00",
        note: "Excluding penalty due to invalid date format",
        duration: null,
        penaltyDays: 0,
      };
    }

    const msInDay = 1000 * 60 * 60 * 24;
    const principal = parseFloat(data["LOAN AMOUNT"]) || 0;

    const endDate = today > repaymentDate ? repaymentDate : today;
    const duration = Math.ceil((endDate - disbursementDate) / msInDay);
    const interest = principal * 0.01 * duration;

    let penalty = 0;
    let penaltyDays = 0;
    if (today > repaymentDate) {
      penaltyDays = Math.ceil((today - repaymentDate) / msInDay);
      penalty = principal * 0.01 * penaltyDays;
    }

    const total = principal + interest + penalty;

    return {
      total: total.toFixed(2),
      interest: interest.toFixed(2),
      penalty: penalty.toFixed(2),
      duration,
      penaltyDays,
    };
  };

  const handleSubmit = async () => {
    if (Object.keys(userData).length > 0) {
      window.location.href = upiLink;
      return;
    }

    setIsFetching(true);
    try {
      const response = await fetch(
        `https://script.google.com/macros/s/AKfycbyNmIoBayi3-Dss5pBgXqrzlzlIxSqUI1eG40T3IiD-X_vI5TdvaJjgyjFHMwnV8Tqwkw/exec?pancard=${pancard}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch repayment details");
      }
      const responseData = await response.json();
      setUserData(responseData?.data);
      const calculated = calculateRepaymentWithPenalty(responseData?.data);
      setUserData((prev) => ({ ...prev, ...calculated }));
      console.log("response Data=>", responseData);
    } catch (error) {
      console.error("Error fetching repayment details:", error);
      throw error;
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div className="flex flex-col px-4 py-4 sm:px-1 sm:py-1">
      <div className="flex flex-col md:flex-row mt-4 sm:mt-2 border border-gray-300 rounded-md">
        {/* Left Section: Input and Button */}
        <div className="w-full md:w-1/2 px-4 py-4 sm:px-2 sm:py-2 border-b md:border-b-0 md:border-r border-gray-300">
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
          <button
            onClick={handleSubmit}
            className="bg-green-500 mt-2 hover:bg-green-600 text-white border-none rounded-md py-3 px-8 text-base cursor-pointer transition-colors inline-block"
          >
            {isFetching ? (
              <div className="inline-block w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : userData?.total ? (
              `Pay via UPI ₹${userData.total}`
            ) : (
              "View My Loan"
            )}
          </button>
          {Object.keys(userData).length > 0 && (
            <div className="mt-4 sm:mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-md w-full">
              {/* Personalized greeting and repayment info */}
              {userData["Customer Name"] && userData.total && (
                <div className="mb-4 text-center">
                  <p className="text-lg font-semibold text-gray-700">
                    Hello {userData["Customer Name"]}, your repayment amount is
                    ₹{userData.total}
                  </p>
                  {userData["Repayment Date"] && (
                    <p
                      className={`text-sm font-medium mt-1 ${
                        new Date() >=
                        new Date(
                          userData["Repayment Date"]
                            .split("-")
                            .reverse()
                            .join("-")
                        )
                          ? "text-red-600"
                          : "text-gray-600"
                      }`}
                    >
                      Repayment Due Date:{" "}
                      {formatDate(userData["Repayment Date"])}
                    </p>
                  )}
                </div>
              )}
              <h3 className="text-xl font-bold text-center mb-4 text-blue-700">
                Summary
              </h3>
              <div className="space-y-2 text-sm sm:text-base">
                {userData["Loan Repay Amount"] &&
                  parseFloat(userData["Loan Repay Amount"]) > 0 && (
                    <p>
                      <strong>Repayment Amount:</strong> ₹
                      {userData["Loan Repay Amount"]}
                    </p>
                  )}
                {userData["Customer Name"] && (
                  <p>
                    <strong>Name:</strong> {userData["Customer Name"]}
                  </p>
                )}
                {userData["State"] && (
                  <p>
                    <strong>State:</strong> {userData["State"]}
                  </p>
                )}
                {userData["Pan Number"] && (
                  <p>
                    <strong>PAN Number:</strong> {userData["Pan Number"]}
                  </p>
                )}
                {userData["LOAN AMOUNT"] &&
                  parseFloat(userData["LOAN AMOUNT"]) > 0 && (
                    <p>
                      <strong>Loan Amount:</strong> ₹{userData["LOAN AMOUNT"]}
                    </p>
                  )}
                {userData["Disbursement Date"] && (
                  <p>
                    <strong>Disbursement Date:</strong>{" "}
                    {formatDate(userData["Disbursement Date"])}
                  </p>
                )}
                {userData["Repayment Date"] && (
                  <p>
                    <strong>Repayment Date:</strong>{" "}
                    {formatDate(userData["Repayment Date"])}
                  </p>
                )}
                {userData?.duration && (
                  <p>
                    <strong>Days Since Disbursement:</strong>{" "}
                    {userData.duration} days
                  </p>
                )}
                {userData?.penaltyDays > 0 && (
                  <p>
                    <strong>Days Past Due Date:</strong> {userData.penaltyDays}{" "}
                    days
                  </p>
                )}
                <p className="font-semibold text-green-700">
                  <strong>Total Payable:</strong> ₹{userData.total}
                </p>
                {userData.note && (
                  <p className="text-sm text-gray-600 italic">
                    {userData.note}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
        {/* Right Section: QR Code, logos, etc. */}
        <div className="w-full md:w-1/2 px-4 py-4 sm:px-2 sm:py-2 flex flex-col items-center justify-center">
          <h3 className="text-xl font-bold mb-2 text-center">
            Naman Finlease Private Limited
          </h3>
          <h4 className="text-lg font-semibold mb-4">Scan to Pay</h4>
          <div className="border border-gray-400 rounded-md p-3 sm:p-2 mb-2">
            <QRCodeCanvas
              value={`upi://pay?pa=${upiId}&pn=POSUser&am=${userData?.total}&cu=INR`}
              size={200}
            />
          </div>
          <div className="flex flex-col gap-2 mt-4 w-full max-w-xs">
            <button
              onClick={() =>
                (window.location.href = `upi://pay?pa=vyapar.174180804884@barodamp&pn=POSUser&am=${userData?.total}&cu=INR`)
              }
              className="bg-[#ef6c00] hover:bg-[#e65100] cursor-pointer text-white py-2 px-4 rounded text-center"
            >
              Pay ₹{userData?.total || ""} to Server 1
            </button>
            <button
              onClick={() =>
                (window.location.href = `upi://pay?pa=vyapar.174180804884@hdfcbank&pn=POSUser&am=${userData?.total}&cu=INR`)
              }
              className="bg-[#003399] hover:bg-[#002080] cursor-pointer text-white py-2 px-4 rounded text-center"
            >
              Pay ₹{userData?.total || ""} to Server 2
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8"></div>
    </div>
  );
}
