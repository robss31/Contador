var currentNumberWrapper = document.getElementById("currenteNumber")
var currentNumber=0;

function increment(){
    currenteNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currenteNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}