// Filter elements from an array that meet a certain condition using the `filter()` method.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

