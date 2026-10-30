import { useCallback, useEffect, useRef, useState } from "react";
import { comandosSimulados, interacoesIniciais } from "../data/interacoes";

export function useSimulacao() {
  const [interacoes, setInteracoes] = useState(interacoesIniciais);
  const [estado, setEstado] = useState("repouso");
  const [fala, setFala] = useState("");
  const indice = useRef(0);
  const temporizadores = useRef([]);

  useEffect(() => () => temporizadores.current.forEach(clearTimeout), []);

  const agendar = (acao, atraso) => {
    temporizadores.current.push(setTimeout(acao, atraso));
  };

  const acionar = useCallback(() => {
    if (estado !== "repouso") return;

    const item = comandosSimulados[indice.current % comandosSimulados.length];
    indice.current += 1;

    setEstado("ouvindo");
    setFala("apio");

    agendar(() => setFala(item.comando), 1100);

    agendar(() => {
      setEstado("respondendo");
      setFala(item.resposta);
      setInteracoes((anteriores) => [
        {
          id: `sim-${Date.now()}`,
          comando: item.comando,
          resposta: item.resposta,
          categoria: item.categoria,
          data: new Date().toISOString(),
        },
        ...anteriores,
      ]);
    }, 2700);

    agendar(() => {
      setEstado("repouso");
      setFala("");
    }, 7000);
  }, [estado]);

  return { interacoes, estado, fala, acionar };
}
