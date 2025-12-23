import { HEAD_OFFICE, EMAIL, PHONE } from "@/constants";
import React from "react";
import Header from "../components/common/Header";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pt-16"> 
  <div className="relative py-20 w-full overflow-hidden bg-gradient-to-br from-cyan-900 via-gray-900 to-gray-800">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-300">
            Connect with RupeyLo
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            We're here to assist you with any questions about our loan services.
            <span className="block mt-2 text-cyan-300 font-semibold">
              Reach out anytime!
            </span>
          </p>
          
          {/* Call to action badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-gray-800/70 backdrop-blur-sm rounded-full border border-cyan-800/50">
              <span className="text-cyan-300 font-medium">24/7 Support</span>
            </div>
            <div className="px-6 py-3 bg-gray-800/70 backdrop-blur-sm rounded-full border border-cyan-800/50">
              <span className="text-cyan-300 font-medium">Fast Response</span>
            </div>
            <div className="px-6 py-3 bg-gray-800/70 backdrop-blur-sm rounded-full border border-cyan-800/50">
              <span className="text-cyan-300 font-medium">Expert Guidance</span>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto bg-gray-800 p-8 my-8 rounded-xl shadow-2xl flex flex-col lg:flex-row gap-8">
        {/* Left Column - Contact Details */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            Contact Information
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            {`Whether you're looking for support or have general inquiries, our
            team is ready to help.`}
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
              <div className="p-2 bg-cyan-900 rounded-lg">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <strong className="text-cyan-300">Address:</strong>
                <p className="text-gray-300 mt-1">{HEAD_OFFICE}</p>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
              <div className="p-2 bg-cyan-900 rounded-lg">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <strong className="text-cyan-300">Email:</strong>
                <p className="text-gray-300 mt-1">{EMAIL}</p>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
              <div className="p-2 bg-cyan-900 rounded-lg">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <strong className="text-cyan-300">Phone:</strong>
                <p className="text-gray-300 mt-1">{PHONE}</p>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
              <div className="p-2 bg-cyan-900 rounded-lg">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <strong className="text-cyan-300">Hours:</strong>
                <p className="text-gray-300 mt-1">Monday to Saturday, 9:00 AM – 6:00 PM</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Column - Contact Form */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none text-gray-100 placeholder-gray-400"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none text-gray-100 placeholder-gray-400"
                placeholder="example@domain.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                rows="4"
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none text-gray-100 placeholder-gray-400"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 text-white font-bold py-3 px-4 rounded-lg hover:from-cyan-700 hover:to-cyan-800 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      <section className="max-w-6xl mx-auto my-12">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">
          Visit Our Office
        </h2>
        <div className="w-full h-96 rounded-xl overflow-hidden shadow-2xl border-2 border-gray-700">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14020.272224982214!2d77.0489555!3d28.575889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce256f77596f7%3A0x9455f4c00b2993cb!2s247%20Office!5e0!3m2!1sen!2sin!4v1700000000000
"
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