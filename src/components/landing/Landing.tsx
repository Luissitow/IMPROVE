import { Preloader } from "./Preloader";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { Process } from "./Process";
import { Gallery } from "./Gallery";
import { Guarantees } from "./Guarantees";
import { Footer } from "./Footer";

export function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Preloader />
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Gallery />
        <Guarantees />
      </main>
      <Footer />
    </div>
  );
}