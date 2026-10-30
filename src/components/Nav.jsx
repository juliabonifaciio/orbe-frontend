import Icone from "./Icone";

export default function Nav({ itens, ativa, aoMudar }) {
  const indice = itens.findIndex((item) => item.id === ativa);

  return (
    <nav className="nav" aria-label="Telas da plataforma" style={{ "--i": indice, "--n": itens.length }}>
      <span className="nav__indicador" aria-hidden="true" />
      {itens.map((item) => (
        <button
          key={item.id}
          className="nav__item"
          aria-current={item.id === ativa ? "page" : undefined}
          onClick={() => aoMudar(item.id)}
        >
          <Icone nome={item.icone} />
          {item.rotulo}
        </button>
      ))}
    </nav>
  );
}
