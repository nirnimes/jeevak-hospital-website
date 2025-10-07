import { Phone, Menu, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        {/* Emergency Bar - Sticky */}
        <div className="bg-destructive text-destructive-foreground py-2 -mx-4 px-4">
          <div className="container mx-auto flex items-center justify-between text-sm">
            <span className="font-medium hidden sm:inline">Emergency Cardiac Care: Available 24/7</span>
            <span className="font-medium sm:hidden">Emergency 24/7</span>
            <a href="tel:+916122670992" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">+91-612-2670992</span>
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-destructive flex items-center justify-center">
                <Plus className="h-7 w-7 text-white rotate-0" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">Jeevak Heart Hospital</h1>
                <p className="text-xs text-muted-foreground">Bihar's Premier Cardiac Care Center</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium text-sm"
                >
                  {item.name}
                </a>
              ))}
              <a href="tel:+916122670992" className="text-destructive hover:text-destructive/80 transition-colors font-semibold text-sm flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <span>+91-612-2670992</span>
              </a>
              <a href="#home">
                <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
                  Book Consultation
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 space-y-4 animate-fade-in">
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
              <a href="#home" className="w-full">
                <Button variant="default" size="sm" className="w-full bg-primary hover:bg-primary/90">
                  Book Consultation
                </Button>
              </a>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
