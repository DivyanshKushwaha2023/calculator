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

let display = document.querySelector('#display')
let clear = document.querySelector('#clear');
clear.addEventListener('click', () => clearIt());

function clearIt(){
    display.textContent = null;
}


let numbers = document.querySelectorAll('.numbers');
let signs = document.querySelectorAll('.sign');

function displayIt(){
    let strArr = [];    
    for (let i = 0; i < numbers.length; i++){
        numbers[i].addEventListener('click', () =>{
            display.innerHTML += numbers[i].value;
            strArr.push(numbers[i].value);
        });
    };

    for(let i = 0; i < signs.length; i++){
        signs[i].addEventListener('click', () =>{
            clearIt();
            storeNum(strArr);
            strArr = [];
            console.log(numberArr[0]);
            
        })
    }
};
displayIt();

let numberArr = [];//store numbers that are typed at index 0 and will be changed every time a sign button is clicked

function storeNum (arr){
    let digit = '';
    for(let i = 0; i < arr.length; i++){
        digit += arr[i];
    }
    numberArr[0] = parseInt(digit);
}