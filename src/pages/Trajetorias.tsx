import {
  Github,
  GithubIcon,
  Linkedin,
  PanelsTopLeft,
  SquareCode,
} from "lucide-react";
import NavBar from "../components/NavBar";
import TrajetoriasIMG from "../assets/Logo3.svg";
import TrajetoriasDash from "../assets/dashboard.png";

import login from "../assets/Imagem1.png";
import cadastro from "../assets/cadastro.png";
import pacientes from "../assets/pacientes.png";
import paciente from "../assets/Paciente.png";
import atendimentos from "../assets/atendimentos.png";
import atendimento from "../assets/Atendimento.png";
import calendario from "../assets/calendario.png";
import ImageGalleryModal from "../components/ImageModal";
import { useState } from "react";

export default function Trajetorias() {
  const currentYear = new Date().getFullYear();

  const products = [
    {
      id: 1,
      name: "Login",
      imageSrc: login,
    },
    {
      id: 2,
      name: "Cadastro",
      imageSrc: cadastro,
    },
    {
      id: 3,
      name: "Dashboard",
      imageSrc: TrajetoriasDash,
    },
    {
      id: 4,
      name: "Pacientes",
      imageSrc: pacientes,
    },
    {
      id: 4,
      name: "Paciente",
      imageSrc: paciente,
    },
    {
      id: 6,
      name: "Atendimentos",
      imageSrc: atendimentos,
    },
    {
      id: 1,
      name: "Atendimento",
      imageSrc: atendimento,
    },
    {
      id: 1,
      name: "Calendário",
      imageSrc: calendario,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const nextImage = () =>
    setCurrentIndex((prev: number) => (prev + 1) % products.length);

  const prevImage = () =>
    setCurrentIndex((prev: number) => (prev === 0 ? products.length - 1 : prev - 1));

  return (
    <section className="bg-gray-900 h-screen">
      <NavBar />

      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl py-24 pb-15 sm:px-6 sm:pt-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-800 px-6 pt-16 after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-white/10 sm:rounded-3xl sm:px-16 after:sm:rounded-3xl md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle
                r={512}
                cx={512}
                cy={512}
                fill="oklch(58.5% 0.233 277.117)"
                fillOpacity="0.7"
              />
            </svg>

            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <img src={TrajetoriasIMG} className="sm:mb-10" />
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                Sitema Trajetórias
              </h2>
              <p className="mt-6 text-lg/8 text-pretty text-gray-300">
                Sistema de acompanhamento psicológico infantil criado com base
                nos conceitos da IHC (Interação Humano-Computador)
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="https://trajetorias.vercel.app"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Visitar sistema
                </a>
                <a
                  href="#descricao"
                  className="text-sm/6 font-semibold text-white hover:text-gray-100"
                >
                  Leia mais <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                alt="App screenshot"
                src={TrajetoriasDash}
                width={1824}
                height={1080}
                className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="descricao" className="bg-gray-900 pb-15">
        <div className="mx-auto max-w-7xl pr-4 pl-4 py-2 sm:px-6 lg:px-8 text-gray-400">
          <h3 className="ftext-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Descrição
          </h3>
          <p className="mt-5 text-l text-justify">
            O Trajetórias é um sistema web desenvolvido com o objetivo de
            avaliar a qualidade da interface e da interação entre psicólogos e
            responsáveis de crianças em acompanhamento psicológico, seguindo os
            princípios da Interação Humano-Computador (IHC). O projeto busca
            oferecer uma experiência acessível, emocionalmente acolhedora e
            fácil de usar, permitindo que profissionais da psicologia cadastrem
            pacientes, agendem consultas e registrem anotações de atendimento,
            enquanto os responsáveis acompanham o progresso terapêutico dos
            filhos. A concepção do sistema foi guiada por princípios de
            usabilidade, acessibilidade, Gestalt e design emocional, promovendo
            uma interface intuitiva, harmônica e centrada nas necessidades
            humanas. <br /> <br />A interface foi desenvolvida em React (com
            Vite como ambiente de desenvolvimento), utilizando uma arquitetura
            baseada em componentes reutilizáveis. O sistema inclui um dashboard
            interativo para o psicólogo, com gráficos de acompanhamento, um
            calendário semanal e mensal, e um perfil do paciente contendo
            histórico de consultas, anotações e documentos em PDF. O design das
            telas foi pensado para transmitir empatia e clareza, aplicando cores
            suaves, ícones compreensíveis e boa hierarquia visual. Os elementos
            seguem os princípios da Gestalt, favorecendo a percepção e reduzindo
            o esforço cognitivo dos usuários durante a navegação. <br /> <br />
            Para os testes e simulações, foi desenvolvido um backend “fake”,
            criado especificamente para reproduzir o comportamento de um
            servidor real sem a necessidade de infraestrutura completa. Esse
            backend simulado permite que o sistema funcione de forma interativa
            — possibilitando o cadastro de usuários, agendamento de consultas e
            atualização de listas em tempo real —, mas com os dados armazenados
            apenas no ambiente de teste. Essa abordagem foi fundamental para a
            realização de testes empíricos com psicólogos reais, permitindo
            observar a interação, coletar feedbacks e avaliar a efetividade da
            interface quanto à usabilidade, clareza e adequação emocional.
            <br />
            <br />O Trajetórias vai além de um sistema de gestão: ele representa
            uma aplicação prática dos conceitos de IHC em um contexto sensível e
            socialmente relevante. O projeto demonstra como a teoria da
            interação, aliada ao design emocional e à percepção visual, pode
            impactar positivamente o uso de tecnologias na área da saúde mental
            infantil. A avaliação feita com profissionais reais proporcionou
            insights valiosos para aprimorar a interface e reforçou o papel da
            empatia, da estética e da simplicidade como fatores determinantes
            para o sucesso de sistemas voltados ao cuidado humano.
          </p>
        </div>
      </div>

      <div className="bg-gray-900 ">
        <div className="mx-auto max-w-7xl py-2 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Ficha Tecnica
            </h3>
            <p className="mt-1 max-w-2xl text-l text-gray-400">
              Resumo dos recursos, tecnologias e artefatos envolvidos no
              desenvolvimento.
            </p>
          </div>
          <div className="mt-6 border-t border-white/10">
            <dl className="divide-y divide-white/10">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-l font-medium text-gray-100">Nome</dt>
                <dd className="mt-1 text-l text-gray-400 sm:col-span-2 sm:mt-0">
                  Trajetórias
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-l font-medium text-gray-100">
                  Público Alvo
                </dt>
                <dd className="mt-1 text-l text-gray-400 sm:col-span-2 sm:mt-0">
                  Psicólogos e responsáveis por crianças em acompanhamento
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-l font-medium text-gray-100">
                  Arquitetura
                </dt>
                <dd className="mt-1 text-l text-gray-400 sm:col-span-2 sm:mt-0">
                  Cliente-servidor (frontend + backend simulado com mock)
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-l font-medium text-gray-100">
                  Linguagem Principal
                </dt>
                <dd className="mt-1 text-l text-gray-400 sm:col-span-2 sm:mt-0">
                  TypeScript
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-l font-medium text-gray-100">Frontend</dt>
                <dd className="mt-1 text-l text-gray-400 sm:col-span-2 sm:mt-0">
                  React + Vite
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-l font-medium text-gray-100">Estilos</dt>
                <dd className="mt-1 text-l text-gray-400 sm:col-span-2 sm:mt-0">
                  CSS
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-l font-medium text-gray-100">Backend</dt>
                <dd className="mt-1 text-l text-gray-400 sm:col-span-2 sm:mt-0">
                  Simulado pra testes
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-l font-medium text-gray-100">
                  Banco de dados
                </dt>
                <dd className="mt-1 text-l text-gray-400 sm:col-span-2 sm:mt-0">
                  Simulado / Mock em memória (para testes)
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-l font-medium text-gray-100">
                  Versionamento
                </dt>
                <dd className="mt-1 text-l text-gray-400 sm:col-span-2 sm:mt-0">
                  Git + GitHub
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-l font-medium text-gray-100">Descrição</dt>
                <dd className="mt-1 text-l text-gray-400 sm:col-span-2 sm:mt-0">
                  Plataforma para acompanhamento da saúde mental infantil,
                  permitindo que psicólogos registrem consultas e responsáveis
                  visualizem o progresso do paciente.
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-l font-medium text-gray-100">
                  Onde encontrar
                </dt>
                <dd className="mt-2 text-sm text-white sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className="divide-y divide-white/5 rounded-md border border-white/10"
                  >
                    <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                      <div className="flex w-0 flex-1 items-center">
                        <PanelsTopLeft
                          aria-hidden="true"
                          className="size-5 shrink-0 text-gray-500"
                        />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium text-white">
                            trajetorias.vercel.app
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 shrink-0">
                        <a
                          href="https://trajetorias.vercel.app"
                          className="font-medium text-indigo-400 hover:text-indigo-300"
                        >
                          Visitar
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                      <div className="flex w-0 flex-1 items-center">
                        <GithubIcon
                          aria-hidden="true"
                          className="size-5 shrink-0 text-gray-500"
                        />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium text-white">
                            github.com/FabricioDangellis/front-Trajetorias
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 shrink-0">
                        <a
                          href="https://github.com/FabricioDangellis/front-Trajetorias"
                          className="font-medium text-indigo-400 hover:text-indigo-300"
                        >
                          Visitar
                        </a>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400">Galeria</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            <span className="text-indigo-400">Telas</span> do Projeto
          </p>
        </div>

        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((p, index) => (
              <button key={p.id} onClick={() => openModal(index)} className="group">
                <img
                  src={p.imageSrc}
                  className="rounded-lg object-cover w-full cursor-pointer"
                />
                <p className="text-center text-gray-600 mt-2 group-hover:text-white">{p.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal reutilizável */}
      {isModalOpen && (
        <ImageGalleryModal
          images={products}
          currentIndex={currentIndex}
          onClose={closeModal}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}

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
