import Hero from "@/components/Hero";
import About from "@/components/About";
import Partnership from "@/components/Partnership";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050811] text-white selection:bg-bronze/30">
      <Hero />
      <About />
      <Partnership />
      <ContactForm />
      <Footer />
    </main>
  );
}
