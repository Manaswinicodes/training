// 8. **Combining `setTimeout` and Promises:**
//- Create a function called `randomDelayMessage` that logs a message to the console after a random delay between 1
//and 5 seconds. Use `setTimeout` and a Promise to implement this.

function randomDelayMessage(message) {
  const delay = Math.floor(Math.random() * 4001) + 500; 

    return new Promise(resolve => setTimeout(resolve, delay))
    .then(() => console.log("Random  ",message,delay));
}





randomDelayMessage("First message", 1000);

randomDelayMessage("Second message", 2000);

randomDelayMessage("Third message", 3000);

randomDelayMessage("fourth message", 4000);

randomDelayMessage("Fifth message", 5000);

