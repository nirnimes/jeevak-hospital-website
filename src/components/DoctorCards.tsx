import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Calendar, Award, Clock, DollarSign, Users, CheckCircle } from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Rajiv Sharma",
    specialty: "Chief Cardiac Surgeon",
    experience: "25+ Years",
    rating: 4.9,
    reviews: 340,
    availability: "Available Today",
    qualifications: ["MBBS", "MS Cardiothoracic Surgery"],
    achievements: "3000+ Successful Surgeries",
    nextAvailable: "Today 2:30 PM",
    consultationFee: "₹2,500"
  },
  {
    id: 2,
    name: "Dr. Priya Singh",
    specialty: "Senior Cardiologist",
    experience: "18+ Years",
    rating: 4.8,
    reviews: 280,
    availability: "Available Tomorrow",
    qualifications: ["MBBS", "MD Medicine", "DM Cardiology"],
    achievements: "2500+ Cardiac Procedures",
    nextAvailable: "Tomorrow 10:00 AM",
    consultationFee: "₹2,000"
  },
  {
    id: 3,
    name: "Dr. Amit Kumar",
    specialty: "Emergency Medicine Specialist",
    experience: "15+ Years",
    rating: 4.7,
    reviews: 190,
    availability: "24/7 Available",
    qualifications: ["MBBS", "MD Emergency Medicine"],
    achievements: "5000+ Emergency Cases",
    nextAvailable: "Available Now",
    consultationFee: "₹1,500"
  },
  {
    id: 4,
    name: "Dr. Sunita Devi",
    specialty: "Pediatric Cardiologist",
    experience: "12+ Years",
    rating: 4.9,
    reviews: 150,
    availability: "Available Today",
    qualifications: ["MBBS", "MD Pediatrics", "DM Pediatric Cardiology"],
    achievements: "800+ Child Heart Surgeries",
    nextAvailable: "Today 4:00 PM",
    consultationFee: "₹2,200"
  },
  {
    id: 5,
    name: "Dr. Vikash Gupta",
    specialty: "Interventional Cardiologist",
    experience: "20+ Years",
    rating: 4.8,
    reviews: 320,
    availability: "Available Tomorrow",
    qualifications: ["MBBS", "MD Medicine", "DM Interventional Cardiology"],
    achievements: "1500+ Angioplasty Procedures",
    nextAvailable: "Tomorrow 11:30 AM",
    consultationFee: "₹2,800"
  },
  {
    id: 6,
    name: "Dr. Neha Sharma",
    specialty: "Cardiac Anesthesiologist",
    experience: "14+ Years",
    rating: 4.7,
    reviews: 120,
    availability: "Available Today",
    qualifications: ["MBBS", "MD Anesthesia", "DM Cardiac Anesthesia"],
    achievements: "2000+ Cardiac Anesthesia Cases",
    nextAvailable: "Today 3:00 PM",
    consultationFee: "₹1,800"
  }
];

export default function DoctorCards() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            <Users className="mr-2 h-3 w-3" />
            Expert Medical Team
          </Badge>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Meet Our Expert Doctors
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Board-certified specialists with international training and extensive experience in cardiac care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Card 
              key={doctor.id} 
              className="medical-card hover-lift group animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all">
                  <AvatarFallback className="text-xl font-bold bg-gradient-to-br from-primary/20 to-primary/10 text-primary">
                    {doctor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl mb-2">{doctor.name}</CardTitle>
                <CardDescription className="text-primary font-semibold text-base">{doctor.specialty}</CardDescription>

                {/* Enhanced Rating */}
                <div className="flex items-center justify-center space-x-2 mt-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(doctor.rating) ? "text-yellow-400 fill-current" : "text-gray-200"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold">{doctor.rating}</span>
                  <span className="text-sm text-muted-foreground">({doctor.reviews} reviews)</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-5">
                {/* Experience Badge */}
                <div className="flex justify-center">
                  <Badge variant="secondary" className="bg-primary/10 text-primary px-3 py-1">
                    <Award className="w-3 h-3 mr-1" />
                    {doctor.experience}
                  </Badge>
                </div>

                {/* Qualifications */}
                <div>
                  <p className="text-sm font-semibold mb-3 text-center">Qualifications</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {doctor.qualifications.map((qual) => (
                      <Badge key={qual} variant="outline" className="text-xs px-2 py-1">
                        {qual}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Achievement</p>
                  <p className="text-sm font-medium text-primary">{doctor.achievements}</p>
                </div>

                {/* Availability & Fee */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Next Available</span>
                    </div>
                    <Badge variant="outline" className="text-primary border-primary">
                      {doctor.nextAvailable}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium">Consultation Fee</span>
                    </div>
                    <span className="text-sm font-bold text-green-600">{doctor.consultationFee}</span>
                  </div>
                </div>

                {/* Availability Status & Book Button */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600 font-medium">{doctor.availability}</span>
                  </div>
                  <Button size="sm" className="medical-button-primary group">
                    <Calendar className="w-4 h-4 mr-1" />
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Can't find the right specialist? Our team will help you find the perfect match.
          </p>
          <Button size="lg" className="medical-button-primary">
            <Users className="mr-2 h-5 w-5" />
            Consult Our Medical Team
          </Button>
        </div>
      </div>
    </section>
  );
}


