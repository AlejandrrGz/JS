/*Dado el siguiente html y javascript, utiliza .filter() 
para mostrar por consola los streamers que 
incluyan la palabra introducida en el input. 
De esta forma, si introduzco 'Ru' me deberia de mostrar solo el 
streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

````js
const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];
```` */
const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

///////////// no filtra bien T.T


let input$$ = document.body.querySelector("input[data-function='toFilterStreamers']");
input$$.addEventListener("input", written)

function written() {
    let personGamer = streamers.filter(streamer => streamer.name.includes(this.value));
    console.log(personGamer);
}