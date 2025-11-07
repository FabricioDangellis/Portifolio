import { ArrowDownToLine } from "lucide-react";
import NavBar from "../components/NavBar";
import Perfil from "../assets/Perfil.png";
import Imagem1 from "../assets/turned-gray-laptop-computer.jpg";

export default function Home() {
  return (
    <section className="bg-gray-900 h-screen">
      <NavBar />

      <div className="relative h-screen isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto flex flex-col justify-center items-center h-full max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="mb-5 sm:mb-8 sm:flex sm:justify-center border-2 sm:border-3 border-white rounded-full p-2">
            <img src={Perfil} className="w-40 sm:w-65 rounded-full" />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
              Fabrício D'Angellis
            </h1>
            <p className="mt-6 text-md font-medium text-pretty text-gray-400 sm:text-xl/8">
              Desenvolvedor{" "}
              <span className="text-indigo-400">FullStack Júnior</span>. Minha
              missão é criar experiências digitais funcionais, humanas e
              visualmente atraentes.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="w-1/4 min-w-30 rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Projetos
              </a>
              <a
                href="/CurrículoFabrício.pdf"
                download
                className="w-1/4 min-w-30 flex gap-0.5 items-center justify-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs ring-1 ring-white/10 hover:ring-white/20"
              >
                <ArrowDownToLine className="w-5 h-auto" />
                Curriculo
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        id="sobre"
        className="relative isolate overflow-hidden bg-gray-900 px-6 py-10 sm:flex lg:overflow-visible lg:px-0"
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
                  Me chamo <strong>Fabrício D'Angellis</strong>. Sou um desenvolvedor fullstack
                  júnior com experiência em React, TypeScript, NodeJs e
                  PostgreSQL
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
    </section>
  );
}
