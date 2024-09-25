//Write a function `isBetweenOneAndTen` that takes a number as an argument and returns `true` if the number is between 1 and 10 (inclusive), otherwise `false`.

function isBetweenOneAndTen(number) {
    return number >= 1 && number <= 10;
}

console.log(isBetweenOneAndTen(1));  // Output will be true

console.log(isBetweenOneAndTen(10));  // Output will be true

console.log(isBetweenOneAndTen(0));  // Output will be false

console.log(isBetweenOneAndTen(11));  // Output will be false

console.log(isBetweenOneAndTen(-1));  // Output will be false

console.log(isBetweenOneAndTen(10.5));  // Output will be false

console.log(isBetweenOneAndTen(1));  // Output will be true

console.log(isBetweenOneAndTen(10));  // Output will be true

console.log(isBetweenOneAndTen(5));  // Output will be true


console.log(isBetweenOneAndTen(15));  // Output will be false







