"use client";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const AdmissionForm = () => {
  const [step, setStep] = useState(1);
  const [rowId, setRowId] = useState(null);
 const [formData, setFormData] = useState({
  mobile: "",
  pancard: "",
  name: "",
  pincode: "",
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
  utm_campaign: "RUPEYLO",
  utm_source: "WEBSITE",
  agree: false,
});


  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get("utm_source") || "WEBSITE";
    setFormData((prev) => ({ ...prev, utm_source: source.toUpperCase() }));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "radio"
          ? value
          : name === "pancard" ? value.toUpperCase() : value,
    }));
  };

  const resetForm = () => {
    setFormData({
      mobile: "",
      pancard: "",
      name: "",
      pincode: "",
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
      utm_campaign: "RUPEYLO",
      utm_source: "WEBSITE",
      agree: false,
    });
    setStep(1);
    setRowId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (step === 1) {
      // Validation for step 1
      const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
      if (!panRegex.test(formData.pancard)) {
        toast.error("Invalid PAN card format");
        setIsSubmitting(false);
        return;
      }

      const phoneRegex = /^[6-9][0-9]{9}$/;
      if (!phoneRegex.test(formData.mobile)) {
        toast.error("Invalid phone number");
        setIsSubmitting(false);
        return;
      }

      if (!formData.agree) {
        toast.error("You must agree to the terms and conditions");
        setIsSubmitting(false);
        return;
      }

      // Basic required field check
      if (!formData.name || !formData.email || !formData.city_name || !formData.pincode) {
        toast.error("Please fill all required fields");
        setIsSubmitting(false);
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast.error("Please enter a valid email address");
        setIsSubmitting(false);
        return;
      }

      setStep(2);
      setIsSubmitting(false);
      return;
    }

    if (step === 2) {
      // Validation for step 2
      if (!formData.mobile || !formData.pancard || !formData.name || !formData.pincode || !formData.email) {
        toast.error("Please fill all mandatory fields");
        setIsSubmitting(false);
        return;
      }

      const pinRegex = /^[1-9][0-9]{5}$/;
      if (!pinRegex.test(formData.pincode)) {
        toast.error("Invalid PIN code");
        setIsSubmitting(false);
        return;
      }

      if (formData.employment !== "salaried") {
        toast.error("We provide loans only to salaried individuals");
        setIsSubmitting(false);
        return;
      }
      if (!formData.agree) {
        toast.error("You must agree to the terms and conditions");
        setIsSubmitting(false);
        return;
      }

      // Check employment-related fields
      if (!formData.company_name || !formData.designation) {
        toast.error("Please fill company and designation details");
        setIsSubmitting(false);
        return;
      }

    try {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbyCLiffmP6X6XihNM8e5XDgR9SGhGnVVD6PbQ2TEOR9lHgb5EFTxzwGAnZcshJ1ximK/exec",
    {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
        stage: "step2",
        rowId: rowId || "NEW",
      }),
    }
  );

const text = await response.text();
let result;

