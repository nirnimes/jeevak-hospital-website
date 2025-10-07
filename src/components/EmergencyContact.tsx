import { Phone } from "lucide-react";

const EmergencyContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <a href="tel:+916122670992" aria-label="Emergency contact - Call now">
        <div className="relative group">
          {/* Pulse ring animation */}
          <div className="absolute inset-0 bg-destructive rounded-full animate-ping opacity-75"></div>
          
          {/* Main button */}
          <div className="relative h-16 w-16 sm:h-auto sm:w-auto sm:px-6 sm:py-4 bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-2xl rounded-full flex items-center justify-center gap-2 transition-all group-hover:scale-105">
            <Phone className="h-6 w-6 sm:h-5 sm:w-5" />
            <div className="hidden sm:flex flex-col items-start">
              <span className="text-xs font-medium opacity-90">Emergency</span>
              <span className="text-sm font-bold">Call Now</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default EmergencyContact;
