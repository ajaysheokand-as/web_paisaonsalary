"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as paymentService from "../services/paymentService";

export default function usePayment() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const initiateRazorpayPayment = async (
    repaymentData,
    orderId,
    paymentAmount
  ) => {
    setLoading(true);
    try {
      let total_due_amount = repaymentData.total_due_amount;
      if (paymentAmount && paymentAmount < repaymentData.total_due_amount) {
        total_due_amount = parseFloat(paymentAmount);
      }

      const scriptLoaded = await paymentService.loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!scriptLoaded) {
        alert("Razorpay SDK failed to load. Are you online?");
        setLoading(false);
        return;
      }

      const options = {
        key: "rzp_live_L7iGFEiE6MGnlN",
        amount: (total_due_amount * 100).toString(),
        currency: "INR",
        name: "Surya Loan",
        description: repaymentData.pancard,
        image: "https://web.salaryontime.in/public/images/final_logo.png",
        order_id: orderId,
        prefill: {
          name: "Hidden",
          email: repaymentData?.email,
          contact: repaymentData?.mobile,
        },
        theme: { color: "#8180e0" },
        handler: async function (response) {
          const paymentDetails = {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          };

          try {
            const data = await paymentService.verifyRazorPayment(
              paymentDetails
            );
            const txnStatus = data.status;
            const txnId = data.txnId || "N/A";

            router.push(`/thanku?txnStatus=${txnStatus}&txnId=${txnId}`);
          } catch (error) {
            console.error("Error verifying payment:", error);
          } finally {
            setLoading(false);
          }
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error during payment:", error);
      setLoading(false);
    }
  };

  const initiatePayUPayment = async (repaymentData, paymentAmount) => {
    setLoading(true);
    try {
      const total_due_amount = paymentAmount
        ? parseFloat(paymentAmount)
        : repaymentData.total_due_amount;

      const MERCHANT_KEY = "wQobYX";
      const productinfo = "Loan repayment for Loan No";
      const fullname = repaymentData.full_name;
      const email = repaymentData.email;
      const phone = repaymentData.mobile;

      const paymentData = {
        amount: total_due_amount,
        productinfo: productinfo,
        firstname: fullname,
        email: email,
        mobile: phone,
        udf5: repaymentData.lead_id,
      };

      const response = await paymentService.createPayuOrder(paymentData);

      if (response.Status === 1) {
        const hashData = response.data.parameters;
        const scriptLoaded = await paymentService.loadScript(
          "https://jssdk.payu.in/bolt/bolt.min.js"
        );

        if (scriptLoaded) {
          if (typeof window.bolt !== "undefined") {
            window.bolt.launch(
              {
                key: MERCHANT_KEY,
                txnid: hashData.txnid,
                amount: total_due_amount,
                productinfo: productinfo,
                firstname: fullname,
                email: email,
                phone: phone,
                surl: "https://salaryontime.com/thanku",
                furl: "https://salaryontime.com/fail",
                hash: hashData.hash,
                udf5: repaymentData.lead_id,
              },
              {
                responseHandler: function (BOLT) {
                  if (
                    BOLT.response.txnStatus === "SUCCESS" ||
                    BOLT.response.txnStatus === "FAILED" ||
                    BOLT.response.txnStatus === "CANCEL"
                  ) {
                    router.push(
                      `/thanku?txnStatus=${BOLT.response.txnStatus}&txnId=${BOLT.response.txnid}`
                    );
                  }
                },
                catchException: function (BOLT) {
                  console.log("Payment failed. Please try again.");
                  setLoading(false);
                },
              }
            );
          } else {
            console.error("PayU SDK not initialized correctly after loading.");
            setLoading(false);
          }
        } else {
          console.error("Failed to load PayU script.");
          setLoading(false);
        }
      } else {
        console.error("Failed to get valid response from PayU API.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error during PayU payment:", error);
      setLoading(false);
    }
  };

  return {
    loading,
    setLoading,
    initiateRazorpayPayment,
    initiatePayUPayment,
  };
}
