/*Dado el siguiente array, devuelve un array con sus nombres utilizando .map().

```js
const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];
```*/
const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];
const userNames=users.map(function(users){
    return users.name;
})
console.log(userNames);
//const userNames2=users.map(user=>user.name);