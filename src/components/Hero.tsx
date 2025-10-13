import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Award, Users, ShieldCheck, Shield, Phone, Calendar, Clock, CheckCircle, ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-hospital.jpg";
import AppointmentBooking from "@/components/AppointmentBooking";

const Hero = () => {
  return (
    <section 
      id="hero-section"
      className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-secondary/10 overflow-hidden"
      aria-label="Hero section - Welcome to Anupama Hospital"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" aria-hidden="true"></div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - Left Side */}
          <div className="space-y-8 animate-slide-up">
            {/* Trust Badge */}
            <div className="flex items-center space-x-4" role="group" aria-label="Hospital achievements">
              <Badge variant="secondary" className="bg-warm-gold/10 text-warm-gold hover:bg-warm-gold/20 px-4 py-2 border border-warm-gold/20">
                <Star className="mr-2 h-4 w-4" aria-hidden="true" />
                Padma Shri Legacy
              </Badge>
              <Badge variant="outline" className="border-warm-teal/30 text-warm-teal bg-warm-teal/5">
                60+ Years Excellence
              </Badge>
            </div>

            {/* Main Headline - Emotional Connection */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight font-serif">
                Excellence in Surgery{" "}
                <span className="text-primary">Since 1962</span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-normal">
                  The Legacy of Padma Shri Dr. Narendra Prasad
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Continuing the compassionate care philosophy of Dr. Narendra Prasad, who touched over 100,000 lives. 
                "Patients are our Gods" - where world-class surgical expertise meets genuine human compassion.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4" role="group" aria-label="Hospital statistics">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-warm-sage/10 rounded-full flex items-center justify-center" aria-hidden="true">
                  <CheckCircle className="h-6 w-6 text-warm-sage" />
                </div>
                <div>
                  <div className="font-semibold">100,000+</div>
                  <div className="text-sm text-muted-foreground">Lives Touched</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-warm-teal/10 rounded-full flex items-center justify-center" aria-hidden="true">
                  <Award className="h-6 w-6 text-warm-teal" />
                </div>
                <div>
                  <div className="font-semibold">Padma Shri</div>
                  <div className="text-sm text-muted-foreground">2015 Recipient</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-warm-gold/10 rounded-full flex items-center justify-center" aria-hidden="true">
                  <Shield className="h-6 w-6 text-warm-gold" />
                </div>
                <div>
                  <div className="font-semibold">FRCS 1962</div>
                  <div className="text-sm text-muted-foreground">Royal College</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-warm-burgundy/10 rounded-full flex items-center justify-center" aria-hidden="true">
                  <Users className="h-6 w-6 text-warm-burgundy" />
                </div>
                <div>
                  <div className="font-semibold">60+ Years</div>
                  <div className="text-sm text-muted-foreground">Of Service</div>
                </div>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4" role="group" aria-label="Action buttons">
              <AppointmentBooking />
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 text-warm-burgundy border-warm-burgundy hover:bg-warm-burgundy hover:text-white focus:ring-2 focus:ring-warm-burgundy focus:ring-offset-2"
                aria-label="Emergency phone number"
                onClick={() => window.open('tel:+916122670992', '_self')}
              >
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                Emergency: +91-612-267-0992
              </Button>
            </div>

            {/* Patient Promise */}
            <div className="bg-warm-sage/5 rounded-lg p-6 border border-warm-sage/10" role="region" aria-labelledby="patient-promise-heading">
              <div className="flex items-start space-x-3">
                <Heart className="h-6 w-6 text-warm-sage mt-1" aria-hidden="true" />
                <div>
                  <h3 id="patient-promise-heading" className="font-semibold text-lg mb-2 font-serif">Dr. Prasad's Philosophy</h3>
                  <p className="text-muted-foreground italic">
                    "Patients are our Gods. The more they come, the more we learn and serve humanity."
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Continuing this legacy of compassionate care where every patient receives personalized attention from our expert team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Patient Image - Right Side */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Patient Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                {/* Professional hospital image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-end justify-end relative">
                  <img 
                    src={heroImage} 
                    alt="Modern hospital building with professional medical facilities showing state-of-the-art cardiac care center"
                    className="w-full h-full object-cover"
                  />
                  {/* Professional patient photo overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" aria-hidden="true"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-warm-sage/10 to-transparent" aria-hidden="true"></div>
                  <div className="relative z-10 p-6 text-right">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 inline-block max-w-xs">
                      <div className="text-sm font-medium text-warm-gray">Dr. Prasad's Legacy</div>
                      <div className="text-xs text-warm-teal italic">"Patients are our Gods" - Dr. Narendra Prasad</div>
                    </div>
                  </div>
                  
                  {/* Heart icon overlay */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
                    <div className="w-24 h-24 bg-warm-sage/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Heart className="w-12 h-12 text-warm-sage" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards - Positioned outside the image container */}
            <div className="mt-6 grid grid-cols-2 gap-4" role="group" aria-label="Hospital performance statistics">
              <div className="bg-warm-ivory rounded-xl shadow-lg p-4 border border-warm-sage/10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-warm-sage/10 rounded-full flex items-center justify-center" aria-hidden="true">
                    <Heart className="h-5 w-5 text-warm-sage" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">100,000+</div>
                    <div className="text-sm text-muted-foreground">Lives Touched</div>
                  </div>
                </div>
              </div>

              <div className="bg-warm-ivory rounded-xl shadow-lg p-4 border border-warm-sage/10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-warm-gold/10 rounded-full flex items-center justify-center" aria-hidden="true">
                    <Award className="h-5 w-5 text-warm-gold" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Padma Shri</div>
                    <div className="text-sm text-muted-foreground">2015 Award</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
