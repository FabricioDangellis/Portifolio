import {
  Github,
  Linkedin,
  SquareCode,
} from "lucide-react";
import NavBar from "../components/NavBar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Hero from "../components/Hero";
import Sobre from "../components/Sobre";
import Servicos from "../components/Servicos";
import Projetos from "../components/Projetos";
import Contato from "../components/Contato";

export default function Home() {
  const currentYear = new Date().getFullYear();

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

      <Hero/>

      <Sobre/>

      <Servicos/>

      <Projetos/>

      <Contato/>

      <footer className="w-full bg-gray-900  text-gray-400 py-10 px-6 flex flex-col items-center gap-6">
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 md:gap-0">
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="-m-1.5 p-1.5 text-white flex items-center gap-2"
            >
              <SquareCode className="h-8 w-auto text-indigo-500" />
              Fabrício D'Angellis
            </a>
          </div>

          <nav className="flex gap-6 flex-wrap justify-center text-sm md:text-base">
            <a href="#topo" className="hover:text-white transition">
              Home
            </a>
            <a href="#sobre" className="hover:text-white transition">
              Sobre
            </a>
            <a href="#servicos" className="hover:text-white transition">
              Serviços
            </a>
            <a href="#projetos" className="hover:text-white transition">
              Projetos
            </a>
            <a href="#contato" className="hover:text-white transition">
              Contato
            </a>
          </nav>

          <div className="flex flex-col gap-5 text-xl">
            <a
              href="https://github.com/FabricioDangellis"
              target="_blank"
              className="flex gap-2 items-center"
            >
              <div className="bg-indigo-400 rounded-lg w-7 h-7 flex items-center justify-center">
                <Github className="text-white w-5 h-auto" />
              </div>
              <span className="group-hover:text-white text-sm">
                Fabrício D'Angellis
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/fabrício-d-angellis-22559b25a"
              target="_blank"
              className="flex gap-2 items-center"
            >
              <div className="bg-indigo-400 rounded-lg w-7 h-7 flex items-center justify-center">
                <Linkedin className="text-white w-5 h-auto" />
              </div>
              <span className="group-hover:text-white text-sm">
                Fabrício D'Angellis
              </span>
            </a>
          </div>
        </div>

        <div className="w-full h-px bg-gray-700 mt-4 mb-2"></div>

        <p className="text-sm text-gray-500">
          © {currentYear} Fabrício D’Angellis. Todos os direitos reservados.
        </p>
      </footer>
    </section>
  );
}
