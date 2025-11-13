import {
  GithubIcon,
  PanelsTopLeft,
} from "lucide-react";
import NavBar from "../components/NavBar";
import TaskboardIMG from "../assets/Imagem2.png";
import TaskboardLogo from "../assets/logoTaksboard.png";

import tasks from "../assets/tasks.png";
import novatask from "../assets/novatask.png";
import editartask from "../assets/editartask.png";
import excluirtask from "../assets/excluirtask.png";
import tasksconcluidas from "../assets/tasksconcluidas.png";
import ImageGalleryModal from "../components/ImageModal";
import { useState } from "react";
import Footer from "../components/Footer";

export default function TaskBoard() {

  const products = [
    {
      id: 1,
      name: "TaskBoard",
      imageSrc: TaskboardIMG,
    },
    {
      id: 2,
      name: "Tasks",
      imageSrc: tasks,
    },
    {
      id: 3,
      name: "Nova Task",
      imageSrc: novatask,
    },
    {
      id: 4,
      name: "Editar Task",
      imageSrc: editartask,
    },
    {
      id: 4,
      name: "Excluir Task",
      imageSrc: excluirtask,
    },
    {
      id: 6,
      name: "Tasks Concluidas",
      imageSrc: tasksconcluidas,
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
    setCurrentIndex((prev: number) =>
      prev === 0 ? products.length - 1 : prev - 1
    );

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
              <img src={TaskboardLogo} className="mb-5 sm:mb-10 bg-white/70 rounded-lg h-13 lg:justify-self-center" />

              <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                Sitema TaskBoard
              </h2>
              <p className="mt-6 text-lg/8 text-pretty text-gray-300">
                Este projeto se trata de um sistema simples para o gerenciamento
                de tarefas, desenvolvido utilizando React e TypeScript.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="https://mynewtaskboard.vercel.app/"
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
                src={TaskboardIMG}
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
            O TaskBoard é um projeto de gerenciamento de tarefas desenvolvido
            com React e TypeScript, que tem como objetivo oferecer uma interface
            simples, funcional e agradável para organização pessoal. <br />
            <br />
            O sistema permite criar, editar e excluir tarefas de forma
            intuitiva, contando com o uso de modais personalizados e mensagens
            de feedback para garantir melhor experiência ao usuário. <br />
            <br />A arquitetura foi pensada para manter uma separação clara de
            responsabilidades, usando componentes reutilizáveis e bem
            organizados. Foi decidido centralizar as regras de negócio em um
            contexto global, assim as operações relacionadas às tarefas ficam
            consistentes em toda a aplicação. Além disso, priorizei a
            responsividade e a acessibilidade, para que o sistema funcione bem
            em diferentes dispositivos e tamanhos de tela. Foi usado o
            localStorage para persistência local, simulando um backend sem
            prejudicar a experiência do usuário. Por fim, as escolhas de design
            tiveram como foco oferecer uma interface simples, intuitiva,
            agradável e com feedbacks das ações, sempre pensando na facilidade
            de uso e na simplicidade da implementação.
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
                  TaskBoard
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-l font-medium text-gray-100">
                  Público Alvo
                </dt>
                <dd className="mt-1 text-l text-gray-400 sm:col-span-2 sm:mt-0">
                  Estudantes, equipes pequenas, usuários que desejam organizar
                  tarefas visualmente{" "}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-l font-medium text-gray-100">
                  Arquitetura
                </dt>
                <dd className="mt-1 text-l text-gray-400 sm:col-span-2 sm:mt-0">
                  Single Page Application (SPA){" "}
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
                  TailwindCSS
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-l font-medium text-gray-100">
                  Gerenciamento de estados
                </dt>
                <dd className="mt-1 text-l text-gray-400 sm:col-span-2 sm:mt-0">
                  Context API
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-l font-medium text-gray-100">
                  Persistência de dados
                </dt>
                <dd className="mt-1 text-l text-gray-400 sm:col-span-2 sm:mt-0">
                  LocalStorage (simulando backend){" "}
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
                  Aplicação web para organização de tarefas em quadros,
                  permitindo criar, editar e excluir tarefas de forma visual e
                  intuitiva.
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
                            mynewtaskboard.vercel.app/
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 shrink-0">
                        <a
                          href="https://mynewtaskboard.vercel.app/"
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
                            github.com/FabricioDangellis/Taskboard
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 shrink-0">
                        <a
                          href="https://github.com/FabricioDangellis/Taskboard"
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
              <button
                key={p.id}
                onClick={() => openModal(index)}
                className="group"
              >
                <img
                  src={p.imageSrc}
                  className="rounded-lg object-cover w-full cursor-pointer"
                />
                <p className="text-center text-gray-600 mt-2 group-hover:text-white">
                  {p.name}
                </p>
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

      <Footer/>
    </section>
  );
}
