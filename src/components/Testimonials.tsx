import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, HeartPulse, Smile, ShieldCheck, Clock } from "lucide-react";

const goldStar = (
  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" aria-hidden="true" />
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">Why 10,000+ Patients Choose Jeevak Heart Hospital</h2>
          <p className="text-lg text-muted-foreground">Real stories from patients who received life-saving cardiac care</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Card 1 */}
          <Card className="hover-lift bg-card border-border/60">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Rajesh Kumar" />
                  <AvatarFallback>RK</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <div className="flex items-center" aria-label="5 star rating">
                    {goldStar}{goldStar}{goldStar}{goldStar}{goldStar}
                  </div>
                  <span className="sr-only">5 out of 5 stars</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <blockquote className="text-lg md:text-xl font-medium leading-relaxed">“Dr. Sharma performed my bypass surgery with incredible skill. Recovery was faster than expected, and I'm back to my normal life. No need to go to Delhi!”</blockquote>
              <div className="mt-4 text-sm text-muted-foreground">Rajesh Kumar, 52 • Patna, Bihar</div>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Badge className="bg-primary/10 text-primary border-primary/20" variant="outline">Triple Bypass Surgery</Badge>
                <span className="text-sm font-semibold text-emerald-600">100% Recovery in 6 weeks</span>
              </div>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="hover-lift bg-card border-border/60">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Sunita Devi" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <div className="flex items-center" aria-label="5 star rating">
                    {goldStar}{goldStar}{goldStar}{goldStar}{goldStar}
                  </div>
                  <span className="sr-only">5 out of 5 stars</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <blockquote className="text-lg md:text-xl font-medium leading-relaxed">“The nursing staff and cardiac team provided exceptional care during my valve replacement. World-class treatment right here in Bihar.”</blockquote>
              <div className="mt-4 text-sm text-muted-foreground">Sunita Devi, 47 • Muzaffarpur, Bihar</div>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Badge className="bg-primary/10 text-primary border-primary/20" variant="outline">Aortic Valve Replacement</Badge>
                <span className="text-sm font-semibold text-emerald-600">Back to teaching within 8 weeks</span>
              </div>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="hover-lift bg-card border-border/60">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Amit Singh" />
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <div className="flex items-center" aria-label="5 star rating">
                    {goldStar}{goldStar}{goldStar}{goldStar}{goldStar}
                  </div>
                  <span className="sr-only">5 out of 5 stars</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <blockquote className="text-lg md:text-xl font-medium leading-relaxed">“Emergency angioplasty saved my life. The 24/7 cardiac team responded immediately. Excellent facilities and caring doctors.”</blockquote>
              <div className="mt-4 text-sm text-muted-foreground">Amit Singh, 35 • Gaya, Bihar</div>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Badge className="bg-primary/10 text-primary border-primary/20" variant="outline">Emergency Angioplasty</Badge>
                <span className="text-sm font-semibold text-emerald-600">Life saved, returned to work in 3 weeks</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border/60">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <HeartPulse className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-xl font-bold">5000+</div>
              <div className="text-sm text-muted-foreground">Successful Heart Surgeries</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border/60">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Smile className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-xl font-bold">98%</div>
              <div className="text-sm text-muted-foreground">Patient Satisfaction Rate</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border/60">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-xl font-bold">25+</div>
              <div className="text-sm text-muted-foreground">Years of Cardiac Excellence</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border/60">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-xl font-bold">24/7</div>
              <div className="text-sm text-muted-foreground">Emergency Care Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

