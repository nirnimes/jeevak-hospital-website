import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmergencyContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in" id="emergency">
      <a href="tel:+916122670992" aria-label="Emergency contact - Call now">
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-destructive opacity-60 animate-[ping_1.8s_ease-in-out_infinite]" aria-hidden="true" />
          <Button
            size="lg"
            className="h-[60px] w-[60px] sm:w-auto px-0 sm:px-6 bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-2xl rounded-full font-semibold text-base gap-2"
          >
            <Phone className="h-5 w-5" />
            <span className="hidden sm:inline">Emergency</span>
          </Button>
        </div>
      </a>
    </div>
  );
};

export default EmergencyContact;
