import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Bone, Stethoscope, Siren, Baby, Users } from "lucide-react";
import { Calendar } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Comprehensive cardiac care with advanced diagnostics and treatment for all heart-related conditions.",
      specialties: [
        "Angioplasty & Stenting",
        "Bypass Surgery",
        "Valve Replacement",
        "Cardiac Rehabilitation"
      ]
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Expert treatment for bone, joint, and muscle conditions with cutting-edge surgical techniques.",
      specialties: [
        "Joint Replacement",
        "Sports Injury Treatment",
        "Spine Surgery",
        "Arthroscopic Procedures"
      ]
    },
    {
      icon: Stethoscope,
      title: "Internal Medicine",
      description: "Complete diagnostic and treatment services for adult medical conditions and preventive care.",
      specialties: [
        "Chronic Disease Management",
        "Preventive Health Checkups",
        "Diabetes Care",
        "Hypertension Treatment"
      ]
    },
    {
      icon: Siren,
      title: "Emergency Care",
      description: "24/7 emergency services with state-of-the-art trauma care and immediate medical attention.",
      specialties: [
        "Trauma Care",
        "Critical Care Units",
        "Emergency Surgery",
        "Poison Control"
      ]
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Specialized care for infants, children, and adolescents with compassionate medical experts.",
      specialties: [
        "Newborn Care",
        "Vaccination Programs",
        "Child Development",
        "Pediatric Surgery"
      ]
    },
    {
      icon: Users,
      title: "Women's Health",
      description: "Comprehensive women's healthcare services with advanced obstetrics and gynecology care.",
      specialties: [
        "Obstetrics & Delivery",
        "Gynecological Surgery",
        "Maternal-Fetal Medicine",
        "Fertility Treatment"
      ]
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Medical Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive healthcare services with world-class facilities and experienced medical professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative border-border/50 bg-card animate-fade-in transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(59,130,246,0.25)] overflow-hidden h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <CardHeader className="p-8 relative">
                <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 ease-in-out group-hover:bg-primary/15 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-8 w-8 text-primary transition-all duration-300 ease-in-out group-hover:scale-110" />
                </div>
                <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="px-8 pb-8 flex-1 flex flex-col relative">
                <CardDescription className="text-base leading-relaxed mb-6">
                  {service.description}
                </CardDescription>
                
                {/* Key Specialties */}
                <div className="mb-6 flex-1">
                  <h4 className="text-sm font-semibold text-foreground/80 mb-3">Key Specialties:</h4>
                  <ul className="space-y-2">
                    {service.specialties.map((specialty, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                        <span>{specialty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Book Consultation Button */}
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-300 ease-in-out hover:bg-primary/90 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] group/btn w-full"
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
            In addition to our core services, we offer specialized treatments in neurology, dermatology, 
            oncology, nephrology, and more. Our multidisciplinary approach ensures comprehensive care 
            for all your healthcare needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
