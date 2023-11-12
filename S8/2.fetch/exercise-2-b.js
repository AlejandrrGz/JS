/*
En base al ejercicio anterior. 
Crea dinamicamente un elemento <p> por cada petición a la api 
que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.

EJ: El nombre Abel tiene un 22 porciento de ser de ET 
y un 6 porciento de ser de MZ.
*/
const baseUrl = 'https://api.nationalize.io?name=';

const inputValue = async (info) => {
    try {let dataResponse = await fetch(baseUrl + info);
        let resultName = await dataResponse.json();
        return resultName;
    } catch(error) {
        console.error("Pues va a ser que no!!! ", error);
    }
}
let button$$ = document.querySelector("button");
button$$.addEventListener("click", enteredData);
async function enteredData() {
    let input$$ = document.querySelector("input");
    let data = await inputValue(input$$.value);


    p$$ = document.createElement("p");
    p$$.textContent = "";
    let target = data.country;
    
    for (let i = 0; i < target.length; i++) {
        if (i === 0) {
            p$$.textContent += `${input$$.value} tiene un ${target[i].probability * 100} de ser ${target[i].country_id}`;
        } else if (i !== 0 && i !== (target.length - 1)) {
            p$$.textContent += ` , un ${target[i].probability * 100} de ser ${target[i].country_id}`;
        } else {
            p$$.textContent += ` y un ${target[i].probability * 100} de ser ${target[i].country_id}`;
        }
    }

    return document.body.appendChild(p$$);
}