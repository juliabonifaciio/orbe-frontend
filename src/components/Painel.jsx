export default function Painel({ className = "", children, ...resto }) {
  const acompanharLuz = (evento) => {
    const alvo = evento.currentTarget;
    const area = alvo.getBoundingClientRect();
    alvo.style.setProperty("--mx", `${evento.clientX - area.left}px`);
    alvo.style.setProperty("--my", `${evento.clientY - area.top}px`);
  };

  return (
    <section className={`painel ${className}`} onMouseMove={acompanharLuz} {...resto}>
      {children}
    </section>
  );
}