try {
  result = JSON.parse(text);
} catch {
  throw new Error("Invalid response from server");
}

  if (result.status === "success") {
    toast.success("Application submitted successfully!");
    resetForm();
  } else {
    toast.error("Submission failed. Please try again.");
  }
} catch (error) {
  console.error(error);
  toast.error("Network error. Please try again.");
} finally {
  setIsSubmitting(false);
}

      
    }
  };

  return (
<div className="w-full max-w-md mx-auto sm:max-w-lg md:max-w-3xl">
      {/* Form Header */}
<div className="text-center mb-6 pt-4 px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Get Your Loan in 3 Easy Steps
        </h2>
        <p className="text-gray-600">Fill the form below to get started</p>
      </div>

      {/* Progress Steps */}
<div className="px-6 mb-8">
  <div className="flex items-center justify-between relative">
    <div className="absolute top-4 left-4 right-4 h-1 bg-gray-200 dark:bg-gray-700 z-0">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300"
        style={{ width: step === 1 ? '0%' : '50%' }}
      ></div>
    </div>
    
    <div className="flex items-center justify-between w-full relative z-10">
      {/* Step 1 - Container with proper spacing */}
      <div className="flex flex-col items-center flex-1">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step === 1 ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30' : 'bg-white dark:bg-gray-800 border-2 border-blue-500 text-blue-600 dark:text-blue-400'}`}>
          <span className="font-semibold">1</span>
        </div>
        <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 text-center">Personal Details</span>
      </div>
      
      {/* Step 2 - Container with proper spacing */}
      <div className="flex flex-col items-center flex-1">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step === 2 ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30' : step > 2 ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-2 border-blue-500' : 'bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-400'}`}>
          <span className="font-semibold">2</span>
        </div>
        <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 text-center">Loan Details</span>
      </div>
      
      {/* Step 3 - Container with proper spacing */}
      <div className="flex flex-col items-center flex-1">
        <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-400">
          <span className="font-semibold">3</span>
        </div>
        <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 text-center">Approval</span>
      </div>
    </div>
  </div>
</div>
      {/* Form Content */}
<form onSubmit={handleSubmit} className="space-y-4 px-4 sm:px-6 pb-6">
        {step === 1 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  maxLength="10"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  PAN Card *
                </label>
                <input
                  type="text"
                  name="pancard"
                  placeholder="Enter your PAN number"
                  value={formData.pancard}
                  onChange={handleChange}
                  required
                  maxLength="10"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition uppercase"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City *
                </label>
                <input
                  type="text"
                  name="city_name"
                  placeholder="Enter your city"
                  value={formData.city_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  PIN Code *
                </label>
                <input
                  type="text"
                  name="pincode"
                  placeholder="Enter PIN code"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  maxLength="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Employment Type *
                </label>
              <div className="grid grid-cols-2 gap-3">
  <label className={`flex items-center justify-center p-4 border rounded-xl cursor-pointer transition ${formData.employment === 'salaried' ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500/20 dark:border-blue-400 dark:bg-blue-900/20 dark:ring-blue-400/30' : 'border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500'}`}>
    <input
      type="radio"
      name="employment"
      value="salaried"
      checked={formData.employment === "salaried"}
      onChange={handleChange}
      required
      className="mr-3"
    />
    <span className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition">Salaried</span>
  </label>
  
  <label className={`flex items-center justify-center p-4 border rounded-xl cursor-pointer transition ${formData.employment === 'self-employed' ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500/20 dark:border-blue-400 dark:bg-blue-900/20 dark:ring-blue-400/30' : 'border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500'}`}>
    <input
      type="radio"
      name="employment"
      value="self-employed"
      checked={formData.employment === "self-employed"}
      onChange={handleChange}
      className="mr-3"
    />
    <span className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition">Self-employed</span>
  </label>
</div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company_name"
                  placeholder="Enter company name"
                  value={formData.company_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Designation *
                </label>
                <input
                  type="text"
                  name="designation"
                  placeholder="Enter your designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Monthly Salary (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                  <input
                    type="number"
                    name="monthly_income"
                    placeholder="Enter monthly salary"
                    value={formData.monthly_income}
                    onChange={handleChange}
                    min="0"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Loan Amount (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                  <input
                    type="number"
                    name="loan_amount"
                    placeholder="Enter loan amount"
                    value={formData.loan_amount}
                    onChange={handleChange}
                    min="0"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {/* Terms and Conditions */}
        <div className="pt-4">
          <label className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">
              I agree to all{" "}
              <a
                href="/terms-conditions"
                target="_blank"
                className="text-blue-600 font-medium hover:text-blue-700 hover:underline"
              >
                Terms and Conditions
              </a>{" "}
              and confirm that I'm eligible for a salary-based loan
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 ${isSubmitting ? 'bg-gradient-to-r from-gray-500 to-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.99]'}`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Processing...
            </div>
          ) : step === 1 ? (
            <div className="flex items-center justify-center gap-2">
              Continue to Next Step
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          ) : (
            "Submit Application"
          )}
        </button>

        {/* Step Navigation */}
        {step === 2 && (
          <button
            type="button"
            onClick={() => setStep(1)}
            className="w-full text-center text-blue-600 hover:text-blue-700 font-medium py-3"
          >
            ← Back to Personal Details
          </button>
        )}

        {/* Privacy Note */}
        <p className="text-xs text-gray-500 text-center pt-4">
          Your information is secure and encrypted. We never share your details with third parties.
        </p>
      </form>
    </div>
  );
};

export default AdmissionForm;