//Arrays
//Task: Write a JavaScript program that creates an array of 5 numbers, calculates the sum of all the numbers in the array,
//and prints the result

let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("Sum of all numbers:", sum); // Output: Sum of all numbers: 15


