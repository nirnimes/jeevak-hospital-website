import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Calendar, Award } from "lucide-react";

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
  },
];

export default function DoctorCards() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Expert Doctors</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Board-certified specialists with international training and extensive experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <Card key={doctor.id} className="medical-card hover:shadow-lg transition-all">
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
                    {doctor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{doctor.name}</CardTitle>
                <CardDescription className="text-primary font-medium">{doctor.specialty}</CardDescription>

                <div className="flex items-center justify-center space-x-1 mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(doctor.rating) ? "text-yellow-400 fill-current" : "text-gray-200"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{doctor.rating}</span>
                  <span className="text-sm text-muted-foreground">({doctor.reviews} reviews)</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    <Award className="w-3 h-3 mr-1" />
                    {doctor.experience}
                  </Badge>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Qualifications:</p>
                  <div className="flex flex-wrap gap-1">
                    {doctor.qualifications.map((qual) => (
                      <Badge key={qual} variant="outline" className="text-xs">
                        {qual}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-600 font-medium">{doctor.availability}</span>
                  <Button size="sm" className="px-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


