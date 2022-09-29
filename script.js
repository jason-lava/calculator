// constants (eventListeners at bottom)
const displayHTML = document.getElementById('display');

const clearBtnHTML = document.getElementById('clearBtn');

const decimalBtnHTML = document.getElementById('decimalBtn');

const addBtnHTML = document.getElementById('addBtn');
const subtractBtnHTML = document.getElementById('subtractBtn');
const multiplyBtnHTML = document.getElementById('multiplyBtn');
const divideBtnHTML = document.getElementById('divideBtn');
const powerBtnHTML = document.getElementById('powerBtn');
const equalBtnHTML = document.getElementById('equalBtn');

// initialize and update display
let num1 = ''
let num2 = ''
let operator = ''

let displayValue = ''

displayHTML.textContent = ''

// button and operator eventListeners
const stringNumHTML = document.querySelectorAll('.number');

stringNumHTML.forEach((button) => {
    button.addEventListener('click', () => {
        if (displayHTML.textContent === '') {
            displayValue = button.textContent;
            return displayHTML.textContent = displayValue;
        } else {
            displayValue += button.textContent
            return displayHTML.textContent = displayValue
        }
    })
});

const storedNum = document.querySelector("#previousNum");
storedNum.textContent = num1;

const operatorHTML = document.querySelectorAll('.operator');

operatorHTML.forEach((button) => {
    button.addEventListener('click', () => {
        if (num1 === '') {
            num1 = displayValue;
            operator = button.textContent;
            return displayHTML.textContent = displayValue, storedNum.textContent = `${num1} ${operator}`;
        } else if (displayValue === 0 && operator === '/') {
            return null
        } else if (num1 !== '') {
            num1 = equal(num1, operator, Number(displayValue));
            num1 = +num1;
            operator = button.textContent;
            return storedNum.textContent = `${num1} ${operator}`;
        }
    })
})

// maths functions
const add = function(num1, num2) {
    return num1 + num2;
}
const subtract = function(num1, num2) {
    return num1 - num2;
}
const multiply = function(num1, num2) {
    return num1 * num2;
}
const divide = function(num1, num2) {
    return num1 / num2;
}
const power = function(num1, num2) {
    return Math.pow(num1, num2);
}
const equal = function(num1, operator, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
    switch (operator) {
        case '+':
            return add(num1, num2)
        case '-':
            return subtract(num1, num2)
        case 'x':
            return multiply(num1, num2)
        case '/':
            if (num2 ===0) return null
            else return divide(num1, num2)
        case '^':
            return power(num1, num2)
    }
}

// operator and clear functions

const clear = function() {
    displayHTML.textContent = ''
}

// operator eventListeners
equalBtnHTML.addEventListener('click', () => {
    equal(num1, operator, num2);
});
clearBtnHTML.addEventListener('click', () => {
    clear();
});