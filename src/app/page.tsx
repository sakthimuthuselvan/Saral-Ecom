import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustSection } from "./components/TrustSection";
import { Products } from "./components/Products";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Benefits } from "./components/Benefits";
import { FarmJourney } from "./components/FarmJourney";
import { OurStory } from "./components/OurStory";
import { Reviews } from "./components/Reviews";
import { Gallery } from "./components/Gallery";
import { FAQ } from "./components/FAQ";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <Products />
        <WhyChooseUs />
        <Benefits />
        <FarmJourney />
        <OurStory />
        <Reviews />
        <Gallery />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
