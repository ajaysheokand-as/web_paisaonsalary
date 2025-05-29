import Image from "next/image";

export default function BankDetails({
  bankName,
  companyName,
  accountNo,
  ifscCode,
  branchAddress,
  accountType,
  qrCodeSrc,
  upiId,
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
      {/* Left Section: Bank Details and UPI ID */}
      <div className="w-full md:w-2/3 mb-4 md:mb-0">
        <table className="border-collapse w-full">
          <tbody>
            <tr>
              <td className="py-1">
                <span className="font-medium">Bank Name</span>
              </td>
              <td className="pl-4">
                <span className="flex items-center">{bankName}</span>
              </td>
            </tr>
            <tr>
              <td className="py-1">
                <span className="font-medium">Company Name</span>
              </td>
              <td className="pl-4">
                <span>{companyName}</span>
              </td>
            </tr>
            <tr>
              <td className="py-1">
                <span className="font-medium">Account No.</span>
              </td>
              <td className="pl-4">
                <span className="flex items-center">{accountNo}</span>
              </td>
            </tr>
            <tr>
              <td className="py-1">
                <span className="font-medium">IFSC Code</span>
              </td>
              <td className="pl-4">
                <span className="flex items-center">{ifscCode}</span>
              </td>
            </tr>
            <tr>
              <td className="py-1">
                <span className="font-medium">Branch Address</span>
              </td>
              <td className="pl-4">
                <span>{branchAddress}</span>
              </td>
            </tr>
            <tr>
              <td className="py-1">
                <span className="font-medium">Account Type</span>
              </td>
              <td className="pl-4">
                <span>{accountType}</span>
              </td>
            </tr>
            <tr>
              <td className="py-1">
                <span className="font-medium">UPI ID</span>
              </td>
              <td className="pl-4">
                <span className="flex items-center">
                  {upiId}
                  <button
                    onClick={() =>
                      (window.location.href = `upi://pay?pa=${upiId}&pn=POSUser&cu=INR`)
                    }
                    className="ml-4 px-3 py-1 text-sm bg-green-600 hover:bg-green-700 cursor-pointer text-white rounded"
                  >
                    Pay Now
                  </button>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Right Section: QR Code in Phone-like Container */}
      <div className="w-full md:w-1/3 flex justify-center mt-4 md:mt-0">
        <div className="border rounded-xl shadow-lg bg-gray-50 flex items-center justify-center w-full max-w-[320px] h-[500px]">
          <Image
            src={qrCodeSrc}
            alt="QR Code"
            width={220}
            height={220}
            className="w-auto h-auto max-w-full max-h-full"
          />
        </div>
      </div>
    </div>
  );
}
