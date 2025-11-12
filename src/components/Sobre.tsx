import Imagem1 from "../assets/turned-gray-laptop-computer.jpg";

export default function Sobre() {
  return (
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
                Desenvolvedor <span className="text-indigo-400">FullStack</span>
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
                Universidade Federal Rural do Semi-Árido - UFERSA. Durante minha
                graduação fui bolsistas de projetos, da propria UFERSA e da
                UFERSA/CNPq, onde atuei como desenvolvedor{" "}
                <strong>frontend</strong> utilizando <strong>React</strong> e{" "}
                <strong>JavaScript</strong>.
                <br />
                <br />
                Durante meu periodo de estágio de <strong>backend</strong>{" "}
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
  );
}
