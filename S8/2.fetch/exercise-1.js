/*
Utiliza esta url de la api Agify 
'https://api.agify.io?name=michael' para hacer un .fetch() y 
recibir los datos que devuelve. Imprimelo mediante un 
console.log(). Para ello, es necesario que crees 
un .html y un .js.
*/
  const getDataMichael = async () => {
    try {let dataMichael = await fetch("https://api.agify.io?name=michael");
        let dataM = await dataMichael.json();
        return dataM;
    } catch(error) {
        console.error("Algo no funciona bien!", error);
    }
}

const logMichael = async () => {
    let dataM = await getDataMichael();
    console.log(dataM);
}

console.log(logMichael());