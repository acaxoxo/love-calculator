// Function to append a value (such as a number or operator) to the display
function appendToDisplay(value) {
    // Get the display element by its ID
    const display = document.getElementById('display');
    // Append the value to the current content of the display
    display.value += value;
}

// Function to evaluate the expression in the display
function calculate() {
    // Get the display element by its ID
    const display = document.getElementById('display');
    // Get the current value from the display
    const expression = display.value;
    
    // Check if the expression contains a valid arithmetic operation
    if (expression.match(/[0-9]+[+\-*/][0-9]+/)) {
        // If it matches, display a custom message instead of evaluating
        display.value = 'I love you';
    } else {
        try {
            // Evaluate the expression and update the display with the result
            display.value = eval(expression);
        } catch {
            // If there's an error in evaluation, show 'Error' in the display
            display.value = 'Error';
        }
    }
}

// Function to clear the content of the display
function clearDisplay() {
    // Get the display element by its ID
    const display = document.getElementById('display');
    // Set the display's value to an empty string to clear it
    display.value = '';
}