/*
Dado el siguiente javascript y html. 
Añade la funcionalidad necesaria usando fetch() 
para hacer una consulta a la api cuando se haga 
click en el botón, pasando como parametro de la api, 
el valor del input.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text">
    <button>Consultar</button>
</body>
</html>
```

```js
const baseUrl = 'https://api.nationalize.io?name=';
```
*/
/*
const baseUrl = 'https://api.nationalize.io?name=';

const imputValue = document.querySelector('input');
const consultButton = document.querySelector('button');
consultButton.addEventListener('click', dataFecth);

async function dataFecth() {
    let urlData = baseUrl + imputValue.value;
    const dataResponse = await fetch(urlData);
    const resultName = await dataResponse.json();
    console.log(resultName);
}
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
    let resultName = await inputValue(input$$.value);
    console.log(resultName);
}
