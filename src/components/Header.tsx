import { Phone, Menu, FirstAidKit, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isEmergencyCollapsed, setIsEmergencyCollapsed] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Emergency", href: "tel:+916122670992" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        {/* Sticky Emergency Bar */}
        <div className="bg-destructive text-destructive-foreground -mx-4 px-4">
          {/* Expanded */}
          {!isEmergencyCollapsed && (
            <div className="container mx-auto flex items-center justify-between text-sm py-2">
              <span className="font-medium">Emergency Cardiac Care: <a href="tel:+916122670992" className="underline underline-offset-2">+91-612-2670992</a> | Available 24/7</span>
              <div className="flex items-center gap-3">
                <a href="tel:+916122670992" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                  <Phone className="h-4 w-4" />
                  <span className="font-semibold">Call Now</span>
                </a>
                <button className="md:hidden" aria-label="Collapse emergency bar" onClick={() => setIsEmergencyCollapsed(true)}>
                  <ChevronUp className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
          {/* Collapsed (mobile) */}
          {isEmergencyCollapsed && (
            <div className="container mx-auto flex items-center justify-between text-sm py-1 md:py-2">
              <a href="tel:+916122670992" className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="font-semibold">Emergency</span>
              </a>
              <button className="md:hidden" aria-label="Expand emergency bar" onClick={() => setIsEmergencyCollapsed(false)}>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        {/* Main Navigation */}
        <nav className="py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                <FirstAidKit className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">Jeevak Heart Hospital</h1>
                <p className="text-xs text-muted-foreground">Bihar's Premier Cardiac Care Center</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
              <a href="tel:+916122670992" className="font-semibold text-destructive hover:opacity-90 transition-opacity">
                +91-612-2670992
              </a>
              <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="#home">Book Consultation</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="tel:+916122670992"
                className="block text-center font-semibold text-destructive"
                onClick={() => setMobileMenuOpen(false)}
              >
                +91-612-2670992
              </a>
              <Button variant="default" size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="#home" onClick={() => setMobileMenuOpen(false)}>Book Consultation</a>
              </Button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
