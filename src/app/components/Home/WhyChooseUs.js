"use client";

import { TITLE } from "@/constants";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// src/app/components/WhyChooseUs.js
const WhyChooseUs = () => {
  const features = [
    {
      title: "Fast and Easy Process",
      desc: "Our simple online application ensures quick approvals and smooth loan processing. Get financial support when you need it—without the hassle.",
      icon: "⚡",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      title: "100% Digital Experience",
      desc: "From application to disbursal, everything is online. No paperwork, no in-person visits—just fast, secure, and convenient service.",
      icon: "💻",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      title: "Quick Disbursal",
      desc: "We understand the urgency. Once approved, your loan amount is credited to your account without unnecessary delays.",
      icon: "🏦",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      title: "Tailored for Salaried Employees",
      desc: "Designed exclusively for salaried individuals to meet short-term financial needs quickly and efficiently.",
      icon: "👔",
      gradient: "from-purple-400 to-violet-500",
    },
    {
      title: "Transparent & Secure",
      desc: "No hidden fees or surprises. Clear terms, secure processing, and complete peace of mind.",
      icon: "🔒",
      gradient: "from-red-400 to-pink-500",
    },
    {
      title: "Trusted by Thousands",
      desc: "Join thousands of satisfied salaried professionals who rely on us for quick, reliable, and transparent financial solutions.",
      icon: "🌟",
      gradient: "from-indigo-400 to-purple-500",
    },
  ];

  // State for counters
  const [counters, setCounters] = useState([
    { value: 0, target: 99, label: "Customer Satisfaction", suffix: "%" },
    { value: 0, target: 24, label: "Quick Disbursal", suffix: "h" },
    { value: 0, target: 10000, label: "Happy Customers", suffix: "+" },
    { value: 0, target: 100, label: "Digital Process", suffix: "%" },
  ]);

  const containerRef = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  // Counter animation
  useEffect(() => {
    if (isStatsInView) {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 frames
      const interval = duration / steps;

      counters.forEach((counter, index) => {
        let currentStep = 0;
        const increment = counter.target / steps;

        const timer = setInterval(() => {
          currentStep++;
          setCounters(prev => {
            const newCounters = [...prev];
            const newValue = Math.min(
              Math.floor(increment * currentStep),
              counter.target
            );
            newCounters[index] = { ...newCounters[index], value: newValue };
            return newCounters;
          });

          if (currentStep >= steps) {
            clearInterval(timer);
          }
        }, interval);
      });
    }
  }, [isStatsInView]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const iconVariants = {
    hidden: { rotate: -180, scale: 0 },
    visible: {
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      rotate: [0, 10, -10, 0],
      scale: 1.2,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  return (
    <section 
      ref={containerRef}
      className="relative bg-gradient-to-b from-gray-900 to-black py-20 px-6 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold text-sm mb-6 shadow-lg shadow-cyan-500/20"
          >
            Why Choose Us
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Why Choose{" "}
            </span>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
              {TITLE}?
            </motion.span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Experience financial solutions designed with your convenience and security in mind
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              custom={index}
              className="relative group"
            >
              <motion.div
                variants={cardHoverVariants}
                className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/30 shadow-2xl shadow-black/50 overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-blue-500/0 group-hover:via-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500" />
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-gray-700 to-gray-900 -z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-sm" />
                </div>

                {/* Icon container */}
                <motion.div
                  variants={iconVariants}
                  className={`relative w-20 h-20 flex items-center justify-center bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 shadow-lg`}
                  whileHover="hover"
                >
                  <span className="text-4xl">{feature.icon}</span>
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent animate-ping opacity-0 group-hover:opacity-100" />
                </motion.div>

                {/* Floating number */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index + 0.5 }}
                  className="absolute top-6 right-6 text-5xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors"
                >
                  0{index + 1}
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-100 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.desc}
                </p>

                {/* Animated underline */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.2 * index + 0.6 }}
                  className="h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent mt-6"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated stats section with counters */}
        <div ref={statsRef} className="mt-20 pt-12 border-t border-gray-800">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {counters.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isStatsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 p-6 border border-gray-800 hover:border-cyan-500/50 transition-colors">
                  {/* Counter value with animation */}
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {stat.value}
                    <span className="ml-1">{stat.suffix}</span>
                  </div>
                  <div className="text-gray-400 mt-2 group-hover:text-cyan-100 transition-colors">
                    {stat.label}
                  </div>
                  
                  {/* Animated progress bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isStatsInView ? { width: "100%" } : { width: 0 }}
                    transition={{ duration: 2, delay: 0.5 + index * 0.1 }}
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500"
                  />
                  
                  {/* Animated dot */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className="absolute top-4 right-4 w-2 h-2 bg-cyan-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
