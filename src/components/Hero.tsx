import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Award, Users, Certificate } from "lucide-react";
import heroImage from "@/assets/hero-hospital.jpg";
import CallbackForm from "@/components/CallbackForm";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20" aria-label="Hero section with hospital information and callback form">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Jeevak Heart Hospital exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Heart className="h-4 w-4" />
            <span className="text-sm font-medium">Trusted Cardiac Care in Bihar</span>
          </div>

          <h1 className="font-bold text-white mb-4 animate-slide-up leading-tight" style={{ fontSize: "40px" }} tabIndex={0}>
            Bihar's #1 Heart Hospital - Saving Lives Since 1998
          </h1>

          <p className="text-white/90 mb-8 animate-slide-up max-w-3xl mx-auto" style={{ fontSize: "24px", lineHeight: 1.4 }}>
            Expert cardiac surgeons, state-of-the-art equipment, 5000+ successful surgeries
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up mb-12">
            <Button size="lg" className="h-[60px] text-base px-8 font-semibold bg-[#dc2626] text-white hover:opacity-90" asChild>
              <a href="tel:+916122365814" aria-label="Get Emergency Heart Care Now">
                Get Emergency Heart Care Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-[56px] text-white border-white/60 hover:bg-white/10 text-base px-8" asChild>
              <a href="#callback" aria-label="Schedule Consultation">Schedule Consultation</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-5 shadow-lg hover-lift">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Certificate className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold text-white">Board Certified Surgeons</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-5 shadow-lg hover-lift">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold text-white">25+ Years Cardiac Excellence</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-5 shadow-lg hover-lift">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold text-white">10,000+ Lives Saved</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-5 shadow-lg hover-lift">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold text-white">Bihar's First Super-Specialty</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Callback Form (preserved) */}
        <div id="callback" className="max-w-2xl mx-auto mt-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <CallbackForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
