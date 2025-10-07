// @ts-nocheck
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Footer from "@/components/Footer";
import EmergencyContact from "@/components/EmergencyContact";
import ContactBar from "@/components/ContactBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <ContactBar />
        <Services />
        <About />
      </main>
      <Footer />
      <EmergencyContact />
    </div>
  );
};

export default Index;
