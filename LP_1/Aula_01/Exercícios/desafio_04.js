const prompt = require("prompt-sync")();

const ano = Number(prompt("Informe os anos de experiência: "));


var salario;
var adicional;

switch (ano){
    case (ano<=1):
        salario = 1300;
        adicional = 0;
        console.log(`O tempo de serviço: ${ano}.\nSalario base é de: R$1300,00.\n O valor adicional: ${adicional}.\nValor Final: ${salario}.`);
        break;
    case (ano>1 && ano<2):
        salario = 1300 * 1.10;
        adicional = 1300 * 0.10;
        console.log(`O tempo de serviço: ${ano}.\nSalario base é de: R$1300,00.\n O valor adicional: ${adicional}.\nValor Final: ${salario}.`)
        break;
    case (ano>=2 && ano<3):
        salario = 1300 * 1.20;
        adicional = 1300 * 0.20;
        console.log(`O tempo de serviço: ${ano}.\nSalario base é de: R$1300,00.\n O valor adicional: ${adicional}.\nValor Final: ${salario}.`)
        break;
    case (ano>=3 && ano<4):
        salario = 1300 * 1.30;
        adicional = 1300 * 0.30;
        console.log(`O tempo de serviço: ${ano}.\nSalario base é de: R$1300,00.\n O valor adicional: ${adicional}.\nValor Final: ${salario}.`)
        break;
    case (ano>=4 && ano<5):
        salario = 1300 * 1.40;
        adicional = 1300 * 0.40;
        console.log(`O tempo de serviço: ${ano}.\nSalario base é de: R$1300,00.\n O valor adicional: ${adicional}.\nValor Final: ${salario}.`)
        break;
    case (ano>=5 && ano<6):
        salario = 1300 * 1.50;
        adicional = 1300 * 0.50;
        console.log(`O tempo de serviço: ${ano}.\nSalario base é de: R$1300,00.\n O valor adicional: ${adicional}.\nValor Final: ${salario}.`)
        break;
    case(ano>6):
        salario = 1300 * 1.70;
        adicional = 1300 * 0.70;
        console.log(`O tempo de serviço: ${ano}.\nSalario base é de: R$1300,00.\n O valor adicional: ${adicional}.\nValor Final: ${salario}.`)
        break;

}
