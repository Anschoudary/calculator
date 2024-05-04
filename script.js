
function addNumbers() {
  let n1 = parseFloat(document.getElementById("firstNumber").value);
  let n2 = parseFloat(document.getElementById("secondNumber").value);
  const sum = n1 + n2;
  document.getElementById("result").innerHTML = "The Sum is: " + sum;
  document.getElementById("result").style.color = "White";
}

function subNumbers() {
  let n1 = parseFloat(document.getElementById("firstNumber").value);
  let n2 = parseFloat(document.getElementById("secondNumber").value);
  const sub = n1 - n2;
  document.getElementById("result").innerHTML = "The Subtract is: " + sub;
  document.getElementById("result").style.color = "Red";
}

function mulNumbers() {
  let n1 = parseFloat(document.getElementById("firstNumber").value);
  let n2 = parseFloat(document.getElementById("secondNumber").value);
  const mul = n1 * n2;
  document.getElementById("result").innerHTML = "The Multiplication is: " + mul;
  document.getElementById("result").style.color = "Green";
}

function divNumbers() {
  let n1 = parseFloat(document.getElementById("firstNumber").value);
  let n2 = parseFloat(document.getElementById("secondNumber").value);
  const div = n1 / n2;
  document.getElementById("result").innerHTML = "The Division is: " + div;
  document.getElementById("result").style.color = "Blue";
}