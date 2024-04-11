const express = require('express');
const app = express();
const calculadora = require('./util/calculadora');

app.get('/', function(req, res){
    res.send('página inicial');
});

const PORT = 8080;

app.listen(PORT, function(){
    console.log('App rodando na porta ' + PORT);
});

app.get('/somar/:a/:b', function(req, res){
    let a = req.params.a;
    let b = req.params.b;
    let c = calculadora.somar(a,b);
    res.send(`${a} + ${b} = ${c}`);
});

app.get('/subtrair/:a/:b', function(req, res){
    let a = req.params.a;
    let b = req.params.b;
    let c = calculadora.subtrair(a,b);
    res.send(`${a} - ${b} = ${c}`);
});

app.get('/multiplicar/:a/:b', function(req, res){
    let a = req.params.a;
    let b = req.params.b;
    let c = calculadora.multiplicar(a,b);
    res.send(`${a} * ${b} = ${c}`);
});

app.get('/dividir/:a/:b', function(req, res){
    let a = req.params.a;
    let b = req.params.b;
    let c = calculadora.dividir(a,b);
    res.send(`${a} / ${b} = ${c}`);
});
