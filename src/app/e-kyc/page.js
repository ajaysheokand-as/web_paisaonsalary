"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";
import Swal from "sweetalert2";
import { useSearchParams } from "next/navigation";

export default function EKYCPage() {
  const searchParams = useSearchParams();
  const processId =
    searchParams.get("token") || "REYxTTlvU1BJaGU5ck9rQi9yOGxqdz09";

  const [step, setStep] = useState("aadhaar");
  const [aadhaar, setaadhaar] = useState("");
  const [otp, setOtp] = useState("");
  const [resp, setResp] = useState({});
  const handleaadhaarSubmit = async (e) => {
    e.preventDefault();
    if (aadhaar.length === 12) {
      toast.dismiss();
      toast.loading("Sending OTP...");
      try {
        // Simulate API call to send OTP and include token
        const res = await fetch(
          `https://crm.paisaonsalary.in/api/request/aadhaar/otp`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              aadhaar,
              processId,
            }),
          }
        );
        const data = await res.json();
        console.log("data=>", data);
        if (data?.success === true) {
          toast.dismiss();
          toast.success("OTP sent successfully!");
          setStep("otp");
          setResp(data);
        }
      } catch (error) {
        toast.dismiss();
        toast.error("Failed to send OTP");
      }
    } else {
      toast.error("Please enter a valid 12-digit aadhaar number");
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      try {
        // Simulate API call to send OTP and include token
        const res = await fetch(
          `https://crm.paisaonsalary.in/api/request/aadhaar/verify`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fwdp: resp?.response?.model?.fwdp,
              shareCode: resp?.response?.model?.shareCode,
              otp,
              codeVerifier: resp?.response?.model?.codeVerifier,
              validateXml: true,
              processId,
            }),
          }
        );
        const data = await res.json();
        console.log("data=>", data);
        if (data?.success === true) {
          toast.dismiss();
          toast.success("OTP Verified!");
          Swal.fire({
            title: "Verification Successful!",
            text: "Would you like to share, stay, or close this window?",
            icon: "success",
            showCancelButton: true,
            showDenyButton: true,
            confirmButtonText: "Share",
            cancelButtonText: "Close",
            denyButtonText: "Stay",
          }).then((result) => {
            if (result.isConfirmed) {
              if (navigator.share) {
                navigator
                  .share({
                    title: "Paisa On Salary",
                    text: "My eKYC verification was successful!",
                    url: window.location.href,
                  })
                  .catch((err) => {
                    console.error("Error sharing:", err);
                  });
              } else {
                toast.error("Share not supported on this browser.");
              }
            } else if (result.isDismissed) {
              window.close();
            }
            // Do nothing on deny ("Stay")
          });
        }
      } catch (error) {
        toast.dismiss();
        toast.error("Wrong OTP!");
      }
      // toast.success("OTP Verified!");
    } else {
      toast.error("Invalid OTP");
    }
  };

  return (
    <div className="max-w-sm mx-auto px-4 py-8 font-sans animate-fade-in">
      <div className="text-center mb-8">
        <Image
          src="/logo.png"
          alt="Company Logo"
          width={120}
          height={120}
          className="mx-auto mb-4 animate-fade-in"
        />
        <h2 className="text-xl font-semibold text-gray-800">
          e-KYC Verification
        </h2>
        <p className="text-sm text-gray-600">
          Please complete Aadhaar-based verification to proceed
        </p>
      </div>

      {step === "aadhaar" && (
        <form
          onSubmit={handleaadhaarSubmit}
          className="space-y-4 animate-fade-in"
        >
          <label className="block text-sm font-medium text-gray-700">
            Aadhaar Number
            <input
              type="text"
              value={aadhaar}
              onChange={(e) => setaadhaar(e.target.value)}
              maxLength="12"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 cursor-pointer transition duration-200"
          >
            Send OTP
          </button>
        </form>
      )}

      {step === "otp" && (
        <form onSubmit={handleOtpSubmit} className="space-y-4 animate-fade-in">
          <label className="block text-sm font-medium text-gray-700">
            Enter OTP
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength="6"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-300"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 cursor-pointer transition duration-200"
          >
            Verify OTP
          </button>
        </form>
      )}
    </div>
  );
}
