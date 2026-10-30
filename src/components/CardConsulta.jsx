import { useState } from "react";
import Painel from "./Painel";
import Icone from "./Icone";

const icones = { Protocolo: "protocolo", Trecho: "mapa", Hospital: "hospital" };
const prioridades = { critica: "Crítica", alta: "Alta", referencia: "Referência" };

export default function CardConsulta({ item }) {
  const [aberto, setAberto] = useState(false);
  const Lista = item.categoria === "Protocolo" && item.rotuloLista === "Passo a passo" ? "ol" : "ul";

  return (
    <Painel className={`card ${aberto ? "card--aberto" : ""}`}>
      <button className="card__cabecalho" aria-expanded={aberto} onClick={() => setAberto((valor) => !valor)}>
        <span className="card__icone">
          <Icone nome={icones[item.categoria]} />
        </span>
        <span className="card__texto">
          <span className="card__meta">
            <span className={`selo selo--${item.prioridade}`}>{prioridades[item.prioridade]}</span>
            <span>{item.categoria}</span>
            {item.local && <span>{item.local}</span>}
          </span>
          <h3>{item.titulo}</h3>
          <p>{item.resumo}</p>
        </span>
        <span className="card__seta">
          <Icone nome="chevron" />
        </span>
      </button>
      <div className="card__corpo">
        <div>
          <h4>{item.rotuloLista}</h4>
          <Lista className="card__lista">
            {item.passos.map((passo) => (
              <li key={passo}>{passo}</li>
            ))}
          </Lista>
        </div>
      </div>
    </Painel>
  );
}
