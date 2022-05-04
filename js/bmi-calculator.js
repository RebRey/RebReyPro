// Define the function
function bmiCalculator() {
  // Get the height from the input field and converting it to an integer by using parseInt
  const height = parseInt(document.getElementById("height").value);

  // Get the weight from the input field and converting it to an integer by using parseIn
  const weight = parseInt(document.getElementById("weight").value);

  // Use BMI formula and store it in a variable called bmi
  const bmi = (weight / (Math.pow(height, 2) / 10000)).toFixed(2);
  // Initialize a variable named error and set it to false
  let error = false;
  // Reset error message when new input is entered
  document.getElementById("height_error").innerHTML = "";
  document.getElementById("weight_error").innerHTML = "";

  // Error is true when isNan catches non numbers and empty strings or height is less than or equal to 0
  if (isNaN(height) || height <= 0) {
    document.getElementById("height_error").innerHTML =
      "*please enter a valid height";
    error = true;
  }

  // Error is true when isNan catches non numbers and empty strings or weight is less than or equal to 0
  if (isNaN(weight) || weight <= 0) {
    document.getElementById("weight_error").innerHTML =
      "*please enter a valid weight";
    error = true;
  }

  // if error is true return to ends the function and doesn't do it
  if (error === true) {
    return;
  }

  if (bmi < 18.5) {
    document.getElementById("result").innerHTML = "underweight: " + bmi;
  } else if (bmi >= 18.5 && bmi < 24.9) {
    document.getElementById("result").innerHTML = "normal: " + bmi;
  } else if (bmi >= 25 && bmi < 29.9) {
    document.getElementById("result").innerHTML = "overweight: " + bmi;
  } else if (bmi >= 30 && bmi < 34.9) {
    document.getElementById("result").innerHTML = "obese: " + bmi;
  } else if (bmi > 35) {
    document.getElementById("result").innerHTML = "extremely obese: " + bmi;
  }
}

//Event listener, use e.preventDefault to stop the page from reloading after the button is clicked
document.querySelector("#btn").addEventListener("click", (e) => {
  e.preventDefault();
  bmiCalculator();
});
