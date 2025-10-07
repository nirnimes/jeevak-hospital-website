import { Phone } from "lucide-react";

const EmergencyContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <a href="tel:+916122670992" aria-label="Emergency contact - Call now" className="group flex items-center gap-3">
        <div
          className="h-[60px] w-[60px] rounded-full bg-destructive text-destructive-foreground shadow-2xl flex items-center justify-center animate-pulse"
          role="button"
        >
          <Phone className="h-6 w-6" />
        </div>
        <span className="hidden sm:inline text-sm font-semibold text-destructive">Emergency</span>
      </a>
    </div>
  );
};

export default EmergencyContact;
