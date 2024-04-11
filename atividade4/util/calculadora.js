function somar(a, b){
    return parseInt(a) + parseInt(b);
}

function subtrair(a, b){
    return parseInt(a) - parseInt(b);
}

function multiplicar(a, b){
    return parseInt(a) * parseInt(b);
}

function dividir(a, b){
    return parseInt(a) / parseInt(b);
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}