let display = document.querySelector('.display');
let previousOperator = null;
let previousOperand = null;

function appendNumber(number) {
    display.textContent += number;
}

function appendOperator(operator) {
    if (previousOperator) {
        calculate();
    }
    previousOperator = operator;
    previousOperand = parseFloat(display.textContent);
    display.textContent += operator;
}

function calculate() {
    let currentOperand = parseFloat(display.textContent.substring(display.textContent.lastIndexOf(previousOperator) + 1));
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
        case '^2':
            result = previousOperand * previousOperand;
            break;
        case '√':
            result = Math.sqrt(previousOperand);
            break;
    }
    display.textContent = result;
    previousOperator = null;
    previousOperand = null;
}

function clearDisplay() {
    display.textContent = '';
    previousOperator = null;
    previousOperand = null;
}
