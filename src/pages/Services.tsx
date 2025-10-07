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
      title: "Cardiac Surgery",
      description: "Advanced heart surgeries including bypass, valve replacement, and congenital heart defect corrections.",
      features: ["CABG Surgery", "Valve Replacement", "Congenital Corrections", "Minimally Invasive"],
      duration: "2-6 hours",
      recovery: "1-2 weeks",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Shield,
      title: "Emergency Cardiac Care",
      description: "24/7 emergency services for heart attacks, cardiac arrests, and critical heart conditions.",
      features: ["Heart Attack Treatment", "Cardiac Arrest Response", "Critical Care ICU", "Ambulance Service"],
      duration: "Immediate",
      recovery: "Varies",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Stethoscope,
      title: "Cardiology Consultation",
      description: "Comprehensive heart health assessments, diagnostics, and treatment planning.",
      features: ["ECG & Echo", "Stress Testing", "Holter Monitoring", "Treatment Planning"],
      duration: "30-45 min",
      recovery: "Same day",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Activity,
      title: "Interventional Cardiology",
      description: "Non-surgical procedures like angioplasty, stenting, and catheter-based treatments.",
      features: ["Angioplasty", "Stent Placement", "Catheter Procedures", "Balloon Valvuloplasty"],
      duration: "1-3 hours",
      recovery: "1-2 days",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Users,
      title: "Pediatric Cardiology",
      description: "Specialized care for children with heart conditions from birth to adolescence.",
      features: ["Child Heart Surgery", "Congenital Defects", "Pediatric ICU", "Family Counseling"],
      duration: "Varies",
      recovery: "Varies",
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: Clock,
      title: "Preventive Cardiology",
      description: "Heart disease prevention, risk assessment, and lifestyle modification programs.",
      features: ["Risk Assessment", "Lifestyle Counseling", "Prevention Programs", "Regular Monitoring"],
      duration: "30-60 min",
      recovery: "Same day",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50"
    }
  ];

  const stats = [
    { label: "Total Surgeries", value: "5,000+", icon: Heart },
    { label: "Success Rate", value: "98.5%", icon: Award },
    { label: "Emergency Response", value: "< 5 min", icon: Zap },
    { label: "Patient Satisfaction", value: "4.9/5", icon: Users }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
          <div className="container">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                <Heart className="mr-2 h-3 w-3" />
                Our Services
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Comprehensive Heart Care Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From emergency care to complex surgeries, we provide world-class cardiac services 
                with cutting-edge technology and compassionate care.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <Card key={index} className="medical-card text-center hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-1 text-primary">{stat.value}</h3>
                    <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="medical-card hover-lift group animate-fade-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <service.icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
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
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
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
                      <Button className="w-full mt-4" variant="outline">
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
        <section className="py-20 bg-gradient-to-r from-red-50 to-red-100">
          <div className="container">
            <Card className="medical-card max-w-4xl mx-auto bg-gradient-to-r from-red-500 to-red-600 text-white">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4">24/7 Emergency Cardiac Care</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Heart emergencies don't wait. Our expert team is ready around the clock to provide 
                  immediate, life-saving cardiac care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-red-600 hover:bg-white/90">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Emergency: +91-612-267-0992
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Urgent Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Take Care of Your Heart?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our expert cardiologists and take the first step towards better heart health.
            </p>
            <Button size="lg" className="medical-button-primary">
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
