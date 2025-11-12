import {
  Building2,
  Github,
  Linkedin,
  Mail,
  PanelsTopLeft,
  Server,
  SquareCode,
} from "lucide-react";
import NavBar from "../components/NavBar";
import Imagem1 from "../assets/turned-gray-laptop-computer.jpg";
import Trajetorias from "../assets/dashboard.png";
import TaskBoard from "../assets/Imagem2.png";
import Projeto from "../components/Projeto";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Hero from "../components/Hero";

export default function Home() {
  const currentYear = new Date().getFullYear();

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        // usa timeout para garantir que a renderização terminou
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const projetos = [
    {
      titulo: "Trajetórias",
      descricao: "Projeto de um sistema de acompanhamento pscológico infantil",
      imagem: Trajetorias,
      tags: ["React", "TypeScript"],
      linkPage: "/projetos/trajetorias",
    },
    {
      titulo: "TaskBoard",
      descricao: "Sistema simples para o gerenciamento de tarefas",
      imagem: TaskBoard,
      tags: ["React", "TypeScript", "Tailwind", "Context API"],
      linkPage: "/projetos/taskboard",
    },
  ];
  return (
    <section className="bg-gray-900 h-screen">
      <NavBar />

      <Hero/>

      <div
        id="sobre"
        className="relative isolate overflow-hidden bg-gray-900 px-6 py-10 sm:flex lg:overflow-visible lg:px-0 pb-20 sm:pb-0"
      >
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-0">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base/7 font-semibold text-indigo-400">
                  Sobre mim
                </p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                  Desenvolvedor{" "}
                  <span className="text-indigo-400">FullStack</span>
                </h1>
                <p className="mt-6 text-xl/8 text-gray-300">
                  Me chamo <strong>Fabrício D'Angellis</strong>. Sou um
                  desenvolvedor fullstack júnior com experiência em React,
                  TypeScript, NodeJs e PostgreSQL
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base/7 text-gray-400 lg:max-w-lg">
                <p>
                  Sou formado em <strong>Ciência da Computação</strong> pela
                  Universidade Federal Rural do Semi-Árido - UFERSA. Durante
                  minha graduação fui bolsistas de projetos, da propria UFERSA e
                  da UFERSA/CNPq, onde atuei como desenvolvedor{" "}
                  <strong>frontend</strong> utilizando <strong>React</strong> e{" "}
                  <strong>JavaScript</strong>.
                  <br />
                  <br />
                  Durante meu periodo de estágio de <strong>
                    backend
                  </strong>{" "}
                  utilizei o <strong>NodeJS</strong> em conjunto com{" "}
                  <strong>TypeScript</strong>
                  para criar api's e utilizei o <strong>Postman</strong> para
                  realizar os testes das requisições. Ainda no meu estágio,
                  conseguir conquistar a certificação{" "}
                  <strong>Cloud Pratitioner</strong> da <strong>AWS</strong>.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block -mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              alt="http://www.freepik.com/"
              src={Imagem1}
              className="h-90 max-w-none rounded-xl bg-gray-800 shadow-xl ring-1 ring-white/10 sm:h-140"
            />
          </div>
        </div>
      </div>

      <div
        id="servicos"
        className="bg-gray-900 min-h-screen flex items-center pb-20 sm:pb-0"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-400">
              Serviços
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
              <span className="text-indigo-400">Desenvolvimento</span> de
              soluções
            </p>
            <p className="mt-6 text-lg/8 text-gray-300">
              Desenvolvo soluções completas para web, unindo front-end moderno e
              back-end seguro. Meu foco é criar interfaces rápidas, funcionais e
              experiências digitais que realmente geram valor.
            </p>
          </div>
          <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-15 gap-y-16 text-center lg:grid-cols-3">
              <div className="mx-auto flex items-center max-w-xs flex-col gap-y-4">
                <PanelsTopLeft className="w-15 h-15 text-indigo-400" />
                <dd className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Landing Pages
                </dd>
                <dt className="text-base/7 text-gray-400">
                  Páginas rápidas, responsivas e otimizadas para conversão.
                  Integração com formulários, automações e ferramentas de
                  marketing. Código limpo, leve e focado em performance.
                </dt>
              </div>

              <div className="mx-auto flex items-center max-w-xs flex-col gap-y-4">
                <Building2 className="w-15 h-15 text-indigo-400" />
                <dd className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Sites Institucionais
                </dd>
                <dt className="text-base/7 text-gray-400">
                  Desenvolvimento de sites profissionais, modernos e acessíveis.
                  Navegação fluida, design responsivo e integração com APIs e
                  áreas administrativas quando necessário.
                </dt>
              </div>

              <div className="mx-auto flex items-center max-w-xs flex-col gap-y-4">
                <Server className="w-15 h-15 text-indigo-400" />
                <dd className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Back-end e APIs
                </dd>
                <dt className="text-base/7 text-gray-400">
                  Criação de APIs seguras e escaláveis usando Node.js.
                  Autenticação, banco de dados, upload de arquivos, serviços
                  externos e arquitetura bem estruturada.
                </dt>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div
        id="projetos"
        className="relative isolate min-h-screen bg-gray-900 lg:px-0 pb-20 sm:pb-10 sm:pt-10"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400">
            Projetos
          </h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Projetos desenvolvidos
          </p>
        </div>
        <div className="w-full max-w-7xl mx-auto mt-16 grid grid-cols-1 items-center gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {projetos.map((projeto) => (
            <Projeto key={projeto.titulo} {...projeto} />
          ))}
        </div>
      </div>

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
