"use client";
import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Calculator = () => {
  const [principal, setPrincipal] = useState(5000);
  const [tenure, setTenure] = useState(15);
  const [interest, setInterest] = useState(0.5);

  const interestAmount = (principal * interest * tenure) / 100;
  const totalPayable = principal + interestAmount;

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-50">
      <div className="max-w-7xl w-full mx-auto">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D3E50] mb-4">
            Plan Your Loan Instantly
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Use our smart calculator to find out how much you need to repay.
            Transparent, fast, and simple — just like our service.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Calculator Section */}
          <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-lg p-6 space-y-8">
            <h2 className="text-2xl font-bold text-[#1D3E50]">
              Loan Calculator
            </h2>

            {/* Principal Slider */}
            <div className="space-y-2">
              <label className="font-semibold text-gray-700">
                Principal: ₹{principal.toLocaleString()}
              </label>
              <input
                type="range"
                min={5000}
                max={100000}
                step={1000}
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full h-5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg appearance-none cursor-pointer transition-all duration-300 hover:from-blue-500 hover:to-blue-700 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:rounded-full"
              />
            </div>

            {/* Tenure Slider */}
            <div className="space-y-2">
              <label className="font-semibold text-gray-700">
                Tenure: {tenure} days
              </label>
              <input
                type="range"
                min={1}
                max={45}
                step={1}
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg appearance-none cursor-pointer transition-all duration-300 hover:from-blue-500 hover:to-blue-700 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:rounded-full"
              />
            </div>

            {/* Interest Slider */}
            <div className="space-y-2">
              <label className="font-semibold text-gray-700">
                Interest Rate: {interest}%
              </label>
              <input
                type="range"
                min={0.25}
                max={1}
                step={0.05}
                value={interest}
                onChange={(e) => setInterest(Number(e.target.value))}
                className="w-full h-5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg appearance-none cursor-pointer transition-all duration-300 hover:from-blue-500 hover:to-blue-700 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:rounded-full"
              />
            </div>

            {/* Summary Section */}
            <div className="bg-blue-50 rounded-lg p-4 space-y-2 border border-blue-200">
              <div className="text-lg text-gray-800 font-medium">
                Interest Amount:{" "}
                <span className="text-blue-600 font-bold">
                  ₹{interestAmount.toFixed(2)}
                </span>
              </div>
              <div className="text-lg text-gray-800 font-medium">
                Total Payable:{" "}
                <span className="text-green-600 font-bold">
                  ₹{totalPayable.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Graph Section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center bg-white rounded-xl shadow-lg p-6">
            <div className="text-center text-gray-500">
              <Pie
                data={{
                  labels: ["Principal", "Interest"],
                  datasets: [
                    {
                      label: "Loan Breakdown",
                      data: [principal, interestAmount],
                      backgroundColor: ["#3B82F6", "#F59E0B"],
                      borderColor: ["#2563EB", "#D97706"],
                      borderWidth: 1,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "bottom",
                    },
                    tooltip: {
                      callbacks: {
                        label: function (context) {
                          const label = context.label || "";
                          const value = context.raw;
                          return `${label}: ₹${value.toFixed(2)}`;
                        },
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
