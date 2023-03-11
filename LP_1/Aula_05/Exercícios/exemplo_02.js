function validar(a, b){
    if(a!="" && b!=""){
        return true;
    }else{
        return false;
    }
}

function validar2(a, b, callback){
    if(a!="" && b!="" && a>5){
        return true;
    }else{
        return false;
    }
}