import { useId } from "react";

const orbita = "M 45 200 A 155 66 0 1 1 355 200 A 155 66 0 1 1 45 200";
const barras = [0, 1, 2, 3, 4];

export default function Orbe({ estado = "repouso", tamanho = "360px" }) {
  const id = useId().replace(/:/g, "");

  return (
    <div
      className={`orbe orbe--${estado}`}
      style={{ "--tamanho": tamanho }}
      role="img"
      aria-label={`ORBE, estado: ${estado}`}
    >
      <span className="orbe__onda" />
      <span className="orbe__onda" />
      <span className="orbe__onda" />
      <svg className="orbe__orbitas" viewBox="0 0 400 400" aria-hidden="true">
        <defs>
          <linearGradient id={`${id}-azul`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#2db7ff" />
            <stop offset="1" stopColor="#6fd8ff" />
          </linearGradient>
          <linearGradient id={`${id}-menta`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#4de8c8" />
            <stop offset="1" stopColor="#9cf6e2" />
          </linearGradient>
          <path id={`${id}-p`} d={orbita} />
        </defs>
        <g transform="rotate(-32 200 200)">
          <use href={`#${id}-p`} fill="none" stroke={`url(#${id}-azul)`} strokeWidth="3.2" />
          <circle r="10" fill="#2db7ff" className="orbe__astro">
            <animateMotion dur="12s" repeatCount="indefinite">
              <mpath href={`#${id}-p`} />
            </animateMotion>
          </circle>
          <circle r="10" fill="#2db7ff" className="orbe__astro">
            <animateMotion dur="12s" begin="-6s" repeatCount="indefinite">
              <mpath href={`#${id}-p`} />
            </animateMotion>
          </circle>
        </g>
        <g transform="rotate(30 200 200)">
          <use href={`#${id}-p`} fill="none" stroke={`url(#${id}-menta)`} strokeWidth="2" />
          <circle r="10" fill="#4de8c8" className="orbe__astro">
            <animateMotion dur="16s" repeatCount="indefinite">
              <mpath href={`#${id}-p`} />
            </animateMotion>
          </circle>
        </g>
      </svg>
      <div className="orbe__nucleo">
        <div className="orbe__voz">
          {barras.map((barra) => (
            <i key={barra} style={{ "--d": `${barra * 0.12}s` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
