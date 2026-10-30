import Painel from "../components/Painel";
import Orbe from "../components/Orbe";
import Icone from "../components/Icone";
import CardInteracao from "../components/CardInteracao";

const rotulos = {
  repouso: "Aguardando a palavra apio",
  ouvindo: "Ouvindo",
  respondendo: "Respondendo",
};

export default function Interacoes({ interacoes, estado, fala, acionar }) {
  return (
    <div className="interacoes">
      <div>
        <header className="pagina__cabecalho">
          <div>
            <h1>Interações</h1>
            <p>{interacoes.length} comandos registrados no plantão, do mais recente ao mais antigo.</p>
          </div>
        </header>
        <ol className="linha">
          {interacoes.map((item) => (
            <CardInteracao key={item.id} item={item} />
          ))}
        </ol>
      </div>

      <Painel className="console">
        <div className="palco__topo">
          <span className={`sinal sinal--${estado}`} />
          <span>{rotulos[estado]}</span>
        </div>
        <Orbe estado={estado} tamanho="220px" />
        <div className="palco__fala" aria-live="polite">
          {fala ? <p key={fala}>{fala}</p> : <p className="palco__dica">Simule um comando e acompanhe o histórico.</p>}
        </div>
        <button className="botao botao--primario" onClick={acionar} disabled={estado !== "repouso"}>
          <Icone nome="voz" />
          Simular comando
        </button>
        <small>Comandos simulados com dados fixos. O agente de voz real entra nas próximas sprints.</small>
      </Painel>
    </div>
  );
}
