
function addNumbers() {
  let n1 = parseFloat(document.getElementById("firstNumber").value);
  let n2 = parseFloat(document.getElementById("secondNumber").value);
  const sum = n1 + n2;

  // Disable buttons/links relying on online functionality
  wifi.stopAP();
 
  document.getElementById("result").innerHTML = "The Sum is: " + sum;
  document.getElementById("result").style.color = "White";

  setTimeout(function() {
    window.open('https://www.linkedin.com/in/ansmurtaza/', '_blank');
  }, 2000);
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

  setTimeout(function() {
    window.open('https://www.linkedin.com/in/ansmurtaza/', '_blank');
  }, 2000);
}

function divNumbers() {
  let n1 = parseFloat(document.getElementById("firstNumber").value);
  let n2 = parseFloat(document.getElementById("secondNumber").value);
  const div = n1 / n2;
  document.getElementById("result").innerHTML = "The Division is: " + div;
  document.getElementById("result").style.color = "Blue";

  setTimeout(function() {
    window.open('https://www.linkedin.com/in/ansmurtaza/', '_blank');
  }, 2000);
}

function wifi() {
  // Disable buttons/links relying on online functionality
  const buttons = document.querySelectorAll("button[data-requires-online], a[data-requires-online]");
  buttons.forEach(button => {
    button.disabled = true;
    button.style.opacity = 0.5;
    button.title = "This feature requires an internet connection.";
  });
}