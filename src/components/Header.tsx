import { Phone, Menu, Cross } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/", isExternal: false },
    { name: "Services", href: "/services", isExternal: false },
    { name: "Emergency", href: "/emergency", isExternal: false },
    { name: "About", href: "/about", isExternal: false },
    { name: "Contact", href: "/contact", isExternal: false },
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
                <h1 className="text-lg font-bold text-foreground">Anupama Hospital Pvt Ltd</h1>
                <p className="text-xs text-primary">Multispecialty Hospital, Ashok Rajpath, Patna</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors font-medium ${
                    location.pathname === item.href
                      ? "text-primary font-semibold"
                      : item.name === "Emergency"
                      ? "text-destructive hover:text-destructive/80 flex items-center gap-1"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name === "Emergency" && <Phone className="h-4 w-4" />}
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+916122670992"
                className="flex items-center gap-2 text-destructive font-semibold hover:text-destructive/80 transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91-612-2670992
              </a>
              <Link to="/contact">
                <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90">
                  Book Consultation
                </Button>
              </Link>
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
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block transition-colors font-medium ${
                    location.pathname === item.href
                      ? "text-primary font-semibold"
                      : item.name === "Emergency"
                      ? "text-destructive hover:text-destructive/80 flex items-center gap-2"
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name === "Emergency" && <Phone className="h-4 w-4" />}
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+916122670992"
                className="flex items-center gap-2 text-destructive font-semibold hover:text-destructive/80 transition-colors py-2"
              >
                <Phone className="h-4 w-4" />
                Emergency: +91-612-2670992
              </a>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="default" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Book Consultation
                </Button>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
