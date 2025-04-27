// Also tell the user if they are legal to vote or not

function greetUser(user) {
    let title = "";

    if(user.gender === "male"){
        title = "Mr.";
    } else if(user.gender === "female"){
        title = "Mrs.";
    } else {
        title = "Mx.";
    }

    let vote = (user.age >= 18) ? "You are able to vote" : "Yor aren't able to vote";

    console.log(`Hi ${title} ${user.name}, your age is ${user.age}. ${vote}.`);
}

let user1 = {
    name: "Nimay",
    age: 21,
    gender: "male"
}
greetUser(user1);

let user2 = {
    name: "Harsh",
    age: 18,
    gender: "gay"
}
greetUser(user2);

let user3 = {
    name: "Vanshu",
    age: 15,
    gender: "female"
}
greetUser(user3);