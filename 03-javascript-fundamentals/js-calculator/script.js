
let primaryNumber = "";
let operator = "";
let secondaryNumber = "";
let storedNumber = 0;
let equals = 0;

const acButton = document.querySelectorAll('.js-acBtn');
const functionButton = document.querySelectorAll('.js-funcBtn');
const numberButton = document.querySelectorAll('.js-numBtn');
const decimalButton = document.querySelectorAll('.js-deciBtn');
const equalsButton = document.querySelectorAll('.js-equalsBtn');
const calculatorDisplay = document.querySelectorAll('.js-display');

const updateDisplay = (number) => calculatorDisplay.innerHTML = number;

numberButton.forEach(numBtn => {
    numBtn.addEventListener('click', (event) => {
        (!primaryNumber) ? primaryNumber = event.target.innerHTML : primaryNumber += event.target.innerHTML;
    })
})


functionButton.forEach(funcBtn => {
    funcBtn.addEventListener('click', (event) => {
        operator = event.target.value;
        if (primaryNumber) {
            storedNumber = parseFloat(primaryNumber);
            primaryNumber = "";
        }
    })
})




