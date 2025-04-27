// Write a function(Object) that takes a user as an input and greets them with their name and age

function greet(user){
    console.log(`Hello ${user.name}! your age is ${user.age}.`)
}

let user1 = {
    name: "Nimay",
    age: 21
}

greet(user1);