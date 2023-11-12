/*Usa un foin para imprimir por consola los datos del alienigena.*/
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for(let data in alien){
    console.log(data +': ' + alien[data])
}