//5. Toggle Visibility
//Task: Write a JavaScript function that toggles the visibility of an image on the page when a button is clicked. If the image is visible, it should become hidden, and vice versa.
//Hint: Use style.display and getElementById().



// const image = document.getElementById('toggleImage');
// const toggleButton = document.getElementById('toggleButton');
// function toggleVisibility() {
//     let image = document.getElementById('myImage');
//     if (image.style.display === 'none') {
//         image.style.display = 'block';
//     } else {
//         image.style.display = 'none';
//     }
// }



// Get references to the image and the button
const image = document.getElementById('toggleImage');
const toggleButton = document.getElementById('toggleButton');

// Add an event listener to the button to handle clicks
toggleButton.addEventListener('click', function() {
    // Check the current display style of the image
    if (image.style.display === 'none') {
        // If the image is hidden, show it
        image.style.display = 'block';
        // Update the button text
        toggleButton.textContent = 'Hide Image';
    } else {
        // If the image is visible, hide it
        image.style.display = 'none';
        // Update the button text
        toggleButton.textContent = 'Show Image';
    }
});
