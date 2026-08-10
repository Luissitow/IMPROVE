import { useState } from "react";
import { Preloader } from "./Preloader";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Commercial } from "./Commercial";
import { Services } from "./Services";
import { Process } from "./Process";
import { Gallery } from "./Gallery";
import { Guarantees } from "./Guarantees";
import { Footer } from "./Footer";

export function Landing() {
  // Mientras el comercial está fijo en pantalla, el header se retira para
  // no competir con el video. Vuelve solo al salir de la sección.
  const [immersive, setImmersive] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Preloader />
      <Header hidden={immersive} />
      <main>
        <Hero />
        <Commercial onImmersiveChange={setImmersive} />
        <Services />
        <Process />
        <Gallery />
        <Guarantees />
      </main>
      <Footer />
    </div>
  );
}
