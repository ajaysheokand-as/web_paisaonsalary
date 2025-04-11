"use client";
import React, { useState } from "react";
import Header from "../components/common/Header";
import AdmissionForm from "../components/AdmissionForm";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  const courses = [
    {
      title: "BASIC",
      price: "₹15,999",
      recommended: false,
      features: [
        "Basic Languages",
        "Duration: 3 Months",
        "Course Certificate",
        "Doubt Solving via WhatsApp/Skype Group",
      ],
      buttonText: "ENROLL NOW",
    },
    {
      title: "ADVANCE",
      price: "₹39,999",
      recommended: false,
      features: [
        "Duration: 10-11 Months",
        "1-on-1 Mentorship",
        "Basic + Advance languages",
        "Certification & Practice Projects",
      ],
      buttonText: "ENROLL NOW",
    },
    {
      title: "PRO",
      price: "₹44,999",
      recommended: true,
      features: [
        "MERN Stack + Basic Next.js",
        "Real-World Projects",
        "Job Interviews Assistance",
        "Internship Experience + Course Certification",
      ],
      buttonText: "ENROLL NOW",
    },
    {
      title: "INTERNSHIP",
      price: "",
      recommended: false,
      features: [
        "Duration: 1-3 Months",
        "Mode: Online / Hybrid / In-office",
        "Stipend: Paid / Unpaid (performance-based incentives)",
        "Internship Completion Certificate",
      ],
      buttonText: "ENROLL NOW",
    },
  ];

  return (
    <div className="bg-[#f1f5f9] min-h-screen text-[#1e293b]">
      <Header title="Courses" des="We offer following courses" />
      <div className="p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          {/* First row with 3 cards on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {courses.slice(0, 3).map((course, index) => (
              <div
                key={index}
                className="bg-[#f8fafc] text-[#1e293b] rounded-lg overflow-hidden shadow-lg relative hover:shadow-xl transition-shadow duration-300"
              >
                {course.recommended && (
                  <div className="absolute top-4 left-0">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-r-full font-bold text-sm">
                      RECOMMENDED
                    </span>
                  </div>
                )}
                <div className="p-6 text-center">
                  <h2 className="font-bold text-2xl">{course.title}</h2>
                  {course.price && (
                    <div className="mt-4 mb-6">
                      <span className="text-4xl md:text-5xl font-bold text-indigo-600">
                        {course.price}
                      </span>
                      <span className="text-[#64748b]">/course</span>
                    </div>
                  )}
                </div>
                <div className="border-t border-[#e2e8f0]"></div>
                <div className="p-4 md:p-6">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-start py-2">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-black"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-3 text-sm">
                        {feature.includes(":") ? (
                          <div>
                            <span className="font-bold">
                              {feature.split(":")[0]}:
                            </span>
                            {feature.split(":")[1]}
                          </div>
                        ) : (
                          <div>{feature}</div>
                        )}
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={() => handleEnrollClick(course)}
                    className="w-full bg-[#0f172a] text-white font-semibold py-3 mt-6 rounded hover:bg-[#1e293b] cursor-pointer transition-colors"
                  >
                    {course.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Second row with 1 card centered */}
          <div className="flex justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3">
              {courses.slice(3, 4).map((course, index) => (
                <div
                  key={index}
                  className="bg-[#f8fafc] text-[#1e293b] rounded-lg overflow-hidden shadow-lg relative hover:shadow-xl transition-shadow duration-300"
                >
                  {course.recommended && (
                    <div className="absolute top-4 left-0">
                      <span className="bg-purple-600 text-white px-4 py-1 rounded-r-full font-bold text-sm">
                        RECOMMENDED
                      </span>
                    </div>
                  )}
                  <div className="p-6 text-center">
                    <h2 className="font-bold text-2xl">{course.title}</h2>
                    {course.price && (
                      <div className="mt-4 mb-6">
                        <span className="text-4xl md:text-5xl font-bold text-indigo-600">
                          {course.price}
                        </span>
                        <span className="text-[#64748b]">/course</span>
                      </div>
                    )}
                  </div>
                  <div className="border-t border-[#e2e8f0]"></div>
                  <div className="p-4 md:p-6">
                    {course.features.map((feature, i) => (
                      <div key={i} className="flex items-start py-2">
                        <div className="flex-shrink-0 mt-1">
                          <div className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-black"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-3 text-sm">
                          {feature.includes(":") ? (
                            <div>
                              <span className="font-bold">
                                {feature.split(":")[0]}:
                              </span>
                              {feature.split(":")[1]}
                            </div>
                          ) : (
                            <div>{feature}</div>
                          )}
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={() => handleEnrollClick(course)}
                      className="w-full bg-[#0f172a] text-white font-semibold py-3 mt-6 rounded hover:bg-[#1e293b] cursor-pointer transition-colors"
                    >
                      {course.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-white/30 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg max-w-xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <AdmissionForm selectedCourse={selectedCourse} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
