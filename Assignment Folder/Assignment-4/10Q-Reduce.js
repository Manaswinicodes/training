// Write a program that calculates a single value from an array using the `reduce()` method.


let numbers = [1, 2, 3, 4, 5];

// Example output: The sum of the elements in the array is 15.

let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(`The sum of the elements in the array is ${sum}.`);

// Solution:

 sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(`The sum of the elements in the array is ${sum}.`); // Output: The sum of the elements in the array is 15.

// Note: The solution uses the `reduce()` method to iterate through each element in the array, adding it to the accumulator. The accumulator starts with 0 and is updated with each iteration. Finally, the sum is logged to the console.
