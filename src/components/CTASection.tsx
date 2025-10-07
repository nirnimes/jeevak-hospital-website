import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryText: string;
  primaryAction: string;
  showPhoneButton?: boolean;
  variant?: "default" | "light" | "dark";
}

const CTASection = ({ 
  title, 
  description, 
  primaryText, 
  primaryAction,
  showPhoneButton = true,
  variant = "default"
}: CTASectionProps) => {
  const bgClass = variant === "light" ? "bg-muted/30" : variant === "dark" ? "bg-primary text-primary-foreground" : "bg-secondary/10";
  const textClass = variant === "dark" ? "text-primary-foreground" : "text-foreground";
  const descClass = variant === "dark" ? "text-primary-foreground/90" : "text-muted-foreground";

  return (
    <section className={`py-12 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textClass}`}>
            {title}
          </h2>
          {description && (
            <p className={`text-lg mb-8 ${descClass}`}>
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryAction.startsWith('tel:') ? (
              <a href={primaryAction}>
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8 h-14 gap-2">
                  {primaryText}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
            ) : (
              <a href={primaryAction}>
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8 h-14 gap-2">
                  {primaryText}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
            )}
            {showPhoneButton && (
              <a href="tel:+916122670992">
                <Button size="lg" variant="outline" className={`text-lg px-8 h-14 gap-2 ${variant === 'dark' ? 'border-white/20 text-primary-foreground hover:bg-white/10' : ''}`}>
                  <Phone className="h-5 w-5" />
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
