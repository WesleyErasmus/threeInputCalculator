const num1 = document.getElementById("input1").value;
const num2 = document.getElementById("input2").value;
const operator = document.getElementById("input3").value;
const output = document.getElementById("output").value;
let answer; 

function sum(x) {
switch (x) {
        case "+" :
        answer = +num1 + +num2;
        document.getElementById("output").innerHTML = answer;
        break;
        case "-" :
        answer = num1 - num2;
        document.getElementById("output").innerHTML = answer;
        break;
        case "*" :
        answer = num1 * num2;
        document.getElementById("output").innerHTML = answer;
        break;
        case "/" :
        answer = num1 / num2;
        document.getElementById("output").innerHTML = answer;
        console.log(answer);
    }
}

// program for a simple calculator
let result;

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
         result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case '-':
         result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
         result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
         result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}

    // function sum() {
    //     const num1 = document.getElementById("input1").value;
    //     const num2 = document.getElementById("input2").value;
    //     const operator = document.getElementById("input3").value;
    //     const output = document.getElementById("output").value;
    //       let answer; 
    //       document.getElementById("output").value;
    //       if (operator == '+') {
    //         answer = +num1 + +num2;
    //         document.getElementById("output").innerHTML = answer;
    //       } else if (operator == '-') {
    //         answer = num1 - num2;
    //         document.getElementById("output").innerHTML = answer;
    //       } else if (operator == '*') {
    //         answer = num1 * num2;
    //         document.getElementById("output").innerHTML = answer;
    //       } else {
    //         answer = num1 / num2;
    //         document.getElementById("output").innerHTML = answer;
    //       }console.log(answer);
    //     }