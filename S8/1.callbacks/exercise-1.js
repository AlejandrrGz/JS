/*
# Español
Usa el siguiente código como base y crea 3 funciones llamadas
father, sum, subtract.
La función sum sumara dos parametros a y b y los retornará.
La función substract hará lo mismo pero restando y
la función father recibirá como parámetros a, b y una
función callback (sum o substract).
La función father deberá ejecutar la función que reciba como callback 
y añadir el numero que retorne la función al array numersList.
Ejecuta varias veces la función father y haz finalmente un 
console.log de numbersList

```js
const numbersList = [];

function sum(){

}

function substract(){

}

function father(){

}
```
*/
const numbersList = [];

function sum(){};
function substract(){};
function father(){};

function sum(a,b){
    return a+b;      
}

function substract(x,y){
    return x-y; 
}

function father(a,b,callback){
    const n = callback(a,b);
    numbersList.push(n);

}
function father(x,y,callback){
    const n = callback(x,y);
    numbersList.push(n);
}
/*
}
function father(a,b,callback){
    const n = callback(a,b);
    numbersList.push(n);
}
*/
father(5,5,sum);
father(855,316,substract);
father(5,7,sum);
father(1,1,substract);


console.log(numbersList);