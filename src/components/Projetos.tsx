import Projeto from "./Projeto";
import Trajetorias from "../assets/dashboard.png";
import TaskBoard from "../assets/Imagem2.png";

export default function Projetos() {
  const projetos = [
    {
      titulo: "Trajetórias",
      descricao: "Projeto de um sistema de acompanhamento pscológico infantil",
      imagem: Trajetorias,
      tags: ["React", "TypeScript"],
      linkPage: "/projetos/trajetorias",
    },
    {
      titulo: "TaskBoard",
      descricao: "Sistema simples para o gerenciamento de tarefas",
      imagem: TaskBoard,
      tags: ["React", "TypeScript", "Tailwind", "Context API"],
      linkPage: "/projetos/taskboard",
    },
  ];

  return (
    <div
      id="projetos"
      className="relative isolate min-h-screen bg-gray-900 lg:px-0 pb-20 sm:pb-10 sm:pt-10"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-indigo-400">Projetos</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
          Projetos desenvolvidos
        </p>
      </div>
      <div className="w-full max-w-7xl mx-auto mt-16 grid grid-cols-1 items-center gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {projetos.map((projeto) => (
          <Projeto key={projeto.titulo} {...projeto} />
        ))}
      </div>
    </div>
  );
}
