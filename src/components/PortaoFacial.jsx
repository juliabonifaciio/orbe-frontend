import { useEffect, useMemo, useRef, useState } from "react";
import Icone from "./Icone";
import { operador } from "../data/plataforma";

const etapas = ["Detectando rosto", "Mapeando pontos faciais", "Comparando com o cadastro da equipe"];

function gerarMalha() {
  const pontos = [];
  for (let linha = -5; linha <= 5; linha += 1) {
    for (let coluna = -5; coluna <= 5; coluna += 1) {
      const x = coluna / 5;
      const y = linha / 5;
      if ((x * x) / 0.72 + y * y <= 1) {
        pontos.push({ x: 120 + x * 72, y: 150 + y * 100, atraso: Math.hypot(x, y) });
      }
    }
  }
  return pontos;
}

const titulos = {
  aguardando: () => "Confirme sua identidade",
  verificando: () => "Verificando",
  liberado: () => `Acesso liberado, ${operador.nome}`,
};

const rotulosBotao = {
  aguardando: "Iniciar verificação facial",
  verificando: "Verificando",
  liberado: "Entrando",
};

export default function PortaoFacial({ aoLiberar }) {
  const [fase, setFase] = useState("aguardando");
  const [etapa, setEtapa] = useState(0);
  const [saindo, setSaindo] = useState(false);
  const temporizadores = useRef([]);
  const malha = useMemo(gerarMalha, []);

  useEffect(() => () => temporizadores.current.forEach(clearTimeout), []);

  const agendar = (acao, atraso) => {
    temporizadores.current.push(setTimeout(acao, atraso));
  };

  const iniciar = () => {
    if (fase !== "aguardando") return;
    setFase("verificando");
    agendar(() => setEtapa(1), 1200);
    agendar(() => setEtapa(2), 2500);
    agendar(() => {
      setFase("liberado");
      setEtapa(3);
    }, 3900);
    agendar(() => setSaindo(true), 5200);
    agendar(aoLiberar, 5900);
  };

  return (
    <div className={`portao portao--${fase} ${saindo ? "portao--saida" : ""}`}>
      <div className="portao__conteudo">
        <img className="portao__marca" src="/assets/logo-horizontal.png" alt="ORBE" />
        <div className="portao__rosto">
          <span className="canto canto--a" />
          <span className="canto canto--b" />
          <span className="canto canto--c" />
          <span className="canto canto--d" />
          <svg viewBox="0 0 240 300" aria-hidden="true">
            <ellipse className="portao__contorno" cx="120" cy="150" rx="88" ry="122" />
            {malha.map((ponto) => (
              <circle
                key={`${ponto.x}-${ponto.y}`}
                className="portao__ponto"
                cx={ponto.x}
                cy={ponto.y}
                r="2.2"
                style={{ "--d": `${ponto.atraso * 1.4}s` }}
              />
            ))}
          </svg>
          <span className="portao__varredura" />
        </div>
        <h1 aria-live="polite">{titulos[fase]()}</h1>
        <p className="portao__texto">
          O ORBE atende apenas paramédicos cadastrados. Neste protótipo a verificação é simulada.
        </p>
        <ul className="portao__etapas">
          {etapas.map((nome, indice) => {
            const estado = etapa > indice ? "feito" : etapa === indice && fase === "verificando" ? "ativo" : "";
            return (
              <li key={nome} className={estado}>
                <span>
                  <Icone nome="check" tamanho={14} />
                </span>
                {nome}
              </li>
            );
          })}
        </ul>
        <button className="botao botao--primario" onClick={iniciar} disabled={fase !== "aguardando"}>
          <Icone nome="rosto" />
          {rotulosBotao[fase]}
        </button>
      </div>
    </div>
  );
}
