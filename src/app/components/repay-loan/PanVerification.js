"use client";

import { useState } from "react";
import { useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";

const parseDate = (dateStr) => {
  if (!dateStr) return null;
  // Handle "DD-MM-YYYY" format by rearranging to "YYYY-MM-DD"
  if (/^\d{2}-\d{2}-\d{4}$/.test(dateStr)) {
    const [dd, mm, yyyy] = dateStr.split("-");
    const isoDateStr = `${yyyy}-${mm}-${dd}`;
    const date = new Date(isoDateStr);
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

  const upiLink = `upi://pay?pa=${upiId}&pn=POSUser&am=${userData?.["total_due_amount"]}&cu=INR`;

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

  const handleSubmit = async () => {
    if (Object.keys(userData).length > 0) {
      window.location.href = upiLink;
      return;
    }

    setIsFetching(true);
    try {
      const response = await fetch(
        `https://crm.paisaonsalary.in/p/api/repayment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ pancard }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch repayment details");
      }
      const responseData = await response.json();
      if (responseData.status !== 1 || !responseData.data) {
        setUserData({ message: "PAN not found" });
      } else {
        setUserData(responseData.data);
      }
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
            ) : userData?.total_due_amount ? (
              `Pay via UPI ₹${userData.total_due_amount}`
            ) : (
              "View My Loan"
            )}
          </button>
          {Object.keys(userData).length > 0 && (
            <div className="mt-4 sm:mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-md w-full">
              {/* Personalized greeting and repayment info */}
              {userData.message ? (
                <p className="text-center text-red-600 font-semibold">
                  {userData.message}
                </p>
              ) : (
                <>
                  {userData.loan_no && userData.total_due_amount && (
                    <div className="mb-4 text-center">
                      <p className="text-lg font-semibold text-gray-700">
                        Total Due Amount: ₹{userData.total_due_amount}
                      </p>
                      {userData.repayment_date && (
                        <p
                          className={`text-sm font-medium mt-1 ${
                            new Date() >= new Date(userData.repayment_date)
                              ? "text-red-600"
                              : "text-gray-600"
                          }`}
                        >
                          Repayment Due Date:{" "}
                          {formatDate(userData.repayment_date)}
                        </p>
                      )}
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-center mb-4 text-blue-700">
                    Summary
                  </h3>
                  <div className="space-y-2 text-sm sm:text-base">
                    {userData.loan_no && (
                      <p>
                        <strong>Loan No:</strong> {userData.loan_no}
                      </p>
                    )}
                    {userData.repayment_amount && (
                      <p>
                        <strong>Repayment Amount:</strong> ₹
                        {userData.repayment_amount}
                      </p>
                    )}
                    {userData.total_interest_amount && (
                      <p>
                        <strong>Interest:</strong> ₹
                        {userData.total_interest_amount}
                      </p>
                    )}

                    {userData.disbursal_date && (
                      <p>
                        <strong>Disbursal Date:</strong>{" "}
                        {formatDate(userData.disbursal_date)}
                      </p>
                    )}
                    {userData.repayment_date && (
                      <p>
                        <strong>Repayment Date:</strong>{" "}
                        {formatDate(userData.repayment_date)}
                      </p>
                    )}
                    {userData.tenure && (
                      <p>
                        <strong>Tenure (Days):</strong> {userData.tenure}
                      </p>
                    )}
                    {userData.penalty_days && (
                      <p>
                        <strong>Penalty Days</strong> {userData.penalty_days}
                      </p>
                    )}
                    <p className="font-semibold text-green-700">
                      <strong>Total Due Amount:</strong> ₹
                      {userData.total_due_amount}
                    </p>
                  </div>
                </>
              )}
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
              value={`upi://pay?pa=${upiId}&pn=POSUser&am=${userData?.["total_due_amount"]}&cu=INR`}
              size={200}
            />
          </div>
          <div className="flex flex-col gap-2 mt-4 w-full max-w-xs">
            <button
              onClick={() =>
                (window.location.href = `upi://pay?pa=vyapar.174180804884@barodamp&pn=POSUser&am=${userData?.["total_due_amount"]}&cu=INR`)
              }
              className="bg-[#ef6c00] hover:bg-[#e65100] cursor-pointer text-white py-2 px-4 rounded text-center"
            >
              Pay ₹{userData?.["total_due_amount"] || ""} to Server 1
            </button>
            <button
              onClick={() =>
                (window.location.href = `upi://pay?pa=vyapar.174180804884@hdfcbank&pn=POSUser&am=${userData?.["total_due_amount"]}&cu=INR`)
              }
              className="bg-[#003399] hover:bg-[#002080] cursor-pointer text-white py-2 px-4 rounded text-center"
            >
              Pay ₹{userData?.["total_due_amount"] || ""} to Server 2
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8"></div>
    </div>
  );
}
