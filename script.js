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


let display = document.querySelector('#display');

function showOnDisplay(){
    let signs = document.querySelectorAll('.sign');
    for(let i = 0; i < signs.length; i++){
        let sign;
        signs[i].addEventListener('click', () => {display.textContent = signs[i].value;
        return sign = signs[i].value})
    }

    let numbers = document.querySelectorAll('.numbers');
    for (let i = 0; i < numbers.length; i++){
        let number;
        numbers[i].addEventListener('click', () => {display.textContent = numbers[i].value;
        return number = numbers[i].value})
    }
};

showOnDisplay();