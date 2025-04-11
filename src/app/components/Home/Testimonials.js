"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const testimonials = [
  {
    name: "Rahul Mehra",
    feedback:
      "Paisa On Salary helped me in a financial emergency. The loan was processed instantly and without hassle.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Ankita Joshi",
    feedback:
      "The whole process was digital and easy to understand. I received the loan amount in my bank in no time.",
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    name: "Siddharth Kapoor",
    feedback:
      "Highly recommended for salaried professionals! Transparent terms and very professional support.",
    avatar: "https://randomuser.me/api/portraits/men/83.jpg",
  },
  {
    name: "Neha Sinha",
    feedback:
      "I was skeptical at first, but Paisa On Salary exceeded my expectations. Smooth and quick!",
    avatar: "https://randomuser.me/api/portraits/women/85.jpg",
  },
  {
    name: "Manish Rawat",
    feedback:
      "Getting a short-term loan was never this easy. Kudos to the team at Paisa On Salary!",
    avatar: "https://randomuser.me/api/portraits/men/91.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D3E50] mb-10">
          What Our Borrowers Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Trusted by salaried professionals across India, here’s what our
          customers say about their experience with Paisa On Salary.
        </p>
        <div className="relative">
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={20}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              640: {
                slidesPerView: "auto",
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                centeredSlides: false,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx} className="!w-[85%] sm:!w-auto">
                <div className="h-full px-2">
                  <div className="bg-[#F5F7FA] rounded-xl p-6 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 duration-300 h-full flex flex-col items-center justify-between text-center">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <p className="text-gray-700 italic mb-4">“{t.feedback}”</p>
                    <h4 className="font-semibold text-[#1D3E50]">{t.name}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10 swiper-button-prev text-[#1D3E50] text-2xl cursor-pointer px-2">
            ‹
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10 swiper-button-next text-[#1D3E50] text-2xl cursor-pointer px-2">
            ›
          </div>

          {/* Pagination Dots */}
          <div className="custom-pagination flex justify-center mt-6 space-x-2" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
