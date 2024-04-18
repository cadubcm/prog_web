let produtos = [];

function criarProduto(id,nome,qtd){
    let p = {
        id:id,
        nome:nome,
        qtd:qtd
    };
    return p;
}

function adicionarProduto(p){
    produtos.push(p);
}

function listarProdutos(){
    return produtos;
}

function removerProduto(id){
    produtos = produtos.filter((p) => {
        return p.id != id;
    });
}

function editarProduto(id, novaQtd){
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id === id) {
            produtos[i].qtd = novaQtd;
            return true;
        }
    }
    return false;
}

module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos,
    removerProduto,
    editarProduto
}