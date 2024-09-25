//Write a function `checkAge` that takes an age as an argument and returns "Adult" if the age is 18 or above, and "Minor" if the age is below 18. Implement this using the ternary operator

function checkAge(age) {
  return age >= 18 ? "Adult" : "Minor";
}

console.log(checkAge(20)); // Output: "Adult"
console.log(checkAge(17)); // Output: "Minor"