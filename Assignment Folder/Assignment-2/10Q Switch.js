//Create a function `getDayType` that takes a number (1-7) as an argument and returns:
// - "Weekend" if the number is 6 (Saturday) or 7 (Sunday),
 //- "Weekday" if the number is between 1 and 5.
 //Use a `switch` statement to implement this logic


//--------------------------------------------------------------------------------------------
function getDayType(dayNumber) {
    switch (dayNumber) {
        case 6:
            return "Weekend";
        case 5:
        case 7:
            return "Weekend";
        default:
            return "Weekday";
    }
}



console.log(getDayType(1)); // Output: "Weekday"
console.log(getDayType(6)); // Output: "Weekend"
console.log(getDayType(8)); // Output: "Weekday" 


