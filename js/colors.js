var colors = ["Red","Blue","Yellow","Green","Orange", "Cyan","DodgerBlue", "Violet", "Navy", "Purple", "YellowGreen", "OrangeRed", "SlateBlue", "Salmon", "Crimson", "HotPink", "Magenta"];
var index = 0;

document.querySelector("#submit").addEventListener("click", () => {
  if(index > colors.length - 1)
    index = 0;
  document.body.style.backgroundColor = colors[index++];  
});

var divIndex = 0;
function changeColors() {
  var colors = ["red", "blue", "orange", "yellow", "green", "purple"];

  document.getElementsByClassName("demo-area")[0].style.background =
    colors[divIndex++];

  if (divIndex > colors.length - 1) divIndex = 0;
}