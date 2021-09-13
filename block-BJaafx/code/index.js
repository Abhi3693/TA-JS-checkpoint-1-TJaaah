//1. Using loops take 10 inputs from user and find the average of all the numbers.

let sum = 0
for ( let i = 0 ; i < 10 ; i++ ) {
    let input = +prompt("Enter number");
    sum = sum + input ;
} let average = sum / 10 ;
console.log(average);






//2. What will be the output of the code below


let i = 0;
while (i < 3) {
  println = 'hi';  
  i++;  
}




// 3. Write a function named `getEvenSum` that accepts a parameter `max`. Return the sum of all even numbers. The value of max should default to 10.

let sum = null;

function getEvenSum( max = 10 ) {
    for ( let i = 10; i <= max; i++ ) {
        if ( i % 2 === 0 ) {
            sum = sum + i ;
        } 
    } console.log(sum)
}
getEvenSum(40);







//4. Write a function named `getOddSum` that accepts a parameter `max`. Return the sum of all odd numbers. The value of max should default to 10.


let sum1 = null;

function getOddSum( max = 10 ) {
    for ( let i = 10; i <= max; i++ ) {
        if ( i % 2 !== 0 ) {
            sum1 = sum1 + i ;
        } 
    } console.log(sum1)
}
getOddSum(20);




//5. Write a function named `getProductOfDigits` that accepts a parameter `num`. It returns the product of all the digits in the number.



















//6. What will be the output of the following code below in multiple conditions? Explain with reason?


function check(num) {
  if (num > 5) {
    return 'Bigger than 5';
  }

  if (num < 5) {
    return 'Smaller than 5';
  }
  return num;
}

check(10); // bigger than 5;
check(1); // smaller than 5;
check(5); // "5";

// Here two condition are given condition for greater than 5 and condition for lesser than 5 and for remaining return should be num which is entered. so 5 is coming into remaining and output is coming string 5.






// 7. What will be the output of the following code given below? Explain the reason?


function getOutput(name) {
  if (name === 'Arya') return 'You are arya';
  if (name === 'John') return 'You are john';
  return 'Who are you';
}

getOutput('Arya'); // "You are arya"
getOutput('John'); // 'You are john'
getOutput(); // 'Who are you'

// for first two condition return is given and for all other value condition is given "Who are you?"




// 8. What will be the output of the following code given below? Explain the reason?


function getOutput(name) {
    if (name === 'Arya') console.log('You are arya');
    if (name === 'John') console.log('You are john');
    return 'Who are you';
  }
  
  getOutput('Arya'); // It will display You are Arya and will return value will be Who are because return value for all is same.
  getOutput('John'); // It will display You are john and will return value will be Who are because return value for all is same.
  getOutput(); // "Who are you"

 



  // 9. Can a function have multiple return statement? Give one example if possible and explain the reason.

  // The body of a function should have only one return statement. 
  // The body of a function may have many return statements. 
  // if apply condition inside the function and can give multiple return statement however only one from them is going to execute.




  //