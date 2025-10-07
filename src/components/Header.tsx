import { Phone, Menu, Cross } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Emergency", href: "tel:+916122670992" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-10 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">

        {/* Main Navigation */}
        <nav className="py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center relative">
                <svg
                  className="h-6 w-6 text-primary-foreground"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 8h-2V6h-2V4h-2v2h-2v2H9V6H7v2H5v2h2v2h2v2h2v-2h2v-2h2v2h2v-2h2V8z" />
                  <path d="M10 16v6h4v-6h-4z" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">Jeevak Heart Hospital</h1>
                <p className="text-xs text-primary">Bihar's Premier Cardiac Care Center</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                item.name === "Emergency" ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-destructive hover:text-destructive/80 transition-colors font-medium flex items-center gap-1"
                  >
                    <Phone className="h-4 w-4" />
                    {item.name}
                  </a>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {item.name}
                  </a>
                )
              ))}
              <a
                href="tel:+916122670992"
                className="flex items-center gap-2 text-destructive font-semibold hover:text-destructive/80 transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91-612-2670992
              </a>
              <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90">
                Book Consultation
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
                item.name === "Emergency" ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-destructive hover:text-destructive/80 transition-colors font-medium flex items-center gap-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Phone className="h-4 w-4" />
                    {item.name}
                  </a>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <a
                href="tel:+916122670992"
                className="flex items-center gap-2 text-destructive font-semibold hover:text-destructive/80 transition-colors py-2"
              >
                <Phone className="h-4 w-4" />
                Emergency: +91-612-2670992
              </a>
              <Button variant="default" size="lg" className="w-full bg-primary hover:bg-primary/90">
                Book Consultation
              </Button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
