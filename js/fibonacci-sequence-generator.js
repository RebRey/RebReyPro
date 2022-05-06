function fibonacciGenerator() {
  var num = parseInt(document.getElementById("number-input").value);
  var fibonacciOutput = [];

  // Check if n is equal to 1
  if (num === 1) {
    fibonacciOutput = [0];
  }
  // If n is not equal to 1 check if n is equal to 2.
  else if (num === 2) {
    fibonacciOutput = [0, 1];
  }
  // If n is not equal to 1 or 2, then sum the last two values in the output.
  else {
    fibonacciOutput = [0, 1];

    // Check if the num entered is equal to the number of items in the output.
    for (var i = 2; i < num; i++) {
      fibonacciOutput.push(fibonacciOutput[fibonacciOutput.length -2] + fibonacciOutput[fibonacciOutput.length - 1]);
    }
  }
  document.getElementById("fibonacci-result").innerHTML = fibonacciOutput.join(", ");
}

//Event listener, use e.preventDefault to stop the page from reloading after the button is clicked
document.querySelector("#generate-fibonacci").addEventListener("click", (e) => {
  e.preventDefault();
  fibonacciGenerator();
});
