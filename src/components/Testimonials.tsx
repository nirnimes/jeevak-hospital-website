// @ts-nocheck
/** @jsxImportSource react */
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { badgeVariants } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TestimonialCard = ({
  photo,
  fallback,
  quote,
  name,
  age,
  location,
  treatment,
  outcome,
  delay = 0,
}: {
  photo: string;
  fallback: string;
  quote: string;
  name: string;
  age: number;
  location: string;
  treatment: string;
  outcome: string;
  delay?: number;
}) => {
  return (
    <Card
      className="bg-card border-border/50 hover-lift animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={photo} alt={`${name}'s photo`} />
              <AvatarFallback>{fallback}</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-yellow-400 text-xl leading-none" aria-label="5 star rating">★★★★★</div>
              <div className="text-sm text-muted-foreground mt-1">Verified Patient</div>
            </div>
          </div>
          <div className={`${badgeVariants({ variant: "secondary" })} text-xs`}>Patient Story</div>
        </div>

        <blockquote className="text-lg md:text-xl leading-relaxed mb-4">
          “{quote}”
        </blockquote>

        <div className="flex flex-wrap items-center gap-3 text-sm">
          <div className="font-medium">{name}, {age}</div>
          <div className="text-muted-foreground">{location}</div>
          <div className={`${badgeVariants({ variant: "outline" })} bg-primary/5 border border-primary/20 text-primary`}>{treatment}</div>
          <div className="font-semibold text-green-600">{outcome}</div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const placeholder = "/placeholder.svg";

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            Why 10,000+ Patients Choose Jeevak Heart Hospital
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from patients who received life-saving cardiac care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <TestimonialCard
            photo={placeholder}
            fallback="RK"
            quote="Dr. Sharma performed my bypass surgery with incredible skill. Recovery was faster than expected, and I'm back to my normal life. No need to go to Delhi!"
            name="Rajesh Kumar"
            age={52}
            location="Patna, Bihar"
            treatment="Triple Bypass Surgery"
            outcome="100% Recovery in 6 weeks"
            delay={0}
          />
          <TestimonialCard
            photo={placeholder}
            fallback="SD"
            quote="The nursing staff and cardiac team provided exceptional care during my valve replacement. World-class treatment right here in Bihar."
            name="Sunita Devi"
            age={47}
            location="Muzaffarpur, Bihar"
            treatment="Aortic Valve Replacement"
            outcome="Back to teaching within 8 weeks"
            delay={0.1}
          />
          <TestimonialCard
            photo={placeholder}
            fallback="AS"
            quote="Emergency angioplasty saved my life. The 24/7 cardiac team responded immediately. Excellent facilities and caring doctors."
            name="Amit Singh"
            age={35}
            location="Gaya, Bihar"
            treatment="Emergency Angioplasty"
            outcome="Life saved, returned to work in 3 weeks"
            delay={0.2}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border/50">
            <svg className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            <div>
              <div className="text-xl font-bold">5000+</div>
              <div className="text-sm text-muted-foreground">Successful Heart Surgeries</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border/50">
            <svg className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
            <div>
              <div className="text-xl font-bold">98%</div>
              <div className="text-sm text-muted-foreground">Patient Satisfaction Rate</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border/50">
            <svg className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            <div>
              <div className="text-xl font-bold">25+ Years</div>
              <div className="text-sm text-muted-foreground">of Cardiac Excellence</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/40 border border-border/50">
            <svg className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="7" rx="2"/><path d="M12 11V7a4 4 0 0 1 4-4"/><path d="M5 11V9a7 7 0 0 1 7-7"/></svg>
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

