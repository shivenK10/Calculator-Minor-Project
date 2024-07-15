// Get the display element
let display = document.querySelector('.display');
let previousOperator = null;
let previousOperand = null;
let currentOperand = null;

// Function to append a number to the display
function appendNumber(number) {
    // Clear display if it shows 'NaN' or 'Infinity'
    if (display.textContent === 'NaN' || display.textContent === 'Infinity') {
        display.textContent = '';
    }
    display.textContent += number;
}

// Function to append an operator to the display
function appendOperator(operator) {
    // Perform calculation if there is a previous operator and current operand is not null
    if (previousOperator && currentOperand !== null) {
        calculate();
    }
    previousOperator = operator;
    previousOperand = parseFloat(display.textContent);
    display.textContent = '';
}

// Function to calculate the result based on the previous operator
function calculate() {
    currentOperand = parseFloat(display.textContent);
    let result = 0;
    switch (previousOperator) {
        case '+':
            result = previousOperand + currentOperand;
            break;
        case '-':
            result = previousOperand - currentOperand;
            break;
        case '*':
            result = previousOperand * currentOperand;
            break;
        case '/':
            result = previousOperand / currentOperand;
            break;
        case '%':
            result = previousOperand * (currentOperand / 100);
            break;
    }
    display.textContent = result;
    previousOperator = null;
    previousOperand = null;
    currentOperand = null;
}

// Function to clear the display
function clearDisplay() {
    display.textContent = '';
    previousOperator = null;
    previousOperand = null;
    currentOperand = null;
}

// Function to square the current value
function square() {
    let value = parseFloat(display.textContent);
    display.textContent = value * value;
}

// Function to calculate the square root of the current value
function squareRoot() {
    let value = parseFloat(display.textContent);
    if (value >= 0) {
        display.textContent = Math.sqrt(value);
    } else {
        display.textContent = 'NaN';
    }
}

// Function to convert the current value to a percentage
function percent() {
    let value = parseFloat(display.textContent);
    display.textContent = value / 100;
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.querySelector('.calculator').classList.toggle("dark-mode");
    document.querySelector('.display').classList.toggle("dark-mode");
    document.querySelectorAll('button').forEach(button => {
        button.classList.toggle("dark-mode");
    });
}
