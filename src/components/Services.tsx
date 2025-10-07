import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Bone, Stethoscope, Siren, Baby, Users, CheckCircle2, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description:
        "Comprehensive cardiac care including angioplasty, bypass surgery, valve replacement, and advanced interventional procedures.",
      specialties: [
        "Angioplasty & stent placement",
        "Bypass & valve surgery",
        "24/7 emergency PCI",
      ],
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description:
        "Expert treatment for bone, joint, and muscle conditions. Specializing in joint replacement, sports injuries, and spine care.",
      specialties: [
        "Total joint replacement",
        "Arthroscopy & sports injuries",
        "Spine surgery",
      ],
    },
    {
      icon: Stethoscope,
      title: "Internal Medicine",
      description:
        "Complete diagnostic and treatment services for adult medical conditions, chronic disease management, and preventive care.",
      specialties: [
        "Diabetes & hypertension care",
        "Infectious disease management",
        "Preventive health checks",
      ],
    },
    {
      icon: Siren,
      title: "Emergency Care",
      description:
        "24/7 emergency services with state-of-the-art trauma care, critical care units, and dedicated emergency physicians.",
      specialties: [
        "Trauma & critical care",
        "Stroke & MI protocol",
        "24/7 ambulance services",
      ],
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description:
        "Specialized care for infants, children, and adolescents. From routine checkups to complex pediatric procedures.",
      specialties: [
        "Newborn & neonatal care",
        "Vaccinations & growth tracking",
        "Pediatric surgery",
      ],
    },
    {
      icon: Users,
      title: "Women's Health",
      description:
        "Comprehensive women's healthcare including obstetrics, gynecology, maternal-fetal medicine, and wellness programs.",
      specialties: [
        "Obstetrics & prenatal care",
        "Gynecologic surgery",
        "Maternal-fetal medicine",
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
              className="group hover-lift border-border/50 bg-card animate-fade-in h-full flex flex-col transition-all duration-300 ease-in-out"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-8 pb-4">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/15">
                  <service.icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-6" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8 pt-0 flex flex-col flex-1">
                <CardDescription className="text-base mb-4 line-clamp-3">
                  {service.description}
                </CardDescription>

                {"specialties" in service && Array.isArray((service as any).specialties) && (
                  <ul className="mt-2 space-y-2">
                    {(service as any).specialties.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto pt-6">
                  <Button asChild className="transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]">
                    <a href="#contact" aria-label={`Book consultation for ${service.title}`}>
                      Book Consultation
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
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
