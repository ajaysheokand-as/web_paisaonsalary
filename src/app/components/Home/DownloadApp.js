import Image from "next/image";
import { Smartphone, Apple, Download, QrCode } from "lucide-react";

const DownloadApp = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-4 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - App Preview */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-xl font-bold">R</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">RupeyLo</h3>
                    <p className="text-gray-400 text-sm">Instant Loans</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">v2.4.1</p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative w-full h-[500px] md:h-[600px]">
                <Image
                  src="/RupeyLoApp.png"
                  alt="RupeyLo App Interface"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

             <div className="mt-8 p-6 bg-gray-900/80 rounded-2xl border border-gray-700">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-sm text-gray-400">Scan to Download</p>
      <p className="font-semibold">Available Now</p>
    </div>
    <div className="p-3 bg-white rounded-lg">
      {/* Replace with your actual QR code image */}
      <div className="w-10 h-10 bg-white">
        <Image 
          src="/scan_me_qr_code.jpg" 
          alt="QR Code"
          width={70}
          height={70}
          className="object-contain"
        />
      </div>
    </div>
  </div>
</div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium">
                <Download size={16} /> Mobile Application
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Download <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">RupeyLo</span> App
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Experience seamless loan management with our professional mobile application. 
                Get instant access, real-time tracking, and secure repayments — all in one place.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 shadow-lg hover:border-blue-500/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-green-900/30 rounded-xl border border-green-700/30">
                    <Smartphone size={24} className="text-green-400" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-semibold">Android Application</h3>
                    <p className="text-gray-400 text-sm">Optimized for all Android devices</p>
                  </div>
                </div>
               
                <button className="w-full mt-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-green-500/10">
                  <Download size={20} />
                  <span>Coming Soon</span>
                </button>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 shadow-lg hover:border-gray-400/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gray-700/50 rounded-xl border border-gray-600/30">
                    <Apple size={24} className="text-gray-300" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-semibold">iOS Application</h3>
                    <p className="text-gray-400 text-sm">Optimized for iPhone & iPad</p>
                  </div>
                </div>
                
                <button className="w-full mt-6 py-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 flex items-center justify-center gap-3 cursor-not-allowed">
                  <Apple size={20} />
                  <span>Coming Soon</span>
                </button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-gray-800/30 rounded-xl">
                <div className="text-2xl font-bold text-blue-400">100%</div>
                <div className="text-sm text-gray-400">Secure</div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 rounded-xl">
                <div className="text-2xl font-bold text-green-400">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 rounded-xl">
                <div className="text-2xl font-bold text-purple-400">Fast</div>
                <div className="text-sm text-gray-400">Processing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;