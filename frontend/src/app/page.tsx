import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Schedule from "@/components/Schedule";
import Pricing from "@/components/Pricing";
import Coaches from "@/components/Coaches";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Schedule />
        <Pricing />
        <Coaches />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
