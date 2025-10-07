import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Footer from "@/components/Footer";
import EmergencyContact from "@/components/EmergencyContact";
import ContactBar from "@/components/ContactBar";
import CallbackForm from "@/components/CallbackForm";
import AppointmentBooking from "@/components/AppointmentBooking";
import DoctorCards from "@/components/DoctorCards";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <DoctorCards />
        <Testimonials />
        <div className="py-16 text-center bg-gradient-to-br from-primary/5 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Ready to Book Your Appointment?</h2>
            <AppointmentBooking />
          </div>
        </div>
        <About />
      </main>
      <Footer />
      <EmergencyContact />
    </div>
  );
};

export default Index;
