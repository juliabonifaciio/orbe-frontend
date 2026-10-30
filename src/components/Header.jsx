import Icone from "./Icone";

const rotulos = {
  repouso: "Aguardando a palavra apio",
  ouvindo: "Ouvindo",
  respondendo: "Respondendo",
};

export default function Header({ estado, operador, aoBloquear }) {
  return (
    <header className="header">
      <img
        className="header__marca"
        src="/assets/logo-horizontal.png"
        alt="ORBE, a inteligência que conecta a ocorrência"
      />
      <div className="header__centro" aria-live="polite">
        <span className={`sinal sinal--${estado}`} />
        <span>{rotulos[estado]}</span>
      </div>
      <div className="header__operador">
        <div className="header__dados">
          <strong>{operador.nome}</strong>
          <span>{operador.funcao}</span>
        </div>
        <span className="avatar">{operador.iniciais}</span>
        <button className="icone-botao" onClick={aoBloquear} aria-label="Bloquear sessão">
          <Icone nome="trava" />
        </button>
      </div>
    </header>
  );
}
