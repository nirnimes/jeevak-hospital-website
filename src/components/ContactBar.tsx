import { Phone, MessageCircle, Mail } from "lucide-react";

const ContactBar = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center">Contact Our Medical Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <a
            href="tel:+916122670991"
            className="flex items-center gap-3 bg-muted/50 border-2 border-border hover:border-primary hover:bg-primary/5 transition-all rounded-xl p-4"
            aria-label="Call main hospital line"
          >
            <div className="text-2xl" aria-hidden>📞</div>
            <div>
              <div className="text-sm font-semibold text-foreground">Main Hospital</div>
              <div className="text-primary font-medium">+91-612-2670991</div>
            </div>
          </a>

          <a
            href="tel:+916122670992"
            className="flex items-center gap-3 bg-muted/50 border-2 border-border hover:border-destructive hover:bg-destructive/5 transition-all rounded-xl p-4"
            aria-label="Call emergency line"
          >
            <div className="text-2xl" aria-hidden>🚨</div>
            <div>
              <div className="text-sm font-semibold text-foreground">Emergency 24/7</div>
              <div className="text-destructive font-medium">+91-612-2670992</div>
            </div>
          </a>

          <a
            href="https://wa.me/919430012345"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-muted/50 border-2 border-border hover:border-primary hover:bg-primary/5 transition-all rounded-xl p-4"
            aria-label="Contact us on WhatsApp"
          >
            <div className="text-2xl" aria-hidden>💬</div>
            <div>
              <div className="text-sm font-semibold text-foreground">WhatsApp</div>
              <div className="text-primary font-medium">+91-9430012345</div>
            </div>
          </a>

          <a
            href="mailto:info@jeevakhospital.com"
            className="flex items-center gap-3 bg-muted/50 border-2 border-border hover:border-primary hover:bg-primary/5 transition-all rounded-xl p-4"
            aria-label="Send us an email"
          >
            <div className="text-2xl" aria-hidden>📧</div>
            <div>
              <div className="text-sm font-semibold text-foreground">Email Us</div>
              <div className="text-primary font-medium">info@jeevakhospital.com</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;
