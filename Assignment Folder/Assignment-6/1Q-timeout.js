//1. **Basic `setTimeout`:**
// - Write a function called `delayedMessage` that takes a message and a delay (in milliseconds) as arguments.
// Use setTimeout` to log the message to the console after the specified delay

function delayedMessage(message, delay) {
  setTimeout(() => {
    console.log(message);
  }, delay);
}

delayedMessage("Techno India BJR", 3000); // Logs "Hello, World!" after 3 seconds
