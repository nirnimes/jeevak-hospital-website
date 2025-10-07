import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Award, Users, ShieldCheck, Shield, Phone, Calendar, Clock, CheckCircle, ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-hospital.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-secondary/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - Left Side */}
          <div className="space-y-8 animate-slide-up">
            {/* Trust Badge */}
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2">
                <Star className="mr-2 h-4 w-4" />
                Bihar's #1 Heart Hospital
              </Badge>
              <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">
                25+ Years Trusted
              </Badge>
            </div>

            {/* Main Headline - Emotional Connection */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Your Heart,{" "}
                <span className="text-primary">Our Promise</span>
                <br />
                <span className="text-2xl md:text-4xl text-muted-foreground font-normal">
                  Expert Care Close to Home
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                When your heart needs expert care, you shouldn't have to travel far from family. 
                Get world-class cardiac treatment right here in Bihar, with the compassion you deserve.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold">5000+ Surgeries</div>
                  <div className="text-sm text-muted-foreground">Lives Saved</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold">&lt; 5 minutes</div>
                  <div className="text-sm text-muted-foreground">Emergency Response</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold">98.5%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold">24/7</div>
                  <div className="text-sm text-muted-foreground">Always Here</div>
                </div>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow medical-button-primary group">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
                <Phone className="mr-2 h-5 w-5" />
                Emergency: +91-612-267-0992
              </Button>
            </div>

            {/* Patient Promise */}
            <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
              <div className="flex items-start space-x-3">
                <Heart className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Our Promise to You</h3>
                  <p className="text-muted-foreground">
                    Every patient receives personalized care from our expert team. 
                    We treat you like family because your health is our highest priority.
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
                {/* Placeholder for patient image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-end justify-end relative">
                  {/* Professional patient photo placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="relative z-10 p-8 text-right">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 inline-block">
                      <div className="text-sm font-medium text-gray-700">Patient Success Story</div>
                      <div className="text-xs text-gray-500">"They saved my life" - Rajesh, 52</div>
                    </div>
                  </div>
                  
                  {/* Heart icon overlay */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Heart className="w-16 h-16 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 border animate-bounce-slow">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-lg">10,000+</div>
                  <div className="text-xs text-muted-foreground">Lives Saved</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border animate-bounce-slow" style={{ animationDelay: "1s" }}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-lg">24/7</div>
                  <div className="text-xs text-muted-foreground">Emergency Care</div>
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
