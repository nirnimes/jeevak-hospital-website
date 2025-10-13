import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Bone, Stethoscope, Siren, Baby, Users } from "lucide-react";
import { Calendar } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "General Surgery",
      description: "Comprehensive surgical care following Dr. Prasad's legacy of excellence in general surgical procedures.",
      specialties: [
        "Laparoscopic Surgery",
        "Gastrointestinal Surgery",
        "Hernia Repair",
        "Appendectomy"
      ]
    },
    {
      icon: Bone,
      title: "Orthopedic Surgery",
      description: "Expert surgical treatment for bone, joint, and muscle conditions with cutting-edge techniques.",
      specialties: [
        "Joint Replacement Surgery",
        "Fracture Repair",
        "Spinal Surgery",
        "Arthroscopic Procedures"
      ]
    },
    {
      icon: Stethoscope,
      title: "Cardiothoracic Surgery",
      description: "Advanced cardiac and thoracic surgical procedures with Dr. Prasad's compassionate approach.",
      specialties: [
        "Bypass Surgery",
        "Valve Replacement",
        "Lung Surgery",
        "Heart Surgery"
      ]
    },
    {
      icon: Siren,
      title: "Emergency Surgery",
      description: "24/7 emergency surgical services with rapid response for critical surgical cases.",
      specialties: [
        "Trauma Surgery",
        "Emergency Appendectomy",
        "Critical Care Surgery",
        "Emergency Procedures"
      ]
    },
    {
      icon: Baby,
      title: "Pediatric Surgery",
      description: "Specialized surgical care for children with compassionate expertise and family-centered approach.",
      specialties: [
        "Pediatric General Surgery",
        "Congenital Defect Surgery",
        "Child Trauma Surgery",
        "Minimal Access Surgery"
      ]
    },
    {
      icon: Users,
      title: "Gynecological Surgery",
      description: "Advanced women's surgical care with expertise in complex gynecological procedures.",
      specialties: [
        "Hysterectomy",
        "Ovarian Surgery",
        "Laparoscopic Gynecology",
        "Reproductive Surgery"
      ]
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif text-warm-teal">
            Our Surgical Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive surgical care following Dr. Prasad's legacy of excellence with world-class facilities and experienced surgeons
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative border-warm-sage/20 bg-warm-ivory animate-fade-in transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(123,132,113,0.25)] overflow-hidden h-full flex flex-col shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-warm-sage/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <CardHeader className="p-8 relative">
                <div className="h-16 w-16 rounded-xl bg-warm-sage/10 flex items-center justify-center mb-6 transition-all duration-300 ease-in-out group-hover:bg-warm-sage/15 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-8 w-8 text-warm-sage transition-all duration-300 ease-in-out group-hover:scale-110" />
                </div>
                <CardTitle className="text-2xl mb-3 group-hover:text-warm-teal transition-colors duration-300 text-warm-gray">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="px-8 pb-8 flex-1 flex flex-col relative">
                <CardDescription className="text-base leading-relaxed mb-6">
                  {service.description}
                </CardDescription>
                
                {/* Key Specialties */}
                <div className="mb-6 flex-1">
                  <h4 className="text-sm font-semibold text-warm-gray mb-3">Surgical Specialties:</h4>
                  <ul className="space-y-2">
                    {service.specialties.map((specialty, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-warm-sage mt-1.5 flex-shrink-0" />
                        <span>{specialty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Book Consultation Button */}
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-warm-sage text-white rounded-lg font-medium transition-all duration-300 ease-in-out hover:bg-warm-sage/90 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] group/btn w-full"
                >
                  <Calendar className="h-4 w-4 transition-transform duration-300 group-hover/btn:scale-110" />
                  Book Consultation
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Specialties */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground">
            Following Dr. Prasad's comprehensive care philosophy, we offer specialized surgical treatments in neurosurgery, 
            urological surgery, plastic surgery, and more. Our multidisciplinary surgical approach ensures comprehensive care 
            for all your surgical needs with the same compassionate excellence Dr. Prasad established.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
