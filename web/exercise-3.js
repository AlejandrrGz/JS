const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(totalNumbers) {
  let num=0;
  for(item of totalNumbers){
    num += item;
  }
  return num;
}

console.log(sumAll(numbers));