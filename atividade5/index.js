const express = require('express');
const app = express();
const PORT = 8080;
const estoque = require('./src/estoque');

app.listen(PORT, function(){
    console.log('App rodando na porta ' + PORT);
});

app.get('/adicionar/:id/:nome/:qtd', function(req,res){
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;
    let p = estoque.criarProduto(id,nome,qtd);
    estoque.adicionarProduto(p)
    res.send(p);
});

app.get('/listar', function(req,res){
    res.send(estoque.listarProdutos());
});

app.get('/remover/:id', function(req,res){
    let id = req.params.id;
    estoque.removerProduto(id);
    res.send(id);
})

app.get('/editar/:id/:qtd', function(req,res){
    let id = req.params.id;
    let novaQtd = req.params.qtd

    const produtoExistente = estoque.listarProdutos().find(produto => produto.id === id);
    if (!produtoExistente) {
        return res.send('Produto nao encontrado!');
    }

    estoque.editarProduto(id, novaQtd);
    res.send('Produto editado')
})
