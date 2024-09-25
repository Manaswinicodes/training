// /7. **Using `async/await` with Promises:**
//- Rewrite the `delayedLogSequence` function using `async/await` instead of chaining `.then()` methods. Ensure the
//function logs each message with the specified delay

async function delayedLogSequence(messages, delay) {
  for (const message of messages) {
    await new Promise(resolve => setTimeout(resolve, delay));
    console.log(message);
  }
}

delayedLogSequence(["Message 1", "Message 2", "Message 3"], 2000);
