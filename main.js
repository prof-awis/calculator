// *** Write your code here***
//clear the display
function empty() {
    document.querySelector("#displayResult").value = ''

}
//delete last digit

function deletes() {
    let del = document.getElementById("displayResult")
    del.value = del.value.substring(0, del.value.length - 1)
}

//calculate
function compute() {
    let num = document.getElementById("displayResult").value
    let calc = eval(num)
    document.getElementById("displayResult").value = calc
}

//display
function updateDisplay(value) {
    document.getElementById("displayResult").value += value
}