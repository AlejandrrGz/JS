/*Dado el siguiente array. Crear una copia de él eliminando la posición 2
pero sin editar el array inicial. De nuevo, usando spread operatos.

```js
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 
```
*/

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 
const colors2=[...colors.slice(0,1), ...colors.slice(2)];

console.log(colors);
console.log(colors2);



