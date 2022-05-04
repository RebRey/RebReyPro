function fizzBuzz(){
    var num=document.getElementById("number-input").value;
    if (num % 3 == 0 && num % 5 == 0){
        document.getElementById("fizz-buzz-result").innerHTML = "FizzBuzz";
    }
    else if (num % 3 == 0) {
        document.getElementById("fizz-buzz-result").innerHTML = "Fizz";
    }
    else if (num % 5 == 0) {
        document.getElementById("fizz-buzz-result").innerHTML = "Buzz";
    }
    else {
        document.getElementById("fizz-buzz-result").innerHTML = num;
    }
}

//Event listener, use e.preventDefault to stop the page from reloading after the button is clicked
document.querySelector("#check-fizz-buzz").addEventListener("click", (e) => {
    e.preventDefault();
    fizzBuzz();
});