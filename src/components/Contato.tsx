import { Link } from "react-router-dom";
import GitHub from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";

export default function Contato() {
  return (
    <div
      id="contato"
      className="min-h-screen md:flex md:gap-5 bg-linear-to-b from-[#0D1417] to-[#1A2A3B]"
    >
      <div className="w-1/2 pl-30 flex justify-end items-center">
        <div className="w-9/10 bg-linear-to-r from-[#20686F]/40 to-[#671D7E]/40 rounded-2xl  p-5 text-white">
          <h3 className="text-2xl font-semibold mb-3 text-my-orange">
            Vamos conversar?
          </h3>
          <p className="text-gray-300 mb-6">
            Tem um projeto em mente ou quer trabalhar comigo? Me mande uma
            mensagem, respondo o mais rápido possível.
          </p>

          <form
            action="https://formsubmit.co/fabriciodangellisfdf@gmail.com"
            method="POST"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              required
              className="p-3 rounded-lg bg-[#07111a] placeholder-gray-500 text-white focus:ring-2 focus:ring-[#06b6d4] outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              required
              className="p-3 rounded-lg bg-[#07111a] placeholder-gray-500 text-white focus:ring-2 focus:ring-[#06b6d4] outline-none"
            />
            <textarea
              name="message"
              placeholder="Sua mensagem"
              required
              className="sm:col-span-2 p-3 rounded-lg bg-[#07111a] placeholder-gray-500 text-white h-36 resize-none focus:ring-2 focus:ring-[#06b6d4] outline-none"
            ></textarea>

            <div className="sm:col-span-2 flex items-center justify-between">
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-linear-to-r from-[#20686F] to-[#671D7E] text-white font-semibold shadow hover:scale-105 transition"
              >
                Enviar mensagem
              </button>
            </div>
          </form>

          <p className="text-gray-300 mt-6">
            Quer falar comigo de outro modo? Aqui ao lado tem mais formas de entrar em contato comigo.
          </p>
        </div>
      </div>

      <div className="w-1/2 flex flex-col justify-center gap-20 text-white">
        <div className="flex flex-row-reverse">
          <div className="md:w-90 md:h-10 md:pl-30 flex items-center rounded-l-3xl bg-linear-to-r from-[#20686F] to-[#671D7E]">
            <span className="text-white text-2xl font-bold">Contato</span>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-5 pl-20">
          <div className="flex items-center space-x-3 text-white">
            <div className="bg-linear-to-br from-[#20686F] to-[#671D7E] w-10 h-10 flex items-center justify-center rounded-md font-semibold text-2xl">
              FD
            </div>
            <div className="flex flex-col items-start leading-tight">
              <span className="font-semibold text-sm sm:text-xl">
                Fabrício D’Angellis
              </span>
              <span className="text-xl sm:text-sm text-gray-400">
                Desenvolvedor FullStack Júnior
              </span>
            </div>
          </div>

          <p>
            <strong>Email:</strong> fabriciodangellisfdf@gmail.com
          </p>

          <div>
            <h3 className="font-bold text-l italic">Redes Sociais</h3>
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
          </div>
        </div>
      </div>
    </div>
  );
}
