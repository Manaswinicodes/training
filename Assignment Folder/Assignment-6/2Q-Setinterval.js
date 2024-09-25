//2. **Basic `setInterval`:**
//- Create a function called `countdown` that takes a number as an argument. Use `setInterval` to log the countdown
//from that number to zero, decrementing by 1 every second. Stop the interval when it reaches zero

// function countdown(number) {
//     const intervalId = setInterval(() => {
//         console.log(number);
//         number--;

//         if (number < 0) {
//             clearInterval(intervalId);
//             console.log('Countdown finished!');
//         }
//     }, 1000);
// }
// countdown(10);  // This will log numbers from 10 to 0,

function countdown(number) {
  const interval = setInterval(() => {
    console.log(number);
    number++;
    if (number > 10) {
      clearInterval(interval);
      console.log("Mern Stack");
    }
  }, 1000);
}
countdown(0); // 0  to   10    count ,,
