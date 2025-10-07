import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  showPhoneButton?: boolean;
  variant?: "default" | "muted";
}

const CTASection = ({
  title,
  description,
  primaryButtonText = "Book Consultation",
  primaryButtonHref = "#contact",
  showPhoneButton = true,
  variant = "default",
}: CTASectionProps) => {
  return (
    <section className={`py-12 ${variant === "muted" ? "bg-muted/30" : "bg-primary/5"}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-muted-foreground mb-8">
              {description}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={primaryButtonHref}>
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold group"
              >
                {primaryButtonText}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            
            {showPhoneButton && (
              <a href="tel:+916122670992">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground font-semibold"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Emergency: +91-612-2670992
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;