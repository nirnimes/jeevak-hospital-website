import { Card, CardContent } from "@/components/ui/card";
import { Star, Activity, Users, Clock, Heart } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    age: 52,
    location: "Patna, Bihar",
    treatment: "Triple Bypass Surgery",
    outcome: "100% Recovery in 6 weeks",
    rating: 5,
    quote: "Dr. Sharma performed my bypass surgery with incredible skill. Recovery was faster than expected, and I'm back to my normal life. No need to go to Delhi!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=rajesh&backgroundColor=b6e3f4"
  },
  {
    id: 2,
    name: "Sunita Devi",
    age: 47,
    location: "Muzaffarpur, Bihar",
    treatment: "Aortic Valve Replacement",
    outcome: "Back to teaching within 8 weeks",
    rating: 5,
    quote: "The nursing staff and cardiac team provided exceptional care during my valve replacement. World-class treatment right here in Bihar.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sunita&backgroundColor=ffd5dc&accessories=prescription02&hairColor=black&facialHair=blank&clothingGraphic=blank&hatColor=pastel&skinColor=light&clothing=blazer&top=hijab"
  },
  {
    id: 3,
    name: "Amit Singh",
    age: 35,
    location: "Gaya, Bihar",
    treatment: "Emergency Angioplasty",
    outcome: "Life saved, returned to work in 3 weeks",
    rating: 5,
    quote: "Emergency angioplasty saved my life. The 24/7 cardiac team responded immediately. Excellent facilities and caring doctors.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=amit&backgroundColor=b6e3f4"
  }
];

const trustStats = [
  {
    icon: Activity,
    value: "5000+",
    label: "Successful Heart Surgeries",
    color: "text-red-600"
  },
  {
    icon: Users,
    value: "98%",
    label: "Patient Satisfaction Rate",
    color: "text-green-600"
  },
  {
    icon: Clock,
    value: "25+",
    label: "Years of Cardiac Excellence",
    color: "text-blue-600"
  },
  {
    icon: Heart,
    value: "24/7",
    label: "Emergency Care Available",
    color: "text-purple-600"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why 10,000+ Patients Choose Jeevak Heart Hospital
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real stories from patients who received life-saving cardiac care
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Patient Photo and Rating */}
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full border-4 border-blue-100 mr-4"
                  />
                  <div>
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      {testimonial.name}, {testimonial.age}
                    </h3>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="mb-4">
                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </blockquote>

                {/* Treatment Badge */}
                <div className="mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.treatment}
                  </span>
                </div>

                {/* Outcome */}
                <div className="border-t pt-3">
                  <p className="text-green-600 font-semibold flex items-center">
                    <Heart className="w-4 h-4 mr-2" />
                    {testimonial.outcome}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Statistics */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {trustStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 ${stat.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;