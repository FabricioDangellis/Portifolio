import { Mail, Github, Linkedin } from "lucide-react";
import type { JSX } from "react";

// Single-file minimal portfolio (React + TypeScript + plain CSS)
// Você pode separar em componentes quando quiser.

export default function App(): JSX.Element {
  return (
    <div className="app-root">
      <style>{`
        :root{
          --bg: #0b0b0b; /* black */
          --dark: #151515; /* dark gray */
          --muted: #2b2b2b;
          --offwhite: #f6f4ef; /* off-white */
          --accent: #9aa3a8; /* subtle accent */
          --max-width: 960px;
          --radius: 12px;
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        }

        *{box-sizing:border-box}
        html,body,#root{height:100%}
        body{
          margin:0;
          background: linear-gradient(180deg, var(--bg) 0%, var(--dark) 100%);
          color:var(--offwhite);
          -webkit-font-smoothing:antialiased;
          -moz-osx-font-smoothing:grayscale;
          line-height:1.45;
        }

        .app-root{
          min-height:100vh;
          display:flex;
          align-items:flex-start;
          justify-content:center;
          padding:48px 24px;
        }

        .container{
          width:100%;
          max-width:var(--max-width);
        }

        header{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:16px;
          margin-bottom:48px;
        }

        .brand{
          display:flex;align-items:center;gap:12px;
        }
        .logo{
          width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,var(--muted),transparent);
          display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--offwhite);
          box-shadow: 0 4px 18px rgba(0,0,0,0.6);
        }

        nav a{color:var(--accent);text-decoration:none;margin-left:18px;font-size:14px}
        nav a:hover{color:var(--offwhite)}

        /* HERO */
        .hero{
          display:grid;grid-template-columns:1fr 360px;gap:36px;align-items:center;margin-bottom:72px;
        }

        .hero-card{
          background: linear-gradient(180deg, rgba(255,255,255,0.02), transparent);
          border-radius:var(--radius);
          padding:28px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.6);
        }

        h1{font-size:36px;margin:0 0 8px;color:var(--offwhite)}
        .lead{color:var(--accent);margin:0 0 16px}
        .cta-row{display:flex;gap:12px;margin-top:12px}
        .btn{
          padding:10px 14px;border-radius:10px;border:1px solid rgba(255,255,255,0.06);background:transparent;color:var(--offwhite);font-weight:600;cursor:pointer
        }
        .btn.ghost{background:transparent}
        .btn.primary{background:var(--offwhite);color:var(--dark)}

        .meta{
          font-size:14px;color:var(--accent);margin-top:12px
        }

        /* SIDEBAR ABOUT */
        .about{
          background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          padding:20px;border-radius:var(--radius);
          border:1px solid rgba(255,255,255,0.03);
        }
        .avatar{
          width:84px;height:84px;border-radius:12px;background:var(--muted);display:flex;align-items:center;justify-content:center;font-weight:700
        }

        /* Sections */
        section{margin-bottom:56px}
        section h2{margin-top:0;color:var(--offwhite);font-size:20px}
        .card{
          background: linear-gradient(180deg, rgba(255,255,255,0.01), transparent);
          padding:20px;border-radius:12px;border:1px solid rgba(255,255,255,0.03);
        }

        /* Services */
        .services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
        .service{padding:18px;border-radius:10px;background:rgba(255,255,255,0.01);min-height:120px}
        .service h3{margin:0 0 8px;font-size:16px}
        .service p{margin:0;color:var(--accent);font-size:14px}

        /* Projects */
        .projects-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
        .project{
          border-radius:10px;padding:14px;min-height:140px;display:flex;flex-direction:column;justify-content:space-between
        }
        .proj-title{font-weight:700}
        .proj-desc{color:var(--accent);font-size:13px;margin-top:8px}
        .proj-tags{margin-top:12px;font-size:12px;color:var(--accent)}

        /* Contact */
        .contact-grid{display:grid;grid-template-columns:1fr 320px;gap:20px}
        form label{display:block;font-size:13px;margin-bottom:8px;color:var(--accent)}
        input,textarea{width:100%;padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:var(--offwhite)}
        textarea{min-height:120px}

        footer{display:flex;align-items:center;justify-content:space-between;padding-top:18px;border-top:1px solid rgba(255,255,255,0.03);color:var(--accent)}

        /* responsive */
        @media (max-width:960px){
          .hero{grid-template-columns:1fr}
          .projects-grid,.services-grid{grid-template-columns:repeat(2,1fr)}
          .contact-grid{grid-template-columns:1fr}
        }
        @media (max-width:560px){
          .projects-grid,.services-grid{grid-template-columns:1fr}
          nav a{display:none}
          header{align-items:flex-start;flex-direction:column}
        }
      `}</style>

      <div className="container">
        <header>
          <div className="brand">
            <div className="logo">FD</div>
            <div>
              <div style={{ fontWeight: 700 }}>Fabrício D'angellis</div>
              <div style={{ fontSize: 13, color: "var(--accent)" }}>Frontend & Full‑stack</div>
            </div>
          </div>

          <nav>
            <a href="#about">Sobre</a>
            <a href="#services">Serviços</a>
            <a href="#projects">Projetos</a>
            <a href="#contact">Contato</a>
          </nav>
        </header>

        <main>
          <section className="hero">
            <div className="hero-card">
              <h1>Olá, eu sou Fabrício — desenvolvedor</h1>
              <p className="lead">
                Eu crio interfaces minimalistas, acessíveis e performáticas com foco em experiência do usuário e código
                escalável. Trabalho com TypeScript, React e design de interação.
              </p>

              <div className="meta">Atualmente: desenvolvendo o projeto "Trajetórias" — sistema para acompanhamento de saúde mental.</div>

              <div className="cta-row">
                <a className="btn primary" href="#contact">Vamos conversar</a>
                <a className="btn ghost" href="#projects">Ver projetos</a>
              </div>

            </div>

            <aside className="about">
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <div className="avatar">FD</div>
                <div>
                  <div style={{ fontWeight: 700 }}>Fabrício D'angellis</div>
                  <div style={{ fontSize: 13, color: "var(--accent)" }}>Itaiçaba, CE • Brasil</div>
                </div>
              </div>

              <p style={{ marginTop: 12, color: "var(--accent)", fontSize: 14 }}>
                Sou apaixonado por usabilidade e design emocional. Tenho experiência em construir interfaces que comunicam
                de forma clara e empática.
              </p>

              <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
                <a aria-label="github" href="https://github.com/" target="_blank" rel="noreferrer" className="btn">
                  <Github size={16} />
                </a>
                <a aria-label="linkedin" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="btn">
                  <Linkedin size={16} />
                </a>
                <a aria-label="email" href="mailto:fabriciodangellisfdf@gmail.com" className="btn">
                  <Mail size={16} />
                </a>
              </div>
            </aside>
          </section>

          <section id="services">
            <h2>Serviços</h2>
            <div className="card services-grid">
              <div className="service">
                <h3>Design de Interfaces</h3>
                <p>Wireframes, protótipos e UI que respeitam usabilidade e acessibilidade.</p>
              </div>
              <div className="service">
                <h3>Desenvolvimento Frontend</h3>
                <p>React + TypeScript: componentes reutilizáveis, testes e performance.</p>
              </div>
              <div className="service">
                <h3>Integração & Backend</h3>
                <p>APIs REST/GraphQL, autenticação JWT e arquiteturas limpas.</p>
              </div>
            </div>
          </section>

          <section id="projects">
            <h2>Projetos</h2>
            <div className="card projects-grid">
              <article className="project" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.01), transparent)" }}>
                <div>
                  <div className="proj-title">Trajetórias</div>
                  <div className="proj-desc">Sistema de acompanhamento para saúde mental infantil — foco em psicólogos e responsáveis.</div>
                </div>
                <div className="proj-tags">TypeScript · React · Node · Design emocional</div>
              </article>

              <article className="project">
                <div>
                  <div className="proj-title">Portfolio Pessoal</div>
                  <div className="proj-desc">Site minimalista para apresentar projetos e contato.</div>
                </div>
                <div className="proj-tags">React · CSS · A11y</div>
              </article>

              <article className="project">
                <div>
                  <div className="proj-title">TaskBoard (protótipo)</div>
                  <div className="proj-desc">Ferramenta para gerenciamento de tarefas com foco em UX simples.</div>
                </div>
                <div className="proj-tags">React · Drag & Drop · Design</div>
              </article>
            </div>
          </section>

          <section id="contact">
            <h2>Contato</h2>
            <div className="card contact-grid">
              <div>
                <p style={{ color: "var(--accent)", marginTop: 0 }}>
                  Quer trabalhar comigo ou discutir um projeto? Me mande uma mensagem — respondo rápido.
                </p>

                <form onSubmit={(e) => { e.preventDefault(); window.location.href = 'mailto:fabriciodangellisfdf@gmail.com'; }}>
                  <label htmlFor="name">Nome</label>
                  <input id="name" name="name" placeholder="Seu nome" />

                  <label htmlFor="email" style={{ marginTop: 12 }}>Email</label>
                  <input id="email" name="email" placeholder="seu@email.com" />

                  <label htmlFor="message" style={{ marginTop: 12 }}>Mensagem</label>
                  <textarea id="message" name="message" placeholder="Como posso ajudar?"></textarea>

                  <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
                    <button className="btn primary" type="submit">Enviar</button>
                    <a className="btn ghost" href="mailto:fabriciodangellisfdf@gmail.com">Enviar por email</a>
                  </div>
                </form>

              </div>

              <aside style={{ alignSelf: 'start' }}>
                <div className="card" style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 13, color: 'var(--accent)' }}>Telefone</div>
                  <div style={{ fontWeight: 700 }}>+55 (88) 99448-1653</div>
                </div>

                <div className="card">
                  <div style={{ fontSize: 13, color: 'var(--accent)' }}>Localização</div>
                  <div style={{ fontWeight: 700 }}>Itaiçaba, CE — Brasil</div>
                </div>
              </aside>

            </div>
          </section>

          <footer>
            <div>© {new Date().getFullYear()} Fabrício D'angellis</div>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href="#projects" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Projetos</a>
              <a href="#contact" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Contato</a>
            </div>
          </footer>

        </main>

      </div>
    </div>
  );
}
