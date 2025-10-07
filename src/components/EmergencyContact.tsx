import { Phone } from "lucide-react";

const EmergencyContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <a 
        href="tel:+916122670992" 
        aria-label="Emergency contact - Call now"
        className="group"
      >
        <div className="relative">
          {/* Pulse animation ring */}
          <div className="absolute inset-0 rounded-full bg-destructive animate-ping opacity-25"></div>
          
          {/* Main button */}
          <div className="relative flex items-center justify-center w-[60px] h-[60px] bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-2xl rounded-full transition-all duration-300 hover:scale-110">
            <div className="flex flex-col items-center">
              <Phone className="h-6 w-6 mb-1" />
              <span className="text-[10px] font-bold">Emergency</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default EmergencyContact;
