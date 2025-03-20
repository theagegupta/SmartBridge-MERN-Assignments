// Question 1
let age = 25;
let isAdult = age >= 18 ? true : false;
console.log(isAdult);

//  Question 2
let x = 10;
let y = 5;
console.log(x + y); // addition
console.log(x * y); // multiplication
console.log(x % y); // modulus

// Question 3

const n = 29;
let result;

if (n % 2 == 0) result = "even";
else result = "odd";
console.log(result);

// Queston 4
let arr = [];

for (let i = 0; i < 5; i++) {
  arr[i] = i + 1;
}

console.log(arr);


// Question 5

let square = (num)=> num**2;
console.log(square(10));
