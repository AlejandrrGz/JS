/*Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers 
que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. 
Recomendamos usar la funcion .includes() para la comprobación.

Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age 
sea mayor que 35.

````js
const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];
```` 
*/
const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];


const legendLoL = streamers.filter(function(game){
    return game.gameMorePlayed.includes ('Legends')
});

// noooo T.T
const formatText = streamers.filter(function(streamer){
    if(streamer.age > 35){streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase;}
});


console.log(legendLoL);
console.log(formatText);