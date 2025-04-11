import Calculator from "./components/Home/Calculator";
import CoursesOffered from "./components/Home/CourseOffered";
import CTABanner from "./components/Home/CTABanner";
import FAQSection from "./components/Home/FAQSection";
import HeroSection from "./components/Home/HeroSection";
import DownloadApp from "./components/Home/DownloadApp";
import LoanHighlights from "./components/Home/LoanHighlights";
import Testimonials from "./components/Home/Testimonials";
import WhyChooseUs from "./components/Home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Calculator />
      <WhyChooseUs />
      <CoursesOffered />
      {/* <Testimonials /> */}
      <LoanHighlights />
      <DownloadApp />
      <FAQSection />
      <CTABanner />
    </>
  );
}
