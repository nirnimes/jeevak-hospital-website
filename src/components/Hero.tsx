import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Award, Users, Clock } from "lucide-react";
import heroImage from "@/assets/hero-hospital.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Jeevak Heart Hospital"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-primary-foreground px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Heart className="h-4 w-4" />
            <span className="text-sm font-medium">Bihar's First Super-Specialty Cardiac Hospital</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-slide-up leading-tight">
            Expert Medical Care You Can Trust
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-slide-up max-w-2xl">
            State-of-the-art cardiac care with world-class facilities. From coronary angioplasty to open heart surgery, we bring international standards to Bihar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up mb-12">
            <Button size="lg" variant="secondary" className="group text-base px-8">
              Request Callback
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20 text-base px-8">
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
            <div className="flex items-start gap-3 animate-fade-in">
              <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground mb-1">Board Certified</div>
                <div className="text-sm text-primary-foreground/80">Expert Physicians</div>
              </div>
            </div>
            <div className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground mb-1">20+ Years</div>
                <div className="text-sm text-primary-foreground/80">Of Excellence</div>
              </div>
            </div>
            <div className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground mb-1">10,000+</div>
                <div className="text-sm text-primary-foreground/80">Patients Treated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
