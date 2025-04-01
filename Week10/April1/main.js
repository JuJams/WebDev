var hi = "Hi there!";
var u;
let hello = "Hello World!";
const bye = "Bye!";
let carName = "Volvo ";
let year, color, model;
year = 2019;
color = "red";
model = "XC60";
let math = 5+2;
let truey = true;
let falsy = false;
let namy = "Sanjana";
let age = 19;
let canCode = true;

// Write a heaidng that uses carName
document.getElementById("car").innerHTML = carName + " is a nice car." + " It is a " + color + " " + model + " from " + year + ".";

// Write a statement with my name and details
document.getElementById("name").innerHTML = "Hello, my name is " + namy + ", I am " + age + " years old and I can code JavaScript: " + canCode + ".";

// Write an alert that says "Hello World"
document.getElementById("myButton").onclick = function() {
    window.alert("Hello World");
}

// Console log "Hello World"
console.log("Hello World");

// Change html element
document.getElementById("demo").innerHTML = "Hello Dolly.";

function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello Dolly!";
    document.getElementById("demo2").innerHTML = "How are you?";
}

// Write a statement that adds 5 + 6
document.getElementById("math").innerHTML = "The value of math is " + math + " " + truey;




   

