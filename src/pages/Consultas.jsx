import { useMemo, useState } from "react";
import Painel from "../components/Painel";
import CardConsulta from "../components/CardConsulta";
import Icone from "../components/Icone";
import { categorias, consultas } from "../data/consultas";
import { filtrarConsultas } from "../utils/filtrar";

export default function Consultas() {
  const [categoria, setCategoria] = useState("Todos");
  const [termo, setTermo] = useState("");

  const lista = useMemo(() => filtrarConsultas(consultas, categoria, termo), [categoria, termo]);

  const contar = (nome) =>
    nome === "Todos" ? consultas.length : consultas.filter((item) => item.categoria === nome).length;

  return (
    <div className="consultas">
      <header className="pagina__cabecalho">
        <div>
          <h1>Consultas</h1>
          <p>Protocolos, trechos e hospitais de referência a uma pergunta de distância.</p>
        </div>
        <label className="busca">
          <Icone nome="busca" />
          <input
            type="search"
            value={termo}
            onChange={(evento) => setTermo(evento.target.value)}
            placeholder="Buscar protocolo, km ou hospital"
            aria-label="Buscar nas consultas"
          />
        </label>
      </header>

      <div className="filtros" role="group" aria-label="Filtrar por categoria">
        {categorias.map((nome) => (
          <button
            key={nome}
            className={`filtro ${categoria === nome ? "filtro--ativo" : ""}`}
            aria-pressed={categoria === nome}
            onClick={() => setCategoria(nome)}
          >
            {nome}
            <span>{contar(nome)}</span>
          </button>
        ))}
      </div>

      {lista.length > 0 ? (
        <div className="consultas__grade">
          {lista.map((item) => (
            <CardConsulta key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <Painel className="vazio">
          <p>Nenhum resultado para essa busca. Tente outro termo ou escolha outra categoria.</p>
        </Painel>
      )}
    </div>
  );
}
