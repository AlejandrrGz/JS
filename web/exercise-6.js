function removeDuplicates(lista) {
    let cleanList = [];
    for (element of lista) {
      if (!cleanList.includes(element)) {
        cleanList.push(element);
      }
    }
    return cleanList;
  }
  


const duplicates = [
    "sushi",
    "pizza",
    "burger",
    "potatoe",
    "pasta",
    "ice-cream",
    "pizza",
    "chicken",
    "onion rings",
    "pasta",
    "soda",
  ];
  console.log(removeDuplicates(duplicates));
  
