import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Diferencial from "@/components/Diferencial";
import Servicios from "@/components/Servicios";
import Trayectoria from "@/components/Trayectoria";
import SobreMi from "@/components/SobreMi";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="grain-overlay">
      <a href="#contenido-principal" className="skip-to-content">
        Saltar al contenido principal
      </a>
      <Header />
      <main id="contenido-principal">
        <Diferencial />
        <Hero />
        <Servicios />
        <Trayectoria />
        <SobreMi />
      </main>
      <Footer />
    </div>
  );
}
