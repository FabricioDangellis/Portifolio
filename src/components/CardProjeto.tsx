import { Link } from "react-router";

interface CardProps {
  titulo: string;
  descricao: string;
  imagem: string;
  tags: string[];
  linkPage: string;
}

export default function CardProjeto({
  titulo,
  descricao,
  imagem,
  tags,
  linkPage,
}: CardProps) {
  return (
    <Link to={linkPage}>
      <div className="relative group inline-block w-[18rem] h-80 lg:w-[16rem] rounded-2xl shadow-2xl bg-linear-to-b from-[#0D1417] to-[#1A2A3B] hover:scale-105 transition-transform duration-300 cursor-pointer overflow-visible">
        <div className="h-40 w-full overflow-hidden rounded-t-2xl">
          <img
            src={imagem}
            alt={titulo}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-4 text-white text-left flex flex-col justify-between h-[calc(100%-10rem)]">
          <div>
            <p className="font-bold text-xl truncate">{titulo}</p>
            <p className="font-light mt-2 mb-3 line-clamp-3 text-sm">
              {descricao}
            </p>
          </div>

          <div className="flex w-full flex-wrap gap-2 mb-1">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="bg-[#20686F]/50 px-2 py-1 rounded-2xl font-extralight text-xs"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="text-white/60 text-xs font-light">...</span>
            )}
          </div>
        </div>

        <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 px-4 py-1 text-sm text-white bg-linear-to-r from-[#20686F] to-[#671D7E] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl">
          Clique para visualizar projeto
        </span>
      </div>
    </Link>
  );
}
