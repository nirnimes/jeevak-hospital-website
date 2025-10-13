import { Phone, Mail, MapPin, Heart, GitBranch } from "lucide-react";
import { buildShortSha, buildTime, hasBuildInfo } from "@/lib/buildInfo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-warm-sage/5 border-t border-warm-sage/10">
      <div className="container mx-auto px-4 py-12">
        {/* Dr. Prasad Memorial Section */}
        <div className="mb-10 p-8 rounded-lg bg-warm-ivory border border-warm-sage/10 text-center shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-warm-sage mr-3" />
            <h3 className="text-2xl font-bold text-warm-teal font-serif">In Memory of Dr. Narendra Prasad</h3>
            <Heart className="h-8 w-8 text-warm-sage ml-3" />
          </div>
          <p className="text-lg text-warm-gray mb-4 italic">
            "Patients are our Gods. The more they come, the more we learn and serve humanity."
          </p>
          <p className="text-muted-foreground mb-6">
            Padma Shri Dr. Narendra Prasad (1934-2024) - A legendary surgeon who touched over 100,000 lives with his compassionate care. 
            His legacy continues through Anupama Hospital, where we uphold his philosophy of treating every patient with dignity and excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-warm-teal">
            <span className="flex items-center">
              <Award className="h-4 w-4 mr-1" />
              Padma Shri 2015
            </span>
            <span className="flex items-center">
              <Shield className="h-4 w-4 mr-1" />
              FRCS London 1962
            </span>
            <span className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              100,000+ Lives Touched
            </span>
          </div>
        </div>

        {/* Pre-footer CTA */}
        <div className="mb-10 p-6 rounded-lg bg-warm-ivory border border-warm-sage/10 text-center shadow-lg">
          <h3 className="text-2xl font-bold mb-3 text-warm-teal">Get Emergency Surgical Care Now</h3>
          <div className="flex items-center justify-center gap-4">
            <a
              href="tel:+916122670992"
              className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-warm-burgundy text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Call +91-612-2670992
            </a>
            <a
              href="#consultation"
              className="inline-flex items-center justify-center h-11 px-6 rounded-md border border-warm-sage/30 font-semibold hover:bg-warm-sage/10 transition-colors text-warm-sage"
            >
              Request My Consultation
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-warm-sage flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-warm-gray">Anupama Hospital Pvt Ltd</h3>
                <p className="text-xs text-warm-teal">Founded on Dr. Prasad's Legacy</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Continuing the legacy of Padma Shri Dr. Narendra Prasad, providing world-class surgical care with compassionate excellence since our founding.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-warm-gray">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-warm-sage flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-warm-burgundy font-semibold">Emergency: +91-612-2670992</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-warm-sage flex-shrink-0 mt-0.5" />
                <a href="mailto:contact@anupamahospital.com" className="text-sm hover:text-warm-teal transition-colors">
                  contact@anupamahospital.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-warm-sage flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p>Behind Side Of Arvind Hospital, Ashok Rajpath</p>
                  <p>Patna, Bihar, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-warm-gray">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-warm-teal transition-colors">
                  Our Surgical Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-warm-teal transition-colors">
                  Dr. Prasad's Legacy
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-warm-teal transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-warm-sage/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Anupama Hospital Pvt Ltd. Continuing Dr. Prasad's Legacy. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-warm-sage fill-current" />
                <span>continuing Dr. Prasad's compassionate care</span>
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
