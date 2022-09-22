// maths
const add = function() {
    console.log('add');
}
const subtract = function(num1, num2) {
    console.log('subtract');
}
const multiply = function(num1, num2) {
    console.log('times');
}
const divide = function(num1, num2) {
    console.log('divide');
}
const power = function(num1, num2) {
    console.log('power');
}
const equal = function(num1, num2) {
    console.log('equal');
}

// operate - takes 2 #' then call a function
const operate = function(equal) {
    // calls one of the add, subtract, multiply, or divide functions on the 2 #'s
}

// update display

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


// clear eventListener
clearBtnHTML.addEventListener('click', () => {
    console.log(`button is ${clearBtnHTML.value}`);
    displayHTML.textContent = "";
});

// number eventListeners
zeroBtnHTML.addEventListener('click', () => {
    console.log(`button is ${zeroBtnHTML.value}`);
    displayHTML.textContent = zeroBtnHTML.value;
});
oneBtnHTML.addEventListener('click', () => {
    console.log(`button is ${oneBtnHTML.value}`);
    displayHTML.textContent = oneBtnHTML.value;
});
twoBtnHTML.addEventListener('click', () => {
    console.log(`button is ${twoBtnHTML.value}`);
    displayHTML.textContent = twoBtnHTML.value;
});
threeBtnHTML.addEventListener('click', () => {
    console.log(`button is ${threeBtnHTML.value}`);
    displayHTML.textContent = threeBtnHTML.value;
});
fourBtnHTML.addEventListener('click', () => {
    console.log(`button is ${fourBtnHTML.value}`);
    displayHTML.textContent = fourBtnHTML.value;
});
fiveBtnHTML.addEventListener('click', () => {
    console.log(`button is ${fiveBtnHTML.value}`);
    displayHTML.textContent = fiveBtnHTML.value;
});
sixBtnHTML.addEventListener('click', () => {
    console.log(`button is ${sixBtnHTML.value}`);
    displayHTML.textContent = sixBtnHTML.value;
});
sevenBtnHTML.addEventListener('click', () => {
    console.log(`button is ${sevenBtnHTML.value}`);
    displayHTML.textContent = sevenBtnHTML.value;
});
eightBtnHTML.addEventListener('click', () => {
    console.log(`button is ${eightBtnHTML.value}`);
    displayHTML.textContent = eightBtnHTML.value;
});
nineBtnHTML.addEventListener('click', () => {
    console.log(`button is ${nineBtnHTML.value}`);
    displayHTML.textContent = nineBtnHTML.value;
});

decimalBtnHTML.addEventListener('click', () => {
    console.log(`button is ${decimalBtnHTML.value}`);
});

// maths eventListeners
addBtnHTML.addEventListener('click', () => {
    console.log(`button is ${addBtnHTML.value}`);
    add();
});
subtractBtnHTML.addEventListener('click', () => {
    console.log(`button is ${subtractBtnHTML.value}`);
    subtract();
});
multiplyBtnHTML.addEventListener('click', () => {
    console.log(`button is ${multiplyBtnHTML.value}`);
    multiply();
});
divideBtnHTML.addEventListener('click', () => {
    console.log(`button is ${divideBtnHTML.value}`);
    divide();
});
powerBtnHTML.addEventListener('click', () => {
    console.log(`button is ${powerBtnHTML.value}`);
    power();
});
equalBtnHTML.addEventListener('click', () => {
    console.log(`button is ${equalBtnHTML.value}`);
    equal();
});