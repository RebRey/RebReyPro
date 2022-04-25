var count = 0;

document.querySelector("#increase").addEventListener("click", () => {
  changeCount(1);
});

document.querySelector("#decrease").addEventListener("click", () => {
  changeCount(-1);
});

document.querySelector("#reset").addEventListener("click", () => {
  resetCount();
});

resetCount = () => {
    count = 0;
    document.querySelector("#count").textContent = count;
}

changeCount = (number) => {
  count += number;
  document.querySelector("#count").textContent = count;
};





// let number = 0;
// function increase() {
//     number++;
//     document.getElementById("increase").innerHTML = number;
// }
// function decrease() {
//     number--;
//     document.getElementById("decrease").innerHTML = number;
// }
// function reset() {
//     let number = 0;
//     document.getElementById("reset").innerHTML = number;
// }
