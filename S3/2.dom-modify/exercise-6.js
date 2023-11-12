/*
Basandote en el siguiente array crea una lista
ul > li con los textos del array y metelo en el html.

```js
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
```
*/
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
document.body.appendChild(ul);
for(let i = 0; i<apps.length; i ++){
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerText=apps[i];
}