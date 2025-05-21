"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";

const AdmissionForm = () => {
  const [step, setStep] = useState(1);
  const [rowId, setRowId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pan: "",
    city: "",
    pinCode: "",
    loanAmount: "",
    tenure: "",
    salary: "",
    // dob: "",
    employment: "",
    agree: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = name === "pan" ? value.toUpperCase() : value;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : newValue,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const isStep1Valid = () => {
    const phoneValid = formData.phone.trim() !== "";
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    const panValid = panRegex.test(formData.pan);
    return phoneValid && panValid;
  };

  const isStep2Valid = () => {
    const nameValid = formData.name.trim() !== "";
    const emailValid =
      formData.email.trim() !== "" && /\S+@\S+\.\S+/.test(formData.email);
    const cityValid = formData.city.trim() !== "";
    const pinCodeValid = formData.pinCode.trim() !== "";
    return nameValid && emailValid && cityValid && pinCodeValid;
  };

  const isStep3Valid = () => {
    const loanAmountNum = Number(formData.loanAmount);
    const loanAmountValid = loanAmountNum >= 5000 && loanAmountNum <= 100000;
    const tenureValid =
      formData.tenure.trim() !== "" && Number(formData.tenure) > 0;
    const salaryValid =
      formData.salary.trim() !== "" && Number(formData.salary) > 0;
    const employmentValid = formData.employment === "salaried";
    const agreeValid = formData.agree === true;
    return (
      loanAmountValid &&
      tenureValid &&
      salaryValid &&
      employmentValid &&
      agreeValid
    );
  };

  const handleStep1Submit = async () => {
    setIsSubmitting(true);
    if (!isStep1Valid()) {
      if (formData.phone.trim() === "") {
        toast.error("Phone number is required.");
      } else {
        toast.error("Please enter a valid PAN card number.");
      }
      setIsSubmitting(false);
      return false;
    }
    // Submit step 1 data
    console.log(
      "process.env.NEXT_PUBLIC_GOOGLE_FORM_URL",
      process.env.NEXT_PUBLIC_GOOGLE_FORM_URL,
      formData.phone,
      formData.pan
    );
    const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_FORM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        phone: formData.phone,
        pan: formData.pan,
        stage: "step1",
      }),
    });

    const result = await response.json();
    if (result.rowId) {
      setRowId(result.rowId);
      setStep(2);
    } else {
      toast.error("Failed to submit step 1");
      setIsSubmitting(false);
      return false;
    }
    setIsSubmitting(false);
    return true;
  };

  const handleStep2Submit = async () => {
    setIsSubmitting(true);
    if (!isStep2Valid()) {
      if (formData.name.trim() === "") {
        toast.error("Name is required.");
      } else if (
        formData.email.trim() === "" ||
        !/\S+@\S+\.\S+/.test(formData.email)
      ) {
        toast.error("Please enter a valid email address.");
      } else if (formData.city.trim() === "") {
        toast.error("City is required.");
      } else if (formData.pinCode.trim() === "") {
        toast.error("Pin Code is required.");
      }
      setIsSubmitting(false);
      return false;
    }
    // Submit step 2 data
    const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_FORM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        rowId,
        name: formData.name,
        email: formData.email,
        city: formData.city,
        pinCode: formData.pinCode,
        stage: "step2",
      }).toString(),
    });

    const result = await response.json();
    if (result.success) {
      setStep(3);
    } else {
      toast.error("Failed to submit step 2");
      setIsSubmitting(false);
      return false;
    }
    setIsSubmitting(false);
    return true;
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    if (!isStep3Valid()) {
      if (
        Number(formData.loanAmount) < 5000 ||
        Number(formData.loanAmount) > 100000
      ) {
        toast.error("Loan amount must be between ₹5,000 and ₹100,000");
      } else if (formData.employment !== "salaried") {
        toast.error("We provide loans only to salaried individuals.");
      } else if (!formData.agree) {
        toast.error("You must agree to the terms and conditions.");
      } else if (
        formData.tenure.trim() === "" ||
        Number(formData.tenure) <= 0
      ) {
        toast.error("Please enter a valid tenure.");
      } else if (
        formData.salary.trim() === "" ||
        Number(formData.salary) <= 0
      ) {
        toast.error("Please enter a valid monthly salary.");
      }
      setIsSubmitting(false);
      return;
    }

    // Prepare data for URLSearchParams
    const finalData = {
      ...formData,
      rowId,
      stage: "step3",
    };
    // Convert boolean to string for 'agree' since URLSearchParams only supports strings
    finalData.agree = formData.agree ? "true" : "false";

    const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_FORM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(finalData).toString(),
    });

    if (response.ok) {
      toast.success(
        "Application submitted successfully! We will get back to you soon."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        pan: "",
        city: "",
        pinCode: "",
        loanAmount: "",
        tenure: "",
        salary: "",
        // dob: "",
        employment: "",
        agree: false,
      });
      setStep(1);
      setRowId(null);
      setTouched({});
    } else {
      toast.error("Submission failed.");
    }
    setIsSubmitting(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step === 1) {
      await handleStep1Submit();
    } else if (step === 2) {
      await handleStep2Submit();
    } else if (step === 3) {
      // Final submission handled by separate button
    }
  };

  const inputClass = (fieldName, isValid) => {
    const base =
      "w-full px-4 py-2 border rounded-md bg-white text-black placeholder-gray-500";
    return !isValid && touched[fieldName]
      ? base + " border-red-500"
      : base + " border-gray-300";
  };

  return (
    <div className="w-full mt-8 lg:mt-0 bg-white shadow-lg rounded-lg p-6 relative">
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
          <div className="flex-1 h-1 bg-gray-300" />
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full cursor-pointer text-white ${
              step === 3 ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => step === 3 && setStep(3)}
          >
            3
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-[#1D3E50] mb-4">
        {step === 1
          ? "Enter Your Contact Details"
          : step === 2
          ? "Enter Your Personal Details"
          : "Loan Information & Review"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 && (
          <>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={inputClass("phone", formData.phone.trim() !== "")}
            />
            <input
              type="text"
              name="pan"
              placeholder="PAN Card Number"
              value={formData.pan}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              maxLength={10}
              className={
                inputClass(
                  "pan",
                  /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan)
                ) + " uppercase"
              }
            />
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={inputClass("name", formData.name.trim() !== "")}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={inputClass(
                "email",
                formData.email.trim() !== "" &&
                  /\S+@\S+\.\S+/.test(formData.email)
              )}
            />
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={inputClass("city", formData.city.trim() !== "")}
            >
              <option value="">Select City</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="text"
              name="pinCode"
              placeholder="Pin Code"
              value={formData.pinCode}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={inputClass("pinCode", formData.pinCode.trim() !== "")}
            />
          </>
        )}

        {step === 3 && (
          <>
            <input
              type="number"
              name="loanAmount"
              placeholder="Loan Amount (₹)"
              value={formData.loanAmount}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClass(
                "loanAmount",
                Number(formData.loanAmount) >= 5000 &&
                  Number(formData.loanAmount) <= 100000
              )}
            />
            <input
              type="number"
              name="tenure"
              placeholder="Tenure (Days)"
              value={formData.tenure}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClass(
                "tenure",
                formData.tenure.trim() !== "" && Number(formData.tenure) > 0
              )}
            />
            <input
              type="number"
              name="salary"
              placeholder="Monthly Salary (₹)"
              value={formData.salary}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClass(
                "salary",
                formData.salary.trim() !== "" && Number(formData.salary) > 0
              )}
            />
            {/* <input
              type="date"
              name="dob"
              placeholder="Date of Birth"
              value={formData.dob}
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
                  <span
                    className={
                      formData.employment === "salaried" ||
                      (touched.employment && formData.employment === "salaried")
                        ? "text-sm text-black"
                        : "text-sm text-black"
                    }
                  >
                    Salaried
                  </span>
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
                  <span
                    className={
                      formData.employment === "self-employed" ||
                      (touched.employment &&
                        formData.employment === "self-employed")
                        ? "text-sm text-black"
                        : "text-sm text-black"
                    }
                  >
                    Self-employed
                  </span>
                </label>
              </div>
            </div>
            <div className="flex items-start gap-2 mt-2">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
                className={`mt-1 bg-white ${
                  !formData.agree && touched.agree ? "border-red-500" : ""
                }`}
                onBlur={handleBlur}
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
          </>
        )}

        {step !== 3 && (
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 cursor-pointer transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Processing..." : step === 1 ? "Next" : "Next"}
          </button>
        )}
      </form>

      {step === 3 && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
              <h3 className="text-xl font-semibold mb-4 text-[#1D3E50]">
                Review Your Application
              </h3>
              <div className="space-y-2 text-black text-sm max-h-96 overflow-y-auto">
                <div>
                  <strong>Phone:</strong> {formData.phone}
                </div>
                <div>
                  <strong>PAN:</strong> {formData.pan}
                </div>
                <div>
                  <strong>Name:</strong> {formData.name}
                </div>
                <div>
                  <strong>Email:</strong> {formData.email}
                </div>
                <div>
                  <strong>City:</strong> {formData.city}
                </div>
                <div>
                  <strong>Pin Code:</strong> {formData.pinCode}
                </div>
                <div>
                  <strong>Loan Amount:</strong> ₹{formData.loanAmount}
                </div>
                <div>
                  <strong>Tenure:</strong> {formData.tenure} days
                </div>
                <div>
                  <strong>Salary:</strong> ₹{formData.salary}
                </div>
                <div>
                  <strong>Employment:</strong> {formData.employment}
                </div>
                <div>
                  <strong>Agreed to Terms:</strong>{" "}
                  {formData.agree ? "Yes" : "No"}
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-4">
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => setStep(2)}
                  className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  Back
                </button>
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleFinalSubmit}
                  className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdmissionForm;
