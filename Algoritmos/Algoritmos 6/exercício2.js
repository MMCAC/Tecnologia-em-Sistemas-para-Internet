/**
Exercício 2
Faça um algoritmo que contenha uma função que recebe por parâmetro
o tempo de duração de um filme expresso em segundos (numérico) e
retorna esse tempo em horas, minutos e segundos no formato de string
(texto) no formato hh:mm:ss. 
 */

const prompt = require('prompt-sync')();

function periodo(a)
{
    var tempo_horas, tempo_minutos, tempo_segundos, tempo_restante;
    var tempo_total = a;

    tempo_horas = Math.trunc(tempo_total/3600);
    tempo_restante = tempo_total%3600;
    tempo_minutos = Math.trunc(tempo_restante/60);
    tempo_segundos = tempo_restante%60;

    var string = ""+tempo_horas+":"+tempo_minutos+":"+tempo_segundos+"";

    return string;

}

var tempo = Number(prompt("Informe a duração do filme em segundos: "));
var conf = periodo(tempo);

console.log(conf);
