/*Dado el siguiente array, crea una copia usando spread operators.

```js
const pointsList = [32, 54, 21, 64, 75, 43]
```
*/
const pointsList = [32, 54, 21, 64, 75, 43]
const copy=[...pointsList];
console.log('original ' + pointsList);
console.log(copy);