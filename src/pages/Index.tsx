import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Footer from "@/components/Footer";
import EmergencyContact from "@/components/EmergencyContact";
import ContactBar from "@/components/ContactBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ContactBar />
        <Services />
        <About />
        {/* Pre-Footer CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Get Emergency Heart Care Now</h3>
            <p className="text-muted-foreground mb-6">Available 24/7 for cardiac emergencies</p>
            <div className="flex justify-center gap-4">
              <a href="tel:+916122670992" className="inline-block">
                <span className="inline-flex items-center px-6 py-3 rounded-md text-white bg-destructive hover:bg-destructive/90 transition-colors font-semibold">Call +91-612-2670992</span>
              </a>
              <a href="#callback" className="inline-block">
                <span className="inline-flex items-center px-6 py-3 rounded-md text-white bg-[hsl(var(--medical-green))] hover:bg-[hsl(var(--medical-green))]/90 transition-colors font-semibold">Request My Consultation</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <EmergencyContact />
    </div>
  );
};

export default Index;
