function checkLeapYear(){
    var leapYear=document.getElementById("year-input").value;
//Check if year is divisible by 4 and year is not divisible by 100 or it is divisible by 400.
    if((leapYear % 4 == 0) && (leapYear % 100 != 0) || (leapYear % 400 == 0)){
        document.getElementById("leap-year-result").innerHTML = leapYear + " is a leap year.";
    }
    else{
        document.getElementById("leap-year-result").innerHTML = leapYear + " is not a leap year.";
    }

}

//Event listener, use e.preventDefault to stop the page from reloading after the button is clicked
document.querySelector("#check-leap-year").addEventListener("click", (e) => {
    e.preventDefault();
    checkLeapYear();
});