import cidades from "../data/arrays.js";

export const buscaPorTodos = () => {
    return cidades;
}


export const buscaUfsPorNome = (nomeUf) => {
    return cidades.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()))
}


export const buscaPorId = (idU) => {
    const idUf = parseInt(idU)
    return cidades.find(e => e.id === idUf);
}

export const deletaCidade = (id) => {
    return cidades.splice(id - 1, 1);
}

export const atualizaCidade = (id, cidade, uf) => {
    return cidades[id - 1] = { id: id, uf: uf, nome: cidade }
}
