const num1elementbox = document.getElementById("input1");
const num1 = num1elementbox.value; 

const num2elementbox = document.getElementById("input2");
const num2 = num2elementbox.value;

const operatorelementbox = document.getElementById("input3");
const operator = operatorelementbox.value;

const finalOutput = document.getElementById("output");
console.log(finalOutput);
console.log(finalOutput.value);
let answer; 

function sum() {
    console.log(num1elementbox);
console.log(num1elementbox.value);
switch(operator) {
    
        case "+" :
        answer = num1 + num2;
        finalOutput.innerHTML = answer;
        break;
        case "-" :
        answer = num1 - num2;
        finalOutput.innerHTML = answer;
        break;
        case "*" :
        answer = num1 * num2;
        finalOutput.innerHTML = answer;
        break;
        case "/" :
        answer = num1 / num2;
        finalOutput.innerHTML = answer;
        break;
        default :
        finalOutput.innerHTML = answer;
        console.log(answer);
        break;
    }
}