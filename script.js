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
let result = ''

displayHTML.textContent = ''

// button and operator eventListeners
const stringNumHTML = document.querySelectorAll('.number');

stringNumHTML.forEach((button) => {
    button.addEventListener('click', () => {
        if (displayHTML.textContent === '') {
            displayHTML.textContent = button.textContent;
            return displayHTML.textContent;
        } else {
            displayHTML.textContent += button.textContent
            return displayHTML.textContent;
        }
    })
});

const previousNum = document.querySelector("#previousNum");

previousNum.textContent = ''

const operatorHTML = document.querySelectorAll('.operator');

operatorHTML.forEach((button) => {
    button.addEventListener('click', () => {
        if (operator === '/' && num2 === 0) {
            return displayHTML.textContent = 'no';
        } if (result !== '') {
            num1 = displayHTML.textContent;
            operator = button.textContent;
            result = '';
            return previousNum.textContent = `'  ${num1} ${operator}`, displayHTML.textContent = '';
        } if (num1 === '') {
            num1 = displayHTML.textContent;
            operator = button.textContent;
            return previousNum.textContent = `'  ${num1} ${operator}`, displayHTML.textContent = '';
        } if (num1 !== '') {
            num2 = displayHTML.textContent;
            previousNum.textContent = `'  ${num1} ${operator} ${num2} =`
            result = equal(Number(num1), operator, Number(displayHTML.textContent)); 
            return displayHTML.textContent = result;
        } 
    })
})

// operator and clear functions
const clear = function() {
    displayHTML.textContent = ''
    previousNum.textContent = ''
    num1 = ''
    num2 = ''
    operator = ''
    result = ''
}

// operator eventListeners
equalBtnHTML.addEventListener('click', () => {
    equal(num1, operator, num2);
});
clearBtnHTML.addEventListener('click', () => {
    clear();
});

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