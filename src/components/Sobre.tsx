import { Link } from "react-router-dom";
import GitHub from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";
import JavaScipt from "../assets/js.png";
import TypeScript from "../assets/dactilografado.png";
import NodeImg from "../assets/node-js.png";
import PostgreSQL from "../assets/postgre.png";
import ReactImg from "../assets/react.png";
import HTML from "../assets/html-5.png";
import CSS from "../assets/css-3.png";
import Git from "../assets/git.png";
import AWS from "../assets/AWS.png";

export default function Sobre() {
  return (
    <div
      id="sobre"
      className="h-screen md:flex md:gap-5 bg-linear-to-b from-[#0D1417] to-[#1A2A3B]"
    >
      <div className="w-1/2 flex flex-col justify-center">
        <div className="md:w-90 md:h-10 md:pl-30 flex items-center rounded-r-3xl bg-linear-to-r from-[#20686F] to-[#671D7E]">
          <span className="text-white text-2xl font-bold">Sobre</span>
        </div>

        <div className="md:pl-30 md:pr-10 mt-10 text-white">
          <p className="font-light">
            Olá <br />
            Me chamo{" "}
            <strong className="text-[#20686F]">
              Fabrício D’Angellis
            </strong>. <br />
            Sou um desenvolvedor fullstack júnior com foco em criar experiências
            digitais funcionais, acessíveis e visualmente atraentes. <br />
            <br />
            Acredito que a tecnologia deve ser feita para pessoas, e busco
            sempre aplicar princípios de usabilidade, acessibilidade e design
            emocional em cada projeto que desenvolvo.
          </p>

          <h3 className="mt-15 font-bold text-xl italic">Redes Sociais</h3>
          <div className="mt-5 mb-10">
            <Link
              to="https://github.com/FabricioDangellis"
              target="_blank"
              className="flex items-center gap-3"
            >
              <img src={GitHub} className="w-8 h-8" />
              Fabricio D'Angellis
            </Link>

            <Link
              to="https://www.linkedin.com/in/fabrício-d-angellis-22559b25a"
              target="_blank"
              className="mt-3 flex items-center gap-3"
            >
              <img src={LinkedIn} className="w-8 h-8" />
              Fabricio D'Angellis
            </Link>
          </div>

          <a
            href="#contato"
            className="bg-linear-to-r from-[#20686F] to-[#671D7E] px-6 py-2 md:px-8 md:py-3 rounded-full text-white font-medium hover:opacity-90 transition"
          >
            Entre em contato comigo
          </a>
        </div>
      </div>

      <div className="w-1/2 pr-30 flex justify-end items-center">
        <div className="w-9/10 h-5/6 bg-linear-to-r from-[#20686F]/40 to-[#671D7E]/40 rounded-2xl  p-5 text-white">
          <h3 className="font-bold text-xl italic">Formação Acadêmica</h3>
          <p className="mt-2 font-light">
            Ciência da Computação - UFERSA (2019 - 2025)
          </p>

          <div className="flex mt-5">
            <div className="w-1/2">
              <h3 className="font-bold text-xl italic">Hard Skils</h3>
              <div className="grid grid-cols-4 gap-2 mt-4 pr-3">
                <img src={JavaScipt} className="w-8" />
                <img src={TypeScript} className="w-8" />
                <img src={NodeImg} className="w-8" />
                <img src={PostgreSQL} className="w-8" />
                <img src={HTML} className="w-8" />
                <img src={CSS} className="w-8" />
                <img src={ReactImg} className="w-8" />
                <img src={Git} className="w-8" />
              </div>
            </div>

            <div className="w-1/2">
              <h3 className="font-bold text-xl italic">Certificações</h3>
              <div className="flex gap-2 mt-4 items-center">
                <img src={AWS} className="w-10" />
                <p>AWS Cloud Pratitioner</p>
              </div>
            </div>
          </div>

          <div className="flex mt-5">
            <div className="w-1/2">
              <h3 className="font-bold text-xl italic">Soft Skils</h3>
              <ul className="mt-2 font-light flex flex-col space-y-2">
                <li>Criatividade</li>
                <li>Trabalho em equipe</li>
                <li>Pensamento Crítico</li>
                <li>Comunicação</li>
              </ul>
            </div>

            <div className="w-1/2">
              <h3 className="font-bold text-xl italic">Iteresses</h3>
              <ul className="mt-2 font-light flex flex-col space-y-2">
                <li>Desing</li>
                <li>UX/UI</li>
              </ul>
            </div>
          </div>

          <h3 className="font-bold text-xl italic mt-5">Experiência</h3>
          <ul className="mt-2 font-light flex flex-col space-y-2">
            <li>Estágio - COMPASS.UOL Tecnologia LTDA (09/10/2024 – 05/03/2025)</li>
            <li>Bolsista - CNPq/UFERSA (01/09/2023 – 24/09/2024)</li>
            <li>Bolsista - UFERSA  (25/10/2022 - 31/08/2023)</li>
          </ul>

        </div>
      </div>
    </div>
  );
}
