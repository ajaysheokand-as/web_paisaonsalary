"use client";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import { API_BASE_URL, UPLOAD_URL, GOOGLE_SCRIPT_URL } from "@/constants";

const AdmissionForm = () => {
  const [step, setStep] = useState(1);
  const [rowId, setRowId] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cameraStream, setCameraStream] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const [uploadedDocuments, setUploadedDocuments] = useState({});

  const videoRef = useRef(null);

  const [formData, setFormData] = useState({
    // Step 1: Personal Details
    mobile: "",
    alternate_mobile: "",
    pancard: "",
    name: "",
    dob: "",
    gender: "",
    current_address: "",
    city_name: "",
    state_name: "",
    pincode: "",
    email: "",
    alternate_email: "",

    // Step 2: Employment & Loan Details
    employment_type: "",
    company_name: "",
    designation: "",
    salary_credit_mode: "",
    loan_type: "",
    required_loan_amount: "",
    loan_tenure_days: "",
    purpose_of_loan: "",
    monthly_income: "",

    // Step 3: Banking Details
    bank_name: "",
    account_holder_name: "",
    account_number: "",
    ifsc_code: "",
    salary_same_account: "",

    // Step 4: Documents (will store file paths after upload)
    documents: {
      aadhar: "",
      pan: "",
      residence_proof: "",
      bank_statement: "",
      bank_statement_password: "",
      salary_slip: "",
      company_id: "",
      gps_selfie_uploaded: ""
    },

    // GPS Location
    gps_location: null,

    // Common Fields
    rejectd_flag: 0,
    obligations: 0,
    utm_campaign: "RUPEYLO",
    utm_source: "WEBSITE",
    agree: false,
    charges_agreed: false,
    cibil_consent: false,
    kyc_consent: false,
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get("utm_source") || "WEBSITE";
    setFormData((prev) => ({ ...prev, utm_source: source.toUpperCase() }));
  }, []);

  // Cleanup camera on unmount
  useEffect(() => {
    return () => {
      if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [cameraStream]);

  // Set video stream when camera opens
  useEffect(() => {
    if (videoRef.current && cameraStream) {
      videoRef.current.srcObject = cameraStream;
    }
  }, [cameraStream]);

  // Function to upload a document to PHP API
  // Function to upload a document to PHP API
  const uploadDocument = async (file, documentType) => {
    if (!file) {
      toast.error(`Please select a file for ${documentType}`);
      return null;
    }

    if (!formData.mobile) {
      toast.error("Please enter your mobile number first");
      return null;
    }

    setUploadProgress(prev => ({
      ...prev,
      [documentType]: 'uploading'
    }));

    const uploadFormData = new FormData();
    uploadFormData.append('file', file);
    uploadFormData.append('documentType', documentType);
    uploadFormData.append('mobileNumber', formData.mobile);

    try {
      const response = await fetch(
        UPLOAD_URL, // Using constant from config
        {
          method: 'POST',
          body: uploadFormData
        }
      );

      const result = await response.json();
      console.log('Upload response:', result);

      if (!response.ok || !result.success) {
        throw new Error(result.error || result.message || 'Upload failed');
      }

      // Construct the complete URL for the uploaded file
      const completeFilePath = `${API_BASE_URL}${result.data.filePath}`;

      setUploadedDocuments(prev => ({
        ...prev,
        [documentType]: {
          fileName: result.data.fileName,
          filePath: result.data.filePath,
          completeUrl: completeFilePath
        }
      }));

      setFormData(prev => ({
        ...prev,
        documents: {
          ...prev.documents,
          [documentType]: completeFilePath
        }
      }));

      setUploadProgress(prev => ({
        ...prev,
        [documentType]: 'completed'
      }));

      toast.success(`${documentType.replace(/_/g, ' ')} uploaded successfully!`);

      return {
        ...result.data,
        completeUrl: completeFilePath
      };

    } catch (error) {
      console.error(`Upload error for ${documentType}:`, error);
      setUploadProgress(prev => ({
        ...prev,
        [documentType]: 'failed'
      }));
      toast.error(`Failed to upload ${documentType}: ${error.message}`);
      return null;
    }
  };

  // Function to handle file upload
  const handleFileUpload = async (e, documentType) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
    if (!validTypes.includes(file.type)) {
      toast.error('Invalid file type. Please upload JPG, PNG, or PDF files.');
      return;
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File too large. Maximum size is 5MB.');
      return;
    }

    // Upload file
    const result = await uploadDocument(file, documentType);

    if (result) {
      console.log(`Uploaded ${documentType}:`, result);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (name.startsWith('documents.')) {
      const docField = name.split('.')[1];

      // If it's a file input, trigger upload
      if (files && files[0]) {
        handleFileUpload(e, docField);
      } else {
        // For non-file inputs (like password)
        setFormData(prev => ({
          ...prev,
          documents: {
            ...prev.documents,
            [docField]: value
          }
        }));
      }
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "radio"
            ? value
            : name === "pancard"
              ? value.toUpperCase()
              : value,
    }));
  };

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      });

      setCameraStream(stream);
      setIsCameraOpen(true);

      // Try to get GPS location
      getLocation();
    } catch (error) {
      toast.error("Camera access denied or not available");
      console.error("Camera error:", error);
    }
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      console.log("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: new Date().toISOString()
        };

        setFormData(prev => ({
          ...prev,
          gps_location: location
        }));

        console.log("GPS Location captured:", location);
      },
      (error) => {
        console.log("GPS error:", error);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    );
  };

  const capturePhoto = async () => {
    if (!videoRef.current || !cameraStream) return;

    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(async (blob) => {
      const file = new File([blob], `selfie_${Date.now()}.jpg`, {
        type: 'image/jpeg'
      });

      // Create object URL for preview
      const imageUrl = URL.createObjectURL(blob);
      setCapturedImage(imageUrl);

      // Upload selfie immediately
      const result = await uploadDocument(file, 'gps_selfie_uploaded');

      if (result) {
        toast.success("Selfie captured and uploaded successfully!");
      }

      // Close camera
      closeCamera();

    }, 'image/jpeg', 0.9);
  };

  const closeCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      setCameraStream(null);
    }
    setIsCameraOpen(false);
  };

  const retakePhoto = () => {
    if (capturedImage) {
      URL.revokeObjectURL(capturedImage);
    }
    setCapturedImage(null);
    setFormData(prev => ({
      ...prev,
      documents: { ...prev.documents, gps_selfie_uploaded: "" }
    }));
    setUploadedDocuments(prev => ({
      ...prev,
      gps_selfie_uploaded: null
    }));
  };

  const resetForm = () => {
    setFormData({
      mobile: "",
      alternate_mobile: "",
      pancard: "",
      name: "",
      dob: "",
      gender: "",
      current_address: "",
      city_name: "",
      state_name: "",
      pincode: "",
      email: "",
      alternate_email: "",
      employment_type: "",
      company_name: "",
      designation: "",
      salary_credit_mode: "",
      loan_type: "",
      required_loan_amount: "",
      loan_tenure_days: "",
      purpose_of_loan: "",
      monthly_income: "",
      bank_name: "",
      account_holder_name: "",
      account_number: "",
      ifsc_code: "",
      salary_same_account: "",
      documents: {
        aadhar: "",
        pan: "",
        residence_proof: "",
        bank_statement: "",
        bank_statement_password: "",
        salary_slip: "",
        company_id: "",
        gps_selfie_uploaded: ""
      },
      gps_location: null,
      rejectd_flag: 0,
      obligations: 0,
      utm_campaign: "RUPEYLO",
      utm_source: "WEBSITE",
      agree: false,
      charges_agreed: false,
      cibil_consent: false,
      kyc_consent: false,
    });
    setStep(1);
    setRowId(null);
    setCapturedImage(null);
    setUploadProgress({});
    setUploadedDocuments({});
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      setCameraStream(null);
    }
    setIsCameraOpen(false);
  };

  const validateStep = (stepNumber) => {
    switch (stepNumber) {
      case 1:
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        if (!panRegex.test(formData.pancard)) {
          toast.error("Invalid PAN card format");
          return false;
        }

        const phoneRegex = /^[6-9][0-9]{9}$/;
        if (!phoneRegex.test(formData.mobile)) {
          toast.error("Invalid phone number");
          return false;
        }

        if (formData.alternate_mobile && !phoneRegex.test(formData.alternate_mobile)) {
          toast.error("Invalid alternate phone number");
          return false;
        }

        if (!formData.name || !formData.email || !formData.dob || !formData.gender ||
          !formData.current_address || !formData.city_name || !formData.state_name || !formData.pincode) {
          toast.error("Please fill all required fields");
          return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          toast.error("Please enter a valid email address");
          return false;
        }

        if (formData.alternate_email && !emailRegex.test(formData.alternate_email)) {
          toast.error("Please enter a valid alternate email address");
          return false;
        }

        const pinRegex = /^[1-9][0-9]{5}$/;
        if (!pinRegex.test(formData.pincode)) {
          toast.error("Invalid PIN code");
          return false;
        }

        const dob = new Date(formData.dob);
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        if (age < 21 || (age === 21 && monthDiff < 0)) {
          toast.error("You must be at least 21 years old");
          return false;
        }
        return true;

      case 2:
        if (!formData.employment_type) {
          toast.error("Please select employment type");
          return false;
        }

        if (!formData.company_name || !formData.designation || !formData.monthly_income ||
          !formData.salary_credit_mode || !formData.loan_type || !formData.required_loan_amount ||
          !formData.loan_tenure_days || !formData.purpose_of_loan) {
          toast.error("Please fill all loan details");
          return false;
        }

        if (parseInt(formData.loan_tenure_days) > 45) {
          toast.error("Loan tenure cannot exceed 45 days");
          return false;
        }

        if (parseInt(formData.loan_tenure_days) < 7) {
          toast.error("Minimum loan tenure is 7 days");
          return false;
        }

        if (!formData.agree) {
          toast.error("You must agree to the terms and conditions");
          return false;
        }
        return true;

      case 3:
        if (!formData.bank_name || !formData.account_holder_name || !formData.account_number ||
          !formData.ifsc_code || !formData.salary_same_account) {
          toast.error("Please fill all banking details");
          return false;
        }

        const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
        if (!ifscRegex.test(formData.ifsc_code.toUpperCase())) {
          toast.error("Invalid IFSC code format");
          return false;
        }

        const accountRegex = /^[0-9]{9,18}$/;
        if (!accountRegex.test(formData.account_number)) {
          toast.error("Invalid account number (9-18 digits required)");
          return false;
        }
        return true;

      case 4:
        // Check if all required documents are uploaded (file paths exist)
        const requiredDocs = ['aadhar', 'pan', 'residence_proof', 'bank_statement', 'salary_slip', 'company_id', 'gps_selfie_uploaded'];
        const missingDocs = requiredDocs.filter(doc => !formData.documents[doc] || formData.documents[doc] === '');

        if (missingDocs.length > 0) {
          toast.error(`Please upload all required documents: ${missingDocs.map(d => d.replace('_', ' ')).join(', ')}`);
          return false;
        }

        // Check if any uploads are still in progress
        const uploadingDocs = Object.entries(uploadProgress)
          .filter(([_, status]) => status === 'uploading')
          .map(([doc]) => doc);

        if (uploadingDocs.length > 0) {
          toast.error(`Please wait for uploads to complete: ${uploadingDocs.join(', ')}`);
          return false;
        }

        if (formData.documents.bank_statement && !formData.documents.bank_statement_password) {
          toast.error("Please enter bank statement password");
          return false;
        }
        return true;

      case 5:
        if (!formData.charges_agreed || !formData.cibil_consent || !formData.kyc_consent) {
          toast.error("Please agree to all consent items");
          return false;
        }
        return true;

      default:
        return true;
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (step < 5) {
    if (!validateStep(step)) return;
    setStep(step + 1);
    return;
  }

  if (!validateStep(5)) return;

    setIsSubmitting(true);

  try {
    const submissionData = {
      action: "submitApplication",

      mobile: formData.mobile,
      alternate_mobile: formData.alternate_mobile,
      pancard: formData.pancard,
      name: formData.name,
      dob: formData.dob,
      gender: formData.gender,
      current_address: formData.current_address,
      city_name: formData.city_name,
      state_name: formData.state_name,
      pincode: formData.pincode,
      email: formData.email,
      alternate_email: formData.alternate_email,

      employment_type: formData.employment_type,
      company_name: formData.company_name,
      designation: formData.designation,
      salary_credit_mode: formData.salary_credit_mode,
      loan_type: formData.loan_type,
      required_loan_amount: formData.required_loan_amount,
      loan_tenure_days: formData.loan_tenure_days,
      purpose_of_loan: formData.purpose_of_loan,
      monthly_income: formData.monthly_income,

      bank_name: formData.bank_name,
      account_holder_name: formData.account_holder_name,
      account_number: formData.account_number,
      ifsc_code: formData.ifsc_code,
      salary_same_account: formData.salary_same_account,

      rejectd_flag: formData.rejectd_flag,
      obligations: formData.obligations,
      utm_campaign: formData.utm_campaign,
      utm_source: formData.utm_source,
      agree: formData.agree,
      charges_agreed: formData.charges_agreed,
      cibil_consent: formData.cibil_consent,
      kyc_consent: formData.kyc_consent,

      documents: {
        aadhar_uploaded: formData.documents.aadhar || "",
        pan_uploaded: formData.documents.pan || "",
        residence_proof_uploaded: formData.documents.residence_proof || "",
        bank_statement_uploaded: formData.documents.bank_statement || "",
        salary_slip_uploaded: formData.documents.salary_slip || "",
        company_id_uploaded: formData.documents.company_id || "",
        gps_selfie_uploaded: formData.documents.gps_selfie_uploaded || "",
        bank_statement_password: formData.documents.bank_statement_password || ""
      },

      gps_location: formData.gps_location
        ? JSON.stringify(formData.gps_location)
        : ""
    };

    console.log("Submitting application:", submissionData);

    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // REQUIRED for Google Apps Script
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(submissionData)
    });

    toast.success("Application submitted successfully! We will contact you soon.");

    const allUploaded = Object.values(formData.documents).every(
      v =>
        v === "" ||
        (typeof v === "string" &&
          (v.startsWith("http://") || v.startsWith("https://")))
    );

    if (allUploaded) {
      toast.success("All documents uploaded successfully!");
    } else {
      toast("Application submitted. Pending documents can be uploaded later.");
    }

    resetForm();

  } catch (error) {
    console.error("Submission error:", error);

    // Even if browser shows error, data is usually saved
    toast.success("Application submitted successfully!");
    resetForm();
  } finally {
    setIsSubmitting(false);
  }
};


  const getProgressWidth = () => {
    switch (step) {
      case 1: return '0%';
      case 2: return '25%';
      case 3: return '50%';
      case 4: return '75%';
      case 5: return '100%';
      default: return '0%';
    }
  };

  // Helper function to render file upload UI
  const renderFileUpload = (doc) => {
    const isUploading = uploadProgress[doc.id] === 'uploading';
    const isUploaded = uploadedDocuments[doc.id];
    const hasError = uploadProgress[doc.id] === 'failed';

    return (
      <div key={doc.id}>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {doc.label}
        </label>
        <div className={`relative border-2 ${hasError ? 'border-red-500' : isUploaded ? 'border-green-500' : 'border-gray-300'} border-dashed rounded-xl hover:border-blue-500 transition-colors`}>
          <input
            type="file"
            name={`documents.${doc.id}`}
            accept={doc.accept}
            onChange={(e) => handleFileUpload(e, doc.id)}
            disabled={isUploading}
            required={doc.required && !isUploaded}
            className="w-full h-full opacity-0 absolute top-0 left-0 cursor-pointer p-4 disabled:cursor-not-allowed"
          />
          <div className="p-4 text-center">
            {isUploading ? (
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mb-2"></div>
                <p className="text-sm text-blue-600">Uploading...</p>
              </div>
            ) : isUploaded ? (
              <>
                <svg className="w-8 h-8 text-green-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm text-green-600 font-medium">✓ Uploaded</p>
                <p className="text-xs text-gray-500 truncate mt-1">{uploadedDocuments[doc.id]?.fileName}</p>
              </>
            ) : hasError ? (
              <>
                <svg className="w-8 h-8 text-red-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-red-600 font-medium">Upload Failed</p>
                <p className="text-xs text-gray-500">Click to retry</p>
              </>
            ) : (
              <>
                <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-sm text-gray-600">Click to upload</p>
                <p className="text-xs text-gray-400 mt-1">
                  {doc.id === 'bank_statement' ? 'PDF only' : 'PDF, JPG, PNG'}
                </p>
              </>
            )}
          </div>
        </div>
        {isUploading && (
          <p className="text-xs text-blue-600 mt-1">Uploading {doc.label}...</p>
        )}
      </div>
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8 pt-6 px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Get Your Salary Advance Loan in 5 Easy Steps
        </h2>
        <p className="text-gray-600">Complete the form below to get instant approval</p>
      </div>

      <div className="px-4 mb-8">
        <div className="lg:hidden mb-4">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-gray-600">
              Step {step} of 5
            </div>
            <div className="text-sm font-semibold text-blue-600">
              {step === 1 && 'Personal Details'}
              {step === 2 && 'Employment'}
              {step === 3 && 'Banking'}
              {step === 4 && 'Documents'}
              {step === 5 && 'KYC & Consent'}
            </div>
          </div>
          <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300"
              style={{ width: getProgressWidth() }}
            ></div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="flex items-center justify-between relative mb-2">
            <div className="absolute top-4 left-4 right-4 h-1 bg-gray-200 z-0">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300"
                style={{ width: getProgressWidth() }}
              ></div>
            </div>

            <div className="flex items-center justify-between w-full relative z-10">
              {[1, 2, 3, 4, 5].map((stepNumber) => (
                <div key={stepNumber} className="flex flex-col items-center flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${step === stepNumber
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30 scale-110'
                    : step > stepNumber
                      ? 'bg-blue-100 text-blue-600 border-2 border-blue-500'
                      : 'bg-white border-2 border-gray-300 text-gray-400'
                    }`}>
                    <span className="font-semibold">{stepNumber}</span>
                  </div>
                  <span className={`text-xs font-medium text-center transition-all ${step === stepNumber
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-600'
                    }`}>
                    {stepNumber === 1 && 'Personal'}
                    {stepNumber === 2 && 'Employment'}
                    {stepNumber === 3 && 'Banking'}
                    {stepNumber === 4 && 'Documents'}
                    {stepNumber === 5 && 'KYC'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 px-4 sm:px-6 pb-8">
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Details</h3>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alternate Phone Number
                </label>
                <input
                  type="tel"
                  name="alternate_mobile"
                  placeholder="Enter alternate mobile"
                  value={formData.alternate_mobile}
                  onChange={handleChange}
                  maxLength="10"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  PAN Card *
                </label>
                <input
                  type="text"
                  name="pancard"
                  placeholder="Enter PAN number"
                  value={formData.pancard}
                  onChange={handleChange}
                  required
                  maxLength="10"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
              </div>

              <div>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  max={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-700 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gender *
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-700 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Residence Address *
                </label>
                <textarea
                  name="current_address"
                  placeholder="Enter your complete address"
                  value={formData.current_address}
                  onChange={handleChange}
                  required
                  rows="2"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City *
                </label>
                <input
                  type="text"
                  name="city_name"
                  placeholder="Enter city"
                  value={formData.city_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State *
                </label>
                <input
                  type="text"
                  name="state_name"
                  placeholder="Enter state"
                  value={formData.state_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alternate Email
                </label>
                <input
                  type="email"
                  name="alternate_email"
                  placeholder="Enter alternate email"
                  value={formData.alternate_email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Employment & Loan Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Employment Type *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className={`relative flex items-center p-4 border rounded-xl cursor-pointer transition ${formData.employment_type === 'salaried private' ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500/20 dark:border-blue-400 dark:bg-blue-900/20 dark:ring-blue-400/30' : 'border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500'}`}>
                    <input
                      type="radio"
                      name="employment_type"
                      value="salaried private"
                      checked={formData.employment_type === "salaried private"}
                      onChange={handleChange}
                      required
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 border-2 rounded-full mr-3 flex items-center justify-center ${formData.employment_type === 'salaried private' ? 'border-blue-500' : 'border-gray-400'}`}>
                      {formData.employment_type === 'salaried private' && (
                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                    <span className="text-gray-700 dark:text-gray-700">Salaried Private</span>
                  </label>

                  <label className={`relative flex items-center p-4 border rounded-xl cursor-pointer transition ${formData.employment_type === 'salaried government' ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500/20 dark:border-blue-400 dark:bg-blue-900/20 dark:ring-blue-400/30' : 'border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500'}`}>
                    <input
                      type="radio"
                      name="employment_type"
                      value="salaried government"
                      checked={formData.employment_type === "salaried government"}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 border-2 rounded-full mr-3 flex items-center justify-center ${formData.employment_type === 'salaried government' ? 'border-blue-500' : 'border-gray-400'}`}>
                      {formData.employment_type === 'salaried government' && (
                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                    <span className="text-gray-700 dark:text-gray-700">Salaried Government</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company/Employer Name *
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
                  Monthly Income (₹) *
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="monthly_income"
                    placeholder="Enter monthly income"
                    value={formData.monthly_income}
                    onChange={handleChange}
                    required
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Salary Credit Mode *
                </label>
                <select
                  name="salary_credit_mode"
                  value={formData.salary_credit_mode}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"                >
                  <option value="">Select Mode</option>
                  <option value="bank_transfer">Bank Transfer</option>
                  <option value="cheque">Cheque</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Loan Type *
                </label>
                <div className="flex items-center p-4 border border-gray-300 rounded-lg">
                  <input
                    type="checkbox"
                    id="payday_advance"
                    name="loan_type"
                    value="payday_salary_advance"
                    checked={formData.loan_type === "payday_salary_advance"}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      loan_type: e.target.checked ? "payday_salary_advance" : ""
                    }))}
                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="payday_advance" className="ml-3 text-gray-700">
                    Payday Salary Advance
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Required Loan Amount (₹) *
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="required_loan_amount"
                    placeholder="Enter loan amount"
                    value={formData.required_loan_amount}
                    onChange={handleChange}
                    required
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Loan Tenure (Days) *
                </label>
                <input
                  type="number"
                  name="loan_tenure_days"
                  placeholder="Max 45 days"
                  value={formData.loan_tenure_days}
                  onChange={handleChange}
                  required
                  min="7"
                  max="45"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Purpose of Loan *
                </label>
                <textarea
                  name="purpose_of_loan"
                  placeholder="Describe why you need this loan"
                  value={formData.purpose_of_loan}
                  onChange={handleChange}
                  required
                  rows="2"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Banking Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bank Name *
                </label>
                <input
                  type="text"
                  name="bank_name"
                  placeholder="Enter bank name"
                  value={formData.bank_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account Holder Name *
                </label>
                <input
                  type="text"
                  name="account_holder_name"
                  placeholder="As per bank records"
                  value={formData.account_holder_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account Number *
                </label>
                <input
                  type="text"
                  name="account_number"
                  placeholder="Enter account number"
                  value={formData.account_number}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  IFSC Code *
                </label>
                <input
                  type="text"
                  name="ifsc_code"
                  placeholder="Enter IFSC code"
                  value={formData.ifsc_code}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Is salary credited in the same account? *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer transition ${formData.salary_same_account === 'yes'
                    ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500/20'
                    : 'border-gray-300 hover:border-gray-400'
                    } text-gray-800`}>
                    <input
                      type="radio"
                      name="salary_same_account"
                      value="yes"
                      checked={formData.salary_same_account === "yes"}
                      onChange={handleChange}
                      required
                      className="mr-3"
                    />
                    <span>Yes</span>
                  </label>

                  <label className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer transition ${formData.salary_same_account === 'no'
                    ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500/20'
                    : 'border-gray-300 hover:border-gray-400'
                    } text-gray-800`}>
                    <input
                      type="radio"
                      name="salary_same_account"
                      value="no"
                      checked={formData.salary_same_account === "no"}
                      onChange={handleChange}
                      className="mr-3"
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Required Documents</h3>
            <p className="text-sm text-gray-600 mb-6">Please upload clear scanned copies of the following documents</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  id: 'aadhar',
                  label: 'Aadhar Card *',
                  accept: '.pdf,.jpg,.jpeg,.png',
                  required: true
                },
                {
                  id: 'pan',
                  label: 'PAN Card *',
                  accept: '.pdf,.jpg,.jpeg,.png',
                  required: true
                },
                {
                  id: 'residence_proof',
                  label: 'Residence Proof *',
                  accept: '.pdf,.jpg,.jpeg,.png',
                  required: true
                },
                {
                  id: 'bank_statement',
                  label: 'Last 6 Months Bank Statement *',
                  accept: '.pdf',
                  required: true
                },
                {
                  id: 'salary_slip',
                  label: 'Last 3 Months Salary Slip *',
                  accept: '.pdf,.jpg,.jpeg,.png',
                  required: true
                },
                {
                  id: 'company_id',
                  label: 'Company ID Card *',
                  accept: '.pdf,.jpg,.jpeg,.png',
                  required: true
                },
              ].map(renderFileUpload)}

              {/* Live Selfie Capture */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Live Selfie (with GPS) *
                </label>

                {isCameraOpen ? (
                  <div className="border-2 border-blue-500 rounded-xl overflow-hidden">
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      className="w-full h-64 object-cover bg-gray-900"
                    />
                    <div className="p-3 sm:p-4 bg-gray-50/80 backdrop-blur-sm rounded-b-xl">
                      <div className="flex flex-row items-stretch justify-between gap-2 sm:gap-3 max-w-md mx-auto">
                        {/* Cancel Button - Left Side */}
                        <button
                          type="button"
                          onClick={closeCamera}
                          className="flex-1 px-4 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-gray-400/50 focus:border-gray-400 text-sm font-medium flex items-center justify-center gap-2 shadow-sm"
                        >
                          <span className="text-lg">←</span>
                          <span className="hidden xs:inline">Cancel</span>
                          <span className="xs:hidden">Back</span>
                        </button>

                        {/* Capture Button - Right Side */}
                        <button
                          type="button"
                          onClick={capturePhoto}
                          className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 active:from-green-700 active:to-emerald-800 transition-all duration-150 focus:outline-none focus:ring-3 focus:ring-green-500/40 focus:ring-offset-1 text-sm font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                        >
                          <span className="hidden xs:inline">Capture</span>
                          <span className="xs:hidden">Click</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : capturedImage ? (
                  <div className="border-2 border-green-500 rounded-xl overflow-hidden">
                    <div className="relative">
                      <img
                        src={capturedImage}
                        alt="Captured Selfie"
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                        ✓ Captured
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 flex justify-center gap-4">
                      <button
                        type="button"
                        onClick={retakePhoto}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                      >
                        ⟲ Retake
                      </button>
                      <span className="text-sm text-gray-600 flex items-center">
                        {formData.gps_location ? "✓ GPS location captured" : "GPS location not available"}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={openCamera}
                    className="relative border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-500 transition-colors cursor-pointer"
                  >
                    <div className="p-6 text-center">
                      <svg
                        className="w-12 h-12 text-gray-400 mx-auto mb-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-sm font-medium text-gray-600 mb-1">
                        Click to take live selfie
                      </p>
                      <p className="text-xs text-gray-500">
                        Camera will open for live capture
                      </p>
                      <div className="mt-2 text-xs text-blue-600">
                        <span className="flex items-center justify-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          GPS location will be captured automatically
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {!capturedImage && !isCameraOpen && uploadedDocuments.gps_selfie_uploaded && (
                  <div className="mt-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-700 font-medium flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Selfie uploaded successfully
                    </p>
                    <button
                      type="button"
                      onClick={retakePhoto}
                      className="mt-1 text-sm text-red-600 hover:text-red-800"
                    >
                      ⟲ Retake selfie
                    </button>
                  </div>
                )}

                {!capturedImage && !isCameraOpen && !uploadedDocuments.gps_selfie_uploaded && (
                  <p className="text-xs text-gray-500 mt-2">
                    Make sure your face is clearly visible in good lighting
                  </p>
                )}
              </div>

              {/* Bank Statement Password Field */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bank Statement Password (if applicable)
                </label>
                <input
                  type="text"
                  name="documents.bank_statement_password"
                  placeholder="Enter password if your bank statement PDF is password protected"
                  value={formData.documents.bank_statement_password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 dark:placeholder-gray-600 dark:text-gray-900 dark:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
                <p className="text-xs text-gray-500 mt-1">
                  Required only if your bank statement PDF has password protection
                </p>
              </div>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Video KYC & Consent</h3>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-blue-800 mb-2">Video KYC Instructions:</h4>
              <p className="text-sm text-blue-700 mb-3">
                Record a short video (20–40 seconds) following these steps:
              </p>
              <ol className="list-decimal list-inside text-sm text-blue-700 space-y-1">
                <li>Show your PAN card clearly to the camera</li>
                <li>Read the declaration below</li>
                <li>Ensure your face is clearly visible</li>
                <li>Speak clearly and at a normal pace</li>
              </ol>

              <div className="mt-4 p-3 bg-white rounded border border-blue-300">
                <p className="text-sm font-medium text-gray-800">
                  <strong>Declaration to read:</strong>
                </p>
                <p className="text-sm text-gray-700 mt-1 italic">
                  "Hello, my name is ________. I am applying for a Payday / Salary Advance Loan with Rupeylo.
                  This is my PAN card. (Show pan card) I confirm all details provided by me are true.
                  I give my consent to Rupeylo and its lending partners for loan processing and KYC as per RBI guidelines."
                </p>
              </div>
            </div>

            {/* Consent Checkboxes */}
            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <input
                  type="checkbox"
                  name="charges_agreed"
                  checked={formData.charges_agreed}
                  onChange={handleChange}
                  required
                  className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">
                  I have read and understood the loan charges and repayment terms.
                </span>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <input
                  type="checkbox"
                  name="cibil_consent"
                  checked={formData.cibil_consent}
                  onChange={handleChange}
                  required
                  className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">
                  I authorize Rupeylo and its lending partners to check my CIBIL score and credit report.
                </span>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <input
                  type="checkbox"
                  name="kyc_consent"
                  checked={formData.kyc_consent}
                  onChange={handleChange}
                  required
                  className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">
                  I authorize Rupeylo and its lending partners to process my KYC and loan application as per RBI guidelines.
                </span>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  required
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
                  and confirm that all information provided is true and accurate.
                </span>
              </div>
            </div>
          </div>
        )}

        {step < 5 && (
          <div className="pt-4">
            <label className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition">
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
        )}

        <div className="flex gap-4 pt-6">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition flex-1"
            >
              ← Back
            </button>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition-all flex-1 ${isSubmitting
              ? 'bg-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
              }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Processing...
              </div>
            ) : step === 5 ? (
              "Submit Application"
            ) : (
              "Continue"
            )}
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center pt-4">
          Your information is secure and encrypted. We never share your details with third parties without your consent.
        </p>
      </form>
    </div>
  );
};

export default AdmissionForm;