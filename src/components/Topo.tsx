import NavBar from "./NavBar";
import Perfil from "../assets/Perfil.png";

export default function Topo() {
  return (
    <div className="h-screen pl-5 pr-5 pt-5 lg:pl-30 lg:pr-30 md:pl-20 md:pr-20 bg-linear-to-b from-[#1A2A3B] to-[#0D1417]">
      <div className="h-1/10">
        <NavBar />
      </div>

      <section className="h-9/10 flex flex-col justify-center items-center px-4">
        <img
          src={Perfil}
          alt="Foto de perfil"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-2 border-gray-700"
        />
        <h1 className="text-2xl md:text-3xl font-semibold text-white mt-6">
          Fabrício D’Angellis
        </h1>
        <p className="text-gray-400 text-base md:text-lg mt-2">
          Desenvolvedor FullStack Júnior
        </p>

        <a href="#sobre" className="mt-6 bg-linear-to-r from-[#20686F] to-[#671D7E] px-6 py-2 md:px-8 md:py-3 rounded-full text-white font-medium hover:opacity-90 transition">
          Mais sobre mim
        </a>
      </section>
    </div>
  );
}
