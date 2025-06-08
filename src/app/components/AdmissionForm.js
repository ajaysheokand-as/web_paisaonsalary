"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";

const AdmissionForm = () => {
  const [step, setStep] = useState(1);
  const [rowId, setRowId] = useState(null);
  const [formData, setFormData] = useState({
    mobile: "", // MANDATORY
    pancard: "", // MANDATORY
    name: "", // MANDATORY
    pincode: "", // MANDATORY
    alternate_mobile: "",
    email: "",
    alternate_email: "",
    monthly_income: "",
    loan_amount: "",
    gender: "",
    city_name: "",
    state_name: "",
    designation: "",
    company_name: "",
    dob: "",
    employment: "",
    rejectd_flag: 0,
    obligations: 0,
    utm_campaign: "POS",
    utm_source: "WEBSITE", // MANDATORY
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "radio"
          ? value
          : value.toUpperCase(),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (step === 1) {
      // PAN card format validation before step checks
      const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
      if (!panRegex.test(formData.pancard)) {
        toast.error("Invalid PAN card format.");
        setIsSubmitting(false);
        return;
      }

      const phoneRegex = /^[6-9][0-9]{9}$/;
      if (!phoneRegex.test(formData.mobile)) {
        toast.error("Invalid phone number format.");
        setIsSubmitting(false);
        return;
      }

      if (!formData.agree) {
        toast.error("You must agree to the terms and conditions.");
        setIsSubmitting(false);
        return;
      } else {
        setStep(2);
      }
      // Submit step 1 data
      // const response = await fetch(
      //   "https://script.google.com/macros/s/AKfycbwvAJK_F7O_cKG380y1D8ThMf_hcnS6G_SK1LWeW2uRKL66JJcelpNBEjLT0EUwZJSz9w/exec",
      //   {
      //     method: "POST",
      //     body: JSON.stringify({
      //       ...formData,
      //       stage: "step1",
      //     }),
      //   }
      // );

      // const result = await response.json();
      // if (result.rowId) {
      //   setRowId(result.rowId);
      //   setStep(2);
      // } else {
      //   toast.error("Failed to submit step 1");
      // }
      setIsSubmitting(false);
      return;
    }

    // On Step 2 submit
    if (step === 2) {
      if (
        !formData.mobile ||
        !formData.pancard ||
        !formData.name ||
        !formData.pincode ||
        !formData.email
      ) {
        toast.error("Please fill all mandatory fields from step 1.");
        setIsSubmitting(false);
        return;
      }

      const pinRegex = /^[1-9][0-9]{5}$/;
      if (!pinRegex.test(formData.pincode)) {
        toast.error("Invalid PIN code format.");
        setIsSubmitting(false);
        return;
      }

      // if (formData.loanAmount < 5000 || formData.loanAmount > 100000) {
      //   toast.error("Loan amount must be between ₹5,000 and ₹100,000");
      //   setIsSubmitting(false);
      //   return;
      // }
      if (formData.employment !== "salaried") {
        toast.error("We provide loans only to salaried individuals.");
        setIsSubmitting(false);
        return;
      }
      if (!formData.agree) {
        toast.error("You must agree to the terms and conditions.");
        setIsSubmitting(false);
        return;
      }

      const response = await fetch(
        "https://crm.paisaonsalary.in/p/api/generateLead",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            rowId,
            stage: "step2",
          }),
        }
      );

      if (response.ok) {
        toast.success(
          "Application submitted successfully! We wil back to you soon."
        );
        setFormData({
          mobile: "", // MANDATORY
          pancard: "", // MANDATORY
          name: "", // MANDATORY
          pincode: "", // MANDATORY
          alternate_mobile: "",
          email: "",
          alternate_email: "",
          monthly_income: "",
          loan_amount: "",
          gender: "",
          city_name: "",
          state_name: "",
          designation: "",
          company_name: "",
          dob: "",
          rejectd_flag: 0,
          obligations: 0,
          utm_campaign: "POS",
          utm_source: "WEBSITE", // MANDATORY
        });
        setStep(1);
        setRowId(null);
      } else {
        toast.error("Submission failed.");
      }
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full mt-8 lg:mt-0 bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center gap-4 w-full max-w-md">
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full cursor-pointer text-white ${
              step === 1 ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setStep(1)}
          >
            1
          </div>
          <div className="flex-1 h-1 bg-gray-300" />
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full cursor-pointer text-white ${
              step === 2 ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setStep(2)}
          >
            2
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-[#1D3E50] mb-4">
        {step === 1 ? "Enter Your Personal Details" : "Loan Information"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 && (
          <>
            <input
              type="tel"
              name="mobile"
              placeholder="Phone Number"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md bg-white text-black placeholder-gray-500"
            />
            <input
              type="text"
              name="pancard"
              placeholder="PAN Card"
              value={formData.pancard}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md bg-white text-black placeholder-gray-500"
            />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md bg-white text-black placeholder-gray-500"
            />
            <input
              type="date"
              name="dob"
              placeholder="Date of Birth"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-white text-black placeholder-gray-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md bg-white text-black placeholder-gray-500"
            />

            {/* <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md bg-white text-black placeholder-gray-500"
            >
              <option value="">Select City</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Other">Other</option>
            </select> */}
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md bg-white text-black placeholder-gray-500"
            />
            <input
              type="text"
              name="pincode"
              placeholder="Pin Code"
              value={formData.pincode}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md bg-white text-black placeholder-gray-500"
            />
            <input
              type="number"
              name="monthly_income"
              placeholder="Monthly Salary (₹)"
              value={formData.monthly_income}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-white text-black placeholder-gray-500"
            />
            <input
              type="number"
              name="loan_amount"
              placeholder="Loan Amount (₹)"
              value={formData.loan_amount}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-white text-black placeholder-gray-500"
            />
            {/* <input
              type="number"
              name="tenure"
              placeholder="Tenure (Days)"
              value={formData.tenure}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-white text-black placeholder-gray-500"
            /> */}

            <div className="space-y-2">
              <label className="font-medium text-sm text-black">
                Employment Type
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="employment"
                    value="salaried"
                    checked={formData.employment === "salaried"}
                    onChange={handleChange}
                    required
                    className="bg-white"
                  />
                  <span className="text-sm text-black">Salaried</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="employment"
                    value="self-employed"
                    checked={formData.employment === "self-employed"}
                    onChange={handleChange}
                    required
                    className="bg-white"
                  />
                  <span className="text-sm text-black">Self-employed</span>
                </label>
              </div>
            </div>
          </>
        )}

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mt-1 bg-white"
          />
          <label className="text-sm text-black">
            I agree to all{" "}
            <a
              href="/terms-conditions"
              target="_blank"
              className="text-blue-600 underline"
            >
              Terms and Conditions
            </a>
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 cursor-pointer transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting
            ? "Processing..."
            : step === 1
            ? "Next"
            : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;
