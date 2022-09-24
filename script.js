// maths
const add = function() {
    console.log('add');
    return num1+num2;
}
const subtract = function(num1, num2) {
    console.log('subtract');
    return num1-num2;
}
const multiply = function(num1, num2) {
    console.log('times');
}
const divide = function(num1, num2) {
    console.log('divide');
}
const power = function(num1, num2) {
    console.log('power');
    return Math.pow(num1, num2);
}
const equal = function(num1, num2) {
    console.log('equal');
}

// operate - takes 2 #' then call a function
const operate = function(equal) {
    // calls one of the add, subtract, multiply, or divide functions on the 2 #'s
}

// constants and eventListeners
const displayHTML = document.getElementById('display');

const clearBtnHTML = document.getElementById('clearBtn');

const zeroBtnHTML = document.getElementById('zeroBtn');
const oneBtnHTML = document.getElementById('oneBtn');
const twoBtnHTML = document.getElementById('twoBtn');
const threeBtnHTML = document.getElementById('threeBtn');
const fourBtnHTML = document.getElementById('fourBtn');
const fiveBtnHTML = document.getElementById('fiveBtn');
const sixBtnHTML = document.getElementById('sixBtn');
const sevenBtnHTML = document.getElementById('sevenBtn');
const eightBtnHTML = document.getElementById('eightBtn');
const nineBtnHTML = document.getElementById('nineBtn');

const decimalBtnHTML = document.getElementById('decimalBtn');

const addBtnHTML = document.getElementById('addBtn');
const subtractBtnHTML = document.getElementById('subtractBtn');
const multiplyBtnHTML = document.getElementById('multiplyBtn');
const divideBtnHTML = document.getElementById('divideBtn');
const powerBtnHTML = document.getElementById('powerBtn');
const equalBtnHTML = document.getElementById('equalBtn');

// update display

const displayStart = ['1','+','2'];
displayHTML.textContent = 
    displayStart[0] +
    displayStart[1] +
    displayStart[2] ;

// clear eventListener
clearBtnHTML.addEventListener('click', () => {
    displayHTML.textContent = "";
});

// number eventListeners
zeroBtnHTML.addEventListener('click', () => {
    displayHTML.textContent = zeroBtnHTML.value;
});
oneBtnHTML.addEventListener('click', () => {
    displayHTML.textContent = oneBtnHTML.value;
});
twoBtnHTML.addEventListener('click', () => {
    displayHTML.textContent = twoBtnHTML.value;
});
threeBtnHTML.addEventListener('click', () => {
    displayHTML.textContent = threeBtnHTML.value;
});
fourBtnHTML.addEventListener('click', () => {
    displayHTML.textContent = fourBtnHTML.value;
});
fiveBtnHTML.addEventListener('click', () => {
    displayHTML.textContent = fiveBtnHTML.value;
});
sixBtnHTML.addEventListener('click', () => {
    displayHTML.textContent = sixBtnHTML.value;
});
sevenBtnHTML.addEventListener('click', () => {
    displayHTML.textContent = sevenBtnHTML.value;
});
eightBtnHTML.addEventListener('click', () => {
    displayHTML.textContent = eightBtnHTML.value;
});
nineBtnHTML.addEventListener('click', () => {
    displayHTML.textContent = nineBtnHTML.value;
});

decimalBtnHTML.addEventListener('click', () => {
    displayHTML.textContent = decimalBtnHTML.value;
});

// maths eventListeners
addBtnHTML.addEventListener('click', () => {
    displayHTML.textContent = addBtnHTML.value;
    add();
});
subtractBtnHTML.addEventListener('click', () => {
    displayHTML.textContent = subtractBtnHTML.value;
    subtract();
});
multiplyBtnHTML.addEventListener('click', () => {
    displayHTML.textContent = multiplyBtnHTML.value;
    multiply();
});
divideBtnHTML.addEventListener('click', () => {
    displayHTML.textContent = divideBtnHTML.value;
    divide();
});
powerBtnHTML.addEventListener('click', () => {
    displayHTML.textContent = powerBtnHTML.value;
    power();
});
equalBtnHTML.addEventListener('click', () => {
    equal();
});