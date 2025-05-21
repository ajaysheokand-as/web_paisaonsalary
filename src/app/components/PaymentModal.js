import React from "react";
import Image from "next/image";

const PaymentModal = ({ onClose, onRazorpay, onPayU, isLoading }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h3 className="text-xl font-semibold mb-6 text-center">
          Choose Payment Method
        </h3>

        <div className="flex items-center justify-center gap-8 mb-6">
          <div
            className={`cursor-pointer transition-opacity ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
            }`}
            onClick={!isLoading ? onRazorpay : undefined}
          >
            <Image
              src="./razorpay.png"
              alt="Pay with Razorpay"
              width={60}
              height={60}
              className="rounded-xl"
            />
          </div>
          <div
            className={`cursor-pointer transition-opacity ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
            }`}
            onClick={!isLoading ? onPayU : undefined}
          >
            <Image
              src="./payu.webp"
              alt="Pay with PayU"
              width={50}
              height={50}
              className="rounded-xl"
            />
          </div>
        </div>

        <button
          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
