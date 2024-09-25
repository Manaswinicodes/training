//Form Input Validation
// Task: Create a simple form with an input field for a user's name and a submit button. Write JavaScript code to validate that the input is not empty before allowing the form to submit. If the input is empty, display an error message below the input field.
// Hint: Use addEventListener() to handle the form submission and prevent default behavior using event.preventDefault() if the input is invalid.

// HTML

// Get the form element
const form = document.getElementById('nameForm');

// Get the input element
const usernameInput = document.getElementById('username');

// Get the error message element
const errorMessage = document.getElementById('error-message');

// Add an event listener to handle form submission
form.addEventListener('submit', function(event) {
    // Clear any previous error messages
    errorMessage.textContent = '';

    // Check if the input is empty
    if (usernameInput.value.trim() === '') {
        // Prevent the form from submitting
        event.preventDefault();

        // Display an error message
        errorMessage.textContent = 'Please enter your name.';
    }
});
