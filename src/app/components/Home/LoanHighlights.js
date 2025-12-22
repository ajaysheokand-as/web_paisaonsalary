"use client";

import { useState, useEffect, useRef } from "react";
import {
  CalendarCheck,
  Clock,
  Eye,
  Calculator,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    icon: <CalendarCheck size={32} className="text-[#4ADE80]" />,
    title: "Flexible Tenure",
    desc: "Choose repayment terms that align with your salary cycle.",
    bgImage: "/1.jpg", // Update with your actual image paths
  },
  {
    icon: <Clock size={32} className="text-[#60A5FA]" />,
    title: "24x7 Access",
    desc: "Apply for a loan anytime, anywhere — even on weekends.",
    bgImage: "/2.jpg",
  },
  {
    icon: <Eye size={32} className="text-[#F472B6]" />,
    title: "Live Loan Tracking",
    desc: "Track your loan status in real-time with full transparency.",
    bgImage: "/3.jpg",
  },
  {
    icon: <Calculator size={32} className="text-[#FBBF24]" />,
    title: "Smart Interest Calculator",
    desc: "Know exactly what you'll pay before applying. No surprises.",
    bgImage: "/4.jpg",
  },
  {
    icon: <ShieldCheck size={32} className="text-[#818CF8]" />,
    title: "Secure & Private",
    desc: "All your information is encrypted and safely stored.",
    bgImage: "/5.jpg",
  },
];

const LoanHighlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);

  const itemsToShow = 3; // Number of cards to show at once
  // Create an extended array for seamless infinite scroll
  const extendedFeatures = [...features, ...features, ...features];

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      // When we reach near the end of extended array, reset to middle
      if (next >= extendedFeatures.length - itemsToShow * 2) {
        return features.length;
      }
      return next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev - 1;
      // When we reach near the beginning of extended array, reset to middle
      if (next <= 1) {
        return features.length;
      }
      return next;
    });
  };

  const goToSlide = (index) => {
    // Map the dot index to actual slide position in extended array
    setCurrentIndex(index * itemsToShow + features.length);
  };

  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 3000); // Auto-slide every 3 seconds for smoother continuous effect
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused, currentIndex]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Calculate the actual slide index for dots
  const actualSlideIndex = Math.floor((currentIndex - features.length) / itemsToShow);

  return (
    <section 
      className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-[#0F172A]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Your Loan, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Your Way</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Enjoy flexible, simple, and secure financing with RupeyLo.
            Everything you need, on your terms.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden rounded-2xl">
          <div 
            ref={sliderRef}
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          >
            {extendedFeatures.map((item, idx) => (
              <div
                key={idx}
                className="w-full flex-shrink-0 px-4"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="relative overflow-hidden rounded-xl shadow-2xl h-full group">
                  {/* Background Image with Overlay - Using your public folder images */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                    style={{ 
                      backgroundImage: `url(${item.bgImage})`,
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90" />
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    <div className="mb-6">
                      <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-lg">
                        {item.icon}
                      </div>
                    </div>
                    
                    <h4 className="font-bold text-white text-xl mb-4">
                      {item.title}
                    </h4>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                      {item.desc}
                    </p>
                    
                    
                  </div>
                  
                  {/* Hover Effect Glow */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/30 rounded-xl transition-all duration-300 pointer-events-none group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]" />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700 hover:bg-gray-800 transition-all duration-300 hover:scale-110 shadow-xl"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700 hover:bg-gray-800 transition-all duration-300 hover:scale-110 shadow-xl"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>

        {/* Dots Indicator - Only for original features */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(features.length / itemsToShow) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === actualSlideIndex 
                  ? "w-8 bg-gradient-to-r from-cyan-500 to-emerald-500" 
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        
       
      </div>
    </section>
  );
};

export default LoanHighlights;