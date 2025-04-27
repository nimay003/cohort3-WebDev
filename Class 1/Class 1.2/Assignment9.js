// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

function getEvenNum(arr){
    let newArr = [];

    for(let i = 0; i < arr.length; i++){ 
        if(arr[i] % 2 == 0){
            newArr.push(arr[i]);
        }
    }

    //for each loop
    // arr.forEach(x => {
    //     if(x % 2 == 0){
    //         newArr.push(x);
    //     }
    // })

    return newArr;
}

function getOddNum(arr) {
    return arr.filter(num => num % 2 != 0);
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenArr = getEvenNum(arr1);
const oddArr = getOddNum(arr1);

console.log(evenArr);
console.log(oddArr);
console.log(arr1);