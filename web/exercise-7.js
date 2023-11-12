function finderName(nameList, nameToSearch){
    const nameIndex = nameList.indexOf(nameToSearch);
    if(nameIndex === -1){
        return false;
    } else{
        return {
            found: true,
            index: nameIndex
        };
    }
}

const nameFinder = [
    "Peter",
    "Steve",
    "Tony",
    "Natasha",
    "Clint",
    "Logan",
    "Xabier",
    "Bruce",
    "Peggy",
    "Jessica",
    "Marc",
];
console.log(finderName(nameFinder, 'Tony'));
console.log(finderName(nameFinder, 'Fede'));