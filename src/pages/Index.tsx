import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Footer from "@/components/Footer";
import EmergencyContact from "@/components/EmergencyContact";
import ContactBar from "@/components/ContactBar";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ContactBar />
        <Services />
        <CTASection 
          title="Find the Right Cardiac Treatment"
          description="Our expert cardiologists are here to help you get the best treatment for your heart condition."
          primaryText="Schedule Your Heart Checkup Today"
          primaryAction="#contact"
          variant="light"
        />
        <About />
        <CTASection 
          title="Get Emergency Heart Care Now"
          description="Don't wait when it comes to your heart. Our 24/7 emergency cardiac care is always available."
          primaryText="Request Free Consultation"
          primaryAction="#contact"
          variant="dark"
        />
      </main>
      <Footer />
      <EmergencyContact />
    </div>
  );
};

export default Index;
