import GitHub from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1A2A3B] text-gray-400 py-10 px-6 pl-5 pr-5 lg:pl-30 lg:pr-30 md:pl-20 md:pr-20 flex flex-col items-center gap-6">
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 md:gap-0">
      
        <div className="flex items-center gap-3">
          <div className="bg-linear-to-br from-[#20686F] to-[#671D7E] w-10 h-10 flex items-center justify-center rounded-md text-white font-semibold text-lg">
            FD
          </div>
          <div>
            <h2 className="text-white font-medium text-lg">Fabrício D’Angellis</h2>
            <p className="text-sm text-gray-400">Desenvolvedor FullStack Júnior</p>
          </div>
        </div>

        <nav className="flex gap-6 text-sm md:text-base">
          <a href="#topo" className="hover:text-white transition">Home</a>
          <a href="#sobre" className="hover:text-white transition">Sobre</a>
          <a href="#projetos" className="hover:text-white transition">Projetos</a>
          <a href="#contato" className="hover:text-white transition">Contato</a>
        </nav>

  
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <img src={GitHub} className="w-8 h-8" />
          </a>
          <a
            href="https://linkedin.com/in/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <img src={LinkedIn} className="w-8 h-8" />
          </a>
        </div>
      </div>

 
      <div className="w-full h-px bg-gray-700 mt-4 mb-2"></div>

      <p className="text-sm text-gray-500">
        © {currentYear} Fabrício D’Angellis. Todos os direitos reservados.
      </p>
    </footer>
  );
}
