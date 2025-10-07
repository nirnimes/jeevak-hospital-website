import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Footer from "@/components/Footer";
import EmergencyContact from "@/components/EmergencyContact";
import ContactBar from "@/components/ContactBar";
import CallbackForm from "@/components/CallbackForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <section id="callback-form" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <CallbackForm />
            </div>
          </div>
        </section>
        <ContactBar />
        <Services />
        <About />
      </main>
      <Footer />
      <EmergencyContact />
    </div>
  );
};

export default Index;
