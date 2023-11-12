/*
Añade un botón a tu html con el id btnToClick
y en tu javascript añade el evento click que ejecute un console log
con la información del evento del click
*/
let clickButton = document.createElement("button");
clickButton.id = "btnToClick";
document.body.appendChild(clickButton);

function dataEvent(evt) {
    console.log(evt);
}

document.getElementById("btnToClick").addEventListener("click", dataEvent);
