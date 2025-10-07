import { Phone, Mail, MapPin, Heart, GitBranch } from "lucide-react";
import { buildShortSha, buildTime, hasBuildInfo } from "@/lib/buildInfo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Pre-footer CTA */}
        <div className="mb-10 p-6 rounded-lg bg-card border border-border text-center">
          <h3 className="text-2xl font-bold mb-3">Get Emergency Heart Care Now</h3>
          <div className="flex items-center justify-center gap-4">
            <a
              href="tel:+916122670992"
              className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-destructive text-destructive-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Call +91-612-2670992
            </a>
            <a
              href="#consultation"
              className="inline-flex items-center justify-center h-11 px-6 rounded-md border border-border font-semibold hover:bg-muted/50 transition-colors"
            >
              Request My Consultation
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Jeevak Heart Hospital</h3>
                <p className="text-xs text-muted-foreground">& Research Institute</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Bihar's first super-specialty cardiac hospital, providing world-class cardiac care since 1998.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">+91-612-2365814</p>
                  <p className="text-sm">+91-612-2345895</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:info@jeevakhospital.com" className="text-sm hover:text-primary transition-colors">
                  info@jeevakhospital.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p>6, Doctor's Colony, Kankarbagh</p>
                  <p>Patna - 800020, Bihar, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Jeevak Heart Hospital & Research Institute. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-destructive fill-current" />
                <span>for better cardiac care</span>
              </div>
              {hasBuildInfo() && (
                <div className="flex items-center gap-2">
                  <GitBranch className="h-4 w-4" />
                  <span className="tabular-nums">{buildShortSha}</span>
                  <span aria-hidden>•</span>
                  <time dateTime={buildTime}>{new Date(buildTime).toLocaleString()}</time>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
