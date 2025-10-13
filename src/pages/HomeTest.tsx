import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HomeTest = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main role="main">
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Test Page</h1>
            <p className="text-lg text-muted-foreground">This is a test to isolate the error.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomeTest;
