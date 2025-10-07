// @ts-nocheck
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Bone, Stethoscope, Siren, Baby, Users } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Comprehensive cardiac care including angioplasty, bypass surgery, valve replacement, and advanced interventional procedures.",
      specialties: ["Angioplasty & stents", "Bypass & valve surgery", "Heart failure clinic"],
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Expert treatment for bone, joint, and muscle conditions. Specializing in joint replacement, sports injuries, and spine care.",
      specialties: ["Joint replacement", "Sports injury care", "Spine & trauma"],
    },
    {
      icon: Stethoscope,
      title: "Internal Medicine",
      description: "Complete diagnostic and treatment services for adult medical conditions, chronic disease management, and preventive care.",
      specialties: ["Diabetes & hypertension", "Infectious diseases", "Preventive health"],
    },
    {
      icon: Siren,
      title: "Emergency Care",
      description: "24/7 emergency services with state-of-the-art trauma care, critical care units, and dedicated emergency physicians.",
      specialties: ["24/7 trauma care", "Critical care unit", "Rapid triage"],
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Specialized care for infants, children, and adolescents. From routine checkups to complex pediatric procedures.",
      specialties: ["Well-child checkups", "NICU support", "Vaccinations"],
    },
    {
      icon: Users,
      title: "Women's Health",
      description: "Comprehensive women's healthcare including obstetrics, gynecology, maternal-fetal medicine, and wellness programs.",
      specialties: ["Obstetrics & delivery", "Gynecologic care", "Maternal-fetal medicine"],
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-6 xl:gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover-lift border-border/50 bg-card animate-fade-in h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-8 pb-0">
                <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary/15">
                  <service.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-3 group-hover:scale-[1.03]" />
                </div>
                <CardTitle className="text-2xl leading-tight">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-4 pb-8 flex flex-col grow">
                <CardDescription className="text-base mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                {service.specialties && (
                  <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                    {service.specialties.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-auto pt-2 flex items-center justify-between">
                  <Button asChild className="px-5 py-5 text-[15px] h-11 transition-transform duration-300 hover:scale-[1.02]">
                    <a href="#contact">Book Consultation</a>
                  </Button>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
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
