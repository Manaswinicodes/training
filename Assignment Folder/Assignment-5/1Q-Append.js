//Create and Append Elements
//Task: Write a JavaScript function that creates a <div> element with a unique id and some text content. Append this div to the body of the document.
//Hint: Use document.createElement(), document.createTextNode(), and appendChild().

function createAndAppendDiv() {
    // Create a new div element
    var newDiv = document.createElement("div");

    // Generate a unique ID
    var uniqueId = 'ID :- ' +Math.floor(Math.random()*100000000000) ;
    newDiv.id = uniqueId;

    // Create some text content
    var textContent = document.createTextNode("This is a new div with ID: " + uniqueId);

    // Append the text to the new div
    newDiv.appendChild(textContent);

    // Append the new div to the body
    document.body.appendChild(newDiv);

    newDiv.style.backgroundColor = "#f0f0f0" ;  // Light gray background
    newDiv.style.border = "2px solid #000";    // Black border
    newDiv.style.padding = "10px";             // Padding inside the div
    newDiv.style.margin = "10px";              // Margin around the div
    newDiv.style.fontFamily = "Arial, sans-serif"; // Font style
    newDiv.style.display="flex";
    newDiv.style.justifyContent="center";
    newDiv.style.alignItems="center";
    newDiv.style.height="200px";
    newDiv.style.width="200px"
    newDiv.style.color="#000";
    




}

// Call the function to create and append the div
createAndAppendDiv();

// Test the function with different div contents

