function sum() {
    const num1 = document.getElementById("input1").value;
    const num2 = document.getElementById("input2").value;
    const operator = document.getElementById("input3").value;
    const output = document.getElementById("output").value;
      let answer; 
      document.getElementById("output").value;
      if (operator == '+') {
        answer = +num1 + +num2;
        document.getElementById("output").innerHTML = answer;
      } else if (operator == '-') {
        answer = num1 - num2;
        document.getElementById("output").innerHTML = answer;
      } else if (operator == '*') {
        answer = num1 * num2;
        document.getElementById("output").innerHTML = answer;
      } else {
        answer = num1 / num2;
        document.getElementById("output").innerHTML = answer;
      }console.log(answer);
    }