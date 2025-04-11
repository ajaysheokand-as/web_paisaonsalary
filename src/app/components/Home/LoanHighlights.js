import {
  CalendarCheck,
  Clock,
  Eye,
  Calculator,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <CalendarCheck size={32} className="text-[#1D3E50]" />,
    title: "Flexible Tenure",
    desc: "Choose repayment terms that align with your salary cycle.",
  },
  {
    icon: <Clock size={32} className="text-[#1D3E50]" />,
    title: "24x7 Access",
    desc: "Apply for a loan anytime, anywhere — even on weekends.",
  },
  {
    icon: <Eye size={32} className="text-[#1D3E50]" />,
    title: "Live Loan Tracking",
    desc: "Track your loan status in real-time with full transparency.",
  },
  {
    icon: <Calculator size={32} className="text-[#1D3E50]" />,
    title: "Smart Interest Calculator",
    desc: "Know exactly what you’ll pay before applying. No surprises.",
  },
  {
    icon: <ShieldCheck size={32} className="text-[#1D3E50]" />,
    title: "Secure & Private",
    desc: "All your information is encrypted and safely stored.",
  },
];

const LoanHighlights = () => {
  return (
    <section className="py-20 px-4 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D3E50] mb-6">
          Your Loan, Your Way
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Enjoy flexible, simple, and secure financing with Paisa On Salary.
          Everything you need, on your terms.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="font-semibold text-[#1D3E50] text-lg mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanHighlights;
