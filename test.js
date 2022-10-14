function findEvenNumber() {
    let arr = [];
    for(let i=1;i<51;i++){
        i%2===0 && arr.push(i);
    }
    return arr;
}

