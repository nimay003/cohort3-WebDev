// Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age){
    if(age > 18){
      return true;
    }
  
    return false;
  }
  
  let age = 2;
  
  console.log(canVote(age))