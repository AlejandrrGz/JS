/*
Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array.
```js
const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]
```
*/
const placesToTravel = [
    {id: 5, name: 'Japan'},
    {id: 11, name: 'Venecia'},
    {id: 23, name: 'Murcia'},
    {id: 40, name: 'Santander'},
    {id: 44, name: 'Filipinas'},
    {id: 59, name: 'Madagascar'}
];

/*for (const destination of placesToTravel) {
    if(destination.id === 11  || destination.id === 40){
        let i = placesToTravel.indexOf(destination);
        placesToTravel.splice(i,1);
    }
    
}*/

// Con for normal e i-- para volver a recalcular el indice y no saltar elmentos del array
for(let i = 0; i < placesToTravel.length; i++) {
    let destination = placesToTravel[i];
    if(destination.id === 11  || destination.id === 40){
        placesToTravel.splice(i,1);
        i--;
    }
    
}

console.log(placesToTravel);