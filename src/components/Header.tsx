import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  const navItems = [
    { name: "Home", href: "/", isExternal: false },
    { name: "Services", href: "/services", isExternal: false },
    { name: "Emergency", href: "/emergency", isExternal: false },
    { name: "About", href: "/about", isExternal: false },
    { name: "Contact", href: "/contact", isExternal: false },
  ];

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu focus trap
  useEffect(() => {
    if (mobileMenuOpen) {
      const focusableElements = mobileMenuRef.current?.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements?.[0] as HTMLElement;
      const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement?.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement?.focus();
            }
          }
        }
      };

      const handleEscapeKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
          mobileMenuButtonRef.current?.focus();
        }
      };

      document.addEventListener('keydown', handleTabKey);
      document.addEventListener('keydown', handleEscapeKey);
      firstElement?.focus();

      return () => {
        document.removeEventListener('keydown', handleTabKey);
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }
  }, [mobileMenuOpen]);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && 
          mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target as Node) &&
          !mobileMenuButtonRef.current?.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a 
        href="#hero-section" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg"
        tabIndex={1}
      >
        Skip to main content
      </a>
      
      <header 
        className={`fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-200 ${
          isScrolled ? 'shadow-md' : ''
        }`}
        role="banner"
        aria-label="Main navigation"
      >
      <div className="container mx-auto px-4">

        {/* Main Navigation */}
        <nav className="py-4" role="navigation" aria-label="Main navigation">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg p-1"
              aria-label="Anupama Hospital - Home"
            >
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center relative">
                <svg
                  className="h-6 w-6 text-primary-foreground"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M19 8h-2V6h-2V4h-2v2h-2v2H9V6H7v2H5v2h2v2h2v2h2v-2h2v-2h2v2h2v-2h2V8z" />
                  <path d="M10 16v6h4v-6h-4z" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">Anupama Hospital Pvt Ltd</div>
                <p className="text-xs text-primary">Multispecialty Hospital, Ashok Rajpath, Patna</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <ul className="flex items-center gap-6" role="menubar" aria-label="Main navigation menu" data-testid="header-menubar">
                {navItems.map((item) => (
                  <li key={item.name} role="none">
                    <Link
                      to={item.href}
                      className={`transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 ${
                        location.pathname === item.href
                          ? "text-primary font-semibold"
                          : item.name === "Emergency"
                          ? "text-destructive hover:text-destructive/80 flex items-center gap-1"
                          : "text-foreground hover:text-primary"
                      }`}
                      role="menuitem"
                      aria-current={location.pathname === item.href ? "page" : undefined}
                    >
                      
                      {item.name === "Emergency" && <Phone className="h-4 w-4" aria-hidden="true" />}
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <a
                href="tel:+916122670992"
                className="flex items-center gap-2 text-destructive font-semibold hover:text-destructive/80 transition-colors focus:outline-none focus:ring-2 focus:ring-destructive focus:ring-offset-2 rounded-md px-2 py-1"
                aria-label="Emergency phone number"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span aria-label="Emergency number">+91-612-2670992</span>
              </a>
              <Link to="/contact">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Book consultation appointment"
                >
                  Book Consultation
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={mobileMenuButtonRef}
              className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div 
              ref={mobileMenuRef}
              id="mobile-menu"
              className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in bg-background/95 backdrop-blur-sm rounded-lg p-4 border border-border"
              role="menu"
              aria-label="Mobile navigation menu"
            >
              <ul className="space-y-4" role="menubar">
                {navItems.map((item) => (
                  <li key={item.name} role="none">
                    <Link
                      to={item.href}
                      className={`block transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 ${
                        location.pathname === item.href
                          ? "text-primary font-semibold"
                          : item.name === "Emergency"
                          ? "text-destructive hover:text-destructive/80 flex items-center gap-2"
                          : "text-foreground hover:text-primary"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                      role="menuitem"
                      aria-current={location.pathname === item.href ? "page" : undefined}
                    >
                      {item.name === "Emergency" && <Phone className="h-4 w-4" aria-hidden="true" />}
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="border-t border-border pt-4 space-y-4">
                <a
                  href="tel:+916122670992"
                  className="flex items-center gap-2 text-destructive font-semibold hover:text-destructive/80 transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-destructive focus:ring-offset-2 rounded-md px-2"
                  aria-label="Emergency phone number"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>Emergency: +91-612-2670992</span>
                </a>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label="Book consultation appointment"
                  >
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
    </>
  );
};

export default Header;
