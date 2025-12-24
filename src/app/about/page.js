"use client";
import React from "react";
import Image from "next/image";
import CTABanner from "../components/Home/CTABanner";
import Header from "../components/common/Header";
import { motion } from "framer-motion";

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7 }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7 }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Full-Size Header with Background */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/moneybg.jpeg"
            alt="Background"
            fill
            className="object-cover brightness-125"
            priority
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            About <span className="text-blue-400">RupeyLo</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Empowering salaried individuals with instant, transparent, and
            <span className="text-blue-400 font-semibold"> hassle-free financial solutions</span>
          </motion.p>
        </div>
      </motion.section>

      {/* Mission & Vision Cards */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Mission Card - Slides from left */}
          <motion.div
            variants={slideInLeft}
            className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-blue-500/10"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              To revolutionize personal financing for salaried professionals by providing
              <span className="text-blue-400 font-medium"> lightning-fast approvals</span>,
              <span className="text-blue-400 font-medium"> ironclad security</span>, and
              <span className="text-blue-400 font-medium"> crystal-clear transparency</span>
              in every transaction.
            </p>
          </motion.div>

          {/* Vision Card - Slides from right */}
          <motion.div
            variants={slideInRight}
            className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-purple-500/10"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              {`To become India's most trusted financial partner for the salaried workforce, 
              delivering `}
              <span className="text-purple-400 font-medium">unmatched convenience</span>
              {` and `}
              <span className="text-purple-400 font-medium">reliability</span>
              {` through cutting-edge technology and customer-centric innovation.`}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us & Team Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* Why Choose Us - Slides from left */}
          <motion.div
            variants={slideInLeft}
            className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700"
          >
            <h2 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-gray-700">
              Why Choose <span className="text-blue-400">RupeyLo</span>?
            </h2>
            <ul className="space-y-4">
              {[
                { text: "Instant Loan Approval", icon: "⚡" },
                { text: "100% Digital Process", icon: "📱" },
                { text: "No Hidden Charges", icon: "💰" },
                { text: "Transparent & Secure", icon: "🛡️" },
                { text: "Trusted by Thousands", icon: "🤝" }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <span className="text-2xl mr-3">{item.icon}</span>
                  <span className="text-lg">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Team - Slides from right */}
          <motion.div
            variants={slideInRight}
            className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700"
          >
            <h2 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-gray-700">
              Our <span className="text-purple-400">Expert</span> Team
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our team consists of finance and technology experts dedicated to
              building a frictionless borrowing experience tailored to the needs
              of working professionals.
            </p>
            <div className="flex items-center text-gray-400">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              <span>Certified financial experts</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Feature Sections with Alternating Layout */}
      <section className="max-w-6xl mx-auto px-4 py-20 space-y-20">
        {/* Section 1: Instant Loan Approval */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <motion.div variants={slideInLeft} className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/Loans.jpeg"
              alt="Instant loan approval"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
          </motion.div>
          <motion.div variants={slideInRight}>
            <h2 className="text-4xl font-bold text-white mb-4">
              Instant <span className="text-blue-400">Loan Approval</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Apply and get approved for a loan within minutes. Our AI-powered
              automated system ensures you receive instant decisions based on
              your profile, eliminating the wait time traditionally associated
              with loan applications.
            </p>
          </motion.div>
        </motion.div>

        {/* Section 2: Digital Process */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <motion.div variants={slideInLeft} className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-white mb-4">
              100% <span className="text-green-400">Digital Process</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Experience a completely paperless journey from start to finish.
              Upload your documents, verify your details, and receive disbursal—all
              online. No queues, no paperwork, no unnecessary delays.
            </p>
          </motion.div>
          <motion.div variants={slideInRight} className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
            <Image
              src="/digital.jpeg"
              alt="Digital process"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
          </motion.div>
        </motion.div>

        {/* Section 3: Secure & Trusted */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <motion.div variants={slideInLeft} className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/secure.jpeg"
              alt="Secure and trusted"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
          </motion.div>
          <motion.div variants={slideInRight}>
            <h2 className="text-4xl font-bold text-white mb-4">
              Secure & <span className="text-yellow-400">Trusted</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Your financial data is our top priority. We employ industry-grade
              AES-256 encryption, regular security audits, and strict privacy
              standards to ensure your information remains completely secure
              and confidential.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-gray-800 to-gray-900"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Our <span className="text-blue-400">Impact</span> in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10K+", label: "Happy Customers", color: "text-blue-400" },
              { value: "₹10Cr+", label: "Loan Disbursed", color: "text-green-400" },
              { value: "100%", label: "Online Process", color: "text-yellow-400" },
              { value: "4.8★", label: "Customer Rating", color: "text-purple-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <CTABanner />
    </div>
  );
}