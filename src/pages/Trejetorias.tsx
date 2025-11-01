import NavBar from "../components/NavBar";
import GitHubImg from "../assets/github.png";
import Footer from "../components/Footer";
import TrajetoriasImg from "../assets/Imagem1.png";
import Cadastro from "../assets/cadastro.png";
import Dashboard from "../assets/dashboard.png";
import Atendimentos from "../assets/atendimentos.png";
import Atendimento from "../assets/Atendimento.png";
import Pacientes from "../assets/pacientes.png";
import Paciente from "../assets/Paciente.png";
import Calendario from "../assets/calendario.png";

export default function Trajetorias() {
  return (
    <div className="relative h-full pt-5 pl-5 pr-5 md:pr-0 md:pl-0 bg-linear-to-b from-[#1A2A3B] to-[#0D1417]">
      <div className="lg:pl-30 lg:pr-30 md:pl-20 md:pr-20">
        <NavBar />

        <div className="flex flex-col md:flex-row pl-5 pr-5 mt-15 relative z-1">
          <div className="md:w-2/5 w-full h-65">
            <img
              src={TrajetoriasImg}
              className="h-full w-full object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="w-full md:w-3/5 text-white flex flex-col justify-between">
            <div className="text-center mt-5 md:text-left md:pl-10">
              <h2 className="font-bold text-3xl">Sistema Trajetórias</h2>
              <p className="font-light text-xl mt-6">
                Sistema de acompanhamento psicológico infantil criado com base
                nos conceitos da IHC (Interação Humano-Computador)
              </p>
            </div>

            <div>
              <div className="flex flex-col md:flex-row mt-10 gap-3 md:gap-10 justify-center items-center">
                <a
                  href="https://trajetorias.vercel.app"
                  target="_blank"
                  className="w-60 h-10 text-center bg-linear-to-r from-[#20686F] to-[#671D7E] p-2 pl-6 pr-6 rounded-full text-white font-medium hover:opacity-90 transition"
                >
                  Acessar projeto
                </a>

                <a
                  href="https://github.com/FabricioDangellis/front-Trajetorias"
                  target="_blank"
                  className="w-60 h-10 flex justify-center items-center gap-3 border-2 rounded-full p-2 pl-6 pr-6"
                >
                  <img src={GitHubImg} className="w-6 h-6" />
                  <span>Acessar repositório</span>
                </a>
              </div>

              <hr className="border relative top-3 mt-2 mr-10 ml-10 opacity-20" />
            </div>
          </div>
        </div>

        <div className="w-full relative -top-30 md:-top-17 bg-[#595373]/30 rounded-2xl text-white pt-40 md:pt-30 p-7 z-0 flex flex-col md:flex-row md:gap-5">
          <div className="md:w-6/8">
            <h3 className="font-bold text-xl italic text-center md:text-left">Descrição</h3>
            <p className="mt-5 font-light text-l text-justify">
              O Trajetórias é um sistema web desenvolvido com o objetivo de
              avaliar a qualidade da interface e da interação entre psicólogos e
              responsáveis de crianças em acompanhamento psicológico, seguindo
              os princípios da Interação Humano-Computador (IHC). O projeto
              busca oferecer uma experiência acessível, emocionalmente
              acolhedora e fácil de usar, permitindo que profissionais da
              psicologia cadastrem pacientes, agendem consultas e registrem
              anotações de atendimento, enquanto os responsáveis acompanham o
              progresso terapêutico dos filhos. A concepção do sistema foi
              guiada por princípios de usabilidade, acessibilidade, Gestalt e
              design emocional, promovendo uma interface intuitiva, harmônica e
              centrada nas necessidades humanas. <br /> <br />
              A interface foi desenvolvida em React (com Vite como ambiente de
              desenvolvimento), utilizando uma arquitetura baseada em
              componentes reutilizáveis. O sistema inclui um dashboard
              interativo para o psicólogo, com gráficos de acompanhamento, um
              calendário semanal e mensal, e um perfil do paciente contendo
              histórico de consultas, anotações e documentos em PDF. O design
              das telas foi pensado para transmitir empatia e clareza, aplicando
              cores suaves, ícones compreensíveis e boa hierarquia visual. Os
              elementos seguem os princípios da Gestalt, favorecendo a percepção
              e reduzindo o esforço cognitivo dos usuários durante a navegação.{" "}
              <br /> <br />
              Para os testes e simulações, foi desenvolvido um backend “fake”,
              criado especificamente para reproduzir o comportamento de um
              servidor real sem a necessidade de infraestrutura completa. Esse
              backend simulado permite que o sistema funcione de forma
              interativa — possibilitando o cadastro de usuários, agendamento de
              consultas e atualização de listas em tempo real —, mas com os
              dados armazenados apenas no ambiente de teste. Essa abordagem foi
              fundamental para a realização de testes empíricos com psicólogos
              reais, permitindo observar a interação, coletar feedbacks e
              avaliar a efetividade da interface quanto à usabilidade, clareza e
              adequação emocional.
              <br />
              <br />O Trajetórias vai além de um sistema de gestão: ele
              representa uma aplicação prática dos conceitos de IHC em um
              contexto sensível e socialmente relevante. O projeto demonstra
              como a teoria da interação, aliada ao design emocional e à
              percepção visual, pode impactar positivamente o uso de tecnologias
              na área da saúde mental infantil. A avaliação feita com
              profissionais reais proporcionou insights valiosos para aprimorar
              a interface e reforçou o papel da empatia, da estética e da
              simplicidade como fatores determinantes para o sucesso de sistemas
              voltados ao cuidado humano.
            </p>
          </div>

          <div className="mt-5 md:w-2/8">
            <h3 className="font-bold text-xl italic text-center md:text-left">Tecnologias</h3>
            <div className="flex gap-3 mt-8 md:mt-5 flex-wrap">
              <span className="bg-[#20686F]/50 px-2 py-1 rounded-2xl font-light text-l">
                React
              </span>

              <span className="bg-[#20686F]/50 px-2 py-1 rounded-2xl font-light text-l">
                TypeScript
              </span>

              <span className="bg-[#20686F]/50 px-2 py-1 rounded-2xl font-light text-l">
                react-icons
              </span>

              <span className="bg-[#20686F]/50 px-2 py-1 rounded-2xl font-light text-l">
                react-router-dom
              </span>

              <span className="bg-[#20686F]/50 px-2 py-1 rounded-2xl font-light text-l">
                react-modal
              </span>
            </div>
          </div>
        </div>

        <div className="relative -top-18 md:static w-full text-center text-white mb-10">
          <h3 className="font-bold text-xl italic mb-10">
            Demonstração da Aplicação
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 gap-y-2 pl-5 pr-5 md:pl-20 md:pr-20">
            <img src={TrajetoriasImg} className="object-cover shadow-2xl hover:scale-105 transition-transform duration-300" />
            <img src={Cadastro} className="object-cover shadow-2xl hover:scale-105 transition-transform duration-300" />
            <img src={Dashboard} className="object-cover shadow-2xl hover:scale-105 transition-transform duration-300" />
            <img src={Atendimentos} className="object-cover shadow-2xl hover:scale-105 transition-transform duration-300" />
            <img src={Atendimento} className="object-cover shadow-2xl hover:scale-105 transition-transform duration-300" />
            <img src={Pacientes} className="object-cover shadow-2xl hover:scale-105 transition-transform duration-300" />
            <img src={Paciente} className="object-cover shadow-2xl hover:scale-105 transition-transform duration-300" />
            <img src={Calendario} className="object-cover shadow-2xl hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
