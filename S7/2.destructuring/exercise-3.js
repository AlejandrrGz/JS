/*En base al siguiente javascript, usa destructuring para crear
2 variables igualandolo a la función e imprimiendolo por consola.


```js
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};
```
*/
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

let{name : animalName, race}=animalFunction();

console.log(animalName, race)