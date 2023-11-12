const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numList) {
    let num=0;
  for(item of numList){
    num += item;
  }
  return num/numbers.length;
}


console.log(average(numbers));