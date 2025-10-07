import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmergencyContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <a href="tel:+916122670992" aria-label="Emergency contact - Call now">
        <Button
          size="lg"
          className="h-14 px-6 bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-2xl rounded-full font-semibold text-base gap-2 animate-pulse"
        >
          <Phone className="h-5 w-5" />
          <span className="hidden sm:inline">Emergency: Call Now</span>
          <span className="sm:hidden">Emergency</span>
        </Button>
      </a>
    </div>
  );
};

export default EmergencyContact;
