import Contato from "../components/Contato";
import Footer from "../components/Footer";
import Projetos from "../components/Projetos";
import Sobre from "../components/Sobre";
import Topo from "../components/Topo";


export default function Home() {
  return (
    <>
      <Topo/>
      <Sobre/>
      <Projetos/>
      <Contato/>
      <Footer/>
    </>
  );
}
