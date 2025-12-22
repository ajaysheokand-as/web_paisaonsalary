import Image from "next/image";

const steps = [
  {
    title: "Apply for Loan",
    desc: "Fill out the application form with accurate details.",
    icon: "📝",
  },
  {
    title: "Submit Documents",
    desc: "Upload essential documents securely for quick verification.",
    icon: "📄",
  },
  {
    title: "Loan Approval",
    desc: "Get notified about your loan approval status.",
    icon: "✅",
  },
  {
    title: "Receive Funds",
    desc: "Funds will be disbursed to your account upon approval.",
    icon: "💵",
  },
];

const CoursesOffered = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center px-4 py-16 md:py-24 overflow-hidden">
      {/* Video Background with Lighter Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover brightness-110 contrast-110"
          poster="/fallback-image.jpg"
        >
          <source src="/0_Coins_Money_3840x2160.mp4" type="video/mp4" />
          <source src="/0_Coins_Money_3840x2160.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        {/* Lighter overlay for better video visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/65 to-gray-900/60" />
        {/* Additional subtle gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/30" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
            How We Work
          </h2>
          <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto drop-shadow">
            A streamlined process designed for efficiency and transparency
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side - Image with Card Effect */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="relative h-[350px] sm:h-[450px] md:h-[550px] rounded-2xl overflow-hidden group">
                <Image
                  src="/wire-transfer-young-man-using-his-smartphone-laptop-banking-transaction-some-payments.jpg"
                  alt="Loan Process Visualization"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Lighter gradient overlay for image */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent" />
                
                {/* Image Border Glow Effect */}
                <div className="absolute inset-0 border-2 border-gray-700/40 rounded-2xl group-hover:border-blue-500/60 transition-all duration-500" />
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl" />
            </div>
          </div>

          {/* Right Side - Process Steps */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/40 via-blue-400/40 to-transparent" />
              
              <div className="space-y-8">
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="group relative pl-16 transition-all duration-500 hover:translate-x-2"
                  >
                    {/* Step Number Circle */}
                    <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-2 border-blue-500/40 flex items-center justify-center group-hover:border-blue-500/80 transition-all duration-300 shadow-lg">
                      <div className="text-xl font-semibold text-white">
                        {idx + 1}
                      </div>
                    </div>
                    
                    {/* Step Content */}
                    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md border border-gray-700/60 rounded-xl p-6 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group-hover:border-gray-600/80">
                      <div className="flex items-start gap-4">
                        <div className="text-2xl transform group-hover:scale-110 transition-transform duration-300 drop-shadow">
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300 drop-shadow">
                            {step.title}
                          </h3>
                          <p className="text-gray-200 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-blue-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-3 bg-gray-800/70 backdrop-blur-md border border-gray-700/70 rounded-full px-6 py-3 shadow-lg">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-gray-100">
              Average processing time: <span className="text-white font-semibold">24-48 hours</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesOffered;