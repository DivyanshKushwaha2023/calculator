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


function operate (firstNum, operator, secondNum){
    if (operator == '+') return add(firstNum, secondNum);
    if (operator == '-') return subtract(firstNum, secondNum);
    if (operator == '*') return multiply(firstNum, secondNum);
    if (operator == '/') return divide(firstNum, secondNum);
};

let firstNumber = null;
let secondNumber = null;
let sign = [];

let display = document.querySelector('#display')
let clear = document.querySelector('#clear');
clear.addEventListener('click', () => clearIt());

function clearIt(){
    display.textContent = null;
}


let numbers = document.querySelectorAll('.numbers');
let signs = document.querySelectorAll('.sign');
let strArr = [];

function displayIt(){
    
    for (let i = 0; i < numbers.length; i++){
        numbers[i].addEventListener('click', () =>{
            display.innerHTML += numbers[i].value;
            strArr.push(numbers[i].value);

            calculate(); 

        });
    };

    for(let i = 0; i < signs.length; i++){
        signs[i].addEventListener('click', () =>{
            clearIt();
            storeNum();
            strArr = [];
            getNum();

            sign[0] = signs[i].value; 
        })
    }
};
displayIt();

let numberArr = [];//store numbers that are typed at index 0 and will be changed every time a sign button is clicked

function storeNum (){
    let digit = '';
    for(let i = 0; i < strArr.length; i++){
        digit += strArr[i];
    }
    numberArr[0] = parseInt(digit);
    digit = '';
}

//coverts numberArr[0] numbers into input values for calculation
function getNum() {
    if(firstNumber == null && result == null){
        firstNumber = numberArr[0];
    } else if(result != null){
        firstNumber = result;
        secondNumber = numberArr[0];
    } else{
        secondNumber = numberArr[0];
    }
}

let result = null;

function calculate(){
    storeNum();
    getNum();
    if (firstNumber != null && secondNumber != null){
        result = operate(firstNumber, sign[0], secondNumber);
    };
}


let equate = document.querySelector('#equals')
equate.addEventListener('click', () =>{
    equal();
});

function equal(){
    display.textContent = result;
}