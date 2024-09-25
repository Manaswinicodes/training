// 6. **Chaining Promises:**
//- Create a function `delayedLogSequence` that takes an array of messages and delays (in milliseconds). The function
//should use Promises to log each message to the console in sequence, waiting for the specified delay between each log.

// function delayedLogSequence(messages, delay) {
//     return new Promise((resolve, reject) => {
//         let index = 0;
//         const logNextMessage = () => {
//             if (index < messages.length) {
//                 setTimeout(() => {
//                     console.log(messages[index]);
//                     index++;
//                     logNextMessage();
//                 }, delay);
//             } else {
//                 resolve();
//             }
//         };
//         logNextMessage();
        
//     })
// };

// // Example usage:

// delayedLogSequence(['Message 1', 'Message 2', 'Message 3'], 1000)
//     .then(() => console.log('All messages logged!'))
//     .catch(error => console.error('Error:', error));

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function delayedLogSequence(messages) {
    let promise = Promise.resolve();

    messages.forEach(([message, delay]) => {
        promise = promise.then(() => {
            console.log(message);
            return wait(delay); 
        });
    });

    return promise; 
}
const messages = [
    ["First message", 1000],   
    ["Second message", 2000],  
    ["Third message", 1500]    
];

delayedLogSequence(messages).then(() => {
    console.log('All messages have been logged in sequence!');
});



