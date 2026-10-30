const caminhos = {
  inicio: "M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z",
  consultas: "M4 6h16M4 12h16M4 18h10",
  interacoes: "M4 5h16v11H9l-5 4z",
  voz: "M12 3v18M8 7v10M16 7v10M4 10v4M20 10v4",
  rosto: "M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M9 10v1M15 10v1M9 15c1.5 1.3 4.5 1.3 6 0",
  trava: "M6 11h12v9H6zM8 11V8a4 4 0 0 1 8 0v3",
  protocolo: "M7 3h8l4 4v14H7zM15 3v4h4M10 12h6M10 16h6",
  mapa: "M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11zM10 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0",
  hospital: "M5 4h14v16H5zM12 8v8M8 12h8",
  ficha: "M6 3h12v18H6zM9 8h6M9 12h6M9 16h3",
  seta: "M5 12h14M13 6l6 6-6 6",
  busca: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4",
  check: "M5 12l5 5 9-10",
  chevron: "M6 9l6 6 6-6",
};

export default function Icone({ nome, tamanho = 20 }) {
  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={caminhos[nome]} />
    </svg>
  );
}
