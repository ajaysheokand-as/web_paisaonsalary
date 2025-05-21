import Image from "next/image";

export default function BankDetails({
  bankName,
  companyName,
  accountNo,
  ifscCode,
  branchAddress,
  accountType,
  qrCodeSrc,
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8 flex justify-between items-center">
      <table className="border-collapse">
        <tbody>
          <tr>
            <td className="py-1">
              <span className="font-medium">Bank Name</span>
            </td>
            <td className="pl-4">
              <span>{bankName}</span>
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
              <span>{accountNo}</span>
            </td>
          </tr>
          <tr>
            <td className="py-1">
              <span className="font-medium">IFSC Code</span>
            </td>
            <td className="pl-4">
              <span>{ifscCode}</span>
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
        </tbody>
      </table>
      <div>
        <Image src={qrCodeSrc} alt="QR Code" width={200} height={200} />
      </div>
    </div>
  );
}
