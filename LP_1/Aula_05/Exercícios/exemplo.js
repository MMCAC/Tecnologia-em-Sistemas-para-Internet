//Exemplo de callback

function imprimir(nome){
    console.log(nome);
}

function imprimirDuasVezes(nome){
    console.log(nome);
    console.log(nome);
}

//Função com parâmetro nome e parâmetro callback
function invertaNome(nome, callback){
    let nomeInvertido = nome.split('').reverse().join(' ');
    callback(nomeInvertido);
}

const prompt = require("prompt-sync")();

const entrada = prompt("Informe o nome? ")
invertaNome(entrada,imprimirDuasVezes);