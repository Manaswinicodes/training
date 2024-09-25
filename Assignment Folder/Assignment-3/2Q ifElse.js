//Write a JavaScript program that checks if a number is positive, negative, or zero. Print 'Positive', 'Negative', or 'Zero' accordingly.
const prompt=require('prompt-sync')();
let number = prompt("Please enter your name", "Harry Potter");
if (number > 0) {
    console.log('Positive');
} else if (number < 0) {
    console.log('Negative');
} else {
    console.log('Zero');
}

// Output: Positive

