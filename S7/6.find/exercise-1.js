/*Dado el siguiente array, usa .find() para econtrar el 
número 100.

```js
const numbers = [32, 21, 63, 95, 100, 67, 43];
```
*/
const numbers = [32, 21, 63, 95, 100, 67, 43];

const numberFind = numbers.find(number => number === 100);
console.log(numberFind);