const $ = document.querySelector.bind(document)

const search = window.location.search;
const params = new URLSearchParams(search);
const deltaS = params.get('deltaS');
const deltaT = params.get('deltaT');
const sValue = deltaS !== '' ? Number(deltaS) : NaN;
const tValue = deltaT !== '' ? Number(deltaT) : NaN;
const resultValueSpan = document.getElementById('result-value');

if(!isNaN(sValue) && !isNaN(tValue) && tValue !== 0){
    const avgSpeed = sValue / tValue;
    resultValueSpan.innerHTML = `${avgSpeed} m/s`
}else{
    resultValueSpan.innerHTML = `Valor indefinido (parâmetros inválidos)`
}

console.log(deltaS, deltaT);