function calculateLCM() {
    var temp;
    var time;
    var firstValue = document.querySelector(".firstValue").value;
    var secondValue = document.querySelector(".secondValue").value;
    var x = firstValue;
    var y = secondValue;
    var multiple = firstValue * secondValue;
    while (secondValue != 0) {
        temp = secondValue;
        secondValue = firstValue % secondValue;
        firstValue = temp;
    }
    time = multiple / firstValue;
    var firstCount = time / x;
    var secondCount = time / y; 
    document.querySelector(".lcm").innerText = "LCM  "+time;
    document.querySelector(".first").innerText = "First Round count  "+ firstCount;
    document.querySelector(".second").innerText = "Second Round count  "+ secondCount;
    console.log("First round count ", time / x);
    console.log("Second round count", time / y);
    console.log("Time ", time);
    return firstValue;

}