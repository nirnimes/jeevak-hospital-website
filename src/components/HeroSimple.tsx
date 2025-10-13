import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Award, Users, ShieldCheck, Shield, Phone, Calendar, Clock, CheckCircle, ArrowRight, Star } from "lucide-react";

const HeroSimple = () => {
  return (
    <section 
      id="hero-section"
      className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-secondary/10 overflow-hidden"
      aria-label="Hero section - Welcome to Anupama Hospital"
    >
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - Left Side */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-warm-gold/10 text-warm-gold hover:bg-warm-gold/20 px-4 py-2 border border-warm-gold/20">
                <Star className="mr-2 h-4 w-4" />
                Padma Shri Legacy
              </Badge>
              <Badge variant="outline" className="border-warm-teal/30 text-warm-teal bg-warm-teal/5">
                60+ Years Excellence
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight font-serif">
                Excellence in Surgery{" "}
                <span className="text-primary">Since 1962</span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-normal">
                  The Legacy of Padma Shri Dr. Narendra Prasad
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Continuing Dr. Prasad's philosophy of "Patients are our Gods," we provide world-class surgical care 
                with compassion, expertise, and cutting-edge technology in the heart of Patna.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-warm-sage hover:bg-warm-sage/90 text-white">
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-warm-sage/30 text-warm-sage hover:bg-warm-sage/10">
                <Phone className="mr-2 h-5 w-5" />
                Call +91-612-267-0991
              </Button>
            </div>
          </div>

          {/* Right Side - Simple placeholder */}
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
            <div className="text-center text-blue-600">
              <Heart className="h-24 w-24 mx-auto mb-4" />
              <p className="text-lg font-semibold">Hospital Image Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSimple;
