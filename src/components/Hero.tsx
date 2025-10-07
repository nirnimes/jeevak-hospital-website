import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-hospital.jpg";
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
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Heart className="h-4 w-4" />
            <span className="text-sm font-medium">24/7 Cardiac Emergency Care</span>
          </div>

          <h1 className="text-[40px] md:text-6xl font-bold text-white mb-4 animate-slide-up leading-tight" tabIndex={0}>
            Bihar's #1 Heart Hospital - Saving Lives Since 1998
          </h1>

          <p className="text-[24px] md:text-2xl text-white/90 mb-8 animate-slide-up max-w-3xl mx-auto">
            Expert cardiac surgeons, state-of-the-art equipment, 5000+ successful surgeries
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up mb-12">
            <a href="tel:+916122670992" aria-label="Get Emergency Heart Care Now">
              <Button size="lg" className="h-15 md:h-[60px] px-8 text-base font-semibold bg-[#dc2626] hover:bg-[#b91c1c] text-white shadow-xl">
                Get Emergency Heart Care Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="#callback" aria-label="Schedule Consultation">
              <Button size="lg" variant="outline" className="h-12 md:h-[60px] px-8 text-base font-semibold bg-transparent border-white/50 text-white hover:bg-white/10">
                Schedule Consultation
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg hover-lift">
              <div className="flex items-center gap-3 md:gap-4">
                <Award className="h-6 w-6 md:h-8 md:w-8 text-white" />
                <div className="text-left">
                  <div className="text-sm md:text-base font-semibold text-white">Board Certified Surgeons</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg hover-lift">
              <div className="flex items-center gap-3 md:gap-4">
                <Heart className="h-6 w-6 md:h-8 md:w-8 text-white" />
                <div className="text-left">
                  <div className="text-sm md:text-base font-semibold text-white">25+ Years Cardiac Excellence</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg hover-lift">
              <div className="flex items-center gap-3 md:gap-4">
                <Users className="h-6 w-6 md:h-8 md:w-8 text-white" />
                <div className="text-left">
                  <div className="text-sm md:text-base font-semibold text-white">10,000+ Lives Saved</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg hover-lift">
              <div className="flex items-center gap-3 md:gap-4">
                <Award className="h-6 w-6 md:h-8 md:w-8 text-white" />
                <div className="text-left">
                  <div className="text-sm md:text-base font-semibold text-white">Bihar's First Super-Specialty</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Callback Form */}
        <div id="callback" className="max-w-2xl mx-auto mt-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <CallbackForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
