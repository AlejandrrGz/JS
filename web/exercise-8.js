function repeatCounter (paramList){
    let elementCounter = {};
    for(element of paramList){
        if (!elementCounter.hasOwnProperty(element)){
            elementCounter[element] = 0;
        }
        elementCounter[element]+=1;
    }
    return elementCounter;
}
const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  console.log(repeatCounter(counterWords));
  