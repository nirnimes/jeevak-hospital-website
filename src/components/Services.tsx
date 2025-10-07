import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Bone, Stethoscope, Siren, Baby, Users } from "lucide-react";
import { ArrowRight } from "lucide-react";

const Services = () => {
  type ServiceItem = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    bullets: string[];
  };

  const services: ServiceItem[] = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Comprehensive cardiac care including angioplasty, bypass surgery, valve replacement, and advanced interventional procedures.",
      bullets: [
        "Angioplasty & stenting",
        "Bypass & valve surgery",
        "Cardiac rehab & prevention",
      ],
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Expert treatment for bone, joint, and muscle conditions. Specializing in joint replacement, sports injuries, and spine care.",
      bullets: [
        "Joint replacement",
        "Sports injury care",
        "Spine & trauma",
      ],
    },
    {
      icon: Stethoscope,
      title: "Internal Medicine",
      description: "Complete diagnostic and treatment services for adult medical conditions, chronic disease management, and preventive care.",
      bullets: [
        "Chronic disease management",
        "Diabetes & hypertension",
        "Preventive health checks",
      ],
    },
    {
      icon: Siren,
      title: "Emergency Care",
      description: "24/7 emergency services with state-of-the-art trauma care, critical care units, and dedicated emergency physicians.",
      bullets: [
        "24/7 trauma response",
        "Advanced critical care",
        "Rapid diagnostics",
      ],
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Specialized care for infants, children, and adolescents. From routine checkups to complex pediatric procedures.",
      bullets: [
        "Newborn & child care",
        "Vaccinations & growth",
        "Pediatric surgery",
      ],
    },
    {
      icon: Users,
      title: "Women's Health",
      description: "Comprehensive women's healthcare including obstetrics, gynecology, maternal-fetal medicine, and wellness programs.",
      bullets: [
        "Obstetrics & maternity",
        "Gynecology & IVF",
        "Wellness & screening",
      ],
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
              className="group h-full flex flex-col hover-lift border-border/50 bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-8">
                <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-colors duration-300 ease-in-out group-hover:bg-primary/15">
                  <service.icon className="h-7 w-7 text-primary transition-transform duration-300 ease-in-out group-hover:rotate-3 group-hover:scale-105" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 flex-1">
                <CardDescription className="text-base mb-4">
                  {service.description}
                </CardDescription>
                <ul className="list-disc pl-5 space-y-2 text-foreground/90 mb-6">
                  {service.bullets.map((item, i) => (
                    <li key={i} className="text-sm md:text-base leading-relaxed">{item}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8 pt-0 mt-auto">
                <Button asChild size="lg" className="transition-transform duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98]">
                  <a href="#contact" aria-label={`Book consultation for ${service.title}`}>
                    Book Consultation
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
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
