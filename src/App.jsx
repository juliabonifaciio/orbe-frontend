import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PortaoFacial from "./components/PortaoFacial";
import Inicio from "./pages/Inicio";
import Consultas from "./pages/Consultas";
import Interacoes from "./pages/Interacoes";
import { operador, telas } from "./data/plataforma";
import { useSimulacao } from "./utils/useSimulacao";

const paginas = {
  inicio: Inicio,
  consultas: Consultas,
  interacoes: Interacoes,
};

export default function App() {
  const [autenticado, setAutenticado] = useState(false);
  const [tela, setTela] = useState("inicio");
  const simulacao = useSimulacao();
  const Pagina = paginas[tela];

  const bloquear = () => {
    setAutenticado(false);
    setTela("inicio");
  };

  return (
    <>
      <div className="fundo" aria-hidden="true">
        <span className="fundo__brilho fundo__brilho--a" />
        <span className="fundo__brilho fundo__brilho--b" />
        <span className="fundo__brilho fundo__brilho--c" />
        <span className="fundo__grade" />
      </div>
      {autenticado ? (
        <div className="app">
          <Header estado={simulacao.estado} operador={operador} aoBloquear={bloquear} />
          <Nav itens={telas} ativa={tela} aoMudar={setTela} />
          <main key={tela} className="tela">
            <Pagina {...simulacao} aoNavegar={setTela} />
          </main>
          <Footer />
        </div>
      ) : (
        <PortaoFacial aoLiberar={() => setAutenticado(true)} />
      )}
    </>
  );
}
