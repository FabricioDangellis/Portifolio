interface CardProps {
  titulo: string;
  descricao: string;
  imagem: string;
  tags: string[];
  linkPage: string;
}

export default function Projeto({
  titulo,
  descricao,
  imagem,
  tags,
  linkPage,
}: CardProps) {
  return (
    <div className="bg-white/2.5 h-108 relative sm:mx-8 lg:mx-0 rounded-3xl p-4 ring-1 ring-white/10 sm:p-4 flex flex-col justify-between">
      <div className="h-50 w-full overflow-hidden rounded-2xl ">
        <img src={imagem} alt={titulo} className="h-full w-full object-cover" />
      </div>

      <div className="h-35 flex flex-col justify-between">
        <p className="text-white text-3xl font-semibold tracking-tight">
          {titulo}
        </p>
        <p className="text-gray-300 text-base/7 line-clamp-2">{descricao}</p>

        <div className="flex w-full flex-wrap gap-2 mb-1">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 inset-ring inset-ring-gray-400/20"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="inline-flex items-center rounded-full bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 inset-ring inset-ring-gray-400/20">
              ...
            </span>
          )}
        </div>
      </div>

      <a
        href={linkPage}
        className="bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Visualizar projeto
      </a>
    </div>
  );
}
