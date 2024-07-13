let display = document.querySelector('.display');
let previousOperator = null;
let previousOperand = null;
let currentOperand = null;

function appendNumber(number) {
    if (display.textContent === 'NaN' || display.textContent === 'Infinity') {
        display.textContent = '';
    }
    display.textContent += number;
}

function appendOperator(operator) {
    if (previousOperator && currentOperand !== null) {
        calculate();
    }
    previousOperator = operator;
    previousOperand = parseFloat(display.textContent);
    display.textContent = '';
}

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
            result = previousOperand % currentOperand;
            break;
    }
    display.textContent = result;
    previousOperator = null;
    previousOperand = null;
    currentOperand = null;
}

function clearDisplay() {
    display.textContent = '';
    previousOperator = null;
    previousOperand = null;
    currentOperand = null;
}

function square() {
    let value = parseFloat(display.textContent);
    display.textContent = value * value;
}

function squareRoot() {
    let value = parseFloat(display.textContent);
    if (value >= 0) {
        display.textContent = Math.sqrt(value);
    } else {
        display.textContent = 'NaN';
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.querySelector('.calculator').classList.toggle("dark-mode");
    document.querySelector('.display').classList.toggle("dark-mode");
    document.querySelectorAll('button').forEach(button => {
        button.classList.toggle("dark-mode");
    });
}
