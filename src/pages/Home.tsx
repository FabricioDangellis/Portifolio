import NavBar from "../components/NavBar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Hero from "../components/Hero";
import Sobre from "../components/Sobre";
import Servicos from "../components/Servicos";
import Projetos from "../components/Projetos";
import Contato from "../components/Contato";
import Footer from "../components/Footer";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <section className="bg-gray-900 h-screen">
      <NavBar />
      <Hero />
      <Sobre />
      <Servicos />
      <Projetos />
      <Contato />
      <Footer />
    </section>
  );
}
