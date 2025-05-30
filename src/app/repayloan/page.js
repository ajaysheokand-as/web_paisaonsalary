"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import Header from "../components/common/Header";
import PanVerification from "../components/repay-loan/PanVerification";
import OtpVerification from "../components/repay-loan/OtpVerification";
import LoanDetails from "../components/repay-loan/LoanDetails";
import PaymentSuccess from "../components/repay-loan/PaymentSuccess";
import BankDetails from "../components/repay-loan/BankDetails";
import InformationSection from "../components/repay-loan/InformationSection";
// import PaymentModal from "../components/common/PaymentModal";
// import usePayment from "../hooks/usePayment";
import {
  sendOtp,
  verifyOtp,
  getRepaymentDetailsByPan,
} from "../services/paymentService";

export default function RepayLoan() {
  const [content, setContent] = useState("pannumber");
  const [pancard, setPancard] = useState("");
  const [repaymentData, setRepaymentData] = useState(null);
  const [orderId, setOrderId] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState("");

  const { loading, setLoading, initiateRazorpayPayment, initiatePayUPayment } =
    {};
  //   usePayment();

  const showMessage = (message) => {
    toast.success(message);
  };

  const handleFetchData = async (pancardValue) => {
    setPancard(pancardValue);
    // setLoading(true);
    try {
      const dataset = await getRepaymentDetailsByPan(pancardValue);
      console.log("dataset", dataset);
      showMessage(dataset.message);
      if (dataset.status === 1) {
        setContent("panotp");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    } finally {
      // setLoading(false);
    }
  };

  const handleVerifyOtp = async (otpValue) => {
    setLoading(true);
    try {
      const dataset = await verifyOtp(pancard, otpValue);
      showMessage(dataset.Message);

      if (dataset.Status === 1) {
        const repayData = dataset.repayment_data;
        setRepaymentData(repayData);
        setOrderId(dataset.order_id);
        setContent("amountfetched");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentClick = (amount) => {
    setPaymentAmount(amount);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleRazorpay = () => {
    setModalOpen(false);
    initiateRazorpayPayment(repaymentData, orderId, paymentAmount);
  };

  const handlePayU = () => {
    setModalOpen(false);
    initiatePayUPayment(repaymentData, paymentAmount);
  };

  return (
    <>
      <Header title="Loan Repayment" />
      <div className="w-full min-h-screen flex flex-col items-center bg-white dark:bg-white text-gray-900 dark:text-gray-900 border border-gray-300 dark:border-gray-300 shadow-md">
        <div className="w-full max-w-6xl p-4 sm:p-6 md:p-8 mx-auto">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
            {content === "pannumber" ? (
              <PanVerification
                // onOtpReceived={handleSendOtp}
                fetchData={handleFetchData}
                loading={loading}
              />
            ) : content === "panotp" ? (
              <OtpVerification
                pancard={pancard}
                onOtpVerified={handleVerifyOtp}
                loading={loading}
              />
            ) : content === "amountfetched" && repaymentData ? (
              <LoanDetails
                repaymentData={repaymentData}
                onPaymentClick={handlePaymentClick}
                loading={loading}
              />
            ) : content === "paymentSuccess" ? (
              <PaymentSuccess status={paymentStatus} />
            ) : null}
          </div>
          <BankDetails
            bankName="Bank of Baroda"
            companyName="Naman Finlease Private Ltd"
            accountNo="45230200001507"
            ifscCode="BARBOMALVIY"
            branchAddress="SELECT CITYWALK. SAKET BRANCH, DELHI 110017"
            accountType="Current"
            qrCodeSrc="/QRCODE.jpg"
            upiId="naman99539@barodampay"
          />
          <BankDetails
            bankName="HDFC Bank Ltd"
            companyName="Naman Finlease Private Ltd"
            accountNo="59208588888450"
            ifscCode="HDFC0000248"
            branchAddress="S-355 Panchshila Park New Delhi 110017"
            accountType="Current"
            qrCodeSrc="/NamanQR.jpeg"
            upiId="vyapar.174180804884@hdfcbank"
          />

          <InformationSection />
        </div>

        {/* {isModalOpen && (
          <PaymentModal
            onClose={handleCloseModal}
            onRazorpay={handleRazorpay}
            onPayU={handlePayU}
            isLoading={loading}
          />
        )} */}
      </div>
    </>
  );
}
