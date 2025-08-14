// Calculator functions
let currentValue = '';
let previousValue = '';
let operation = null;

// Memory and constants
let memoryValue = 0;
const CONSTANTS = {
    PI: Math.PI,
    E: Math.E,
    G: 9.81, // gravitational acceleration
    C: 299792458, // speed of light
};

function appendNumber(number) {
    if (number === '.' && currentValue.includes('.')) return;
    currentValue += number;
    updateDisplay();
    document.getElementById('expression-display').value = currentValue;
}

function setOperation(op) {
    if (currentValue === '') return;
    if (previousValue !== '') {
        calculate();
    }
    operation = op;
    previousValue = currentValue;
    currentValue = '';
    document.getElementById('expression-display').value = `${previousValue} ${getOperationSymbol(op)}`;
    updateDisplay();
}

// Memory functions
function memoryAdd() {
    memoryValue += parseFloat(currentValue || '0');
}

function memorySubtract() {
    memoryValue -= parseFloat(currentValue || '0');
}

function memoryRecall() {
    currentValue = memoryValue.toString();
    updateDisplay();
}

function memoryClear() {
    memoryValue = 0;
}

// Advanced math functions
function square() {
    if (currentValue === '') return;
    const num = parseFloat(currentValue);
    currentValue = Math.pow(num, 2).toString();
    updateDisplay();
}

function squareRoot() {
    if (currentValue === '') return;
    const num = parseFloat(currentValue);
    if (num < 0) {
        alert('Cannot calculate square root of a negative number!');
        return;
    }
    currentValue = Math.sqrt(num).toString();
    updateDisplay();
}

function powerY() {
    if (currentValue === '') return;
    setOperation('power');
}

function logarithm() {
    if (currentValue === '') return;
    const num = parseFloat(currentValue);
    if (num <= 0) {
        alert('Cannot calculate logarithm of zero or negative numbers!');
        return;
    }
    currentValue = Math.log10(num).toString();
    updateDisplay();
}

function naturalLog() {
    if (currentValue === '') return;
    const num = parseFloat(currentValue);
    if (num <= 0) {
        alert('Cannot calculate natural logarithm of zero or negative numbers!');
        return;
    }
    currentValue = Math.log(num).toString();
    updateDisplay();
}

// Trigonometric functions
function sin() {
    if (currentValue === '') return;
    const num = parseFloat(currentValue);
    currentValue = Math.sin(num * Math.PI / 180).toString(); // assuming degrees
    updateDisplay();
}

function cos() {
    if (currentValue === '') return;
    const num = parseFloat(currentValue);
    currentValue = Math.cos(num * Math.PI / 180).toString(); // assuming degrees
    updateDisplay();
}

function tan() {
    if (currentValue === '') return;
    const num = parseFloat(currentValue);
    currentValue = Math.tan(num * Math.PI / 180).toString(); // assuming degrees
    updateDisplay();
}

// Constants functions
function insertPi() {
    currentValue = CONSTANTS.PI.toString();
    updateDisplay();
}

function insertE() {
    currentValue = CONSTANTS.E.toString();
    updateDisplay();
}

function insertG() {
    currentValue = CONSTANTS.G.toString();
    updateDisplay();
}

function reciprocal() {
    if (currentValue === '') return;
    const num = parseFloat(currentValue);
    if (num === 0) {
        alert('Cannot calculate reciprocal of zero!');
        return;
    }
    currentValue = (1 / num).toString();
    updateDisplay();
}

function handleExp() {
    if (currentValue === '') return;
    if (currentValue.includes('e')) return;
    setOperation('EXP');
}

// Extend calculate function to handle new operations
function calculate() {
    if (previousValue === '' || currentValue === '') return;
    
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    const expression = `${previousValue} ${getOperationSymbol(operation)} ${currentValue}`;
    
    let result;
    switch(operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('Cannot divide by zero!');
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        case 'power':
            result = Math.pow(prev, current);
            break;
        case 'EXP':
            result = prev * Math.pow(10, current);
            break;
        default:
            return;
    }
    
    currentValue = result.toString();
    document.getElementById('expression-display').value = expression; // Keep showing the expression
    operation = null;
    previousValue = '';
    updateDisplay();
}

function getOperationSymbol(op) {
    switch(op) {
        case '+': return '+';
        case '-': return '−';
        case '*': return '×';
        case '/': return '÷';
        case 'power': return '^';
        case 'EXP': return '×10^';
        default: return op;
    }
}

function clearDisplay() {
    currentValue = '';
    previousValue = '';
    operation = null;
    document.getElementById('display').value = '0';
    document.getElementById('expression-display').value = '';
}

// Update display function to handle scientific notation
function updateDisplay() {
    const mainDisplay = document.getElementById('display');
    let valueToDisplay = currentValue || '0';
    
    // Convert to scientific notation if number is very large or small
    const num = parseFloat(valueToDisplay);
    if (Math.abs(num) >= 1e10 || (Math.abs(num) < 1e-7 && num !== 0)) {
        valueToDisplay = num.toExponential(8);
    }
    
    mainDisplay.value = valueToDisplay;
}