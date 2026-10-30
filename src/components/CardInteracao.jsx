import { formatarDataHora } from "../utils/formatarData";

export default function CardInteracao({ item }) {
  return (
    <li className="interacao">
      <span className="interacao__no" aria-hidden="true" />
      <article className="interacao__corpo">
        <div className="interacao__topo">
          <span className="selo selo--referencia">{item.categoria}</span>
          <time dateTime={item.data}>{formatarDataHora(item.data)}</time>
        </div>
        <p className="balao balao--operador">{item.comando}</p>
        <p className="balao balao--orbe">{item.resposta}</p>
      </article>
    </li>
  );
}
