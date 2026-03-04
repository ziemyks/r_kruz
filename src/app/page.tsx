import Hero from "@/components/Hero";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight">
      <Hero />
      <About />
      <ContactForm />
      <Footer />
    </main>
  );
}
