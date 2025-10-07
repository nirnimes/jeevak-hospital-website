import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const highlights = [
    "ICU & CCU with high-end cardiac monitors and ventilators",
    "Modern Blood Bank - Lions Jeevan Blood Bank",
    "Fully equipped cardiac ambulance",
    "24/7 centralized medical gas and suction system",
    "International standard equipment and protocols",
    "Experienced team of cardiac specialists",
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              A Complete Cardiac Care Super-Specialty Hospital
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              The Jeevak Heart Hospital and Research Institute, Patna is Bihar's first fully equipped 
              super-specialty hospital providing all facilities for the entire range of invasive and 
              non-invasive cardiac procedures.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Until August 1998, Bihar did not have any facility for coronary angiography, angioplasty, 
              open heart surgery, and patients had to travel to distant cities at great risk. With the 
              start of Jeevak Heart Hospital, this critical gap has been covered.
            </p>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="hover-lift bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold mb-2">1998</div>
                <div className="text-sm opacity-90">Established</div>
              </CardContent>
            </Card>
            <Card className="hover-lift bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground border-0">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold mb-2">First</div>
                <div className="text-sm opacity-90">in Bihar</div>
              </CardContent>
            </Card>
            <Card className="hover-lift border-border/50">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold mb-2 text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Services</div>
              </CardContent>
            </Card>
            <Card className="hover-lift border-border/50">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold mb-2 text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Successful Surgeries</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Accreditations */}
        <div className="mt-16 p-8 bg-muted/30 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Approved & Recognized By
          </h3>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">
            Ministry of Health (GOI) under CGHS for treatment of Central Government Employees. 
            Approved by major public and private organizations including Indian Oil, Railways, 
            Bank of India, NABARD, BSNL, State Bank of India, and more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
