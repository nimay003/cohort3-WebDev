// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

function adult(arr){
    let newArr = [];

    arr.forEach(x => {
        if(x.age >= 18){
            newArr.push(x.name);
        }
    })

    return newArr;
}

function notAdult(users) {
    return users.filter(user => user.age < 18).map(user => user.name); 
}

const user = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
    { name: "David", age: 16 },
    { name: "Eve", age: 25 }
];

console.log("Adults => " + adult(user));
console.log("Minors => " , notAdult(user));