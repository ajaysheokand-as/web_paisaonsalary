"use client";

export default function PaymentModal({
  onClose,
  onRazorpay,
  onPayU,
  isLoading,
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Select Payment Method</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <button
            onClick={onRazorpay}
            className="bg-indigo-400 hover:bg-indigo-500 text-white py-3 px-4 rounded-md transition-colors"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="inline-block w-5 h-5 border-3 border-white border-t-white rounded-full animate-spin"></div>
            ) : (
              "Pay with Razorpay"
            )}
          </button>
          <button
            onClick={onPayU}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md transition-colors"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="inline-block w-5 h-5 border-3 border-white border-t-white rounded-full animate-spin"></div>
            ) : (
              "Pay with PayU"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
