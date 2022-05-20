const updateDisplay = (number) => displayField.innerHTML = number;

let primaryNumber = "";
let operator = "";
let secondaryNumber = "";
let storeNumber = 0;
let equals = 0;

const acButton = document.querySelectorAll('.js-acBtn');
const functionButton = document.querySelectorAll('.js-funcBtn');
const numberButton = document.querySelectorAll('.js-numBtn');
const decimalButton = document.querySelectorAll('.js-deciBtn');
const equalsButton = document.querySelectorAll('.js-equalsBtn');
const calculatorDisplay = document.querySelectorAll('.js-display');


