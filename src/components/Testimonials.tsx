import { Star, MapPin, Activity, CheckCircle } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      age: 52,
      location: "Patna, Bihar",
      treatment: "Triple Bypass Surgery",
      outcome: "100% Recovery in 6 weeks",
      quote: "Dr. Sharma performed my bypass surgery with incredible skill. Recovery was faster than expected, and I'm back to my normal life. No need to go to Delhi!",
      image: "RK",
    },
    {
      id: 2,
      name: "Sunita Devi",
      age: 47,
      location: "Muzaffarpur, Bihar",
      treatment: "Aortic Valve Replacement",
      outcome: "Back to teaching within 8 weeks",
      quote: "The nursing staff and cardiac team provided exceptional care during my valve replacement. World-class treatment right here in Bihar.",
      image: "SD",
    },
    {
      id: 3,
      name: "Amit Singh",
      age: 35,
      location: "Gaya, Bihar",
      treatment: "Emergency Angioplasty",
      outcome: "Life saved, returned to work in 3 weeks",
      quote: "Emergency angioplasty saved my life. The 24/7 cardiac team responded immediately. Excellent facilities and caring doctors.",
      image: "AS",
    },
  ];

  const trustStats = [
    { value: "5000+", label: "Successful Heart Surgeries", icon: Activity },
    { value: "98%", label: "Patient Satisfaction Rate", icon: Star },
    { value: "25+", label: "Years of Cardiac Excellence", icon: CheckCircle },
    { value: "24/7", label: "Emergency Care Available", icon: Activity },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-medical-light to-white" aria-label="Patient testimonials and success stories">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why 10,000+ Patients Choose Jeevak Heart Hospital
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from patients who received life-saving cardiac care
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Patient Image & Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  {testimonial.image}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-foreground">
                    {testimonial.name}, {testimonial.age}
                  </h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <MapPin className="h-3 w-3" />
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Treatment Badge */}
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-3">
                {testimonial.treatment}
              </div>

              {/* Outcome */}
              <div className="flex items-center gap-2 text-secondary font-semibold">
                <CheckCircle className="h-5 w-5" />
                <span>{testimonial.outcome}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {trustStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover-lift animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <stat.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
