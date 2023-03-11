/**
 * Escreva uma função que receba um array de strings e uma função
de retorno de chamada. A função deve filtrar a matriz com base na função de
retorno de chamada e retornar a matriz filtrada.
 */
function filteredStrings(arr, callback){
    let filteredArr = [];

    for (let i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

console.log(filteredStrings(["hello", "world", "foo", "bar"], (str) => str.length > 3));