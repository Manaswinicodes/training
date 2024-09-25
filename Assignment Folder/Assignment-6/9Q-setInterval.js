//9. **Using `setInterval` with Promises:**
//   - Write a function called `repeatAction` that takes an action (a function), an interval (in milliseconds), and a duration (in
// milliseconds). Use `setInterval` to repeatedly execute the action at the specified interval, but stop after the specified
// duration. Return a Promise that resolves when the repeating action stops

function repeatAction(action, interval, duration) {
    let timeout;

    return new Promise((resolve) => {
        timeout = setInterval(() => {
            action();

            if (Date.now() >= duration) {
                clearInterval(timeout);
                resolve();
            }
        }, interval);
    });
}
async function doSomething() {
    console.log("Starting action...");

    await repeatAction(() => console.log("Doing something..."), 1000, 5000);

    console.log("Action finished.");
}

doSomething();
