import { Phone, X } from "lucide-react";
import { useState, useEffect } from "react";

const EmergencyBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    // On mobile, start collapsed
    if (window.innerWidth < 768) {
      setIsCollapsed(true);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] animate-fade-in">
      <div className={`bg-destructive text-destructive-foreground transition-all duration-300 ${isCollapsed ? 'py-1' : 'py-2'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <a 
              href="tel:+916122670992" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-1"
            >
              <div className="flex items-center gap-2">
                <Phone className={`${isCollapsed ? 'h-3 w-3' : 'h-4 w-4'} animate-pulse`} />
                <span className={`font-semibold ${isCollapsed ? 'text-xs' : 'text-sm md:text-base'}`}>
                  {isCollapsed ? (
                    <span className="flex items-center gap-2">
                      <span>Emergency:</span>
                      <span>+91-612-2670992</span>
                    </span>
                  ) : (
                    <>
                      <span className="hidden sm:inline">Emergency Cardiac Care: </span>
                      <span className="sm:hidden">Emergency: </span>
                      <span>+91-612-2670992</span>
                      <span className="hidden md:inline"> | Available 24/7</span>
                    </>
                  )}
                </span>
              </div>
            </a>
            
            {/* Collapse/Expand button for mobile */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="md:hidden p-1 hover:opacity-80 transition-opacity"
              aria-label={isCollapsed ? "Expand emergency bar" : "Collapse emergency bar"}
            >
              <svg
                className={`h-4 w-4 transition-transform ${isCollapsed ? '' : 'rotate-180'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Close button for desktop */}
            <button
              onClick={() => setIsVisible(false)}
              className="hidden md:block p-1 hover:opacity-80 transition-opacity"
              aria-label="Close emergency bar"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBar;