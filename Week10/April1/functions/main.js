function sumValues(a, b) {
    var sum = a + b;
    console.log("Your total charges are: " + sum + ".");
    document.getElementById("sumOutput").innerHTML = "Your total charges are: " + sum + ".";
}

var isOn = true;
function switchOff(){
    if (isOn){
        alert("The light is on.");
        isOn = false;
    }
    else{
        alert("The light is off.");
        isOn = true;
    }
}