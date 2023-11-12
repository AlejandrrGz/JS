/*
Usa un bucle forof para recorrer todos los juguetes y elimina los que incluyan la palabra `gato`. Recuerda que puedes usar la función `.includes()` para comprobarlo.
```js
const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}]
```
*/

const toys = [
    {id: 5, name: 'Buzz MyYear'},
    {id: 11, name: 'Action Woman'},
    {id: 23, name: 'Barbie Man'},
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
];

for (const toy of toys) {
    if (toy.name.includes('gato')){
        let index = toys.indexOf(toy);
        delete toys[index]
    }
}
console.log(toys);;
/* -----Ñapa David ok----
let toysCat = [];
for (let toy of toys){
    if (toy.name.includes('gato')){
        toys.splice(toy,0);
    } else{
        toysCat.push(toy);
    }
}
console.log(toysCat);
*/