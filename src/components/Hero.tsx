import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Heart, Award, Users, BadgeCheck } from "lucide-react";
import heroImage from "../assets/hero-hospital.jpg";
import CallbackForm from "@/components/CallbackForm";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20" aria-label="Hero section with hospital information and callback form">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Jeevak Heart Hospital"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-[40px] md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 animate-slide-up leading-tight" tabIndex={0}>
            Bihar's #1 Heart Hospital - Saving Lives Since 1998
          </h1>

          <p className="text-[24px] md:text-2xl text-primary-foreground/90 mb-8 animate-slide-up max-w-3xl">
            Expert cardiac surgeons, state-of-the-art equipment, 5000+ successful surgeries
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up mb-12 justify-center">
            <a href="tel:+916122365814" aria-label="Call emergency care now">
              <Button size="lg" className="group h-[60px] px-8 text-lg bg-[#dc2626] hover:bg-[#dc2626]/90 text-white shadow-xl rounded-full">
                Get Emergency Heart Care Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#consultation" aria-label="Schedule a consultation">
              <Button size="lg" variant="outline" className="h-[60px] px-8 text-lg bg-transparent border-white/70 text-primary-foreground hover:bg-white/10 rounded-full">
                Schedule Consultation
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-primary-foreground/20 max-w-5xl mx-auto">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-lg animate-fade-in">
              <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <BadgeCheck className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <div className="text-lg font-semibold text-primary-foreground">Board Certified Surgeons</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <div className="text-lg font-semibold text-primary-foreground">25+ Years Cardiac Excellence</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <div className="text-lg font-semibold text-primary-foreground">10,000+ Lives Saved</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-lg animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <div className="text-lg font-semibold text-primary-foreground">Bihar's First Super-Specialty</div>
              </div>
            </div>
          </div>
        </div>

        {/* Callback Form */}
        <div id="consultation" className="max-w-2xl mx-auto mt-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <CallbackForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
