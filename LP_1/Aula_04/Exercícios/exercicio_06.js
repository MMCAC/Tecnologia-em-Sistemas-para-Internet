const contains = (arr, val) => arr.includes(val);
console.log(contains([1, 2, 3, 4, 5], 3));

const contains2 = function(arr,val){
    for(posi in arr){
        if(arr[posi] == val){
            return true;
        }
    }
}