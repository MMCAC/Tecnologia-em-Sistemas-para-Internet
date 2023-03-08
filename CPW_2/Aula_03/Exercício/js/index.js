const valor1 = document.getElementById('valor1');
const valor2 = document.getElementById('valor2');

const container = document.getElementById('container');

const addButton = document.createElement('button');
addButton.innerHTML = 'Somar';
addButton.className = 'botao';
container.appendChild(addButton);

const final = document.getElementById('result');

addButton.onclick = () => {
    const parcela1DaSoma = valor1.value;
    const parcela2DaSoma = valor2.value;
    const soma = Number(parcela1DaSoma) + Number(parcela2DaSoma);
    const result = document.createElement('p');
    result.innerHTML = `O resultado da soma de ${parcela1DaSoma} e ${parcela2DaSoma} é de ${soma}.`;
    final.appendChild(result);

}