function findEven(arr) {
    let evenArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArray.push(arr[i])
        }
    }
    return evenArray
}

console.log(findEven([1, 2, 3, 4, 5, 6]))