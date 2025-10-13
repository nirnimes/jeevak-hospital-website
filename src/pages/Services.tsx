import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmergencyContact from "@/components/EmergencyContact";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  Shield, 
  Clock, 
  Stethoscope, 
  Activity, 
  Zap,
  Users,
  Award,
  CheckCircle,
  Phone,
  Calendar,
  ArrowRight,
  Baby
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "General Surgery",
      description: "Advanced surgical procedures following Dr. Prasad's legacy of excellence in general surgery.",
      features: ["Appendectomy", "Gallbladder Surgery", "Hernia Repair", "Minimally Invasive"],
      duration: "1-3 hours",
      recovery: "1-2 weeks",
      color: "text-warm-burgundy",
      bgColor: "bg-warm-burgundy/10"
    },
    {
      icon: Shield,
      title: "Emergency Surgical Care",
      description: "24/7 emergency surgical services following Dr. Prasad's compassionate approach to urgent care.",
      features: ["Trauma Surgery", "Emergency Procedures", "Critical Care ICU", "Ambulance Service"],
      duration: "Immediate",
      recovery: "Varies",
      color: "text-warm-burgundy",
      bgColor: "bg-warm-burgundy/10"
    },
    {
      icon: Stethoscope,
      title: "Surgical Consultation",
      description: "Comprehensive surgical assessments and treatment planning with Dr. Prasad's diagnostic approach.",
      features: ["Pre-Surgical Assessment", "Treatment Planning", "Diagnostic Procedures", "Patient Counseling"],
      duration: "30-45 min",
      recovery: "Same day",
      color: "text-warm-sage",
      bgColor: "bg-warm-sage/10"
    },
    {
      icon: Activity,
      title: "Orthopedic Surgery",
      description: "Specialized orthopedic procedures for bone, joint, and musculoskeletal conditions.",
      features: ["Joint Replacement", "Fracture Repair", "Sports Medicine", "Minimally Invasive"],
      duration: "2-4 hours",
      recovery: "2-6 weeks",
      color: "text-warm-teal",
      bgColor: "bg-warm-teal/10"
    },
    {
      icon: Users,
      title: "Pediatric Surgery",
      description: "Specialized surgical care for children, continuing Dr. Prasad's compassionate approach to young patients.",
      features: ["Child Surgery", "Congenital Conditions", "Pediatric ICU", "Family Support"],
      duration: "Varies",
      recovery: "Varies",
      color: "text-warm-gold",
      bgColor: "bg-warm-gold/10"
    },
    {
      icon: Clock,
      title: "Preventive Care",
      description: "Preventive surgical care and health maintenance following Dr. Prasad's holistic approach.",
      features: ["Health Screening", "Risk Assessment", "Lifestyle Counseling", "Regular Monitoring"],
      duration: "30-60 min",
      recovery: "Same day",
      color: "text-warm-sage",
      bgColor: "bg-warm-sage/10"
    }
  ];

  const stats = [
    { label: "Lives Touched", value: "100,000+", icon: Heart },
    { label: "Years of Excellence", value: "60+", icon: Award },
    { label: "Emergency Response", value: "< 5 min", icon: Zap },
    { label: "Dr. Prasad's Legacy", value: "Padma Shri", icon: Users }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-warm-sage/5 via-background to-warm-teal/5">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-warm-gold/10 text-warm-gold border-warm-gold/20">
                <Heart className="mr-2 h-3 w-3" />
                Dr. Prasad's Legacy
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif bg-gradient-to-r from-warm-sage to-warm-teal bg-clip-text text-transparent">
                Excellence in Surgical Care
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From emergency care to complex surgeries, we continue Dr. Prasad's legacy of 
                world-class surgical services with cutting-edge technology and compassionate care.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-warm-ivory border-warm-sage/10 text-center hover-lift animate-fade-in shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-warm-sage/10 flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-warm-sage" />
                    </div>
                    <h3 className="text-2xl font-bold mb-1 text-warm-teal">{stat.value}</h3>
                    <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-warm-ivory/30">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="bg-warm-ivory border-warm-sage/10 hover-lift group animate-fade-in shadow-lg" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <service.icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl mb-2 text-warm-gray">{service.title}</CardTitle>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {/* Features */}
                      <div>
                        <h4 className="font-semibold mb-2">What's Included:</h4>
                        <div className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-warm-sage flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Duration & Recovery */}
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Duration</p>
                          <p className="font-semibold">{service.duration}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Recovery</p>
                          <p className="font-semibold">{service.recovery}</p>
                        </div>
                      </div>

                      {/* CTA */}
                      <Button className="w-full mt-4 bg-warm-sage hover:bg-warm-sage/90 text-white" variant="outline">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Section */}
        <section className="py-20 bg-gradient-to-r from-warm-burgundy/10 to-warm-burgundy/20">
          <div className="container">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-warm-burgundy to-warm-burgundy/90 text-white shadow-xl">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4 font-serif">24/7 Emergency Surgical Care</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Surgical emergencies don't wait. Following Dr. Prasad's legacy, our expert team is ready around the clock to provide 
                  immediate, life-saving surgical care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-warm-burgundy hover:bg-white/90">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Emergency: +91-612-267-0992
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-warm-burgundy">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Urgent Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-warm-ivory/30">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6 font-serif text-warm-teal">Ready to Continue Your Health Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our expert surgeons and take the first step towards better health, 
              following Dr. Prasad's compassionate approach to patient care.
            </p>
            <Button size="lg" className="bg-warm-gold hover:bg-warm-gold/90 text-white">
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Consultation Today
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <EmergencyContact />
    </div>
  );
};

export default Services;
