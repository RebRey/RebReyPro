function love() {
  var name1 = document.getElementById("NameOne").value;
  var name2 = document.getElementById("NameTwo").value;
  if (name1.length <= 0) {
    alert("Please enter your name!");
  }
  if (name2.length <= 0) {
    alert("Please your crush's name!");
  } else {
    var random = Math.floor(Math.random() * 100);
    document.getElementById("print").innerHTML =
      name1 + " and " + name2 + " have a love score of " + random + "%.";
  }
  if (random <= 20) {
    document.getElementById("statement").innerHTML = "Enemies";
  } else if (random <= 40) {
    document.getElementById("statement").innerHTML = "Just Friends";
  } else if (random <= 60) {
    document.getElementById("statement").innerHTML = "Opposites Attract";
  } else if (random <= 80) {
    document.getElementById("statement").innerHTML = "Good Match";
  } else if (random <= 100) {
    document.getElementById("statement").innerHTML = "Soulmates";
  }
}
//Event Listener
document.querySelector("#calculateLoveBtn").addEventListener("click", () => {
  love();
});
