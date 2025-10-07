import { Button } from "@/components/ui/button";
import { Phone, Heart, Award, Users, Clock, Shield, Activity, Stethoscope, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-hospital.jpg";

const Hero = () => {
  const handleEmergencyClick = () => {
    window.location.href = "tel:+919876543210";
  };

  const handleConsultationClick = () => {
    const callbackSection = document.getElementById('callback-form');
    callbackSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-20" aria-label="Hero section with hospital information">
      {/* Background Image with Darker Overlay for better text readability */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Jeevak Heart Hospital - Modern cardiac care facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline - Strong Value Proposition */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 animate-slide-up leading-tight" tabIndex={0}>
            Bihar's #1 Heart Hospital - Saving Lives Since 1998
          </h1>

          {/* Supporting Subheadline - Close to headline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 md:mb-10 animate-slide-up max-w-3xl mx-auto font-medium">
            Expert cardiac surgeons, state-of-the-art equipment, 5000+ successful surgeries
          </p>

          {/* Primary CTA - Prominent and High Contrast */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up mb-12 md:mb-16">
            <Button 
              onClick={handleEmergencyClick}
              size="lg" 
              className="bg-emergency hover:bg-red-700 text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-6 sm:py-7 h-auto shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 group"
              aria-label="Get emergency heart care now - Click to call"
            >
              <Phone className="mr-2 h-5 w-5 sm:h-6 sm:w-6 animate-pulse" />
              Get Emergency Heart Care Now
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={handleConsultationClick}
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-primary text-base sm:text-lg font-medium px-6 sm:px-8 py-6 sm:py-7 h-auto backdrop-blur-sm"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Trust Indicators - Enhanced with Medical Icons and Better Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Board Certified Surgeons */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in shadow-lg">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-primary/20 flex items-center justify-center mb-3" aria-hidden="true">
                  <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">Board Certified</div>
                <div className="text-sm text-gray-200">Expert Cardiac Surgeons</div>
              </div>
            </div>

            {/* Years of Excellence */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in shadow-lg" style={{ animationDelay: "0.1s" }}>
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-success/20 flex items-center justify-center mb-3" aria-hidden="true">
                  <Heart className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">25+ Years</div>
                <div className="text-sm text-gray-200">Cardiac Excellence</div>
              </div>
            </div>

            {/* Lives Saved */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in shadow-lg" style={{ animationDelay: "0.2s" }}>
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-emergency/20 flex items-center justify-center mb-3" aria-hidden="true">
                  <Activity className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">10,000+</div>
                <div className="text-sm text-gray-200">Lives Saved</div>
              </div>
            </div>

            {/* Bihar's First */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in shadow-lg" style={{ animationDelay: "0.3s" }}>
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-primary/20 flex items-center justify-center mb-3" aria-hidden="true">
                  <Award className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">Bihar's First</div>
                <div className="text-sm text-gray-200">Super-Specialty Hospital</div>
              </div>
            </div>
          </div>

          {/* Emergency Contact Strip */}
          <div className="mt-12 bg-emergency/90 backdrop-blur-sm rounded-lg p-4 border border-emergency animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-white">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 animate-pulse" />
                <span className="font-semibold">24/7 Emergency Helpline:</span>
              </div>
              <a href="tel:+919876543210" className="text-xl font-bold hover:underline">
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;