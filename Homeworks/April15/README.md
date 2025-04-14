# Loops - Active Notes

## What are loops?

Loops are a way to execute the same block of code multiple times until a condition is met.

## Types of Loops in JavaScript

### 1. `for` loop
The basic tool for looping through a collection 
Used when you know how many times you want to run a block of code.
```javascript
for (initialization; condition; final-expression) {}
```
```javascript
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

### 2. map()
To do something to each item in a collection and create a new collection containing the changed items.

### 3. filter()
To test each item in a collection, and create a new collection containing only the ithems that match. Returns a boolean.

### 4. `while` loop
Used when you don't know how many times the loop should run.

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### 5. `do...while` loop
Runs at least once, even if the condition is false initially.
Syntax:
```javascript
initializer
while (condition) {
    // Code to run 
    final-expression
}
```

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

## Breaking and Continuing

- `break` exits the loop completely.
- `continue` skips the current iteration and moves to the next one.

Example for break: One example is the contact name searching on the website.
The math nodule is used for this (Math.sqrt(i) and Math.floor()).

Example for continue: One example is generating integer squares.

Example for both:

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 3) continue;
  if (i === 7) break;
  console.log(i);
}
```

## Active Learning Prompts

### 1. Launch Countdown

```javascript
const output = document.querySelector('.output');
output.textContent = "";

let i = 10;

while (i >= 0) {
  const para = document.createElement('p');

  if (i === 10) {
    para.textContent = "Countdown" + i;
  } else if (i === 0) {
    para.textContent = 'Blast off!';
  } else {
    para.textContent = i;
  }

  output.appendChild(para);
  i--;
}
```

### 2. Filling in a Guest List

```javascript
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (const person of people) {
  if (person === 'Phil' || person === 'Lola') {
    refused.textContent += `${person}, `;
  } else {
    admitted.textContent += `${person}, `;
  }
}

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';
```


