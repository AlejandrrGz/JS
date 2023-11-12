function sum(numberOne , numberTwo) {
    if(numberOne>numberTwo){
        return numberOne;
    }else{return numberTwo};
}


console.log(sum(10,40));   
console.log(sum(100,40)); 

/*
function sum(numberOne , numberTwo) {
    if(numberOne===numberTwo){
        return null;
    }else if(numberOne>numberTwo){return numberOne};
    else{return numberTwo};
}

/////////////////////////////////////////

return numberOne===numberTwo ? return null : (numberOne>numberTwo ? numberOne:numberTwo);

*/