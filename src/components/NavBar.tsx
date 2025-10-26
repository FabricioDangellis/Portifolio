import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-transparent flex items-center justify-between text-white">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="bg-linear-to-br from-[#20686F] to-[#671D7E] w-10 h-10 flex items-center justify-center rounded-md font-semibold text-lg">
          FD
        </div>
        <div className="flex flex-col items-start leading-tight">
          <span className="font-semibold text-sm sm:text-base">
            Fabrício D’Angellis
          </span>
          <span className="text-xs sm:text-sm text-gray-400">
            Desenvolvedor FullStack Júnior
          </span>
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
        <Link to="/" className="hover:text-gray-300 transition-colors">
          Home
        </Link>
        <Link to="/sobre" className="hover:text-gray-300 transition-colors">
          Sobre
        </Link>
        <Link to="/projetos" className="hover:text-gray-300 transition-colors">
          Projetos
        </Link>
        <Link
          to="/contato"
          className="bg-linear-to-r from-[#20686F] to-[#671D7E] px-4 py-1.5 rounded-full hover:opacity-90 transition-all"
        >
          Contato
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-[#0D1417]/95 backdrop-blur-md flex flex-col items-center space-y-4 py-6 md:hidden z-50">
          <Link
            onClick={() => setIsOpen(false)}
            to="/"
            className="hover:text-gray-300"
          >
            Home
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/sobre"
            className="hover:text-gray-300"
          >
            Sobre
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/projetos"
            className="hover:text-gray-300"
          >
            Projetos
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/contato"
            className="bg-linear-to-r from-[#20686F] to-[#671D7E] px-4 py-1.5 rounded-full hover:opacity-90 transition-all"
          >
            Contato
          </Link>
        </nav>
      )}
    </header>
  );
}
