export const operador = {
  nome: "Rafael Lima",
  iniciais: "RL",
  funcao: "Paramédico, unidade USB-07",
};

export const telas = [
  { id: "inicio", rotulo: "Início", icone: "inicio" },
  { id: "consultas", rotulo: "Consultas", icone: "consultas" },
  { id: "interacoes", rotulo: "Interações", icone: "interacoes" },
];

export const capacidades = [
  {
    id: "voz",
    icone: "voz",
    titulo: "Acionamento por voz",
    texto: "Basta dizer apio. O ORBE escuta, entende o comando e responde sem que o paramédico largue a vítima.",
  },
  {
    id: "protocolos",
    icone: "protocolo",
    titulo: "Dúvidas e protocolos",
    texto: "Tira dúvidas na hora e lembra o protocolo certo para cada tipo de ocorrência na rodovia.",
  },
  {
    id: "passos",
    icone: "check",
    titulo: "Passo a passo guiado",
    texto: "Conduz o atendimento etapa por etapa, no ritmo da equipe, e confirma cada ação concluída.",
  },
  {
    id: "registro",
    icone: "ficha",
    titulo: "Registro de vítimas",
    texto: "Armazena dados da vítima por voz, em uma única ficha ligada à ocorrência e ao trecho.",
  },
];

export const ciclo = [
  { id: "verificar", titulo: "Verificação facial", texto: "Somente profissionais cadastrados acessam o ORBE." },
  { id: "chamar", titulo: "Chamada por voz", texto: "A palavra apio ativa o assistente em campo." },
  { id: "orientar", titulo: "Orientação", texto: "Protocolos e passo a passo no momento da decisão." },
  { id: "registrar", titulo: "Registro", texto: "Dados da vítima e do trecho ficam salvos na ocorrência." },
];
