
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OffersSection from "@/components/OffersSection";
import BookingForm from "@/components/BookingForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <OffersSection />
      <BookingForm />
    </div>
  );
};

export default Index;
