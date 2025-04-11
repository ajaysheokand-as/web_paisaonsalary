import Image from "next/image";
import { Smartphone, Apple } from "lucide-react";

const DownloadApp = () => {
  return (
    <section className="min-h-screen bg-[#f6f6f6] flex flex-col lg:flex-row items-center justify-center px-4 py-10">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
        <div className="relative w-full h-[400px] md:h-[600px]">
          <Image
            src="/PaisaOnSalaryApp.png"
            alt="Paisa On Salary App"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D3E50] mb-4">
          Download the Paisa On Salary App
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Get instant loan access, track your application, and manage your
          repayments — all from your phone.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Download Buttons */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
              <Smartphone size={40} className="mx-auto mb-3 text-green-600" />
              <p className="text-lg font-semibold text-gray-800 mb-2">
                Android App
              </p>
              <button className="w-full bg-gray-300 text-gray-700 py-3 rounded-lg cursor-not-allowed">
                Coming Soon
              </button>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
              <Apple size={40} className="mx-auto mb-3 text-gray-800" />
              <p className="text-lg font-semibold text-gray-800 mb-2">
                iOS App
              </p>
              <button className="w-full bg-gray-300 text-gray-700 py-3 rounded-lg cursor-not-allowed">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
