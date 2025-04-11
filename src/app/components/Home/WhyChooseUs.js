import { TITLE } from "@/constants";

// src/app/components/WhyChooseUs.js
const WhyChooseUs = () => {
  const features = [
    {
      title: "Fast and Easy Process",
      desc: "Our simple online application ensures quick approvals and smooth loan processing. Get financial support when you need it—without the hassle.",
      icon: "⚡",
    },
    {
      title: "100% Digital Experience",
      desc: "From application to disbursal, everything is online. No paperwork, no in-person visits—just fast, secure, and convenient service.",
      icon: "💻",
    },
    {
      title: "Quick Disbursal",
      desc: "We understand the urgency. Once approved, your loan amount is credited to your account without unnecessary delays.",
      icon: "🏦",
    },
    {
      title: "Tailored for Salaried Employees",
      desc: "Designed exclusively for salaried individuals to meet short-term financial needs quickly and efficiently.",
      icon: "👔",
    },
    {
      title: "Transparent & Secure",
      desc: "No hidden fees or surprises. Clear terms, secure processing, and complete peace of mind.",
      icon: "🔒",
    },
    {
      title: "Trusted by Thousands",
      desc: "Join thousands of satisfied salaried professionals who rely on us for quick, reliable, and transparent financial solutions.",
      icon: "🌟",
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D3E50] mb-10">
          Why Choose <span className="text-[#4A91A4]">{TITLE}?</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#F5F7FA] shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#1D3E50] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
