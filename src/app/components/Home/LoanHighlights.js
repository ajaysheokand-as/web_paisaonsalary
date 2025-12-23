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
    icon: CalendarCheck,
    title: "Flexible Tenure",
    desc: "Choose repayment terms that align with your salary cycle.",
    bgImage: "/1.jpg",
    color: "text-[#4ADE80]",
  },
  {
    icon: Clock,
    title: "24x7 Access",
    desc: "Apply for a loan anytime, anywhere — even on weekends.",
    bgImage: "/2.jpg",
    color: "text-[#60A5FA]",
  },
  {
    icon: Eye,
    title: "Live Loan Tracking",
    desc: "Track your loan status in real-time with full transparency.",
    bgImage: "/3.jpg",
    color: "text-[#F472B6]",
  },
  {
    icon: Calculator,
    title: "Smart Interest Calculator",
    desc: "Know exactly what you'll pay before applying. No surprises.",
    bgImage: "/4.jpg",
    color: "text-[#FBBF24]",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    desc: "All your information is encrypted and safely stored.",
    bgImage: "/5.jpg",
    color: "text-[#818CF8]",
  },
];

const LoanHighlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Handle responsive items to show
  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
      
      if (width < 640) {
        setItemsToShow(1);
      } else if (width < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  // Create an extended array for seamless infinite scroll
  const extendedFeatures = [...features, ...features, ...features];

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      if (next >= extendedFeatures.length - itemsToShow * 2) {
        return features.length;
      }
      return next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev - 1;
      if (next <= 1) {
        return features.length;
      }
      return next;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index * itemsToShow + features.length);
  };

  // Auto-play effect
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused, currentIndex, itemsToShow]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Calculate the actual slide index for dots
  const actualSlideIndex = Math.floor((currentIndex - features.length) / itemsToShow);

  // Get icon size based on screen size
  const getIconSize = () => {
    if (isMobile) return 24;
    if (isTablet) return 28;
    return 32;
  };

  // Get chevron size based on screen size
  const getChevronSize = () => {
    if (isMobile) return 16;
    if (isTablet) return 20;
    return 24;
  };

  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-[#0F172A]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 px-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Your Loan, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Your Way</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-6 lg:mb-8 max-w-2xl mx-auto px-4">
            Enjoy flexible, simple, and secure financing with RupeyLo.
            Everything you need, on your terms.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden rounded-xl lg:rounded-2xl mx-2 sm:mx-4">
          <div 
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          >
            {extendedFeatures.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="w-full flex-shrink-0 px-2 sm:px-3 lg:px-4"
                  style={{ width: `${100 / itemsToShow}%` }}
                >
                  <div className="relative overflow-hidden rounded-lg lg:rounded-xl shadow-lg lg:shadow-2xl h-full group">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ 
                        backgroundImage: `url(${item.bgImage})`,
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90" />
                    
                    {/* Content */}
                    <div className="relative z-10 p-4 sm:p-6 lg:p-8 h-full flex flex-col">
                      <div className="mb-4 sm:mb-6">
                        <div className="inline-flex p-2 sm:p-3 rounded-lg lg:rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-lg">
                          <IconComponent size={getIconSize()} className={item.color} />
                        </div>
                      </div>
                      
                      <h4 className="font-bold text-white text-lg sm:text-xl lg:text-xl mb-2 sm:mb-3 lg:mb-4">
                        {item.title}
                      </h4>
                      
                      <p className="text-gray-300 text-xs sm:text-sm lg:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                        {item.desc}
                      </p>
                    </div>
                    
                    {/* Hover Effect Glow */}
                    <div className="absolute inset-0 border border-transparent group-hover:border-cyan-500/30 rounded-lg lg:rounded-xl transition-all duration-300 pointer-events-none group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] lg:group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-1 sm:left-2 lg:left-4 top-1/2 -translate-y-1/2 z-10 p-1.5 sm:p-2 lg:p-3 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700 hover:bg-gray-800 transition-all duration-300 hover:scale-110 shadow-lg lg:shadow-xl"
            aria-label="Previous slide"
          >
            <ChevronLeft size={getChevronSize()} className="text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-1 sm:right-2 lg:right-4 top-1/2 -translate-y-1/2 z-10 p-1.5 sm:p-2 lg:p-3 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700 hover:bg-gray-800 transition-all duration-300 hover:scale-110 shadow-lg lg:shadow-xl"
            aria-label="Next slide"
          >
            <ChevronRight size={getChevronSize()} className="text-white" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-1.5 sm:space-x-2">
          {Array.from({ length: Math.ceil(features.length / itemsToShow) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                index === actualSlideIndex 
                  ? "w-6 sm:w-8 bg-gradient-to-r from-cyan-500 to-emerald-500" 
                  : "w-1.5 sm:w-2 bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Swipe Instructions */}
        <div className="lg:hidden text-center mt-6">
          <p className="text-gray-400 text-xs sm:text-sm">
            Swipe or use arrows to navigate
          </p>
        </div>
      </div>

      {/* Touch Events for Mobile */}
      {typeof window !== 'undefined' && window.innerWidth < 1024 && (
        <div 
          className="absolute inset-0 lg:hidden"
          onTouchStart={(e) => {
            const touchStartX = e.touches[0].clientX;
            const handleTouchEnd = (e) => {
              const touchEndX = e.changedTouches[0].clientX;
              const diff = touchStartX - touchEndX;
              
              if (Math.abs(diff) > 50) {
                if (diff > 0) {
                  nextSlide();
                } else {
                  prevSlide();
                }
              }
              
              document.removeEventListener('touchend', handleTouchEnd);
            };
            
            document.addEventListener('touchend', handleTouchEnd);
          }}
        />
      )}
    </section>
  );
};

export default LoanHighlights;