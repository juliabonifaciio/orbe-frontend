# ORBE 

## A Inteligência que Conecta a Ocorrência

Interface da plataforma ORBE, o assistente de voz para paramédicos de campo da Motiva. Projeto da Sprint 1 (Base do projeto + MVP preparatório) da disciplina Front End & Mobile Development, turma 2TIAPR.

> **Aviso importante: este projeto é um protótipo em React.**
> A primeira versão oficial do sistema ORBE será entregue em **React Native**. Esta versão em React (Vite) cumpre o enunciado da Sprint 1 e serve para validar layout, fluxo de telas, componentização e identidade visual antes da migração para mobile.

## Problema escolhido

Em ocorrências nas rodovias, o paramédico precisa decidir rápido com as mãos ocupadas. Protocolos, informações do trecho e o registro da vítima ficam espalhados entre rádio, papel e memória, o que atrasa condutas e fragmenta os dados do atendimento.

O ORBE concentra isso em um assistente de voz, acionado pela palavra **apio**, que tira dúvidas, lembra protocolos, conduz o passo a passo e armazena os dados da vítima ligados à ocorrência.

## Usuário da plataforma

Paramédico de campo da Motiva (persona 3), que atende vítimas em rodovias e precisa de informação confiável e registro sem tirar as mãos do atendimento.

## O que existe nesta sprint

- Portão de verificação facial simulado, que libera o acesso antes de qualquer tela.
- Layout base com `Header` e `Nav` e navegação por `useState`, sem React Router.
- Início: apresenta o problema, o ORBE animado, as capacidades e o ciclo de uma ocorrência.
- Consultas: protocolos, trechos e hospitais a partir de `src/data/consultas.js`, com busca e filtro por categoria.
- Interações: histórico de comandos simulados com texto, data e resposta, mais um console para simular uma chamada por voz.

Voz, reconhecimento facial e respostas são simulados com dados fixos. O conteúdo operacional é fictício e tem finalidade acadêmica.

## Estrutura

```text
src/
  components/   Header, Nav, Footer, Painel, Orbe, Icone, CardConsulta, CardInteracao, PortaoFacial
  pages/        Inicio, Consultas, Interacoes
  data/         plataforma, consultas, interacoes
  utils/        filtrar, formatarData, useSimulacao
  App.jsx
  main.jsx
```

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal. Para gerar a versão de produção, use `npm run build`.

## Integrantes e divisão de tarefas

| Integrante | RM | Responsabilidade |
| --- | --- | --- |
| Nome do integrante 1 | 000000 | A definir |
| Nome do integrante 2 | 000000 | A definir |
| Nome do integrante 3 | 000000 | A definir |
| Nome do integrante 4 | 000000 | A definir |
