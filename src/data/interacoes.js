export const interacoesIniciais = [
  {
    id: "i01",
    categoria: "Registro",
    comando: "registrar vegetação alta no km 42",
    resposta: "Registro criado para o km 42 da SP-280. A equipe de conservação foi notificada.",
    data: "2026-10-29T07:42:00",
  },
  {
    id: "i02",
    categoria: "Protocolo",
    comando: "qual o protocolo para hemorragia grave",
    resposta: "Pressão direta sobre o ferimento. Se for em extremidade e não cessar, aplique torniquete e anote o horário. Quer o passo a passo completo?",
    data: "2026-10-29T07:18:00",
  },
  {
    id: "i03",
    categoria: "Trecho",
    comando: "hospital de referência mais próximo do km 118",
    resposta: "Hospital Regional Norte, a 22 minutos pela SP-280. Há heliponto disponível para casos críticos.",
    data: "2026-10-29T06:55:00",
  },
  {
    id: "i04",
    categoria: "Registro",
    comando: "registrar vítima masculina, 34 anos, consciente",
    resposta: "Ficha aberta para a vítima 1. Faltam queixa principal e sinais vitais.",
    data: "2026-10-28T21:30:00",
  },
  {
    id: "i05",
    categoria: "Protocolo",
    comando: "iniciar passo a passo de parada cardiorrespiratória",
    resposta: "Etapa 1 de 6: garanta a segurança da cena. Diga próximo quando concluir.",
    data: "2026-10-28T19:05:00",
  },
];

export const comandosSimulados = [
  {
    categoria: "Protocolo",
    comando: "iniciar passo a passo de queimadura",
    resposta: "Etapa 1 de 5: afaste a vítima da fonte de calor e interrompa a queima. Diga próximo quando concluir.",
  },
  {
    categoria: "Registro",
    comando: "registrar sinais vitais da vítima 2",
    resposta: "Ficha da vítima 2 aberta. Pode informar pressão arterial, frequência cardíaca e saturação.",
  },
  {
    categoria: "Hospital",
    comando: "qual o hospital com trauma mais próximo",
    resposta: "Hospital Regional Norte, a 14 minutos do km 42. Aviso a regulação da sua chegada?",
  },
  {
    categoria: "Protocolo",
    comando: "abrir protocolo de múltiplas vítimas",
    resposta: "Triagem por cores iniciada. Etapa 1 de 5: delimite a área e solicite apoio adicional.",
  },
];
