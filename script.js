function add(a, b) {
    return a + b;
};

function subtract (a, b){
    return a - b;
};

function multiply (a, b){
    return a * b;
};

function divide (a, b){
    return a / b;
};

let firstNum;
let secondNum;
let operator;

function operate (firstNum, operator, secondNum){
    if (operator == '+') return add(firstNum, secondNum);
    if (operator == '-') return subtract(firstNum, secondNum);
    if (operator == '*') return multiply(firstNum, secondNum);
    if (operator == '/') return divide(firstNum, secondNum);
};