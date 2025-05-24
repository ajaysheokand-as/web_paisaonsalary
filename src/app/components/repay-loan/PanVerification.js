"use client";

import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
export default function PanVerification({ onOtpReceived, loading }) {
  const [pancard, setPancard] = useState("");
  const [upiId] = useState("vyapar.174180804884@hdfcbank");
  const [amount, setAmount] = useState("");

  const upiLink = `upi://pay?pa=${upiId}&pn=POSUser&am=${amount}&cu=INR`;
  const shortPayLink = amount ? `https://short.url/pay123` : "";

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
      {/* <p className="text-gray-600 italic mb-5">
        Please verify the accuracy of the below details before doing any
        transfer.
      </p> */}
      {/* <span className="mb-2">Please enter your PAN Details</span>
      <input
        type="text"
        value={pancard}
        onChange={handlePAN}
        required
        maxLength={10}
        className="p-3 border border-gray-300 rounded-md text-base w-full max-w-md"
      /> */}

      <div className="flex flex-col md:flex-row mt-6 border border-gray-300 rounded-md">
        {/* Left Section: Input and Button */}
        <div className="w-full md:w-1/2 p-6 border-b md:border-b-0 md:border-r border-gray-300">
          <span className="mb-2 block font-semibold text-lg">
            Enter Amount to Pay
          </span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-3 border border-gray-300 rounded-md text-base w-full mb-4"
          />
          {amount && (
            <>
              <a
                href={upiLink}
                className="bg-green-500 hover:bg-green-600 text-white border-none rounded-md py-3 px-8 text-base cursor-pointer transition-colors inline-block"
              >
                Pay Now
              </a>
              {/* <button
                onClick={() => navigator.clipboard.writeText(upiLink)}
                className="mt-3 bg-blue-500 hover:bg-blue-600 text-white border-none rounded-md py-2 px-6 text-base cursor-pointer transition-colors"
              >
                Copy Payment Link
              </button> */}
            </>
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
                amount ? `&am=${amount}` : ""
              }&cu=INR`}
              size={200}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={upiLink}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 px-4 text-sm"
            >
              Google Pay
            </a>
            <a
              href={upiLink}
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-md py-2 px-4 text-sm"
            >
              PhonePe
            </a>
            <a
              href={upiLink}
              className="bg-blue-400 hover:bg-blue-500 text-white rounded-md py-2 px-4 text-sm"
            >
              Paytm
            </a>
            <a
              href={upiLink}
              className="bg-gray-600 hover:bg-gray-700 text-white rounded-md py-2 px-4 text-sm"
            >
              Other
            </a>
          </div>
        </div>
      </div>

      {/* <div className="mt-8">
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
      </div> */}
    </div>
  );
}
