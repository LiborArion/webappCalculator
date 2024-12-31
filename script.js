// WebappCalculator ... https://github.com/LiborArion/webappCalculator/new/main
// MIT License
// Libor Ballaty

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to append value to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
