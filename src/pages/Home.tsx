import {
  Github,
  Linkedin,
  Mail,
  SquareCode,
} from "lucide-react";
import NavBar from "../components/NavBar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Hero from "../components/Hero";
import Sobre from "../components/Sobre";
import Servicos from "../components/Servicos";
import Projetos from "../components/Projetos";

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

      <div
        id="contato"
        className="isolate min-h-screen bg-gray-900 sm:pl-10 sm:pr-10 flex flex-col items-center pb-10 sm:flex-row"
      >
        <div className="mx-auto max-w-2xl p-5 sm:p-0">
          <h2 className="text-base/7 font-semibold text-indigo-400">Contato</h2>
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Entre em <span className="text-indigo-400"> contato</span> comigo
          </h2>
          <p className="mt-10 text-lg/8 text-gray-400">
            Estou sempre aberto a novas parcerias e projetos que façam a
            diferença. Preencha o formulário com sua mensagem e retornarei em
            breve. <br />
            <br />
            Se prefirir pode mandar um email diretamente pra mim ou me encontrar
            no LinkedIn e GitHub.
          </p>

          <ul className="text-gray-400 mt-10 sm:ml-10 space-y-5">
            <li className="group w-fit">
              <a
                href="mailto:fabriciodangellisfdf@gmail.com"
                className="flex gap-2 items-center"
              >
                <div className="bg-indigo-400 rounded-lg w-10 h-10 flex items-center justify-center">
                  <Mail className="text-white" />
                </div>
                <span className="group-hover:text-white">
                  fabriciodangellisfdf@gmail.com
                </span>
              </a>
            </li>
            <li className="group w-fit">
              <a
                href="https://www.linkedin.com/in/fabrício-d-angellis-22559b25a"
                target="_blank"
                className="flex gap-2 items-center"
              >
                <div className="bg-indigo-400 rounded-lg w-10 h-10 flex items-center justify-center">
                  <Linkedin className="text-white" />
                </div>
                <span className="group-hover:text-white">
                  Fabrício D'Angellis
                </span>
              </a>
            </li>
            <li className="group w-fit">
              <a
                href="https://github.com/FabricioDangellis"
                target="_blank"
                className="flex gap-2 items-center"
              >
                <div className="bg-indigo-400 rounded-lg w-10 h-10 flex items-center justify-center">
                  <Github className="text-white" />
                </div>
                <span className="group-hover:text-white">
                  Fabrício D'Angellis
                </span>
              </a>
            </li>
          </ul>
        </div>
        <form
          action="https://formsubmit.co/fabriciodangellisfdf@gmail.com"
          method="POST"
          className="mx-auto mt-16 w-full p-5 sm:p-0 sm:max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm/6 font-semibold text-white"
              >
                Seu nome
              </label>
              <div className="mt-2.5">
                <input
                  id="name"
                  name="Nome"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold text-white"
              >
                Seu email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm/6 font-semibold text-white"
              >
                Sua Mensagem
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="Mensagem"
                  rows={4}
                  className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Enviar mensagem
            </button>
          </div>
        </form>
      </div>

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
