function roll() {
  // Create a random number between 1 and 6 (use + 1 to start the count at 1)
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Use the random number to change the <img> name
  var randomDiceImage1 = "dice" + randomNumber1 + ".png";
  var randomDiceImage2 = "dice" + randomNumber2 + ".png";

  // Create a variable to change the image source to match the name with the dice number
  var randomImageSource1 = "images/" + randomDiceImage1;
  var randomImageSource2 = "images/" + randomDiceImage2;

  // Select the element and change the source attribute for both images, use method setAttribute()
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource1);

  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomImageSource2);

  // Change the text in the h1 to show which user one or if there was a draw depending on the dice values.
  // use an if statement, querySelector() and the innerHTML property to change the text in the h1
  // If player 1 wins
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  }
  // If player 2 wins
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  }
  // If both roll the same number
  else if (randomNumber2 === randomNumber1) {
    document.querySelector("h1").innerHTML = "Tie!";
  }
}


//Event Listener
document.querySelector("#roll-btn").addEventListener("click", (e) => {
    e.preventDefault();
    roll();
  });
