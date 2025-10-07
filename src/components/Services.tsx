import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Bone, Stethoscope, Siren, Baby, Users } from "lucide-react";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Comprehensive cardiac care including angioplasty, bypass surgery, valve replacement, and advanced interventional procedures.",
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Expert treatment for bone, joint, and muscle conditions. Specializing in joint replacement, sports injuries, and spine care.",
    },
    {
      icon: Stethoscope,
      title: "Internal Medicine",
      description: "Complete diagnostic and treatment services for adult medical conditions, chronic disease management, and preventive care.",
    },
    {
      icon: Siren,
      title: "Emergency Care",
      description: "24/7 emergency services with state-of-the-art trauma care, critical care units, and dedicated emergency physicians.",
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Specialized care for infants, children, and adolescents. From routine checkups to complex pediatric procedures.",
    },
    {
      icon: Users,
      title: "Women's Health",
      description: "Comprehensive women's healthcare including obstetrics, gynecology, maternal-fetal medicine, and wellness programs.",
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
              className="hover-lift border-border/50 bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {service.description}
                </CardDescription>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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

      {/* CTA After Services */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Find the Right Cardiac Treatment</h3>
        <div className="flex justify-center gap-4">
          <a href="#callback" className="inline-block">
            <span className="inline-flex items-center px-6 py-3 rounded-md text-white bg-[hsl(var(--medical-green))] hover:bg-[hsl(var(--medical-green))]/90 transition-colors font-semibold">Request My Consultation</span>
          </a>
          <a href="tel:+916122670992" className="inline-block">
            <span className="inline-flex items-center px-6 py-3 rounded-md text-white bg-destructive hover:bg-destructive/90 transition-colors font-semibold">Call Emergency</span>
          </a>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Services;
