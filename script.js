// constants (eventListeners at bottom)
const divideBtnHTML = document.getElementById('divideBtn');
const multiplyBtnHTML = document.getElementById('multiplyBtn');
const subtractBtnHTML = document.getElementById('subtractBtn');
const addBtnHTML = document.getElementById('addBtn');
const equalBtnHTML = document.getElementById('equalBtn');

const operatorHTML = document.querySelectorAll('.operator');

const clearBtnHTML = document.getElementById('clearBtn');
const deleteBtnHTML = document.getElementById('deleteBtn');

const decimalBtnHTML = document.getElementById('decimalBtn');

const displayHTML = document.getElementById('display');
const previousNum = document.querySelector("#previousNum");

const stringNumHTML = document.querySelectorAll('.number');

// initialize and update display

let num1 = ''
let num2 = ''
let operator = ''
let result = ''

displayHTML.textContent = ''
previousNum.textContent = ''

// button and operator eventListeners
stringNumHTML.forEach((button) => {
    button.addEventListener('click', () => {
        if (displayHTML.textContent.includes('.')) {
            decimalBtnHTML.disabled = true;
            displayHTML.textContent += button.textContent;
            return displayHTML.textContent;
        } else if (displayHTML.textContent === '') {
            displayHTML.textContent = button.textContent;
            return displayHTML.textContent;
        } else {
            displayHTML.textContent += button.textContent;
            return displayHTML.textContent;
        }
    })
});

operatorHTML.forEach((button) => {
    button.addEventListener('click', () => {
        decimalBtnHTML.disabled = false;
        if (num1 === 'NaN') {
            return clear();
        } else if (result !== '') {
            display.style.fontSize = '80px';
            num1 = displayHTML.textContent;
            operator = button.textContent;
            result = '';
            return previousNum.textContent = `'  ${num1} ${operator}`, displayHTML.textContent = '';
        } else if (num1 === '') {
            display.style.fontSize = '80px';
            num1 = displayHTML.textContent;
            operator = button.textContent;
            return previousNum.textContent = `'  ${num1} ${operator}`, displayHTML.textContent = '';
        } else if (num1 !== '') {
            num2 = displayHTML.textContent;
            previousNum.textContent = `'  ${num1} ${operator} ${num2} =`
            result = (equal(Number(num1), operator, Number(displayHTML.textContent)));
            if (result.length >= 22) {
                display.style.fontSize = '30px';
                return displayHTML.textContent = Number(result);
            } else if (result.length >= 16) {
                display.style.fontSize = '40px';
                return displayHTML.textContent = Number(result);
            } else if (result.length >= 13) {
                display.style.fontSize = '50px';
                return displayHTML.textContent = Number(result);
            } else if (result.length >= 10) {
                display.style.fontSize = '60px';
                return displayHTML.textContent = Number(result);
            } else {
                return displayHTML.textContent = Number(result);
        } 
    }
})
})

// special operator eventListeners
equalBtnHTML.addEventListener('click', () => {
    equal(num1, operator, num2);
});
clearBtnHTML.addEventListener('click', () => {
    clear();
});
deleteBtnHTML.addEventListener('click', () => {
    deleteMe();
});

// functions
const clear = function() {
    displayHTML.textContent = ''
    previousNum.textContent = ''
    num1 = ''
    num2 = ''
    operator = ''
    result = ''
}

const deleteMe = function() {
    displayHTML.textContent = displayHTML.textContent.toString().slice(0, -1); 
}

// maths functions
const add = function(num1, num2) {
    return (+num1 + +num2).toFixed(3);
}
const subtract = function(num1, num2) {
    return (+num1 - +num2).toFixed(3);
}
const multiply = function(num1, num2) {
    return (+num1 * +num2).toFixed(3);
}
const divide = function(num1, num2) {
    return (+num1 / +num2).toFixed(3);
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
            if (num2 === 0) return 'NaN'
            else return divide(num1, num2)
    }
}