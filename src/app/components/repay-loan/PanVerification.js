"use client";

import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
export default function PanVerification({ loading, fetchData }) {
  const [pancard, setPancard] = useState("");
  const [upiId] = useState("vyapar.174180804884@hdfcbank");
  const [userData, setUserData] = useState({});
  const [amount, setAmount] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const upiLink = `upi://pay?pa=${upiId}&pn=POSUser&am=${userData?.["Loan Repay Amount"]}&cu=INR`;

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
    if (!dateString) return "N/A";

    const date = new Date(dateString);
    if (isNaN(date)) return "Invalid Date";

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
        `https://script.google.com/macros/s/AKfycbyNmIoBayi3-Dss5pBgXqrzlzlIxSqUI1eG40T3IiD-X_vI5TdvaJjgyjFHMwnV8Tqwkw/exec?pancard=${pancard}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch repayment details");
      }
      const responseData = await response.json();
      setUserData(responseData?.data);
      console.log("response Data=>", responseData);
    } catch (error) {
      console.error("Error fetching repayment details:", error);
      throw error;
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row mt-6 border border-gray-300 rounded-md">
        {/* Left Section: Input and Button */}
        <div className="w-full md:w-1/2 p-6 border-b md:border-b-0 md:border-r border-gray-300">
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
            ) : userData?.["Loan Repay Amount"] ? (
              `Pay via UPI ₹${userData["Loan Repay Amount"]}`
            ) : (
              "View My Loan"
            )}
          </button>
          {Object.keys(userData).length > 0 && (
            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-md w-full">
              <h3 className="text-xl font-bold text-center mb-4 text-blue-700">
                Customer Summary
              </h3>
              <div className="space-y-2 text-sm sm:text-base">
                <p>
                  <strong>Repayment Amount:</strong> ₹
                  {userData["Loan Repay Amount"]}
                </p>
                <p>
                  <strong>Name:</strong> {userData["Customer Name"]}
                </p>
                <p>
                  <strong>State:</strong> {userData["State"]}
                </p>
                <p>
                  <strong>PAN Number:</strong> {userData["Pan Number"]}
                </p>
                <p>
                  <strong>Loan Amount:</strong> {userData["LOAN AMOUNT"]}
                </p>
                <p>
                  <strong>Repayment Date:</strong>{" "}
                  {formatDate(userData["Repayment Date"])}
                </p>
              </div>
            </div>
          )}
        </div>
        {/* Right Section: QR Code, logos, etc. */}
        <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center">
          <h3 className="text-xl font-bold mb-2 text-center">
            Naman Finlease Private Limited
          </h3>
          <h4 className="text-lg font-semibold mb-4">Scan to Pay</h4>
          <div className="border border-gray-400 rounded-md p-4 mb-4">
            <QRCodeCanvas
              value={`upi://pay?pa=${upiId}&pn=POSUser${
                userData?.["Loan Repay Amount"]
                  ? `&am=${userData?.["Loan Repay Amount"]}`
                  : ""
              }&cu=INR`}
              size={200}
            />
          </div>
        </div>
      </div>

      <div className="mt-8"></div>
    </div>
  );
}
