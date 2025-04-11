import { ADDRESS, EMAIL, PHONE } from "@/constants";
import React from "react";
import Header from "../components/common/Header";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Connect with Paisa On Salary" />
      {/* <header className="text-center py-12 bg-[#1D3E50] text-white">
        <h1 className="text-4xl font-bold"></h1>
        <p className="mt-2 text-lg">
          {` We're here to assist you with any questions about our loan services.
          Reach out anytime!`}
        </p>
      </header> */}

      <main className="max-w-6xl mx-auto bg-white p-8 my-8 rounded-lg shadow-md flex flex-col lg:flex-row gap-8">
        {/* Left Column - Contact Details */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl font-semibold text-[#1D3E50] mb-4">
            Contact Information
          </h2>
          <p className="text-gray-600 mb-4">
            {`Whether you're looking for support or have general inquiries, our
            team is ready to help.`}
          </p>
          <ul className="text-gray-700 space-y-3">
            <li>
              <strong>Address:</strong> {ADDRESS}
            </li>
            <li>
              <strong>Email:</strong> {EMAIL}
            </li>
            <li>
              <strong>Phone:</strong> {PHONE}
            </li>
            <li>
              <strong>Hours:</strong> Monday to Saturday, 9:00 AM – 6:00 PM
            </li>
          </ul>
        </div>

        {/* Right Column - Contact Form */}
        <div className="lg:w-1/2 w-full">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#1D3E50] focus:border-[#1D3E50]"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#1D3E50] focus:border-[#1D3E50]"
                placeholder="example@domain.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                name="message"
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-[#1D3E50] focus:border-[#1D3E50]"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#1D3E50] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#4A91A4] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      <section className="max-w-6xl mx-auto my-12 ">
        <h2 className="text-2xl font-semibold text-[#1D3E50] mb-4">
          Visit Our Office
        </h2>
        <div className="w-full h-64 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.2457418452957!2d75.7101090748952!3d29.155961173089633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391229b47d5b35e3%3A0xa7a5c876e372ccf6!2sRed%20Square%20Market%2C%20Hisar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1712847299309!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
