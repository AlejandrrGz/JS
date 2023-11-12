/*Inserta dinamicamente con javascript
en un html una p con el texto 'Soy dinámico!'.*/
const p = document.createElement("p");
document.body.appendChild(p);
document.body.appendChild(p);
document.querySelector('p').innerText="Soy dinámico!"