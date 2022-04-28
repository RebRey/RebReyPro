// EVEN RANGE FUNCTION
function printEvenNums() {
  //get the start and end range from user
  var start = parseInt(document.getElementById("even-min-value").value);
  var end = parseInt(document.getElementById("even-max-value").value);
  var evenNums = "Even Numbers:<br>";

  for (i = start; i <= end; i++) {
    // let's divide the value by 2
    // if the reminder is zero then it's an Even number
    if (i % 2 == 0) {
      evenNums += i + " ";
    }
  }
  //print the values
  document.getElementById("even-result").innerHTML = evenNums;
}

//Event Listener
document.querySelector("#print-even-nums").addEventListener("click", () => {
  printEvenNums();
});

// Reset Even Numbers
document.querySelector("#reset-even-nums").addEventListener("click", () => {
  resetEven();
});

resetEven = () => {
    document.querySelector("#even-result").textContent = "";
    document.querySelector("#even-min-value").value = 1;
    document.querySelector("#even-max-value").value = 20;
}

// ODD RANGE FUNCTION
function printOddNums() {
  //get the start and end range from user
  var start = parseInt(document.getElementById("odd-min-value").value);
  var end = parseInt(document.getElementById("odd-max-value").value);
  var oddNums = "Odd Numbers:<br>";

  for (i = start; i <= end; i++) {
    // let's divide the value by 2
    // if the reminder is NOT zero then it's an odd number
    if (i % 2 !== 0) {
      oddNums += i + " ";
    }
  }
  //print the values
  document.getElementById("odd-result").innerHTML = oddNums;
}

// Odd Event Listener
document.querySelector("#print-odd-nums").addEventListener("click", () => {
  printOddNums();
});

// Reset Odd Numbers
document.querySelector("#reset-odd-nums").addEventListener("click", () => {
  resetOdd();
});

resetOdd = () => {
    document.querySelector("#odd-result").textContent = "";
    document.querySelector("#odd-min-value").value = 1;
    document.querySelector("#odd-max-value").value = 20;
}

// Even or Odd Function
function printOddOrEven() {
  // Get input from user
  var num = parseInt(document.getElementById("even-or-odd-user-input").value);
  if (num % 2 == 0)
    document.getElementById("even-odd-result").innerHTML = "The number " + num + " is an even number.";
  else document.getElementById("even-odd-result").innerHTML = "The number " + num + " is an odd number.";
}
// Even or Odd Event Listener
document.querySelector("#print-odd-or-even").addEventListener("click", () => {
  printOddOrEven();
});

// Reset Even and Odd Numbers
document.querySelector("#reset-even-odd-nums").addEventListener("click", () => {
  resetEvenOdd();
});

resetEvenOdd = () => {
    document.querySelector("#even-odd-result").textContent = "";
    document.querySelector("#even-or-odd-user-input").value = 1;
}