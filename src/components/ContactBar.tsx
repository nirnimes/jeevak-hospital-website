import { Phone, MessageCircle, Mail } from "lucide-react";

const ContactBar = () => {
  return (
    <section className="bg-primary py-6 border-b border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-primary-foreground">
          <a 
            href="tel:+916122670991" 
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            aria-label="Call main hospital line"
          >
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs opacity-90">Main Hospital</div>
              <div className="font-semibold">+91-612-2670991</div>
            </div>
          </a>

          <a 
            href="tel:+916122670992" 
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            aria-label="Call emergency line"
          >
            <div className="h-10 w-10 rounded-full bg-destructive flex items-center justify-center flex-shrink-0">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-xs opacity-90">Emergency 24/7</div>
              <div className="font-semibold">+91-612-2670992</div>
            </div>
          </a>

          <a 
            href="https://wa.me/919430012345" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            aria-label="Contact us on WhatsApp"
          >
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs opacity-90">WhatsApp</div>
              <div className="font-semibold">+91-9430012345</div>
            </div>
          </a>

          <a 
            href="mailto:info@jeevakhospital.com"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            aria-label="Send us an email"
          >
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs opacity-90">Email Us</div>
              <div className="font-semibold text-sm">info@jeevakhospital.com</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;
