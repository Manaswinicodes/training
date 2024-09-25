// 3. **Clearing Intervals:**
//- Extend the `countdown` function from the previous question to also accept a callback function that gets executed
//when the countdown reaches zero. Ensure the interval is cleared after the countdown completes.

function countdown(number){
    const interval = setInterval(() => {
        console.log(number);
        number--;
        if(number <=2){
            clearInterval(interval);
            console.log("Mern Stack")
        }
        
    }, 1000);
        
    }
    countdown(10);  

