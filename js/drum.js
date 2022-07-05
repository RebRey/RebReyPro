// Detects Button Clicks

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    // call makeSound, passing in buttonInnerHTML 
    makeSound(buttonInnerHTML);
  });
}

// Detects keyboard presses
// Add an event listener to the entire document, so that the entire web page 
// starts listening for keyboard strokes
// When that function gets triggered, add an option to pass in a parameter (event or e)/
// This allows you to tap into the event that triggered the event listener.
document.addEventListener("keydown", function(event){
  
  // Call the makeSound function and pass in event.key
  // We can pass functions as parameters and have functions as callbacks which include
  // things that we get back after the event has happened
  makeSound(event.key)
});

// Create a new function called makeSound and its going to take a single parameter
// which is going to be the key. 
function makeSound(key){
   // Use switch statement that checks to see which key was clicked on and pressed 
    // responds by playing the relevant sound
    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
      default: console.log(buttonInnerHTML);
    }
}