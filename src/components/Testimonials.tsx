import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote, Heart, Shield, Award } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Patna, Bihar",
    rating: 5,
    text: "Dr. Rajiv Sharma saved my life with a complex heart surgery. The entire team was professional and caring. I'm grateful to be alive today.",
    treatment: "Bypass Surgery",
    date: "3 months ago",
    avatar: "RK"
  },
  {
    id: 2,
    name: "Priya Singh",
    location: "Gaya, Bihar",
    rating: 5,
    text: "Excellent emergency care when I had a heart attack. The team responded immediately and provided world-class treatment. Highly recommended!",
    treatment: "Emergency Care",
    date: "1 month ago",
    avatar: "PS"
  },
  {
    id: 3,
    name: "Amit Kumar",
    location: "Muzaffarpur, Bihar",
    rating: 5,
    text: "My 8-year-old son's heart condition was treated here. Dr. Sunita is amazing with children. The hospital has the best pediatric cardiac care.",
    treatment: "Pediatric Cardiology",
    date: "2 weeks ago",
    avatar: "AK"
  },
  {
    id: 4,
    name: "Sunita Devi",
    location: "Darbhanga, Bihar",
    rating: 5,
    text: "Angioplasty procedure was smooth and painless. The modern equipment and skilled doctors gave me confidence. Thank you team!",
    treatment: "Angioplasty",
    date: "1 week ago",
    avatar: "SD"
  },
  {
    id: 5,
    name: "Vikash Gupta",
    location: "Bhagalpur, Bihar",
    rating: 5,
    text: "From consultation to surgery, everything was handled professionally. The hospital facilities are world-class. Dr. Priya is an excellent cardiologist.",
    treatment: "Cardiology Consultation",
    date: "2 months ago",
    avatar: "VG"
  },
  {
    id: 6,
    name: "Neha Sharma",
    location: "Purnia, Bihar",
    rating: 5,
    text: "24/7 emergency services saved my father's life. The response time was incredible. This hospital is a blessing for Bihar.",
    treatment: "Emergency Surgery",
    date: "3 weeks ago",
    avatar: "NS"
  }
];

const stats = [
  { icon: Heart, label: "Lives Saved", value: "10,000+", color: "text-red-500" },
  { icon: Shield, label: "Successful Surgeries", value: "5,000+", color: "text-blue-500" },
  { icon: Award, label: "Years of Excellence", value: "25+", color: "text-green-500" }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/50 via-background to-primary/5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            <Heart className="mr-2 h-3 w-3" />
            Patient Stories
          </Badge>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            What Our Patients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real stories from real patients who trusted us with their heart health
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="medical-card text-center hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-primary">{stat.value}</h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="medical-card hover-lift animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Patient Info */}
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {testimonial.treatment}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="medical-card max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Experience World-Class Heart Care?</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of satisfied patients who trust us with their heart health
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge variant="secondary" className="px-4 py-2 bg-primary/10 text-primary">
                  <Star className="w-4 h-4 mr-2 fill-current" />
                  4.9/5 Patient Rating
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 bg-green-100 text-green-800">
                  <Shield className="w-4 h-4 mr-2" />
                  100% Safe & Secure
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}