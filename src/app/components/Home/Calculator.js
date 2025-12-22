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
<section className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-slate-800 to-slate-900">      <div className="max-w-7xl w-full mx-auto">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
            Plan Your Loan Instantly
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Use our smart calculator to find out how much you need to repay.
            Transparent, fast, and simple — just like our service.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Calculator Section */}
          <div className="w-full lg:w-1/2 bg-gray-800 rounded-2xl shadow-2xl p-8 space-y-8 border border-gray-700">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">
                Loan Calculator
              </h2>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* Principal Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="font-semibold text-gray-200">
                  Principal Amount
                </label>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  ₹{principal.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={5000}
                max={100000}
                step={1000}
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-blue-500 [&::-webkit-slider-thumb]:to-cyan-400 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-gray-800 [&::-webkit-slider-thumb]:shadow-lg"
              />
              <div className="flex justify-between text-sm text-gray-400">
                <span>₹5,000</span>
                <span>₹1,00,000</span>
              </div>
            </div>

            {/* Tenure Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="font-semibold text-gray-200">
                  Loan Tenure
                </label>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {tenure} days
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={45}
                step={1}
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-blue-500 [&::-webkit-slider-thumb]:to-cyan-400 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-gray-800 [&::-webkit-slider-thumb]:shadow-lg"
              />
              <div className="flex justify-between text-sm text-gray-400">
                <span>1 day</span>
                <span>45 days</span>
              </div>
            </div>

            {/* Interest Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="font-semibold text-gray-200">
                  Interest Rate
                </label>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {interest}%
                </span>
              </div>
              <input
                type="range"
                min={0.25}
                max={1}
                step={0.05}
                value={interest}
                onChange={(e) => setInterest(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-blue-500 [&::-webkit-slider-thumb]:to-cyan-400 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-gray-800 [&::-webkit-slider-thumb]:shadow-lg"
              />
              <div className="flex justify-between text-sm text-gray-400">
                <span>0.25%</span>
                <span>1%</span>
              </div>
            </div>

            {/* Summary Section */}
            {/* <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 space-y-4 border border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-medium">Principal:</span>
                <span className="text-xl font-bold text-white">₹{principal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-medium">Interest Amount:</span>
                <span className="text-xl font-bold text-amber-400">₹{interestAmount.toFixed(2)}</span>
              </div>
              <div className="pt-4 border-t border-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-medium text-lg">Total Payable:</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                    ₹{totalPayable.toFixed(2)}
                  </span>
                </div>
              </div>
            </div> */}
          </div>

          {/* Graph Section */}
          <div className="w-full lg:w-1/2 bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-800/50 backdrop-blur-sm bg-gradient-to-br from-gray-900/95 to-gray-950/95">
  <div className="text-center mb-8">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20 mb-3">
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    </div>
    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Loan Breakdown</h3>
    <p className="text-gray-400 text-sm font-light">Visual representation of principal vs interest distribution</p>
  </div>
  
  <div className="h-[320px] flex items-center justify-center relative">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-900/50 to-transparent border border-gray-800/30"></div>
    </div>
    <Pie
      data={{
        labels: ["Principal Amount", "Total Interest"],
        datasets: [
          {
            data: [principal, interestAmount],
            backgroundColor: [
              "rgba(59, 130, 246, 0.9)",
              "rgba(245, 158, 11, 0.9)"
            ],
            borderColor: [
              "rgba(96, 165, 250, 1)",
              "rgba(251, 191, 36, 1)"
            ],
            borderWidth: 3,
            hoverBackgroundColor: [
              "rgba(59, 130, 246, 1)",
              "rgba(245, 158, 11, 1)"
            ],
            hoverBorderColor: [
              "rgba(255, 255, 255, 0.3)",
              "rgba(255, 255, 255, 0.3)"
            ],
            hoverOffset: 8,
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        cutout: "65%",
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: "#E5E7EB",
              font: {
                size: 13,
                family: "'Inter', sans-serif",
                weight: "500"
              },
              padding: 24,
              usePointStyle: true,
              pointStyle: "circle",
              pointRadius: 6,
            }
          },
          tooltip: {
            backgroundColor: "rgba(17, 24, 39, 0.95)",
            titleColor: "#F9FAFB",
            bodyColor: "#F3F4F6",
            titleFont: {
              size: 13,
              weight: "500"
            },
            bodyFont: {
              size: 14,
              weight: "600"
            },
            borderColor: "rgba(255, 255, 255, 0.1)",
            borderWidth: 1,
            padding: 12,
            cornerRadius: 8,
            displayColors: false,
            callbacks: {
              label: function (context) {
                const label = context.label || "";
                const value = context.raw;
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const percentage = ((value / total) * 100).toFixed(1);
                return `${label}: ₹${value.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (${percentage}%)`;
              },
            },
          },
        },
        interaction: {
          intersect: false,
          mode: 'index',
        },
      }}
    />
  </div>
  
  <div className="mt-10 pt-6 border-t border-gray-800/50">
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-xl p-5 border border-gray-800/50 hover:border-blue-500/30 transition-colors duration-200">
        <div className="flex items-center justify-center mb-3">
          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
          <div className="text-gray-400 text-sm font-medium uppercase tracking-wide">Principal</div>
        </div>
        <div className="text-2xl font-bold text-blue-400 mb-1 tracking-tight">₹{principal.toLocaleString('en-IN')}</div>
        <div className="text-gray-500 text-xs font-light">Original loan amount</div>
      </div>
      <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-xl p-5 border border-gray-800/50 hover:border-amber-500/30 transition-colors duration-200">
        <div className="flex items-center justify-center mb-3">
          <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
          <div className="text-gray-400 text-sm font-medium uppercase tracking-wide">Interest</div>
        </div>
        <div className="text-2xl font-bold text-amber-400 mb-1 tracking-tight">₹{interestAmount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
        <div className="text-gray-500 text-xs font-light">Total interest payable</div>
      </div>
    </div>
    <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-gray-800/30">
      <div className="text-center text-gray-400 text-sm font-light">
        Total Payable: <span className="text-white font-semibold ml-2">
          ₹{(principal + interestAmount).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;