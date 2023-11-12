/*Dado el siguiente objeto, crea una copia usando spread operators.

```js
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
```*/

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const copy={...toy};

console.log(toy);
console.log(copy);