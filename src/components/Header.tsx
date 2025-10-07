import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emergencyOpen, setEmergencyOpen] = useState(true);

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
        {/* Sticky Emergency Contact Bar (top, always visible) */}
        {emergencyOpen && (
          <div className="bg-destructive text-destructive-foreground py-2 -mx-4 px-4">
            <div className="container mx-auto flex items-center justify-between text-sm">
              <span className="font-medium">Emergency Cardiac Care: <a href="tel:+916122670992" className="underline underline-offset-2 hover:opacity-90">+91-612-2670992</a> | Available 24/7</span>
              <div className="flex items-center gap-4">
                <a href="tel:+916122670992" className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity" aria-label="Call emergency now">
                  <Phone className="h-4 w-4" />
                  <span className="font-semibold">Call Now</span>
                </a>
                <button className="sm:hidden text-destructive-foreground/90 underline" onClick={() => setEmergencyOpen(false)} aria-label="Hide emergency bar">
                  Hide
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Navigation */}
        <nav className="py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                {/* Medical cross icon via plus symbol */}
                <span className="text-primary-foreground font-extrabold text-2xl">+</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">Jeevak Heart Hospital</h1>
                <p className="text-xs text-muted-foreground">Bihar's Premier Cardiac Care Center</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
              <a href="#callback">
                <Button variant="default" size="sm" className="bg-[hsl(var(--medical-blue))] hover:bg-[hsl(var(--medical-blue))]/90">
                  Book Consultation
                </Button>
              </a>
              <a href="tel:+916122670992" className="font-semibold text-destructive hover:opacity-80">
                +91-612-2670992
              </a>
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
              <a href="#callback" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="default" size="sm" className="w-full bg-[hsl(var(--medical-blue))] hover:bg-[hsl(var(--medical-blue))]/90">
                  Book Consultation
                </Button>
              </a>
              <a href="tel:+916122670992" className="block text-center font-semibold text-destructive">
                +91-612-2670992
              </a>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
