/*
En base al ejercicio anterior, 
crea un botón con el texto 'X' 
para cada uno de los p que hayas insertado y 
que si el usuario hace click en este botón eliminemos el parrafo 
asociado.
*/
const baseUrl = 'https://api.nationalize.io?name=';
/*
const getData = async (info) => {
    try {let response = await fetch(baseUrl + info);
        let data = await response.json();
        return data;
    } catch(error) {
        console.error("No hemos podido hacer la peticion", error);
    }
}
*/
const inputValue = async (info) => {
    try {let dataResponse = await fetch(baseUrl + info);
        let resultName = await dataResponse.json();
        return resultName;
    } catch(error) {
        console.error("Pues va a ser que no!!! ", error);
    }
}
/*
let button$$ = document.querySelector("button");
button$$.addEventListener("click", loggingData);*/
let button$$ = document.querySelector("button");
button$$.addEventListener("click", enteredData);

function pDelete() {
    return this.parentNode.parentNode.removeChild(this.parentNode);
}
/*
async function loggingData() {
    let input$$ = document.querySelector("input");
    let data = await getData(input$$.value);*/
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

    document.body.appendChild(p$$);
    let delete$$ = document.createElement("button");
    delete$$.textContent = "Delete";
    p$$.appendChild(delete$$);
    

    delete$$.addEventListener("click", pDelete);
}