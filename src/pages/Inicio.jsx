import Painel from "../components/Painel";
import Orbe from "../components/Orbe";
import Icone from "../components/Icone";
import { capacidades, ciclo } from "../data/plataforma";

const rotulos = {
  repouso: "Aguardando a palavra apio",
  ouvindo: "Ouvindo",
  respondendo: "Respondendo",
};

export default function Inicio({ estado, fala, acionar, aoNavegar }) {
  return (
    <div className="inicio">
      <Painel className="palco">
        <div className="palco__topo">
          <span className={`sinal sinal--${estado}`} />
          <span>{rotulos[estado]}</span>
        </div>
        <Orbe estado={estado} tamanho="min(420px, 78vw)" />
        <div className="palco__fala" aria-live="polite">
          {fala ? (
            <p key={fala}>{fala}</p>
          ) : (
            <p className="palco__dica">
              Diga <strong>apio</strong> para chamar o ORBE
            </p>
          )}
        </div>
        <button className="botao botao--primario" onClick={acionar} disabled={estado !== "repouso"}>
          <Icone nome="voz" />
          Simular chamada por voz
        </button>
      </Painel>

      <div className="inicio__lateral">
        <Painel className="problema">
          <h1>Informação certa no momento da ocorrência</h1>
          <p>
            Na rodovia, o paramédico decide com as mãos ocupadas e o relógio contra a vítima. Protocolos, dados do
            trecho e o registro do atendimento ficam espalhados entre rádio, papel e memória. O ORBE concentra tudo em
            um assistente de voz que conecta a ocorrência do primeiro chamado à passagem do caso.
          </p>
          <div className="problema__acoes">
            <button className="botao botao--primario" onClick={() => aoNavegar("consultas")}>
              Abrir consultas
              <Icone nome="seta" />
            </button>
            <button className="botao botao--fantasma" onClick={() => aoNavegar("interacoes")}>
              Ver interações
            </button>
          </div>
        </Painel>

        <Painel className="capacidades">
          <h2>O que o ORBE faz em campo</h2>
          <ul>
            {capacidades.map((item) => (
              <li key={item.id}>
                <span className="capacidades__icone">
                  <Icone nome={item.icone} />
                </span>
                <div>
                  <h3>{item.titulo}</h3>
                  <p>{item.texto}</p>
                </div>
              </li>
            ))}
          </ul>
        </Painel>
      </div>

      <Painel className="ciclo">
        <h2>Ciclo de uma ocorrência</h2>
        <ol>
          {ciclo.map((etapa, indice) => (
            <li key={etapa.id}>
              <span className="ciclo__n">{indice + 1}</span>
              <h3>{etapa.titulo}</h3>
              <p>{etapa.texto}</p>
            </li>
          ))}
        </ol>
      </Painel>
    </div>
  );
}
