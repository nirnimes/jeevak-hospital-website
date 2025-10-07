import { Phone, Menu, Hospital } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emergencyCollapsed, setEmergencyCollapsed] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Emergency", href: "#emergency" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        {/* Emergency Bar */}
        <div className="bg-destructive text-destructive-foreground -mx-4 px-4">
          {emergencyCollapsed ? (
            <div className="container mx-auto flex items-center justify-between text-sm py-1.5">
              <a
                href="tel:+916122670992"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                aria-label="Emergency Cardiac Care: Call +91-612-2670992"
              >
                <Phone className="h-4 w-4" />
                <span className="font-semibold">Emergency 24/7: +91-612-2670992</span>
              </a>
              <button
                className="md:hidden text-destructive-foreground/90 text-xs underline"
                onClick={() => setEmergencyCollapsed(false)}
                aria-label="Expand emergency bar"
              >
                Show
              </button>
            </div>
          ) : (
            <div className="container mx-auto flex items-center justify-between text-sm py-2">
              <a
                href="tel:+916122670992"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                aria-label="Emergency Cardiac Care: Call +91-612-2670992"
              >
                <Phone className="h-4 w-4" />
                <span className="font-semibold">
                  Emergency Cardiac Care: +91-612-2670992 | Available 24/7
                </span>
              </a>
              <button
                className="md:hidden text-destructive-foreground/90 text-xs underline"
                onClick={() => setEmergencyCollapsed(true)}
                aria-label="Collapse emergency bar"
              >
                Hide
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
                <Hospital className="h-6 w-6 text-primary-foreground" />
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
              <a
                href="tel:+916122670992"
                className="text-destructive font-semibold hover:opacity-80 transition-opacity"
                aria-label="Call Emergency +91-612-2670992"
              >
                +91-612-2670992
              </a>
              <Button variant="default" size="sm" asChild>
                <a href="#consultation">Request My Consultation</a>
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
                  href={item.name === "Emergency" ? "tel:+916122670992" : item.href}
                  className={`block transition-colors font-medium ${item.name === "Emergency" ? "text-destructive" : "text-foreground hover:text-primary"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="default" size="sm" className="w-full" asChild>
                <a href="#consultation">Request My Consultation</a>
              </Button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
