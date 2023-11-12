const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(word) {
    let longWord = '';
    for(let item of word){
        if(item.length>longWord.length){
            longWord=item
        }
    }
    return longWord;
};


  console.log(findLongestWord(avengers));