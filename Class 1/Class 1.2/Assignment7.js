// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greetUser(user) {
    let title = "";

    if(user.gender === "male"){
        title = "Mr.";
    } else if(user.gender === "female"){
        title = "Mrs.";
    } else {
        title = "Mx.";
    }

    console.log(`Hi ${title} ${user.name}, your age is ${user.age}`);
}

let user1 = {
    name: "Nimay",
    age: 21,
    gender: "male"
}
greetUser(user1);

let user2 = {
    name: "Harsh",
    age: 22,
    gender: "male"
}
greetUser(user2);

let user3 = {
    name: "Vanshu",
    age: 18,
    gender: "female"
}
greetUser(user3);