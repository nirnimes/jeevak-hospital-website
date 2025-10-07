import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Stethoscope, Activity, Siren } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Coronary Angioplasty",
      description: "Advanced coronary angioplasty with and without stent placement, ensuring optimal heart function.",
    },
    {
      icon: Activity,
      title: "Open Heart Surgery",
      description: "Comprehensive open heart surgery for simple and complex congenital heart defects, including neonatal cases.",
    },
    {
      icon: Stethoscope,
      title: "Valve Replacement",
      description: "Expert valve replacement and repair procedures using cutting-edge technology and techniques.",
    },
    {
      icon: Siren,
      title: "24/7 Emergency Care",
      description: "Round-the-clock cardiac emergency services with dedicated paramedic staff and state-of-the-art equipment.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Specialized Cardiac Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive cardiac care with international standards, bringing world-class treatment to Bihar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover-lift border-border/50 bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services List */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Complete Treatment Range</CardTitle>
              <CardDescription>All cardiac procedures under one roof</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Coronary Artery Bypass Surgery",
                  "Balloon Mitral Valvotomy",
                  "Pacemaker Implantation",
                  "Surgery for Aortic Aneurysm",
                  "Cardiac Catheterization",
                  "Interventional Cardiology",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
