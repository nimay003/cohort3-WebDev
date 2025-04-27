// Write a function called sum that finds the sum from 1 to a number

function sum(num1){
    let total = 0;
    
    for(let i = 0; i < num1; i++){
      total += i;
    }
  
    console.log(total);
  }
  
  let num = 9;
  
  sum(num);