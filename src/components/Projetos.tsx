import CardProjeto from "./CardProjeto";
import Trajetorias from "../assets/Imagem1.png";
import TaskBoard from "../assets/Imagem2.png";

export default function Projetos() {
  const projetos = [
    {
      titulo: "Trajetórias",
      descricao: "Projeto de um sistema de acompanhamento pscológico infantil",
      imagem: Trajetorias,
      tags: ["React", "TypeScript"],
      linkPage: "/projeto/trajetorias",
    },
    {
      titulo: "TaskBoard",
      descricao: "Quadro de tarefas simples",
      imagem: TaskBoard,
      tags: ["React", "TypeScript", "Tailwind", "Context API"],
      linkPage: "/projeto/taskboard",
    },
  ];

  return (
    <div
      id="projetos"
      className="min-h-screen pb-7 pl-5 pr-5 pt-5 lg:pl-30 lg:pr-30 md:pl-20 md:pr-20 md:pt-15 text-center bg-linear-to-b from-[#1A2A3B] to-[#0D1417]"
    >
      <span className="text-white text-2xl font-bold">Projetos</span>
      <p className="font-light text-white">
        Um pouco do que venho construindo com dedicação e curiosidade
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 gap-y-9 mt-15">
        {projetos.map((projeto) => (
          <CardProjeto key={projeto.titulo} {...projeto} />
        ))}
      </div>
    </div>
  );
}
