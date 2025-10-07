import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Shield, 
  Clock, 
  Users, 
  Award, 
  Stethoscope, 
  Activity, 
  Zap,
  CheckCircle,
  Star,
  Phone,
  Calendar
} from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Advanced Cardiac Surgery",
    description: "State-of-the-art equipment and minimally invasive procedures for faster recovery",
    benefits: ["Minimally Invasive", "Faster Recovery", "Higher Success Rate"],
    color: "text-red-500",
    bgColor: "bg-red-50"
  },
  {
    icon: Shield,
    title: "24/7 Emergency Care",
    description: "Round-the-clock emergency services with rapid response time for critical cases",
    benefits: ["24/7 Availability", "Rapid Response", "Critical Care"],
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Clock,
    title: "Quick Appointments",
    description: "Same-day consultations and minimal wait times for your convenience",
    benefits: ["Same-Day Booking", "Minimal Wait", "Flexible Timing"],
    color: "text-green-500",
    bgColor: "bg-green-50"
  },
  {
    icon: Users,
    title: "Expert Medical Team",
    description: "Board-certified specialists with international training and extensive experience",
    benefits: ["Board Certified", "International Training", "25+ Years Experience"],
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "5000+ successful surgeries and 10,000+ lives saved with excellent outcomes",
    benefits: ["5000+ Surgeries", "10,000+ Lives Saved", "Excellent Outcomes"],
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    icon: Stethoscope,
    title: "Comprehensive Care",
    description: "From consultation to post-operative care, we handle everything under one roof",
    benefits: ["Complete Care", "Post-Operative Support", "One-Stop Solution"],
    color: "text-indigo-500",
    bgColor: "bg-indigo-50"
  }
];

const stats = [
  { label: "Success Rate", value: "98.5%", icon: Activity },
  { label: "Patient Satisfaction", value: "4.9/5", icon: Star },
  { label: "Average Wait Time", value: "< 15 min", icon: Clock },
  { label: "Emergency Response", value: "< 5 min", icon: Zap }
];

export default function Features() {
  return (
    <section className="py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            <Award className="mr-2 h-3 w-3" />
            Why Choose Us
          </Badge>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            World-Class Heart Care
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Bihar's premier cardiac care center with cutting-edge technology and compassionate care
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

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="medical-card hover-lift group animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="medical-card max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-4">Ready to Experience Excellence?</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of patients who trust us with their heart health. Book your consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge variant="secondary" className="px-4 py-2 bg-green-100 text-green-800">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Consultation
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 bg-red-100 text-red-800">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency: +91-612-267-0992
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
