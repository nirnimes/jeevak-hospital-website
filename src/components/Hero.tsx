import { Button } from "@/components/ui/button";
import { Heart, Award, Users, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-hospital.jpg";
import CallbackForm from "@/components/CallbackForm";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20" aria-label="Hero section with hospital information and callback form">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Jeevak Heart Hospital"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline - 40px (text-[40px]) */}
          <h1 className="text-[40px] md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slide-up leading-tight" tabIndex={0}>
            Bihar's #1 Heart Hospital - Saving Lives Since 1998
          </h1>

          {/* Subheadline - 24px (text-2xl) */}
          <p className="text-xl md:text-2xl text-white/95 mb-10 animate-slide-up max-w-3xl mx-auto">
            Expert cardiac surgeons, state-of-the-art equipment, 5000+ successful surgeries
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up mb-16">
            <Button 
              size="lg" 
              className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-lg px-10 h-[60px] shadow-2xl font-semibold"
            >
              Get Emergency Heart Care Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-10 h-[60px] bg-transparent font-semibold"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Trust Indicators - 4 Column Grid with Card Backgrounds */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center gap-3 animate-fade-in bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:bg-white/15 transition-all">
              <div className="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center" aria-hidden="true">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <div className="text-center">
                <div className="text-white font-semibold text-base">Board Certified Surgeons</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 animate-fade-in bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:bg-white/15 transition-all" style={{ animationDelay: "0.1s" }}>
              <div className="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center" aria-hidden="true">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div className="text-center">
                <div className="text-white font-semibold text-base">25+ Years Cardiac Excellence</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 animate-fade-in bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:bg-white/15 transition-all" style={{ animationDelay: "0.2s" }}>
              <div className="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center" aria-hidden="true">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-center">
                <div className="text-white font-semibold text-base">10,000+ Lives Saved</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 animate-fade-in bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:bg-white/15 transition-all" style={{ animationDelay: "0.3s" }}>
              <div className="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center" aria-hidden="true">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="text-center">
                <div className="text-white font-semibold text-base">Bihar's First Super-Specialty</div>
              </div>
            </div>
          </div>
        </div>

        {/* Callback Form */}
        <div className="max-w-2xl mx-auto mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <CallbackForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
