/*
Dado el siguiente html y javascript, utiliza .filter() 
para mostrar por consola los streamers que incluyan la palabra 
introducida en el input. De esta forma, si introduzco 'Ru' me 
deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

En este caso, muestra solo los streamers filtrados 
cuando hagamos click en el button.

````js
const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];
```` 

````html
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
             <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <title>Document</title>
</head>
<body>
  <input type="text" data-function="toFilterStreamers"/>
  <button data-function="toShowFilterStreamers">Filter</button>
</body>
</html>
````
*/


const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

let button$$ = document.querySelector("button[data-function='toShowFilterStreamers']");
button$$.addEventListener("click", streamerFilter);

function streamerFilter() {
    input$$ = document.querySelector("input[data-function='toFilterStreamers']");
    let inputText = streamers.filter(streamer => streamer.name.includes(input$$.value));
    console.log(inputText);
}