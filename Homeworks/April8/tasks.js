// Task 1
console.log("Task 1");
alert("Hello World!");
console.log("My first JavaScript assignment");
document.getElementById("output").textContent = "I just modified this element with JavaScript";

// Task 2
console.log("Task 2");
let myName = "Sanjana";
let myAge = 19;
let myNumber = 1;
console.log("My name is " + myName + ", I am " + myAge + " years old, and my favorite number is " + myNumber + ".");

// Task 3
console.log("Task 3");
function calculate(num1, num2) {
    console.log("For numbers " + num1 + " and " + num2 + ":");
    console.log("Addition: " + (num1 + num2));
    console.log("Subtraction: " + (num1 - num2));
    console.log("Multiplication: " + (num1 * num2));
    console.log("Division: " + (num1 / num2));
}
calculate(10, 5);
calculate(7, 3);
calculate(20, 4);

// Task 4
function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    alert(fahrenheit + "°F is " + celsius + "°C");
}
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    alert(celsius + "°C is " + fahrenheit + "°F");
}

// Task 5
function manipulateString(input) {
    let upper = input.toUpperCase();
    let length = input.length;
    let message = "Uppercase: " + upper + "\nNumber of characters: " + length;
    alert(message);
}
manipulateString("I am doing the assignment today!");

// Task 6
var isLightOn = true;
function toggleLight() {
    const statusElement = document.getElementById("lightStatus");

    if (isLightOn) {
        statusElement.textContent = "Light is OFF";
        isLightOn = false;
    } else {
        statusElement.textContent = "Light is ON";
        isLightOn = true;
    }
}

// Task 7
function countByTwo(max) {
    const outputElement = document.getElementById("countOutput");
    let result = "";
    for (let i = 0; i <= max; i += 2) {
        result += i + "\n";
    }
    outputElement.textContent = result;
}
