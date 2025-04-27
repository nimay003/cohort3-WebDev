// Create a function that takes an array of objects as input,and returns the users whose age > 18 and are male
function adult(user){
    return Object.values(user).filter(user => user.age > 18 && user.gender == "male").map(user => user.name);
}

const users = {
    user1: {
        name: "Alice", 
        age: 22, 
        gender: "female" 
    },
    user2: { 
        name: "Bob", 
        age: 17, 
        gender: "male" 
    },
    user3: { 
        name: "Charlie", 
        age: 19, 
        gender: "male" 
    },
    user4: { 
        name: "David", 
        age: 16, 
        gender: "male" 
    },
    user5: { 
        name: "Eve", 
        age: 25, 
        gender: "female" 
    },
    user6: { 
        name: "Frank", 
        age: 30, 
        gender: "male" 
    }
};

console.log("Adults => " , adult(users));