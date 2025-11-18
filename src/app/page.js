import Image from "next/image";
import Hero from "./components/Hero";
import About from './components/About';
import CTASection from "./components/Commission";
import VisualRealms from "./components/VisualRealms";
import TheFuture from "./components/Future";
import CollectionArt from "./components/Collection";
import Footer from "./common/Footer";
export default function Home() {
  return (
    <div>

      <Hero />
      <About />
      <CollectionArt />
      <CTASection />
      <VisualRealms />
      <TheFuture />
      <Footer />
    </div>
  );
}
