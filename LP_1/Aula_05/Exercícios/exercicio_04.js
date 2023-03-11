/**
 * Escreva uma função que receba uma matriz de números e uma função de retorno de chamada. A função deve filtrar a matriz com base na
função de retorno de chamada e retornar a matriz filtrada.

 */

function forEachNumber(arr, callback){
    let filteredArr = [];

    for(let i = 0; i < arr.length; i++){
       if(callback(arr[i])){
            filteredArr.push(arr[i]);
       }
    }
    return filteredArr;
}

console.log(forEachNumber([1, 2, 3], (num) => num>2));
