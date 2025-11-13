import { ArrowDownToLine } from "lucide-react";
import Perfil from "../assets/Perfil.png";

export default function Hero() {
  return (
    <div id="home" className="relative h-screen isolate px-6 pt-14 lg:px-8">
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
              href="#projetos"
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
  );
}
