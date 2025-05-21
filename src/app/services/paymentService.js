export const sendOtp = async (pancard) => {
  try {
    // const resp = await fetch(
    //   `https://api.paisaonsalary.in/Api/CustomerDetails/Sendotp`
    // {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json; charset=UTF-8",
    //     Auth: "Y2M0Nzk0OGYwNmQyMjdmZTlhY2E1ZWQ1Nzk5YTZmMWE=",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify({ pancard }),
    // }
    // );
    // return await resp.json();

    console.log("Mock sendOtp called with pancard:", pancard);
    // Return dummy success response
    return {
      status: 1,
      message: "OTP sent successfully (mocked response)",
      data: {
        token: "mock-token-123456",
      },
    };
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw error;
  }
};

export const verifyOtp = async (panNumber, otp) => {
  try {
    // const resp = await fetch(
    //   `https://api.paisaonsalary.in/Api/CustomerDetails/verifyOtp`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json; charset=UTF-8",
    //       Auth: "Y2M0Nzk0OGYwNmQyMjdmZTlhY2E1ZWQ1Nzk5YTZmMWE=",
    //       Accept: "application/json",
    //     },
    //     body: JSON.stringify({
    //       panNumber,
    //       otp,
    //     }),
    //   }
    // );

    // return await resp.json();

    console.log("Mock sendOtp called with pancard:");
    // Return dummy success response
    return {
      status: 1,
      message: "OTP sent successfully (mocked response)",
      data: {
        loan_no: "POS1234567890",
        disbursal_date: "2024-12-01",
        repayment_date: "2025-06-01",
        repayment_amount: 12000,
        loan_recommended: 10000,
        real_interest: 2000,
        total_due_amount: 12000,
      },
    };
  } catch (error) {
    console.error("Error verifying OTP:", error);
    throw error;
  }
};

export const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const verifyRazorPayment = async (paymentDetails) => {
  try {
    const response = await fetch(
      `https://api.crmsl.com/Api/CustomerDetails/verifyRazorPayCheckPaymentStatus`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Auth: "Y2M0Nzk0OGYwNmQyMjdmZTlhY2E1ZWQ1Nzk5YTZmMWE=",
          Accept: "application/json",
        },
        body: JSON.stringify(paymentDetails),
      }
    );

    return await response.json();
  } catch (error) {
    console.error("Error verifying payment:", error);
    throw error;
  }
};

export const createPayuOrder = async (paymentData) => {
  try {
    const response = await fetch(
      `https://api.crmsl.com/Api/RepayLoanApi/payuOrders`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Accept: "application/json",
          Auth: "MjFmMTdiYjE0MTM3Y2YxODQxYjhiMGEwNTY4M2I1ZDE=",
        },
        body: JSON.stringify(paymentData),
      }
    );

    return await response.json();
  } catch (error) {
    console.error("Error creating PayU order:", error);
    throw error;
  }
};
