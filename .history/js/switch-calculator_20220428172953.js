const num1elementbox = document.getElementById("input1");
const num1 = num1elementbox.value; 

const num2elementbox = document.getElementById("input2");
const num2 = num2elementbox.value;

const operatorelementbox = document.getElementById("input3");
const operator = operatorelementbox.value;
console.log(operator)
const finalOutput = document.getElementById("output");
let answer; 

function sum() {
    
switch(operator) {
    
        case "+" :
        answer = num1 + num2;
        finalOutput.innerHTML = answer;
        console.log(answer)
        alert('Hello!');
        console.log(num1)
        console.log(num2)
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