//Write a function `isEven` that takes a number as an argument and returns "Even" if the number is even, and "Odd" if the number is odd.

function isEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }

    
}

console.log(isEven(10)); // Output: Even
console.log(isEven(11)); // Output: Odd

