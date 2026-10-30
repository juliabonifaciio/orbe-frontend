const normalizar = (texto) =>
  texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export function filtrarConsultas(lista, categoria, termo) {
  const busca = normalizar(termo.trim());

  return lista.filter((item) => {
    const naCategoria = categoria === "Todos" || item.categoria === categoria;
    if (!naCategoria) return false;
    if (!busca) return true;
    const conteudo = normalizar(
      `${item.titulo} ${item.resumo} ${item.local ?? ""} ${item.passos.join(" ")}`
    );
    return conteudo.includes(busca);
  });
}
