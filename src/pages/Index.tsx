// @ts-nocheck
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Footer from "@/components/Footer";
import EmergencyContact from "@/components/EmergencyContact";
import EmergencyBar from "@/components/EmergencyBar";
import ContactBar from "@/components/ContactBar";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <EmergencyBar />
      <Header />
      <main className="pt-10">
        <Hero />
        <Testimonials />
        <ContactBar />
        <Testimonials />
        <Services />
        <About />
        <CTASection 
          title="Get Emergency Heart Care Now"
          description="Don't wait when it comes to your heart health. Our cardiac specialists are available 24/7"
          primaryButtonText="Request Immediate Consultation"
        />
      </main>
      <Footer />
      <EmergencyContact />
    </div>
  );
};

export default Index;
