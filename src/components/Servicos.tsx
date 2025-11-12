import { Building2, PanelsTopLeft, Server } from "lucide-react";

export default function Servicos() {
  return (
    <div
      id="servicos"
      className="bg-gray-900 min-h-screen flex items-center pb-20 sm:pb-0"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400">
            Serviços
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
            <span className="text-indigo-400">Desenvolvimento</span> de soluções
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            Desenvolvo soluções completas para web, unindo front-end moderno e
            back-end seguro. Meu foco é criar interfaces rápidas, funcionais e
            experiências digitais que realmente geram valor.
          </p>
        </div>
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-15 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex items-center max-w-xs flex-col gap-y-4">
              <PanelsTopLeft className="w-15 h-15 text-indigo-400" />
              <dd className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Landing Pages
              </dd>
              <dt className="text-base/7 text-gray-400">
                Páginas rápidas, responsivas e otimizadas para conversão.
                Integração com formulários, automações e ferramentas de
                marketing. Código limpo, leve e focado em performance.
              </dt>
            </div>

            <div className="mx-auto flex items-center max-w-xs flex-col gap-y-4">
              <Building2 className="w-15 h-15 text-indigo-400" />
              <dd className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Sites Institucionais
              </dd>
              <dt className="text-base/7 text-gray-400">
                Desenvolvimento de sites profissionais, modernos e acessíveis.
                Navegação fluida, design responsivo e integração com APIs e
                áreas administrativas quando necessário.
              </dt>
            </div>

            <div className="mx-auto flex items-center max-w-xs flex-col gap-y-4">
              <Server className="w-15 h-15 text-indigo-400" />
              <dd className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Back-end e APIs
              </dd>
              <dt className="text-base/7 text-gray-400">
                Criação de APIs seguras e escaláveis usando Node.js.
                Autenticação, banco de dados, upload de arquivos, serviços
                externos e arquitetura bem estruturada.
              </dt>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
