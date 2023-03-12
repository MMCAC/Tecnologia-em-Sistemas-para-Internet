const prompt = require('prompt-sync')();

var idadeAnos, idadeMeses, idadeDias;

idadeDias = Number(prompt('Informe a sua idade em Dias: '));
idadeAnos = idadeDias/360;
idadeMeses = idadeDias/30;

console.log("Sua idade em Anos, Meses e Dias é, respectivamente, igual a " + idadeAnos +", " + idadeMeses +" e " + idadeDias);