const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(list) {
    let total = 0;
    for (let item of list) {
        let elementType = typeof item;
        if(elementType ==='number'){
            total += item;
        } else if(elementType === 'string') {
            total += item.lenght;
        } else {
            console.error('Element not defined');
        }
    }
    return total;
}

console.log(averageWord(mixedElements));