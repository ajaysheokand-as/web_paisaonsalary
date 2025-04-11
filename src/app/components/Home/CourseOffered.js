import Image from "next/image";

const courses = [
  {
    title: "MERN Stack Development",
    desc: "Master MongoDB, Express.js, React, and Node.js from scratch.",
    icon: "🚀",
  },
  {
    title: "Frontend Development",
    desc: "Learn HTML, CSS, JavaScript, and modern frameworks like React.",
    icon: "🎨",
  },
  {
    title: "Backend Development",
    desc: "Build robust backend systems using Node.js, Express, and Databases.",
    icon: "🛠️",
  },
  {
    title: "Data Structures & Algorithms",
    desc: "Sharpen your problem-solving skills for interviews & coding rounds.",
    icon: "📘",
  },
  {
    title: "C & C++ Programming",
    desc: "Beginner to advanced programming in C and C++ with logic building.",
    icon: "💡",
  },
  {
    title: "Placement Preparation",
    desc: "Crack tech interviews with aptitude, DSA, HR questions & mock tests.",
    icon: "🎯",
  },
];

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
    <section className="bg-[#F5F7FA] min-h-screen w-full flex items-center px-4 py-10">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D3E50] mb-12 text-center">
          How We Work
        </h2>
        <div className="w-full flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <Image
                src="/img_journey.png"
                alt="Loan Process"
                fill
                className="rounded-b-[3rem] shadow-lg object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
            <div className="relative border-l-4 border-blue-500 pl-6 space-y-10">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="group transition-all duration-300 hover:bg-blue-50 hover:shadow-md p-4 rounded-md"
                >
                  <div className="text-3xl mb-2">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-[#1D3E50] group-hover:text-blue-600">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesOffered;
