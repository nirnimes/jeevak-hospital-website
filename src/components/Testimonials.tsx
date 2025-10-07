import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, Smile, Award, Siren } from "lucide-react";

const StarRating = () => (
  <div className="text-yellow-400 text-2xl" aria-label="5 out of 5 stars" role="img">
    ★★★★★
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            Why 10,000+ Patients Choose Jeevak Heart Hospital
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from patients who received life-saving cardiac care
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <Card className="hover-lift bg-card border-border/50 animate-fade-in">
            <CardHeader className="flex items-center text-center">
              <Avatar className="h-20 w-20 mb-3">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=240&auto=format&fit=crop"
                  alt="Rajesh Kumar"
                />
                <AvatarFallback>RK</AvatarFallback>
              </Avatar>
              <StarRating />
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg md:text-xl text-foreground mb-4">
                "Dr. Sharma performed my bypass surgery with incredible skill. Recovery was faster than expected, and I'm back to my normal life. No need to go to Delhi!"
              </p>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Rajesh Kumar, 52 • Patna, Bihar</div>
                <div className="flex items-center justify-center gap-2">
                  <Badge variant="secondary">Triple Bypass Surgery</Badge>
                </div>
                <div className="text-green-600 font-semibold">100% Recovery in 6 weeks</div>
              </div>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="hover-lift bg-card border-border/50 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader className="flex items-center text-center">
              <Avatar className="h-20 w-20 mb-3">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=240&auto=format&fit=crop"
                  alt="Sunita Devi"
                />
                <AvatarFallback>SD</AvatarFallback>
              </Avatar>
              <StarRating />
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg md:text-xl text-foreground mb-4">
                "The nursing staff and cardiac team provided exceptional care during my valve replacement. World-class treatment right here in Bihar."
              </p>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Sunita Devi, 47 • Muzaffarpur, Bihar</div>
                <div className="flex items-center justify-center gap-2">
                  <Badge variant="secondary">Aortic Valve Replacement</Badge>
                </div>
                <div className="text-green-600 font-semibold">Back to teaching within 8 weeks</div>
              </div>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="hover-lift bg-card border-border/50 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader className="flex items-center text-center">
              <Avatar className="h-20 w-20 mb-3">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=240&auto=format&fit=crop"
                  alt="Amit Singh"
                />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <StarRating />
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg md:text-xl text-foreground mb-4">
                "Emergency angioplasty saved my life. The 24/7 cardiac team responded immediately. Excellent facilities and caring doctors."
              </p>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Amit Singh, 35 • Gaya, Bihar</div>
                <div className="flex items-center justify-center gap-2">
                  <Badge variant="secondary">Emergency Angioplasty</Badge>
                </div>
                <div className="text-green-600 font-semibold">Life saved, returned to work in 3 weeks</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3 p-4 rounded-lg bg-accent">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold">5000+</div>
              <div className="text-sm text-muted-foreground">Successful Heart Surgeries</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-accent">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Smile className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm text-muted-foreground">Patient Satisfaction Rate</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-accent">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm text-muted-foreground">Years of Cardiac Excellence</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-accent">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Siren className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm text-muted-foreground">Emergency Care Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

